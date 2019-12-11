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

function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      $('#pp').text('pair found!');
      $('#message').text(random);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("demo").innerHTML = width * 1  + '%';
    }
  }
  $("#submit").click(function(move){
    var width1 = $('#demo').width();
    if (width1 <= 50) {
    $('#pp').text('finding pair');
    } 
        else {
          $('#pp').text('pair found!');
        }
    });
  }
