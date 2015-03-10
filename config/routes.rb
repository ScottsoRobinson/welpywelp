Rails.application.routes.draw do
  resources :users
  resource :session, only: [:create, :new, :destroy]
  resources :restaurants
  namespace :api, defaults: { format: :json} do
    resources :restaurants, except: [:new, :edit]
  end
end