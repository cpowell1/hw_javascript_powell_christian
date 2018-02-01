var iceCream = ['chocolate', 'cherry', 'mint'];
iceCream.push('coffee');

var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: 'one term', party: 'Republican', yearsofPresidency: 'one year'},
    {firstName: 'Barack', lastName: 'Obama', termLength: 'two terms', party: 'Democrat', yearsofPresidency: 'eight years'},
    {firstName: 'George W.', lastName: 'Bush', termLength: 'two terms', party: 'Republican', yearsofPresidency: 'eight years'},
    {firstName: 'Bill', lastName: 'Clinton', termLength: 'one term', party: 'Democrat', yearsofPresidency: 'four years'},
    {firstName: 'Donald', lastName: 'Trump', termLength: 'one term', party: 'Republican', yearsofPresidency: 'four years'},
];
console.log(presidents[2].firstName, presidents[2].lastName);

function howdy(person, message) {
    return person + ' says ' + message;
}
var message = howdy('Christian Powell', 'Good Morning!');
console.log(message);


var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    } else {
        console.log("I'm sorry, but that's too many to count.");
    }
};
numba('7');
numba('seventy');
numba('university');

var inception = function display(favMovie) {
    console.log(favMovie + ' ' + 'is a fantastic movie.');
};
inception('21 Jump Street');
