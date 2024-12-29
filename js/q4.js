var fly = confirm("Do you fly?  ");
if (!fly) {
    var undersea = confirm("Do you live undersea?  ");
    if (undersea) {
        var wild = confirm("Aro you Wild?  ");
        if (wild)
            document.writeln("<img src='./photos/shark.jpeg' alt='shark'> <br> shark");
        else
            document.writeln("<img src='./photos/dilphin.jpeg' alt='shark'> <br> dilphin");
    }
    else {
        var wild = confirm("Aro you Wild?  ");
        if (wild)
            document.writeln("<img src='./photos/lion.jpeg' alt='shark'> <br> lion");
        else
            document.writeln("<img src='./photos/cat.jpeg' alt='shark'> <br> cat");
    }
}
else {
    var wild = confirm("Aro you Wild?  ");
    if (wild)
        document.writeln("<img src='./photos/eagle.jpeg' alt='shark'> <br> Eagle");
    else
        document.writeln("<img src='./photos/parrot.jpeg' alt='shark'> <br> Parrot");
}