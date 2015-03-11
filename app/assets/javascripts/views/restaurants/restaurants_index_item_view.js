WelpyWelp.Views.RestaurantsIndexItem = Backbone.View.extend({

  tagName: "li",

  className: "restaurant-index-item",

  template: JST['restaurants/index_item'],

  render: function () {
    var content = this.template({
      restaurant: this.model
    });

    this.$el.html(content);
    return this;
  }

});
