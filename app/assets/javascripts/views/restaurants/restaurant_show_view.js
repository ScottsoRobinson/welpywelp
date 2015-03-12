WelpyWelp.Views.RestaurantShow = Backbone.CompositeView.extend({

  tagName: "section",

  className: "restaurant-show",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.reviews(), "add change", this.render);
  },

  events:{
    "click button.edit-restaurant": "editRestaurantForm",
    "click button.add-review": "addReview",
    "click button.edit-review": "editReview"
  },

  template: JST['restaurants/show'],

  render: function () {

    var content = this.template({
      restaurant: this.model
    });

    this.$el.html(content);
    console.log("in restaurant show render");
    this.reviewsList();

    return this;
  },

  reviewsList: function() {

    this.model.reviews().each(function (review) {

      var reviewView = new WelpyWelp.Views.ReviewShowOnRestaurant({
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
      restaurant: this.model,
      model: review,
      collection: this.model.reviews()
    });
    this.addSubview('section.review-form-section', reviewForm);
    return this;
  },

  editReview: function (event) {
    event.preventDefault();
    var $id = $(event.currentTarget).attr("data-review-id");
    var review = this.model.reviews().get($id);

    var reviewForm = new WelpyWelp.Views.ReviewForm({
      restaurant: this.model,
      model: review,
      collection: this.model.reviews()
    });

    this.addSubview('section.review-form-section', reviewForm);
    return this;
  },

  editRestaurantForm: function (event) {
    event.preventDefault();
    var editView = new WelpyWelp.Views.RestaurantForm({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('section.form-section', editView);
    return this;
  }

});
