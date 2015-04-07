tests
testSessionCookiePersistence
	| response sessionId |

	self useCookies: true.
	
	response := self connect.
	self assert: client response cookies isNotEmpty.
	sessionId := (client response cookies detect: [ :e | e name = TDDispatcher default sessionCookie ]) value.
	
	client
		path:((response at: #actions) at: #increase);
		post.
	self assert: client response cookies isNotEmpty.
	self assert: sessionId equals: (client response cookies detect: [ :e | e name = TDDispatcher default sessionCookie ]) value