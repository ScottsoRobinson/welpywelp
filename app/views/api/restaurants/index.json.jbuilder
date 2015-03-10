json.array! @restaurants do |restaurant|
  json.name restaurant.name
  json.cuisine restaurant.cuisine
end
