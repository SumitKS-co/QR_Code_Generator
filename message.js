import inquirer from 'inquirer';
import QRCode from 'qrcode';

inquirer
  .prompt([
    {
      message: "Type in your message: ",
      name: "msg",
    },
  ])
  .then((answers) => {
    const message = answers.msg; 

   
    const safeFilename = message.replace(/[^a-zA-Z0-9]/g, '_');

  
    QRCode.toFile(`${safeFilename}.png`, message, (err) => {
      if (err) throw err;
      console.log(`QR code saved as ${safeFilename}.png`);
    });
  });
