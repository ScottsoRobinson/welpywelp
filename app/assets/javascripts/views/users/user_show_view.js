WelpyWelp.Views.UserShow = Backbone.CompositeView.extend({

  template: JST['users/show'],

  tagName: 'section',

  className: 'user-show-section',

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);
    return this;
  },



});
