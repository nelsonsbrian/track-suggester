$(document).ready(function(){
  $("button#survey-submit").click(function() {

    var answer1 = ($("input:radio[name=quest1]:checked").val());
    var answer2 = ($("input:radio[name=quest2]:checked").val());
    var answer3 = ($("input:radio[name=quest3]:checked").val());
    var answer4 = ($("input:radio[name=quest4]:checked").val());
    var answer5 = ($("input:radio[name=quest5]:checked").val());
    var tally1 = 0;
    var tally2 = 0;
    var tally3 = 0;

    // alert(answer1 + " " + answer2 + " " + answer3 + " " + answer4 + " " + answer5);
    for (i = 1; i <= 5; i++) {

      if ((eval("answer" + i) < 40) && (eval("answer" + i) >= 30)) {
        tally3++;
      } else if ((eval("answer" + i) < 30) && (eval("answer" + i) >= 20)) {
        tally2++;
      } else if ((eval("answer" + i) < 20) && (eval("answer" + i) >= 10)) {
        tally1++;
      }
    };

    alert("1: " + tally1 + " 2: " + tally2 + " 3: " + tally3)


    });




  });
