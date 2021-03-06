/* Output:  Updates the position of the cars in all lane arrays */
function updateCars() {
  for (var lane of lanes){
    for (var i = 0; i < lane.numCars; i++) {
      lane._straightLane[i].updateStraight();
    }
    for (var i = 0; i < lane.numLeftCars; i++) {
        lane._leftLane[i].updateLeft();
    }
  }
}
/* Output:  Displays the cars in all lane arrays */
function displayCars() {
  for (var lane of lanes) {
    for (var i = 0; i < lane.numCars; i++) {
      lane._straightLane[i].display();
    }
    for (var i = 0; i < lane.numLeftCars; i++) {
        lane._leftLane[i].display();
    }
  }
}
/* Output:  Updates the colors of traffic lights */
function updateLightColor() {
  greyLights();
  //North
    if (laneN._light == "R"){
        fill("red");
        circle(238, 65, 20);
    }
    else if (laneN._light == "Y")
    {
        fill("yellow");
        circle(238, 111, 20);
    }
    else if (laneN._light == "A"){
      fill("green");
      circle(238, 157, 20);
      fill("green");
      rect(225,197,20,11);
      fill("green");
      triangle(240, 215, 240, 191, 253, 203);
    }
    else if (laneN._light == "G")
    {
        fill("green");
        circle(238, 157, 20);
    }
    else if (laneN._light == "L")
    {
      fill("green");
      rect(225,197,20,11);
      fill("green");
      triangle(240, 215, 240, 191, 253, 203);
    }
    //East
    if (laneE._light == "R")
    {
        fill("red");
        circle(672, 204, 20);
    }
    else if (laneE._light == "Y")
    {
        fill("yellow");
        circle(626, 204, 20);
    }
    else if (laneE._light == "A"){
      fill("green");
      circle(580, 204, 20);
      fill("green");
      rect(528,191,11,15);
      fill("green");
      triangle(522, 206, 546, 206, 534, 219);
    }
    else if (laneE._light == "G")
    {
        fill("green");
        circle(580, 204, 20);
    }
    else if (laneE._light == "L")
    {
        fill("green");
        rect(528,191,11,15);
        fill("green");
        triangle(522, 206, 546, 206, 534, 219);
    }
    //West
    if (laneW._light == "R"){
        fill("red");
        circle(96, 497, 20);
    }
    else if (laneW._light == "Y")
    {
        fill("yellow");
        circle(142, 497, 20);
    }
    else if(laneW._light == "A"){
      fill("green");
      circle(188, 497, 20);
    fill("green");
    rect(228,494,11,16);
    fill("green");
    triangle(222, 495, 246, 495, 234, 482);
    }
    else if (laneW._light == "G")
    {
        fill("green");
        circle(188, 497, 20);
    }
    else if (laneW._light == "L")
    {
        fill("green");
        rect(228,494,11,16);
        fill("green");
        triangle(222, 495, 246, 495, 234, 482);
    }
    //South
    if (laneS._light == "R"){
        fill("red");
        circle(530, 636, 20);
    }
    else if (laneS._light == "Y")
    {
        fill("yellow");
        circle(530, 590, 20);
    }
    else if (laneS._light == "A"){
      fill("green");
      circle(530, 544, 20);
      fill("green");
      rect(527,492,16,11);
      fill("green");
      triangle(528, 486, 528, 510, 515, 498);
    }
    else if (laneS._light == "G")
    {
        fill("green");
        circle(530, 544, 20);
    }
    else if (laneS._light == "L")
    {
        fill("green");
        rect(527,492,16,11);
        fill("green");
        triangle(528, 486, 528, 510, 515, 498);
    }
}
/* Output:  Initializes all the traffic lights to to grey */
function greyLights() {
  fill("grey");
  //South
  circle(530, 498, 20);
  circle(530, 544, 20);
  circle(530, 590, 20);
  circle(530, 636, 20);
  //West
  circle(96, 497, 20);
  circle(142, 497, 20);
  circle(188, 497, 20);
  circle(234, 497, 20);
  //North
  circle(238, 65, 20);
  circle(238, 111, 20);
  circle(238, 157, 20);
  circle(238, 203, 20);
  //East
  circle(672, 204, 20);
  circle(626, 204, 20);
  circle(580, 204, 20);
  circle(534, 204, 20);
}
/* Output:  Returns a string representing a random hexcolor */
function colorGen() {
  var hexChars = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}
/* Output:  Returns a string representing a random direction (either
            left, right, or straight) */
function directionGen() {
    //Generate random direction
    var directionArray = ["L","R","S"];
    var direction = directionArray[Math.floor(Math.random() * 3) - 1];
    return direction;
}
/* Output:  Returns a random number between 0.5 and 1.5, with a
            distribution given by a normal distribution using
            the Box-Muller function */
function boxMuller() {
  var x1, x2, w;
  do {
    do {
      x1 = (2.0 * Math.random()) - 1.0;
      x2 = (2.0 * Math.random()) - 1.0;
      w  = (x1 * x1) + (x2 * x2);
    } while (w >= 1.0);
    w = Math.sqrt((-2.0 * Math.log(w)) / w);
  } while (w > 1.5 || w < 0.5);
  return w;
}
/* Input:   A lane, a frequency value
   Output:  Updates the frequency and timer of a lane */
function changeSingleFrequency(lane, freq) {
  lane.timer = (lane.timer / lane.frequency) * freq;
  lane.frequency = freq;
}
/* Input:   A frequency value
   Output:  Updates the frequency and timer of all lanes */
function changeFrequency(freq) {
  for (var lane of lanes) {
    changeSingleFrequency(lane, freq);
  }
}
/* Input:   A lane, a frequency value
   Output:  Updates the frequency and timer of north lane */
function changeNFrequency(freq) {
  changeSingleFrequency(laneN, freq);
}
/* Input:   A lane, a frequency value
   Output:  Updates the frequency and timer of east lane */
function changeEFrequency(freq) {
  changeSingleFrequency(laneE, freq);
}
/* Input:   A lane, a frequency value
   Output:  Updates the frequency and timer of south lane */
function changeSFrequency(freq) {
  changeSingleFrequency(laneS, freq);
}
/* Input:   A lane, a frequency value
   Output:  Updates the frequency and timer of the west lane */
function changeWFrequency(freq) {
  changeSingleFrequency(laneW, freq);
}
