/**
 * Create a new scoped editor
 * @type {Editor}
 */
Template.AdminPostCreateView.helpers({
  /**
   * Return all the categories.
   */
  categories: function() {
    return Categories.all()
  }
});

/**
 * Create a new scoped editor
 * @type {Editor}
 */
Template.AdminPostCreateView.created = function() {
  /**
   * Create a new editor instance
   * @type {Editor}
   */
  this._editor = new Editor({toolbar: false});
}

/**
 * @todo We need to show warning when navigating away from
 *       a post with content, or at least draft it.
 */
Template.AdminPostCreateView.rendered = function() {
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

/**
 * Handle post events
 */
Template.AdminPostCreateView.events({
  "keypress input[name=title]": function(e, template){
    Posts.update(this.draftId, {
      title: e.currentTarget.value
    });
  },

  "change input[name=published]": function(e, template){
    template.draft.set("published", e.currentTarget.checked == "true");
  }
})

/**
 * Handle mardown bar events.
 */
Template.AdminPostCreateView.events({

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

/**
 * Action events
 */
Template.AdminPostCreateView.events({
  "click .save": function(e, template){
  },

  /**
   * @todo Show are you sure dialog
   */
  "click .cancel": function(e, template){
    /**
     * Remove the article
     */
    Posts.remove(template.draftId);

    /**
     * Redirect to posts
     */
    Router.go("admin.posts");
  }
})
