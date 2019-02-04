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
import com.revature.entity.VerificationToken;
import com.revature.service.MailContentBuilder;

@Controller
@CrossOrigin(value="*", origins="*")
public class EmailController {
    
    private TemplateEngine templateEngine;
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    public MailContentBuilder mailContentBuilder;
    
    public void sendEmail(Users user, VerificationToken verificationToken) throws Exception {
    	MimeMessagePreparator messagePreparator = mimeMessage -> {
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);

            String name = user.getFirstname();
            String vtoken = verificationToken.getVtoken();
            String url = "http://3.16.214.183:8888/welcomeview/".concat(String.valueOf(user.getUserid())).concat("/").concat(vtoken);
            String content = mailContentBuilder.build(name, url);
            messageHelper.setTo(user.getEmail());
            messageHelper.setSubject("YellowSnowCone - Please Verify Your Email");
            messageHelper.setText(content, true);
        };
        try {
            mailSender.send(messagePreparator);
        } catch (MailException e) {
        	e.printStackTrace();
        }
    }
}