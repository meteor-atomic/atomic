/**
 * Category creator segment
 */
Template.AdminCategoryCreatorSegment.helpers();

/**
 * Created handler
 */
Template.AdminCategoryCreatorSegment.created = function(){};

/**
 * Create handler
 */
Template.AdminCategoryCreatorSegment.events({
  /**
   * Generate an slug value to pre-populate the slug
   * field.
   * @param  {Event} event        Browser event.
   * @param  {Template} template  Blaze template instance.
   */
  "keyup input[name=name]": function(event, template) {
    /**
     * Set the slug to the slugified category name.
     */
    template.$('input[name=slug]').val(
      Utilities.slugify(event.currentTarget.value)
    );
  },

  "click button.create": function(event, template) {
    /**
     * Valdiate we have a category and slug
     */
    var name = template.$('input[name=name]').val();
    var desc = template.$('input[name=description]').val();
    var slug = template.$('input[name=slug]').val();

    /**
     * @todo Error handling here
     */
    if(!name) {
      return Notify.exception(new Meteor.Error("categories", "Name field required."));
    }

    Categories.create(name, desc, slug, function(err){
      if(err) Notify.exception(err);
    });
  }
})
