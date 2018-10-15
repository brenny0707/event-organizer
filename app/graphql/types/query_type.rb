Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :allOrganizers, !types[Types::OrganizerType] do
    description "Should return all organizers in DB"
    resolve ->(obj, args, ctx) {
      Organizer.all
    }
  end
  field :organizerProfile, function: Resolvers::OrganizerProfile.new
end
