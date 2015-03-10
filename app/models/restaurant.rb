class Restaurant < ActiveRecord::Base
  validates :name, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )


end
