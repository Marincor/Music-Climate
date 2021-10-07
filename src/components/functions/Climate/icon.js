import Breezy from "../../../../public/assets/img/Breezy.svg";
import Fair from "../../../../public/assets/img/Fair.svg";
import MostlyCloudy from "../../../../public/assets/img/mostlyCloudy.svg";
import PartlyCloudy from "../../../../public/assets/img/partly-cloudy-.svg";
import Sunny from "../../../../public/assets/img/Sunny.svg";
import Thunderstorms from "../../../../public/assets/img/Thunderstorms.svg";

export default function currentIcon(condition) {
  let icon = "";

  if (condition === "Breezy") {
    return (icon = Breezy);
  }
  if (condition === "Fair") {
    return (icon = Fair);
  }
  if (condition === "Mostly Cloudy") {
    return (icon = MostlyCloudy);
  }
  if (condition === "Sunny") {
    return (icon = Sunny );
  }
  if (condition === "Partly Cloudy") {
    return (icon = PartlyCloudy);
  } else if (condition === "Thunderstorms") {
    return (icon = Thunderstorms);
  } else {
    return (icon = MostlyCloudy);
  }
}
