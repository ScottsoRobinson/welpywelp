window.WelpyWelp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    WelpyWelp.restaurants = new WelpyWelp.Collections.Restaurants();
    WelpyWelp.restaurants.fetch();
    WelpyWelp.users = new WelpyWelp.Collections.Users();
    WelpyWelp.modalEl = $("div.modal");
    
    new WelpyWelp.Routers.Router({
      $rootEl: $('main.main'),
      collection: WelpyWelp.restaurants
    })
    Backbone.history.start();

  }
};

// $(document).ready(function(){
//   WelpyWelp.initialize();
// });
