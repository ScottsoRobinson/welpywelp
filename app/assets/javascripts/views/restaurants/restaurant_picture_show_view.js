WelpyWelp.Views.RestaurantPictureShow = Backbone.CompositeView.extend({

  template: JST['restaurants/picture_huge'],

  events: {
    "click": "removePic"
  },

  render: function () {
    console.log("in restaurant picture render")
    var content = this.template({
      restaurant: this.model
    });

    this.$el.html(content);

    return this;

  },

  removePic: function () {
    this.remove();
    WelpyWelp.modalEl.toggleClass('hidden')
  }

})
