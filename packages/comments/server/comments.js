/**
 * Common methods for the Comments model.
 */
_.extend(Comments, {

});

// Apply the security rules for inserts
Comments.collection.permit(['insert']).ifHasRole(['admin']).apply();

// Apply the security rules for updates
Comments.collection.permit(['update']).ifHasRole(['admin', 'writer']).apply();

// Apply the security rules for removals
// @todo we need to allow thge comment owner the chance to delete the comment?
Comments.collection.permit(['remove']).ifHasRole(['admin']).apply();
