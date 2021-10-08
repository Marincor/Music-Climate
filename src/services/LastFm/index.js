const Key = process.env.NEXT_PUBLIC_PUBLISHABLE_KEY;

export default async function getPlaylist(genre) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&limit=15&api_key=${Key}&format=json`;
  return await fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "text/plain"
    }}).then((response) => response.json());
}
