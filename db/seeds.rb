# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


first_names = ["Jake", "Joe", "Lydia", "Megan", "Laura", "George",
              "Nick", "Bryan", "Andrew", "Eli", "Scott", "Nicky", "Seth"]
users = []
first_names.each do |name|
  user = User.create!(username: name,
              password: "password",
              password_confirmation: "password",
              email: "user#{name}@email.com")

  users << user
end

restaurant_setup = [["Pizza Place", "Italian"], ["Chinese Spot", "Chinese"],
              ["Straightforward Sushi", "Japanese"], ["Bistro", "French"],
              ["Farm to Table", "New American"], ["Bodacious Burritos", "Tex-Mex"],
              ["Taco Shack", "Mexican"], ["Tapas Bar", "Spanish"],
              ["Beer Garden", "Beer Bar"], ["Wine Extravaganza", "Wine Bar"],
              ["Mixology Mansion", "Cocktail Bar"], ["Thai", "Thai"],
              ["Burgers and Steaks", "Traditional American"],
              ["Java Afficianados", "Coffee"], ["Tea Time", "Tea"],
              ["Frozen Treats", "Ice Cream"]
              ]



review_setups = [["It was so delicious! One of my best experiences!", 5],
          ["I really enjoyed it, I am looking forward to coming back", 4],
          ["It wasn't memorable and I don't think I will revisit this place.", 3],
          ["I hated the food and the service. It was an awful experience.", 2],
          ["I'm in the process of suing the restaurant over how bad that experience was.
            Worst. Time. Ever. Avoid at all costs.", 1]
          ]

restaurants = []
streets = (2..130).to_a
numbers = (5..300).to_a
east_west = 0
restaurant_setup.each do |setup|
  sleep(10)
  first_names.each do |name|
    e_w = east_west % 2 == 0 ? "E" : "W"
    east_west += 1
    street = streets.sample.to_s
    number = numbers.sample.to_s

    rest = Restaurant.create!(name: "#{name}'s #{setup[0]}",
                      cuisine: "#{setup[1]}",
                      address: "#{number} #{e_w} #{street} St, New York, New York")
    restaurants << rest
  end
end

reviews = []

restaurants.each do |restaurant|
  users.each do |user|
    setup = review_setups.sample
    review = Review.create!(body: setup[0], author_id: user.id,
                            rating: setup[1], restaurant_id: restaurant.id)
    reviews << review
  end
end
