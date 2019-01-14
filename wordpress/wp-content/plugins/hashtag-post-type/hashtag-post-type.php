<?php
/*
Plugin Name:  Hashtag Post Type 
Description:  Plugin for Hashtag Post Type
Version:      1.0
Author:       Cedric Vanhaegenberg
License:      MIT
License URI:  https://opensource.org/licenses/MIT
*/

function sleep_register_hashtag() {
  $labels = array(
      'name' => __('Hashtag Posts'),
      'singular_name' => __('Hashtag Post'),
      'add_new' => __('Add New Hashtag Post'),
      'all_items' => __('All Hashtag Posts'),
      'add_new_items' => __('Add New Hashtag Post'),
      'edit_item' => __('Edit Hashtag Post'),
      'new_item' => __('New Hashtag Post'),
      'view_item' => __('View Hashtag Post'),
      'search_item' => __('Search Hashtag Post'),
      'not_found' => __('Hashtag Post not found'),
      'not_found_in_trash' => __('Hashtag Post not found in the trash'),
      'parent_item_colon' => __('Parent Hashtag')
  );

  register_post_type('tip', array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'publicly_queryable' => true,
        'query_var' => true,
        'supports' => array(
            'thumbnail',
            'author'
        ),
        'taxonomies' => array( 'hashtag' ),
        'rewrite' => array('slug' => 'hashtag-post'),
        'hierarchical' => false,
        'show_in_rest' => true,
        'rest_base' => 'photos',
        'menu_position' => 6,
        'menu_icon' => 'dashicons-format-image',
    )
  );
}


add_action('init', 'sleep_register_hashtag');