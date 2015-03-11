Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:create, :new, :destroy]
  resources :restaurants
  namespace :api, defaults: { format: :json} do
    resources :restaurants, except: [:new, :edit, :destroy]
    resources :reviews, except: [:new, :edit, :destroy]
  end
end
