<?php  if (count($errors) > 0) : ?>
  <div class="error">
  	<?php foreach ($errors as $error) : ?>
  	  <div>
		<?php echo $error ?>
     </div>  
  	<?php endforeach ?>
  </div>
<?php  endif ?>