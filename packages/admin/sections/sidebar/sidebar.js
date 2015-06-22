/**
 *
 */
Template.AdminSidebarSection.rendered = function() {
  this.$('.sidebar').sidebar();
}

Template.AdminSidebarSection.helpers({
  /**
   * Return a list of classes for menu option
   */
  classes : function(name) {
    var classes = ["item"];

    if(Router.getRouteName() == name)
      classes.push("active");

    return classes.join(" ");
  }
})
