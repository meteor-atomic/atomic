/**
 * 
 */
Template.BlogPostView.helpers({
	/**
	 * Return the blog listings
	 *
	 * @todo filtering
	 * @todo pagination
	 */
	post : function() {
		return Posts.get(this.id());
	},

	/**
	 * Generate a slug link
	 * @return {[type]} [description]
	 */
	link: function() {
		return FlowRouter.path("blog_post", {id: this._id, slug: this.slug});
	}
})