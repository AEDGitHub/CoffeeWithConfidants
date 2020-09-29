class Api::ConflationsController < ApplicationController

    def create
        @conflation = Conflation.new(confab_id: params[:confab_id], attendee_id: current_confidant.id)
        if @conflation.save
            @confab = @conflation.confab
            render "api/confabs/show"
        else
            render json: ["Could not create conflation!"], status: 422
        end
    end

    private

    def conflation_params
        params.require(:conflation).permit(:confab_id)
    end

end
