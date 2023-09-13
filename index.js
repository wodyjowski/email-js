import nodemailer from 'nodemailer';


console.log("Sending email...");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
        user: "xxx",
        pass: "yyy",
    },
});

const info = await transporter.sendMail({
    sender: "",
    from: '',
    to: "", // list of receivers
    subject: "GORĄCE KOBIET W TWOJEJ OKOLICY 👅👅👅", // Subject line
    html: `<h1>NIE CZEKAJ, NAPISZ</h1>`, // html body
    date: 'Fri, 31 Dec 2006 23:00:00 +0000'
});

console.log('Email info:', info);

console.log("Email sent.");
