tests
testAction
	| response actionResponse |
	self useCookies: false.
	response := self connect.

	actionResponse := client
		path:((response at: #actions) at: #startNumber);
		post.
	self checkSuccess.
	self checkStatus: 201.
	
	self assert: actionResponse equals: 42.