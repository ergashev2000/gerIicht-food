import React, { forwardRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from '../../Title/Title';
import Button from '../../Button/Button';
import { contentCards } from '../../TextsDB';
import styles from './Blog.module.scss';
import { GerichtContext } from './../../Context';

const animation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 }
  })
};

export default function Blog () {
  const { setOpenBlogDetail } = useContext(GerichtContext);
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <Title text="Blogs" title="Gerícht updates" />
          <div className={styles.content}>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0, once: true }}
              className={styles.cardsList}>
              {contentCards.map((el, index) =>
                <MCardItem
                  custom={index + 1}
                  variants={animation}
                  key={Math.random() * 10}
                  img={el.img}
                  imgWebp={el.imgWebp}
                  data={el.data}
                  author={el.author}
                  title={el.title}
                  text={el.text}
                  link={el.link}
                  card={el}
                  setOpenBlogDetail={setOpenBlogDetail}
                />)}
            </motion.ul>
          </div>
          <Button text="View More" link="/blog" />
        </div>
      </div>
    </section>
  );
}

const CardItem = forwardRef(({ title, text, img, imgWebp, data, author, link, card, setOpenBlogDetail }, ref) => (
  <li className={styles.cardItem} ref={ref}>
    <div className={styles.itemImg}>
      {isWebpSupported()
        ? <img src={imgWebp} alt={title} />
        : <img src={img} alt={title} />}
    </div>
    <div className={styles.itemContent}>
      <div className={styles.itemPublication}>
        <p className={styles.publicationData}>{data}</p>
        <p className={styles.publicationAuthor}>{author}</p>
      </div>
      <div className={styles.itemTitle}>
        <h5>{title}</h5>
      </div>
      <div className={styles.itemText}>
        <p>{text}</p>
      </div>
      <div className={styles.itemLink}>
        <Link
          onClick={() => setOpenBlogDetail(card)}
          to="blog/blog_detail"
        >{link}
        </Link>
      </div>
    </div>
  </li>
));

CardItem.displayName = 'CardItem';

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgWebp: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
  setOpenBlogDetail: PropTypes.func.isRequired
};

const MCardItem = motion(CardItem);
