const { Router } = require("express");
const customerRoute = Router();
const { CustomerController } = require("../controllers");

customerRoute.get("/", CustomerController.getCustomers);
customerRoute.post("/add", CustomerController.addCustomer);
// customerRoute.get("/add", CustomerController.addBrandPage);
customerRoute.get("/delete/:customerId", CustomerController.deleteCustomer);
customerRoute.post("/update/:customerId", CustomerController.updateCustomer);
// customerRoute.get("/update/:customerId", CustomerController.updateBrandPage);

module.exports = customerRoute;
