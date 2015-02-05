class LabelsController < ApplicationController
	respond_to :json, :html

  def index
  	@labels = DeskApi.labels

  	render json: @labels
  end

  def create
    types = params[:types]
    logger.debug "Creating label named \"#{params[:name]}\" with description \"#{params[:description]}\", of type #{params[:types]}, and color #{params[:color]}"
  	@label = DeskApi.labels.create({name: params[:name], description: params[:description], types: params[:types], color: params[:color]})
    render json: @label
  end
end