$(document).ready(function() {

  var tally1 = 0;
  var tally2 = 0;
  var tally3 = 0;
  var iName;
  var iAddress;
  var iEmail;
  var survey_rec;

  $("button#complete-reccommendation").click(function() {
    iName = $("#rec-name").val();
    iAddress = $("#rec-address").val();
    iEmail = $("#rec-email").val();
    if (tally1 === 0 && tally2 === 0 && tally3 === 0) {
      $(".no-survey").show();
      $(".survey-complete").hide();
      $(".no-info").hide();
    } else if (iName.length === 0 || iAddress.length === 0 || iEmail.length === 0) {
      $(".no-survey").hide();
      $(".survey-complete").hide();
      $(".no-info").show();
    } else {
      $(".no-info").hide();
      $(".no-survey").hide();
      $(".survey-complete").show();
      $(".survey-complete-text").text(survey_rec);
      $(".rec-name").text(iName);
      $(".rec-address").text(iAddress);
      $(".rec-email").text(iEmail);
    }
  });


  $("button#survey-submit").click(function() {
    tally1 = 0;
    tally2 = 0;
    tally3 = 0;
    var answer1 = ($("input:radio[name=quest1]:checked").val());
    var answer2 = ($("input:radio[name=quest2]:checked").val());
    var answer3 = ($("input:radio[name=quest3]:checked").val());
    var answer4 = ($("input:radio[name=quest4]:checked").val());
    var answer5 = ($("input:radio[name=quest5]:checked").val());
    var answer6 = ($("input:radio[name=quest6]:checked").val());
    if (answer1 === undefined && answer2 === undefined && answer3 === undefined && answer4 === undefined && answer5 === undefined && answer6 === undefined) {
      $(".no-survey").show();
      $(".survey_complete").hide();
      return;
    } else {
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
      }
    };

    if (tally1 > tally2 && tally1 > tally3) {
      survey_rec = "Ruby/Rails";
    } else if (tally2 > tally1 && tally2 > tally3) {
      survey_rec = "CSS/React";
    } else if (tally3 > tally1 && tally3 > tally2) {
      survey_rec = "C#/.Net";
    } else if (tally1 === tally2 && tally1 === tally3 && tally2 === tally3) {
      survey_rec = "Ruby/Rails or CSS/React or C#/.Net";
    } else if (tally1 === tally2) {
      survey_rec = "Ruby/Rails or CSS/React";
    } else if (tally2 === tally3) {
      survey_rec = "CSS/React or C#/.Net";
    } else if (tally1 === tally3) {
      survey_rec = "Ruby/Rails or C#/.Net";
    } else {
      survey_rec = "Please refresh page and refill out the survey"
    }
    $(".survey-complete-text").text(survey_rec);
    $(".survey-complete").show();
    $(".no-survey").hide();
  });




});
