Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createOrganizer, function: Resolvers::CreateOrganizer.new

  field :createSession, function: Resolvers::CreateSession.new
end
