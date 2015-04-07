registry
unregister
	"self unregister"
	
	TDDispatcher default handlers
		detect: [ :e | e path = self path ]
		ifFound: [ :handler | TDDispatcher default unregisterHandler: handler ]