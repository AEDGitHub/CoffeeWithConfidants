class Api::SessionsController < ApplicationController

    def create
        @confidant = Confidant.find_by_credentials(
            params[:confidant][:username],
            params[:confidant][:password]
        )
        if @confidant
            login(@confidant)
            render "api/confidants/show"
        else
            render json: ["That username and password combination could not be found. Please try again!"], status: 422
        end
    end

    def destroy
        if current_confidant
            logout
            render json: {}
            # render "api/confidants/show"
        else
            render json: ["There was no one signed in! You've got to log in to logout!"], status: 404
        end
    end

    # private

    # def login_params
    #     params.require(:confidant).permit(:username, :password)
    # end
end
