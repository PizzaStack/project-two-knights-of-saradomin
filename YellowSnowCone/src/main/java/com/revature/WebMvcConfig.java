package com.revature;

import java.io.IOException;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

/* Remember to uncomment below if wanna try using this again... */
//@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	private String resourceHandler = "/**/*";
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    	registry.addResourceHandler(resourceHandler)
	        .addResourceLocations("classpath:/static/")
	        .resourceChain(true)
	        .addResolver(new PathResourceResolver() {
	            @Override
	            protected Resource getResource(String resourcePath,
	                Resource location) throws IOException {
	                Resource requestedResource = location.createRelative(resourcePath);
	                return requestedResource.exists() && requestedResource.isReadable() ? requestedResource
	                : new ClassPathResource("/static/index.html");
	            }
        });
    }