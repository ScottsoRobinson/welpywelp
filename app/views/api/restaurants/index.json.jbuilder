json.array! @restaurants do |restaurant|
  json.name restaurant.name
  json.cuisine restaurant.cuisine
  json.id restaurant.id
  json.average_rating restaurant.avg_rating
  if !restaurant.review_pictures.empty?
    json.picture restaurant.review_pictures.first.picture.url(:thumbnail)
  else
    json.picture User.new.picture.url
  end
end
