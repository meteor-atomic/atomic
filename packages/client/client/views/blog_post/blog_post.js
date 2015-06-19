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
	}
})