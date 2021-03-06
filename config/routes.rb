Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:create, :new, :destroy]
  post '/session/demo', to: 'sessions#demo'
  resources :restaurants
  namespace :api, defaults: { format: :json} do
    resources :restaurants, except: [:new, :edit, :destroy] do
      get "search", on: :collection
    end
    resources :reviews, only: [:create, :update]
    resources :users, only: [:show, :update]
    resources :review_pictures, only: [:create, :update, :destroy]
    # get "/restaurant/search", to: "restaurants#search"
  end
end
