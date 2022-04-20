function rot13(str) {
var newstrarray = "";
for (var i = 0; i < str.length; i++) {

if (str.charCodeAt(i) >= 65 && str.charCodeAt(i)+13 <= 90) {
  newstrarray += String.fromCharCode(str.charCodeAt(i)+13);
  }
    else if (str.charCodeAt(i) > 77 && str.charCodeAt(i)<=90) {
        var newchar = str.charCodeAt(i)+13 - 90 + 64;
  newstrarray += String.fromCharCode(newchar);
              }
  else {
   newstrarray = newstrarray + str[i];
    }
}
return newstrarray;
}

rot13("SERR PBQR PNZC");