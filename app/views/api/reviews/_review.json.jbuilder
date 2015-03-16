json.id review.id
json.author_id review.author_id
json.restaurant_id review.restaurant_id
json.body review.body
json.title review.title
json.rating review.rating
json.belongs_to_current_user current_user.id == review.author_id
json.author_name review.author.username
json.review_pictures review.review_pictures do |picture|
  json.picture_url_thumbnail picture.picture.url(:thumbnail)
  json.picture_url_medium picture.picture.url(:medium)
  json.picture_url_large picture.picture.url(:large)
  json.picture_url_huge picture.picture.url(:huge)
end
