/*
package com.revature.event;

import java.util.UUID;

import org.hibernate.cfg.annotations.MapBinder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

@Component
public class EmailListener {

	@Autowired
	private AccountRegister accountRegister;
	
	@Autowired
	private MessageSource messages;
	
//	@Autowired
//	private JavaMailSender mailSender;
	
	@Autowired
	private MapBinder mailSender;
*/
	/*
	@Override
	public void onApplicationEvent(OnRegistrationSuccessEvent event) {
		this.confirmRegistration(event);
		
	}
	*/
/*
	private void confirmRegistration(OnRegistrationSuccessEvent event) {
		User user = event.getUser();
		String token = UUID.randomUUID().toString();
		accountRegister.createVerificationToken(user,token);
		
		String recipient = user.getEmail();
		String subject = "Registration Confirmation";
        String url 
          = event.getAppUrl() + "/confirmRegistration?token=" + token;
        String message = messages.getMessage("message.registrationSuccessConfimationLink", null, event.getLocale());
         
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(recipient);
        email.setSubject(subject);
        email.setText(message + "http://localhost:8080" + url);
        System.out.println(url);
        mailSender.send(email);
		
	}
}
*/