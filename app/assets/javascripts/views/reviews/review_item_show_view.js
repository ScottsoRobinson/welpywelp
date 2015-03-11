WelpyWelp.Views.ReviewShow = Backbone.CompositeView.extend({

  tagName: "li",

  className: "review-item",

  template: JST['reviews/show'],

  render: function () {
    console.log(this.model.get("body"));
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    console.log(this.model.get("body"));
    console.log(this.model);
    console.log("I AM HERE!")
    return this;
  }

});
