const Employee = require('../models/employee');

// Define the methods for use them in the routes
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

/* GET all employees. 
router.get('/employees', (req, res) => {
	Employee.find({}, (err, employees) => {
		if (err) res.status(500).send(error)

		res.status(200).json(employees);
	});
});*/

employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        lastname: req.body.lastname,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    res.json({status: 'Employee created'});
};

/** Create a employee.
router.post('/employees', (req, res) => {
	let employee = new Employee({
		name: req.body.name,
		lastName: req.body.lastName,
		age: req.body.age
	});
	employee.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'Employee created successfully'
		});
	});
});
 */

employeeCtrl.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

/* GET one employees. 
router.get('/employees/:id', (req, res) => {
	Employee.findById(req.params.id, (err, employees) => {
		if (err) res.status(500).send(error)

		res.status(200).json(employees);
	});
});*/

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        lastname: req.body.lastname,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;