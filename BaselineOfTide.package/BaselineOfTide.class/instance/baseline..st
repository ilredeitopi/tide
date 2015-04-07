accessing
baseline: spec
	<baseline>
	spec
		for: #pharo
		do: [ 
			spec repository: 'github://ilredeitopi/tide:master'.
			spec
				project: 'JSON'
				with: [ 
					spec
						className: 'ConfigurationOfJSON';
						repository: 'http://smalltalkhub.com/mc/PharoExtras/JSON/main' ].
			spec package: 'Tide' with: [ spec requires: #('JSON') ] ]