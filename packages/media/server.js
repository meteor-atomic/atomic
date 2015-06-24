/**
 * Enable debug
 */
FS.debug = true;

/**
 * Add validators
 */
Media.collection.files.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();
