package com.revature.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.TemplateEngine;

import com.revature.entity.Users;
import com.revature.service.MailContentBuilder;

@Controller
@CrossOrigin(value="*", origins="*")
public class EmailController {
    
    private TemplateEngine templateEngine;
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    public MailContentBuilder mailContentBuilder;// = new MailContextBuilder(templateEngine);
    
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
    
    public void sendEmail(Users user) throws Exception {
    	MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            
            String name = user.getFirstname();
            String token = UUID.randomUUID().toString();
            String url = "http://localhost:8080/".concat(token);
            String content = mailContentBuilder.build(name, url);
            messageHelper.setTo("cmeyerwps@gmail.com");
            messageHelper.setSubject("YellowSnowCone - Please Verify Your Email");
            messageHelper.setText(content, true);
        };
        try {
            mailSender.send(messagePreparator);
        } catch (MailException e) {
        	e.printStackTrace();
        }
    }
    public void sendEmail() throws Exception {
    	MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            String name = "Randy";
            String token = UUID.randomUUID().toString();
            String url = "http://localhost:8080/".concat(token);
            String content = mailContentBuilder.build(name, url);
            messageHelper.setTo("cmeyerwps@gmail.com");
            messageHelper.setSubject("YellowSnowCone - Please Verify Your Email");
            messageHelper.setText(content, true);
        };
        try {
            mailSender.send(messagePreparator);
        } catch (MailException e) {
        	e.printStackTrace();
        }
    }
    
    /*
    public void sendEmail() throws Exception {
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        
        Map<String, Object> model = new HashMap<>();
        model.put("user", "qpt");
        
        // set loading location to src/main/resources
        // You may want to use a subfolder such as /templates here
        freemarkerConfig.setClassForTemplateLoading(this.getClass(), "/templates");
        
        Template template = freemarkerConfig.getTemplate("welcome.ftl");
        String text = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);
        
        helper.setTo("cmeyerwps@gmail.com");
        helper.setText(text, true);
        helper.setSubject("Please Verify Your Email");
        
        sender.send(message);
        System.out.println("Email send!");
    }
    */
}