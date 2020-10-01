json.conurbations do
    @confabs.each do |confab|
        json.set! confab.conurbation.id do
            json.partial! 'api/conurbations/conurbation', conurbation: confab.conurbation
        end
    end
end

json.confidants do
    @confabs.each do |confab|
        json.set! confab.host.id do
            json.partial! 'api/confidants/confidant', confidant: confab.host
        end
        confab.attendees.each do |attendee|
            json.set! attendee.id do
                json.partial! 'api/confidants/confidant', confidant: attendee
            end
        end
    end
end

json.confabs do 
    @confabs.each do |confab|
        json.set! confab.id do
            json.partial! 'api/confabs/confab', confab: confab
        end
    end
end

json.conflations do
    @confabs.each do |confab|
        confab.conflations.each do |conflation|
            json.set! conflation.id do
                json.partial! 'api/conflations/conflation', conflation: conflation
            end
        end
    end
end