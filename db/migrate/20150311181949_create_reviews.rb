class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.string :title
      t.integer :restaurant_id, null: false
      t.integer :rating, null: false

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :restaurant_id
    add_index :reviews, [:author_id, :restaurant_id], unique: true
  end
end
