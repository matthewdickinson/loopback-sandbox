module.exports = function(app, cb) {
  var Customer = app.models.Customers;
  var CustomerGroup = app.models.CustomerGroups;
  var Group = app.models.Groups;

  Customer.create([{id:1, firstname: 'Test'}, {id: 2, firstname: 'Test 2'}], function(err, customer) {
    Group.create([{id: 1, name: 'Test Group'}, {id: 2, name: 'Test Group 2'}, {id: 3, name: 'Test Group 3'}], function(err, group) {
      CustomerGroup.create([
		{id: 1, customerId: customer[0].id, groupId: group[0].id},
		{id: 2, customerId: customer[1].id, groupId: group[0].id},
		{id: 3, customerId: customer[1].id, groupId: group[2].id}
	],
          function(err, customerGroup) {
        console.log(customer);
        console.log(group);
        console.log(customerGroup);
        cb();
      });
    });
  });
};
