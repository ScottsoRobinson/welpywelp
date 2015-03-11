WelpyWelp.Collections.Reviews = Backbone.Collection.extend({

  url: "/api/reviews",

  model: WelpyWelpy.Models.Review,
  
  initialize: function(models, options) {
    this.restaurant = options.restaurant;
  }

});
