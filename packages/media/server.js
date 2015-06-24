/**
 * Enable debug
 */
FS.debug = true;

/**
 * Add validators
 */
Media.media.files.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();
