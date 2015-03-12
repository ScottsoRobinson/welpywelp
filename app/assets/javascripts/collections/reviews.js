WelpyWelp.Collections.Reviews = Backbone.Collection.extend({

  url: "/api/reviews",

  model: WelpyWelp.Models.Review,

  initialize: function(models, options) {
    this.restaurant = options.restaurant;
    this.author = options.author;
  }

});
