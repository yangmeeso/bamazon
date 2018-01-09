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

var questions = [
    {
        type: "input",
        message: "Please enter the product ID that you would like to buy.",
        name: "id",
        validate: function idVal(id) {
            return id !== "" || id > 10;
        },
        filter: Number

    }, {
        type: "input",
        message: "How many units of the product they would like to buy?",
        name: "unit",
        validate: function unitVal(unit) {
            return id !== "";            
        },
        filter: Number  
    }];

// var productId = [];
// var purchasingUnit = [];

function purchase() {
    inquirer.prompt(questions)
        .then(function(answers) {
            let product = answers.questions.id;
            let quantity = answers.questions.unit;
            console.log(`** User's Input **
            \nYou chose item number ${product},
            \nand quantity of ${quantity}`);
            inventory();
    })
};

function inventory(product, quantity) {
    
};

