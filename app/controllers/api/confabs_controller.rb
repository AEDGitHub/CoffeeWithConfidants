class Api::ConfabsController < ApplicationController

    def index
        # @confabs = Confab.all
        @confabs = Confab
            .where(start_time: (DateTime.now..DateTime.now.end_of_month))
            .includes(:host, :conurbation, :conflations, :attendees)
        render :index
    end

    def show
        @confab = Confab.find(params[:id])
        render :show
    end

end
