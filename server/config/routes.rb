Rails.application.routes.draw do
  
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index, :show, :update]
      resources :accounts, only: [:index, :create, :update]
      resources :orders, only: [:index, :create]
      resources :items, only: [:index, :create, :update]
      resources :tickets, only: [:index, :create, :update]

      post "/login", to: "auth#create"
    end
  end
end
