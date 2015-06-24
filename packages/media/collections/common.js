/**
 * Extend Media
 * @type {FS}
 */
_.extend(Media, {
  /**
   * Define the client side collection
   * @type {FS.Collection}
   */
  collection: new FS.Collection(Media.collectionId, {
    stores: Stores
  })
});
