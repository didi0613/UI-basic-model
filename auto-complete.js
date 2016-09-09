var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
var userInput = "";
var selectedCountries = [];
var list = $('ul');

$('input').on('keyup change', function (e) {
    userInput = $(this).val();

    list.empty();
    selectedCountries = [];

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

////////////////////HTML//////////////////////////////
// <input placeholder="please enter..."/>
//     <ul class="mylist">
//     </ul>

/////////////////CSS///////////////////////
// li {
//     list-style: none;
// }
//
// ul {
//     padding: 0;
//     background-color: #eee;
//     width: 105px;
//     margin: 0;
// }
//
// input {
//     width: 100px;
// }