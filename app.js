const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "antiquewhite", "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkorchid", "darkred", "darkseagreen", "darksalmon", "darkslateblue", "darkolivegreen", "darkorange", "darkturquoise", "dimgray", "firebrick", "floralwhite", "forestgreen", "dodgerblue", "gainsboro", "ghostwhite", "lavender", "lavenderblush", "lightgreen", "lightgrey", "lightgoldenrodyellow", "lightcyan", "lightpink", "lightcoral", "lightblue", "yellow", "yellowgreen", "olive", "olivedrab", "palegoldenrod", "paleturquoise"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
// Gets a Random Number Between 0 & 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}