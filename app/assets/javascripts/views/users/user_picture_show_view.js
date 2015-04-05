WelpyWelp.Views.UserPictureShow = Backbone.CompositeView.extend({

  template: JST['users/picture_huge'],

  events: {
    "click": "removePic"
  },

  render: function () {
    var content = this.template({
      user: this.model
    });

    this.$el.html(content);

    return this;

  },

  removePic: function () {
    this.remove();
    WelpyWelp.modalEl.toggleClass('hidden')
  }

})
