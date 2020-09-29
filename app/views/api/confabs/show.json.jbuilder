json.confabs do 
    json.set! @confab.id do
        json.partial! 'api/confabs/confab', confab: @confab
        json.location_id @confab.host.location_id.to_i
    end
end