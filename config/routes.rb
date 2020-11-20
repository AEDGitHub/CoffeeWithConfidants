Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]
    resources :conurbations, only: %i[index] do
      resources :confabs, only: %i[index create]
    end
    resources :confidants, only: %i[show create update destroy]
    resources :confabs, only: %i[index show update destroy] do
      resources :conflations, only: %i[create destroy]
    end
  end

  root 'static_pages#root'
end
