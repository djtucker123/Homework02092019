module.exports = function(a, b) {
      const difference = parseFloat(a) - parseFloat(b);
      if(isNaN(difference)) {
        return undefined;
      }
      return difference;
    }

