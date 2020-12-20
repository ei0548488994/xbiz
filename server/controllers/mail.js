// const Leader = require('../Models/Leader');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
var transporter, mailOptions;
module.exports = {
    Mail: (req, res) => {
        // name:name,
        // email:email,
        // subject:subject,
        // massage:massage,
        const {contact}=req.body
        //אתחול המשתנים של שליחת המייל
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'leadersdashboard@gmail.com',
                pass: 'dashboard012',
            }
        });
        mailOptions = {
            from: 'leadersdashboard@gmail.com',
            to:contact.email,
            subject: 'הי, תודה על פניתך ניצור איתך קשר בהקדם',
            html:contact.name+" נושא פניתך:"+contact.subject
            
            ,
            // text:contact
        };
        //הפעלת הפונקציה
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
        console.log(req.params.email.email);

    }
}
