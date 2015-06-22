/**
 * Helpers
 */
Template.AdminCategoryPickerSegment.helpers({
  /**
   * Return the categories
   * @return {Cursor}
   */
  categories: function() {
    return Categories.all();
  }
})
