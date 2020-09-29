json.confabs do 
    json.set! @confab.id do
        json.partial! 'api/confabs/confab', confab: @confab
    end
end