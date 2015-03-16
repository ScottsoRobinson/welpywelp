WelpyWelp.Collections.ReviewPictures = Backbone.Collection.extend ({

  url: "/api/review_pictures",

  model: WelpyWelp.Models.ReviewPicture,

  initialize: function(models, options) {
    this.review = options.review;

  },

  getOrFetch: function (id) {
    var reviewPic = this.get(id);
    var reviewPics = this;

    if (!review){
      reviewPicture = new WelpyWelp.Models.ReviewPicture({id: id});

      review.fetch({
        success: function () {
          reviewPics.add(reviewPic);
        }
      });
    } else {
      reviewPic.fetch();
    }
    return reviewPic;
  }
});
