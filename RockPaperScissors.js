//Clicking on start button will prompt a question
//how many rounds does the user wants to play
var r;
$('#rock,#scissors,#paper').hide();
$('#start').click(function() {
$(".container").fadeOut(0);
$('h2').text("Choose your number of rounds");
$(this).remove();
$(".container").append('<button id ="one">1</button>');
$(".container").append('<button id ="three">3</button>');
$(".container").append('<button id ="five">5</button>');
$(".container").fadeIn(1000);

//trying to save the number of rounds into a variable
$("#one,#three,#five").on('click', function() {
    r = $(this).html();
    console.log(r)
    $(".container").fadeOut(0);
    $('h2').text("There will be " + r.toString() + " round/s:");
    $("#one,#three,#five").hide();
    $("h1").text("Choose your weapon!")
    console.log("There will be " + r.toString() + " round");
    $('#rock,#scissors,#paper').show(1000);
    $(".container").fadeIn(1500);
    console.log(r);
    //r gives me the correct number of rounds


function winRounds(num) {
    return Math.ceil(num / 2);
}

var humanWinCount = 0;
var computerWinCount = 0;

function gameStarts() {
    console.log(window.r)
    r = parseInt(window.r);
    console.log(r);
    var win = winRounds(r);
    console.log("There are " + r + " rounds left");
    console.log("There will be " + win + " to win")
    $('img').mouseover(function(event){
      $(event.target).toggleClass("size");
    })
    $('img').mouseout(function(event){
      $(event.target).toggleClass("size");
    })

    $("img").click(function() {
        var humanSelection = $(this).attr('id');
        console.log("Human chooses " + humanSelection);
        var computerChoice = ['Rock', 'Paper', 'Scissors'];
        var computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        console.log("Computer chooses " + computerSelection);
        r--;
        if (humanSelection === 'rock' && computerSelection === "Scissors") {
            humanWinCount += 1;
            $('h1').text("Computer chooses " + computerSelection);
            $('h2').text("You won this round! Please pick again!");

            console.log(humanWinCount);

        } else if (humanSelection == 'paper' && computerSelection === "Rock") {
            humanWinCount += 1;
            $('h1').text("Computer chooses " + computerSelection);
            $('h2').text("You won this round! Please pick again!");
            console.log(humanWinCount);

        } else if (humanSelection == 'scissors' && computerSelection === "Paper") {
            humanWinCount += 1;
            $('h1').text("Computer chooses " + computerSelection);
            $('h2').text("You won this round! Please pick again!");
            console.log(humanWinCount);

        } else if (humanSelection == 'paper' && computerSelection === "Scissors") {
            computerWinCount += 1;
            $('h1').text("Computer chooses " + computerSelection)
            $('h2').text("Sorry! Computer won this round! Please pick again!");
            console.log(computerWinCount);
        } else if (humanSelection == 'scissors' && computerSelection === "Rock") {
            computerWinCount += 1;
            $('h1').text("Computer chooses " + computerSelection);

            $('h2').text("Sorry! Computer won this round! Please pick again!");
            console.log(computerWinCount);
        } else if (humanSelection == 'rock' && computerSelection === "Paper") {
            computerWinCount += 1;
            $('h1').text("Computer chooses " + computerSelection);

            $('h2').text("Sorry! Computer won this round! Please pick again!");
            console.log(computerWinCount);
        } else {
            $('h1').text("Computer chooses " + computerSelection);
            $('h2').text("It is a draw this round! Please pick again!");
        }
        if ((humanWinCount > computerWinCount && r == 0) || humanWinCount === win) {
            $(".container").fadeOut(0);
            $('h1').text("Computer chooses " + computerSelection + "!");
            $('h2').text("Game Ends, You Win!");
            $('img').hide();
            $(".container").fadeIn(3000);
            console.log(humanWinCount);



        } else if ((humanWinCount < computerWinCount && r == 0) || computerWinCount === win) {
            $(".container").fadeOut(0);
            $('h1').text("Computer chooses " + computerSelection + "!");
            $('h2').text("Game Ends, Computer Wins!");
            $('img').hide();
            $(".container").fadeIn(3000);
            console.log(computerWinCount);


        } else if (humanWinCount == computerWinCount && r == 0) {
            $(".container").fadeOut(0);
            $('h1').text("Computer chooses " + computerSelection + "!");
            $('h2').text("It is a draw!");
            $('img').hide();
            $(".container").fadeIn(3000);


        }
    })
}
gameStarts();
})
})
