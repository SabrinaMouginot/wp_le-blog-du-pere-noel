<?php
/**
 * Getting Started Page.
 *
 * @package christmas_shop
 */

require get_template_directory() . '/inc/getting-started/class-getting-start-plugin-helper.php';

if( ! function_exists( 'christmas_shop_getting_started_menu' ) ) :
/**
 * Adding Getting Started Page in admin menu
 */
function christmas_shop_getting_started_menu(){	
	add_theme_page(
		__( 'Getting Started', 'christmas-shop' ),
		__( 'Getting Started', 'christmas-shop' ),
		'manage_options',
		'christmas-shop-getting-started',
		'christmas_shop_getting_started_page'
	);
}
endif;
add_action( 'admin_menu', 'christmas_shop_getting_started_menu' );

if( ! function_exists( 'christmas_shop_getting_started_admin_scripts' ) ) :
/**
 * Load Getting Started styles in the admin
 */
function christmas_shop_getting_started_admin_scripts( $hook ){
	// Load styles only on our page
	if( 'appearance_page_christmas-shop-getting-started' != $hook ) return;

    wp_enqueue_style( 'christmas-shop-getting-started', get_template_directory_uri() . '/inc/getting-started/css/getting-started.css', false, CHRISTMAS_SHOP_THEME_VERSION );
    
    wp_enqueue_script( 'plugin-install' );
    wp_enqueue_script( 'updates' );
    wp_enqueue_script( 'christmas-shop-getting-started', get_template_directory_uri() . '/inc/getting-started/js/getting-started.js', array( 'jquery', 'jquery-ui-core', 'jquery-ui-tabs' ), CHRISTMAS_SHOP_THEME_VERSION, true );
    wp_enqueue_script( 'christmas-shop-recommended-plugin-install', get_template_directory_uri() . '/inc/getting-started/js/recommended-plugin-install.js', array( 'jquery', 'jquery-ui-core', 'jquery-ui-tabs' ), CHRISTMAS_SHOP_THEME_VERSION, true );    
    wp_localize_script( 'christmas-shop-recommended-plugin-install', 'christmas_shop_start_page', array( 'activating' => __( 'Activating ', 'christmas-shop' ) ) );
}
endif;
add_action( 'admin_enqueue_scripts', 'christmas_shop_getting_started_admin_scripts' );

if( ! function_exists( 'christmas_shop_call_plugin_api' ) ) :
/**
 * Plugin API
**/
function christmas_shop_call_plugin_api( $plugin ) {
	require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

	$call_api = plugins_api( 
        'plugin_information', 
            array(
    		'slug'   => $plugin,
    		'fields' => array(
    			'downloaded'        => false,
    			'rating'            => false,
    			'description'       => false,
    			'short_description' => true,
    			'donate_link'       => false,
    			'tags'              => false,
    			'sections'          => true,
    			'homepage'          => true,
    			'added'             => false,
    			'last_updated'      => false,
    			'compatibility'     => false,
    			'tested'            => false,
    			'requires'          => false,
    			'downloadlink'      => false,
    			'icons'             => true
    		)
    	) 
    );
	return $call_api;
}
endif;

if( ! function_exists( 'christmas_shop_check_for_icon' ) ) :
/**
 * Check For Icon 
**/
function christmas_shop_check_for_icon( $arr ) {
	if( ! empty( $arr['svg'] ) ){
		$plugin_icon_url = $arr['svg'];
	}elseif( ! empty( $arr['2x'] ) ){
		$plugin_icon_url = $arr['2x'];
	}elseif( ! empty( $arr['1x'] ) ){
		$plugin_icon_url = $arr['1x'];
	}else{
		$plugin_icon_url = $arr['default'];
	}                               
	return $plugin_icon_url;
}
endif;

if( ! function_exists( 'christmas_shop_getting_started_page' ) ) :
/**
 * Callback function for admin page.
*/
function christmas_shop_getting_started_page(){ ?>
	<div class="wrap getting-started">
		<h2 class="notices"></h2>
		<div class="intro-wrap">
			<div class="intro">
				<h3><?php printf( esc_html__( 'Getting started with %1$s v%2$s', 'christmas-shop' ), CHRISTMAS_SHOP_THEME_NAME, CHRISTMAS_SHOP_THEME_VERSION ); ?></h3>
				<h4><?php printf( esc_html__( 'You will find everything you need to get started with %1$s below.', 'christmas-shop' ), CHRISTMAS_SHOP_THEME_NAME ); ?></h4>
			</div>
		</div>

		<div class="panels">
			<div id="tabs">
            <ul>
                <li>
                    <a id="help" href="#tabs-1">
                        <span class="dashicons dashicons-admin-home"></span>
                        <?php esc_html_e( 'Getting Started', 'christmas-shop' ); ?>
                    </a>
                </li>
				<li>
                    <a id="plugins" href="#tabs-2">
                        <span class="dashicons dashicons-admin-plugins"></span>
                        <?php esc_html_e( 'Useful Plugins', 'christmas-shop' ); ?>
                    </a>
                </li>
				
				<li>
                    <a id="support" href="#tabs-3">
                        <span class="dashicons dashicons-editor-help"></span>
                        <?php esc_html_e( 'Support', 'christmas-shop' ); ?>
                    </a>
                </li>
			</ul>
            <div id="tabs-1" class="getting-started-body">
				<?php require get_template_directory() . '/inc/getting-started/tabs/general-panel.php';
                ?>
            </div>
            <div id="tabs-2" class="getting-started-body">
				<?php require get_template_directory() . '/inc/getting-started/tabs/plugins-panel.php'; ?>
			</div>
            <div id="tabs-3" class="getting-started-body">
            	<?php require get_template_directory() . '/inc/getting-started/tabs/support-panel.php'; ?>
                    
            </div>
        
                <aside class="getting-started-sidebar">                   
                    <div class="panel-aside">
                        <h4><?php esc_html_e( 'Visit the Knowledge Base', 'christmas-shop' ); ?></h4>
                        <p><?php esc_html_e( 'Need help with WordPress and our theme as quickly as possible? Visit our well-organized documentation.', 'christmas-shop' ); ?></p>
                        <p><?php esc_html_e( 'Our documentation comes with a step-by-step guide from installing WordPress to customizing our theme to creating an attractive and engaging website.', 'christmas-shop' ); ?></p>

                        <a class="button button-primary" href="<?php echo esc_url( 'https://docs.prosysthemes.com/christmas-shop' ); ?>" title="<?php esc_attr_e( 'Visit the knowledge base', 'christmas-shop' ); ?>" target="_blank"><?php esc_html_e( 'Visit the Knowledge Base', 'christmas-shop' ); ?></a>
                    </div>
                </aside>
            </div>
        </div>
		</div>
	</div>
	<?php
}
endif;