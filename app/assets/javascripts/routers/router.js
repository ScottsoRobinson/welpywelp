WelpyWelp.Routers.Router = Backbone.Router.extend({
  initialize: function(options){

    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes:{
    "": "index",
    "restaurants/search": "search",
    "restaurants/:id": "showRestaurant",
    "users/:id": "showUser",

  },

  search: function () {
    var view = new WelpyWelp.Views.RestaurantSearch();
    
    this._swapView(view);
  },

  index: function () {
    var indexView = new WelpyWelp.Views.RestaurantsIndex({
      collection: this.collection
    });
    this._swapView(indexView);
  },

  showRestaurant: function (id) {
    var restaurant = this.collection.getOrFetch(id);
    var showView = new WelpyWelp.Views.RestaurantShow({
      model: restaurant,
      collection: this.collection
    });
    this._swapView(showView);
  },

  showUser: function (id) {
    var user = WelpyWelp.users.getOrFetch(id);
    var showView = new WelpyWelp.Views.UserShow({
      model: user,
      collection: WelpyWelp.users
    });
    this._swapView(showView);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
