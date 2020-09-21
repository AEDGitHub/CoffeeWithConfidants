class Api::ConfabsController < ApplicationController

    def index
        # @confabs = Confab.all
        @confabs = Confab
            .where(start_time: (DateTime.now..DateTime.now.end_of_month))
            .includes(:host, :conurbation)        
        render :index
    end

end
