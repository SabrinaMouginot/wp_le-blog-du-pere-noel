<?php

/**
 * Sanitization Functions
 * 
 * @link https://github.com/WPTRT/code-examples/blob/master/customizer/sanitization-callbacks.php 
 */



if( class_exists( 'WP_Customize_Control' ) ):

/* Class for icon selector */

class Christmas_Shop_Fontawesome_Icon_Chooser extends WP_Customize_Control{
    public $type = 'icon';

    public function render_content(){
        ?>
            <label>
                <span class="customize-control-title">
                <?php echo esc_html( $this->label ); ?>
                </span>

                <?php if($this->description){ ?>
                <span class="description customize-control-description">
                    <?php echo wp_kses_post($this->description); ?>
                </span>
                <?php } ?>

                <div class="christmas-shop-selected-icon">
                    <i class="fa <?php echo esc_attr($this->value()); ?>"></i>
                    <span><i class="fa fa-angle-down"></i></span>
                </div>

                <ul class="christmas-shop-icon-list clearfix">
                    <?php
                    $christmas_shop_font_awesome_icon_array = christmas_shop_font_awesome_icon_array();
                    foreach ($christmas_shop_font_awesome_icon_array as $christmas_shop_font_awesome_icon) {
                            $icon_class = $this->value() == $christmas_shop_font_awesome_icon ? 'icon-active' : '';
                            echo '<li class='.esc_html( $icon_class ).'><i class="'.esc_html( $christmas_shop_font_awesome_icon ).'"></i></li>';
                        }
                    ?>
                </ul>
                <input type="hidden" value="<?php $this->value(); ?>" <?php $this->link(); ?> />
            </label>
        <?php
    }
}
endif;

 function christmas_shop_sanitize_checkbox( $checked ){
    // Boolean check.
    return ( ( isset( $checked ) && true == $checked ) ? true : false );
 }
  
 function christmas_shop_sanitize_select( $input, $setting ){
    // Ensure input is a slug.
    $input = sanitize_key( $input );
    
    // Get list of choices from the control associated with the setting.
    $choices = $setting->manager->get_control( $setting->id )->choices;
    
    // If the input is a valid key, return it; otherwise, return the default.
    return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
 }
 
 function christmas_shop_sanitize_number_absint( $number, $setting ) {
    // Ensure $number is an absolute integer (whole number, zero or greater).
    $number = absint( $number );
    
    // If the input is an absolute integer, return it; otherwise, return the default
    return ( $number ? $number : $setting->default );
 }
 
 function christmas_shop_sanitize_image( $image, $setting ) {
    /*
     * Array of valid image file types.
     *
     * The array includes image mime types that are included in wp_get_mime_types()
     */
    $mimes = array(
        'jpg|jpeg|jpe' => 'image/jpeg',
        'gif'          => 'image/gif',
        'png'          => 'image/png',
        'bmp'          => 'image/bmp',
        'tif|tiff'     => 'image/tiff',
        'ico'          => 'image/x-icon'
    );
    // Return an array with file extension and mime_type.
    $file = wp_check_filetype( $image, $mimes );
    // If $image has a valid mime_type, return it; otherwise, return the default.
    return ( $file['ext'] ? $image : $setting->default );
}