import mediaGallery from 'media-gallery';

describe('In media gallery', () => {
  beforeEach(() => {
    mediaGallery.clear();
  });

  describe('When I call "count" after saving 2 files', () => {
    let count;
    beforeEach(() => {
      mediaGallery.save('somefile1.mp3', createRandomArrayBuffer(32));
      mediaGallery.save('somefile2.mp3', createRandomArrayBuffer(32));
      count = mediaGallery.count();
    });
    it('should return 2', () => {
      expect(count).toBe(2);
    });
  });

  describe('When I call "clear" after saving 2 files', () => {
    let count;
    beforeEach(() => {
      mediaGallery.save('somefile1.mp3', createRandomArrayBuffer(32));
      mediaGallery.save('somefile2.mp3', createRandomArrayBuffer(32));
      mediaGallery.clear();
      count = mediaGallery.count();
    });
    it('should have a count of 0', () => {
      expect(count).toBe(0);
    });
  });

  describe('When I call "save" with a file name and reload the buffer', () => {
    let inputArrayBuffer = createRandomArrayBuffer(32);
    let outputArrayBuffer;
    beforeEach(() => {
      mediaGallery.save('somefile.mp3', inputArrayBuffer);
      outputArrayBuffer = mediaGallery.load('somefile.mp3');
    });
    it('should return the same data', () => {
      expect(areEqual(inputArrayBuffer, outputArrayBuffer)).toBe(true);
    });
  });

  describe('When I call "load" with a file name that does not exist', () => {
    let arrayBuffer;
    beforeEach(() => {
      arrayBuffer = mediaGallery.load('somefile.mp3');
    });
    it('should return undefined', () => {
      expect(arrayBuffer).toBeUndefined();
    });
  });

});

///// Helper functions

function createRandomArrayBuffer(length) {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);
  for (let i = 0; i < length; i += 1) {
    array[i] = Math.floor(Math.random() * 256);
  }
  return buffer;
}

function areEqual(arrayBuffer1, arrayBuffer2) {
  if (arrayBuffer1.byteLength !== arrayBuffer2.byteLength) {
    return false;
  }
  let dv1 = new Int8Array(arrayBuffer1);
  let dv2 = new Int8Array(arrayBuffer2);
  for (let i = 0; i !== arrayBuffer1.byteLength; i += 1) {
    if (dv1[i] !== dv2[i]) {
      return false;
    }
  }
  return true;
}
