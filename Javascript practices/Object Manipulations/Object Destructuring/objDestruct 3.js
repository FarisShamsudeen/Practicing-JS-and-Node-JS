const user = {
  id: 1,
  profile: {
    firstName: "John",
    lastName: "Doe",
    location: {
      city: "Los Angeles",
      country: "USA"
    }
  }
};

const {profile: {firstName, location: {country}}} = user

console.log(firstName)
console.log(country)