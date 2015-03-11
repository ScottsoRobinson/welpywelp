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

    this.reviews();
    this.attachSubviews();
    return this;
  },

  reviews: function() {
    this.model.reviews.each(function (review) {
      
    });
  },

  addReview: function () {

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
