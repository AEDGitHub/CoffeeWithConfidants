json.entities do
	json.confidants do
		json.set! @confidant.id do
			json.partial! 'api/confidants/confidant', confidant: @confidant
		end
	end

	#associations

	json.confabs do
		@confidant.confabs_hosted.each do |confab|
			json.set! confab.id do
				json.partial! 'api/confabs/confab', confab: confab
			end
		end
		@confidant.confabs_rsvpd.each do |confab|
			json.set! confab.id do
				json.partial! 'api/confabs/confab', confab: confab
			end
		end
	end

	json.conurbations do
		json.set! @confidant.conurbation.id do
			json.partial! 'api/conurbations/conurbation',
			              conurbation: @confidant.conurbation
		end
	end
end

@flash ? json.flash { json.partial! 'api/flash/flash', flash: @flash } : :null
