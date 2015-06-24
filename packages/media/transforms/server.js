/**
 * Define the transforms
 */
Transforms = {
  thumbnailer : function(fileObj, readStream, writeStream) {
    console.log("---- FILE ---- ", fileObj);
    writeStream.end();
    // throw new Error("testing");
    return false;
    gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
  }
}
