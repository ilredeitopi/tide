tests
testState
	| response |

	response := self connect.
	
	self checkSuccess.
	self checkStatus: 200.
	self assert: ((response at: #state) at: #number) equals: 42.
	self assert: ((response at: #state) at: #string) equals: 'Don''t Panic'.