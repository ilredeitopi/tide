utils
connect

	^ client
		path: self class path;
		contentReader: [ :entity | Json readFrom: entity readStream ];
		ifFail: [ :e | self assert: false description: e messageText ];
		get