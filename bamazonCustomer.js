var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
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
        connection.end();
    })
};

function buyProducts (answerId, answerUnit) {
    console.log(`Product ID you entered: ${answerId}
    \nOrder quantity you entered: ${answerUnit}`);
}

var questions = [
    {
        type: "input",
        message: "Please enter the product ID that you would like to buy.",
        name: "id",
        validate: function idVal(id) {
            return id !== "";
        },
        filter: Number

    },{
        type: "input",
        message: "How many units of the product they would like to buy?",
        name: "unit",
        validate: function unitVal(unit) {
            return id !== "";            
        },
        filter: Number  
    }];

inquirer.prompt(questions, answerId, answerUnit);
    .then(function(inquirerResponse) {
        if(inquirerResponse.input <= 10) {
            console.log(inquirerResponse.id);
            console.log(inquirereResponse.unit);
        }
        else {
            console.log("Invalid Input.");
        }
    });

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    allItems();
});

