<?php require('../../../wp-blog-header.php'); ?>

<?php
query_posts('category_name=' . $_GET["cat"]);
while (have_posts()) : the_post();
	echo "<h1>"; the_title(); echo "</h1>";
	the_content();
	echo "<hr>";
endwhile;

?>