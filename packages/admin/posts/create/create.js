var editor;
/**
 *
 */
Template.AdminNewPostView.rendered = function(){
  editor = new Editor({
    element: this.$('textarea')[0]
  });
}
