WelpyWelp.Views.ReviewShowOnUser = Backbone.CompositeView.extend({

  tagName: "li",

  className: "review-item",

  template: JST['reviews/show_on_user'],

  render: function () {

    var content = this.template({
      review: this.model
    });
    this.$el.html(content);

    this.model.reviewPictures().each(function (picture) {

      var picView = new WelpyWelp.Views.ReviewPicture({
        model: picture
      });

      this.addSubview('ul.picture-show', picView);
      return this;

    }.bind(this));

    return this;
  }

});
