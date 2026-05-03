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
let dayOfWeek =Math.abs(Math.floor(((CC/4)-2*CC- 1) + ((5* YY/4))+ ((26*(month+1) /10)) + day) % 7));
let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
