var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    allItems();
});

function allItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // console.log(res);
        console.log("** All items listed on Bamazon ** ")
        for (var i = 0; i < res.length; i++) {
            console.log(`\nID: ${res[i].item_id}
            \nProduct Name: ${res[i].product_name}
            \nDepartment Name: ${res[i].department_name}
            \nPrice: $${res[i].price}
            \nQuantity: ${res[i].stock_quantity}`);
            console.log("\n---------------------------")
        }
        purchase();
    })
};

var validateInput = (value) => {
    var input = /^[0-9]+$/;
        if (inputtxt.value.match(input)) {
            return true;
        }
        else if (value.length == 0) {
            done('Cannno be empty');
        }
        else {
            done(null, value);
        }
};

function purchase() {
    const questions = () => [{
        type: "input",
        message: "Please enter the product ID that you would like to buy.",
        name: "id",
        validate: validateInput,
        filter: Number

    }, {
        type: "input",
        message: "How many units of the product they would like to buy?",
        name: "unit",
        validate: validateInput,
        filter: Number  
    }];

    inquirer.prompt([questions])
        .then(function(answers) {
            let product = answers.questions.id;
            let quantity = answers.questions.unit;
            console.log(`** User's Input **
            \nYou chose item number ${product},
            \nand quantity of ${quantity}`);
            // inventory();
    })
};

// function inventory(product, quantity) {
    
// };

// In function inventory, If user's order quantity is larger than the stock. "Insufficient quantity!".
// After that, update the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

