
// our data arrays
const streetNumber  = ['1233', '234', '6435', '45645', '23424', '54321'],
      streetName    = ['Lafarge Way', 'Pine Street', 'Main Street', 'Spruce Avenue', 'Via Appia Way', 'Amber Sun Court'],
      cityName      = ['Louisville', 'Boulder', 'Lafayette', 'Denver', 'Castle Rock', 'Arvada', 'Iowa', 'Arizona'],
      stateName     = ['Colorado', 'California', 'Nevada', 'Washington D.C.', 'Castle Rock', 'Colorado Springs'],
      zip           = ['90210', '80018', '80303', '80304', '80227', '80107']
;

// string randomization (NOTE FROM DAVE: this feels gross to me... could be a function???)
const randomStreetNumber = Math.floor((Math.random() * streetNumber.length)),
      randomStreetName   = Math.floor((Math.random() * streetName.length)),
      randomCitytName    = Math.floor((Math.random() * streetName.length)),
      randomStateName    = Math.floor((Math.random() * stateName.length)),
      randomZip          = Math.floor((Math.random() * zip.length))
;

// our output
const randomAddress = (`${streetNumber[randomStreetNumber]} ${streetName[randomStreetName]}, ${cityName[randomCitytName]},${stateName[randomStateName]}, ${zip[randomZip]}`);

console.log(randomAddress);