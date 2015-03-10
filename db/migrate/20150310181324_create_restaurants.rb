class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.integer :owner_id
      t.string :name, null: false
      t.string :cuisine
      

      t.timestamps
    end
  end
end
