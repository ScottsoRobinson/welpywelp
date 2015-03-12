WelpyWelp.Views.ReviewForm = Backbone.CompositeView.extend({

  tagName: 'form',

  className: 'review-form',

  template: JST['reviews/form'],

  events:{
    "click button.submit-review": "submit"
  },

  initialize: function (options) {
    this.restaurant = options.restaurant
  },

  render: function () {
    this.$el.empty();
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);
    return this;

  },

  submit: function (event) {
    event.preventDefault();

    var attrs = this.$el.serializeJSON()['review'];

    this.model.set(attrs);
    this.model.set({restaurant_id: this.restaurant.get("id")});
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate("restaurants/" + this.model.get("restaurant_id"), {trigger: true});
      }.bind(this),
      wait: true
    });
  }

});
