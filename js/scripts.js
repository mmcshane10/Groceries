$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();
    var list = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var groceries = list.map(function(input) {
      return $("input#" + input).val().toUpperCase();
    });
    var sortedGroceries = groceries.sort();
    debugger;

    // sortedGroceries.forEach(function(grocery) {
    //   var userInput = $("input#" + grocery).val();
    //   $("." + grocery).text(userInput);
    //   console.log();
    // });

    var html = "";
    for (var i =0; i < list.length; i++) {
      html += "<li>" + list[i]+ "</li>";
    }

    $("form#blanks").hide();
    console.log();

  });
});
