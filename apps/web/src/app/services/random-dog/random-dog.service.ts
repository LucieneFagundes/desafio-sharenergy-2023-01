import axios from 'axios';

export async function getRandomDogRequest() {
  const dog = await axios.get('https://random.dog/woof.json?filter=mp4,webm');
  return dog.data.url;
}
