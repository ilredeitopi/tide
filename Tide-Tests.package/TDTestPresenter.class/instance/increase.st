actions
increase
	<action>
	"self halt."
	counter := counter + 1.
	self server log: 'increased counter: ', counter printString