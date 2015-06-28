/**
 * Store the template instance
 */
var View = Template.AdminCategoryPickerSegment;

/**
 * Created handler
 * @return {Function}
 */
View.created = function() {
  // Subscribe to all categories
  this.subscribe("categories", Categories.subscription());

  // If this category picker has an post id, automatically
  // pre-populate and update the posts
  if(this.data.id) {
    this.subscribe("post",
      Posts.subscription({admin: true, query: {_id: this.data.id}})
    );
  }
}

/**
 * Once rendered bind events and setup UI
 * @return {Function}
 */
View.rendered = function() {
}

View.helpers({
  /**
   * Return the categories
   * @return {Cursor}
   */
  categories: function() {
    return Categories.all();
  },

  /**
   * Return true if the category id is within the psots categroies
   * @return {Boolean}
   */
  checked: function() {
    var post_id = Template.instance().data.id;

    // XXX This is a bug when creating posts.
    return Posts.get(post_id).categories.indexOf(this._id) > -1
    // return (Posts.get(post_id).categories || []).indexOf(this._id) > -1
  }
});

View.events({
  "click input[type=checkbox]": function(e, template) {
    var checked = e.currentTarget.checked;
    Posts[checked ? "addCategory" : "removeCategory"](Template.instance().data.id, this._id, function(err) {
      if(err)
        return Notify.exception(err);
    });
  }
})
