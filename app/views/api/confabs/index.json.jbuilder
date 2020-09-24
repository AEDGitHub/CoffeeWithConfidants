#!!grab all conflations
json.conflations do
    @confabs.each do |confab|
        confab.conflations.each do |conflation|
            json.set! conflation.id do
                json.partial! 'api/conflations/conflation', conflation: conflation
            end
        end
    end
end
#!! end

json.confabs do 
    @confabs.each do |confab|
        json.set! confab.id do
            json.partial! 'api/confabs/confab', confab: confab
            json.location_id confab.conurbation.id
        end
    end
end

json.confidants do
    @confabs.each do |confab|
        json.set! confab.host.id do
            json.partial! 'api/confidants/confidant', confidant: confab.host
        end
        #!!experimental to grab attendees as well as hosts
        confab.conflations.each do |conflation|
            json.set! conflation.attendee_id do
                json.partial! 'api/confidants/confidant', confidant: conflation.attendee
            end
        end
        #!! end of experimental
    end
end

json.conurbations do
    @confabs.each do |confab|
        json.set! confab.conurbation.id do
            json.partial! 'api/conurbations/conurbation', conurbation: confab.conurbation
        end
    end
end