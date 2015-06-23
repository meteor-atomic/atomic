/**
 * Custom security rules entries.
 * @locus Server
 */
Security.defineMethod("isPostCreator", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId, doc) {
    return userId !== doc.creator;
  }
});
