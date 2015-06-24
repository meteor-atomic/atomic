/**
 * Extend Media
 * @type {FS}
 */
_.extend(Media, {
  /**
   * Define the client side collection
   * @type {FS.Collection}
   */
  media: new FS.Collection(Media.collectionId, {
    stores: [
      Stores.Default
    ]
  }),

  /**
   * Thumbnail stores
   * @type {FS}
   */
  thumbs: new FS.Collection(Media.collectionId + ".thumbs", {
    stores: [
      Stores.Default
    ]
  })
});
