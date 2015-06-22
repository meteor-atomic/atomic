/**
 *
 */
Template.BlogView.helpers({
	/**
	 * Return the blog listings
	 *
	 * @todo filtering
	 * @todo pagination
	 */
	posts : function() {
		return Posts.all()
	},

	/**
	 * Return a global list of categories
	 * @return {Cursor}
	 */
	categories: function() {
		return Categories.all();
	},

	/**
	 * Generate a slug link
	 * @return {[type]} [description]
	 */
	link: function() {
		return Router.path("blog.post", {id: this._id, slug: this.slug});
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
	},

	/**
	 * Returna single category for this post object
	 *
	 * @this {Post}
	 * @return {String}
	 */
	category: function() {
		try {
			if(this.categories.length > 0)
				return Categories.get(this.categories[0]).name;
		}catch(e) {
			return "Unknown";
		}
	},

	/**
	 * Returna single category for this post object
	 * @this {Post}
	 * @return {String}
	 */
	category_description: function() {
		try {
			if(this.categories.length > 0)
				return Categories.get(this.categories[0]).description;
		}catch(e) {
			return "Unknown";
		}
	}
});
