var userOne = {
  email: "rijal@husen.com",
  name: "Rijal",
  login() {
    console.log(this.email, "Has logged in");
  },
  logout() {
    console.log(this.email, "Has logged out");
  },
};

console.log(userOne.name);
