<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <title><?php esc_html_e('AZEXO HTML Library', 'azh'); ?></title>
        <meta charset="<?php bloginfo('charset'); ?>">
        <?php
        global $azh_content;
        $azh_content = false;

        if (isset($_GET['files'])) {
            $azh_content .= azh_get_page_template($_GET['files']);
        } else {
            wp_enqueue_style('azexo_html_library', plugins_url('css/azexo_html_library.css', __FILE__));
            wp_enqueue_script('azexo_html_library', plugins_url('js/azexo_html_library.js', __FILE__), array('jquery'), true);
            azh_icon_font_enqueue('fontawesome');
            wp_localize_script('azexo_html_library', 'azh', azh_get_object());
        }
        wp_head();
        ?>
        <style>
            .azh-center {
                margin-top: 50vh; 
                transform: translate(0, -50%);
            }
        </style>
    </head>    
    <body>          
        <div class="az-container">
            <?php if ($azh_content): ?>
                <div class="azh-content <?php (isset($_GET['files']) && count(explode('|', $_GET['files'])) == 1) ? 'azh-center' : '' ?>">
                    <?php print $azh_content; ?>
                </div>
                <script>
                    (function($) {
                        $(function() {
                            $(window).on('resize', function() {
                                if ($(window).height() < $('.azh-content').height()) {
                                    $('.azh-content').removeClass('azh-center');
                                } else {
                                    $('.azh-content').addClass('azh-center');
                                }
                            });
                            setTimeout(function() {
                                $(window).trigger('resize');
                            });

                        });
                    })(window.jQuery);
                </script>
            <?php else: ?>                
                <div id="azexo-html-library">
                    <input id="sections" type="radio" name="sections-elements" checked="" style="position: absolute; clip: rect(0, 0, 0, 0);">
                    <input id="elements" type="radio" name="sections-elements" style="position: absolute; clip: rect(0, 0, 0, 0);">
                    <div class="sections-elements">                        
                        <label for="sections"><?php esc_html_e('Sections', 'azh'); ?></label>
                        <label for="elements"><?php esc_html_e('Elements', 'azh'); ?></label>
                    </div>
                    <?php azh_meta_box(); ?>
                </div>
            <?php endif; ?>        
        </div>
        <?php
        wp_enqueue_script('jquery-ui-sortable');
        wp_enqueue_script('jquery-ui-resizable');
        wp_enqueue_script('jquery-ui-draggable');
        wp_enqueue_script('imagesloaded');
        wp_enqueue_script('isotope');
        wp_enqueue_script('waypoints');
        wp_footer();
        ?>
    </body>
</html>