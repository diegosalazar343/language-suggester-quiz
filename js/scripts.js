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
  ("form#").submit(function(){
    event.preventDefault();

    const superpower = parseInt($("#superpower").val());
    const disney = parseInt($("#disney").val());
    const animal = parseInt($("#animal").val());
    const language= parseInt($("#language").val());
    const season = parseInt($("#season").val());
    const programming = results(superpower, disney, animal, language, season);

    if(programming === "Ruby") {
      $("#ouput").show();
      $("#answer").text("Ruby");
    } else if(programming === "C#"){
      $("#ouput").show();
      $("#answer").text("C#");
    } else if(programming === "Python"){
      $("#ouput").show();
      $("#answer").text("Python");
    } else {
      $("#ouput").show();
      $("#answer").text("Swift");
    }
  });
});
