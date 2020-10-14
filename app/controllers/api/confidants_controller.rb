class Api::ConfidantsController < ApplicationController
    before_action :require_login, except: [:new, :create]
    skip_before_action :verify_authenticity_token

    def show
        @confidant = Confidant.find(params[:id])
    end

    def create
        @confidant = Confidant.new(confidant_params)
        if @confidant.save
            login(@confidant)
            render :show
        else
            render json: ["Invalid username or email."], status: 401
        end
    end

    def destroy
        @dead_confidant = Confidant.find(params[:id])
        if @dead_confidant == current_confidant
            logout
            @dead_confidant.destroy
        else
            render json: ["Sorry, no confidant to destroy!"], status: 422
        end
    end

    def update
        @confidant = Confidant.find(params[:id])
        if @confidant == current_confidant
            @confidant.update(confidant_params)
            render :show
        else
            render json: ["Sorry, I couldn't update this confidant!"], status: 422
        end
    end

    private

    def confidant_params
        params.require(:confidant).permit(:username, :password, :email, :location_id)
    end
end
