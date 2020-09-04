class Api::ConfidantsController < ApplicationController
    before_action :require_login, except: [:new, :create]
    skip_before_action :verify_authenticity_token

    def create
        @confidant = Confidant.new(confidant_params)
        if @confidant.save
            login(@confidant)
            render :show
        else
            render json: ["Invalid username or email."], status: 401
        end
    end

    private

    def confidant_params
        params.require(:confidant).permit(:username, :password, :email, :location_id)
    end
end
