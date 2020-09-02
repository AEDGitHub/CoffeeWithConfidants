class Api::ConfidantsController < ApplicationController
    before_action :require_login, except: [:new, :create]
    skip_before_action :verify_authenticity_token

    def create
        @confidant = Confidant.new(confidant_params)
        if @confidant.save
            login(@confidant)
            render :show
        else
            render json: @confidant.errors.full_messages, status: 401 
            # might not want to display full messages, can convey whether someone is on the site, might be bad for "opsec"
        end
    end

    private

    def confidant_params
        params.require(:confidant).permit(:username, :password, :email, :location_id)
    end
end
