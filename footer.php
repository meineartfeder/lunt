<?php
/**
 * @package WordPress
 * @subpackage lunt
 * @since lunt 1.0
 */
?>
	<footer class="footer" role="contentinfo">
		<div class="row">
			<div class="large-12 column">
				<p>&copy; <?php echo date("Y"); echo " "; bloginfo('name'); ?></p>
			</div>
		</div>
	</footer>

	<?php wp_footer(); ?>

	<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-64546963-1', 'auto');
	ga('send', 'pageview');
	</script>
	
</body>

</html>
