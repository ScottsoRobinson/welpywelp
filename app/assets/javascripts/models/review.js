WelpyWelp.Models.Review = Backbone.Model.extend({

  urlRoot: "/api/reviews",

  reviewPictures: function (response) {
    if (!this._reviewPictures) {
      this._reviewPictures = new WelpyWelp.Collections.ReviewPictures([], {review: this});
    }

    return this._reviewPictures
  },

  parse: function (response){

    if (response.review_pictures) {

      this.reviewPictures().set(response.review_pictures);

      delete response.review_pictures;
    }

    return response;
  },

  toJSON: function () {
    return {
      review: _.clone(this.attributes)
    };
  },

});
