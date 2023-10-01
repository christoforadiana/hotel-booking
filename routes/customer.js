const { Router } = require("express");
const customerRoute = Router();
const { CustomerController } = require("../controllers");

customerRoute.get("/", CustomerController.getCustomers);
customerRoute.get("/detail/:customerId", CustomerController.getDetailCustomer);
customerRoute.post("/add", CustomerController.addCustomer);
customerRoute.get("/add", CustomerController.addCustomerPage);
customerRoute.get("/delete/:customerId", CustomerController.deleteCustomer);
customerRoute.post("/update/:customerId", CustomerController.updateCustomer);
customerRoute.get("/update/:customerId", CustomerController.updateCustomerPage);

module.exports = customerRoute;
