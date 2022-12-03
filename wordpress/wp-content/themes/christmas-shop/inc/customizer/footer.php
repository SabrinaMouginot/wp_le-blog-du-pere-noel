<?php

/** 
 * Footer Settings
 */
 
function christmas_shop_customize_register_footer( $wp_customize ) {

    /** Footer Settings */
    
    $wp_customize->add_section(
        'christmas_shop_footer_settings',
        array(
            'title' => __( 'Footer Settings', 'christmas-shop' ),
            'priority' => 50,
            'capability' => 'edit_theme_options',
        )
    );
    
    /** Enable/Disable footer */
    $wp_customize->add_setting(
        'christmas_shop_footer_copyright_text',
        array(
            'default' => '',
            'sanitize_callback' => 'sanitize_text_field',
        )
    );
    
    $wp_customize->add_control(
        'christmas_shop_footer_copyright_text',
        array(
            'label' => __( 'Copyright Text', 'christmas-shop' ),
            'section' => 'christmas_shop_footer_settings',
            'type' => 'text',
        )
    );
    
}

add_action( 'customize_register', 'christmas_shop_customize_register_footer' );