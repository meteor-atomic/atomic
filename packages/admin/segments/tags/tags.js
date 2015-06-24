Template.AdminTagsSegment.helpers({
  tags: function(template) {
    return Posts.get(this.id).tags;
  }
})

/**
 * Template Events
 */
Template.AdminTagsSegment.events({
  "keypress input[type=text]": function(e, template) {
    if(e.keyCode === 13) {
      if(e.currentTarget.value.length > 0) {
        var tags = e.currentTarget.value.trim().split(" ");
        Posts.addTags(template.data.id, tags);
      }else{
        Notify.warning("Please enter a tag name");
      }

      // Clear the value out
      e.currentTarget.value = "";
    }
  },

  "click .delete.icon": function(e, template) {
    Posts.removeTag(template.data.id, e.currentTarget.parentElement.text.trim());
  }
})
