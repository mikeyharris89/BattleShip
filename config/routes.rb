Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :games, only: [:index, :create, :show, :destroy]
  end
end
