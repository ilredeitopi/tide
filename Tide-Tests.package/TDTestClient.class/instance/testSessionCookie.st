tests
testSessionCookie

	self useCookies: true.
	
	self connect.
	self assert: client response cookies isNotEmpty.