WelpyWelp.Views.UserForm = Backbone.CompositeView.extend({

  tagName: 'form',

  className: 'review-form',

  template: JST['users/form'],

  events:{
    "click button.user-form-submit": "submit"
  },

  render: function () {
    this.$el.empty();
    var content = this.template({
      user: this.model
    });
    this.$el.html(content);

    return this;

  },

  submit: function (event) {
    event.preventDefault();

    var attrs = this.$el.serializeJSON();

    this.model.set(attrs);

    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate("users/" + this.model.get(id), {trigger: true});
      }.bind(this),
      wait: true
    });
  }
});
