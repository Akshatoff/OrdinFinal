
import React, { useEffect, useRef } from "react";


export const Preloader = () =>{ 
    return (
    
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black z-50">
          <video src="/web cover.mp4" typeof="video/quicktime" className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black z-50 "  autoPlay muted></video>
        </div>
        
      );

}