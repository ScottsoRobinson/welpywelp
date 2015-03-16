WelpyWelp.Views.ReviewShowOnRestaurant = Backbone.CompositeView.extend({

  tagName: "li",

  className: "review-item",

  template: JST['reviews/show_on_restaurant'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {

    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    console.log("in review show on restaurant view");
    this.model.reviewPictures().each(function () {
      console.log("in review render")

      var picView = new WelpyWelp.Views.ReviewPicture({
        model: this.model
      });

      this.addSubview('ul.picture-show', reviewView);
      return this;

    }.bind(this));

    return this;
  }

});
