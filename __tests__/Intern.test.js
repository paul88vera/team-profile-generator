const Intern = require("../lib/Intern");

test("create an Intern", () => {
  expect.arrayContaining([expect.any(Object)]);
});

test("get Intern properties", () => {
  const intern = new Intern("Elmer");

  expect(intern.name);
  expect(intern.id);
  expect(intern.email);
  expect(intern.role);
  expect(intern.school);
});
