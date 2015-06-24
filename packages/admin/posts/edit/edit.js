/**
 *
 */
Template.AdminPostEditView.helpers({
  /**
   * Return the post context for this editor
   */
  post: function() {
    return Posts.get(this.id(), function(err){
      if(err) Notify.exception(err);
    });
  },

  /**
   * Return the title for the post
   * @type {String}
   */
  title: function() {
    return this.title
  }
});


/**
 * Create a new scoped editor
 * @type {Editor}
 */
Template.AdminPostEditView.created = function() {
  /**
   * Create a new editor instance
   * @type {Editor}
   */
  this._editor = new Editor({toolbar: []});

  /**
   * Wait for the subscription to become available then set the content.
   */
  this.autorun(function(){
    if(Router.subsReady()){
      Template.instance()._editor.value(
        Posts.get(Template.instance().data.id()).content
      );
    }
  })
};


/**
 * @todo We need to show warning when navigating away from
 *       a post with content, or at least draft it.
 */
Template.AdminPostEditView.rendered = function() {
  /**
   * Load the checkboxes
   */
  this.$('.checkbox').checkbox();

  /**
   * Create a new textarea
   */
  var textarea = document.createElement("textarea");

  /**
   * Append the text area to the #editor
   */
  var container = document.getElementById("editor");

  /**
   * Append the text area to the container
   */
  container.appendChild(textarea);

  /**
   * Render the editor
   */
  this._editor.render(textarea);
};

Template.AdminPostEditView.events({
  "keypress input[name=title]": function(e, template){
    /**
     * Only update on [Enter]
     */
    if(e.keyCode == 13)
       Posts.update(template.data.id(), { title: e.currentTarget.value });
  },

  "change input[name=published]": function(e, template) {
    Posts.update(template.data.id(), {"published": e.currentTarget.checked});
  }
})

/**
 * Handle mardown bar events.
 */
Template.AdminPostEditView.events({

  "click .button.bold": function(event, template) {
    template._editor.toggleBold();
  },

  "click .button.italic": function(event, template) {
    template._editor.toggleItalic();
  },

  "click .button.quote": function(event, template) {
    template._editor.toggleBlockquote();
  },

  "click .button.unordered-list": function(event, template) {
    template._editor.toggleUnOrderedList();
  },

  "click .button.ordered-list": function(event, template) {
    template._editor.toggleOrderedList();
  },

  "click .button.link": function(event, template) {
    template._editor.drawLink();
  },

  "click .button.images": function(event, template) {
    template._editor.drawImage();
  },

  "click .button.undo": function(event, template) {
    template._editor.undo();
  },

  "click .button.redo": function(event, template) {
    template._editor.redo();
  },

  "click .button.preview": function(event, template) {
    template._editor.togglePreview();
  },

  "click .button.fullscreen": function(event, template) {
    template._editor.toggleFullScreen();
  }
});
