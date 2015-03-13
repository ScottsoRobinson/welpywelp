WelpyWelp.Collections.Reviews = Backbone.Collection.extend({

  url: "/api/reviews",

  model: WelpyWelp.Models.Review,

  initialize: function(models, options) {
    this.restaurant = options.restaurant;
    this.author = options.author;
  },

  getOrFetch: function (id) {
    var review = this.get(id);
    var reviews = this;

    if (!review){
      review = new WelpyWelp.Models.Review({id: id});

      review.fetch({
        success: function () {
          reviews.add(review);
        }
      });
    } else {
      review.fetch();
    }
    return review;
  }

});
