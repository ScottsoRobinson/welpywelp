WelpyWelp.Views.RestaurantSearch = Backbone.CompositeView.extend({

  initialize: function () {
    this.searchResults = new WelpyWelp.Collections.RestaurantSearchResults();
    this.searchResults.pageNum = 1;

    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "change .query": "search",
    "click .query-button": "search",
    "click .next-page": "nextPage",
		"click .prev-page": "prevPage"
  },

  template: JST['restaurants/search'],

  render: function () {
    console.log("in search render");
    var content = this.template({
      results: this.searchResults
    });
    this.$el.html(content);
    this.renderMap();
    if (this.searchResults.length > 0){

      this.searchResultsList();
    }

    return this;
  },

  renderMap: function () {
    if (typeof this.mapCenter === "undefined"){
      var mapOptions = {
        center: new google.maps.LatLng(40.725040, -73.996833),
        zoom: 13,
        mapyTypeId: google.maps.MapTypeId.ROADMAP
      };
    }else{
      var mapOptions = {
        center: this.mapCenter,
        zoom: this.mapZoom,
        mapyTypeId: google.maps.MapTypeId.ROADMAP
      };
    }


    this.mapView = new WelpyWelp.Views.RestaurantMap({
      mapOptions: mapOptions,
      collection: this.searchResults
    });

    this.addSubview('section.map', this.mapView);

  },

  searchResultsList: function () {
    console.log("in search results");
    this.searchResults.each(function (item) {
      var searchView = new WelpyWelp.Views.RestaurantSearchItem({
        model: item
      });

      this.addSubview('ul.restaurants-search-list', searchView);

    }.bind(this));
    return this;

  },

  search: function (event) {
    event.preventDefault();
    var mapBounds = this.mapView._map.getBounds();
    var ne = mapBounds.getNorthEast();
    var sw = mapBounds.getSouthWest();
    this.mapCenter = this.mapView._map.getCenter();
    this.mapZoom = this.mapView._map.getZoom();
    this.filterData = {
      lat: [sw.lat(), ne.lat()],
      lng: [sw.lng(), ne.lng()]
    };
    this.searchResults.pageNum = 1;
    this.searchResults.query = this.$(".query").val();

    this.searchResults.fetch({
      data: {
        filter_data: this.filterData,
        query: this.searchResults.query,
        page: 1
      },

    });
  },

  nextPage: function (event) {
    this.searchResults.fetch({
      data: {
        filter_data: this.filterData,
        query: this.searchResults.query,
        page: this.searchResults.pageNum + 1
      },
      success: function () {
        this.searchResults.pageNum = this.searchResults.pageNum + 1;

      }.bind(this)
    });
  },

  prevPage: function (event) {
    this.searchResults.fetch({
      data: {
        filter_data: this.filterData,
        query: this.searchResults.query,
        page: this.searchResults.pageNum - 1
      },
      success: function () {
        this.searchResults.pageNum = this.searchResults.pageNum - 1;

      }.bind(this)

    });
  }

})
