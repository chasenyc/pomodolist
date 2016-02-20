class Api::SessionsController < ApplicationController

  before_action :ensure_current_user_is_authorized, only: [:update, :destroy]

  def show
    @todo = Todo.find(params[:id])
  end

  def create

  end

  def update

  end

  def destroy

  end

  private
  def todo_params

  end

  def ensure_current_user_is_authorized
    return if (current_user.id == Todo.find(params[:id]).user_id)
    render json: {'response' => "Something went wrong, cannot edit another user's todos."}, status: :forbidden
  end

end
