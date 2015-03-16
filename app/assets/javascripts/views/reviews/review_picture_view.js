WelpyWelp.Views.ReviewPicture = Backbone.CompositeView.extend({

  tagName: "li",

  template: JST['reviews/picture'],

  render: function () {
    console.log("in review picture render")
    var content = this.template({
      review: this.model
    });

    this.$el.html(content);

    return this;

  }

});
