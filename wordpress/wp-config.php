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
define('DB_NAME', 'cmsdev_sleep');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'secret');

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
define('AUTH_KEY',         '$XHj1V-$7(yFGo[Zp.>Fs.KBNh89/G[dzIshFQ;x,cZtJm]#~Q+Pd rh7CzbE1nP');
define('SECURE_AUTH_KEY',  '7!&ov<L]_7?b0.|,bem0GiwE+y;)TOpJ3_@a,Mr8V(aS ^=pY%O9yKeR%F<QG!af');
define('LOGGED_IN_KEY',    '=4f=t8>c.,|e3)ODV2G6jE8f!4x!~y#qWKIqLakXJ}Hr|/PQ/? hqz.WrQ1-iNZp');
define('NONCE_KEY',        'VhLy|)|/2nHN1Bb5?8gfCp ?qS&kVeq{3Jsuc:1SMUkC.M@#|^!T_}e~%zVy`UR/');
define('AUTH_SALT',        'N1:Wux_^u;g54im3$>?|WN/sNO^v7oyW^}W<)a-v.KF3=a^}6`:+[b+m}7$=Hkb@');
define('SECURE_AUTH_SALT', 'bYwS`,&x>#{3X$?cOyzSj]NgOQn<?$}UT*=z>d]6s$NXt/E;Hz>B:V[#2_S<D)BC');
define('LOGGED_IN_SALT',   '|U/-_|jzK..CX@xIcio41O=>O,#JQa:1o;C$k|y#Z. eLkZ/iArhnkp@Nuxkx#C~');
define('NONCE_SALT',       'T@B2$72_7FUMZi,{Jm2J@2?0mjVY(L.fDts&bu]2_k$.FCzq;Ea:,pXv_<9Qt7&d');
define('JWT_AUTH_SECRET_KEY', 'cmsdev-secret-key');

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

define('JWT_AUTH_CORS_ENABLE', true);