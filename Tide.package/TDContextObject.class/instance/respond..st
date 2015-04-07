request handling
respond: aResponse
	
	self dispatcher addSessionCookie: aResponse.

	TDResponseNotification new
		response: aResponse;
		signal