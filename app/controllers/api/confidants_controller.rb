class Api::ConfidantsController < ApplicationController
	before_action :require_login, except: %i[new create]
	skip_before_action :verify_authenticity_token

	def show
		@confidant = Confidant.find(params[:id])
	end

	def create
		@confidant = Confidant.new(confidant_params)
		if @confidant.save
			login(@confidant)
			@flash = success_flash("Account created.")
			render :show
      else
         @flash = failure_flash("Invalid username or email.")
			render json: {flash: @flash}, status: 401
		end
	end

	def destroy
		@confidant = Confidant.find(params[:id])
		if @confidant == current_confidant
			logout
			@flash = success_flash("Account terminated.")
			@confidant.destroy
      else
         @flash = failure_flash("Could not terminate account.")
			render json: {flash: @flash}, status: 422
		end
	end

	def update
		@confidant = Confidant.find(params[:id])
		if @confidant == current_confidant
			# if (params[:password] &&
			#     params[:new_password] &&
			#     @confidant.is_password?(params[:password]))
			# # )
			#     @confidant.update(
			#         username: params[:username],
			#         email: params[:email],
			#         location_id: params[:location_id],
			#         password_digest: BCrypt::Password.create(params[:new_password])
			#     )

			# else
			# end
			@confidant.update(confidant_params)
			@flash = success_flash("Account updated.")
			render :show
      else
         @flash = failure_flash("Confidant could not be updated.")
			render json: {flash: @flash},
			       status: 422
		end
	end

	private

	def confidant_params
		params.require(:confidant).permit(
			:username,
			:password,
			:email,
			:location_id,
			:avatar_id
		)
	end
end
