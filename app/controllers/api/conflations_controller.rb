class Api::ConflationsController < ApplicationController

    def create
        @conflation = Conflation.new(confab_id: params[:confab_id], attendee_id: current_confidant.id)
        if @conflation.save
            @confab = @conflation.confab
            render "api/confabs/show"
        else
            render json: ["Could not join confab!"], status: 422
        end
    end

    def destroy
        @conflation = Conflation.find_by(confab_id: params[:confab_id], attendee_id: params[:id])
        if @conflation
            @confab = Confab.find(params[:confab_id])
            @conflation.destroy
            render "api/confabs/show"
        else
            render json: ["Could not unjoin confab!"], status: 422
        end
    end

end
