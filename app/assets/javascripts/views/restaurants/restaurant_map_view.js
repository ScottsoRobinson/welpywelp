WelpyWelp.Views.RestaurantMap = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.mapOptions = options.mapOptions

  },

  attributes: {
    id: "map-canvas"
  },



  render: function () {
    console.log("in restaurant map view");
    this._map = new google.maps.Map(this.el, this.mapOptions);
  }

});
