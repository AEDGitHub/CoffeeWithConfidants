json.entities do
	json.conurbations do
		@conurbations.each do |conurbation|
			json.set! conurbation.id do
				json.partial! 'api/conurbations/conurbation',
				              conurbation: conurbation
			end
		end
	end
end
