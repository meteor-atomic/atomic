/**
 * Helpers
 */
Template.AdminCategoryPickerSegment.created = function(){
  /**
   * Subscribe to the tags
   */
  this.subscribe("categories", Categories.subscription());

  /**
   * Subscribe to the context
   */
  if(this.data.id)
    this.subscribe("post", Posts.subscription(this.data.id));
}

Template.AdminCategoryPickerSegment.helpers({
  /**
   * Return the categories
   * @return {Cursor}
   */
  categories: function() {
    return Categories.all();
  },

  enabled: function() {
    return Posts.get(Template.instance().data.id).categories.indexOf(this._id) > -1
  }
})
