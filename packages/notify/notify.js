/**
 * Notify
 * @description Show notifications on the client
 */

/**
 * Notify namespace
 *
 * @todo Add options and configuration
 * @todo Add fade out t ime limits
 *
 * @type {Object}
 */
Notify = {};

/**
 * Extend the Notify namespace with core methods
 */
_.extend(Notify, {
  /**
   * Notifications collection
   *
   * @todo This seems to be a little OTT using a collection
   *       but I hope that in the future this will be live
   *       and we can capture the errors in an administration
   *       interface.
   * @type {Collection}
   */
  collection: new Meteor.Collection(null),

  /**
   * Generic add method used to create all types of
   * notifications.
   * @param {String} type    Notification types.
   * @param {String} message Notification Message.
   */
  add: function(type, message) {
    /**
     * Insert the notification into the queue
     */
    return Notify.collection.insert({
      type:     type,
      message:  message
    });
  },

  /**
   * Extracts information out of an Error/Meteor.Error
   * instance and generates a generic error bar message.
   *
   * @param  {Error} exception Error object
   */
  exception: function(error) {
    return Notify.error(error.reason || error.message);
  },

  /**
   * Display a error message
   * @param  {String} message     Error message.
   */
  error: function(message) {
    return Notify.add('error', message);
  },

  /**
   * Display a warning message.
   * @param  {String}   message     Message.
   */
  warning: function(message) {
    return Notify.add('warning', message);
  },

  /**
   * Display a success message
   * @param  {String}   message     Message.
   */
  success: function(message) {
    return Notify.add('success', message);
  },

  /**
   * Dismis an error message
   * @param  {String} id Mongo id used to identify the
   *                     notification
   */
  dismiss: function(id) {
    /**
     * Change the visibilty of the notification
     * @type {[type]}
     */
    Notify.collection.remove({_id: id});
  },

  /**
   * Dismis all notifications
   */
  dismissAll: function() {
    Notify.collection.remove();
  }
});
