var all_files = ["regame1.jpg", "regame3.jpg", "smile1.jpg", "smile2.jpg", "snl1.jpg", 
"snl2.jpg", "CBSL.jpg", "cad1.jpg", "ccbh1.jpg", "ccbh2.jpg", 
"htl1.jpg", "htl2.jpg", "htl3.jpg", "new1.JPG", "new2.JPG", "new3.JPG",
"new4.JPG", "new5.JPG", "new6.JPG", "new7.JPG", "new8.JPG", "new9.JPG", "new10.JPG",
"new11.JPG", "new12.jpg", "new13.jpg"]
var base_url = "images/gallery/"

all_files = shuffle(all_files);

function show_next_photo() {
    var to_display = all_files.shift();
    var slide = document.getElementsByClassName("slide-images")[0];
    if (slide.childNodes.length === 1) {
        var inject = get_next_image(to_display)
        slide.appendChild(inject)
        setTimeout(hold_photo, 1000);
    } else {
        var cur_image = slide.childNodes[1]
        var next_image = get_next_image(to_display)
        next_image.style.left = "-100%"
        slide.appendChild(next_image)
        var counter = 0
        var recursive = () => {
            cur_image.style.left = counter + "%"
            next_image.style.left = "-" + (100-counter) + "%"
            counter++;
            if(counter >= 100) {
                setTimeout(hold_photo, 1000);
                slide.removeChild(cur_image)
            } else {
                setTimeout(recursive, 10)
            }
        }
        all_files.push(to_display)
        setTimeout(recursive, 10)
    }
}

function hold_photo() {
    setTimeout(show_next_photo, 1000);
}

function get_next_image(to_display) {
    var inject = document.createElement("img")
    inject.src = base_url + to_display;
    inject.alt = ""
    inject.style = "width:100%; height:100%; position:absolute; left:0%;"
    return inject
}

show_next_photo();

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  