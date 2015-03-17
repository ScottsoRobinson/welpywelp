json.results do
  json.array! @search_results do |restaurant|
    json.name restaurant.name
    json.cuisine restaurant.cuisine
    json.id restaurant.id
    json.average_rating restaurant.avg_rating
  end
end
