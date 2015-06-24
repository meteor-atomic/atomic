/**
 *
 */
Stores = [
  new FS.Store.FileSystem("media", {path: '~/media/originals'}),
  new FS.Store.FileSystem("thumbnails", {
    path: '~/media/thumbnails',
    transformWrite: Transforms.thumbnailer
  }),
];
