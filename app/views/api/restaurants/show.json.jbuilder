
json.extract! @restaurant, :id, :name, :cuisine, :latitude, :longitude, :address
json.average_rating @restaurant.avg_rating
json.user_owned_review @restaurant.reviews.find_by(author_id: current_user.id).try(:id)
json.reviews @restaurant.reviews, partial: "api/reviews/review", as: :review

if !@restaurant.review_pictures.empty?
  json.picture @restaurant.review_pictures.first.picture.url(:thumbnail)
else
  json.picture User.new.picture.url
end
