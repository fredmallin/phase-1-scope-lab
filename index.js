// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob'; // declared without var, let, or const — becomes global
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // overwrites global `bestCustomer`
}
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // will throw an error!
}
