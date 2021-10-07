import Breezy from "../../../../public/assets/img/Breezy.png";
import Fair from "../../../../public/assets/img/Fair.png";
import MostlyCloudy from "../../../../public/assets/img/MostlyCloudy.png";
import PartlyCloudy from "../../../../public/assets/img/PartlyCloudy.png";
import Sunny from "../../../../public/assets/img/Sunny.png";
import Thunderstorms from "../../../../public/assets/img/Thunderstorms.png";

export default function currentIcon (condition)  {

    let icon = ""


  switch (condition) {
    case "Breezy":
       icon = Breezy;
    case "Fair":
       icon = Fair;
    case "Mostly Cloudy":
      icon = MostlyCloudy;
    case "Partly Cloudy":
      icon = PartlyCloudy;
    case "Sunny":
      icon = Sunny;
    case "Thunderstorms":
      icon = Thunderstorms;
      default: icon = MostlyCloudy
  }

return icon

};
