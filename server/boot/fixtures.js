module.exports = function(app, cb) {
  var Customer = app.models.Customers;
  var CustomerGroup = app.models.CustomerGroups;
  var Group = app.models.Groups;

  Customer.create({id:1, firstname: 'Test'}, function(err, customer) {
    Group.create({id: 1, name: 'Test Group'}, function(err, group) {
      CustomerGroup.create({id: 1, customerId: customer.id, groupId: group.id},
          function(err, customerGroup) {
        console.log(customer, group, customerGroup);
        cb();
      });
    });
  });
};
