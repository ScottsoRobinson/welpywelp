WelpyWelp.Models.ReviewPicture = Backbone.Model.extend ({

  urlRoot: "/api/review_pictures",

  toJSON: function () {
    return {
      reviewPicture: _.clone(this.attributes)
    };
  },

});
