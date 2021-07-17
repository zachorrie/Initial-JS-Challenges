// Lodash Library

const _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
      if (number >= start && number < end ) {
        return true
      } else return false
    },
  
    words(string) {
      const words = string.split(' ')
      return words;
    },
  
    pad(string, length) {
      if (string.length > length) {
        return string
      }
  
      const lengthDiff = length - string.length;
      const startPaddingLength = Math.floor(lengthDiff/2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const spacer = ' '
      const paddedString = spacer.repeat(startPaddingLength) + string + spacer.repeat(endPaddingLength);
  
      return paddedString;
    },
  
    has(object, key) {
      if (object[key] === undefined) {
        return false
      } else return true;
    },
  
    invert(object) {
      let invertedObject = {};
      for(let key in object) {
        const originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
  
    findKey(object, predicate) {
      for(let key in object) {
        const value = object[key];
        const predicateReturnValue = predicate(value);
  
        if (predicateReturnValue === true) {
          return key;
        } 
      }
      return undefined;
    },
  
    chunk(array, size) {
      if (size === undefined) {
        size = 1;
      }
  
      const arrayChunks = []
      for (let i = 0; i < array.length; i += size) {
        const arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  
  };
  
  // Do not write or modify code below this line.
  //module.exports = _;