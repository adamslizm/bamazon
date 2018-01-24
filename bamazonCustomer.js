// Require NPM packages
var mysql = require('mysql');
var inquirer = require('inquirer');

// Setup connection to SQL server
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon_DB'
});

// Connect to DB
connection.connect(function(err) {
 if (err) throw err;
 start();
});
//start the bamazon shop app
function start() {
  inquirer
    .prompt({
      name: "buyOrNo",
      type: "rawlist",
      message: "Would you like to buy something from bamazon?",
      choices: ["Yes", "No"]
    })
    .then(function(answer) {
      
      if (answer.buyOrNo.toUpperCase() === "Yes") {
        pickProduct();
      }
      else {
        console.log("Have a nice day!");
      }
    });
}
//pick item id
function pickProduct() {
    return inquirer.prompt({
        name: 'product_name',
        message: 'Enter the item number of the product you would like to purchase.',
        type: 'input',
        validate: function(value) {
            if ((isNaN(value) === false) && (value <= numberOfProductTypes)) {
                return true;
            } else {
                console.log('\nPlease enter a valid ID.');
                return false;
            }
        }
    }, {
        //pick the quantity of that item
        name: 'quantity',
        message: 'How many would you like to buy?',
        type: 'input',
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log('\nInsufficient quantity!');
                return false;
            }

            //change the number of stock in inventory
        }
        });
};











