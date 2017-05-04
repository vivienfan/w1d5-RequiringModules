module.exports = {
  name: "name0",

  hello: function() {
    sayHello.call(this);
  }
};

function sayHello() {
  console.log("Hello,", this.name);
}