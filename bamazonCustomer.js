// Require NPM packages
var mysql = require('mysql');
var inquirer = require('inquirer');
// var index = require('index.sql');

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
      
      if (answer.buyOrNo.toUpperCase() === "YES") {
        pickProduct();
      }
      // else {
      //   console.log("Have a nice day!");
      // }
    });
}

//list products available
function list() {
    return inquirer.prompt({
        type: 'list',
        name: 'bamazon_DB'
    })
}
// connection.query(
//     "List of products",
//     {

//     }
//pick item id
function pickProduct() {
    return inquirer.prompt({
        name: 'item_id',
        message: 'Enter the item id of the product you would like to purchase.',
        type: 'input',
        choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],


        validate: function(value) {
            if ((isNaN(value) === false) && (value === choices)) {
                return true;
                pickQuantity();

            } else {
                console.log('\nPlease enter a valid ID.');
                return false;
            }
        }
    }, {
        //pick the quantity of that item
        // function pickQuantity() {
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
            //show how much the customer owes
        }
        });
};











