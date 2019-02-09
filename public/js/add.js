module.exports = function(a, b) {
      const sum = parseFloat(a) + parseFloat(b);
      if(isNaN(sum)) {
        return undefined;
      }
      return sum;
    }