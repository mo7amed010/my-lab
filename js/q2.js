//two

var num = Number(prompt("Enter number"));

var sum = 0;
sum += num;

while (sum < 100 && num != 0) {
    sum += num;
    num = Number(prompt("Enter number"));

}
document.writeln("total numbs = " + sum);