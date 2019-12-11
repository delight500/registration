<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>

<!DOCTYPE html>
<!-- H5FormValidation.html -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>HTML Form Input Validation Using HTML5</title>
  <link rel="stylesheet" type="text/css" href="login.css">
  <link rel="stylesheet" type="text/css" href="css/w3.css">
  <script type="text/javascript" src="jquery.js"></script>
  <script src="jquery.chocolate.js"></script>
  <script> 
  $('body').chocolate({

  images    : ['img/psts.jpg','2.jpg'],

  interval  : 3000,

  speed     : 1000

});
</script>

  <style type="text/css">
  html, body {
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
body {
  background-position:center center;
  background-attachment:fixed;
  background-repeat:repeat;
  background-size: cover;
}

   .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  
  padding: 10px;
  background-color: lightblue;
}
.grid-item {
 color: white
  padding: 10px;
  font-size: 27px;
  text-align: center;
}
.center {
    margin: auto;
    border: 3px solid #73AD21;
    
}
  </style>
</head>
<body>
<center><div class="w3-card-4 w3-margin w3-hover-shadow" style="width:40%; " >
 
 <header class="w3-container w3-blue">
   <h4>Gla pairing page</h4>
 </header>
  <br />
  <p id="pp"></p>

<div class="w3-progress-container w3-round-large ">
  <div id="myBar" class="w3-progressbar w3-green w3-round-large" style="width:0%">
    <div id="demo" class="w3-center w3-text-white"><p>0%</p></div>
  </div>
</div>
<br>
<center><button type="button" id="submit" class="w3-btn w3-dark-grey w3-round w3-medium" onclick=" ss(); move()">
click to pair</button> 
  <br>
<center><div id='a'><div class="grid-container">
  <p class="grid-item"><?php echo $_SESSION['username']; ?></p>
   <p class="grid-item">has been paired with</p>
  <p class="grid-item" id="message">?</p>
</div></div></center>

        
<script type="text/javascript" src="ccd.js"></script>
<script type="text/javascript" src="motion.js"></script>
<footer class="w3-container w3-blue">
<h5> <a href="index.php?logout='1'" style="color: red;">logout</a> </h5> 
</footer>
</div></center>
</body>
</html>