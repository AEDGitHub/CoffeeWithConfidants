class Api::ConfabsController < ApplicationController

    def index
        @conurbation = Conurbation.findElementById(params(:conurbation_id))
    end

end
