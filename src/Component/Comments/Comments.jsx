import CommentElements from "./CommentElements";
import styles from "./Comments.module.css";

function Comments() {
  return (
    <div className={styles.mainCommentsClass}>
      <CommentElements />
    </div>
  );
}

export default Comments;
