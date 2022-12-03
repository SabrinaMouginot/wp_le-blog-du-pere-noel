<?php
/**
 * Help Panel.
 *
 * @package christmas_shop
 */
?>
<div class="panel-aside">
    <h4><?php esc_html_e( 'Please follow the instruction checklist.', 'christmas-shop' ); ?></h4>
    <ol>
        <li><?php esc_html_e('WordPress Need to be latest version.','christmas-shop');?></li>
        <li><?php esc_html_e('Install all the recommeded Plugins required by this theme.','christmas-shop');?></li>
        <li><?php esc_html_e('Please read the theme documentation','christmas-shop');?></li>
        <li><?php esc_html_e('If you still having problem you can check and ask on our support forum.','christmas-shop');?></li>
    </ol>
</div>

<hr/>

<div class="panel-aside">
    <h4><?php esc_html_e( 'Customize Now', 'christmas-shop' ); ?></h4>
    <p><?php esc_html_e( 'Are you ready to customize your website? Please click the button below.', 'christmas-shop' ); ?></p>
    <a class="button button-primary" href="<?php echo esc_url( admin_url( 'customize.php' ) ); ?>" title="<?php esc_attr_e( 'Customize', 'christmas-shop' ); ?>" target="_blank">
        <?php esc_html_e( 'Customize', 'christmas-shop' ); ?>
    </a>
</div>

<div class="panel-aside">
    <h4><?php esc_html_e( 'Check Theme Documentation', 'christmas-shop' ); ?></h4>
    <p><?php esc_html_e( 'Are you new to the WordPress world? Our step by step easy documentation guide will help you create an attractive and engaging website without any prior coding knowledge or experience.', 'christmas-shop' ); ?></p>
    <a class="button button-primary" href="<?php echo esc_url( 'https://docs.prosysthemes.com/' . 'christmas-shop' ); ?>" title="<?php esc_attr_e( 'Visit the Documentation', 'christmas-shop' ); ?>" target="_blank">
        <?php esc_html_e( 'View Documentation', 'christmas-shop' ); ?>
    </a>
</div>

<div class="panel-aside">
    <h4><?php printf( esc_html__( 'View Our %1$s Demo', 'christmas-shop' ),CHRISTMAS_SHOP_THEME_NAME ); ?></h4>
    <p><?php esc_html_e( 'Visit the demo to get more idea about our theme design and its features.', 'christmas-shop' ); ?></p>
    <a class="button button-primary" href="<?php echo esc_url( 'https://www.prosysthemes.com/theme-demos/?theme_demos=christmas-shop' ); ?>" title="<?php esc_attr_e( 'Visit the Demo', 'christmas-shop' ); ?>" target="_blank">
        <?php esc_html_e( 'View Demo', 'christmas-shop' ); ?>
    </a>
</div>