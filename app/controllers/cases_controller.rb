class CasesController < ApplicationController
	respond_to :json, :html

  def index
  	@case = DeskApi.cases.find(params[:id])

  	render json: @case
  end

  def update
    @case = DeskApi.cases.find(params[:id])
 #   @labels = @case.label_ids
 #   @labels.push(*params[:label])
     @labels = [ params[:label]]
    begin
      logger.debug "Case: #{@case.to_json}"
      logger.debug "Adding label \"#{params[:label]}\" to case \"#{params[:id]}\"."
      @case = @case.update({labels: @labels})
      render json: @case
    rescue DeskApi::Error::MethodNotAllowed => e
      logger.debug "Unable to update case #{params[:id]} with labels #{@labels}"
      render json: { result: e.message }, status: 500
    end
  end
end