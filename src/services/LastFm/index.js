const Key = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;

export default async function getPlaylist(genre) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&limit=15&api_key=${Key}&format=json`;
  return await fetch(url).then((response) => response.json());
}

