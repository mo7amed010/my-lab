document.writeln("<h1>User Info</h1>");
document.writeln("<br/>")
var userName = prompt("Enter Your Name");
var letterRegex = /^[A-Za-z]+$/;
var numRegex = /^\d{1,8}$/
var mobileRegex = /^(010|011|012)\d{8}$/
var emailRegex = /^[a-zA-Z0-9]{3}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

while (!letterRegex.test(userName)) {
    var userName = prompt("Enter Your Name");
}
var phoneNumber = prompt("Enter Your phone");
while (!numRegex.test(phoneNumber)) {
    var phoneNumber = prompt("Enter Your Phone");
}
var mobileNumber = prompt("Enter Your Mobile number");
while (!mobileRegex.test(mobileNumber)) {
    var mobileNumber = prompt("Enter Your mobile");
}
var email = prompt("Enter Your email");
while (!emailRegex.test(email)) {
    var email = prompt("Enter Your email");
}

var color = prompt("Enter Color");

document.writeln("<span>Welcome dear gust</span>" + " " + "<span style='color:" + color + ";'>" + userName + "</span>");
document.writeln("<br/>")
document.writeln("<span>your telphone is</span>" + " " + "<span style='color:" + color + ";'>" + phoneNumber + "</span>");
document.writeln("<br/>")
document.writeln("<span>your mobile is </span>" + " " + "<span style='color:" + color + ";'>" + mobileNumber + "</span>");
document.writeln("<br/>")
document.writeln("<span>your email is</span>" + " " + "<span style='color:" + color + ";'>" + email + "</span>");