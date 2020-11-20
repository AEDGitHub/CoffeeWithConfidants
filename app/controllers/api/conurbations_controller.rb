class Api::ConurbationsController < ApplicationController
  def index
    @conurbations = Conurbation.all
    render :index
  end
end
