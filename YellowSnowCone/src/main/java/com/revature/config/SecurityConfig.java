/*
package com.revature.config;

import org.springframework.context.annotation.Configuration;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	// add reference to security data source
	@Autowired
	private IUserService userService;
	
	@Autowired
	private DataSource securityDS;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
		// use jdbc authentication
		auth.jdbcAuthentication().dataSource(securityDS);
	}
	

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.authorizeRequests()
				// .anyRequest().authenticated()
				.antMatchers("/").hasRole("CANDIDATE")
				.antMatchers("/recruiters/**").hasRole("RECRUITER")
				.antMatchers("/admins/**").hasRole("ADMIN")
				.and().formLogin().loginPage("/login")
				.loginProcessingUrl("/authenticateLogin").permitAll().and().logout().permitAll()
				.and()
				.exceptionHandling().accessDeniedPage("/access-denied");
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(11);
	}
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
		auth.setUserDetailsService(userService); //set the custom user details service
		auth.setPasswordEncoder(passwordEncoder()); //set the password encoder - bcrypt
		auth.setHideUserNotFoundExceptions(false);
		return auth;
	}

}
*/