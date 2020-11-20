class Api::ConflationsController < ApplicationController
	def create
		@conflation =
			Conflation.new(
				confab_id: params[:confab_id], attendee_id: current_confidant.id
			)
		if @conflation.save
			@confab = @conflation.confab
			@flash = generate_flash('Confab joined!', 'success')
			render 'api/confabs/show'
		else
			render json: ['Could not join confab!'], status: 422
		end
	end

	def destroy
		@conflation =
			Conflation.find_by(
				confab_id: params[:confab_id], attendee_id: params[:id]
			)
		if @conflation
			@confab = Confab.find(params[:confab_id])
			@conflation.destroy
			@flash = generate_flash('Left confab.', 'success')
			render 'api/confabs/show'
		else
			render json: ['Could not leave confab!'], status: 422
		end
	end
end
