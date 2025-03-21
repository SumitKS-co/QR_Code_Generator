import inquirer from 'inquirer';
import QRCode from 'qrcode';

inquirer
  .prompt([
    {message:"Type in you URL: ",
        name:"URL",
    },
  ])
  .then((answers) => {
    const link = answers.URL;
    const cleanlink = link.replace(/[^a-zA-Z0-9]/g, '_');
    QRCode.toFile(`${cleanlink}.png`,link, (err) => {
        if (err) throw err;
        console.log(`QR code saved as ${cleanlink}.png`);
    });
  });