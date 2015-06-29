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
  this.subscribe("categories", Meteor.subscribe("admin.categories"));

  // If this category picker has an post id, automatically
  // pre-populate and update the posts
  if(this.data.id) {
    this.subscribe("admin.post", Meteor.subscribe("admin.post", this.data.id))
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
    return Posts.get(Template.instance().data.id).categories.indexOf(this._id) > -1
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
