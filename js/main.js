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


