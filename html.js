function Html(message){
    return(` 
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Congratulations!</title>
                <style>
                    /* Inline CSS for styling */
                    .out {
                        font-family: Arial, sans-serif;
                        background-color: #000000;
                        padding: 10px;
                    }
                    .main{
                        text-align: center;
                    }
                    .logo {
                        width: 100px;
                        height: 100px;
                        text-align: center;
                    }
                    .congratulations {
                        font-size: 22px;
                        margin-top: 20px;
                        color: #ffffff;
                        text-align: center;
                    }
                    .sizecongratutaions{
                        font-size: 15px;
                    }
                    .otp {
                        font-size: 24px;
                        font-weight: bold;
                        margin-top: 10px;
                        color: #ffffff;
                        text-align: center;
                    }
                    
                    .website-link {
                        margin-top: 20px;
                        text-decoration: underline;
                        color: #4CAF50;
                        text-align: center;
                    }
                    .thank-you {
                        font-size: 14px;
                        margin-top: 20px;
                        color: #ffffff;
                        background-color: #1b1b1b;
                        padding: 15px;
                        margin: 30px;
                    }
                    .tagline {
                        color: #ffffff;
                        margin-top: 20px;
                    }

                    .otp-image {
                        width: 300px;
                    }
                </style>
            </head>
            <body>
            <div class="out">
                <!-- Logo in SVG format -->
                <div class="main">
                <img src="https://cdn.discordapp.com/attachments/888075387228278817/1172529328395919443/Gdsc.png" alt="text" width="100" border="0">
                <br>
                <img src="https://cdn.discordapp.com/attachments/888075387228278817/1175464397456552078/gachbec.png" alt="text" border="0" class="otp-image">
            
                <br>
                <br>
                <!-- Congratulations message -->
                <div class="congratulations"><b>Reminder !!! </b></div>
                <div class="congratulations sizecongratutaions">${message}</div>

                <br>
            
                <!-- Link to your website -->
                <br><br>
                <a class="website-link" style="color: #4CAF50;" href="https://gdsc-jiit128.tech/"><b>Visit Our Website</b></a>
                </div>
            
                <!-- Thank you message -->
                <div class="thank-you">Act on this reminder ASAP, Team GDSC<br><hr><br>@LEADS<br>GDSC JIIT-128<br>dscjiit128@gmail.com</div>
            </div>
            </body>
        </html>
        `
    )
}

module.exports = Html;