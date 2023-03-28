import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Link } from 'react-router-dom';
import Facebook from '../../../images/icon_facebook.svg';
import Twitter from '../../../images/icon_twitter.svg';
import Instagram from '../../../images/icon_instagram.svg';
import { cards } from '../../TextsDB';
import Button from './../../Button/Button';
import styles from './Main.module.scss';
import { GerichtContext } from './../../Context';

export default function Main () {
  const { setOpenBlogDetail, location } = useContext(GerichtContext);
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <section className={styles.blogs}>
            <div className={styles.cards}>
              {cards.map((card, index) =>
                <BlogCard
                  key={index}
                  setOpenBlogDetail={setOpenBlogDetail}
                  location={location}
                  card={card}
                  {...card}
                />)}
            </div>
            <div
              onClick={() => setOpenBlogDetail(cards[0])}
              className={styles.button}>
              <Button
                text="View More"
                link="blog_detail" />
            </div>
          </section>
          <Sidebar
            setOpenBlogDetail={setOpenBlogDetail}
            location={location}
          />
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ setOpenBlogDetail, location, card, img, imgWebp, title, text, link, data, author }) => (
  <div className={styles.cardWrapper}>
    <div className={styles.image}>
      {isWebpSupported()
        ? <img src={imgWebp} alt={title} />
        : <img src={img} alt={title} />}
    </div>
    <div className={styles.content}>
      <div className={styles.publication}>
        <p className={styles.data}>{data}</p>
        <p className={styles.author}>{author}</p>
      </div>
      <div className={styles.title}>
        <h4>{title}</h4>
      </div>
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.link}>
        {
          location?.pathname === '/blog'
            ? <Link onClick={() => setOpenBlogDetail(card)} to="blog_detail">{link}</Link>
            : <p>{link}</p>
        }
      </div>
    </div>
  </div>
);

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  imgWebp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
  setOpenBlogDetail: PropTypes.func,
  location: PropTypes.object
};

export const Sidebar = ({ setOpenBlogDetail, location }) => (
  <aside className={styles.sidebar}>
    <div className={styles.search}>
      <div className={styles.searchTitle}>
        <h4 className={styles.sidebarTitle}>Search Page</h4>
      </div>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Example" />
      </div>
    </div>
    <div className={styles.categories}>
      <div className={styles.categoriesTitle}>
        <h4 className={styles.sidebarTitle}>All Categories</h4>
      </div>
      <div className={styles.categoriesContent}>
        <ul className={styles.contentList}>
          <li className={styles.contentItem}>
            <p className={styles.itemText}>Photography</p>
            <span></span>
            <p>(1)</p>
          </li>
          <li className={styles.contentItem}>
            <p className={styles.itemText}>Baking</p>
            <span></span>
            <p>(2)</p>
          </li>
          <li className={styles.contentItem}>
            <p className={styles.itemText}>Cooking Tips</p>
            <span></span>
            <p>(3)</p>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.top}>
      <div className={styles.topTitle}>
        <h4 className={styles.sidebarTitle}>Our Latest Posts</h4>
      </div>
      <BlogCard
        setOpenBlogDetail={setOpenBlogDetail}
        location={location}
        card={cards[1]}
        {...cards[1]}
      />
    </div>
    <div className={styles.tags}>
      <div className={styles.tagsTitle}>
        <h4 className={styles.sidebarTitle}>Related Tags</h4>
      </div>
      <ul className={styles.tagsListFirst}>
        <li className={styles.tagItemFirst}>Grilling</li>
        <li className={styles.tagItemFirst}>Cooking</li>
        <li className={styles.tagItemFirst}>Baking</li>
      </ul>
      <ul className={styles.tagsListSecond}>
        <li className={styles.tagItemSecond}>Cuisines</li>
        <li className={styles.tagItemSecond}>Chef</li>
        <li className={styles.tagItemSecond}>Alcohol Mixing</li>
      </ul>
    </div>
    <div className={styles.share}>
      <div className={styles.shareTitle}>
        <h4 className={styles.sidebarTitle}>Share</h4>
      </div>
      <div className={styles.shareIcons}>
        <div className={styles.facebook}>
          <img src={Facebook} alt="Facebook" />
        </div>
        <div className={styles.twitter}>
          <img src={Twitter} alt="Twitter" />
        </div>
        <div className={styles.instagram}>
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>
    </div>
  </aside>
);

Sidebar.propTypes = {
  setOpenBlogDetail: PropTypes.func,
  location: PropTypes.object
};
