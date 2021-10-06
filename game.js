player_1=localStorage.getItem("name_1")
player_2=localStorage.getItem("name_2")
document.getElementById("player1_name").innerHTML=player_1+":";
document.getElementById("player2_name").innerHTML=player_2+":";
player1_score=0
player2_score=0



function send()
{
    number1=document.getElementById("first_input").value;
    number2=document.getElementById("second_input").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>" + number1 + "X" + number2+"</h4>";
    input_box="<br> Answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("first_input").value="";
    document.getElementById("second_input").value="";

}
question_turn="player1";
answer_turn="player2";

function check()
{
get_answer = document.getElementById("input_check_box").value;
if(get_answer==actual_answer)
{
    if(answer_turn=="player1")
    {
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }
    else
    {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
}
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("question_turn").innerHTML="question_turn-"+player_2;
    }
    else
    {
        question_turn="player1";
        document.getElementById("question_turn").innerHTML="question_turn-"+player_1;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("answer_turn").innerHTML="answer_turn-"+player_2;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("answer_turn").innerHTML="answer_turn-"+player_1;
    }
    document.getElementById("output").innerHTML="";
}

