/**
 * Helpers
 */
Template.AdminCategoriesView.helpers({
  /**
   * Return all categories in the system
   * @return {Cursor}
   */
  categories: function () {
    return Categories.all();
  }
});
