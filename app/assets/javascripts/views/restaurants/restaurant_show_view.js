WelpyWelp.Views.RestaurantShow = Backbone.CompositeView.extend({

  template: JST['restaurants/top_level_show'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.model.fetch({
      success: function () {
        this.renderInfo();
        this.renderMap();
      }.bind(this)
    });
  
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
      zoom: 13,
      mapyTypeId: google.maps.MapTypeId.ROADMAP
    };


    var mapView = new WelpyWelp.Views.RestaurantMap({
      mapOptions: mapOptions,
      model: this.model
    });

    this.addSubview('section.map', mapView);

  },






});
