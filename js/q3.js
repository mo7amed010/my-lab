var num = Number(prompt("Enter number"));

if ((num % 3 == 0) && (num % 5 == 0)) {
    document.writeln("fizz buzz");
}
else if ((num % 3 == 0) && !(num % 5 == 0)) {
    document.writeln("fizz");
}
else if ((num % 5 == 0) && !(num % 3 == 0)) {
    document.writeln("buzz");
}