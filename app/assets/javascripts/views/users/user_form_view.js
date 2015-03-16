WelpyWelp.Views.UserForm = Backbone.CompositeView.extend({

  tagName: 'form',

  className: 'review-form',

  template: JST['users/form'],

  events:{
    "click button.user-form-submit": "submit",
    "change #input-picture-file": "changePicture"
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
      }.bind(this),
      wait: true
    });
  },

  changePicture: function (event) {
    var file = event.currentTarget.files[0];

    var fileReader = new FileReader();

    var that = this;
    fileReader.onloadend = function () {
      that.model.set("picture", fileReader.result);
      that.previewPic(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  },

  previewPic: function (src) {
    this.$("#picture-preview").attr("src", src);
  }
});
