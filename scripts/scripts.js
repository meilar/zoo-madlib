  $(document).ready(function() {
    $("#sub-btn").click(function(event) {
      var madLibs = ["user-name", "city", "animal-1", "animal-2", "goof", "animal-3", "bat-num"];

      madLibs.forEach(function(madLib) {
        var answer = $("input#" + madLib).val();
        $("." + madLib).text(answer);
      });
    $(".output").show();
  event.preventDefault();
  });
});
