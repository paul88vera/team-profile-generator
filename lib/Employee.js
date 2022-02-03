class Employee {
  constructor(team, name, id, email) {
    this.team = team;
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getTeamName() {
    return this.team;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
};

module.exports = Employee;
