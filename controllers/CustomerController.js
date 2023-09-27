const { customer } = require("../models");

class CustomerController {
  static async getCustomers(req, res) {
    try {
      let customers = await customer.findAll();
      res.json(customers);
    } catch (err) {
      res.json(err);
    }
  }

  static async addCustomer(req, res) {
    try {
      const { name, nik, email, address } = req.body;
      let resultCustomer = await customer.create({
        name,
        nik,
        email,
        address
      });
      res.json(resultCustomer);
      // res.redirect("/customers");
    } catch (err) {
      res.json(err);
    }
  }

  static async deleteCustomer(req, res) {
    try {
      const id = +req.params.customerId;
      let resultCustomer = await customer.destroy({ where: { id } });
      // let resultFruit = await fruit.destroy({ where: { brandId: id } });
      // res.redirect("/customers");
      resultCustomer === 1
        ? res.json({ message: `Customer with id ${id} deleted successfully!` })
        : res.json({ message: `Couldn't delete customer with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateCustomer(req, res) {
    try {
      const id = +req.params.customerId;
      const { name, nik, email, address } = req.body;
      let resultCustomer = await customer.update(
        { name, nik, email, address },
        { where: { id } }
      );
      // res.redirect("/customers");
      resultCustomer[0] === 1
        ? res.json({ message: `Customer with id ${id} updated successfully!` })
        : res.json({ message: `Couldn't update customer with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }
}

module.exports = CustomerController;
