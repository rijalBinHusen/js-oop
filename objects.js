function User(name, email) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, " has logged in");
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, " has logged out");
};

var userOne = new User("rijal", "rijal@husen.com");
var userTwo = new User("Ibin husen", "ibin@husen.com");
