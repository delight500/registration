function validate() {
    const un = document.getElementById("usern").value;
    var pw = document.getElementById("pword").value;
    var valid = -1;

    var unArray = ["markwalt", "jongossy", "lisacain", "jenndemp"];
    var pwArray = ["mark1234", "flomaygo", "lisa1234", "jenny1234"];
    var fnArray = ["Mark Walters","Jonathan Goss","Lisa Cain","Jenny Dempsey"];

    for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
            valid = i;
            break;
        }
    }
   
    if (valid != -1) {
        alert ("Login was successful");
        window.location = "page.html"; // Redirecting to other page.
    }
    else {
        alert("Invalid Username and/or Password! Please try again. if you dont have one please obtain from the admin")
        document.getElementById("pword").value = "";
        document.getElementById("usern").value = "";
        document.getElementById("usern").focus();
    }
}

var fn = "";

/* .. */
valid = true;
fn = fnArray[i];
/* ... */
$(document).ready(function(){
    $("window").load(function(){
        $("#cc").text("Hello world!");
    });
});
function GetValue()
{
	
  var myarray= new Array( 
"Liam", "Noah", "William", "James", "Logan", "Benjamin", "Mason", "Elijah",
"Oliver", "Jacob", "Lucas", "Michael", "Alexander", "Ethan", "Daniel",
"Matthew", "Aiden", "Henry", "Joseph", "Jackson", "Samuel", "Sebastian",
"David", "Carter", "Wyatt", "Jayden", "John", "Owen", "Dylan", "Luke",
"Gabriel", "Anthony", "Isaac", "Grayson", "Jack", "Jonathan", "Connor",
"Landon", "Adrian", "Asher", "Cameron", "Leo", "Theodore", "Jeremiah",
"Hudson", "Robert", "Easton", "Nolan", "Nicholas", "Ezra", "Colton", "Angel",
"Brayden", "Jordan", "Dominic", "Austin", "Ian", "Adam", "Elias", "Jaxson",
"Greyson", "Jose", "Ezekiel", "Carson", "Evan", "Maverick", "Bryson", "Jace",
"Cooper", "Xavier", "Parker", "Roman", "Jason", "Santiago", "Chase", "Sawyer",
"Gavin", "Leonardo", "Kayden", "Ayden", "Jameson", "Kevin", "Bentley",
"Zachary", "Everett", "Axel", "Tyler", "Micah", "Vincent", "Weston", "Miles",
"Wesley", "Nathaniel", "Harrison", "Brandon", "Cole", "Declan", "Luis",
"Braxton", "Damian", "Silas", "Tristan", "Ryder", "Bennett", "George",
"Emmett", "Justin", "Kai", "Max", "Diego", "Luca", "Ryker", "Carlos",
"Maxwell", "Kingston", "Ivan", "Maddox", "Juan", "Ashton", "Jayce", "Rowan",
"Kaiden", "Giovanni", "Eric", "Jesus", "Calvin", "Abel", "King", "Camden",
"Amir", "Blake", "Alex", "Brody", "Malachi", "Emmanuel", "Jonah", "Beau",
"Jude", "Antonio", "Alan", "Elliott", "Elliot", );
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    var dom = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
    document.getElementById("cc").innerHTML=dom;
}
$(document).ready(function () {
    $("#btnSearch").on('dblclick', function (event) {  
       event.preventDefault();
 });
});

 var counter=0;

function ss(){
if(counter<7){
    counter++;
}
else{
  alert("you have already been assigned to a partner"); 
    document.getElementById("btnSearch").disabled=true;
}
}
function displayDate() {
  document.getElementById("cc").innerHTML = fnArray[valid];
}
$(window).load(function(){
    var buttonState=Boolean(localStorage.getItem("lastname"));
     $("#submit").attr('disabled',buttonState);
 
    
    $("#submit").click(function() {
        var that = this;
        $(this).attr("disabled", true);
        localStorage.setItem("button-state", 'true');
        setTimeout(function() {     $("#submit").attr('disabled',true);}, 15000);
    });
});
    
    
        var count = 1;
        function setColor(btn, color) {
            var property = document.getElementById(btn);
            if (count == 0) {
                property.style.backgroundColor = "#FFFFFF"
                count = 1;        
            }
            else {
                property.style.backgroundColor = "#7FFF00"
                count = 0;
            }
        }