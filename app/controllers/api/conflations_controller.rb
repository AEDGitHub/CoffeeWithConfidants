class Api::ConflationsController < ApplicationController
  def create
    @conflation =
      Conflation.new(
        confab_id: params[:confab_id],
        attendee_id: current_confidant.id
      )
    if @conflation.save
      @confab = @conflation.confab
      @flash = success_flash('Confab joined!')
      render 'api/confabs/show'
    else
      @flash = failure_flash('Could not join confab.')
      render json: { flash: @flash }, status: 422
    end
  end

  def destroy
    @conflation =
      Conflation.find_by(
        confab_id: params[:confab_id],
        attendee_id: params[:id]
      )
    if @conflation
      @confab = Confab.find(params[:confab_id])
      @conflation.destroy
      @flash = success_flash('Left confab.')
      render 'api/confabs/show'
    else
      @flash = failure_flash('Could not leave confab!')
      render json: { flash: @flash }, status: 422
    end
  end
end
