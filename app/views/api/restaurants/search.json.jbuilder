pages = @search_results.total_count / 5
json.total_pages  @search_results.total_count % 5 == 0 ? pages : pages + 1

json.results do

  json.array! @search_results do |restaurant|


    json.name restaurant.name
    json.cuisine restaurant.cuisine
    json.id restaurant.id
    json.average_rating restaurant.avg_rating
    json.address restaurant.address
    json.latitude restaurant.latitude
    json.longitude restaurant.longitude
    if !restaurant.review_pictures.empty?
      json.picture restaurant.review_pictures.first.picture.url(:thumbnail)
    else
      json.picture User.new.picture.url
    end
  end
end
