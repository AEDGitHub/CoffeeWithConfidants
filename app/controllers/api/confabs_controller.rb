class Api::ConfabsController < ApplicationController
	def index
		@confabs =
			Confab.where(start_time_in_ms: start_times_this_month(DateTime.now))
				.includes(:host, :conurbation, :conflations, :attendees)
	end

	def create
		@confab = Confab.new(confab_params)
		if (@confab.save)
			@flash = generate_flash('Confab created.', 'success')
			render :show
      else
         #! @flash = generate_flash('Couldn't make confab.")
         render json: ['Invalid confab details!'], status: 401
		end
	end

	def show
		@confab = Confab.find(params[:id])
	end

	private

	def confab_params
		params.require(:confab).permit(
			:host_id,
			:description,
			:max_capacity,
			:start_time_in_ms,
			:end_time_in_ms
		)
	end

	def start_times_this_month(current_time)
		datetime_to_ms(current_time)..datetime_to_ms(current_time.end_of_month)
	end

	def datetime_to_ms(datetime)
		datetime.to_i * 1000
	end
end
