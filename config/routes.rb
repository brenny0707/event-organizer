Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json} do
    resource :organizers, only: [:create, :show]
    resource :session, only: [:create, :destroy]
  end
end
