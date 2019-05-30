  $(document).ready(function() {
  // alert("poop 1");
    $("#sub-btn").click(function(event) {
        // alert("poop 2");
        console.log(event);
      var userNameInput = $("input#user-name").val();
      var cityInput = $("input#city").val();
      var animal1Input= $("input#animal-1").val();
      var animal2Input = $("input#animal-2").val();
      var goofInput = $("input#goof").val();
      var animal3Input = $("input#animal-3").val();
      var batNumInput = $("input#bat-num").val();
      $(".user-name").text(userNameInput);
      $(".city").text(cityInput);
      $(".animal-1").text(animal1Input);
      $(".animal-2").text(animal2Input);
      $(".goof").text(goofInput);
      $(".animal-3").text(animal3Input);
      $(".bat-num").text(batNumInput);
      $(".output").show();
  event.preventDefault();
});
});
