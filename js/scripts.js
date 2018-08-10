$(document).ready(function() {

  var tally1 = 0;
  var tally2 = 0;
  var tally3 = 0;

  $("button#complete-reccommendation").click(function() {
    if (tally1 === 0 && tally2 === 0 && tally3 === 0) {
      $(".survey-complete").hide();

    } else {
      $(".no-survey").hide();

    }

  });


  $("button#survey-submit").click(function() {

    var answer1 = ($("input:radio[name=quest1]:checked").val());
    var answer2 = ($("input:radio[name=quest2]:checked").val());
    var answer3 = ($("input:radio[name=quest3]:checked").val());
    var answer4 = ($("input:radio[name=quest4]:checked").val());
    var answer5 = ($("input:radio[name=quest5]:checked").val());
    var answer6 = ($("input:radio[name=quest6]:checked").val());

    // alert(answer1 + " " + answer2 + " " + answer3 + " " + answer4 + " " + answer5);
    for (i = 1; i <= 6; i++) {
      if ((eval("answer" + i) < 70) && (eval("answer" + i) >= 60)) {
        tally1++;
        tally2++;
      } else if ((eval("answer" + i) < 60) && (eval("answer" + i) >= 50)) {
        tally1++;
        tally3++;
      } else if ((eval("answer" + i) < 50) && (eval("answer" + i) >= 40)) {
        tally2++;
        tally3++;
      } else if ((eval("answer" + i) < 40) && (eval("answer" + i) >= 30)) {
        tally3++;
      } else if ((eval("answer" + i) < 30) && (eval("answer" + i) >= 20)) {
        tally2++;
      } else if ((eval("answer" + i) < 20) && (eval("answer" + i) >= 10)) {
        tally1++;
      }
    };

    alert("1: " + tally1 + " 2: " + tally2 + " 3: " + tally3)
    if (tally1 > tally2 && tally1 > tally3) {
      alert("sequence#1");
    } else if (tally2 > tally1 && tally2 > tally3) {
      alert("sequence#2");
    } else if (tally3 > tally1 && tally3 > tally2) {
      alert("sequence#3");
    } else if (tally1 === tally2 && tally1 === tally3 && tally2 === tally3) {
      alert("sequence#4");
    } else if (tally1 === tally2) {
      alert("sequence#5");
    } else if (tally2 === tally3) {
      alert("sequence#6");
    } else if (tally1 === tally3) {
      alert("sequence#7");
    }
  });




});
