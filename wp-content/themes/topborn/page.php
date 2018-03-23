<?php get_header(); ?>
<?php
$intro_bg = get_field('intro_bg');
if (!$intro_bg) {
  $intro_bg = get_field('intro_bg', 4);
}
?>

<div class="subpage-intro" style="background-image: url('<?php echo $intro_bg['url']; ?>')">
  <div class="overlay"></div>
</div>

<div class="subpage-container animated fadeIn">
  <div class="container">

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <?php the_content(); ?>
    <?php endwhile; endif; ?>

  </div>
</div>


<?php get_footer(); ?>
