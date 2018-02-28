Rails.application.routes.draw do
  namespace :api, defaults: { format: :json} do
    resource :organizers, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
