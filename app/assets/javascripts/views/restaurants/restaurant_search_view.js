WelpyWelp.Views.RestaurantSearch = Backbone.CompositeView.extend({

  initialize: function () {
    this.searchResults = new WelpyWelp.Collections.RestaurantSearchResults();
    this.searchResults.pageNum = 1;

		this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "change .query": "search",
    "click .next-page": "nextPage",
		"click .prev-page": "prevPage"
  },

  template: JST['restaurants/search'],

  render: function () {

    var content = this.template({
      results: this.searchResults
    });
    this.$el.html(content);

    this.searchResultsList();

    return this;
  },

  searchResultsList: function () {

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
    this.searchResults.pageNum = 1;
    this.searchResults.query = this.$(".query").val();

    this.searchResults.fetch({
      data: {
        query: this.searchResults.query,
        page: 1
      }
    });
  },

  nextPage: function (event) {
    this.searchResults.fetch({
      data: {
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
        query: this.searchResults.query,
        page: this.searchResults.pageNum - 1
      },
      success: function () {
        this.searchResults.pageNum = this.searchResults.pageNum - 1;
      }.bind(this)

    });
  }

})
