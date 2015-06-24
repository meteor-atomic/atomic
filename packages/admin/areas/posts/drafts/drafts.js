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
  }
})
