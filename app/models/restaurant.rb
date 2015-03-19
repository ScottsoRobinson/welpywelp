class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true
  geocoded_by :address
  after_validation :geocode

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :reviews,
    class_name: "Review",
    foreign_key: :restaurant_id,
    primary_key: :id
  )

  has_many :review_pictures, through: :reviews, source: :review_pictures


  include PgSearch

  pg_search_scope :search_by_restaurant_name,
                  :against => :name,
                  :using => {
                    tsearch: {prefix: true}
                    }

  paginates_per 5

  def avg_rating
    restaurant_reviews = Review.where(restaurant_id: self.id)

    if restaurant_reviews.empty?
      average_rating = nil
    else
      sum = 0
      restaurant_reviews.each do |review|
        sum += review.rating
      end

      average_rating = sum.to_f / restaurant_reviews.length
    end
    average_rating
  end

  def first_pic

  end

end
