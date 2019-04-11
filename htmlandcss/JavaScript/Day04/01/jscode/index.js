
var colors = ["red", "green", "blue", "white", "purple"];
console.log(colors[0]);
console.log(colors[1]);

colors[4] = "ultraviolet";
console.log(colors[4]);

colors[3] = "fourthcolor";
console.log(colors[3]);

colors.push ("yellow");
console.log(colors);

console.log(colors.length);

colors.pop()
console.log(colors.length);


colors.unshift("beige");
console.log(colors);


for (i=0; i < colors.length; i++) {
  console.log(i, colors[i]);
}

colors.push ("pink");

var lastCol = colors.length -1;
var lastColor = colors[lastCol];
console.log(lastColor);

console.log(colors);
console.log(lastColor);

var fourthcolor = colors[5];
console.log(colors[5]);



