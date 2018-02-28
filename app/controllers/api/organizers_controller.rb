class Api::OrganizersController < ApplicationController
  def create
    @organizer = Organizer.new(organizer_params)
    if @organizer.save!
      login(@organizer)
      render :show
    else
      render json: @organizer.errors.full_messages, status: 422
    end
  end

  def show
    @organizer = current_organizer
    if @organizer
      render :show
    else
      render json: ["You are not logged in"], status: 422
    end
  end

  private

  def organizer_params
    params.require(:organizer).permit(:fname, :lname, :email, :password)
  end

end
