import axios from 'axios';
import qs from 'qs';

const BASE_URL = '/api/v1/contacts'; 
export const createContact = async (formData) => {
  try {
    const data = {
      first_name: formData?.firstName,
      email: formData?.email,
      present_raw_address: formData?.message,
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
