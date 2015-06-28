/**
 * Extend the core namespace with client functionality
 */
_.extend(Atomic, {
  /**
   * Set the page suffix
   * @type {String}
   */
  suffix: "Atomic",

  /**
   * Set the page suffix
   * @type {String}
   */
  seperator: "\u2022",

  /**
   * Title variable, this will be used within a tracker autorun to set the title
   *
   * @todo Default title?
   * @type {ReactiveVar}
   */
  title: new ReactiveVar(""),

  /**
   * Set the page title
   * @param {String} title Title for the current page
   */
  setTitle: function(title) {
    Atomic.title.set(title);
  },

  /**
   * Returns the current page title, this is reactive
   * @return {String}
   */
  getTitle: function() {
    return Atomic.title.get();
  }
});
