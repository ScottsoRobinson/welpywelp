WelpyWelp.Views.RestaurantMap = Backbone.CompositeView.extend({

  initialize: function (options) {

    this._markers = {};
    this.mapOptions = options.mapOptions;

  },

  attributes: {
    id: "map-canvas"
  },

  addMarker: function (restaurant) {

    if (this._markers[restaurant.id]) {return};
    var view = this;

    var latLng = new google.maps.LatLng(
      restaurant.get("latitude"),
      restaurant.get("longitude")
    );

    var marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      title: restaurant.get('name')
    });

    this._markers[restaurant.id] = marker;
  },

  render: function () {
    console.log("in restaurant map view");
    this._map = new google.maps.Map(this.el, this.mapOptions);
    if (this.collection){
      this.collection.each( function (restaurant) {
        this.addMarker(restaurant)
      }.bind(this));
    }else{
      this.addMarker(this.model);
    }
  }

});
