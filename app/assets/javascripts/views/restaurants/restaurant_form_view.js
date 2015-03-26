WelpyWelp.Views.RestaurantForm = Backbone.CompositeView.extend({

  tagName: 'form',

  className: 'restaurant-form',


  events:{
    "click button.create-restaurant": "submitForm",
    "click button.cancel-form": "cancelForm"
  },

  template: JST['restaurants/form'],

  render: function () {
    console.log("in form render");
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
        this.remove();
        WelpyWelp.modalEl.toggleClass("hidden");
      }.bind(this)
    });
  },

  cancelForm: function (event) {
    event.preventDefault();
    this.remove();
    WelpyWelp.modalEl.toggleClass("hidden");
  }


});
