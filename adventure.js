// function to check if the movement is valid
function movementValid(newX, newY, maxX, maxY){
  if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX;
      userY = newY;
    } else{
      console.log("There is a forbidding mountain range in that direction, you cannot go")
    }
}


// Define the size of the game play area
var maxX = 10;
var maxY = 10;

// Define random position for the treasure
var randomTreasureX = Math.floor(Math.random() * 11);
var randomTreasureY = Math.floor(Math.random() * 11);

// Define random position for the user
var randomUserX = Math.floor(Math.random() * 11);
var randomUserY = Math.floor(Math.random() * 11);

// Checks if user's position is not the same as the treasure's position, if so defines another start position for the user
if (randomUserX == randomTreasureX && randomUserY == randomTreasureY){
  var randomUserX = Math.floor(Math.random() * 11);
  var randomUserY = Math.floor(Math.random() * 11);
}

// User recieves the initial position
var userX = randomUserX;
var userY = randomUserY;

// Hide the treasure, also with x y values
var treasureX = randomTreasureX;
var treasureY = randomTreasureY;

// Flag that controls loop
var treasureFound = false;

// Get user's name
var name = prompt("Welcome brave adventurer! What are you called?");

while(!treasureFound){
  var direction = prompt("Which direction would you like to go in?(north, south, east, west)")
  console.log(direction)
  
  
  //temp vars, only used for checking the validity of new user location after move
  var newX;
  var newY;
  
  // see what new user location should be
  
  // check if new user location is valid
  
  // check if new user location is treasure
  
  if(direction == "north"){
    newX = userX;
    newY = userY + 1;   
    // neitther value <0, neither is > max
    
    movementValid(newX, newY, maxX, maxY);
    
  }else if(direction == "east"){
    newX = userX + 1;
    newY = userY;
   
    movementValid(newX, newY, maxX, maxY);

    
  }else if(direction == "south"){
    newX = userX;
    newY = userY - 1; 
    
    movementValid(newX, newY, maxX, maxY);
    
  }else if(direction == "west"){    
    newX = userX - 1;
    newY = userY;  
    
    movementValid(newX, newY, maxX, maxY);
    
  }else{
    console.log("please enter a real direction");
  }
  
  console.log("The user's X is: " + userX);
  console.log("The user's Y is: " + userY)
  
  
  if(userX == treasureX && userY == treasureY){
    treasureFound = true;
    console.log("You found the treasure!");
  }
}