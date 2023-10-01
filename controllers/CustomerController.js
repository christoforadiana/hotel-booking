const { customer, room, booking } = require("../models");

class CustomerController {
  static async getCustomers(req, res) {
    try {
      let resultCustomer = await customer.findAll({
        order: [["id", "asc"]],
        include: {
          model: booking,
          include: [room],
        },
      });
      res.render("../views/customer/customerPage.ejs", {
        customers: resultCustomer,
      });
      // res.json(resultCustomer);
    } catch (err) {
      res.json(err);
    }
  }

  static async getDetailCustomer(req, res) {
    try {
      const id = +req.params.customerId;
      let resultCustomer = await customer.findByPk(id, {
        order: [["id", "asc"]],
        include: {
          model: booking,
          include: [room],
        },
      });
      res.render("../views/customer/detailCustomerPage.ejs", {
        customer: resultCustomer,
      });
      // res.json(resultCustomer);
    } catch (err) {
      res.json(err);
    }
  }

  static async addCustomer(req, res) {
    try {
      const { name, nik, email, password, address } = req.body;
      let resultCustomer = await customer.create({
        name,
        nik,
        email,
        password,
        address,
      });
      res.redirect("/customers");
      // res.json(resultCustomer);
    } catch (err) {
      res.json(err);
    }
  }

  static async addCustomerPage(req, res) {
    res.render("../views/customer/addCustomerPage.ejs");
  }

  static async deleteCustomer(req, res) {
    try {
      const id = +req.params.customerId;
      let resultCustomer = await customer.destroy({ where: { id } });
      res.redirect("/customers");
      // resultCustomer === 1
      //   ? res.json({ message: `Customer with id ${id} deleted successfully!` })
      //   : res.json({ message: `Couldn't delete customer with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateCustomer(req, res) {
    try {
      const id = +req.params.customerId;
      const { name, nik, email, password, address } = req.body;
      let resultCustomer = await customer.update(
        { name, nik, email, password, address },
        { where: { id } }
      );
      res.redirect("/customers");
      // resultCustomer[0] === 1
      //   ? res.json({ message: `Customer with id ${id} updated successfully!` })
      //   : res.json({ message: `Couldn't update customer with id ${id}.` });
    } catch (err) {
      res.json(err);
    }
  }

  static async updateCustomerPage(req, res) {
    const id = +req.params.customerId;
    let resultCustomer = await customer.findAll({
      where: { id },
    });
    res.render("../views/customer/updateCustomerPage.ejs", {
      customer: resultCustomer[0],
    });
  }
}

module.exports = CustomerController;
