running
setUp

	TDTestPresenter register.
	useCookies := self useCookies.
	
	client := ZnClient new
		host: self class host;
		port: self class port;
		yourself