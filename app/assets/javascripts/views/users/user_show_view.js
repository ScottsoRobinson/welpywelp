WelpyWelp.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  tagName: 'section',

  className: 'user-show-section',

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.edit-user": "editUserInfo",
    "click button.edit-review": "editReview"
  },

  render: function () {
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
    var userForm = new WelpyWelp.Views.UserForm({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('section.user-form-section', userForm);
    return this;

  },

  editReview: function (event) {
    
  }


});
