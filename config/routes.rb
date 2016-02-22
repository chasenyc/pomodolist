Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :todos, only: [:create, :update, :show, :destroy, :index]
  end

  get "*path", to: "static_pages#root"
end
