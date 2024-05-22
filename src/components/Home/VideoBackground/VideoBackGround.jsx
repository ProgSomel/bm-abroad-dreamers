import { useRef } from "react";


const VideoBackGround = () => {
    const videoRef = useRef(null);

    const handleHover = () => {
      const video = videoRef.current;
      if (video) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    };

    return (
        <div className=" mt-24 ">
      <video
        ref={videoRef}
        className="rounded-[24px] shadow-lg  w-full h-[400px] object-cover"
        autoPlay
        muted
        loop
       
        
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <source src="https://cdn.sanity.io/files/s37229yn/production/84c74536d7e5726bad7766a553886d262b97ede5.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
    );
};


VideoBackGround.propTypes = {

};


export default VideoBackGround;
