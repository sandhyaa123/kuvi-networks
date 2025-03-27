import axios from 'axios';
import qs from 'qs';


// curl --request POST \
//             https://api.apollo.io/api/v1/contacts?first_name=Sandhya&organization_name=ovik&email=sandhyakumari3122003%40gmail.com&website_url=http%3A%2F%2Fovik.com&message=hii%2C%20I%20am%20sandhya.&label_names[]=Website-users
          
//             https://api.apollo.io/api/v1/contacts?first_name=Ankit1&organization_name=Org_name&email=email%40google.com&website_url=website.com&label_names[]=Website-users&message=message
//      --url 'https://api.apollo.io/api/v1/contacts?first_name=Ankit1&organization_name=Org_name&email=email%40google.com&website_url=website.com&label_names[]=Website-users&message=message' \
//      --header 'Cache-Control: no-cache' \
//      --header 'Content-Type: application/json' \
//      --header 'accept: application/json' \
//      --header 'x-api-key: caMog8SFc9Buto9AFMfwEQ'
const BASE_URL = '/api/v1/contacts';  // Use the proxy path

export const createContact = async (formData) => {
  try {
    const data = {
      first_name: formData?.firstName,
      email: formData?.email,
      message: formData?.message,
    };

    if (formData?.lastName) {
      data.last_name = formData?.lastName;
    }
    if (formData?.company) {
      data.organization_name = formData?.company;
    }
    if (formData?.website) {
      data.website_url = formData?.website;
    }

    const apiData = qs.stringify(data);
    const apiUrl = `${BASE_URL}?${apiData}&label_names[]=Website-users`;

    const response = await axios.post(apiUrl, {}, {
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'x-api-key': 'caMog8SFc9Buto9AFMfwEQ',
      },
    });

    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};
