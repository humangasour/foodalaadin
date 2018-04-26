(function($) {
    "use strict";
    var $window = $(window);
    var $body = $('body');
    var $document = $(document);
    window.azh = $.extend({}, window.azh);
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() {
            firstTop = $this.offset().top;
        });
        if (outerHeight) {
            getHeight = function($jqo) {
                return $jqo.outerHeight(true);
            };
        } else {
            getHeight = function($jqo) {
                return $jqo.height();
            };
        }
        if (arguments.length < 1 || xpos === null) {
            xpos = "50%";
        }
        if (arguments.length < 2 || speedFactor === null) {
            speedFactor = 0.1;
        }
        if (arguments.length < 3 || outerHeight === null) {
            outerHeight = true;
        }
        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + $window.height()) {
                    return;
                }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }
        $window.on('scroll', update);
        $window.on('resize', update);
        update();
    };
    $.fn.equalizeHeights = function() {
        var max = Math.max.apply(this, $(this).map(function(i, e) {
            return $(e).height();
        }).get());
        if (max > 0)
            this.height(max);
        return max;
    };
    $.fn.equalizeWidths = function() {
        var max = Math.max.apply(this, $(this).map(function(i, e) {
            return $(e).width();
        }).get());
        if (max > 0)
            this.width(max);
        return max;
    };
    function fullWidthSection($wrapper) {
        $wrapper.find('[data-full-width="true"]').each(function(key, item) {
            var $el = $(this);
            $el.removeClass('az-full-width');
            var fixed = false;
            $el.parents().andSelf().each(function() {
                if ($(this).css('position') === 'fixed') {
                    fixed = true;
                    return false;
                }
            });
            if (!fixed) {
                var $el_full = $("<div></div>");
                $el.after($el_full);
                $el.css({
                    left: 0,
                    width: 0
                });
                var el_margin_left = parseInt($el.css("margin-left"), 10);
                var el_margin_right = parseInt($el.css("margin-right"), 10);
                var offset = 0 - $el_full.offset().left - el_margin_left;
                var width = $body.prop("clientWidth");
                var container_width = $el_full.width();
                if ($el.css({
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: width
                }), !$el.data("stretch-content")) {
                    var padding = -1 * offset;
                    if (padding < 0) {
                        padding = 0;
                    }
                    var paddingRight = width - padding - container_width + el_margin_left + el_margin_right;
                    if (paddingRight < 0) {
                        paddingRight = 0;
                    }
                    $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    });
                }
                $el.addClass('az-full-width');
                $el.animate({
                    opacity: 1
                }, 400);
                $el.triggerHandler("az-full-width", {
                    container_width: container_width
                });
                $window.trigger("az-full-width", {
                    element: $el,
                    container_width: container_width
                });
                $el.find('.az-container').css({
                    'padding-right': '0',
                    'padding-left': '0',
                    'max-width': container_width
                });
                $el_full.remove();
            }
        });
        $wrapper.find('[data-full-width="false"]').each(function(key, item) {
            var $el = $(this);
            var $el_full = $("<div></div>");
            $el.after($el_full);
            var container_width = $el_full.width();
            $el.find('.az-container').css('width', container_width);
            $el_full.remove();
            $el.css({
                visibility: "visible",
                opacity: 1
            });
        });
    }
    function auto_rescale($wrapper) {
        if (!customize) {
            setTimeout(function() {
                $wrapper.find('.az-auto-rescale[data-width][data-height]:not(.az-full-height)').each(function() {
                    function rescale($container) {
                        $container.css({
                            'margin': 0,
                            'width': $container.data('width') + 'px',
                            'transform': 'scale(' + $container.parent().width() / $container.data('width') + ')',
                            'transform-origin': 'top left'
                        });
                        $container.parent().css({
                            'height': ($container.height() * $container.parent().width() / $container.data('width')) + 'px'
                        });
                    }
                    var $container = $(this);
                    if ($container.is('.az-auto-upscale') || $container.parent().width() < $container.data('width')) {
                        if ($container.is(':visible')) {
                            rescale($container);
                        } else {
                            var intervalID = setInterval(function() {
                                if ($container.is(':visible')) {
                                    rescale($container);
                                    clearInterval(intervalID);
                                }
                            }, 100);
                        }
                    }
                });
            }, 0);
        }
    }
    function loadScript(path, callback) {
        var done = false;
        var scr = document.createElement('script');
        scr.onload = handleLoad;
        scr.onreadystatechange = handleReadyStateChange;
        scr.onerror = handleError;
        scr.src = path;
        document.body.appendChild(scr);
        function handleLoad() {
            if (!done) {
                done = true;
                callback(path, "ok");
            }
        }
        function handleReadyStateChange() {
            var state;
            if (!done) {
                state = scr.readyState;
                if (state === "complete") {
                    handleLoad();
                }
            }
        }
        function handleError() {
            if (!done) {
                done = true;
                callback(path, "error");
            }
        }
    }
    function make_css_rule(selector, styles) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = selector + ' { ' + styles + ' }';
        document.getElementsByTagName('head')[0].appendChild(style);
        return style;
    }
    function set_styles_important(styles) {
        styles = styles.split(';');
        $(styles).each(function(index) {
            if ($.trim(this) && this.indexOf('!important') < 0) {
                styles[index] = this + ' !important';
            }
        });
        styles = styles.join(';');
        return styles;
    }
    azh.refresh_hover_css_rules = function($wrapper) {
        $wrapper.find('[data-hover]').andSelf().filter('[data-hover]').each(function() {
            var $hover = $(this);
            if ($hover.attr('data-hover')) {
                $hover.css('transition-property', 'all');
                var hover_style = set_styles_important($hover.attr('data-hover'));
                var id = makeid();
                $hover.attr('data-hid', id);
                if ($hover.data('hover-rules')) {
                    $hover.data('hover-rules').remove();
                }
                if ($hover.is('.az-svg')) {
                    $hover = $hover.find('> svg > *');
                    $hover.data('hover-rules', make_css_rule('[data-hid="' + id + '"] > svg > *:hover', hover_style));
                } else {
                    $hover.data('hover-rules', make_css_rule('[data-hid="' + id + '"]:hover', hover_style));
                }
            }
        });
    };
    azh.refresh_responsive_css_rules = function($wrapper) {
        for (var prefix in azh.device_prefixes) {
            var data = 'responsive-' + prefix;
            $wrapper.find('[data-' + data + ']').andSelf().filter('[data-' + data + ']').each(function() {
                var $responsive = $(this);
                if ($responsive.attr('data-' + data)) {
                    var responsive_style = set_styles_important($responsive.attr('data-' + data));
                    var id = makeid();
                    $responsive.attr('data-' + prefix + '-rid', id);
                    if ($responsive.data('responsive-' + prefix + '-rules')) {
                        $responsive.data('responsive-' + prefix + '-rules').remove();
                    }

                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = '@media screen ' + (('min' in azh.device_prefixes[prefix]) ? ' and (min-width: ' + azh.device_prefixes[prefix]['min'] + 'px)' : '') + (('max' in azh.device_prefixes[prefix]) ? ' and (max-width: ' + azh.device_prefixes[prefix]['max'] + 'px)' : '') + ' {[data-' + prefix + '-rid="' + id + '"] { ' + responsive_style + ' }}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                    $responsive.data('responsive-' + prefix + '-rules', style);
                }
            });
        }
    };
    azh.parse_query_string = function(a) {
        if (a == "")
            return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p = a[i].split('=');
            if (p.length != 2)
                continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    };
    azh.set_url_argument = function(url, argument, value) {
        url = url.split('?');
        var args = {};
        if (url.length === 2) {
            args = azh.parse_query_string(url[1].split('&'));
        }

        var query = {};
        for (var arg in args) {
            if (arg === argument) {
                query[arg] = encodeURIComponent(value);
            } else {
                query[arg] = encodeURIComponent(args[arg]);
            }
        }
        if (!(argument in args)) {
            query[argument] = encodeURIComponent(value);
        }
        query = Object.entries(query).map(function callback(currentValue, index, array) {
            return currentValue[0] + '=' + currentValue[1];
        });
        if (url.length === 1) {
            url.push(query.join('&'));
        } else {
            url[1] = query.join('&');
        }
        if (url[1] !== '') {
            url = url.join('?');
        } else {
            url = url[0];
        }
        return url;
    };
    azh.get_url_argument = function(url, argument) {
        url = url.split('?');
        var args = {};
        if (url.length === 2) {
            args = azh.parse_query_string(url[1].split('&'));
        }
        if (argument in args) {
            return args[argument];
        }
        return false;
    };
    $.QueryString = azh.parse_query_string(window.location.search.substr(1).split('&'));
    var customize = ('azh' in $.QueryString && $.QueryString['azh'] == 'customize');
    window.azh.frontend_init = function($wrapper) {
        function sticky() {
            $wrapper.find('[data-sticky-style], [data-sticky-class]').each(function() {
                var $sticky = $(this);
                if (!$sticky.data('top')) {
                    if ($sticky.offset().top < 0) {
                        $sticky.data('top', 0)
                    } else {
                        $sticky.data('top', $sticky.offset().top)
                    }
                }
                $body.imagesLoaded(function() {
                    //add class to container with "az-sticky" class or body
                    if ($sticky.data('sticky-class')) {
                        var $container = $body;
                        if ($sticky.closest('.az-sticky').length) {
                            $container = $sticky.closest('.az-sticky');
                        }
                        var interval = setInterval(function() {
                            if (!$container.hasClass($sticky.data('sticky-class'))) {
                                if ($sticky.offset().top < 0) {
                                    $sticky.data('top', 0)
                                } else {
                                    $sticky.data('top', $sticky.offset().top)
                                }
                                clearInterval(interval);
                            }
                        }, 100);
                    }
                    if ($sticky.data('namespace') === undefined) {
                        $sticky.data('namespace', makeid());
                    }
                    $window.off('scroll.' + $sticky.data('namespace')).on('scroll.' + $sticky.data('namespace'), function() {
                        if ($window.scrollTop() > $sticky.data('top')) {
                            //add class to container with "az-sticky" class or body
                            if ($sticky.data('sticky-class')) {
                                if ($sticky.closest('.az-sticky').length) {
                                    $sticky.closest('.az-sticky').addClass($sticky.data('sticky-class'));
                                } else {
                                    $body.addClass($sticky.data('sticky-class'));
                                }
                            }
                            //add styles to container/child with "az-sticky" class or self
                            if ($sticky.data('sticky-style')) {
                                if ($sticky.closest('.az-sticky').length) {
                                    $sticky.closest('.az-sticky').attr('style', $sticky.data('sticky-style'));
                                } else {
                                    if ($sticky.find('.az-sticky').length) {
                                        $sticky.find('.az-sticky').attr('style', $sticky.data('sticky-style'));
                                    } else {
                                        $sticky.attr('style', $sticky.data('sticky-style'));
                                    }
                                }
                            }
                        } else {
                            //add class to container with "az-sticky" class or body
                            if ($sticky.data('sticky-class')) {
                                if ($sticky.closest('.az-sticky').length) {
                                    $sticky.closest('.az-sticky').addClass($sticky.data('sticky-class'));
                                } else {
                                    $body.removeClass($sticky.data('sticky-class'));
                                }
                            }
                            //add styles to container/child with "az-sticky" class or self
                            if ($sticky.data('sticky-style')) {
                                if ($sticky.closest('.az-sticky').length) {
                                    $sticky.closest('.az-sticky').attr('style', '');
                                } else {
                                    if ($sticky.find('.az-sticky').length) {
                                        $sticky.find('.az-sticky').attr('style', '');
                                    } else {
                                        $sticky.attr('style', '');
                                    }
                                }
                            }
                        }
                    });
                });
            });
            $wrapper.find('.az-children-height').each(function() {
                $(this).height($(this).children().height());
                $(this).off('azh-refresh').on('azh-refresh', function() {
                    $(this).height($(this).children().height());
                });
            });
        }
        function fill_entry($element, id) {
            function fill_text($field, text) {
                $field.contents().filter(function() {
                    return this.nodeType === 3;
                }).each(function() {
                    if ($.trim(this.textContent)) {
                        this.textContent = text;
                    }
                });
                $field.find('*').contents().filter(function() {
                    return this.nodeType === 3;
                }).each(function() {
                    if ($.trim(this.textContent)) {
                        this.textContent = text;
                    }
                });
            }
            function fill_image($field, url) {
                if ($field.is('img[src]')) {
                    $field.attr('src', url);
                } else {
                    $field.find('img[src]').attr('src', url);
                }
            }
            function fill_link($field, url) {
                if ($field.is('a[href]')) {
                    $field.attr('href', url);
                } else {
                    $field.find('a[href]').attr('href', url);
                }
            }
            function fill_video($field, url) {
                if ($field.is('iframe[src]')) {
                    $field.attr('src', url);
                } else {
                    $field.find('iframe[src]').attr('src', url);
                }
            }
            var $entry = $element.is('.az-entry-ajax') ? $element : false;
            if (!$entry) {
                $entry = $element.find('.az-entry-ajax').first();
                if ($entry.is('[data-class-from-post-meta]:not([data-class-from-post-meta=""])')) {
                    var meta = $entry.data('class-from-post-meta');
                    $entry.removeClass($entry.data('dynamic-class'));
                    $entry.addClass(azh.entries[id].meta[meta]);
                    $entry.data('dynamic-class', azh.entries[id].meta[meta]);
                }

                $entry.find('.az-title').each(function() {
                    fill_text($(this), azh.entries[id].post.post_title);
                });
                $entry.find('.az-content').each(function() {
                    fill_text($(this), azh.entries[id].post.post_content);
                });
                $entry.find('.az-thumbnail').each(function() {
                    fill_image($(this), azh.entries[id].post_thumbnail);
                });
                $entry.find('[data-meta-field]').each(function() {
                    fill_text($(this), azh.entries[id].meta[$(this).data('meta-field')]);
                });
                $entry.find('[data-file-meta-field]').each(function() {
                    fill_link($(this), azh.entries[id].meta[$(this).data('file-meta-field')]);
                });
                $entry.find('[data-video-meta-field]').each(function() {
                    fill_video($(this), azh.entries[id].meta[$(this).data('video-meta-field')]);
                });
                $entry.find('[data-image-meta-field]').each(function() {
                    fill_image($(this), azh.entries[id].meta[$(this).data('image-meta-field')]);
                });
            }
        }
        function entries_load() {
            //load if it visible or can be visible on hover/click which is currently visible
            window.azh.entries = $.extend({}, window.azh.entries);
            var ids = [];
            $wrapper.find('[data-fill-from-post]:visible').each(function() {
                var id = $(this).data('fill-from-post');
                if (!(id in window.azh.entries)) {
                    ids.push(id);
                }
            });
            if (ids.length) {
                $.post(azh.ajaxurl, {
                    'action': 'azh_get_posts',
                    'ids': ids
                }, function(data) {
                    if (data) {
                        var entries = JSON.parse(data);
                        for (var id in entries) {
                            azh.entries[id] = entries[id];
                        }
                    }
                });
            }
        }
        $window.trigger("az-frontend-before-init", {
            wrapper: $wrapper
        });
        fullWidthSection($wrapper);
        auto_rescale($wrapper);
        if (!customize) {
            $wrapper.find('.az-free-positioning.az-percentage[data-width][data-height]').each(function() {
                var $container = $(this);
                var container_width = $container.data('width');
                var container_height = $container.data('height');
                $container.children().each(function() {
                    if (this.style['left'].match(/^\d+px$/)) {
                        var left = parseInt(this.style['left'], 10);
                        this.style['left'] = (left / container_width * 100) + '%';
                    }
                    if (this.style['right'].match(/^\d+px$/)) {
                        var right = parseInt(this.style['right'], 10);
                        this.style['right'] = (right / container_width * 100) + '%';
                    }
                    if (this.style['top'].match(/^\d+px$/)) {
                        var top = parseInt(this.style['top'], 10);
                        this.style['top'] = (top / container_height * 100) + '%';
                    }
                    if (this.style['bottom'].match(/^\d+px$/)) {
                        var bottom = parseInt(this.style['bottom'], 10);
                        this.style['bottom'] = (bottom / container_height * 100) + '%';
                    }
                    if (this.style['width'].match(/^\d+px$/)) {
                        var width = parseInt(this.style['width'], 10);
                        this.style['width'] = (width / container_width * 100) + '%';
                    }
                    if (this.style['height'].match(/^\d+px$/)) {
                        var height = parseInt(this.style['height'], 10);
                        this.style['height'] = (height / container_height * 100) + '%';
                    }
                });
            });
        }
        if ('imagesLoaded' in $.fn) {
            if (document.documentElement.clientWidth > 768) {
                $wrapper.imagesLoaded(function() {
                    $wrapper.find('[data-parallax="true"]').each(function() {
                        var $this = $(this);
                        $this.css({
                            "background-size": "cover",
                            "background-repeat": "no-repeat",
                            "background-attachment": "fixed"
                        });
                        $this.parallax("50%", $this.data('parallax-speed') / 100);
                    });
                });
            }
        }
        if ('tabs' in $.fn) {
            $wrapper.find('.azexo-tabs').each(function() {
                var $this = $(this);
                if (!$this.tabs('instance')) {
                    $this.tabs();
                }
            });
        }
        if ('accordion' in $.fn) {
            $wrapper.find('.azexo-accordion').each(function() {
                var $this = $(this);
                if (!$this.accordion('instance')) {
                    $this.accordion({
                        header: ".accordion-section > h3",
                        autoHeight: false,
                        heightStyle: "content",
                        active: $this.data('active-section'),
                        collapsible: $this.data('collapsible'),
                        navigation: true,
                        animate: 200
                    });
                }
            });
        }
        $wrapper.find('.az-gmap').each(function() {
            function gmap_init() {
                if ($gmap.data('latitude') && $gmap.data('longitude') && !$gmap.data('map')) {
                    var styles = null;
                    if ($gmap.data('styles')) {
                        styles = $gmap.data('styles');
                        if (typeof styles === 'string') {
                            styles = JSON.parse(styles.replace(/'/g, '"'));
                        }
                    }
                    var map = new google.maps.Map($gmap.get(0), {
                        scrollwheel: false,
                        disableDefaultUI: true,
                        styles: styles,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                    var location = new google.maps.LatLng(parseFloat($gmap.data('latitude')), parseFloat($gmap.data('longitude')));
                    var marker = new google.maps.Marker({
                        position: location,
                        map: map,
                        icon: $gmap.data('marker') ? $gmap.data('marker') : null
                    });
                    map.refresh = function() {
                        map.setZoom($gmap.data('zoom') ? $gmap.data('zoom') : 14);
                        map.setCenter(location);
                        google.maps.event.trigger(map, 'resize');
                        if ($gmap.data('offset-x') !== undefined || $gmap.data('offset-y') !== undefined) {
                            var overlay = new google.maps.OverlayView();
                            overlay.draw = function() {
                            };
                            overlay.onAdd = function() {
                                var projection = this.getProjection();
                                var aPoint = projection.fromLatLngToContainerPixel(location);
                                if ($gmap.data('offset-x')) {
                                    aPoint.x = aPoint.x - parseFloat($gmap.data('offset-x'));
                                }
                                if ($gmap.data('offset-y')) {
                                    aPoint.y = aPoint.y - parseFloat($gmap.data('offset-y'));
                                }
                                map.setCenter(projection.fromContainerPixelToLatLng(aPoint));
                                google.maps.event.trigger(map, 'resize');
                            };
                            overlay.setMap(map);
                        }
                    };
                    map.refresh();
                    $gmap.data('map', map);
                }
            }
            var $gmap = $(this);
            if ('google' in window && 'maps' in google) {
                gmap_init();
            } else {
                if ($gmap.find('script').length) {
                    $gmap.find('script').get(0).onload = gmap_init;
                    var i = setInterval(function() {
                        if ('google' in window && 'maps' in google) {
                            gmap_init();
                            clearInterval(i);
                        }
                    }, 100);
                } else {
                    if ($gmap.data('gmap-api-key')) {
                        loadScript('//maps.googleapis.com/maps/api/js?key=' + $gmap.data('gmap-api-key'), function(path, status) {
                            gmap_init();
                        });
                    } else {
                        loadScript('//maps.googleapis.com/maps/api/js', function(path, status) {
                            gmap_init();
                        });
                    }
                }
            }
        });
        $wrapper.find('.az-like').each(function() {
            var $like = $(this);
            $like.contents().filter(function() {
                return this.nodeType === 3;
            }).each(function() {
                if ($.trim(this.textContent)) {
                    $like.data('count', this);
                }
            });
            $like.find('*').contents().filter(function() {
                return this.nodeType === 3;
            }).each(function() {
                if ($.trim(this.textContent)) {
                    $like.data('count', this);
                }
            });
            $like.on('click', function() {
                $like.addClass('az-ajax');
                $.ajax({
                    type: 'POST',
                    url: azh.ajaxurl,
                    data: {
                        action: 'azh_process_like',
                        id: $like.find('[data-id]').data('id'),
                        nonce: $like.find('[data-nonce]').data('nonce')
                    },
                    success: function(response) {
                        $like.removeClass('az-ajax');
                        if (response.indexOf('unliked') >= 0) {
                            $like.removeClass('az-liked');
                        } else {
                            $like.addClass('az-liked');
                        }
                        $like.data('count').textContent = parseInt(response, 10);
                    }
                });
                return false;
            });
        });
        //az-liked-azen-liked
        $wrapper.find('form').each(function() {
            var $form = $(this);
            $form.find('.az-enter-submit').on("keydown", function(event) {
                if (event.keyCode === 13) {
                    if ($form.find('[type="submit"]').length) {
                        $form.submit();
                    }
                }
            });
            $form.find('input, textarea').on('change', function() {
                var $this = $(this);
                if ($this.val() === '') {
                    $this.parent().removeClass('az-filled');
                } else {
                    $this.parent().addClass('az-filled');
                }
            });
            if ($form.is('[data-azh-form]')) {
                if (!customize) {
                    $form.find('.az-confirmation').hide();
                    if ($form.find('[type="file"]').length === 0) {
                        $form.find('[type="submit"]').on('click', function() {
                            function report_validity(form) {
                                var valid = true;
                                if ('reportValidity' in form) {
                                    valid = form.reportValidity();
                                } else {                                    
                                    $(form).find('[name]').each(function() {
                                        var $this = $(this);
                                        $this.off('change.az-report-validity').on('change.az-report-validity', function() {
                                            $(this).removeClass('az-not-valid');
                                        });
                                        $this.removeClass('az-not-valid');
                                        if(!this.checkValidity()) {
                                            valid = false;
                                            $this.addClass('az-not-valid');
                                        }
                                    });
                                }
                                return valid;
                            }
                            var data = {
                                fields: {},
                                cancel: false
                            };
                            $form.trigger("azh-before-submit", data);
                            if (data.cancel) {
                                return false;
                            }
                            if ($form.find('.g-recaptcha').length) {
                                if (grecaptcha.getResponse().length === 0) {
                                    return false;
                                }
                            }
                            if (report_validity($form.get(0))) {
                                var $button = $(this);
                                $button.css({
                                    "pointer-events": "none",
                                    "opacity": "0.5"
                                });
                                data = data.fields;
                                $.map($form.serializeArray(), function(n, i) {
                                    if (n['name']) {
                                        if (data[n['name']]) {
                                            if (!$.isArray(data[n['name']])) {
                                                data[n['name']] = [data[n['name']]];
                                            }
                                            data[n['name']].push(n['value']);
                                        } else {
                                            data[n['name']] = n['value'];
                                        }
                                    }
                                });
                                data['action'] = 'azh_process_form';
                                data['post_id'] = azh.post_id;
                                var $azh_widget = $form.closest('[data-post-id]');
                                if ($azh_widget.length) {
                                    data['post_id'] = $azh_widget.attr('data-post-id');
                                }
                                data['nonce'] = $form.data('azh-form');
                                $.ajax({
                                    type: 'POST',
                                    url: azh.ajaxurl,
                                    data: data,
                                    success: function(response) {
                                        $button.css({
                                            "pointer-events": "",
                                            "opacity": ""
                                        });
                                        if (response) {
                                            var data = JSON.parse(response);
                                            $form.trigger("azh-after-submit", data);
                                            if ($form.find('.az-confirmation').length) {
                                                $form.find('.az-confirmation').show();
                                            } else {
                                                if (data.status === 'success') {
                                                    $form.trigger('reset');
                                                }
                                                if (data.status === 'redirect') {
                                                    window.location = data.url;
                                                    return;
                                                }
                                                if ($form.data(data.status + '-redirect')) {
                                                    window.location = $form.data(data.status + '-redirect');
                                                    return;
                                                }
                                                if ($form.data(data.status)) {
                                                    alert($form.data(data.status));
                                                } else {
                                                    alert(data.message);
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                            return false;
                        });
                    } else {
                        $form.attr('action', azh.ajaxurl + '?action=azh_process_form');
                        var post_id = azh.post_id;
                        var $azh_widget = $form.closest('[data-post-id]');
                        if ($azh_widget.length) {
                            post_id = $azh_widget.attr('data-post-id');
                        }
                        $('<input type="hidden" name="post_id" value="' + post_id + '">').appendTo($form);
                        $('<input type="hidden" name="nonce" value="' + $form.data('azh-form') + '">').appendTo($form);
                        if ($form.data('success-redirect')) {
                            $('<input type="hidden" name="success-redirect" value="' + $form.data('success-redirect') + '">').appendTo($form);
                        }
                        if ($form.data('error-redirect')) {
                            $('<input type="hidden" name="error-redirect" value="' + $form.data('error-redirect') + '">').appendTo($form);
                        }
                    }
                }
            }
        });
        $wrapper.find('.az-swiper').each(function() {
            function swiper_get_params($slider) {
                var options = {
                    observer: customize,
                    simulateTouch: !customize,
                    parallax: true,
                    containerModifierClass: 'az-container-', // NEW
                    slideClass: 'az-slide',
                    slideBlankClass: 'az-slide-invisible-blank',
                    slideActiveClass: 'az-slide-active',
                    slideDuplicateActiveClass: 'az-slide-duplicate-active',
                    slideVisibleClass: 'az-slide-visible',
                    slideDuplicateClass: 'az-slide-duplicate',
                    slideNextClass: 'az-slide-next',
                    slideDuplicateNextClass: 'az-slide-duplicate-next',
                    slidePrevClass: 'az-slide-prev',
                    slideDuplicatePrevClass: 'az-slide-duplicate-prev',
                    wrapperClass: 'az-wrapper',
                    navigation: {
                        nextEl: '.az-button-next',
                        prevEl: '.az-button-prev',
                        disabledClass: 'az-button-disabled',
                        hiddenClass: 'az-button-hidden'
                    },
                    pagination: {
                        el: '.az-pagination',
                        bulletClass: 'az-pagination-bullet',
                        bulletActiveClass: 'az-pagination-bullet-active',
                        modifierClass: 'az-pagination-', // NEW
                        currentClass: 'az-pagination-current',
                        totalClass: 'az-pagination-total',
                        hiddenClass: 'az-pagination-hidden',
                        progressbarFillClass: 'az-pagination-progressbar-fill',
                        clickableClass: 'az-pagination-clickable', // NEW
                        clickable: true
                    }
                };
                var data_attributes = {
                    spaceBetween: 0,
                    slidesPerView: 1,
                    centeredSlides: false,
                    speed: 300,
                    loop: false,
                    autoplay: {
                        delay: 5000,
                    },
                    effect: 'slide', //"slide", "fade", "cube", "coverflow" or "flip"
                    hashNavigation: false
                };
                for (var key in data_attributes) {
                    if (typeof data_attributes[key] === 'object') {
                        for (var k in data_attributes[key]) {
                            var value = $slider.attr('data-' + key + '-' + k);
                            if (typeof value !== typeof undefined) {
                                if (!options[key]) {
                                    options[key] = {};
                                }
                                $slider.removeData((key + '-' + k).toLocaleLowerCase());
                                options[key][k] = $slider.data((key + '-' + k).toLocaleLowerCase());
                            }
                        }
                    } else {
                        var value = $slider.attr('data-' + key);
                        if (typeof value !== typeof undefined) {
                            $slider.removeData(key.toLocaleLowerCase());
                            options[key] = $slider.data(key.toLocaleLowerCase());
                        }
                    }
                }
                if (customize) {
                    options['autoplay'] = false;
                }
                return options;
            }
            var $slider = $(this);
            var swiper = new Swiper(this, swiper_get_params($slider));
            $slider.data('swiper_get_params', swiper_get_params);
            $slider.data('swiper', swiper);
            $slider.on('azh-active', function(event) {
                var $slider = $(this);
                $slider.data('swiper').slideTo($slider.find('> .az-wrapper').children().index(event.target));
            });
            $slider.on('azh-refresh', function() {
                $(this).closest('.az-swiper').data('swiper').update();
            });
        });
        if ('isotope' in $.fn) {
            $wrapper.find('.az-isotope-items').each(function() {
                function isotope_get_params($grid) {
                    var options = {
                    };
                    var data_attributes = {
                        masonry: {
                            gutter: 30
                        }
                    };
                    for (var key in data_attributes) {
                        if (typeof data_attributes[key] === 'object') {
                            for (var k in data_attributes[key]) {
                                var value = $grid.attr('data-' + key + '-' + k);
                                if (typeof value !== typeof undefined) {
                                    if (!options[key]) {
                                        options[key] = {};
                                    }
                                    $grid.removeData((key + '-' + k).toLocaleLowerCase());
                                    options[key][k] = $grid.data((key + '-' + k).toLocaleLowerCase());
                                }
                            }
                        } else {
                            var value = $grid.attr('data-' + key);
                            if (typeof value !== typeof undefined) {
                                $grid.removeData(key.toLocaleLowerCase());
                                options[key] = $grid.data(key.toLocaleLowerCase());
                            }
                        }
                    }
                    return options;
                }
                function refresh_active_css_rules($filters) {
                    var active_style = set_styles_important($filters.attr('data-active'));
                    var id = $filters.attr('id');
                    if (!id) {
                        id = makeid();
                        $filters.attr('id', id);
                    }
                    make_css_rule('#' + id + ' [data-filter].az-active span', active_style);
                }
                var $grid = $(this);
                $grid.isotope(isotope_get_params($grid));
                $grid.imagesLoaded().progress(function() {
                    $grid.isotope('layout');
                });
                $grid.one('arrangeComplete', function() {
                    $window.trigger('resize');
                });
                $grid.on('azh-refresh', function() {
                    $(this).isotope('destroy').isotope(isotope_get_params($(this))).isotope('layout');
                });
                var $filters = false;
                var filters_closeness = false;
                $('.az-isotope-filters').each(function() {
                    var parent = $grid.parents().has(this).first();
                    if ($filters === false) {
                        $filters = $(this);
                        filters_closeness = $grid.parents().index(parent);
                    } else {
                        if (filters_closeness > $grid.parents().index(parent)) {
                            $filters = $(this);
                            filters_closeness = $grid.parents().index(parent);
                        }
                    }
                });
                if ($filters) {
                    $filters.on('azh-refresh', function() {
                        $(this).data('grid').isotope({
                            filter: '*'
                        }).isotope('layout');
                    });
                    if ($filters.is('[data-active]')) {
                        refresh_active_css_rules($filters)
                    }
                    $filters.data('refresh_active_css_rules', refresh_active_css_rules);
                    $filters.data('grid', $grid);
                    $filters.find('[data-filter]').on('click', function() {
                        var $this = $(this);
                        var $filters = $this.closest('.az-isotope-filters');
                        var $grid = $filters.data('grid');
                        $grid.isotope({filter: $this.attr('data-filter')});
                        $filters.find('[data-filter].az-active').removeClass('az-active');
                        $this.addClass('az-active');
                        return false;
                    });
                }
            });
        }
        $wrapper.find('input[data-mask]:not([data-mask=""])').each(function() {
            $(this).mask($(this).data('mask'));
        });
        if ($wrapper.find('.g-recaptcha').length) {
            if ('grecaptcha' in window) {
                grecaptcha.render($wrapper.find('.g-recaptcha').get(0), {
                    'sitekey': $wrapper.find('.g-recaptcha').data('sitekey')
                });
            } else {
                loadScript('//www.google.com/recaptcha/api.js', function(path, status) {
                });
            }
        }
        $wrapper.find('form.az-search').each(function() {
            $(this).attr('action', azh.site_url);
        });
        $wrapper.find('[data-element="general/image.htm"] a[href*="="], [data-element="general/icon.htm"] a[href*="="]').on('click', function() {
            var pair = $(this).attr('href').split('=');
            if (pair.length === 2) {
                var $input = $wrapper.find('[name="' + pair[0] + '"][value="' + pair[1] + '"]');
                if ($input.length) {
                    if ($input.attr('type') == 'checkbox') {
                        var checked = $input.prop('checked');
                        $input.prop('checked', !checked).trigger("change");
                    } else {
                        $input.prop('checked', true).trigger("change");
                    }
                    return false;
                } else {
                    var $select = $wrapper.find('[name="' + pair[0] + '"]');
                    if ($select.length) {
                        var $option = $select.find('[value="' + pair[1] + '"]');
                        if ($option.length) {
                            if ($select.is('[multiple]')) {
                                var selected = $option.prop('selected');
                                $option.prop('selected', !checked).trigger("change");
                            } else {
                                $option.prop('selected', true).trigger("change");
                            }
                            return false;
                        }
                    }
                }
            }
        });
        $wrapper.find('[data-background-video]').andSelf().filter('[data-background-video]').each(function() {
            function calcVideoSize($backgroundVideoContainer) {
                var containerWidth = $backgroundVideoContainer.outerWidth(),
                        containerHeight = $backgroundVideoContainer.outerHeight(),
                        aspectRatioSetting = '16:9', //TEMP
                        aspectRatioArray = aspectRatioSetting.split(':'),
                        aspectRatio = aspectRatioArray[ 0 ] / aspectRatioArray[ 1 ],
                        ratioWidth = containerWidth / aspectRatio,
                        ratioHeight = containerHeight * aspectRatio,
                        isWidthFixed = containerWidth / containerHeight > aspectRatio;
                return {
                    width: isWidthFixed ? containerWidth : ratioHeight,
                    height: isWidthFixed ? ratioWidth : containerHeight
                };
            }
            function youtube_parser(url) {
                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                var match = url.match(regExp);
                return (match && match[7].length == 11) ? match[7] : false;
            }
            var $this = $(this);
            if ($this.is('[data-background-type]')) {
                if ($this.data('background-type') !== 'video') {
                    $this.find('> .az-background-video').remove();
                    return;
                }
            }
            var url = $this.data('background-video');
            if (url) {
                if (url.indexOf('youtube') >= 0) {
                    if (!$this.find('> .az-background-video').length) {
                        url = url.replace('https:', '').replace('http:', '');
                        var id = youtube_parser(url);
                        if (id) {
                            url = '//www.youtube.com/embed/' + id;
                            url = azh.set_url_argument(url, 'autoplay', '1');
                            url = azh.set_url_argument(url, 'rel', '0');
                            url = azh.set_url_argument(url, 'controls', '0');
                            url = azh.set_url_argument(url, 'showinfo', '0');
                            url = azh.set_url_argument(url, 'loop', '1');
                            url = azh.set_url_argument(url, 'playlist', id);
                            url = azh.set_url_argument(url, 'mute', '1');
                            var $background = $('<div class="az-background-video"></div>').prependTo($this);
                            var $iframe = $('<iframe src="' + url + '"></iframe>').prependTo($background).on('load', function() {

                            });
                            var size = calcVideoSize($this);
                            $iframe.width(size.width).height(size.height);
                        }
                    }
                }
                if (url.indexOf('.mp4') >= 0) {
                    var $background = $('<div class="az-background-video"></div>').prependTo($this);
                    var $video = $('<video autoplay loop muted><source src="' + url + '"></video>').prependTo($background).on('load', function() {
                    });
                    var size = calcVideoSize($this);
                    $video.width(size.width).height(size.height);
                }
            } else {
                $this.find('> .az-background-video').remove();
            }
        });
        $wrapper.find('.az-modal').each(function() {
            var $this = $(this);
            if (!customize) {
                $this.children().first().on('click', function() {
                    if ($this.is('.az-active')) {
                        $this.removeClass('az-active');
                    } else {
                        $this.addClass('az-active');
                    }
                    $this.trigger('az-change');
                    return false;
                });
            }
            $this.children().last().on('click', function(event) {
                if ($(this).children().first().is(event.target)) {
                    if ($this.is('.az-active')) {
                        $this.removeClass('az-active');
                        $this.trigger('az-change');
                    }
                    return false;
                }
            });
            $window.off("keydown.az-modal").on("keydown.az-modal", function(event) {
                if (event.keyCode === 27) {
                    $wrapper.find('.az-modal.az-active').removeClass('az-active');
                    $this.trigger('az-change');
                }
            });
        });
        $window.off('resize.az-sticky').on('resize.az-sticky', sticky);
        sticky();
        $wrapper.find('a[href*="#"].az-roll, .az-roll a[href*="#"]').off('click').on('click', function(e) {
            if (this.href.split('#')[0] === '' || window.location.href.split('#')[0] === this.href.split('#')[0]) {
                e.preventDefault();
                var hash = this.hash;
                var $e = $(hash);
                if (!$e.length) {
                    $e = $('[data-section="' + hash.replace('#', '') + '"]');
                }
                if (!$e.length) {
                    $e = $('[data-element="' + hash.replace('#', '') + '"]');
                }
                if ($e.length) {
                    $('html, body').stop().animate({
                        'scrollTop': $e.offset().top
                    }, 2000);
                }
            }
        });
        $wrapper.find('[data-roll]').off('click').on('click', function(e) {
            var selector = $(this).data('roll');
            $('html, body').stop().animate({
                'scrollTop': $(selector).offset().top
            }, 2000);
            return false;
        });
        if ('waypoint' in $.fn) {
            $wrapper.find('.az-lazy-load').each(function() {
                var $image = $(this);
                var waypoint_handler = function(direction) {
                    $('<img src="' + $image.data('src') + '">').load(function() {
                        if ($image.prop('tagName') === 'IMG') {
                            $image.attr('src', $image.data('src'));
                        } else {
                            $image.css('background-image', 'url("' + $image.data('src') + '")');
                        }
                        $image.addClass('loaded');
                    });
                };
                $image.waypoint(waypoint_handler, {offset: '100%', triggerOnce: true});
                $image.data('waypoint_handler', waypoint_handler);
            });
        }
        if ('countdown' in $.fn) {
            $wrapper.find('.az-countdown').each(function() {
                var $countdown = $(this);
                if ($countdown.data('countdownInstance') === undefined) {
                    $countdown.countdown($countdown.data('time'), function(event) {
                        $countdown.find('.az-days .az-count').text(event.offset.totalDays);
                        $countdown.find('.az-hours .az-count').text(event.offset.hours);
                        $countdown.find('.az-minutes .az-count').text(event.offset.minutes);
                        $countdown.find('.az-seconds .az-count').text(event.offset.seconds);
                    });
                }
            });
        }
        if (!customize) {
            if ('magnificPopup' in $.fn) {
                $wrapper.find('a.az-magnific-popup').each(function() {
                    var $this = $(this);
                    $("<img>", {
                        src: $this.attr('href'),
                        error: function() {
                            $this.magnificPopup({
                                type: 'iframe',
                                removalDelay: 300,
                                mainClass: 'mfp-fade',
                                overflowY: 'scroll',
                                closeMarkup: '<div title="%title%" type="button" class="mfp-close">&#215;</div>',
                                iframe: {
                                    markup: '<div class="mfp-iframe-scaler">' +
                                            '<div class="mfp-close"></div>' +
                                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                                            '</div>',
                                    patterns: {
                                        youtube: {
                                            index: 'youtube.com/',
                                            id: 'v=',
                                            src: '//www.youtube.com/embed/%id%?autoplay=1'
                                        },
                                        vimeo: {
                                            index: 'vimeo.com/',
                                            id: '/',
                                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                                        },
                                        gmaps: {
                                            index: '//maps.google.',
                                            src: '%id%&output=embed'
                                        }
                                    },
                                    srcAction: 'iframe_src'
                                }
                            });
                        },
                        load: function() {
                            $this.magnificPopup({
                                type: 'image',
                                removalDelay: 300,
                                mainClass: 'mfp-fade',
                                overflowY: 'scroll',
                                closeMarkup: '<div title="%title%" type="button" class="mfp-close">&#215;</div>'
                            });
                        }
                    });
                });
            }
            $wrapper.find('.az-hover-overlay').each(function() {
                var $this = $(this);
                $this.on('mouseenter', function() {
                    $this.addClass('az-hover');
                }).on('mouseleave', function() {
                    $this.removeClass('az-hover');
                }).children().last();
            });
        }
        azh.refresh_hover_css_rules($wrapper);
        azh.refresh_responsive_css_rules($wrapper);
        if (!customize) {
            $wrapper.find('[data-click-trigger]:not([data-click-trigger=""])').each(function() {
                var $trigger_wrapper = $(this);
                var element = $trigger_wrapper.data('click-trigger');
                var $trigger = $trigger_wrapper;
                if ($trigger.is('.az-svg')) {
                    $trigger = $trigger.find('> svg > *');
                }
                $trigger.on('click', function() {
                    var $element = $('[data-element="' + element + '"]');
                    if ($element.is(':visible')) {
                        $element.hide();
                    } else {
                        if ($trigger_wrapper.is('[data-fill-from-post]:not([data-fill-from-post=""])')) {
                            fill_entry($element, $trigger_wrapper.data('fill-from-post'));
                        }
                        $element.show();
                        entries_load();
                    }
                    return false;
                });
            });
            $wrapper.find('[data-hover-trigger]:not([data-hover-trigger=""])').each(function() {
                var $trigger_wrapper = $(this);
                var element = $trigger_wrapper.data('hover-trigger');
                var $trigger = $trigger_wrapper;
                if ($trigger.is('.az-svg')) {
                    $trigger = $trigger.find('> svg > *');
                }
                $trigger.on('mouseenter', function() {
                    var $element = $('[data-element="' + element + '"]');
                    if ($trigger_wrapper.is('[data-fill-from-post]:not([data-fill-from-post=""])')) {
                        fill_entry($element, $trigger_wrapper.data('fill-from-post'));
                    }
                    $element.show();
                }).on('mouseleave', function() {
                    $('[data-element="' + element + '"]').hide();
                });
            });
        }
        entries_load();
        $window.trigger("az-frontend-init", {
            wrapper: $wrapper
        });
        $window.trigger("az-frontend-after-init", {
            wrapper: $wrapper
        });
    };
    $(function() {
        $window.off("resize.az-fullWidthSection").on("resize.az-fullWidthSection", function() {
            fullWidthSection($body);
            auto_rescale($body);
        });
        azh.frontend_init($body);
        if (!customize) {
            if (window.location.hash) {
                var hash = window.location.hash;
                var $e = $(hash);
                if (!$e.length) {
                    $e = $('[data-section="' + hash.replace('#', '') + '"]');
                }
                if (!$e.length) {
                    $e = $('[data-element="' + hash.replace('#', '') + '"]');
                }
                if ($e.length) {
                    $('html, body').stop().animate({
                        'scrollTop': $e.offset().top
                    }, 2000);
                }
            }
            if (document.documentElement.clientWidth > 768 && !('azh' in $.QueryString && $.QueryString['azh'] === 'fullpage')) {
                if (typeof scrollReveal === 'function') {
                    window.scrollReveal = new scrollReveal();
                }
            }
        }
    });
})(jQuery);