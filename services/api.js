import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

async function getUser() {
  try {
    const response = await axios.get(
      'http://localhost:3000/users',
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());



