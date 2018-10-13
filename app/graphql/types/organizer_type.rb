# defines a new GraphQL type
Types::OrganizerType = GraphQL::ObjectType.define do
  # this type is named `Link`
  name 'Organizer'

  # it has the following fields
  field :id, !types.ID
  field :fname, !types.String
  field :lname, !types.String
  field :email, !types.String
  field :password_digest, !types.String
  field :session_token, !types.String
end