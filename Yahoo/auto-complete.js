var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];
$("#tags").autocomplete({
    source: availableTags,
    minLength: 2,
    open: function () {
    },
    close: function () {
    },
    focus: function (event, ui) {
    },
    select: function (event, ui) {
    }
});

// If ajax call response source
/*source: function(request, response){
 $.ajax({
 url: src,
 dataType: "json",
 data: {
 term: request.term,
 countryId: $(input).val();
 },
 success: function(data){
 response(data);
 }
 });
 }*/

// Pure JS
var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var userInput = "";
var selectedCountries = [];
var list = $('ul');

$('input').on('keyup change', function (e) {
    userInput = $(this).val();
    // Clear the ul contnet;
    countries.forEach(function (country) {
        if (_.includes(country, userInput)) {
            selectedCountries.push(country);
        }
    });
    var str = "";
    selectedCountries.forEach(function (c) {
        str += "<li>" + c + "<\li>";
    });
    list.html(str);
});
