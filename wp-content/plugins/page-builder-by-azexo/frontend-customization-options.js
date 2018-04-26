(function($) {
    "use strict";
    function transition_utility(selector, group, subgroup, refresh) {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "min": "0",
                "max": "1",
                "step": "0.05",
                "units": "s",
                "control_class": "azh-transition-duration",
                "control_type": "transition-duration",
                "control_text": "Transition duration",
                "property": "transition-duration"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "options": {
                    "linear": "linear",
                    "ease": "ease",
                    "ease-in": "ease-in",
                    "ease-out": "ease-out",
                    "ease-in-out": "ease-in-out"
                },
                "property": "transition-timing-function",
                "control_class": "azh-transition-timing-function",
                "control_type": "transition-timing-function",
                "control_text": "Transition timing function"
            }
        ]);
    }
    function background_utility(selector, group, subgroup, attribute, refresh, multiplying_selector) {
        if (attribute === 'data-hover') {
            transition_utility(selector, group, subgroup, refresh);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": function($control, $element) {
                    $control.parent().find('.azh-control').trigger('azh-init');
                    if ($control.attr('data-value') === 'classic') {
                        $control.parent().find('.azh-background-image img').trigger('contextmenu');
                    }
                    if ($control.attr('data-value') === 'gradient') {
                        $control.parent().find('.azh-background-gradient-type select').trigger('change');
                    }
                },
                "type": "radio-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "classic": "Classic",
                    "gradient": "Gradient"
                },
                "property": "background-type",
                "control_class": "azh-background-type",
                "control_type": "background-type",
                "control_text": "Background type"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-color",
                "control_class": "azh-background-color",
                "control_type": "background-color",
                "control_text": "Background color"
            },
            {
                "refresh": refresh,
                "type": "background-image",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "control_class": "azh-background-image",
                "control_type": "background-image",
                "control_text": "Background image"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "options": {
                    "": "Default",
                    "top left": "Top Left",
                    "top center": "Top Center",
                    "top right": "Top Right",
                    "center left": "Center Left",
                    "center center": "Center Center",
                    "center right": "Center Right",
                    "bottom left": "Bottom Left",
                    "bottom center": "Bottom Center",
                    "bottom right": "Bottom Right"
                },
                "property": "background-position",
                "control_class": "azh-background-position",
                "control_type": "background-position",
                "control_text": "Position"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "": "Default",
                    "scroll": "Scroll",
                    "fixed": "Fixed"
                },
                "property": "background-attachment",
                "control_class": "azh-background-attachment",
                "control_type": "background-attachment",
                "control_text": "Attachment"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "": "Default",
                    "no-repeat": "No repeat",
                    "repeat": "Repeat",
                    "repeat-x": "Repeat-x",
                    "repeat-y": "Repeat-y"
                },
                "property": "background-repeat",
                "control_class": "azh-background-repeat",
                "control_type": "background-repeat",
                "control_text": "Repeat"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "": "Default",
                    "auto": "Auto",
                    "cover": "Cover",
                    "contain": "Contain"
                },
                "property": "background-size",
                "control_class": "azh-background-size",
                "control_type": "background-size",
                "control_text": "Size"
            },
            {
                "refresh": function($control, $element) {
                    $control.parent().find('.azh-control').trigger('azh-init');
                },
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "linear-gradient": "Linear",
                    "radial-gradient": "Radial"
                },
                "property": "background-image",
                "pattern": /()([-\w]+)(\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "control_class": "azh-background-gradient-type",
                "control_type": "background-gradient-type",
                "control_text": "Type"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "top left": "Top Left",
                    "top center": "Top Center",
                    "top right": "Top Right",
                    "center left": "Center Left",
                    "center center": "Center Center",
                    "center right": "Center Right",
                    "bottom left": "Bottom Left",
                    "bottom center": "Bottom Center",
                    "bottom right": "Bottom Right"
                },
                "property": "background-image",
                "pattern": /(radial-gradient\(at )([ \w]+)(, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "control_class": "azh-background-radial-gradient-position",
                "control_type": "background-radial-gradient-position",
                "control_text": "Position"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(linear-gradient\()(\d+)(deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 360,
                "step": 1,
                "control_class": "azh-background-linear-gradient-angle",
                "control_type": "background-linear-gradient-angle",
                "control_text": "Angle"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-color",
                "control_type": "background-linear-gradient-first-color",
                "control_text": "First color"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-location",
                "control_type": "background-linear-gradient-first-location",
                "control_text": "First location"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-color",
                "control_type": "background-linear-gradient-second-color",
                "control_text": "Second color"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-location",
                "control_type": "background-linear-gradient-second-location",
                "control_text": "Second location"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-color",
                "control_type": "background-radial-gradient-first-color",
                "control_text": "First color"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-location",
                "control_type": "background-radial-gradient-first-location",
                "control_text": "First location"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-color",
                "control_type": "background-radial-gradient-second-color",
                "control_text": "Second color"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-location",
                "control_type": "background-radial-gradient-second-location",
                "control_text": "Second location"
            }
        ]);
    }
    function border_utility(selector, group, subgroup, attribute, refresh, multiplying_selector) {
        if (attribute === 'data-hover') {
            transition_utility(selector, group, subgroup, refresh);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "options": {
                    "none": "None",
                    "solid": "Solid",
                    "double": "Double",
                    "dotted": "Dotted",
                    "dashed": "Dashed"
                },
                "property": "border-style",
                "control_class": "azh-border-style",
                "control_type": "border-style",
                "control_text": "Border type"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "menu": "utility",
                "group": group,
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "border-color",
                "control_class": "azh-border-color",
                "control_type": "border-color",
                "control_text": "Border color"
            },
            {
                "refresh": refresh,
                "type": "integer-list-style",
                "menu": "utility",
                "group": group,
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "properties": {
                    "border-top-width": "Top",
                    "border-right-width": "Right",
                    "border-bottom-width": "Bottom",
                    "border-left-width": "Left"
                },
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "control_class": "azh-border-width",
                "control_type": "border-width",
                "control_text": "Border width"
            },
            {
                "refresh": refresh,
                "type": "integer-list-style",
                "menu": "utility",
                "group": group,
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "properties": {
                    "border-top-left-radius": "Top Left",
                    "border-top-right-radius": "Top Right",
                    "border-bottom-left-radius": "Bottom Left",
                    "border-bottom-right-radius": "Bottom Right"
                },
                "slider": true,
                "units": {
                    "px": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "%": {
                        "min": "0",
                        "max": "50",
                        "step": "1"
                    }
                },
                "control_class": "azh-border-radius",
                "control_type": "border-radius",
                "control_text": "Border radius"
            }
        ]);
    }
    function box_shadow_utility(selector, group, subgroup, attribute, refresh, multiplying_selector) {
        if (attribute === 'data-hover') {
            transition_utility(selector, group, subgroup, refresh);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": refresh,
                "type": "exists-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "box-shadow",
                "value": "0px 0px 0px 0px rgba(0,0,0,1)",
                "control_class": "azh-toggle azh-box-shadow",
                "control_type": "box-shadow",
                "control_text": "Box shadow"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "menu": "utility",
                "group": group,
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "box-shadow",
                "pattern": /(-?\d+px -?\d+px \d+px -?\d+px )(rgba\(\d+,\d+,\d+,\d.?\d*\))()/,
                "default": "0px 0px 0px 0px rgba(0,0,0,1)",
                "control_class": "azh-box-shadow-color",
                "control_type": "box-shadow-color",
                "control_text": "Color"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "box-shadow",
                "pattern": /(-?\d+px -?\d+px )(\d+)(px -?\d+px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px 0px rgba(0,0,0,1)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-box-shadow-blur",
                "control_type": "box-shadow-blur",
                "control_text": "Blur"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "box-shadow",
                "pattern": /(-?\d+px -?\d+px \d+px )(-?\d+)(px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px 0px rgba(0,0,0,1)",
                "min": -100,
                "max": 100,
                "step": 1,
                "control_class": "azh-box-shadow-spread",
                "control_type": "box-shadow-spread",
                "control_text": "Spread"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "box-shadow",
                "pattern": /()(-?\d+)(px -?\d+px \d+px -?\d+px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px 0px rgba(0,0,0,1)",
                "min": -100,
                "max": 100,
                "step": 1,
                "control_class": "azh-box-shadow-horizontal",
                "control_type": "box-shadow-horizontal",
                "control_text": "Horizontal"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "box-shadow",
                "pattern": /(-?\d+px )(-?\d+)(px \d+px -?\d+px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px 0px rgba(0,0,0,1)",
                "min": -100,
                "max": 100,
                "step": 1,
                "control_class": "azh-box-shadow-vertical",
                "control_type": "box-shadow-vertical",
                "control_text": "Vertical"
            }
        ]);
    }
    function font_utility(selector, group, subgroup, attribute, refresh, multiplying_selector) {
        if (attribute === 'data-hover') {
            transition_utility(selector, group, subgroup, refresh);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": refresh,
                "type": "font-family",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "font-family",
                "control_class": "azh-font-family",
                "control_type": "font-family",
                "control_text": "Font family"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "font-size",
                "responsive": true,
                "slider": true,
                "units": {
                    "px": {
                        "min": "1",
                        "max": "200",
                        "step": "1"
                    },
                    "em": {
                        "min": "0.1",
                        "max": "10",
                        "step": "0.1"
                    },
                    "rem": {
                        "min": "0.1",
                        "max": "10",
                        "step": "0.1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "font-size",
                "control_text": "Font size"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "font-weight",
                "options": {
                    "100": "100",
                    "200": "200",
                    "300": "300",
                    "400": "400",
                    "500": "500",
                    "600": "600",
                    "700": "700",
                    "800": "800",
                    "900": "900"
                },
                "control_class": "azh-dropdown",
                "control_type": "font-weight",
                "control_text": "Font weight"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "font-style",
                "options": {
                    "": "Default",
                    "normal": "Normal",
                    "italic": "Italic",
                    "oblique": "Oblique"
                },
                "control_class": "azh-dropdown",
                "control_type": "font-style",
                "control_text": "Font style"
            },
            {
                "refresh": refresh,
                "type": "dropdown-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "text-transform",
                "options": {
                    "": "Default",
                    "uppercase": "Uppercase",
                    "lowercase": "Lowercase",
                    "capitalize": "Capitalize",
                    "none": "Normal"
                },
                "control_class": "azh-dropdown",
                "control_type": "text-transform",
                "control_text": "Transform"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "color",
                "control_class": "azh-color",
                "control_type": "color",
                "control_text": "Color"
            }
        ]);
    }
    function text_utility(selector, group, subgroup, attribute, refresh, multiplying_selector) {
        if (attribute === 'data-hover') {
            transition_utility(selector, group, subgroup, refresh);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": refresh,
                "type": "integer-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "property": "line-height",
                "slider": true,
                "units": {
                    "px": {
                        "min": "1",
                        "max": "100",
                        "step": "1"
                    },
                    "%": {
                        "min": "1",
                        "max": "300",
                        "step": "1"
                    },
                    "em": {
                        "min": "0.1",
                        "max": "10",
                        "step": "0.1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "line-height",
                "control_text": "Line height"
            },
            {
                "refresh": refresh,
                "type": "radio-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "property": "text-align",
                "options": {
                    "left": "Left",
                    "center": "Center",
                    "right": "Right",
                    "justify": "Justify"
                },
                "control_class": "azh-text-align",
                "control_type": "text-align",
                "control_text": "Text align"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "property": "word-spacing",
                "min": "-20",
                "max": "50",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "word-spacing",
                "control_text": "Word-spacing"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "menu": "utility",
                "selector": selector,
                "multiplying_selector": multiplying_selector,
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "responsive": true,
                "property": "letter-spacing",
                "min": "-5",
                "max": "10",
                "step": "0.1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "letter-spacing",
                "control_text": "Letter-spacing"
            }
        ]);
    }
    function text_shadow_utility(selector, group, subgroup, attribute, refresh) {
        if (attribute === 'data-hover') {
            transition_utility(selector, group, subgroup, refresh);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": refresh,
                "type": "exists-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "text-shadow",
                "value": "0px 0px 0px rgba(0,0,0,1)",
                "control_class": "azh-toggle azh-text-shadow",
                "control_type": "text-shadow",
                "control_text": "Text shadow"
            },
            {
                "refresh": refresh,
                "type": "color-style",
                "menu": "utility",
                "group": group,
                "selector": selector,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "text-shadow",
                "pattern": /(-?\d+px -?\d+px \d+px )(rgba\(\d+,\d+,\d+,\d.?\d*\))()/,
                "default": "0px 0px 0px rgba(0,0,0,1)",
                "control_class": "azh-text-shadow-color",
                "control_type": "text-shadow-color",
                "control_text": "Color"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "text-shadow",
                "pattern": /(-?\d+px -?\d+px )(\d+)(px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px rgba(0,0,0,1)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-text-shadow-blur",
                "control_type": "text-shadow-blur",
                "control_text": "Blur"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "text-shadow",
                "pattern": /()(-?\d+)(px -?\d+px \d+px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px rgba(0,0,0,1)",
                "min": -100,
                "max": 100,
                "step": 1,
                "control_class": "azh-text-shadow-horizontal",
                "control_type": "text-shadow-horizontal",
                "control_text": "Horizontal"
            },
            {
                "refresh": refresh,
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "subgroup": subgroup,
                "attribute": attribute,
                "property": "text-shadow",
                "pattern": /(-?\d+px )(-?\d+)(px \d+px rgba\(\d+,\d+,\d+,\d.?\d*\))/,
                "default": "0px 0px 0px rgba(0,0,0,1)",
                "min": -100,
                "max": 100,
                "step": 1,
                "control_class": "azh-text-shadow-vertical",
                "control_type": "text-shadow-vertical",
                "control_text": "Vertical"
            }
        ]);
    }
    function background_effects_utility(selector, group, video, parallax) {
        var types = {
            "classic": "Classic",
            "gradient": "Gradient"
        };
        if (video) {
            types["video"] = "Video";
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": function($control, $element) {
                    $control.parent().find('.azh-control').trigger('azh-init');
                    if ($control.attr('data-value') === 'classic') {
                        $control.parent().find('.azh-background-image img').trigger('contextmenu');
                    }
                    if ($control.attr('data-value') === 'gradient') {
                        $control.parent().find('.azh-background-gradient-type select').trigger('change');
                    }
                },
                "type": "radio-attribute",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": types,
                "attribute": "data-background-type",
                "control_class": "azh-background-type",
                "control_type": "background-type",
                "control_text": "Background type"
            },
            {
                "type": "color-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-color",
                "control_class": "azh-background-color",
                "control_type": "background-color",
                "control_text": "Background color"
            },
            {
                "type": "background-image",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "control_class": "azh-background-image",
                "control_type": "background-image",
                "control_text": "Background image"
            }
        ]);
        if (parallax) {
            azh.controls_options = azh.controls_options.concat([
                {
                    "refresh": true,
                    "type": "toggle-attribute",
                    "selector": selector,
                    "menu": "utility",
                    "group": group,
                    "attribute": "data-parallax",
                    "control_class": "azh-parallax azh-toggle",
                    "control_type": "parallax",
                    "control_text": "Parallax"
                },
                {
                    "refresh": true,
                    "type": "integer-attribute",
                    "selector": selector,
                    "menu": "utility",
                    "group": group,
                    "min": "0",
                    "max": "100",
                    "step": "1",
                    "attribute": "data-parallax-speed",
                    "control_class": "azh-parallax-speed",
                    "control_type": "parallax-speed",
                    "control_text": "Parallax speed"
                }
            ]);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    "": "Default",
                    "top left": "Top Left",
                    "top center": "Top Center",
                    "top right": "Top Right",
                    "center left": "Center Left",
                    "center center": "Center Center",
                    "center right": "Center Right",
                    "bottom left": "Bottom Left",
                    "bottom center": "Bottom Center",
                    "bottom right": "Bottom Right"
                },
                "property": "background-position",
                "control_class": "azh-background-position",
                "control_type": "background-position",
                "control_text": "Position"
            },
            {
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    "": "Default",
                    "scroll": "Scroll",
                    "fixed": "Fixed"
                },
                "property": "background-attachment",
                "control_class": "azh-background-attachment",
                "control_type": "background-attachment",
                "control_text": "Attachment"
            },
            {
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    "": "Default",
                    "no-repeat": "No repeat",
                    "repeat": "Repeat",
                    "repeat-x": "Repeat-x",
                    "repeat-y": "Repeat-y"
                },
                "property": "background-repeat",
                "control_class": "azh-background-repeat",
                "control_type": "background-repeat",
                "control_text": "Repeat"
            },
            {
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    "": "Default",
                    "auto": "Auto",
                    "cover": "Cover",
                    "contain": "Contain"
                },
                "property": "background-size",
                "control_class": "azh-background-size",
                "control_type": "background-size",
                "control_text": "Size"
            },
            {
                "refresh": function($control, $element) {
                    $control.parent().find('.azh-control').trigger('azh-init');
                },
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    "linear-gradient": "Linear",
                    "radial-gradient": "Radial"
                },
                "property": "background-image",
                "pattern": /()([-\w]+)(\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "control_class": "azh-background-gradient-type",
                "control_type": "background-gradient-type",
                "control_text": "Type"
            },
            {
                "type": "dropdown-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    "top left": "Top Left",
                    "top center": "Top Center",
                    "top right": "Top Right",
                    "center left": "Center Left",
                    "center center": "Center Center",
                    "center right": "Center Right",
                    "bottom left": "Bottom Left",
                    "bottom center": "Bottom Center",
                    "bottom right": "Bottom Right"
                },
                "property": "background-image",
                "pattern": /(radial-gradient\(at )([ \w]+)(, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "control_class": "azh-background-radial-gradient-position",
                "control_type": "background-radial-gradient-position",
                "control_text": "Position"
            },
            {
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(linear-gradient\()(\d+)(deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 360,
                "step": 1,
                "control_class": "azh-background-linear-gradient-angle",
                "control_type": "background-linear-gradient-angle",
                "control_text": "Angle"
            },
            {
                "type": "color-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-color",
                "control_type": "background-linear-gradient-first-color",
                "control_text": "First color"
            },
            {
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-location",
                "control_type": "background-linear-gradient-first-location",
                "control_text": "First location"
            },
            {
                "type": "color-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-color",
                "control_type": "background-linear-gradient-second-color",
                "control_text": "Second color"
            },
            {
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(linear-gradient\(\d+deg, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%\))/,
                "default": "linear-gradient(180deg, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-linear-gradient-location",
                "control_type": "background-linear-gradient-second-location",
                "control_text": "Second location"
            },
            {
                "type": "color-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-color",
                "control_type": "background-radial-gradient-first-color",
                "control_text": "First color"
            },
            {
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-location",
                "control_type": "background-radial-gradient-first-location",
                "control_text": "First location"
            },
            {
                "type": "color-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, )(rgba\(\d+,\d+,\d+,\d.?\d*\))( \d+%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-color",
                "control_type": "background-radial-gradient-second-color",
                "control_text": "Second color"
            },
            {
                "type": "integer-style",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "property": "background-image",
                "pattern": /(radial-gradient\(at [ \w]+, rgba\(\d+,\d+,\d+,\d.?\d*\) \d+%, rgba\(\d+,\d+,\d+,\d.?\d*\) )(\d+)(%\))/,
                "default": "radial-gradient(at center center, rgba(255,0,0,1) 50%, rgba(0,255,0,1) 50%)",
                "min": 0,
                "max": 100,
                "step": 1,
                "control_class": "azh-background-radial-gradient-location",
                "control_type": "background-radial-gradient-second-location",
                "control_text": "Second location"
            }
        ]);
        if (video) {
            azh.controls_options = azh.controls_options.concat([
                {
                    "refresh": true,
                    "type": "input-attribute",
                    "input_type": "text",
                    "selector": selector,
                    "menu": "utility",
                    "group": group,
                    "control_text": "Video URL",
                    "control_class": "azh-background-video",
                    "control_type": "background-video",
                    "attribute": "data-background-video",
                    "description": "Insert YouTube link or mp4 video file"
                }
            ]);
        }
    }
    function svg_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "color-style",
                "menu": "utility",
                "group": "SVG style",
                "subgroup": "Normal",
                "property": "fill",
                "control_class": "azh-fill",
                "control_type": "fill",
                "control_text": "Fill color"
            },
            {
                "type": "color-style",
                "menu": "utility",
                "group": "SVG style",
                "subgroup": "Normal",
                "property": "stroke",
                "control_class": "azh-stroke",
                "control_type": "stroke",
                "control_text": "Stroke color"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "SVG style",
                "subgroup": "Normal",
                "property": "stroke-width",
                "min": "0",
                "max": "50",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "stroke-width",
                "control_text": "Stroke width"
            },
            {
                "type": "color-style",
                "attribute": "data-hover",
                "menu": "utility",
                "group": "SVG style",
                "subgroup": "Hover",
                "property": "fill",
                "control_class": "azh-fill",
                "control_type": "hover-fill",
                "control_text": "Fill color"
            },
            {
                "type": "color-style",
                "attribute": "data-hover",
                "menu": "utility",
                "group": "SVG style",
                "subgroup": "Hover",
                "property": "stroke",
                "control_class": "azh-stroke",
                "control_type": "hover-stroke",
                "control_text": "Stroke color"
            },
            {
                "type": "integer-style",
                "attribute": "data-hover",
                "menu": "utility",
                "group": "SVG style",
                "subgroup": "Hover",
                "property": "stroke-width",
                "min": "0",
                "max": "50",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "hover-stroke-width",
                "control_text": "Stroke width"
            }
        ]);
    }
    function triggers_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "post-autocomplete",
                "menu": "utility",
                "group": "Triggers",
                "selector": "[data-fill-from-post]",
                "attribute": "data-fill-from-post",
                "control_class": "azh-dropdown",
                "control_type": "fill-from-post",
                "control_text": "Fill triggered content from post"
            },
            {
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": "Triggers",
                "options": "data-element",
                "attribute": "data-click-trigger",
                "control_class": "azh-dropdown",
                "control_type": "click-trigger",
                "control_text": "Trigger on click"
            },
            {
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": "Triggers",
                "options": "data-element",
                "attribute": "data-hover-trigger",
                "control_class": "azh-dropdown",
                "control_type": "hover-trigger",
                "control_text": "Trigger on hover"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Triggers",
                "attribute": "data-class-from-post-meta",
                "control_class": "azh-class",
                "control_type": "class-from-post-meta",
                "control_text": "Class from post meta"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Triggers",
                "attribute": "data-file-meta-field",
                "control_class": "azh-metakey",
                "control_type": "file-meta-field",
                "control_text": "Metakey - value as URL to file"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Triggers",
                "attribute": "data-video-meta-field",
                "control_class": "azh-metakey",
                "control_type": "video-meta-field",
                "control_text": "Metakey - value as URL to video"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Triggers",
                "attribute": "data-image-meta-field",
                "control_class": "azh-metakey",
                "control_type": "image-meta-field",
                "control_text": "Metakey - value as URL to image"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Triggers",
                "attribute": "data-meta-field",
                "control_class": "azh-metakey",
                "control_type": "meta-field",
                "control_text": "Metakey - value as text"
            }
        ]);
    }
    function section_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": true,
                "type": "toggle-attribute",
                "selector": "[data-full-width]",
                "menu": "utility",
                "group": "Layout",
                "attribute": "data-full-width",
                "control_class": "azh-toggle",
                "control_type": "full-width",
                "control_text": "Full width section"
            },
            {
                "refresh": true,
                "type": "toggle-attribute",
                "selector": "[data-stretch-content]",
                "menu": "utility",
                "group": "Layout",
                "attribute": "data-stretch-content",
                "control_class": "azh-toggle",
                "control_type": "stretch-content",
                "control_text": "Stretch section content"
            },
            {
                "type": "dropdown-attribute",
                "selector": "[data-content-width]",
                "menu": "utility",
                "group": "Layout",
                "options": {
                    "full-width": "Full width",
//                    "container-boxed": "Container boxed",
                    "boxed": "Boxed"
                },
                "attribute": "data-content-width",
                "control_class": "azh-content-width",
                "control_type": "content-width",
                "control_text": "Content Width"
            },
            {
                "type": "integer-style",
                "selector": "[data-content-width] > div:not(.az-overlay)",
                "menu": "utility",
                "group": "Layout",
                "property": "max-width",
                "min": "300",
                "max": "1600",
                "step": "1",
                "units": "px",
                "control_class": "azh-max-width",
                "control_type": "max-width",
                "control_text": "Maximum content width"
            },
            {
                "type": "dropdown-attribute",
                "selector": "[data-column-padding]",
                "menu": "utility",
                "group": "Layout",
                "options": {
                    "0": "0px",
                    "5": "5px",
                    "10": "10px",
                    "15": "15px",
                    "20": "20px",
                    "25": "25px",
                    "30": "30px",
                    "40": "40px",
                    "50": "50px",
                    "60": "60px",
                    "70": "70px"
                },
                "attribute": "data-column-padding",
                "control_class": "azh-dropdown",
                "control_type": "column-padding",
                "control_text": "Column padding"
            },
            {
                "type": "dropdown-attribute",
                "selector": "[data-row-height]",
                "menu": "utility",
                "group": "Layout",
                "options": {
                    "": "Default",
                    "fit-to-screen": "Fit to screen",
                    "min-height": "Min height"
                },
                "attribute": "data-row-height",
                "control_class": "azh-row-height",
                "control_type": "row-height",
                "control_text": "Row height"
            },
            {
                "type": "integer-style",
                "selector": "[data-row-height] > .azh-row",
                "menu": "utility",
                "group": "Layout",
                "property": "min-height",
                "responsive": true,
                "slider": true,
                "units": {
                    "vh": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1440",
                        "step": "1"
                    }
                },
                "control_class": "azh-min-height",
                "control_type": "min-height",
                "control_text": "Minimum Height"
            },
            {
                "type": "dropdown-attribute",
                "selector": "[data-column-position]",
                "menu": "utility",
                "group": "Layout",
                "options": {
                    "stretch": "Stretch",
                    "top": "Top",
                    "middle": "Middle",
                    "bottom": "Bottom"
                },
                "attribute": "data-column-position",
                "control_class": "azh-column-position",
                "control_type": "column-position",
                "control_text": "Column Position"
            },
            {
                "type": "dropdown-attribute",
                "selector": "[data-content-position]",
                "menu": "utility",
                "group": "Layout",
                "options": {
                    "top": "Top",
                    "middle": "Middle",
                    "bottom": "Bottom"
                },
                "attribute": "data-content-position",
                "control_class": "azh-content-position",
                "control_type": "content-position",
                "control_text": "Content Position in Column"
            },
            {
                "type": "integer-style",
                "selector": "[data-column-padding][style]",
                "menu": "utility",
                "group": "Layout",
                "property": "padding-top",
                "min": "0",
                "max": "300",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "padding-top",
                "control_text": "Padding top"
            },
            {
                "type": "integer-style",
                "selector": "[data-column-padding][style]",
                "menu": "utility",
                "group": "Layout",
                "property": "padding-bottom",
                "min": "0",
                "max": "300",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "padding-bottom",
                "control_text": "Padding bottom"
            },
            {
                "type": "integer-style",
                "selector": "[data-column-padding][style]",
                "menu": "utility",
                "group": "Layout",
                "property": "margin-top",
                "min": "-300",
                "max": "300",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "margin-top",
                "control_text": "Margin top"
            },
            {
                "type": "integer-style",
                "selector": "[data-column-padding][style]",
                "menu": "utility",
                "group": "Layout",
                "property": "margin-bottom",
                "min": "-300",
                "max": "300",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "margin-bottom",
                "control_text": "Margin bottom"
            },
        ]);
    }
    function section_background_utility() {
        background_effects_utility('[data-full-width][data-background-type]', 'Background', true, true);
        background_utility('.az-overlay', 'Background overlay');
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "menu": "utility",
                "group": 'Background overlay',
                "min": "0",
                "max": "1",
                "step": "0.01",
                "control_class": "azh-overlay-opacity",
                "control_type": "overlay-opacity",
                "control_text": "Overlay opacity",
                "property": "opacity",
                "selector": '.az-overlay'
            }
        ]);
    }
    function column_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "dropdown-style",
                "selector": "[data-column-position] > .azh-row > [class*='azh-col-']",
                "menu": "utility",
                "responsive": true,
                "options": {
                    "": "Default",
                    "flex-start": "Top",
                    "center": "Middle",
                    "flex-end": "Bottom"
                },
                "property": "align-self",
                "control_class": "azh-column-position",
                "control_type": "column-position",
                "control_text": "Column Position"
            },
            {
                "type": "dropdown-style",
                "selector": "[data-content-position] > .azh-row > [class*='azh-col-']",
                "menu": "utility",
                "responsive": true,
                "options": {
                    "": "Default",
                    "flex-start": "Top",
                    "center": "Middle",
                    "flex-end": "Bottom"
                },
                "property": "justify-content",
                "control_class": "azh-content-position",
                "control_type": "content-position",
                "control_text": "Content Position"
            },
            {
                "type": "dropdown-style",
                "selector": "[data-content-position] > .azh-row > [class*='azh-col-']",
                "menu": "utility",
                "responsive": true,
                "options": {
                    "": "Default",
                    "flex-start": "Left",
                    "center": "Center",
                    "flex-end": "Right"
                },
                "property": "align-items",
                "control_class": "azh-content-align",
                "control_type": "content-align",
                "control_text": "Content Align"
            },
            {
                "type": "integer-style",
                "selector": "[data-content-position] > .azh-row > [class*='azh-col-']",
                "menu": "utility",
                "property": "padding-top",
                "min": "0",
                "max": "300",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "padding-top",
                "control_text": "Padding top"
            },
            {
                "type": "integer-style",
                "selector": "[data-content-position] > .azh-row > [class*='azh-col-']",
                "menu": "utility",
                "property": "padding-bottom",
                "min": "0",
                "max": "300",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "padding-bottom",
                "control_text": "Padding bottom"
            }
        ]);
        background_utility('[data-column-position] > .azh-row > [class*="azh-col-"]', 'Column background');
        border_utility('[data-column-position] > .azh-row > [class*="azh-col-"]', 'Column border');
    }
    function video_utility(selector, group) {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "dropdown-attribute",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "options": {
                    'youtube': 'YouTube',
                    'vimeo': 'Vimeo'
                },
                "control_text": "Video Type",
                "control_class": "azh-video-type",
                "control_type": "video-type",
                "attribute": "data-video-type"
            },
            {
                "refresh": function($control, $element) {
                    $control.parent().find('.azh-control').trigger('azh-init');
                },
                "type": "input-attribute",
                "input_type": "text",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "control_text": "Video URL",
                "control_class": "azh-video-url",
                "control_type": "video-url"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "autoplay",
                "true_value": "1",
                "false_value": "0",
                "default": false,
                "control_text": "Autoplay",
                "control_class": "azh-toggle azh-youtube-autoplay",
                "control_type": "youtube-autoplay"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "rel",
                "true_value": "1",
                "false_value": "0",
                "default": true,
                "control_text": "Suggested Videos",
                "control_class": "azh-toggle azh-youtube-rel",
                "control_type": "youtube-rel"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "controls",
                "true_value": "1",
                "false_value": "0",
                "default": true,
                "control_text": "Player Controls",
                "control_class": "azh-toggle azh-youtube-controls",
                "control_type": "youtube-controls"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "showinfo",
                "true_value": "1",
                "false_value": "0",
                "default": true,
                "control_text": "Player Title & Actions",
                "control_class": "azh-toggle azh-youtube-showinfo",
                "control_type": "youtube-showinfo"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "loop",
                "true_value": "1",
                "false_value": "0",
                "default": false,
                "control_text": "Loop",
                "control_class": "azh-toggle azh-youtube-loop",
                "control_type": "youtube-loop"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "mute",
                "true_value": "1",
                "false_value": "0",
                "default": false,
                "control_text": "Mute",
                "control_class": "azh-toggle azh-youtube-mute",
                "control_type": "youtube-mute"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "autoplay",
                "true_value": "1",
                "false_value": "0",
                "default": false,
                "control_text": "Autoplay",
                "control_class": "azh-toggle azh-vimeo-autoplay",
                "control_type": "vimeo-autoplay"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "byline",
                "true_value": "1",
                "false_value": "0",
                "default": true,
                "control_text": "Intro byline",
                "control_class": "azh-toggle azh-vimeo-byline",
                "control_type": "vimeo-byline"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "title",
                "true_value": "1",
                "false_value": "0",
                "default": true,
                "control_text": "Intro title",
                "control_class": "azh-toggle azh-vimeo-title",
                "control_type": "vimeo-title"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "portrait",
                "true_value": "1",
                "false_value": "0",
                "default": true,
                "control_text": "Intro portrait",
                "control_class": "azh-toggle azh-vimeo-portrait",
                "control_type": "vimeo-portrait"
            },
            {
                "type": "toggle-url-argument",
                "attribute": "src",
                "selector": selector,
                "menu": "utility",
                "group": group,
                "argument": "loop",
                "true_value": "1",
                "false_value": "0",
                "default": false,
                "control_text": "Loop",
                "control_class": "azh-toggle azh-vimeo-loop",
                "control_type": "vimeo-loop"
            },
        ]);
    }
    function box_utility(selector, group) {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-list-style",
                "menu": "utility",
                "group": group,
                "responsive": true,
                "properties": {
                    "margin-top": "Top",
                    "margin-right": "Right",
                    "margin-bottom": "Bottom",
                    "margin-left": "left"
                },
                "min": "-300",
                "max": "300",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer-list",
                "control_type": "box-margin",
                "control_text": "Margin",
                "selector": selector
            },
            {
                "type": "integer-list-style",
                "menu": "utility",
                "group": group,
                "responsive": true,
                "properties": {
                    "padding-top": "Top",
                    "padding-right": "Right",
                    "padding-bottom": "Bottom",
                    "padding-left": "left"
                },
                "min": "0",
                "max": "300",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer-list",
                "control_type": "box-padding",
                "control_text": "Padding",
                "selector": selector
            }
        ]);
    }
    function element_box_utility() {
        box_utility('[data-element]:not([data-element=""]):not([data-element=" "])', "Element-box styles");
    }
    function animation_utility(group, selector) {
        var in_animation_types = {
            "none": "No animation",
            "bounceIn": "bounceIn",
            "bounceInDown": "bounceInDown",
            "bounceInLeft": "bounceInLeft",
            "bounceInRight": "bounceInRight",
            "bounceInUp": "bounceInUp",
            "fadeIn": "fadeIn",
            "fadeInDown": "fadeInDown",
            "fadeInDownBig": "fadeInDownBig",
            "fadeInLeft": "fadeInLeft",
            "fadeInLeftBig": "fadeInLeftBig",
            "fadeInRight": "fadeInRight",
            "fadeInRightBig": "fadeInRightBig",
            "fadeInUp": "fadeInUp",
            "fadeInUpBig": "fadeInUpBig",
            "rotateIn": "rotateIn",
            "rotateInDownLeft": "rotateInDownLeft",
            "rotateInDownRight": "rotateInDownRight",
            "rotateInUpLeft": "rotateInUpLeft",
            "rotateInUpRight": "rotateInUpRight",
            "slideInUp": "slideInUp",
            "slideInDown": "slideInDown",
            "slideInLeft": "slideInLeft",
            "slideInRight": "slideInRight",
            "zoomIn": "zoomIn",
            "zoomInDown": "zoomInDown",
            "zoomInLeft": "zoomInLeft",
            "zoomInRight": "zoomInRight",
            "zoomInUp": "zoomInUp",
            "flipInX": "flipInX",
            "flipInY": "flipInY",
            "lightSpeedIn": "lightSpeedIn",
        };
        var out_animation_types = {
            "none": "No animation",
            "bounceOut": "bounceOut",
            "bounceOutDown": "bounceOutDown",
            "bounceOutLeft": "bounceOutLeft",
            "bounceOutRight": "bounceOutRight",
            "bounceOutUp": "bounceOutUp",
            "fadeOut": "fadeOut",
            "fadeOutDown": "fadeOutDown",
            "fadeOutDownBig": "fadeOutDownBig",
            "fadeOutLeft": "fadeOutLeft",
            "fadeOutLeftBig": "fadeOutLeftBig",
            "fadeOutRight": "fadeOutRight",
            "fadeOutRightBig": "fadeOutRightBig",
            "fadeOutUp": "fadeOutUp",
            "fadeOutUpBig": "fadeOutUpBig",
            "rotateOut": "rotateOut",
            "rotateOutDownLeft": "rotateOutDownLeft",
            "rotateOutDownRight": "rotateOutDownRight",
            "rotateOutUpLeft": "rotateOutUpLeft",
            "rotateOutUpRight": "rotateOutUpRight",
            "slideOutUp": "slideOutUp",
            "slideOutDown": "slideOutDown",
            "slideOutLeft": "slideOutLeft",
            "slideOutRight": "slideOutRight",
            "zoomOut": "zoomOut",
            "zoomOutDown": "zoomOutDown",
            "zoomOutLeft": "zoomOutLeft",
            "zoomOutRight": "zoomOutRight",
            "zoomOutUp": "zoomOutUp",
            "flipOutX": "flipOutX",
            "flipOutY": "flipOutY",
            "lightSpeedOut": "lightSpeedOut",
        };
        var timing = {
            "linear": "linear",
            "ease": "ease",
            "ease-in": "ease-in",
            "ease-out": "ease-out",
            "ease-in-out": "ease-in-out",
        };
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "In animation",
                "control_text": "Type",
                "control_class": "azh-in-animation-type",
                "control_type": "in-animation-type",
                "attribute": "data-in-animation-type",
                "options": in_animation_types,
                "selector": selector
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "In animation",
                "control_text": "Duration (milliseconds)",
                "control_class": "azh-in-animation-duration",
                "control_type": "in-animation-duration",
                "attribute": "data-in-animation-duration",
                "min": "0",
                "max": "1000",
                "step": "100",
                "selector": selector
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "In animation",
                "control_text": "Delay (milliseconds)",
                "control_class": "azh-in-animation-delay",
                "control_type": "in-animation-delay",
                "attribute": "data-in-animation-delay",
                "min": "0",
                "max": "1000",
                "step": "100",
                "selector": selector
            },
            {
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "In animation",
                "control_text": "Timing function",
                "control_class": "azh-in-animation-timing",
                "control_type": "in-animation-timing",
                "attribute": "data-in-animation-timing",
                "options": timing,
                "selector": selector
            },
            {
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "Out animation",
                "control_text": "Type",
                "control_class": "azh-out-animation-type",
                "control_type": "out-animation-type",
                "attribute": "data-out-animation-type",
                "options": out_animation_types,
                "selector": selector
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "Out animation",
                "control_text": "Duration (milliseconds)",
                "control_class": "azh-out-animation-duration",
                "control_type": "out-animation-duration",
                "attribute": "data-out-animation-duration",
                "min": "0",
                "max": "1000",
                "step": "100",
                "selector": selector
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "Out animation",
                "control_text": "Delay (milliseconds)",
                "control_class": "azh-out-animation-delay",
                "control_type": "out-animation-delay",
                "attribute": "data-out-animation-delay",
                "min": "0",
                "max": "1000",
                "step": "100",
                "selector": selector
            },
            {
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": group,
                "subgroup": "Out animation",
                "control_text": "Timing function",
                "control_class": "azh-out-animation-timing",
                "control_type": "out-animation-timing",
                "attribute": "data-out-animation-timing",
                "options": timing,
                "selector": selector
            },
        ]);
    }
    function scroll_reveal_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": function($control, $element) {
                    $control.parent().find('.azh-control').trigger('azh-init');
                },
                "type": "toggle-attribute",
                "selector": '[data-sr]',
                "menu": "utility",
                "group": 'Scroll reveal',
                "attribute": "data-sr",
                "control_class": "azh-sr azh-toggle",
                "control_type": "sr",
                "true_value": 'enter bottom, move 8px, over 0.6s, wait 0.0s',
                "false_value": '',
                "control_text": "Scroll reveal"
            },
            {
                "type": "dropdown-attribute",
                "selector": '[data-sr]',
                "menu": "utility",
                "group": 'Scroll reveal',
                "attribute": "data-sr",
                "options": {
                    "top": "Top",
                    "bottom": "Bottom",
                    "right": "Right",
                    "left": "Left",
                },
                "pattern": /(enter )(\w+)(, [\w-]+ \d+px, over \d.?\d*s, wait \d.?\d*s)/,
                "default": 'enter bottom, move 8px, over 0.6s, wait 0.0s',
                "control_class": "azh-sr-enter",
                "control_type": "sr-enter",
                "control_text": "Enter"
            },
            {
                "type": "integer-attribute",
                "selector": '[data-sr]',
                "menu": "utility",
                "group": 'Scroll reveal',
                "attribute": "data-sr",
                "pattern": /(enter \w+, [\w-]+ )(\d+)(px, over \d.?\d*s, wait \d.?\d*s)/,
                "default": 'enter bottom, move 8px, over 0.6s, wait 0.0s',
                "min": 0,
                "max": 300,
                "step": 1,
                "control_class": "azh-sr-move",
                "control_type": "sr-move",
                "control_text": "Move (px)"
            },
            {
                "type": "integer-attribute",
                "selector": '[data-sr]',
                "menu": "utility",
                "group": 'Scroll reveal',
                "attribute": "data-sr",
                "pattern": /(enter \w+, [\w-]+ \d+px, over )(\d.?\d*)(s, wait \d.?\d*s)/,
                "default": 'enter bottom, move 8px, over 0.6s, wait 0.0s',
                "min": 0,
                "max": 1,
                "step": 0.1,
                "control_class": "azh-sr-over",
                "control_type": "sr-over",
                "control_text": "Over (seconds)"
            },
            {
                "type": "integer-attribute",
                "selector": '[data-sr]',
                "menu": "utility",
                "group": 'Scroll reveal',
                "attribute": "data-sr",
                "pattern": /(enter \w+, [\w-]+ \d+px, over \d.?\d*s, wait )(\d.?\d*)(s)/,
                "default": 'enter bottom, move 8px, over 0.6s, wait 0.0s',
                "min": 0,
                "max": 1,
                "step": 0.1,
                "control_class": "azh-sr-wait",
                "control_type": "sr-wait",
                "control_text": "Wait (seconds)"
            },
            {
                "type": "dropdown-attribute",
                "selector": '[data-sr]',
                "menu": "utility",
                "group": 'Scroll reveal',
                "attribute": "data-sr",
                "options": {
                    "move": "move",
                    "ease": "ease",
                    "ease-in": "ease-in",
                    "ease-out": "ease-out",
                    "ease-in-out": "ease-in-out",
                    "hustle": "hustle",
                },
                "pattern": /(enter \w+, )([\w-]+)( \d+px, over \d.?\d*s, wait \d.?\d*s)/,
                "default": 'enter bottom, move 8px, over 0.6s, wait 0.0s',
                "control_class": "azh-sr-easing",
                "control_type": "sr-easing",
                "control_text": "Easing"
            },
        ]);
    }


    //ELEMENTS
    function google_map_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "selector": ".az-gmap",
                "menu": "utility",
                "group": "Map settings",
                "property": "height",
                "min": "0",
                "max": "1000",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "height",
                "control_text": "Google Map height"
            },
            {
                "refresh": true,
                "type": "integer-attribute",
                "selector": ".az-gmap[data-zoom]",
                "menu": "utility",
                "group": "Map settings",
                "attribute": "data-zoom",
                "control_class": "azh-integer",
                "control_type": "zoom",
                "control_text": "Google Map Zoom"
            },
            {
                "refresh": true,
                "type": "image-attribute",
                "selector": ".az-gmap[data-marker]",
                "menu": "utility",
                "group": "Map settings",
                "attribute": "data-marker",
                "control_class": "azh-image",
                "control_type": "marker",
                "control_text": "Google Map location marker image"
            },
            {
                "refresh": true,
                "type": "integer-attribute",
                "selector": ".az-gmap",
                "menu": "utility",
                "group": "Map settings",
                "attribute": "data-offset-y",
                "min": "-300",
                "max": "300",
                "step": "1",
                "control_class": "azh-integer",
                "control_type": "offset-y",
                "control_text": "Marker offset-y"
            },
            {
                "refresh": true,
                "type": "integer-attribute",
                "selector": ".az-gmap",
                "menu": "utility",
                "group": "Map settings",
                "attribute": "data-offset-x",
                "min": "-300",
                "max": "300",
                "step": "1",
                "control_class": "azh-integer",
                "control_type": "offset-x",
                "control_text": "Marker offset-x"
            },
            {
                "refresh": true,
                "type": "input-attribute",
                "selector": ".az-gmap[data-gmap-api-key]",
                "menu": "utility",
                "group": "Map settings",
                "attribute": "data-gmap-api-key",
                "control_class": "azh-text",
                "control_type": "gmap-api-key",
                "control_text": "Google Map API key"
            },
            {
                "refresh": true,
                "type": "textarea-attribute",
                "selector": ".az-gmap",
                "menu": "utility",
                "group": "Map settings",
                "attribute": "data-styles",
                "control_class": "azh-text",
                "control_type": "styles",
                "description": 'Use <a href="https://snazzymaps.com/" target="_blank">styles generator</a> to make JSON',
                "control_text": "Google Map styles JSON code"
            }
        ]);
        //
        azh.modal_options = azh.modal_options.concat([
            {
                "refresh": true,
                "menu": "utility",
                "group": "Map settings",
                "button_text": "Edit Google Map Location",
                "button_class": "azh-gmap-location",
                "button_type": "azh-gmap-location",
                "title": "Edit Google Map Location",
                "desc": "Specify the latitude and longitude of the google map",
                "selector": ".az-gmap",
                "attributes": {
                    'data-latitude': {
                        "label": "Latitude"
                    },
                    'data-longitude': {
                        "label": "Longitude"
                    }
                }
            }
        ]);
    }
    function free_positioning_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Free positioning settings",
                "selector": ".az-free-positioning",
                "property": "width",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "width",
                "control_text": "Width"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Free positioning settings",
                "selector": ".az-free-positioning",
                "property": "height",
                "responsive": true,
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "height",
                "control_text": "Height"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Free positioning element",
                "selector": ".az-free-positioning > [data-element]",
                "property": "z-index",
                "control_class": "azh-integer",
                "control_type": "z-index",
                "control_text": "Element z-index"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning element",
                "control_text": "Max-width of container width",
                "control_class": "azh-toggle",
                "control_type": "container",
                "selector": ".az-free-positioning > [data-element]",
                "class": "az-container"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning element",
                "control_text": "Full width",
                "control_class": "azh-toggle",
                "control_type": "full-width",
                "selector": ".az-free-positioning > [data-element]",
                "class": "az-full-width"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning element",
                "control_text": "Full height",
                "control_class": "azh-toggle",
                "control_type": "full-height",
                "selector": ".az-free-positioning > [data-element]",
                "class": "az-full-height"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning settings",
                "control_text": "Auto rescale",
                "control_class": "azh-toggle",
                "control_type": "auto-rescale",
                "selector": ".az-free-positioning",
                "class": "az-auto-rescale"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning settings",
                "control_text": "Full width auto upscale",
                "control_class": "azh-toggle",
                "control_type": "upscale",
                "selector": ".az-free-positioning",
                "class": "az-auto-upscale"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning settings",
                "control_text": "Percentage positions",
                "control_class": "azh-toggle",
                "control_type": "percentage",
                "selector": ".az-free-positioning",
                "class": "az-percentage"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning settings",
                "control_text": "Full screen height",
                "control_class": "azh-toggle",
                "control_type": "full-height",
                "selector": ".az-free-positioning",
                "class": "az-full-screen-height"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning settings",
                "control_text": "As layer for parent",
                "control_class": "azh-toggle azh-free-positioning-layer",
                "control_type": "layer",
                "selector": ".az-free-positioning",
                "class": "az-layer"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Free positioning settings",
                "selector": ".az-free-positioning",
                "property": "z-index",
                "control_class": "azh-integer azh-free-positioning-z-index",
                "control_type": "z-index",
                "control_text": "Layer z-index"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Free positioning settings",
                "control_text": "Disable mouse events",
                "control_class": "azh-toggle azh-free-positioning-pointer-events",
                "control_type": "pointer-events",
                "selector": ".az-free-positioning",
                "class": "az-disable-pointer-events"
            }
        ]);
        background_utility('.az-free-positioning', 'Background');
    }
    function button_utility() {
        function hover_refresh($control, $element) {
            azh.window.get(0).azh.refresh_hover_css_rules($element);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "url-attribute",
                "menu": "utility",
                "attribute": "href",
                "control_class": "azh-link",
                "control_type": "link",
                "control_text": "Button URL",
                "selector": '.az-button a'
            },
            {
                "type": "dropdown-attribute",
                "selector": ".az-button",
                "menu": "utility",
                "options": {
                    "none": "No icon",
                    "left": "Left",
                    "right": "Right"
                },
                "attribute": "data-icon",
                "control_class": "azh-button-icon",
                "control_type": "button-icon",
                "control_text": "Icon"
            },
            {
                "type": "icon-class",
                "menu": "utility",
                "control_class": "azh-left-icon",
                "control_type": "left-icon",
                "control_text": "Icon",
                "selector": '.az-button .az-icon:first-child'
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "responsive": true,
                "property": "margin-right",
                "min": "0",
                "max": "50",
                "step": "1",
                "units": "px",
                "control_class": "azh-left-icon-spacing",
                "control_type": "icon-spacing",
                "control_text": "Icon Spacing",
                "selector": '.az-button .az-icon:first-child'
            },
            {
                "type": "icon-class",
                "menu": "utility",
                "control_class": "azh-right-icon",
                "control_type": "right-icon",
                "control_text": "Icon",
                "selector": '.az-button .az-icon:last-child'
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "responsive": true,
                "property": "margin-left",
                "min": "0",
                "max": "50",
                "step": "1",
                "units": "px",
                "control_class": "azh-right-icon-spacing",
                "control_type": "icon-spacing",
                "control_text": "Icon Spacing",
                "selector": '.az-button .az-icon:last-child'
            }
        ]);
        box_utility('.az-button a', "Button-box styles");
        text_utility('.az-button', 'Text styles');
        font_utility('.az-button a', 'Font styles', 'Normal');
        font_utility('.az-button a', 'Font styles', 'Hover', 'data-hover', hover_refresh);
        background_utility('.az-button a', 'Background', 'Normal');
        background_utility('.az-button a', 'Background', 'Hover', 'data-hover', hover_refresh);
        border_utility('.az-button a', 'Border', 'Normal');
        border_utility('.az-button a', 'Border', 'Hover', 'data-hover', hover_refresh);
        box_shadow_utility('.az-button a', 'Shadow', 'Normal');
        box_shadow_utility('.az-button a', 'Shadow', 'Hover', 'data-hover', hover_refresh);
    }
    function icon_utility() {
        function hover_refresh($control, $element) {
            azh.window.get(0).azh.refresh_hover_css_rules($element);
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "icon-class",
                "menu": "utility",
                "control_class": "azh-icon",
                "control_type": "icon",
                "control_text": "Icon",
                "selector": '.az-icon-element .az-icon'
            },
        ]);
        box_utility('.az-icon-element .az-icon', "Icon-box styles");
        text_utility('.az-icon-element', 'Text styles');
        font_utility('.az-icon-element .az-icon', 'Font styles', 'Normal');
        font_utility('.az-icon-element .az-icon', 'Font styles', 'Hover', 'data-hover', hover_refresh);
        background_utility('.az-icon-element .az-icon', 'Background', 'Normal');
        background_utility('.az-icon-element .az-icon', 'Background', 'Hover', 'data-hover', hover_refresh);
        border_utility('.az-icon-element .az-icon', 'Border', 'Normal');
        border_utility('.az-icon-element .az-icon', 'Border', 'Hover', 'data-hover', hover_refresh);
        box_shadow_utility('.az-icon-element .az-icon', 'Shadow', 'Normal');
        box_shadow_utility('.az-icon-element .az-icon', 'Shadow', 'Hover', 'data-hover', hover_refresh);
    }
    function hyperlink_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "url-attribute",
                "menu": "utility",
                "attribute": "href",
                "control_class": "azh-link",
                "control_type": "link",
                "control_text": "Link URL",
                "selector": 'a.az-hyperlink'
            }
        ]);
    }
    function image_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "image-attribute",
                "menu": "utility",
                "group": "Image",
                "attribute": "src",
                "control_class": "azh-image",
                "control_type": "image",
                "control_text": "Image URL",
                "selector": '.az-image img'
            },
            {
                "type": "radio-style",
                "menu": "utility",
                "group": "Image",
                "selector": '.az-image',
                "responsive": true,
                "property": "text-align",
                "options": {
                    "left": "Left",
                    "center": "Center",
                    "right": "Right"
                },
                "control_class": "azh-text-align",
                "control_type": "text-align",
                "control_text": "Image alignment"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Image",
                "responsive": true,
                "property": "max-width",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "%",
                "control_class": "azh-size",
                "control_type": "size",
                "control_text": "Size",
                "selector": '.az-image img'
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Image",
                "min": "0",
                "max": "1",
                "step": "0.01",
                "control_class": "azh-opacity",
                "control_type": "opacity",
                "control_text": "Opacity",
                "property": "opacity",
                "selector": '.az-image img'
            }
        ]);
        border_utility('.az-image img', 'Border');
        box_shadow_utility('.az-image img', 'Shadow');
    }
    function video_element_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "selector": ".az-video",
                "menu": "utility",
                "group": "Video",
                "property": "height",
                "responsive": true,
                "min": "0",
                "max": "1000",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "height",
                "control_text": "Video height"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Video",
                "responsive": true,
                "property": "width",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "%",
                "control_class": "azh-size",
                "control_type": "size",
                "control_text": "Video size",
                "selector": '.az-video'
            }
        ]);
        video_utility(".az-video", "Video");
    }
    function background_element_utility() {
        function hover_refresh($control, $element) {
            azh.window.get(0).azh.refresh_hover_css_rules($element);
        }
        background_utility('.az-background', 'Background', 'Normal');
        background_utility('.az-background', 'Background', 'Hover', 'data-hover', hover_refresh);
        border_utility('.az-background', 'Border', 'Normal');
        border_utility('.az-background', 'Border', 'Hover', 'data-hover', hover_refresh);
        box_shadow_utility('.az-background', 'Shadow', 'Normal');
        box_shadow_utility('.az-background', 'Shadow', 'Hover', 'data-hover', hover_refresh);
        font_utility('.az-background', 'Font styles', 'Normal');
        font_utility('.az-background', 'Font styles', 'Hover', 'data-hover', hover_refresh);
        text_utility('.az-background', 'Text styles');
        box_utility('.az-background', "Background-box styles");
    }
    function form_utility() {
        function hover_refresh($control, $element) {
            azh.window.get(0).azh.refresh_hover_css_rules($element);
        }
        function checkboxes_utility() {
            azh.controls_options = azh.controls_options.concat([
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Checkbox-field name",
                    "pattern": /()(.+)(\[\])/,
                    "default": "checkbox[]",
                    "control_class": "azh-name",
                    "control_type": "name",
                    "selector": ".az-checkboxes",
                    "multiplying_selector": "input[type='checkbox'][name]",
                    "attribute": "name",
                    "unique_wrapper": 'form, [data-section]',
                    "unique": '[name="{name}"]',
                    "unique_exception": '[name*="[]"]'
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Checkbox value",
                    "control_class": "azh-checkbox-value",
                    "control_type": "value",
                    "selector": ".az-checkboxes input[type='checkbox']",
                    "attribute": "value"
                },
                {
                    "type": "input-innertext",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Checkbox label",
                    "control_class": "azh-checkbox-label",
                    "control_type": "label",
                    "selector": ".az-checkboxes.az-textual label > span:not(.az-tick)"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Horizontal spacing",
                    "control_class": "azh-checkbox-h-spacing",
                    "control_type": "h-spacing",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "margin-right",
                    "selector": ".az-checkboxes",
                    "multiplying_selector": "label"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Vertical spacing",
                    "control_class": "azh-checkbox-v-spacing",
                    "control_type": "v-spacing",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "margin-bottom",
                    "selector": ".az-checkboxes",
                    "multiplying_selector": "label"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Tick indent",
                    "control_class": "azh-checkbox-indent",
                    "control_type": "indent",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "margin-right",
                    "selector": ".az-checkboxes",
                    "multiplying_selector": "label .az-tick"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Tick width",
                    "control_class": "azh-checkbox-width",
                    "control_type": "width",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "width",
                    "selector": ".az-checkboxes",
                    "multiplying_selector": "label .az-tick"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Tick height",
                    "control_class": "azh-checkbox-height",
                    "control_type": "height",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "height",
                    "selector": ".az-checkboxes",
                    "multiplying_selector": "label .az-tick"
                },
                {
                    "type": "icon-class",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_class": "azh-icon",
                    "control_type": "icon",
                    "control_text": "Tick icon",
                    "selector": '.az-checkboxes',
                    "multiplying_selector": 'span.az-tick .az-icon'
                }
            ]);
            font_utility('.az-checkboxes.az-textual', 'Font styles');
            text_utility('.az-checkboxes.az-textual', 'Text styles');

            font_utility('.az-checkboxes', 'Tick font styles', false, false, false, 'span.az-tick');
            border_utility('.az-checkboxes', 'Tick border', false, false, false, 'span.az-tick');
            background_utility('.az-checkboxes', 'Tick background', false, false, false, 'span.az-tick');
            box_shadow_utility('.az-checkboxes', 'Tick shadow', false, false, false, 'span.az-tick');
        }
        function radio_button_utility() {
            azh.controls_options = azh.controls_options.concat([
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Radio-field name",
                    "control_class": "azh-name",
                    "control_type": "name",
                    "selector": ".az-radio-buttons",
                    "multiplying_selector": "input[type='radio'][name]",
                    "attribute": "name",
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Radio button value",
                    "control_class": "azh-radio-value",
                    "control_type": "value",
                    "selector": ".az-radio-buttons input[type='radio']",
                    "attribute": "value"
                },
                {
                    "type": "input-innertext",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Radio button label",
                    "control_class": "azh-radio-label",
                    "control_type": "label",
                    "selector": ".az-radio-buttons.az-textual label > span:not(.az-tick)"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Horizontal spacing",
                    "control_class": "azh-radio-h-spacing",
                    "control_type": "h-spacing",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "margin-right",
                    "selector": ".az-radio-buttons",
                    "multiplying_selector": "label"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Vertical spacing",
                    "control_class": "azh-radio-v-spacing",
                    "control_type": "v-spacing",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "margin-bottom",
                    "selector": ".az-radio-buttons",
                    "multiplying_selector": "label"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Tick indent",
                    "control_class": "azh-radio-indent",
                    "control_type": "indent",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "margin-right",
                    "selector": ".az-radio-buttons",
                    "multiplying_selector": "label .az-tick"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Tick width",
                    "control_class": "azh-radio-width",
                    "control_type": "width",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "width",
                    "selector": ".az-radio-buttons",
                    "multiplying_selector": "label .az-tick"
                },
                {
                    "type": "integer-style",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_text": "Tick height",
                    "control_class": "azh-radio-height",
                    "control_type": "height",
                    "min": "0",
                    "max": "50",
                    "step": "1",
                    "units": "px",
                    "property": "height",
                    "selector": ".az-radio-buttons",
                    "multiplying_selector": "label .az-tick"
                },
                {
                    "type": "icon-class",
                    "menu": "utility",
                    "group": "Form field styles",
                    "control_class": "azh-icon",
                    "control_type": "icon",
                    "control_text": "Tick icon",
                    "selector": '.az-radio-buttons',
                    "multiplying_selector": 'span.az-tick .az-icon'
                }
            ]);
            font_utility('.az-radio-buttons.az-textual', 'Font styles');
            text_utility('.az-radio-buttons.az-textual', 'Text styles');

            font_utility('.az-radio-buttons', 'Tick font styles', false, false, false, 'span.az-tick');
            border_utility('.az-radio-buttons', 'Tick border', false, false, false, 'span.az-tick');
            background_utility('.az-radio-buttons', 'Tick background', false, false, false, 'span.az-tick');
            box_shadow_utility('.az-radio-buttons', 'Tick shadow', false, false, false, 'span.az-tick');
        }
        function select_utility() {
            azh.controls_options = azh.controls_options.concat([
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Multiselect-field name",
                    "pattern": /()(.+)(\[\])/,
                    "default": "multiselect[]",
                    "control_class": "azh-name",
                    "control_type": "name",
                    "selector": "select[multiple][name].az-select",
                    "attribute": "name",
                    "unique_wrapper": 'form, [data-section]',
                    "unique": '[name="{name}"]',
                    "unique_exception": '[name*="[]"]'
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Dropdown-field name",
                    "control_class": "azh-name",
                    "control_type": "name",
                    "selector": "select:not([multiple])[name].az-select",
                    "attribute": "name",
                    "unique_wrapper": 'form, [data-section]',
                    "unique": '[name="{name}"]',
                    "unique_exception": '[name*="[]"]'
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Select-option value",
                    "control_class": "azh-option-value",
                    "control_type": "value",
                    "selector": "select.az-select option",
                    "attribute": "value"
                },
                {
                    "type": "input-innertext",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Select-option label",
                    "control_class": "azh-option-label",
                    "control_type": "label",
                    "selector": "select.az-select option"
                }
            ]);
            font_utility('.az-select', 'Form field font styles');
            text_utility('.az-select', 'Form field text styles');
            background_utility('.az-select', 'Form field background');
            border_utility('.az-select', 'Form field border');
            box_shadow_utility('.az-select', 'Form field shadow');
            box_utility('.az-select', "Form field-box styles");
        }
        function field_utility() {
            azh.controls_options = azh.controls_options.concat([
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Field name",
                    "control_class": "azh-name",
                    "control_type": "name",
                    "selector": "[name].az-field, [name].az-file-field",
                    "attribute": "name",
                    "unique_wrapper": 'form, [data-section]',
                    "unique": '[name="{name}"]',
                    "unique_exception": '[name*="[]"]'
                },
                {
                    "type": "dropdown-attribute",
                    "selector": 'input.az-field:not([type="file"]):not([type="range"])',
                    "menu": "utility",
                    "group": "Form field settings",
                    "options": {
                        "text": 'text',
                        "color": 'color',
                        "date": 'date',
                        "datetime": 'datetime',
                        "datetime-local": 'datetime-local',
                        "email": 'email',
                        "number": 'number',
                        "tel": 'tel',
                        "time": 'time',
                        "url": 'url',
                        "month": 'month',
                        "week": 'week'
                    },
                    "attribute": "type",
                    "control_class": "azh-dropdown",
                    "control_type": "input-type",
                    "control_text": "Input type"
                },
                {
                    "type": "exists-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Required",
                    "control_class": "azh-toggle",
                    "control_type": "required",
                    "selector": "form input:not([type='submit']).az-field, form .az-file-field",
                    "attribute": "required"
                },
                {
                    "type": "integer-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "attribute": "maxlength",
                    "control_class": "azh-maxlength",
                    "control_type": "maxlength",
                    "selector": "input[maxlength].az-field",
                    "control_text": "Maximum input length"
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "attribute": "pattern",
                    "control_class": "azh-pattern",
                    "control_type": "pattern",
                    "selector": "input[pattern].az-field",
                    "control_text": "Input regular expression"
                },
                {
                    "refresh": true,
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "attribute": "data-mask",
                    "control_class": "azh-mask",
                    "control_type": "mask",
                    "selector": "input[data-mask].az-field",
                    "control_text": "Value mask, use: 'a', '9', '*'"
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Default field value",
                    "control_class": "azh-value",
                    "control_type": "value",
                    "selector": "input[value].az-field",
                    "attribute": "value"
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Minimum",
                    "control_class": "azh-minimum",
                    "control_type": "minimum",
                    "selector": "input[min].az-field",
                    "attribute": "min"
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Maximum",
                    "control_class": "azh-maximum",
                    "control_type": "maximum",
                    "selector": "input[max].az-field",
                    "attribute": "max"
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Step",
                    "control_class": "azh-step",
                    "control_type": "step",
                    "selector": "input[step].az-field",
                    "attribute": "step"
                },
                {
                    "type": "input-attribute",
                    "menu": "utility",
                    "group": "Form field settings",
                    "control_text": "Field placeholder",
                    "control_class": "azh-field-placeholder",
                    "control_type": "field-placeholder",
                    "selector": "[placeholder].az-field",
                    "attribute": "placeholder"
                }
            ]);
            font_utility('.az-field', 'Font styles');
            text_utility('.az-field', 'Text styles');
            background_utility('.az-field', 'Background');
            border_utility('.az-field', 'Border');
            box_shadow_utility('.az-field', 'Shadow');
            box_utility('.az-field', "Form field-box styles");
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "radio-classes",
                "menu": "utility",
                "selector": ".az-field, .az-select",
                "property": "margin",
                "classes": {
                    "az-left": "Left",
                    "az-center": "Center",
                    "az-right": "Right",
                    "az-full-width": "Full width",
                },
                "control_class": "azh-horizontal-align",
                "control_type": "horizontal-align",
                "control_text": "Horizontal align"
            },
        ]);
        checkboxes_utility();
        radio_button_utility();
        select_utility();
        field_utility();
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "exists-attribute",
                "menu": "utility",
                "group": "Form field settings",
                "control_text": "Required",
                "control_class": "azh-toggle",
                "control_type": "required",
                "selector": "form input[type='checkbox'], form input[type='radio']",
                "attribute": "required"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Form field settings",
                "control_text": "Hidden field name",
                "control_class": "azh-name",
                "control_type": "name",
                "selector": "[type='hidden'][name]:not([name='form_title'])",
                "attribute": "name",
                "unique_wrapper": 'form, [data-section]',
                "unique": '[name="{name}"]',
                "unique_exception": '[name*="[]"]'
            },
            {
                "type": "exists-attribute",
                "menu": "utility",
                "group": "Form field settings",
                "control_text": "Checked",
                "control_class": "azh-toggle",
                "control_type": "checked",
                "selector": "form input[type='checkbox'], form input[type='radio']",
                "attribute": "checked"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Form settings",
                "control_text": "Backend form identifier",
                "control_class": "azh-form-title",
                "control_type": "hidden",
                "selector": "[type='hidden'][name='form_title']",
                "attribute": "value"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Form field settings",
                "control_text": "Hidden field value",
                "control_class": "azh-hidden",
                "control_type": "hidden",
                "selector": "input[type='hidden'][value]:not([name='form_title'])",
                "attribute": "value"
            },
            {
                "type": "url-attribute",
                "menu": "utility",
                "group": "Form settings",
                "control_text": "Confirmation redirect",
                "control_class": "azh-redirect",
                "control_type": "redirect",
                "selector": "form[data-azh-form]",
                "attribute": "data-success-redirect"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Form settings",
                "control_text": "Confirmation message",
                "control_class": "azh-success",
                "control_type": "success",
                "selector": "form[data-success]",
                "attribute": "data-success"
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Form settings",
                "control_text": "Error message",
                "control_class": "azh-error",
                "control_type": "error",
                "selector": "form[data-error]",
                "attribute": "data-error"
            },
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Form settings",
                "control_text": "Horizontal layout",
                "control_class": "azh-toggle azh-horizontal",
                "control_type": "horizontal",
                "selector": ".az-form",
                "class": "az-horizontal"
            },
            {
                "type": "radio-classes",
                "menu": "utility",
                "selector": ".az-form button",
                "property": "margin",
                "classes": {
                    "az-left": "Left",
                    "az-center": "Center",
                    "az-right": "Right",
                    "az-full-width": "Full width",
                },
                "control_class": "azh-horizontal-align",
                "control_type": "horizontal-align",
                "control_text": "Submit button horizontal align"
            },
            {
                "refresh": true,
                "type": "input-attribute",
                "input_type": "text",
                "menu": "utility",
                "group": "Form field settings",
                "control_text": "re-CAPTCHA sitekey",
                "control_class": "azh-sitekey",
                "control_type": "sitekey",
                "selector": ".g-recaptcha",
                "attribute": "data-sitekey"
            },
        ]);

        box_utility('.az-form button', "Submit button-box styles");
        text_utility('.az-form button', 'Submit button text styles');
        font_utility('.az-form button', 'Submit button font styles', 'Normal');
        font_utility('.az-form button', 'Submit button font styles', 'Hover', 'data-hover', hover_refresh);
        background_utility('.az-form button', 'Submit button background', 'Normal');
        background_utility('.az-form button', 'Submit button background', 'Hover', 'data-hover', hover_refresh);
        border_utility('.az-form button', 'Submit button border', 'Normal');
        border_utility('.az-form button', 'Submit button border', 'Hover', 'data-hover', hover_refresh);
        box_shadow_utility('.az-form button', 'Submit button shadow', 'Normal');
        box_shadow_utility('.az-form button', 'Submit button shadow', 'Hover', 'data-hover', hover_refresh);
    }
    function polygone_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Polygone",
                "selector": ".az-polygone",
                "property": "padding",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "padding",
                "control_text": "Inner space"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Polygone",
                "selector": ".az-polygone",
                "property": "width",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "width",
                "control_text": "Width"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Polygone",
                "selector": ".az-polygone",
                "property": "height",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "height",
                "control_text": "Height"
            }
        ]);
    }
    function text_element_utility() {
        font_utility('.az-text', 'Font styles');
        text_utility('.az-text', 'Text styles');
    }
    function heading_element_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "html-tag",
                "selector": ".az-heading",
                "menu": "utility",
                "options": {
                    "h1": "h1",
                    "h2": "h2",
                    "h3": "h3",
                    "h4": "h4",
                    "h5": "h5",
                    "h6": "h6",
                },
                "control_class": "azh-tag",
                "control_type": "tag",
                "control_text": "HTML tag"
            },
        ]);
        font_utility('.az-heading', 'Font styles');
        text_utility('.az-heading', 'Text styles');
    }
    function separator_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "color-style",
                "selector": ".az-separator div",
                "menu": "utility",
                "property": "background-color",
                "control_class": "azh-background-color",
                "control_type": "background-color",
                "control_text": "Background color"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "selector": ".az-separator div",
                "property": "width",
                "slider": true,
                "responsive": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "width",
                "control_text": "Width"
            },
            {
                "type": "radio-style",
                "menu": "utility",
                "selector": ".az-separator div",
                "responsive": true,
                "property": "margin",
                "options": {
                    "0 auto 0 0": "Left",
                    "0 auto 0 auto": "Center",
                    "0 0 0 auto": "Right",
                },
                "control_class": "azh-horizontal-align",
                "control_type": "horizontal-align",
                "control_text": "Horizontal align"
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "selector": ".az-separator div",
                "property": "height",
                "slider": true,
                "min": "1",
                "max": "10",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "height",
                "control_text": "Height"
            },
            {
                "type": "integer-style",
                "selector": '.az-separator',
                "menu": "utility",
                "property": "padding-top",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "padding-top",
                "control_text": "Padding top"
            },
            {
                "type": "integer-style",
                "selector": '.az-separator',
                "menu": "utility",
                "property": "padding-bottom",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_class": "azh-integer",
                "control_type": "padding-bottom",
                "control_text": "Padding bottom"
            },
            {
                "type": "integer-list-style",
                "menu": "utility",
                "selector": '.az-separator div',
                "properties": {
                    "border-top-left-radius": "Top Left",
                    "border-top-right-radius": "Top Right",
                    "border-bottom-left-radius": "Bottom Left",
                    "border-bottom-right-radius": "Bottom Right"
                },
                "min": "0",
                "max": "100",
                "step": "1",
                "units": 'px',
                "control_class": "azh-border-radius",
                "control_type": "border-radius",
                "control_text": "Border radius"
            }
        ]);
    }
    function slider_utility() {
        function slider_refresh($control, $element) {
            if ($element.data('swiper') && $element.data('swiper_get_params')) {
                var swiper = $element.data('swiper');
                var params = $element.data('swiper_get_params')($element);
                swiper.params = $.extend(swiper.params, params);
                swiper.update();
            }
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "toggle-attribute",
                "menu": "utility",
                "group": "Slides",
                "attribute": "data-hashnavigation",
                "control_class": "azh-hashNavigation azh-toggle",
                "control_type": "hashNavigation",
                "control_text": "Enable hash navigation",
                "selector": '.az-swiper'
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Slides",
                "attribute": "data-hash",
                "control_class": "azh-hash",
                "control_type": "hash",
                "control_text": "Slide hash",
                "selector": '.az-swiper > .az-wrapper > .az-slide'
            },
            {
                "refresh": slider_refresh,
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "attribute": "data-slidesperview",
                "control_class": "azh-slidesPerView",
                "control_type": "spaceBetween",
                "control_text": "Slides per view",
                "min": "1",
                "max": "10",
                "step": "1",
                "selector": '.az-swiper '
            },
            {
                "refresh": slider_refresh,
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "attribute": "data-spacebetween",
                "control_class": "azh-spaceBetween",
                "control_type": "spaceBetween",
                "control_text": "Space between slides",
                "min": "0",
                "max": "100",
                "step": "1",
                "selector": '.az-swiper '
            },
            {
                "refresh": slider_refresh,
                "type": "toggle-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "attribute": "data-centeredslides",
                "control_class": "azh-centeredSlides azh-toggle",
                "control_type": "centeredSlides",
                "control_text": "Centered slides",
                "selector": '.az-swiper'
            },
            {
                "refresh": slider_refresh,
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "attribute": "data-speed",
                "control_class": "azh-speed",
                "control_type": "speed",
                "control_text": "Slide speed",
                "min": "0",
                "max": "1000",
                "step": "10",
                "selector": '.az-swiper '
            },
            {
                "refresh": slider_refresh,
                "type": "toggle-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "attribute": "data-loop",
                "control_class": "azh-loop azh-toggle",
                "control_type": "loop",
                "control_text": "Loop",
                "selector": '.az-swiper'
            },
            {
                "refresh": slider_refresh,
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "attribute": "data-autoplay-delay",
                "control_class": "azh-autoplay-delay",
                "control_type": "autoplay-delay",
                "control_text": "Autoplay delay",
                "min": "0",
                "max": "10000",
                "step": "100",
                "selector": '.az-swiper'
            },
            {
                "refresh": true,
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": "Slider settings",
                "options": {
                    "slide": "slide",
                    "fade": "fade",
                    "cube": "cube",
                    "coverflow": "coverflow",
                    "flip": "flip"
                },
                "attribute": "data-effect",
                "control_class": "azh-effect",
                "control_type": "effect",
                "control_text": "Effect",
                "selector": '.az-swiper'
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slide settings",
                "attribute": "data-swiper-parallax",
                "control_class": "azh-parallax",
                "control_type": "parallax",
                "control_text": "Parallax",
                "slider": true,
                "units": {
                    "px": {
                        "min": "-300",
                        "max": "+300",
                        "step": "1"
                    },
                    "%": {
                        "min": "-100",
                        "max": "100",
                        "step": "1"
                    }
                },
                "selector": '.az-swiper > .az-wrapper > .az-slide [data-element]:not([data-element=""]):not([data-element=" "])'
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slide settings",
                "attribute": "data-swiper-parallax-x",
                "control_class": "azh-parallax-x",
                "control_type": "parallax-x",
                "control_text": "X-axis parallax",
                "slider": true,
                "units": {
                    "px": {
                        "min": "-300",
                        "max": "+300",
                        "step": "1"
                    },
                    "%": {
                        "min": "-100",
                        "max": "100",
                        "step": "1"
                    }
                },
                "selector": '.az-swiper > .az-wrapper > .az-slide [data-element]:not([data-element=""]):not([data-element=" "])'
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slide settings",
                "attribute": "data-swiper-parallax-y",
                "control_class": "azh-parallax-y",
                "control_type": "parallax-y",
                "control_text": "Y-axis parallax",
                "slider": true,
                "units": {
                    "px": {
                        "min": "-300",
                        "max": "+300",
                        "step": "1"
                    },
                    "%": {
                        "min": "-100",
                        "max": "100",
                        "step": "1"
                    }
                },
                "selector": '.az-swiper > .az-wrapper > .az-slide [data-element]:not([data-element=""]):not([data-element=" "])'
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slide settings",
                "attribute": "data-swiper-parallax-scale",
                "control_class": "azh-parallax-scale",
                "control_type": "parallax-scale",
                "control_text": "Scale parallax",
                "min": "0",
                "max": "3",
                "step": "0.1",
                "selector": '.az-swiper > .az-wrapper > .az-slide [data-element]:not([data-element=""]):not([data-element=" "])'
            },
            {
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Slide settings",
                "attribute": "data-swiper-parallax-opacity",
                "control_class": "azh-parallax-opacity",
                "control_type": "parallax-opacity",
                "control_text": "Opacity parallax",
                "min": "0",
                "max": "1",
                "step": "0.1",
                "selector": '.az-swiper > .az-wrapper > .az-slide [data-element]:not([data-element=""]):not([data-element=" "])'
            }
        ]);
    }
    function isotope_utility() {
        function isotope_refresh($control, $element) {
            var $items = $element.find('.az-isotope-items');
            if (!$items.length) {
                $items = $element.closest('.az-isotope-items');
            }
            $items.isotope('layout');
        }
        function isotope_active_filter_refresh($control, $element) {
            var $filters = $element.find('.az-isotope-filters');
            if (!$filters.length) {
                $filters = $element.closest('.az-isotope-filters');
            }
            if ($filters.data('refresh_active_css_rules')) {
                $filters.data('refresh_active_css_rules')($filters);
            }
        }
        azh.controls_options = azh.controls_options.concat([
            {
                "refresh": isotope_refresh,
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Grid items",
                "attribute": "data-columns",
                "responsive": true,
                "min": "1",
                "max": "10",
                "step": "1",
                "control_class": "azh-columns",
                "control_type": "columns",
                "control_text": "Item width (columns number)",
                "selector": '.az-isotope-items > .az-item'
            },
            {
                "refresh": isotope_refresh,
                "type": "integer-attribute",
                "menu": "utility",
                "group": "Grid settings",
                "attribute": "data-columns",
                "control_class": "azh-columns",
                "control_type": "columns",
                "responsive": true,
                "min": "1",
                "max": "10",
                "step": "1",
                "control_text": "Columns number",
                "selector": '.az-isotope-items'
            },
            {
                "refresh": isotope_refresh,
                "type": "dropdown-attribute",
                "menu": "utility",
                "group": "Grid settings",
                "attribute": "data-gutter",
                "control_class": "azh-gutter",
                "control_type": "gutter",
                "options": {
                    "0": "0px",
                    "1": "1px",
                    "2": "2px",
                    "3": "3px",
                    "4": "4px",
                    "5": "5px",
                    "10": "10px",
                    "15": "15px",
                    "20": "20px",
                    "25": "25px",
                    "30": "30px",
                },
                "control_text": "Gutter",
                "selector": '.az-isotope-items'
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Grid settings",
                "property": "margin-right",
                "control_class": "azh-filters-space",
                "control_type": "filters-space",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "control_text": "Filters space",
                "multiplying_selector": "[data-filter]",
                "selector": '.az-isotope-filters'
            }
        ]);
        text_utility('.az-isotope-filters', 'Filter text styles');
        font_utility('.az-isotope-filters', 'Filter font styles', 'Normal', false, false, '[data-filter] span');
        font_utility('.az-isotope-filters', 'Filter font styles', 'Active', 'data-active', isotope_active_filter_refresh);
        box_utility('.az-isotope-filters', "Filters-box styles");
    }
    function hover_overlay_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "exists-class",
                "menu": "utility",
                "group": "Mouse hover overlay",
                "control_text": "Show overlay",
                "control_class": "azh-toggle azh-hover",
                "control_type": "hover",
                "selector": ".az-hover-overlay",
                "class": "az-hover"
            },
        ]);
        animation_utility("Mouse hover overlay", ".az-hover-overlay > div > .az-free-positioning");
        animation_utility("Mouse hover animation", ".az-hover-overlay > div > .az-free-positioning > [data-element]");
    }
    function modal_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "init": function($control, $element) {
                    $element.off('az-change.fco').on('az-change.fco', function() {
                        azh.controls_container.children().removeClass('azh-hidden-control');
                        if ($element.is('.az-active')) {
                            azh.controls_container.children().not(azh.get_wrapper_controls($element)).addClass('azh-hidden-control');
                        }
                    });
                    $element.trigger('az-change.fco');
                },
                "refresh": function($control, $element) {
                    azh.controls_container.children().removeClass('azh-hidden-control');
                    if ($element.is('.az-active')) {
                        azh.controls_container.children().not(azh.get_wrapper_controls($element)).addClass('azh-hidden-control');
                    }
                },
                "type": "exists-class",
                "menu": "utility",
                "control_text": "Show modal",
                "control_class": "azh-toggle azh-hover",
                "control_type": "modal",
                "selector": ".az-modal",
                "class": "az-active"
            },
        ]);
    }
    function magnific_popup_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "image-attribute",
                "menu": "utility",
                "attribute": "href",
                "control_class": "azh-image",
                "control_type": "image",
                "control_text": "Image for popup",
                "selector": 'a.az-magnific-popup'
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "attribute": "href",
                "control_class": "azh-video",
                "control_type": "video",
                "control_text": "Video or Google Map URL for popup",
                "selector": 'a.az-magnific-popup'
            }
        ]);
    }
    function anchors_menu_utility() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Menu settings",
                "control_text": "Hash",
                "control_class": "azh-id",
                "control_type": "id",
                "attribute": "id",
                "selector": '.az-anchor',
            },
            {
                "type": "input-attribute",
                "menu": "utility",
                "group": "Menu settings",
                "control_text": "Menu item hash",
                "control_class": "azh-href",
                "control_type": "href",
                "attribute": "href",
                "pattern": /(#)(.*)()/,
                "default": "#anchor",
                "selector": '.az-anchors-menu div a',
            },
            {
                "type": "input-innertext",
                "menu": "utility",
                "group": "Menu settings",
                "control_text": "Menu item title",
                "control_class": "azh-text",
                "control_type": "text",
                "selector": '.az-anchors-menu div a',
            },
            {
                "type": "integer-style",
                "menu": "utility",
                "group": "Menu settings",
                "property": "margin-right",
                "control_class": "azh-item-space",
                "control_type": "item-space",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "responsive": true,
                "control_text": "Menu items space",
                "multiplying_selector": "div",
                "selector": '.az-anchors-menu'
            },
            {
                "type": "radio-style",
                "menu": "utility",
                "group": "Menu settings",
                "selector": ".az-anchors-menu",
                "responsive": true,
                "property": "justify-content",
                "options": {
                    "flex-start": "Left",
                    "center": "Center",
                    "flex-end": "Right",
                },
                "control_class": "azh-horizontal-align",
                "control_type": "justify-content",
                "control_text": "Menu align"
            },
        ]);
        text_utility('.az-anchors-menu', 'Menu text styles');
        font_utility('.az-anchors-menu', 'Menu font styles', false, false, false, 'div a');
    }
    function sticky_header_utility() {
        background_utility('.az-sticky-header > [data-sticky-style] > [data-cloneable]', 'Background');
    }



    function form_context() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "input-attribute",
                "menu": "context",
                "control_text": "Field name",
                "control_class": "azh-name",
                "control_type": "name",
                "selector": "[name]",
                "attribute": "name",
                "unique_wrapper": 'form, [data-section]',
                "unique": '[name="{name}"]',
                "unique_exception": '[name*="[]"]'
            },
            {
                "type": "dropdown-attribute",
                "selector": "input[type='text'], input[type='color'], input[type='date'], input[type='datetime'], input[type='datetime-local'], input[type='email'], input[type='number'], input[type='tel'], input[type='time'], input[type='url'], input[type='month'], input[type='week']",
                "menu": "context",
                "options": {
                    "text": 'text',
                    "color": 'color',
                    "date": 'date',
                    "datetime": 'datetime',
                    "datetime-local": 'datetime-local',
                    "email": 'email',
                    "number": 'number',
                    "tel": 'tel',
                    "time": 'time',
                    "url": 'url',
                    "month": 'month',
                    "week": 'week'
                },
                "attribute": "type",
                "control_class": "azh-dropdown",
                "control_type": "input-type",
                "control_text": "Input type"
            },
            {
                "type": "exists-attribute",
                "menu": "context",
                "control_text": "Required",
                "control_class": "azh-toggle",
                "control_type": "required",
                "selector": "form input:not([type='submit']), form textarea, form select",
                "attribute": "required"
            },
            {
                "type": "integer-attribute",
                "menu": "context",
                "attribute": "maxlength",
                "control_class": "azh-maxlength",
                "control_type": "maxlength",
                "selector": "input[maxlength]",
                "control_text": "Maximum input length"
            },
            {
                "type": "input-attribute",
                "menu": "context",
                "attribute": "pattern",
                "control_class": "azh-pattern",
                "control_type": "pattern",
                "selector": "input[pattern]",
                "control_text": "Input regular expression"
            },
            {
                "type": "input-attribute",
                "menu": "context",
                "attribute": "data-mask",
                "control_class": "azh-mask",
                "control_type": "mask",
                "selector": "input[data-mask]",
                "control_text": "Value mask, use: 'a', '9', '*'"
            },
            {
                "type": "input-attribute",
                "menu": "context",
                "control_text": "Default field value",
                "control_class": "azh-value",
                "control_type": "value",
                "selector": "input[value]",
                "attribute": "value"
            },
            {
                "type": "input-attribute",
                "menu": "context",
                "control_text": "Field placeholder",
                "control_class": "azh-field-placeholder",
                "control_type": "field-placeholder",
                "selector": "[placeholder]",
                "attribute": "placeholder"
            },
            {
                "type": "input-attribute",
                "menu": "context",
                "control_text": "Submit button text",
                "control_class": "azh-submit-value",
                "control_type": "submit-value",
                "selector": "input[type='submit']",
                "attribute": "value"
            }
        ]);
        azh.modal_options = azh.modal_options.concat([
            {
                "menu": 'context',
                "button_text": "Integer range settings",
                "button_class": "azh-integer-range",
                "button_type": "azh-integer-range",
                "title": "Integer range settings",
                "selector": "input[type='range'], input[type='number']",
                "attributes": {
                    'value': {
                        "type": "number",
                        "label": "Default value"
                    },
                    'min': {
                        "type": "number",
                        "label": "Minimum"
                    },
                    'max': {
                        "type": "number",
                        "label": "Maximum"
                    },
                    'step': {
                        "type": "number",
                        "label": "Step"
                    }
                }
            }
        ]);
    }
    function font_context(selector) {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "font-family",
                "menu": "context",
                "group": "Font style",
                "property": "font-family",
                "selector": selector,
                "control_class": "azh-font-family",
                "control_type": "font-family",
                "control_text": "Font family"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "group": "Font style",
                "property": "font-size",
                "selector": selector,
                "responsive": true,
                "slider": true,
                "units": {
                    "px": {
                        "min": "1",
                        "max": "200",
                        "step": "1"
                    },
                    "em": {
                        "min": "0.1",
                        "max": "10",
                        "step": "0.1"
                    },
                    "rem": {
                        "min": "0.1",
                        "max": "10",
                        "step": "0.1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "font-size",
                "control_text": "Font size"
            },
            {
                "type": "dropdown-style",
                "menu": "context",
                "group": "Font style",
                "property": "font-weight",
                "selector": selector,
                "options": {
                    "100": "100",
                    "200": "200",
                    "300": "300",
                    "400": "400",
                    "500": "500",
                    "600": "600",
                    "700": "700",
                    "800": "800",
                    "900": "900"
                },
                "control_class": "azh-dropdown",
                "control_type": "font-weight",
                "control_text": "Font weight"
            },
            {
                "type": "dropdown-style",
                "menu": "context",
                "group": "Font style",
                "property": "font-style",
                "selector": selector,
                "options": {
                    "": "Default",
                    "normal": "Normal",
                    "italic": "Italic",
                    "oblique": "Oblique"
                },
                "control_class": "azh-dropdown",
                "control_type": "font-style",
                "control_text": "Font style"
            },
            {
                "type": "dropdown-style",
                "menu": "context",
                "group": "Font style",
                "property": "text-transform",
                "selector": selector,
                "options": {
                    "": "Default",
                    "uppercase": "Uppercase",
                    "lowercase": "Lowercase",
                    "capitalize": "Capitalize",
                    "none": "Normal"
                },
                "control_class": "azh-dropdown",
                "control_type": "text-transform",
                "control_text": "Transform"
            },
            {
                "type": "color-style",
                "menu": "context",
                "group": "Font style",
                "property": "color",
                "selector": selector,
                "control_class": "azh-color",
                "control_type": "color",
                "control_text": "Color"
            }
        ]);
    }
    function text_context(selector) {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "menu": "context",
                "group": "Text style",
                "property": "line-height",
                "selector": selector,
                "responsive": true,
                "slider": true,
                "units": {
                    "px": {
                        "min": "1",
                        "max": "100",
                        "step": "1"
                    },
                    "%": {
                        "min": "1",
                        "max": "300",
                        "step": "1"
                    },
                    "em": {
                        "min": "0.1",
                        "max": "10",
                        "step": "0.1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "line-height",
                "control_text": "Line height"
            },
            {
                "type": "radio-style",
                "menu": "context",
                "group": "Text style",
                "property": "text-align",
                "selector": selector,
                "responsive": true,
                "options": {
                    "left": "Left",
                    "center": "Center",
                    "right": "Right",
                    "justify": "Justify",
                },
                "control_class": "azh-text-align",
                "control_type": "text-align",
                "control_text": "Text align"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "selector": selector,
                "group": "Text style",
                "responsive": true,
                "property": "word-spacing",
                "min": "-20",
                "max": "50",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "word-spacing",
                "control_text": "Word-spacing"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "group": "Text style",
                "property": "letter-spacing",
                "selector": selector,
                "responsive": true,
                "min": "-5",
                "max": "10",
                "step": "0.1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "letter-spacing",
                "control_text": "Letter-spacing"
            }
        ]);
    }
    function border_styles_context() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "color-style",
                "menu": "context",
                "group": "Border style",
                "property": "border-color",
                "control_class": "azh-color",
                "control_type": "border-color",
                "control_text": "Border color"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "group": "Border style",
                "property": "border-width",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "border-width",
                "control_text": "Border width"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "group": "Border style",
                "property": "border-radius",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "50",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "border-radius",
                "control_text": "Border radius"
            }
        ]);
    }
    function styles_context() {
        azh.controls_options = azh.controls_options.concat([
            {
                "type": "integer-style",
                "menu": "context",
                "not_selector": ".az-background",
                "property": "padding",
                "min": "0",
                "max": "100",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "padding",
                "control_text": "Inner space"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "property": "width",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "width",
                "control_text": "Width"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "property": "height",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "height",
                "control_text": "Height"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "property": "max-height",
                "units": "px",
                "min": "0",
                "max": "1000",
                "step": "1",
                "control_class": "azh-integer",
                "control_type": "max-height",
                "control_text": "Max Height"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "property": "max-width",
                "slider": true,
                "units": {
                    "%": {
                        "min": "0",
                        "max": "100",
                        "step": "1"
                    },
                    "px": {
                        "min": "0",
                        "max": "1000",
                        "step": "1"
                    }
                },
                "control_class": "azh-integer",
                "control_type": "max-width",
                "control_text": "Max width"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "property": "margin-top",
                "min": "-300",
                "max": "300",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "margin-top",
                "control_text": "Margin top"
            },
            {
                "type": "integer-style",
                "menu": "context",
                "property": "margin-bottom",
                "min": "-300",
                "max": "300",
                "step": "1",
                "units": "px",
                "control_class": "azh-integer",
                "control_type": "margin-bottom",
                "control_text": "Margin bottom"
            }
        ]);
    }
    window.azh = $.extend({}, window.azh);
    if (!('controls_options' in azh)) {
        azh.controls_options = [];
    }
    if (!('modal_options' in azh)) {
        azh.modal_options = [];
    }
    form_utility();
    text_element_utility();
    heading_element_utility();
    form_context();
    font_context();
    font_context('[contenteditable] .az-inline, [contenteditable]');
    text_context();
    text_context('[contenteditable]');
    polygone_utility();
    triggers_utility();
    svg_utility();
    border_styles_context();
    section_utility();
    section_background_utility();
    sticky_header_utility();
    column_utility();
    styles_context();
    hover_overlay_utility();
    modal_utility();
    free_positioning_utility();
    google_map_utility();
    video_element_utility();
    background_element_utility();
    button_utility();
    icon_utility();
    hyperlink_utility();
    magnific_popup_utility();
    image_utility();
    separator_utility();
    slider_utility();
    isotope_utility();
    anchors_menu_utility();
    element_box_utility();
    scroll_reveal_utility();
    azh.controls_options = azh.controls_options.concat([
        {
            "type": "input-attribute",
            "menu": "context",
            "control_text": "Popup tooltip",
            "control_class": "azh-title",
            "control_type": "title",
            "attribute": "title"
        },
//        {
//            "type": "input-attribute",
//            "menu": "utility",
//            "control_text": "Unique ID",
//            "control_class": "azh-id",
//            "control_type": "id",
//            "attribute": "id",
//            "not_selector": '[type="checkbox"], :not("[data-hover]")',
//            "restriction": '[href="#{id}"], [data-target="#{id}"], [data-id="#{id}"], [data-for="{id}"]'
//        }
    ]);
    window.azh_get_options_strings = function() {
        var i18n = {};
        for (var i = 0; i < azh.controls_options.length; i++) {
            var options = azh.controls_options[i];
            i18n[options['control_text']] = true;
            i18n[options['description']] = true;
            i18n[options['group']] = true;
            i18n[options['subgroup']] = true;
            if (options['options'] && $.isPlainObject(options['options'])) {
                for (var key in options['options']) {
                    i18n[options['options'][key]] = true;
                }
            }
            if (options['properties'] && $.isPlainObject(options['properties'])) {
                for (var key in options['properties']) {
                    i18n[options['properties'][key]] = true;
                }
            }
        }
        for (var i = 0; i < azh.modal_options.length; i++) {
            var options = azh.modal_options[i];
            i18n[options['button_text']] = true;
            i18n[options['title']] = true;
            i18n[options['desc']] = true;
            i18n[options['label']] = true;
        }
        var strings = [];
        for (var str in i18n) {
            str = str.replace(/'/g, "\\'");
            strings.push("'" + str + "' => esc_html__('" + str + "', 'azh'),");
        }
        return strings.join("\n");
    };
    $(window).on("azh-customizer-before-init", function(event, data) {
        if (azh.options_i18n) {
            for (var i = 0; i < azh.controls_options.length; i++) {
                var options = azh.controls_options[i];
                if (options['control_text'] && azh.options_i18n[options['control_text']]) {
                    options['control_text'] = azh.options_i18n[options['control_text']];
                }
                if (options['description'] && azh.options_i18n[options['description']]) {
                    options['description'] = azh.options_i18n[options['description']];
                }
                if (options['group'] && azh.options_i18n[options['group']]) {
                    options['group'] = azh.options_i18n[options['group']];
                }
                if (options['subgroup'] && azh.options_i18n[options['subgroup']]) {
                    options['subgroup'] = azh.options_i18n[options['subgroup']];
                }
                if (options['options'] && $.isPlainObject(options['options'])) {
                    for (var key in options['options']) {
                        if (options['options'][key] && azh.options_i18n[options['options'][key]]) {
                            options['options'][key] = azh.options_i18n[options['options'][key]];
                        }
                    }
                }
                if (options['properties'] && $.isPlainObject(options['properties'])) {
                    for (var key in options['properties']) {
                        if (options['properties'][key] && azh.options_i18n[options['properties'][key]]) {
                            options['properties'][key] = azh.options_i18n[options['properties'][key]];
                        }
                    }
                }
            }
            for (var i = 0; i < azh.modal_options.length; i++) {
                var options = azh.modal_options[i];
                if (options['button_text'] && azh.options_i18n[options['button_text']]) {
                    options['button_text'] = azh.options_i18n[options['button_text']];
                }
                if (options['title'] && azh.options_i18n[options['title']]) {
                    options['title'] = azh.options_i18n[options['title']];
                }
                if (options['desc'] && azh.options_i18n[options['desc']]) {
                    options['desc'] = azh.options_i18n[options['desc']];
                }
                if (options['label'] && azh.options_i18n[options['label']]) {
                    options['label'] = azh.options_i18n[options['label']];
                }
            }
        }
    });
})(window.jQuery);