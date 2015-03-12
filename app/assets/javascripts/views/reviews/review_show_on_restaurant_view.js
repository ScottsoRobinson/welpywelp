WelpyWelp.Views.ReviewShowOnRestaurant = Backbone.CompositeView.extend({

  tagName: "li",

  className: "review-item",

  template: JST['reviews/show_on_restaurant'],

  render: function () {

    var content = this.template({
      review: this.model
    });
    this.$el.html(content);

    return this;
  }

});
