
json.extract! @restaurant, :id, :name, :cuisine
json.user_owned_review @restaurant.reviews.find_by(author_id: current_user.id).try(:id)
json.reviews @restaurant.reviews do |review|
  json.id review.id
  json.author_id review.author_id
  json.restaurant_id review.restaurant_id
  json.body review.body
  json.title review.title
  json.rating review.rating
  json.belongs_to_current_user current_user.id == review.author_id
  json.author_name review.author.username
  json.restaurant_cuisine @restaurant.cuisine
  json.restaurant_name @restaurant.name
end
