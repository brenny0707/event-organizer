Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createOrganizer, function: Resolvers::CreateOrganizer.new
  field :organizerProfile, function: Resolvers::OrganizerProfile.new
end
