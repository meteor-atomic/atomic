/**
 * Define the transforms
 */
Transforms = {
  thumbnailer : function(fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
  }
}
