/**
 *
 */
_.extend(Askimet, {

  /**
   * Askimet api key
   * @type {String}
   */
  key: Meteor.settings.askimet_key || "",

  /**
   * Askimet blog, defaults to the blog url
   * @type {String}
   */
  blog: Meteor.settings.askimet_blog || Meteor.absoluteUrl(),

  /**
   * Askimet protocol
   * @type {String}
   */
  protocol: Meteor.settings.askimet_protocol || "https",

  /**
   * Askimet domain
   * @type {String}
   */
  server: Meteor.settings.askimet_server || "rest.akismet.com",

  /**
   * Askimet api version
   * @type {String}
   */
  version: Meteor.settings.askimet_version || "1.1",

  /**
   * Our useragent
   * @type {String}
   */
  useragent: "Atomic/0.5.0",

  /**
   * Varify the askimet key
   * @return {Boolean}
   */
  varifyKey: function(key) {
    if(!Askimet.key)
      return false;

    // Make the remote call.
    return Askimet.request("verify-key").content == 'valid';
  },

  /**
   * Check to see if a comment has been detected as spam
   * @param  {Object} comment Askimet comment object
   * @return {Boolean}
   */
  checkSpam: function(comment) {
    return Askimet.request("comment-check", comment) == 'true';
  },

  /**
   * Inform askimet of a spammy comment
   * @param  {Object} comment Askimet comment object
   * @return {Boolean}
   */
  submitSpam: function(comment) {
    return Askimet.request("submit-spam", comment).content;
  },

  /**
   * Inform askimet of a hammy comment
   * @param  {Object} comment Askimet comment object
   * @return {Boolean}
   */
  submitHam: function(comment) {
    return Askimet.request("submit-ham", comment).content;
  },

  /**
   * Make a request to askimet server and return the response
   * @param  {String} action  Askimet action that proceeds the version /1.1/{action}
   * @param  {Object} payload Object to send via post
   * @return {Object}         Response Object
   */
  request: function(action, payload) {
    // Extend the payload to add  the default key and blog if required.
    payload = _.extend({key: Askimet.key, blog: Askimet.blog}, payload || {});

    // Make sure we have a blog and key set
    if(!payload.key || payload.blog) {
      throw new Meteor.Error("askimet", "Both 'key' and 'blog' properties are required.");
    }

    // make the request
    return HTTP.post(Askimet._url(action), {params: payload});
  },

  /**
   * Generate a url for an action
   * @param  {String} action Action
   * @return {String}        structured url
   */
  _url: function(action) {
    return Askimet.protocol + "://" + Askimet.server + "/" + Askimet.version + "/" + action;
  }
})
