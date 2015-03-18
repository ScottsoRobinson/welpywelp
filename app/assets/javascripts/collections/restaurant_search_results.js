WelpyWelp.Collections.RestaurantSearchResults = Backbone.Collection.extend({

  url: "/api/restaurants/search",

  parse: function (response) {

    if (response.total_pages) {
      // this.total_count = response.total_count;
      this.total_pages = response.total_pages;

    }

    return response.results;
  },

  model: WelpyWelp.Models.Restaurant

});
