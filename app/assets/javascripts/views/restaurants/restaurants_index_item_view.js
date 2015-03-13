WelpyWelp.Views.RestaurantsIndexItem = Backbone.CompositeView.extend({

  tagName: "li",

  className: "restaurant-index-item",

  template: JST['restaurants/index_item'],

  initialize: function () {
    this.listenTo(this.model.reviews(), "change sync add", this.render);
  },

  render: function () {
    var content = this.template({
      restaurant: this.model
    });

    this.$el.html(content);
    return this;
  }

});
