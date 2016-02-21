class Api::SessionsController < ApplicationController

  def show
    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render "api/users/show"
  end

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user.nil?
      render json: "The credentials provided did not match any users in our records.", status: 401
    else
      sign_in!(@user)
      render "api/users/show"
    end
  end

  def destroy
    sign_out!
    render json: {}
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
