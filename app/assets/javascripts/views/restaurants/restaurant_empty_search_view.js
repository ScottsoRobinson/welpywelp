WelpyWelp.Views.EmptySearchView = Backbone.View.extend({

  tagName: "li",

  className: "restaurant-index-item",

  template: JST['restaurants/blank_search'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
