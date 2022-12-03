<?php
/**
 * Support Panel.
 *
 * @package Rara_Business
 */
?>

<div class="panel-aside">
    <h4><?php esc_html_e( 'Support Ticket', 'christmas-shop' ); ?></h4>
    <p><?php printf( __( "It's always better to visit our %1s Documentation Guide %2s before you send us a support query.", "christmas-shop" ), '<a href="'. esc_url( 'https://docs.prosysthemes.com/christmas-shop' ) .'" target="_blank">', '</a>' ); ?></p>
    <p><?php printf( __( "If the Documentation Guide didn't help you, you can post your query in our %1s Support Forum %2s. We reply to all the support queries within one business day, except on the weekends.", 'christmas-shop' ), '<a href="'. esc_url( 'https://prosysthemes.com/forums/' ) .'" target="_blank">', '</a>' ); ?></p>
    <a class="button button-primary" href="<?php echo esc_url( 'https://prosysthemes.com/forums/' ); ?>" title="<?php esc_attr_e( 'Visit the Support', 'christmas-shop' ); ?>" target="_blank">
        <?php esc_html_e( 'Support Forum', 'christmas-shop' ); ?>
    </a>
</div>
