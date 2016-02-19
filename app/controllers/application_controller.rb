class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  helper_method :current_user, :user_logged_in?

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def sign_in!(user)
    @current_user = user
    @current_user.reset_session_token!
    self.session[:session_token] = @current_user.session_token
  end

  def sign_out!
    current_user.try(:reset_session_token!)
    self.session[:session_token] = nil
  end
  
end
