class Api::ConfabsController < ApplicationController

    def index
        @confabs = Confab
            .where(start_time: (DateTime.now..DateTime.now.end_of_month))
            .includes(:host, :conurbation, :conflations, :attendees)
    end

    def create
        create_params = confab_params
        create_params[:start_time] = DateTime.at()
    end

    def show
        @confab = Confab.find(params[:id])
    end

    private
    def confab_params
        params.require(:confab).permit(:host_id, :description, :max_capacity, :start_time_utc_string, :end_time_utc_string)
    end

end
