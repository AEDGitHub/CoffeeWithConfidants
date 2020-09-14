class Api::ConfabsController < ApplicationController

    def index
        @confabs = Confab.all
        # @confabs = Confab
            # .where(start_time: (DateTime.now.beginning_of_month..DateTime.now.end_of_month))
        render :index
    end

end
