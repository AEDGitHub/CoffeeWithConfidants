Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :conurbations, only: [:index] do
      resources :confabs, only: [:index, :create]
    end
    resources :confidants, only: [:show, :create, :update, :destroy]
    resources :confabs, only: [:index, :show, :update, :destroy] do
      resources :conflations, only: [:create, :destroy]
    end
  end

  root "static_pages#root"
end
