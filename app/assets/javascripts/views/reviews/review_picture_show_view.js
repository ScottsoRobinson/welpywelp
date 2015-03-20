WelpyWelp.Views.PictureShow = Backbone.CompositeView.extend({

  template: JST['reviews/picture_huge'],

  events: {
    "click": "removePic"
  },

  render: function () {
    console.log("in review picture render")
    var content = this.template({
      picture: this.model
    });

    this.$el.html(content);

    return this;

  },

  removePic: function () {
    this.remove();
    $('.modal-pic').toggleClass('hidden');
  }

})
