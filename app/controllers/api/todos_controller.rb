class Api::TodosController < ApplicationController

  before_action :ensure_current_user_is_authorized, only: [:update, :destroy]

  def show
    @todo = Todo.find(params[:id])
  end

  def index
    if logged_in?
      @todos = current_user.todos.order("updated_at DESC")
    else
      render json: []
    end
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.user = current_user
    if @todo.save
      render 'show'
    else
      render json: @todo.errors.full_messages.to_json, status: 401
    end
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    if @todo.save
      render 'show'
    else
      render json: @todo.errors.full_messages.to_json, status: 401
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render 'show', status: 200
  end

  private
  def todo_params
    params.require(:todo).permit(
      :title, :pom_estimate, :pom_total, :completed
    )
  end

  def ensure_current_user_is_authorized
    return if (current_user == Todo.find(params[:id]).user)
    render json: {'response' => "Something went wrong, cannot edit another user's todos."}, status: :forbidden
  end

end
