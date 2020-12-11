class Api::SessionsController < ApplicationController
	def create
		@confidant =
			Confidant.find_by_credentials(
				params[:confidant][:username],
				params[:confidant][:password]
			)
		if @confidant
			login(@confidant)
			@flash = generate_flash('Signed in!', 'success')
			render 'api/confidants/show'
      else
         #! @flash = generate_flash('Error', 'failure')
         #! render 'api/errors/show', status: 422
         render json: ['Invalid username or password.'], status: 422
		end
	end

	def destroy
		if current_confidant
			logout
		else
			render json: ['There was no one signed in!'], status: 404
		end
	end

	# private

	# def login_params
	#     params.require(:confidant).permit(:username, :password)
	# end
end
