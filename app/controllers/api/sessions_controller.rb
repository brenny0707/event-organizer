class Api::SessionsController < ApplicationController
  def create
    @organizer = Organizer.find_by_credentials(
      params[:organizer][:email],
      params[:organizer][:password])
    if @organizer
      login(@organizer)
      render "api/organizers/show" #explicit call since method is in SessionsController but rendering organizer JSON
    else
      render json: ["Invalid credentials, try again"], status: 422
    end
  end

  def destroy
    @organizer = current_organizer
    if @organizer
      logout
      render json: {}
    else
      render json: ["404, not found"], status: 404
    end
  end
end
