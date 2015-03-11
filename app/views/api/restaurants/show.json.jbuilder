
json.extract! @restaurant, :id, :name, :cuisine

json.reviews @restaurant.reviews do |review|
  json.id = review.id
  json.author_id = review.author_id
  json.restaurant_id = review.restaurant_id
  json.body = review.body
  json.title = review.title
end
