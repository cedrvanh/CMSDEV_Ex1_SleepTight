<?php
/*
Plugin Name:  Registration route for REST API
Description:  Adds an extra Registration route to the REST API that permits unauthorized users to create accounts
Version:      1.0
Author:       Cedric Vanhaegenberg
License:      MIT
License URI:  https://opensource.org/licenses/MIT
*/

function register_user(WP_REST_Request $request) {
  $params = $request->get_body();
  $params = json_decode($params);
  
  $userdata = array(
      'ID' => '',
      'user_pass' => $params->password,
      'user_login' => $params->username,
      'user_nicename' => $params->username,
      'user_url' => '',
      'user_email' => $params->email,
      'display_name' => $params->firstname . " " . $params->lastname,
      'nickname' => $params->username,
      'first_name' => $params->firstname,
      'last_name' => $params->lastname,
      'user_registered' => date('Y-m-d H:i:s'),
      'role' => 'student'
    );
  $user = wp_insert_user($userdata);
  
  return $user;
}
function add_register_route(){
  register_rest_route('wp/v2', 'users/register', array(
    'methods' => 'POST',
    'callback' => 'register_user'
  ));
}
add_action('rest_api_init', 'add_register_route');