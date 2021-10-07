import animationLoading from '../../../../public/assets/lotties/loadingBars.json';
import animationcities from '../../../../public/assets/lotties/cities.json'
import animationmusic from '../../../../public/assets/lotties/music.json'


export  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  
export  const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationcities,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


export  const defaultOption3 = {
  loop: true,
  autoplay: true,
  animationData: animationmusic,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};