class Resolvers::OrganizerProfile < GraphQL::Function
  # arguments passed as "args"
  argument :id, !types.ID

  # return type from the mutation
  type Types::OrganizerType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context (which would be discussed later)
  def call(_obj, args, _ctx)
    # NOTE: The <Organizer.create!> method here is the Rails create method made in the api/organizers_controller.rb!!!
    Organizer.find(args[:id])
  end
end