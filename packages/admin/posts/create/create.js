/**
 * Create a new scoped editor
 * @type {Editor}
 */
Template.AdminNewPostView.created = function() {
  /**
   * Create a new editor instance
   * @type {Editor}
   */
  this._editor = new Editor({toolbar: []});
}

/**
 * @todo We need to show warning when navigating away from
 *       a post with content, or at least draft it.
 */
Template.AdminNewPostView.rendered = function() {
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

Template.AdminNewPostView.events({

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
})
