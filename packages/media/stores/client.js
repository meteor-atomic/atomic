/**
 *
 */
Stores = {};

/**
 * Default Store
 * @type {FS.Store}
 */
Stores.Default = new FS.Store.FileSystem(Media.collectionId);
