<?php
/**
 * @package WordPress
 * @subpackage lunt
 * @since lunt 1.0
 */
?><!doctype html>

<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" <?php language_attributes(); ?>><!--<![endif]-->

<head id="<?php echo of_get_option('meta_headid'); ?>" data-template-set="lunt-wordpress-theme">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php wp_title( '|', true, 'right' ); ?></title>
	
	<!-- VIEWPORT -->
	<meta name="HandheldFriendly" content="true">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="title" content="<?php wp_title( '|', true, 'right' ); ?>">
	
	<?php #echo '<meta name="description" content="' . bloginfo('description') . '" />'; ?>

	<?php
		if (true == of_get_option('meta_author'))
			echo '<meta name="author" content="' . of_get_option("meta_author") . '" />';

		if (true == of_get_option('meta_google'))
			echo '<meta name="google-site-verification" content="' . of_get_option("meta_google") . '" />';
	?>

	<meta name="Copyright" content="Copyright &copy; <?php bloginfo('name'); ?> <?php echo date('Y'); ?>. All Rights Reserved.">

	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php wp_head(); ?>
	
	<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900' rel='stylesheet' type='text/css'>
</head>

<body <?php body_class(); ?>>

		<header class="header" role="banner">
			<style type="text/css">
				#respbg-image-01 {
					background-image: url('<?php echo get_template_directory_uri(); ?>/static/images/bg/img-01-w800.jpg');
				}

				@media only screen and (min-width: 40.063em) {
					#respbg-image-01 {
						background-image: url('<?php echo get_template_directory_uri(); ?>/static/images/bg/img-01-w1280.jpg');
					}
				}

				@media only screen and (min-width: 52.063em) {
					#respbg-image-01 {
						background-image: url('<?php echo get_template_directory_uri(); ?>/static/images/bg/img-01.jpg');
					}
				}
			</style>

			<div id="respbg-image-01" class="respbg-image-wrapper">
				<div class="row">
					<div class="large-12 column">
						<h1 class="logo">
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
								<span class="logo__name">2415</span> 
								<span class="logo__description">Landesunternehmen CaEx Niederösterreich</span>
							</a>
						</h1>
						<p class="description"><?php bloginfo( 'description' ); ?></p>
					</div>
				</div>

				<div class="row">
					<div class="small-10 medium-8 large-6 small-centered column">
						<?php get_template_part('elements/watch'); ?>
					</div>
				</div>
			</div>
		</header>

		<div class="header-spacer"></div>
		
		<?php
		if($blub === true) {
		?>
		<nav id="nav" role="navigation">
			<div class="row">
				<div class="large-12 column">
					<?php wp_nav_menu( array('menu' => 'primary') ); ?>
				</div>
			</div>
		</nav>
		<?php
		}
		?>

