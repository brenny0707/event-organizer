class CreateOrganizers < ActiveRecord::Migration[5.1]
  def change
    create_table :organizers do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.timestamps
    end
    add_index :organizers, :email, unique: true
    add_index :organizers, :session_token, unique: true
  end
end
