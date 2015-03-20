WelpyWelp.Views.ReviewPicture = Backbone.CompositeView.extend({

  tagName: "li",

  template: JST['reviews/picture'],

  events: {
    "click img": "showImage"
  },

  render: function () {
    console.log("in review picture render")
    var content = this.template({
      picture: this.model
    });

    this.$el.html(content);

    return this;

  },

  showImage: function () {

    $('.modal-pic').toggleClass("hidden")
    var pic = new WelpyWelp.Views.PictureShow({
      model: this.model
    })
    this.addSubview('.modal-picture', pic);

    return this;
  }

});
