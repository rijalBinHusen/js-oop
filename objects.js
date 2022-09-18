class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "Just logged in");
    return this;
  }

  logout() {
    console.log(this.email, "Just logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, " score is now: " + this.score);
    return this;
  }
}

var userOne = new User("rijal", "rijal@husen.com");
var userTwo = new User("Ibin husen", "ibin@husen.com");

userOne.login().logout();
userTwo.logout();
