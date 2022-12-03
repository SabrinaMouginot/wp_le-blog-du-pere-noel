<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'leblogduperenoel' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'Noel' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'LeBlogDuPereNoel' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'oi$8FR/iWEj/w$3S<ZV[NcR/t!~@,~=Knpix?L>ONm8xH?Wo!|^+{q::!L]nVH|F' );
define( 'SECURE_AUTH_KEY',  'NQVCv8lz|hG{ATc#m,I ~H7qh(y_7]y!M-/R5tQq^{$Z_j2r%DFwl3TuTkn-OGBn' );
define( 'LOGGED_IN_KEY',    'v4v2FfhYG[YPnz=UL[%QApO,.D;GV it+Qg4aMn/>mdhU8[C!-eEStem6KuyAXpQ' );
define( 'NONCE_KEY',        'WG?5[U(y5WDHy*,J>G wvpl4c*7@/c,BL8Ue!DkhQFId?zG%H32.m|7.i3/Ge>4[' );
define( 'AUTH_SALT',        'a c!FoRogr$hs%ki)B#SfS;e]hU^Z5dvA,k(7R?2&e%AgviAHT4*X5*l?|^H>fP$' );
define( 'SECURE_AUTH_SALT', 'n8?5hhAHF`#mrcF)k~(rFEIE@q5o4v.F _@:y= SLmF55&-:P`+cZ`<.lm`RkDS+' );
define( 'LOGGED_IN_SALT',   '~z69!me3!n65JyR<K6Vvh]iAFc/Au1fMEUas)UWM|_9Ig4MI3g2%=fITx5f[1G!0' );
define( 'NONCE_SALT',       'e^ACC60XQ[h7)sJ~M|xBJ]Qvax:S,^E,2[_ ^h4Z+#!2a[OqeVQxGCsM^pKcHpfl' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );
// define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
