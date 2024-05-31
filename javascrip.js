$(function () {
    $("#add").click(function() {

        var studentID = $("#studentID").val();
        var score = $("#score").val();


        function addline(letter, color){
            $("#mylist").append( $('<li>' + studentID + " - " + letter + " (" + score + ")</li>").css("color", color) );
        };

        function clearinput(){
            $("#studentID, #score").val("");
        };


    if (isNaN (studentID) || isNaN(score) || studentID < 0 )
    {
        alert ("Invalid Input! Please Input Only Number and In range Of 0 - 100 ");
    clearinput();
    } else if (score < 0 ||  score > 100){
        alert ("Invalid Score! Please Enter The Number Only In Range Of 0 - 100");
        stop(addline);
    clearinput();
    } else if (studentID == "" && score == ""){
        alert ("Please Input Your Student ID and Your Score");
    } else if (score == ""){
        alert ("Please Input Your Score");
    } else if (studentID == "") {
        alert ("Please Input Your Student ID");
    }   
            else 
        {
            if (score >= 85 ){
                addline("A", "green");
            }
            else if (score >= 80){
                addline("A-", "green");
            }
            else if (score >= 75){
                addline("B+", "blue");
            }
            else if (score >= 70){
                addline("B", "blue");
            }
            else if (score >= 67){
                addline("B-", "blue");
            }
            else if (score >= 64){
                addline("C+", "orange");
            }
            else if (score >= 60){
                addline("C", "orange");
            }
            else if (score >= 55){
                addline("D", "red");
            }
            else if (score >= 0){
                addline("E", "red");
            }
            clearinput();
        }
    });
});