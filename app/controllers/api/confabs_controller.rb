class Api::ConfabsController < ApplicationController

    def index
        @confabs = Confab
            .where(start_time: (DateTime.now..DateTime.now.end_of_month))
            .includes(:host, :conurbation, :conflations, :attendees)
    end

    def show
        @confab = Confab.find(params[:id])
    end

end
