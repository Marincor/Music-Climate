export default function changeGenre(temperature) {
  let currentGenre = "";

  if (temperature > 32) {
    return (currentGenre = "Rock");
  }
  if (temperature < 32 && temperature > 24) {
    return (currentGenre = "Pop");
  }

  if (temperature < 24 && temperature > 16) {
    return (currentGenre = "Classical");
  } else if (temperature < 16) {
    return (currentGenre = "Lo-fi");
  } else {
    return (currentGenre = "MPB");
  }

 
}
