WelpyWelp.Views.ReviewForm = Backbone.CompositeView.extend({

  tagName: 'form',

  className: 'review-form',

  template: JST['reviews/form'],

  events:{
    "click button.submit-review": "submit"
  },

  initialize: function (options) {
    this.restaurant_id = options.restaurant_id;
    this.from = options.from;
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

    this.model.set({restaurant_id: this.restaurant_id});
    this.model.save({}, {
      success: function () {
        var rest = WelpyWelp.restaurants.getOrFetch(this.restaurant_id);
        rest.set({user_owned_review: this.model.id});

        this.collection.add(this.model, {merge: true});
      }.bind(this),
      wait: true
    });
  }

});
