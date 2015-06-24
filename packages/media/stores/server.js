/**
 *
 */
Stores = {};

/**
 * Default Store
 * @type {FS.Store}
 */
Stores.Default = new FS.Store.FileSystem("media", {path: '~/storage/media'});

/**
 * Create the Thumbnail stores
 */
Stores.Thumbnails = new FS.Store.FileSystem(Media.collectionId, {
  path: "~/storage/thumbnails",
  transformWrite: Transforms.thumbnailer
});
