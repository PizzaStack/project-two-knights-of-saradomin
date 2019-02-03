package security;

	/* Should prob keep all of this stored in local file or admin db..
    not gonna worry about it for now */
public class SecurityConstants {
	// Secret encryption key
    protected static final String YOUSHALLNOTPASS = "DerrickHasaMangina";
    // This is disabled for now - but in case we need expiration date
    protected static final long EXPIRATION_TIME = 432_000_000; // 5 days
    // For json web token
    protected static final String TOKEN_PREFIX = "Bearer ";
    // For Request Header
    protected static final String HEADER_STRING = "Authorization";
    // Not important for now
    protected static final String SIGN_UP_URL = "/";
}