class AddPicsToReviewPictures < ActiveRecord::Migration
  def self.up
    add_attachment :review_pictures, :picture
  end

  def self.down
    remove_attachment :review_pictures, :picture
  end
end
