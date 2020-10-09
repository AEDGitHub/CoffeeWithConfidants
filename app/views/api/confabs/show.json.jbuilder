json.confabs do 
    json.set! @confab.id do
        json.partial! 'api/confabs/confab', confab: @confab
    end
end

json.conurbations do
    json.set! @confab.conurbation.id do
        json.partial! 'api/conurbations/conurbation', conurbation: @confab.conurbation
    end    
end

json.confidants do
    json.set! @confab.host.id do
        json.partial! 'api/confidants/confidant', confidant: @confab.host
    end
    @confab.attendees.each do |attendee|
        json.set! attendee.id do
            json.partial! 'api/confidants/confidant', confidant: attendee
        end
    end
end