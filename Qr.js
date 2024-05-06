/* 
( Guide for running this script file )
--
1. install and use the inquirer npm package .
2. install the qr-image npm package.
3. install fs node module
--
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
