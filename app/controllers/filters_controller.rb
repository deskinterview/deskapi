class FiltersController < ApplicationController
	respond_to :json, :html

  def index
  	@filters = DeskApi.filters

  	render json: @filters
  	#render json: { test: 1}, status: 200
  end

  def cases
  	@cases = DeskApi.cases(filter_id: params[:id])

  	render json: @cases
  	#render json: { filter_id: params[:id] }, status: 200
  end
end