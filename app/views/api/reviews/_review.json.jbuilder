json.id review.id
json.author_id review.author_id
json.restaurant_id review.restaurant_id
json.body review.body
json.title review.title
json.rating review.rating
json.belongs_to_current_user current_user.id == review.author_id
json.author_name review.author.username
