class Api::SessionsController < ApplicationController
  def create
    @confidant =
      Confidant.find_by_credentials(
        params[:confidant][:username],
        params[:confidant][:password]
      )
    if @confidant
		login(@confidant)
      @flash = success_flash('Signed in!')
      render 'api/confidants/show'
    else
      @flash = failure_flash('Invalid username or password.')
      render json: { flash: @flash }, status: 422
    end
  end

  def destroy
    if current_confidant
      logout
    else
      @flash = failure_flash('There was no one signed in!')
      render json: { flash: @flash }, status: 404
    end
  end

  # private

  # def login_params
  #     params.require(:confidant).permit(:username, :password)
  # end
end
