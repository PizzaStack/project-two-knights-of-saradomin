package com.revature.controller;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin(value="*", origins="*")
public class EmailController {
    
    @Autowired
    private JavaMailSender sender;

    @RequestMapping("/registrationEmail")
    @ResponseBody
    String sendRegistrationEmail() {
        try {
            sendEmail();
            return "Email Sent!";
        }catch(Exception ex) {
            return "Error in sending email: "+ex;
        }
    }

    public void sendEmail() throws Exception {
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        
        helper.setTo("cmeyerwps@gmail.com");
        helper.setText("How are you?");
        helper.setSubject("Hi");
        
        sender.send(message);
        System.out.println("Email send!");
    }
}