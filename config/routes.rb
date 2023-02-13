Rails.application.routes.draw do
  root to: 'home#index'
  get 'get_post', to: 'home#get_post'
  post 'get_post', to: 'home#get_post'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
