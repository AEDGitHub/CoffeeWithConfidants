class Api::ConflationsController < ApplicationController

    def create
        @conflation = Conflation.create!(conflation_params)
    end

    private

    def conflation_params
        params.require(:conflation).permit(:confab_id, :attendee_id)
    end

end
