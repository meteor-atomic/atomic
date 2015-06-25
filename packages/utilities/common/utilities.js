/**
 * Add the utilities
 */
_.extend(Utilities, {
  /**
   * Convert a string to a slug, usually a title
   * @param  {Stirng} text text to transform
   * @return {String}      transformed text
   */
  slugify: function(text) {
    return text
      .toString()                     // force a string
      .toLowerCase()                  // Turn the text into lowe case
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  },
})
