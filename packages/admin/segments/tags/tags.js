/**
 * When teh template instance is created
 */
Template.AdminTagsSegment.created = function() {
  this._tags = new ReactiveVar([]);
};

Template.AdminTagsSegment.helpers({
  tags: function() {
    return Template.instance()._tags.get()
  }
})

/**
 * Template Events
 */
Template.AdminTagsSegment.events({
  "keypress input[type=text]": function(e, template) {
    if(e.keyCode === 13) {
      var val = e.currentTarget.value;
      var tags = val.split(" ");
      var _tags = template._tags.get();

      tags.forEach(function(v){
        var t = v.trim();
        if(v.trim() !== "") {
          _tags.push(t)
        }
      });

      e.currentTarget.value = "";
      template._tags.set(_tags);
    }
  },

  "click .delete.icon": function(e, template) {
    var tags = template._tags.get();
    tags.splice(tags.indexOf(e.currentTarget.parentNode.text), 1);
    template._tags.set(tags);
  }
})
