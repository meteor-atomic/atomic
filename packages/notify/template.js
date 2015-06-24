/**
 * Template Helpers
 */
Template.Notify.helpers({
  /**
   * Return the notifications from the collection
   *
   * @todo Add limits here
   * @return {Cursor}
   */
  notifications: function() {
    return Notify.collection.find({}, {limit: 2});
  },

  /**
   * Return the size of the notifications, used
   * to tell teh UI to prepare the container
   * @return {Number} Number of notifications
   */
  size: function() {
    return Notify.collection.find().count()
  }
});

/**
 * Events
 */
Template.Notify.events({
  "click .close-click": function(e, template) {
    Notify.dismiss(this._id);
  }
})
