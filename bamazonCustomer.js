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
}
