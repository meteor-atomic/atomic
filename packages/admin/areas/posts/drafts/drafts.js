/**
 * Drafts helpers
 */
Template.AdminPostDraftsView.helpers({
  /**
   * Return teh drafts
   */
  drafts: function(){
    return Posts.where({draft: true}, function(err){
      if(err) Notify.exception(err);
    });
  },

  /**
   * [author description]
   * @return {[type]} [description]
   */
  author: function() {
    if(this.creator){
      var user = Meteor.users.findOne({_id: this.creator}, {}, function(err){
        if(err)
          return Notify.exception(err);
      });

      if(user && user.profile && user.profile.name)
        return user.profile.name;
    }

    return "Unknown";
  },
})
