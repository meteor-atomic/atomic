Template.AdminPostsView.events({
  "change input.checkall": function(e, template) {
    template.$('tbody input.checkbox').prop("checked", e.currentTarget.checked)
  }
});
/**
 * Posts helpers
 */
Template.AdminPostsView.helpers({
  /**
   * Return a list of all posts were subscribed to
   * @return {Cursor}
   */
  posts: function() {
    /**
     * Exclude items marked as draft items
     * @type {Object}
     */
    return Posts.where({draft: false}, function(err){
      if(err) Notify.exception(err);
    });
  },

  title: function() {
    if(this.title &&  this.title.length > 0)
      return this.title;

    return "Untitled";
  },

  /**
   * [author description]
   * @return {[type]} [description]
   */
  author: function(id) {
    if(this.creator){
      var user = Meteor.users.findOne({_id: this.creator}, function(err){
        if(err) Notify.exception(err);
      });

      if(user){
        return user.profile.name;
      }
      return "";
    }

    return "System";
  },

  /**
   * Returna date string
   */
  date: function() {
    return this.createdAt;
  }
});
