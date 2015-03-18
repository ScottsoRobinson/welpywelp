WelpyWelp.Views.RestaurantShow = Backbone.CompositeView.extend({

  template: JST['restaurants/top_level_show'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.renderInfo();
    this.renderMap();
    return this;
  },

  renderInfo: function () {

    var infoView = new WelpyWelp.Views.RestaurantInfo({
      model: this.model,
      collection: this.collection
    });
    this.addSubview('section.info', infoView);

  },

  renderMap: function () {
    var mapOptions = {
      center: new google.maps.LatLng(40.725040, -73.996833),
      zoom: 15,
      mapyTypeId: google.maps.MapTypeId.ROADMAP
    };


    var mapView = new WelpyWelp.Views.RestaurantMap({
      mapOptions: mapOptions
    });

    this.addSubview('section.map', mapView);

  },






});
