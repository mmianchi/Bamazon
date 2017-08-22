var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require("columnify");
var xarray = [];
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  displayItems()
});

 

function displayItems(){

	connection.query('SELECT * from products', function (error, res) {
		if (error) throw error;
		// for(var i = 0;i<res.length; i++) {
		// // 	console.log(res[i].item_id + " | " +res[i].product_name+ " | " +
		// // 	res[i].department_name + " | " + res[i].price+ " | " + res[i]. stock_quantity)
		// // }

		console.log(columnify(res, { columns: ['item_id', 'product_name', 'department_name', 'price', 'stock_quantity'] }));
		message();
		// make array
		for (var i = 0; i < res.length; i++) {
             xarray.push(res[i]);
             // console.log(xarray)
        }
	});
}

function message(){
	inquirer.prompt(
		{
		name : "Id",
		type : "input",	
		message :"What is the ID of the product you would like to buy?"
		}
	).then(function(answer) {

		var order = xarray[answer.Id - 1];
		if(order.stock_quantity > 0) {
			// console.log("test")
			inquirer.prompt(
				
			   {
			   	name : "quantity",
				type : "input",
				message :"How many units of the product you would like to buy?",
				validate: function(value) {
          		if (isNaN(value) === false) {
            		return true;
         			 }
         			 return false;
          			}	
				}

				).then(function(answer) {
					var inventory = order.stock_quantity - answer.quantity
					if(inventory < 0){
						console.log("Insufficient quantity!, pls order something else")
					}
					else{
						console.log("your order is ready")
					};
				});
		}	
	});
};

// \++++
// I commented the below code out, because it is not complete and does not let my app run to this point
// ++++++

// var orderitem = answer.Id;
// var orderQuantity = answer.quantity;

// function customerOrder(orderitem,orderQuantity){


// 	var totalCost = price * orderitem

     // connection.query("UPDATE bamazon SET ? WHERE ?", 
     // 	[{
     //        item_id: answer.Id
     //    }, {
     //        stock_quantity: inventory
     //    }], function(err, res) {
     //        if (err) throw err;
    
     //    });








