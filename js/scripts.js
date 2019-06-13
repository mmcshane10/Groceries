$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var list = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var listSort = list.sort();
    var Output = listSort.charAt(0).toUpperCase();


    list.forEach(function(item) {
      var userInput = $("input#" + item)
      $("." + item).text(userInput)

      $("form#blanks").hide();
      console.log();

    });
  });
});
