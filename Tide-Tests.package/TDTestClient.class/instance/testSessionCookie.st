tests
testSessionCookie
	| response |
	self useCookies: true.
	
	self connect.
	response := client response.
	self assert: response cookies isNotEmpty.