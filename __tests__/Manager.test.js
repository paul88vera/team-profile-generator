const Manager = require("../lib/Manager");

test("creates a Manager", () => {
  expect.arrayContaining([expect.any(Object)]);
});

test("get Manager properties", () => {
  const manager = new Manager("Paul");

  expect(manager.name);
  expect(manager.id);
  expect(manager.email);
  expect(manager.role);
  expect(manager.officeNumber);
});
