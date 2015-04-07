tests
testConnect

	self connect.
	self checkSuccess.
	self checkStatus: 200.
	self assert: true