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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fingerstyle' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'D@~M/Rfth]L!m7r7UPGn!/BZ;5xu<jp##NM*fkT[{Fz+DM`jv7X/%JqemTupX!!l' );
define( 'SECURE_AUTH_KEY',  ' pIIb,R==(_j_D+MRV|b1,oKzjdA@H*P71-)7Y2l-rs1|a~}G~RHmXU5nYaEQA(U' );
define( 'LOGGED_IN_KEY',    '5)*S@M,uTxo?k2#IgUozfLEU,|$<%z(CU}jUd]Y}@W0XHZXg-1sG_#;#v/##[pD=' );
define( 'NONCE_KEY',        '?K$8sL{=q@QEM$ iIOOd.a;hb6&Rz6XgGlqIdOM #b]m!8)%f=A5I32q-j#5[~$+' );
define( 'AUTH_SALT',        '0u<8v!t`Y3AoF.|<_Vl>d?S+l%&8)1`pZS^XZJN/Z_MJ-u)6UJJ4*B:QdSMj rir' );
define( 'SECURE_AUTH_SALT', 'd><lXVG!>cUgtDI65>-pu<[+3!g7HVa;4n5rMn75T>DlzTKa![T|B@Pgct&D!GJO' );
define( 'LOGGED_IN_SALT',   'XW]_:Cm%(Nw~&7uz@*Bnb#%P>9$%c =J`jGyF(=J(uZ=A=$:+ap>wt0Cs$UC=zlL' );
define( 'NONCE_SALT',       'esOHwQw&fZxPP}eQu!//(hmqoWRda%2T+a1857o5HK}}FC6ROzuK$FS%}KjI8bN0' );
define( 'FS_METHOD', 'direct' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
