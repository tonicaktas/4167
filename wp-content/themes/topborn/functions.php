<?php
// hide admin-bar
add_filter('show_admin_bar', '__return_false');
// add editor style
add_editor_style('library/css/editor-style.css');


if ( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Global',
		'menu_title'	=> 'Global',
		'menu_slug' 	=> 'global',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}

/************* INCLUDE NEEDED FILES ***************/

require_once( 'library/navwalker.php' ); // needed for bootstrap navigation


/* library/bones.php (functions specific to BREW)
  - navwalker
  - Redux framework
  - Read more > Bootstrap button
  - Bootstrap style pagination
  - Bootstrap style breadcrumbs
*/
require_once( 'library/brew.php' ); // if you remove this, BREW will break
/*
1. library/bones.php
	- head cleanup (remove rsd, uri links, junk css, ect)
	- enqueueing scripts & styles
	- theme support functions
	- custom menu output & fallbacks
	- related post function
	- page-navi function
	- removing <p> from around images
	- customizing the post excerpt
	- custom google+ integration
	- adding custom fields to user profiles
*/
require_once( 'library/bones.php' ); // if you remove this, bones will break

/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
//add_image_size( 'bones-thumb-600', 600, 150, true );
//add_image_size( 'bones-thumb-300', 300, 100, true );
//add_image_size( 'post-featured', 750, 300, true );

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function bones_register_sidebars() {
	register_sidebar(array(
		'id' => 'sidebar',
		'name' => __( 'Sidebar', 'bonestheme' ),
		'description' => __( 'The sidebar.', 'bonestheme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',
	));

} // don't remove this bracket!

?>
