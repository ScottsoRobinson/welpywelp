json.extract! @user, :username, :email


json.reviews @user.reviews do |review|
  json.partial! "/api/reviews/review", review: review
  json.restaurant_cuisine review.restaurant.cuisine
  json.restaurant_name review.restaurant.name
end
json.is_current_user current_user == @user

json.picture_url @user.picture.url(:medium)
json.picture_huge @user.picture.url(:huge)
