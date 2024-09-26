let apiConfig = {
    timeout: undefined,  // This value could be undefined or a number
    baseUrl: "/api/v1"  // This value might be null or undefined
  };

  
const fetchTimeout = apiConfig.timeout ?? 5000
const baseApiUrl = apiConfig.baseUrl ?? "/api"

console.log(fetchTimeout);
console.log(baseApiUrl);