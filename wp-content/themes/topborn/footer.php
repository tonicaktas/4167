      <?php global $topborn; ?>

      </div><?php // content-wrap end ?>

      <footer class="footer">
        <div class="container-fluid form">
          <div class="container">
            <?php echo do_shortcode('[contact-form-7 id="3" title="Footer"]'); ?>
          </div>
        </div>
        <div class="map-box" data-0="background-color:rgb(0,0,255);" data-500="background-color:rgb(255,0,0);">
          <h2><?php the_field('mapbox','option'); ?></h2>

          <div class="kontakt-info">
            <div class="col-sm-6">
              <i class="fas fa-map-pin"></i><?php the_field('adress','option');?>
            </div>
            <div class="col-sm-6">
             <p><i class="fas fa-phone-volume"></i><?php the_field('telefon','option');?></p><br>
             <p><i class="fas fa-envelope"></i></i><?php the_field('email','option');?></p>
           </div>
         </div>

         <img src="<?php echo get_template_directory_uri(); ?>/library/images/map-box.jpg" alt="nolhagatan 41"/>
        </div>
        <iframe src="https://snazzymaps.com/embed/53784" width="100%" height="500px" style="border:none;"/>
      </footer>

    </div><?php // site-wrap end ?>
    <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow|Source+Sans+Pro" rel="stylesheet">
    <?php wp_footer(); ?>


  </body>
  <script type="text/javascript">
	var s = skrollr.init();
	</script>

</html>
