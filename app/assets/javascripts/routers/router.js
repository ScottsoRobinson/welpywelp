WelpyWelp.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    console.log("in intialize");
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes:{
    "": "index",
    "restaurants/:id": "show"
  },

  index: function () {
    this.collection.fetch();
    console.log("In index in router");

    var indexView = new WelpyWelp.Views.RestaurantsIndex({
      collection: this.collection
    });
    this._swapView(indexView);
  },

  show: function (id) {
    var restaurant = this.collection.getOrFetch(id);
    var showView = new WelpyWelp.Views.RestaurantShow({
      model: restaurant,
      collection: this.collection
    });
    this._swapView(showView);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
