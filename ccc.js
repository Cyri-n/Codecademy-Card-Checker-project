const validateCred = array => {
  let sum = 0;
  for (let i = array.length - 1; i >= 0; i -= 2) {
    sum += array[i];
  }
  for (let j = array.length - 2; j >= 0; j -= 2) {
    let double = array[j] * 2;
    if (double > 9) {
      double -= 9;
    }
    sum += double;
  }
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
};


const findInvalidCards = arr => {
  let invalids = []
  for (i = 0; i < arr.length; i++) {
    if (validateCred(arr[i]) === false) {
      invalids.push(arr[i])
    }
  }
  return invalids;
};

const idInvalidCardCompanies = arr => {
  let companyArray = []
  for (i = 0; i < arr.length; i++)
    if (arr[i][0] === 3) {
      if (companyArray.indexOf('Amex') === -1) {
        companyArray.push('Amex')
      }
    } else if (arr[i][0] === 4) {
        if (companyArray.indexOf('Visa') === -1) {
          companyArray.push('Visa')
      }
    } else if (arr[i][0] === 5) {
        if (companyArray.indexOf('Mastercard') === -1) {
          companyArray.push('Mastercard')
      }
    } else if (arr[i][0] === 6) {
        if (companyArray.indexOf('Discover') === -1) {
          companyArray.push('Discover')
      }
    }
    return companyArray;
};
const plsWork = findInvalidCards(batch)
console.log(idInvalidCardCompanies(plsWork))
