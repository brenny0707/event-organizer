# == Schema Information
#
# Table name: organizers
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class OrganizerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
