WelpyWelp.Views.ReviewForm = Backbone.CompositeView.extend({

  tagName: 'form',

  className: 'review-form',

  template: JST['reviews/form'],

  events:{
    "click button.submit-review": "submit",
    // "click button.save-pictures": "changePicture"
    "change #input-picture-files": "changePicture"
  },

  initialize: function (options) {
    this.restaurant_id = options.restaurant_id;
    this.from = options.from;
    this.pictures = [];
    this.$el.attr({enctype: "multipart/form-data"});
  },

  render: function () {
    
    var content = this.template({
      review: this.model
    });
    this.$el.html(content);

    return this;

  },

  submit: function (event) {
    event.preventDefault();

    var attrs = this.$el.serializeJSON()['review'];

    _.extend(attrs,
      {restaurant_id: this.restaurant_id},
      {review_pictures: this.pictures}
    );
    this.model.save(attrs, {
      success: function () {
        var rest = WelpyWelp.restaurants.getOrFetch(this.restaurant_id);
        rest.set({user_owned_review: this.model.id});

        this.collection.add(this.model, {merge: true});
      }.bind(this),
      error: function (model, data) {
        console.log(data.responseText);
      },
      wait: true
    });
  },

  changePicture: function (event) {
    var files = Array.prototype.slice.call(event.currentTarget.files);

    console.log(event.currentTarget.files);

    var that = this;
    files.forEach(function (file) {

      var fileReader = new FileReader();
      fileReader.onloadend = function () {

        that.pictures.push(fileReader.result);
        that.previewPic(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }) ;






    // var fileReader = new FileReader();
    //
    // var that = this;
    // fileReader.onloadend = function () {
    //   that.model.set("pictures", fileReader.result);
    //   // that.previewPic(fileReader.result);
    // };
    //
    // fileReader.readAsDataURL(file);
  },

  previewPic: function (src) {
    console.log('in preview pic');
    this.$("#picture-preview").append("<li class='preview-picture'><img src='" + src + "'></li>");
  }



});
