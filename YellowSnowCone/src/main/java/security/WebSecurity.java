package security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity
@Configuration
public class WebSecurity extends WebSecurityConfigurerAdapter {
    @Autowired
	UserDetailsService userDetailsService;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    
    // Keep while not sure if autowired will work w/ these
    /* 
    public WebSecurity(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    } 
    */
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	/* This prevents default 'signup' from being necessary, and allows anonymous
    	   users to access endpoints - important since we do not define roles. */
        http.authorizeRequests().antMatchers("/**").permitAll().and().formLogin();
        
        /* Add filters to ^??? 
         * Desired behavior is simply to encrypt passwords, so prob not necessary.
        http
			.antMatchers(HttpMethod.POST, SecurityConstants.SIGN_UP_URL).permitAll()
			.anyRequest().authenticated()
			.and()
			.addFilter(new UserAuthenticationFilter(authenticationManager()))
			.addFilter(new UserAuthorizationFilter(authenticationManager()));
        */
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
   }
}