var collectorTotal = 0; 
var wins = 0;
var losses = 0;



$( document ).ready(function(){

var randomNumber = Math.floor(Math.random()*(102)+19);

// Appends randomNumber on webpage
  $("#random-number").text(randomNumber);


// Assign numbers to crystals
var amethystHeart = Math.floor((Math.random()*12)+1);
var labradorite = Math.floor((Math.random()*12)+1);
var orangeCalcite = Math.floor((Math.random()*12)+1);
var roseQuartz = Math.floor((Math.random()*12)+1);


// Code that keeps track of score
console.log(amethystHeart,labradorite, orangeCalcite, roseQuartz)
console.log(randomNumber)
// assign random number to buttons
$('#button-1').on('click', function(){
    alert(amethystHeart);
    collectorTotal = collectorTotal + amethystHeart;
    $('#crystal-num').text(collectorTotal); 
    if (collectorTotal == randomNumber){
        win();
    }
    else if (collectorTotal > randomNumber){
        loss();
    }   
});  
$('#button-2').on('click', function(){
    alert(labradorite);
    collectorTotal = collectorTotal + labradorite;
    $('#crystal-num').text(collectorTotal); 
    if (collectorTotal == randomNumber){
        win();
    }
    else if (collectorTotal > randomNumber){
        loss();
    }   
}); 
$('#button-3').on('click', function(){
    alert(orangeCalcite);  
    collectorTotal = collectorTotal + orangeCalcite;
    $('#crystal-num').text(collectorTotal); 
    if (collectorTotal == randomNumber){
        win();
    }
    else if (collectorTotal > randomNumber){
        loss();
    }
});   
$('#button-4').on('click', function(){
    alert(roseQuartz);
    collectorTotal = collectorTotal + roseQuartz;
    $('#crystal-num').text(collectorTotal); 
    if (collectorTotal == randomNumber){
        win();
    }
    else if (collectorTotal > randomNumber){
        loss();
    }  
});  


// when score matches alert (you win!!!) or not alert (you lose!!!)
// record wins and losses
function win(){
    alert('YOU WIN');
    collectorTotal = 0;
      wins++; 
      $('#winResult').text(wins);
      restart();
    }
function loss(){
    alert ('YOU LOST');
    collectorTotal = 0;
        losses++;
        $('#lossResult').text(losses);
        restart()
    }   

// after win or loss restart game
function restart(){
    var randomNumber = Math.floor(Math.random()*(102)+19);
    collectorTotal = 0;
    
    // Appends randomNumber on webpage
        $("#random-number").text(randomNumber);
    
    
    // Assign numbers to crystals
    var amethystHeart = Math.floor((Math.random()*12)+1);
    var labradorite = Math.floor((Math.random()*12)+1);
    var orangeCalcite = Math.floor((Math.random()*12)+1);
    var roseQuartz = Math.floor((Math.random()*12)+1);  
};
});