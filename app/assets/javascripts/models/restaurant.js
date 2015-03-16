WelpyWelp.Models.Restaurant = Backbone.Model.extend({

  urlRoot: "/api/restaurants",

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new WelpyWelp.Collections.Reviews([], {restaurant: this});
    }
    
    return this._reviews
  },

  parse: function (response){
    if (response.reviews) {
      this.reviews().set(response.reviews, {parse: true});
      delete response.reviews;
    }
    return response;
  }

});
