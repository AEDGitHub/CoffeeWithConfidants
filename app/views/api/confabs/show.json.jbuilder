json.confabs do 
    json.set! @confab.id do
        json.partial! 'api/confabs/confab', confab: @confab
    end
end

if @conflation_send
    json.conflations do
        json.set! @conflation.id do
            json.partial! 'api/conflations/conflation', conflation: @conflation
        end
    end
end