WelpyWelp.Views.RestaurantForm = Backbone.View.extend({

  tagName: 'form',

  className: 'restaurant-form',


  events:{
    "click button.create-restaurant": "submitForm"
  },

  template: JST['restaurants/form'],

  render: function () {
    var content = this.template({
      restaurant: this.model
    });

    this.$el.html(content);
    return this;
  },

  submitForm: function (event) {
    event.preventDefault();

    var attrs = this.$el.serializeJSON();
    this.model.set(attrs);
    this.model.save( {}, {
      success: function () {
        console.log("success");
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate("restaurants/" + this.model.get("id"), {trigger: true});
      }.bind(this)
    });
  }


});
