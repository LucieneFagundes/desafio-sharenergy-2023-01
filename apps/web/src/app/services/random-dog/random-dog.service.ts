import { api } from '../api';

export async function getRandomDogRequest() {
  const dog = await api.get('https://random.dog/woof.json?filter=mp4,webm');
  return dog.data.url;
}
