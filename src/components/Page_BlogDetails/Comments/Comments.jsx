import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Comments as Comm } from '../../TextsDB';
import styles from './Comments.module.scss';

export default function Comments () {
  const showForm = (comment) => {
    setName(comment.name);
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState('Nora Martin');
  const [openForm, setOpenForm] = useState(true);

  return (
    <section className={styles.comments}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <h4>Comment({Comm.length})</h4>
          </div>
          <div className={styles.wrapperComments}>
            {Comm.map((comment, index) =>
              <Comment
                key={index}
                comment={comment}
                showForm={showForm}
                {...comment} />
            )}
          </div>
          {openForm && (
            <form action="/" className={styles.replyComment}>
              <div className={styles.formTitle}>
                <span className={styles.replyName}>Reply to {name}</span>
                <span className={styles.cancelReply} onClick={closeForm}>Cancel Reply</span>
              </div>
              <div className={styles.message}>
                <textarea name="message" rows="4" placeholder="Hi there! I love your blog...."></textarea>
              </div>
              <button type="submit" className="btn__submit" onClick={(e) => preventDefault(e)}>Submit</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const Comment = ({ comment, showForm, photo, photoWebp, name, data, text, reply }) => (
  <div className={reply ? `${styles.comment} ${styles.activeReply}` : `${styles.comment}`}>
    <div className={styles.img}>
      {isWebpSupported()
        ? <img src={photoWebp} alt={name} />
        : <img src={photo} alt={name} />}
    </div>
    <div className={styles.content}>
      <div className={styles.wrapperName}>
        <p className={styles.name}>{name}</p>
        <p className={styles.reply} onClick={() => showForm(comment)}>Reply</p>
      </div>
      <div className={styles.data}>
        <p>{data}</p>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  photo: PropTypes.string.isRequired,
  photoWebp: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  reply: PropTypes.bool.isRequired,
  comment: PropTypes.object.isRequired,
  showForm: PropTypes.func.isRequired
};
