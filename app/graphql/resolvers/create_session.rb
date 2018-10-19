require_relative "../../controllers/application_controller.rb"


class Resolvers::CreateSession < GraphQL::Function
  # arguments passed as "args"
  argument :email, !types.String
  argument :password, !types.String

  # return type from the mutation
  type do
    name 'LoginPayload'

    field :organizer, Types::OrganizerType
    field :token, types.String
  end

  def call(_obj, args, _ctx)

    return unless args[:email] && args[:password]
    
    @organizer = Organizer.find_by_credentials(
      args[:email],
      args[:password])
    
    return unless @organizer

    _ctx[:session][:session_token] = @organizer.reset_session_token!
    
    OpenStruct.new({
      organizer: @organizer,
      token: _ctx[:session][:session_token]
    })
  end
end