<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sveaprod_4167' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'r?~Y=n[`+[?kien[_ugVbT:x-VIj|sfakIJ>%b&l]jqe@y/olrhu^D+B:(jR?)wg');
define('SECURE_AUTH_KEY',  'C9mS*)<7$}^j0*m8X!K^!dfM/~i@`pmcPd%Q+~dm`1|Mlj87xEG!hem1_!vCF>zT');
define('LOGGED_IN_KEY',    'ii$z&qIQUN@--|Ymt~gN2d=eq%&&}t|Np;#z 0||4RBf]?7tU$2|tTeL@S>@T<L0');
define('NONCE_KEY',        '-+ye(_[$uJ~/-ma+C{h&/Mko^`8|,UeSOaq/~_<Ph%-LdF1h/t+9INFTKV:B9;vS');
define('AUTH_SALT',        '`c^-3dh0(U+&8C&}q{-+#`3+-X`s54qgGw3h1&wSTXhCCPt#~+EPp<k-|^6|RgNb');
define('SECURE_AUTH_SALT', '&y^D~#GxKN_p3+-u}|iC0bC`+~[CWk|rO<|[KN6-!ws n&Pd?P(e~_XULVj_<vTd');
define('LOGGED_IN_SALT',   'LY34a#5YJ_!&Uo)S5MiG7kR*-{+1x?gh.^_p h-9obCu+69~,k0gAy5mVY3V74rH');
define('NONCE_SALT',       ':+hhd<s[+0*L?BcdUa)eh^4:m]ig9-C>6}l $dxXfs_aqn+;#zm~~wP=nJ_bG?`y');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = '4167_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
