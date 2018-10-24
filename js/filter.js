function filterSelection(c) {
    var x = document.getElementsByClassName("grid-item");
    for(var i = 0; i < x.length; i++) {
        if (c === "all" || x[i].className.indexOf(c) > -1) {
            x[i].style.display = "inline-block";
            console.log(x[i].className)
        } else {
            x[i].style.display = "none";
        }
    }
}