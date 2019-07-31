const express = require('express');
('use strict');
const nodemailer = require('nodemailer');

require('dotenv').config();

module.exports = {
  sendMail: function(req, res) {
    const IEPObject = req.body;
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
        <h3>IEP Info</h3>
        <ul>
        <li>IEP Name: ${IEPObject.IEPname}</li>
        <li>IEP Address: ${IEPObject.IEPaddressField}</li>
        <li>Chassis Unit Number: ${IEPObject.chassis.unitNumber}</li>
        <li>Chassis License: ${IEPObject.chassis.license}</li>
        <li>Chassis License State: ${IEPObject.chassis.licensestate}</li>
        <li>Chassis License Experation Date: ${
          IEPObject.chassis.licenseExp
        }</li>
        <li>Unit Type: ${IEPObject.chassis.unitType}</li>
        <li>VIN: ${IEPObject.chassis.serialNumber}</li>
        </ul>
        <h4>Inspection Details:</h4>
        <ul>
         <li>Brake Good? ${IEPObject.inspection.brakesCheckGood}</li>
         <li>Brake Failure Details: ${IEPObject.inspection.brakeComment}</li>
         <li>Brake System Failure Pics: ${IEPObject.brakePic}</li>
         </ul>
         <ul>
         <li>Air System Good? ${IEPObject.inspection.airSysCheckGood}</li>
         <li>Air System Failure Details: ${
           IEPObject.inspection.airSysComment
         }</li>
         <li>Air System Failure Pics: ${IEPObject.airSysPic}</li>
         </ul>
         <ul>
         <li>Suspension System Good? ${
           IEPObject.inspection.suspensionCheckGood
         } </li>
         <li>Suspension Failure Details: ${
           IEPObject.inspection.suspensionComment
         }</li>
         <li>Suspension System Failure Pics: ${IEPObject.suspensionPic}</li>
         </ul>
         <ul>
         <li>Coupling System Good? ${
           IEPObject.inspection.couplingCheckGood
         }</li>
         <li>Coupling Failure Details: ${
           IEPObject.inspection.couplingComment
         }</li>
         <li>Coupling System Failure Pics: ${IEPObject.couplingPic}</li>
         </ul>
         <ul>
         <li>Electrical System Good? ${
           IEPObject.inspection.electricalCheckGood
         }</li>
         <li>Electrical Failure Details: ${
           IEPObject.inspection.electricalComment
         }</li>
         <li>Electrical System Failure Pics: ${IEPObject.electricalPic}</li>
         </ul>
         <ul>
         <li>Frame Good? ${IEPObject.inspection.frameCheckGood}</li>
         <li>Frame Failure Details: ${IEPObject.inspection.frameComment}</li>
         <li>Frame Failure Pics: ${IEPObject.framePic}</li>
         </ul>
         <ul>
         <li>Wheel Condition Good? ${IEPObject.inspection.wheelsCheckGood}</li>
         <li>Wheel Failure Details: ${IEPObject.inspection.wheelsComment}</li>
         <li>Wheel Failure Pics: ${IEPObject.wheelPic}</li>
         </ul>
         <ul>
         <li>Chassis Lubrication Good? ${
           IEPObject.inspection.lubricationCheckGood
         }</li>
         <li>Chassis Lubrication Failure Details: ${
           IEPObject.inspection.lubricationComment
         }
         <li>Chassis Lubrication Failure Pics: ${IEPObject.lubricationPic}</li>
         </ul>
         <ul>
         <li>Documentation Good? ${
           IEPObject.inspection.documentationCheckGood
         }</li>
          <li>Documentation Failure Details: ${
            IEPObject.inspection.documentationComment
          }</li>
          <li>Documentation Failure Pics: ${IEPObject.documentationPic}</li>
          </ul>
          <ul>
          <li>Tires Conditions Good? ${IEPObject.inspection.tiresCheckGood}</li>
          <li>Tires Failure Details: ${IEPObject.inspection.tiresComment}</li>
          <li>Tires Failure Pics: ${IEPObject.tiresPic}</li>
          </ul>`;

      let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com',
        port: '465',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
        secure: true
      });

      let mailOptions = {
        from: 'elitechassis@dorseytire.com',
        to: `${IEPObject.emailAddress}`,
        replyTo: 'elitechassis@dorseytire.com',
        subject: `Status Report for Chassis#${IEPObject.chassis.unitNumber}`,
        text: 'Test Email Again',
        // IEPObject,
        html: htmlEmail
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log(err);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        res.send(nodemailer.getTestMessageUrl(info));
      });
    });
  }
};
