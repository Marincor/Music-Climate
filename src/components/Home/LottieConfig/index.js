import animationLoading from '../../../../public/assets/lotties/loadingBars.json';
import animationCities from '../../../../public/assets/lotties/cities.json'
import animationMusic from '../../../../public/assets/lotties/music.json'
import animationGit from '../../../../public/assets/lotties/git.json'


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
  animationData: animationCities,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


export  const defaultOption3 = {
  loop: true,
  autoplay: true,
  animationData: animationMusic,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


export  const defaultOption4 = {
  loop: true,
  autoplay: true,
  animationData: animationGit,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};