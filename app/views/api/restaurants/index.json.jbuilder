json.array! @restaurants do |restaurant|
  json.name restaurant.name
  json.cuisine restaurant.cuisine
  json.id restaurant.id
  json.average_rating restaurant.avg_rating
end
