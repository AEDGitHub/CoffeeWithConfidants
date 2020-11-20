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
			@flash = generate_flash('Account created.', 'success')
			render :show
		else
			render json: ['Invalid username or email.'], status: 401
		end
	end

	def destroy
		@confidant = Confidant.find(params[:id])
		if @confidant == current_confidant
			logout
			@flash = generate_flash('Account terminated.', 'success')
			@confidant.destroy
		else
			render json: ['Sorry, no confidant to destroy!'], status: 422
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
			@flash = generate_flash('Account updated.', 'success')
			@confidant.update(confidant_params)
			# end
			render :show
		else
			render json: ["Sorry, I couldn't update this confidant!"],
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
