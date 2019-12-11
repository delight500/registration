<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration</title>
  <link rel="icon" href="ccc.png" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="lgin.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="jquery.js"></script>
  <script src=".js"></script>
</head>
<body>
	<div class="container">
<div class="main" id="ddd">
<img src="ccc.png" style="height: 60px; width: 60.5px;">
  <div class="header">
  	<h2>Fill the form below to register</h2>
  </div>
	
  <form method="post" action="register.php">
  	<?php include('errors.php'); ?>
  	<div class="input-group">
  	  <label>Username</label>
  	  <input type="text" name="username" value="<?php echo $username; ?>" id="username"required autofocus>
  	</div>
  	<div class="input-group">
  	  <label>Email</label>
  	  <input type="email" id="email" name="email" value="<?php echo $email; ?> ">
  	</div>
  	<div class="input-group">
  	  <label>Password</label>
  	  <input type="password" id="password" name="password_1" minlength="7" required">
  	</div>
  	<div class="input-group">
  	  <label>Confirm password</label>
  	  <input type="password" name="password_2" minlength="7">
  	</div>
  	<div class="input-group">
  	  <button type="submit" id="reg_btn" class="btn" name="reg_user">Sign Up</button>
  	</div>
  	<p>
  		Already a member? <a href="login.php">Sign in</a>
  	</p>
  </form>
</div>
</div>

<script src="script.js"></script>
</body>
</html>