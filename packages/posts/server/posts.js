// Apply the security rules for inserts
Posts.collection.permit(['insert']).isPostCreator().ifHasRole(['admin', 'writer']).apply()

// Apply the security rules for updates
Posts.collection.permit(['update']).ifHasRole(['admin', 'writer']).apply();

// Apply the security rules for removals
Posts.collection.permit(['remove']).ifHasRole(['admin']).isPostCreator().apply()
