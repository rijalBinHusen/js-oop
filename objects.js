function User(name, email) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, " has logged in");
  };
}

var userOne = new User("rijal", "rijal@husen.com");
var userTwo = new User("Ibin husen", "ibin@husen.com");

console.log(userOne);
userTwo.login();
