/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
  
    {"message": "Enter your URL",
    "name": "URL"
  }

  ])
  .then((answers) => {
   var url=answers.URL;
   var qr_image=qr.image(url);
   qr_image.pipe(fs.createWriteStream("qr_image.png"));
   fs.writeFile("Qr.txt",url,(err)=>
{
if(err) throw err
console.log("Your Qr has been created and the url is been saved in the .txt file")
});
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });