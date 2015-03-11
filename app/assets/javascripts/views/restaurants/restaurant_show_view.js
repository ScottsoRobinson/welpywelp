WelpyWelp.Views.RestaurantShow = Backbone.CompositeView.extend({

  tagName: "section",

  className: "restaurant-show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events:{
    "click button.edit-restaurant": "editForm",
    "click button.add-review": "addReview"
  },

  template: JST['restaurants/show'],

  render: function () {
    var content = this.template({
      restaurant: this.model
    });
    console.log(this.model.escape("name"));
    this.$el.html(content);

    this.reviewsList();
    this.attachSubviews();
    return this;
  },

  reviewsList: function() {

    this.model.reviews().each(function (review) {

      var reviewView = new WelpyWelp.Views.ReviewShow({
        model: review,
        collection: this.model.reviews()
      })
      this.addSubview('ul.reviews-list', reviewView);
      return this;
    }.bind(this));
  },

  addReview: function (event) {
    event.preventDefault();
    var review = new WelpyWelp.Models.Review();
    console.log("in add review")
    var reviewForm = new WelpyWelp.Views.ReviewForm({
      model: review,
      collection: this.model.reviews()
    });
    this.addSubview('section.review-form-section', reviewForm);
    return this;
  },

  editForm: function (event) {
    event.preventDefault();
    var editView = new WelpyWelp.Views.RestaurantForm({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('section.form-section', editView);
    return this;
  }

});
