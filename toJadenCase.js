// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

function toJadenCase(str) {
    var tabText = str.split(" ");
    var zmieniony = tabText.map(el => el[0] = el[0].toUpperCase())

    
    var podText = [];

    tabText.forEach((element, index) => podText[index] = Array.from(element));
    podText.forEach((element, index) => element[0] = zmieniony[index]);


    podText.forEach((element, index) => tabText[index] = element.join(""));

    console.log(tabText.join(" "));

}

toJadenCase("How can mirrors be real if our eyes aren't real");