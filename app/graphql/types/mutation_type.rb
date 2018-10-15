Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createOrganizer, function: Resolvers::CreateOrganizer.new
end
