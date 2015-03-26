class Review < ActiveRecord::Base
  validates :author_id, uniqueness: {scope: :restaurant_id, message:"You can only review each restaurant once, update your old review instead!"}
  validates :author_id, :restaurant_id, :body, :rating, presence: true
  validates :rating, inclusion: {in: 1..5}

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id,
    inverse_of: :reviews
  )

  belongs_to(
    :restaurant,
    class_name: "Restaurant",
    foreign_key: :restaurant_id,
    primary_key: :id
  )

  has_many(
    :review_pictures,
    class_name: "ReviewPicture",
    foreign_key: :review_id,
    primary_key: :id,
    inverse_of: :review
  )

  def review_pictures=(pictures)
    unless pictures.nil?
      pictures.each do |picture|
        self.review_pictures.build(picture: picture, author: self.author)
      end
    end
  end

end
