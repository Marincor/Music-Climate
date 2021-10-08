import Lottie from 'react-lottie';
import { defaultOptions } from './lottieConfig'
export default function EmptyList() {
   
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={200}
          width={400}
        />
      </div>
    );
  }