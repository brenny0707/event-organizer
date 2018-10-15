class Resolvers::CreateOrganizer < GraphQL::Function
  # arguments passed as "args"
  argument :fname, !types.String
  argument :lname, !types.String
  argument :email, !types.String
  argument :password, !types.String

  # return type from the mutation
  type Types::OrganizerType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context (which would be discussed later)
  def call(_obj, args, _ctx)
    # NOTE: The <Organizer.create!> method here is the Rails create method made in the api/organizers_controller.rb!!!
    Organizer.create!(
      email: args[:email],
      fname: args[:fname],
      lname: args[:lname],
      password: args[:password],
    )
  end
end