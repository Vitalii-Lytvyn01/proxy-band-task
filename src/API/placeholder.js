const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getUsers() {
  return await fetch(BASE_URL + `/users`);
}

export async function getPosts(id) {
  return await fetch(BASE_URL + `/posts?userId=${id}`);
}

export async function getAlbums(id) {
  return await fetch(BASE_URL + `/albums?userId=${id}`);
}