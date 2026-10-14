const Employee = require("../models/Employee");
const generateToken = require("../utils/generateToken");

const registerEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const employeeExists = await Employee.findOne({ email });
    if (employeeExists) {
      return res.status(400).json({ message: "Employee already exists with this email" });
    }

    const employee = await Employee.create({ name, email, password });

    res.status(201).json({
      _id: employee._id,
      name: employee.name,
      email: employee.email,
      token: generateToken(employee._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await Employee.findOne({ email });

    if (employee && (await employee.matchPassword(password))) {
      res.json({
        _id: employee._id,
        name: employee.name,
        email: employee.email,
        token: generateToken(employee._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerEmployee, loginEmployee };
