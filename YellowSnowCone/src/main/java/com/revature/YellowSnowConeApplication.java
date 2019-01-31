package com.revature;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class YellowSnowConeApplication {

	public static void main(String[] args) {
//		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
//		context.register(WebMvcConfig.class);
//		context.refresh();
		
		SpringApplication.run(YellowSnowConeApplication.class, args);
		
//		SpringApplication.exit(context);
	}
}