<?php
/**
 * @package WordPress
 * @subpackage lunt
 * @since lunt 1.0
 */
?>
 <aside class="sidebar">
	<div class="row">
		<div class="large-12 column">
			<?php if (function_exists('dynamic_sidebar') && dynamic_sidebar('Sidebar Widgets')) : else : ?>
			
				<!-- All this stuff in here only shows up if you DON'T have any widgets active in this zone -->

				<?php get_search_form(); ?>
			
			<?php endif; ?>
		</div>
	</div>
</aside>