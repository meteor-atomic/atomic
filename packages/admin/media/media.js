/**
 * Subscribe
 */
Template.AdminMediaView.created = function() {
  this.subscribe("media", Media.subscription());
}

Template.AdminMediaView.rendered = function() {
  this.$('.cards .image').dimmer({
    on: 'hover'
  });
}

/**
 * Helpers
 */
Template.AdminMediaView.helpers({

  /**
   * Fetch all media items
   */
  media: function() {
    return Media.collection.find({});
  }
});

/**
 *
 */
Template.AdminMediaView.events({
  'change input[name=upload]': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Media.collection.insert(file, function (err, fileObj) {
        console.log(err, fileObj);
      });
    });
  }
})
