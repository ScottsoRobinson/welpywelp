WelpyWelp.Collections.Restaurants = Backbone.Collection.extend({

  url: "/api/restaurants",

  model: WelpyWelp.Models.Restaurant,

  getOrFetch: function(id){
    var restaurant = this.get(id)
    var restaurants = this;
    if(!restaurant){
      restaurant = new WelpyWelp.Models.Restaurant({id: id});
      restaurant.fetch({
        success: function(){
          restaurants.add(restaurant);
        }
      });
    }else{
      restaurant.fetch();
    }
    return restaurant;
  }

});
