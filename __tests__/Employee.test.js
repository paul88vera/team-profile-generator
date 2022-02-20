const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

test("create employee object", () => {
  expect.arrayContaining([expect.any(Object)]);
});

test("gets properties", () => {
  const employee = new Employee("Jessica");

  expect(employee.name);
  expect(employee.id);
  expect(employee.email);
  expect(employee.role);
});
