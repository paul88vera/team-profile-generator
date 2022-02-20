const Engineer = require("../lib/Engineer");

test("create an Engineer", () => {
  expect.arrayContaining([expect.any(Object)]);
});

test("get Engineer properties", () => {
  const engineer = new Engineer("Jess");

  expect(engineer.name);
  expect(engineer.id);
  expect(engineer.email);
  expect(engineer.role);
  expect(engineer.github);
});
