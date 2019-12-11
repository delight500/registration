<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="icon" href="ccc.png" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="login.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

</head>
<body>
 
<div class="container">
<div class="main" id="ddd">
<div id="box1" class="right"></div>
<img src="ccc.png" style="height: 40px; width: 40.5px;">
<h2> Login With your credentials</h2>
  <form method="post" action="login.php" id="form_id">
  	<?php include('errors.php'); ?>
      <label>User Name :</label>
<input type="text" name="username" id="usern" placeholder="input username"/>
<label>Password :</label>
<input type="password" name="password" id="pword" placeholder="input password"/>
 <button type="submit" class="btn" name="login_user" >Login</button>
         <br />
         <br />
         <br />
  	<p>
  		Not yet a member? <a href="register.php">Sign up</a>
  	</p>
  </form>
  </div>
  </div>
  <script src="ccd.js"></script>
</body>
</html>
