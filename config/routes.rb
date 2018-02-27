Rails.application.routes.draw do
  root 'destinations#index'

  resources :destinations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
