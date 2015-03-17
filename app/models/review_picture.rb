class ReviewPicture < ActiveRecord::Base
  validates  :review, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id,
    inverse_of: :review_pictures
  )

  belongs_to(
    :review,
    class_name: "Review",
    foreign_key: :review_id,
    primary_key: :id,
    inverse_of: :review_pictures
  )

  has_attached_file :picture, :styles => {huge: "450x450#", large: "300x300#", medium: "150x150#", thumbnail: "60x60#"}
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\z/




end
