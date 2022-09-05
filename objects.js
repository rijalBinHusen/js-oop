class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "Just logged in");
  }

  logout() {
    console.log(this.email, "Just logged out");
  }
}

var userOne = new User("rijal", "rijal@husen.com");
var userTwo = new User("Ibin husen", "ibin@husen.com");
