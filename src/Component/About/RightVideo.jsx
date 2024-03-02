import styles from './RightVideo.module.css'

import AboutVideo from "../../assets/About Video.mp4";

function RightVideo() {
  return (
    <div className={styles.rightVideoClass}>
       <video autoPlay loop muted>
        <source src={AboutVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default RightVideo;
