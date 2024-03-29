let computer_score =0;
let user_score=0;
let result_ref = document.getElementById("result");
let choices_object = {
    'bat' : {
        'bat' : 'tie',
        'ball' : 'win',
        'stump' : 'lose'
    },
    'ball' : {
        'bat' : 'lose',
        'ball' : 'tie',
        'stumb' : 'win'
    },
    'stump' : {
        'bat' : 'win',
        'ball' : 'lose',
        'stump' : 'tie'
    }

}

function checker(input){
    var choices = ["bat", "ball", "stump"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num]} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "You win";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "You lose";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "Tie";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}