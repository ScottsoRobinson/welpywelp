class CreateReviewPictures < ActiveRecord::Migration
  def change
    create_table :review_pictures do |t|
      t.integer :review_id, null: false
      t.integer :user_id, null: false


      t.timestamps
    end
  end

  def self.up
    add_attachment :review_pictures, :picture
  end

  def self.down
    remove_attachment :review_pictures, :picture
  end

end
