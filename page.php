<?php
/**
 * @package WordPress
 * @subpackage lunt
 * @since lunt 1.0
 */
 get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<section class="content-section">
			<div class="row">
				<article class="large-12 column post" id="post-<?php the_ID(); ?>">

					<h2><?php the_title(); ?></h2>

					<?php #posted_on(); ?>

					<div class="entry">

						<?php the_content(); ?>

						<?php wp_link_pages(array('before' => __('Pages: ','lunt'), 'next_or_number' => 'number')); ?>

					</div>

					<?php edit_post_link(__('Edit this entry','lunt'), '<p>', '</p>'); ?>

				</article>
				
				<?php #comments_template(); ?>
			</div>
		</section>
		<?php endwhile; endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
