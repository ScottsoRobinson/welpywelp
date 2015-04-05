WelpyWelp.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  tagName: 'section',

  className: 'user-show-section group',

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.reviews(), "sync", this.render);
  },

  events: {
    "click button.edit-user": "editUserInfo",
    "click button.edit-review": "editReview",
    "click img.profile-pic": "showPic"
  },

  render: function () {
    console.log("rendering whole page again");
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    this.listReviews();
    return this;
  },

  listReviews: function () {
    this.model.reviews().each(function (review) {
      var reviewView = new WelpyWelp.Views.ReviewShowOnUser({
        model: review,
        collection: this.model.reviews()
      });
      this.addSubview('ul.reviews-list', reviewView);
      return this;
    }.bind(this));
  },

  editUserInfo: function (event) {
    event.preventDefault();
    this.$('section.user-form-section').empty();
    var userForm = new WelpyWelp.Views.UserForm({
      model: this.model,
      collection: this.collection
    });
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(userForm.render().$el);

    return this;

  },

  editReview: function (event) {
    event.preventDefault();
    this.$('section.review-form-section').empty();
    var $id = $(event.currentTarget).attr("data-review-id")
    var review = this.model.reviews().get($id);

    var reviewForm = new WelpyWelp.Views.ReviewForm({
      model: review,
      collection: this.model.reviews(),
      restaurant_id: review.get("restaurant_id"),
      from: "users/" + this.model.id
    });

    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(reviewForm.render().$el);

    return this;
  },

  showPic: function (event) {
    event.preventDefault();

    var pic = new WelpyWelp.Views.UserPictureShow({
      model: this.model
    })
    WelpyWelp.modalEl.toggleClass("hidden")
    var el = WelpyWelp.modalEl.find(".modal-form");
    el.html(pic.render().$el);

    return this;

  }


});
