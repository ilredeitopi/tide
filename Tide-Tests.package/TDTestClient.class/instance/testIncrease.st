tests
testIncrease
	| response actionResponse |

	response := self connect.

	actionResponse := client
		path:((response at: #actions) at: #increase);
		post.
	self checkSuccess.
	self checkStatus: 200.
	
	self assert: client response cookies isNotEmpty.