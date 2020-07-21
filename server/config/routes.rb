Rails.application.routes.draw do
  resources :items
  resources :tickets
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index, :show]
      resources :accounts, only: [:index, :create]
      resources :orders, only: [:index, :create]


      post "/login", to: "auth#create"
    end
  end
end
