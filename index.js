const userInfo = require("./information.js");

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `${userInfo.name} from ${userInfo.campus}`,
    e: "Xx",
    T: "M",
  })
);
