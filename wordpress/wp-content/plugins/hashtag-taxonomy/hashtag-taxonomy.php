<?php
/*
Plugin Name:  Hashtag Taxonomy
Description:  Plugin for Hashtag Taxonomy.
Author:       Cedric Vanhaegenberg
Version:      1.0
License:      MIT
License URI:  https://opensource.org/licenses/MIT
*/

// Register Custom Taxonomy
function sleep_register_hashtag_taxonomy() {
	$labels = array(
		'name'                       => _x( 'Hashtags', 'Taxonomy General Name' ),
		'singular_name'              => _x( 'Hashtag', 'Taxonomy Singular Name' ),
		'menu_name'                  => __( 'Hashtags' ),
		'all_items'                  => __( 'All Hashtags' ),
		'parent_item'                => __( 'Parent Hashtag' ),
		'new_item_name'              => __( 'New Hashtag Name' ),
		'add_new_item'               => __( 'Add New Hashtag' ),
		'edit_item'                  => __( 'Edit Hashtag' ),
		'update_item'                => __( 'Update Hashtag' ),
        'view_item'                  => __( 'View Hashtag' ),
        'popular_items'              => __( 'Popular Hashtags' ),
        'search_items'               => __( 'Search Hashtags' ),
		'add_or_remove_items'        => __( 'Add or remove hashtags' ),
		'choose_from_most_used'      => __( 'Choose from the most used' ),
        'separate_items_with_commas' => __( 'Separate hashtags with commas' ),
        'items_list'                 => __( 'Hashtags list' ),
		'items_list_navigation'      => __( 'Hashtags list navigation'),
		'not_found'                  => __( 'Not Found' ),
		'no_terms'                   => __( 'No Hashtags' ),
	);

	register_taxonomy( 'hashtag', array( 'post' ), array(
        'hierarchical'               => true,
		'labels'                     => $labels,
        'show_in_rest'               => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'rest_base'                  => 'hashtags',
	));
}

add_action( 'init', 'sleep_register_hashtag_taxonomy', 0 );