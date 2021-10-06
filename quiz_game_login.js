function addUser()
{
    var name_1=document.getElementById("player1_name_input").value;
    var name_2=document.getElementById("player2_name_input").value;
    localStorage.setItem("name_1",name_1);
    localStorage.setItem("name_2",name_2);
    
    window.location="game.html";
}
