var collectorTotal = 0; 
var wins = 0;
var losses = 0;
var randomNumber; 


$( document ).ready(function(){

{
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
// assign random number to buttons (displayed)
$('#button-1').on('click', function(){
    collectorTotal = collectorTotal + amethystHeart;
    document.write('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
    if (CPguess == gemTotal){
        win();
    }
    else if (CPguess < gemTotal){
        loss();
    }   
});  
$('#button-2').on('click', function(){
    collectorTotal = collectorTotal + ;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess == gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
}); 
$('#button-3').on('click', function(){
    gemTotal = gemTotal + diamond;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess === gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
}); 
$('#button-4').on('click', function(){
    gemTotal = gemTotal + ruby;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess === gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
});  
$('#button-5').on('click', function(){
    gemTotal = gemTotal + sapphire;
    console.log('New gem total = ' + gemTotal);
    console.log('You clicked a gem!!');
    $('#gem-worth').text(gemTotal); 
        if (CPguess === gemTotal){
            win();
        }
        else if (CPguess < gemTotal){
            loss();
        }   
});  

// when score matches alert (you win!!!) or not alert (you lose!!!)
// record wins and losses
function win(){
    alert('You are a true Gem!!!');
      wins++; 
      $('#winResult').text(wins);
      restart();
    }
function loss(){
    alert ('One day you will be a true Gem collector, but not today');
        losses++;
        $('#lossResult').text(losses);
        restart()
}

// after win or loss restart game
function restart(){
    CPguess = Math.floor(Math.random()*100);
    console.log(CPguess)
    $('#computer-pick').text(CPguess);
    mcCrystal = Math.floor(Math.random()*20);
    emerald = Math.floor(Math.random()*20);
    diamond = Math.floor(Math.random()*20);
    ruby = Math.floor(Math.random()*20);
    gemTotal = 0;
    $('#gem-worth').text(gemTotal);

    )};