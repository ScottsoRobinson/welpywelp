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


    var pic = new WelpyWelp.Views.PictureShow({
      model: this.model
    })
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(pic.render().$el);
    

    return this;
  }

});
