class AddReviewPicturesIndexing < ActiveRecord::Migration
  def change


    add_index :review_pictures, :review_id
    add_index :review_pictures, :user_id

  end
end
