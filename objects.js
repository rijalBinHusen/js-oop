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

function Admin(...args) {
  User.apply(this, args);
  this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
  users = users.filter((u) => u.name != user.name);
};

var userOne = new User("rijal", "rijal@husen.com");
var userTwo = new User("Ibin husen", "ibin@husen.com");
var admin = new Admin("admin", "admin@admin.com");

var users = [userOne, userTwo, admin];

console.log(admin);
