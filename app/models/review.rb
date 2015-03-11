class Review < ActiveRecord::Base
  validates :author_id, uniqueness: {scope: :restaurant_id, message:"You can only review each restaurant once, update your old review instead!"}
  validates :author_id, :restaurant_id, :body, :rating, presence: true
  validates :rating, inclusion: {in: 1..5}

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to(
    :restaurant,
    class_name: "Restaurant",
    foreign_key: :restaurant_id,
    primary_key: :id
  )


end
