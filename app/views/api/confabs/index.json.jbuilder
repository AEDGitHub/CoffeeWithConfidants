json.confabs do 
    @confabs.each do |confab|
        json.set! confab.id do
            json.partial! 'api/confabs/confab', confab: confab
        end
    end
end

json.confidants do
    @confabs.each do |confab|
        json.set! confab.host.id do
            json.partial! 'api/confidants/confidant', confidant: confab.host
        end
    end
end

json.conurbations do
    @confabs.each do |confab|
        json.set! confab.conurbation.id do
            json.partial! 'api/conurbations/conurbation', conurbation: confab.conurbation
        end
    end
end