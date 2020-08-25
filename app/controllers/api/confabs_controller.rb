class Api::ConfabsController < ApplicationController

    def index
        @confabs = Confab.all
        render :index
    end

end
