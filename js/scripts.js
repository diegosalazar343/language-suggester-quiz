//Business Logic
function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <= 7) {
    programming = "Ruby";
  } else if(total <= 11) {
    programming = "C#";
  } else if(total <= 16) {
    programming = "Python";
  } else {
    programming = "Swift";
  }
  return programming;
}

//User Logic
$(document).ready(function(){
  $("form#quiz").submit(function(){
    event.preventDefault();

    const superpower = parseInt($("#superpower").val());
    const disney = parseInt($("#disney").val());
    const animal = parseInt($("#animal").val());
    const language= parseInt($("#language").val());
    const season = parseInt($("#season").val());
    const programming = results(superpower, disney, animal, language, season);

    if(programming === "Ruby") {
      $("#output").show();
      $("#answer").text("Ruby");
      $(".pic").hide();
      $("#r").show();
    } else if(programming === "C#"){
      $("#output").show();
      $("#answer").text("C#");
      $(".pic").hide();
      $("#c").show();
    } else if(programming === "Python"){
      $("#output").show();
      $("#answer").text("Python");
      $(".pic").hide();
      $("#p").show();
    } else {
      $("#output").show();
      $("#answer").text("Swift");
      $(".pic").hide();
      $("#s").show();
    }
  });
});
