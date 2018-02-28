class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_organizer, :logged_in?

  def current_organizer
    @current_organizer ||= Organizer.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_organizer
  end

  def login(organizer)
    @current_organizer = organizer
    session[:session_token] = organizer.reset_session_token!
  end

  def logout
    current_organizer.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
end
