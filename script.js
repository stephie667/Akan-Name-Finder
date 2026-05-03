 function findAkanName() {
   // This alert button is officially working alert("calculating your Akan Name...");
let birthday=document.getElementById("birthday");
let genderElement=document.querySelector('input[name="gender"]:checked');
  
   // check if the user filled the form
if(!birthday.value ||!genderElement){ 
    alert("Please select both a date and a gender!"); 
    return;
}
let gender=genderElement.value;
let dateParts=birthday.value.split('-');
    
   //  Extract Year,Month,and Day(using numbers)
let year= parseInt(dateParts[0]);
let month =parseInt(dateParts[1]);
let day =parseInt(dateParts[2]);

   // Formula Variables
let CC =parseInt(year.toString().slice(0,2));
let YY =parseInt(year.toString().slice(2,4));
let MM =month;
let DD =day;
  
   //The formula
let dayOfWeek =Math.floor((((CC/4)-2*CC- 1) + ((5* YY/4))+ ((26*(MM+1) /10)) + DD) % 7);

   // Akan Name List
let maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

   // picking the names
let akanName ="";
if (gender==="male") {akanName=maleNames[dayOfWeek];} else{akanName = femaleNames[dayOfWeek];}

   // Displaying the results
document.getElementById("result").innerHTML ="Your Akan Name is <strong>"+ akanName + </strong>!;
 }

