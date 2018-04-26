<?php

add_action('wp_enqueue_scripts', 'azh_siteorigin_enqueue_scripts');

function azh_siteorigin_enqueue_scripts() {
    if (isset($_GET['azh']) && $_GET['azh'] == 'customize') {
        global $wp_widget_factory;

        foreach ($wp_widget_factory->widgets as $class => $widget_obj) {
            if (!empty($widget_obj) && is_object($widget_obj) && is_subclass_of($widget_obj, 'SiteOrigin_Widget')) {
                ob_start();
                $widget_obj->widget(array(), array());
                ob_clean();
            }
        }
    }
}

add_action('admin_init', 'azh_siteorigin_init');

function azh_siteorigin_init() {
    if (defined('DOING_AJAX') && DOING_AJAX) {
        add_filter('siteorigin_widgets_is_preview', '__return_true');
    }
}

add_action('azh_wp_widget', 'azh_wp_widget_siteorigin');

function azh_wp_widget_siteorigin() {
    if (defined('DOING_AJAX') && DOING_AJAX) {
        if (function_exists('siteorigin_widget_print_styles')) {
            siteorigin_widget_print_styles();
            ?>
            <script>
                setTimeout(function() {
                    jQuery(window.sowb).trigger('setup_widgets');
                });
            </script>
            <?php

        }
    }
}
