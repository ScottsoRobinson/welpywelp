WelpyWelp.Views.RestaurantInfo = Backbone.CompositeView.extend({
  tagName: "section",

  className: "restaurant-show",


  initialize: function () {
    this.listenTo(this.model, "sync change:user_owned_review", this.render);
    this.listenTo(this.model.reviews(), "add sync", this.render);

  },

  events:{
    "click button.edit-restaurant": "editRestaurantForm",
    "click button.add-review": "addReview",
    "click button.edit-review": "editReview",
    "click img.restaurant-image": "showPic"

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
      console.log("in reviewslist");
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
    this.$('section.review-form-section').empty();
    var review = new WelpyWelp.Models.Review();
    console.log("in add review")
    var reviewForm = new WelpyWelp.Views.ReviewForm({
      restaurant_id: this.model.id,
      model: review,
      collection: this.model.reviews(),
      from: "restaurants/" + this.model.id
    });
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(reviewForm.render().$el);
    // this.addSubview(el, reviewForm);
    return this;
  },

  editReview: function (event) {
    event.preventDefault();
    this.$('section.review-form-section').empty();
    var $id = $(event.currentTarget).attr("data-review-id");
    var review = this.model.reviews().get($id);

    var reviewForm = new WelpyWelp.Views.ReviewForm({
      restaurant_id: this.model.id,
      model: review,
      collection: this.model.reviews(),
      from: "restaurants/" + this.model.id
    });
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(reviewForm.render().$el);

    //this.addSubview(el, reviewForm);
    return this;
  },

  editRestaurantForm: function (event) {
    event.preventDefault();
    this.$('section.form-section').empty();
    var editView = new WelpyWelp.Views.RestaurantForm({
      model: this.model,
      collection: this.collection,
    });
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(editView.render().$el);
    // this.addSubview(el, reviewForm);
    return this;
  },

  showPic: function (event) {
    event.preventDefault();
    console.log("in show rest pic");
    var pic = new WelpyWelp.Views.RestaurantPictureShow({
      model: this.model
    })
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(pic.render().$el);
    //this.addSubview('.modal-picture', pic);

    return this;
  }

})
