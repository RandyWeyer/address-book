$(document).ready(function() {
  $("#newContact").submit(function(event) {

        event.preventDefault();

    var firstInput = $("input#first-name").val();
    var lastInput = $("input#last-name").val();
    var birthdayInput= $("input#birthday").val();
    var genderInput = $('input[name=gender]:checked').val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = document.getElementById("state-combobox").value;
    var zipCodeInput = $("input#zip-code").val();

    $(".first-name").text(firstInput);
    $(".last-name").text(lastInput);
    $(".birthday").text(birthdayInput);
    $(".gender").text(genderInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip-code").text(zipCodeInput);

    $("#results").append("<div class='col-md-2 contact-card'><h4>Name: " + firstInput + " " + lastInput+ "</h4><h4>Birthday: "+ birthdayInput +"</h4><h4>Gender: " + genderInput + "</h4><h4>Address: "+ streetInput + ", " + stateInput + " " + zipCodeInput + "</h4></div>");
  });
});
