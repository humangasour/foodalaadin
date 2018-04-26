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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'aladin');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ya8vwnwq1n<Nc;u$_#F*h41l!d?[Z&Vrj^NA&>2!T<*|!Z:QKqH:|*DDj^hWk&{u');
define('SECURE_AUTH_KEY',  '`@)i.y]6Ir8cM({4f]4y`{-vq+Zq~;Q0sjge9kq?Ic(q3c% ;U ?huFarGF=YdI~');
define('LOGGED_IN_KEY',    'yYx>K,V69KL>*DiUq?vm_<I:u1Q/}AyN}h_^~vSqQ{:kD$edK|JJj<eSjDkhe^HU');
define('NONCE_KEY',        '.7@x^}t=h?s{n@~x2Z!jTi>`2U54oZa=>slZW_e vQiYmZCi?u_V,8koQIGAWFT_');
define('AUTH_SALT',        'RI#4Qtvk8^|mcVMrTR!/f{:E>WumGa66`JNU}]A%oe9d/kWp8LzASkvFMw!QT,])');
define('SECURE_AUTH_SALT', 'r:4B(Y Fr$JyCD=lTh??w<73~y+Fq%M8/_}^b{RU!;^8K#9JC|0ZHHk}M5s$/VLH');
define('LOGGED_IN_SALT',   'xCOrx5-P)5rC&P~-)F.-Ww5C@l,bogDqPoA92fzlLHJ*%uR6#L_=`QgJKqRttoFu');
define('NONCE_SALT',       'k5PHB-wdQj^;a&;e,u1)6_@{:Fro]Dqu55PDBm$qJp9.#a(fOi+[$qK$*{p}gN1X');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
