require 'rails_helper'
require 'restaurant'

describe Restaurant do

  it "does not allow restaurants made without a name" do
    restaurant = Restaurant.new(cuisine: "Bingo")
    expect(restaurant).to_not be_valid
  end

end
