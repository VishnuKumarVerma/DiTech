import PropTypes from "prop-types";
import styles from "./Profile.module.css";

function Profile(props) {
  return (
    <div className={styles.profileClass}>
      <img src={props.commentProfileImg} alt="" />
      <div>
        <h3>{props.commentName}</h3>
        <h4>{props.commentBio}</h4>
      </div>
    </div>
  );
}

Profile.propTypes = {
  commentProfileImg: PropTypes.string.isRequired,
  commentName: PropTypes.string.isRequired,
  commentBio: PropTypes.shape({
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
