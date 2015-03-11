WelpyWelp.Views.RestaurantsIndex = Backbone.View.extend({

  tagName: "section",

  className: "restaurants",

  template: JST['restaurants/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  events:{
    "click button.add-restaurant-form-button": "addRestaurant"
  },

  render: function () {
    console.log("In this render", this.collection.length);
    this.$el.empty();
    var content = this.template();
    this.$el.html(content);

    this.collection.each(function (restaurant) {
      console.log("in collection each");
      var restaurantView = new WelpyWelp.Views.RestaurantsIndexItem({
        model: restaurant
      });
      this.$("ul.restaurants-list").append(restaurantView.render().$el);
    }.bind(this));

    return this;
  },

  addRestaurant: function(event){
    event.preventDefault();
    var restaurant = new WelpyWelp.Models.Restaurant();
    var formView = new WelpyWelp.Views.RestaurantForm({
      model: restaurant,
      collection: this.collection
    });
    this.$(".form-section").append(formView.render().$el);

    return this;
  }

});