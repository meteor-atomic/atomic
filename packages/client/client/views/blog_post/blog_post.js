/**
 * When the template is created
 */
Template.BlogPostView.rendered = function(){
  window.scrollTo(0, 0);
}
/**
 * Template helpers
 */
Template.BlogPostView.helpers({
	/**
	 * Return the blog listings
	 *
	 * @todo filtering
	 * @todo pagination
	 */
	post : function() {
		return Posts.where({_id: this.id()});
	},

  /**
   * Generate short link
   */
  shortlink: function() {
    return Router.path("blog.short", {id: this._id});
  },

  /**
   * Return a print friendly name
   * @return {String}
   */
  creator: function() {
    return this.creator || "Admin"
  },

  /**
   * Return a pretty version of t he updated at timestamp.
   *
   * @todo Make this reactive
   * @return {String}
   */
  updatedAt: function() {
    return moment(this.updatedAt).fromNow();
  }
})
