let birthday=document.getElementById(birthday);
let gender=document.querySelecto('input'[name="gender"]:checked');
let dateParts=birthday.value.split('-');
if (dateParts[2]>= 1 && dateParts[2]<=31) {//the date valid}
if (dateParts[1])>=1 && dateParts[1]<=12) {// month is valid} else {// month is not valid }
if (dateParts[0] >2030) {//the year is too far in the future} else {// year valid for this example}
let year= parseInt(dateParts[o]);
let month =parseInt(dateParts[1]);
let day =parseInt(dateParts[2]);
let CC =parseInt(year.toString().slice(0,2));
let YY =parseInt(year.toString().slice(2,4));
