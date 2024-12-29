
// var letterValid = /^[a-zA-Z]+$/;
// var numValid = /^(011|012|010)\d{8}$/;
var mailvalid = /^[\w|.]+@[a-z]{2,8}\.[a-z]{2,5}$/;
// var mailvalid = /^\w{5}@[a-z]{2,8}\.[a-z]{2,5}$/;


// var Name = prompt("Enter your name");
// while (!Name.match(letterValid)) {
//     var Name = prompt("Enter your name");
// }
// console.log(Name.match(letterValid));




// var phone = prompt("Enter your phone num");
// while (!phone.match(numValid)) {
//     var phone = prompt("Enter your phone num");
// }
// console.log(phone.match(numValid));


var mail = prompt("Enter your mail");
while (!mail.match(mailvalid)) {
    var mail = prompt("Enter your mail");
}
console.log(mail.match(mailvalid));
