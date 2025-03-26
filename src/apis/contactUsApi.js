// import axios from 'axios';
// import qs from 'qs';


// // curl --request POST \
// //             https://api.apollo.io/api/v1/contacts?first_name=Sandhya&organization_name=ovik&email=sandhyakumari3122003%40gmail.com&website_url=http%3A%2F%2Fovik.com&message=hii%2C%20I%20am%20sandhya.&label_names[]=Website-users
// //      --url 'https://api.apollo.io/api/v1/contacts?first_name=Ankit1&organization_name=Org_name&email=email%40google.com&website_url=website.com&label_names[]=Website-users&message=message' \
// //      --header 'Cache-Control: no-cache' \
// //      --header 'Content-Type: application/json' \
// //      --header 'accept: application/json' \
// //      --header 'x-api-key: caMog8SFc9Buto9AFMfwEQ'

// // const APOLLO_API_KEY = import.meta.env.VITE_APOLLO_API_KEY;  
// const BASE_URL = 'https://api.apollo.io/api/v1/contacts';
// export const createContact = async ({ firstName, company, email, website, message }) => {
//     try {
//       // URL-encode only the required fields, excluding the label
//       const formData = qs.stringify({
//         first_name: firstName,
//         organization_name: company,
//         email,
//         website_url: website,
//         message,
//       });
  
//       // Manually append the label as plain text
//       const apiUrl = `${BASE_URL}?${formData}&label_names[]=Website-users`;
  
//       console.log('Final URL:', apiUrl);
  
//       const response = await axios.post('https://api.apollo.io/api/v1/contacts?first_name=Ankit1&organization_name=Org_name&email=email%40google.com&website_url=website.com&label_names[]=Website-users', {}, {  // Empty body as data is in URL
//         headers: {
//           'Cache-Control': 'no-cache',
//           'Content-Type': 'application/json',
//           'accept': 'application/json',
//           'x-api-key': 'caMog8SFc9Buto9AFMfwEQ',
//         },
//       });
  
//       console.log('Response:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error creating contact:', error);
//       throw error;
//     }
//   };