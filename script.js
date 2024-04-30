function ChangeColor() {
 var hexNumber = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  var HexCode = "";

for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * hexNumber.length);
    HexCode += hexNumber[randomIndex];
  }

  document.getElementById("hexCode").innerHTML = "#" + HexCode;
  document.getElementsByTagName("body")[0].style.background = "#" + HexCode;
}
