$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var list = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var groceries = list.map(function(input) {
      return $("input#" + input).val().toUpperCase();
    });
    var sortedGroceries = groceries.sort();
debugger;

    Output.forEach(function(item) {
      var userInput = $("input#" + item)
      $("." + item).text(userInput)

      $("form#blanks").hide();
      console.log();

    });
  });
});
