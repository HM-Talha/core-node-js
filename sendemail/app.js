let nodemailer = require("nodemailer");

// step 1
let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abc@gmail.com",
    pass: "123456",
  },
});

// step 2
let mailOption = {
  from: "sender@gmail.com",
  to: "receiver@gmaiul.com",
  subject: "sending email with node js",
  Text : 'email bhej raha hn'
};


// step 3
transport.sendMail(mailOption, (err, info)=>{
    if(err){
        console.log(err);
    }else{
        console.log("email gayiii"+ info.response);
    }
})
/* gmail account lo less secure krna parhay ga */