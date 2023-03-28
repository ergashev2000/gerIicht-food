import React, { useContext } from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { Sidebar } from '../../Page_Blog/Main/Main';
import { ReactComponent as Play } from '../../../images/video/Play.svg';
import { ReactComponent as Comment } from '../../../images/Blog_Details/icon1.svg';
import { ReactComponent as Like } from '../../../images/Blog_Details/icon2.svg';
import styles from './Blog.module.scss';
import { GerichtContext } from './../../Context';

export default function Blog () {
  const { openBlogDetail } = useContext(GerichtContext);
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className="imageTitle">
            <div className={styles.publication}>
              <p className={styles.data}>{openBlogDetail?.data}</p>
              <p className={styles.author}>{openBlogDetail?.author}</p>
            </div>
            <div className={styles.title}>
              <h4>{openBlogDetail?.title}</h4>
            </div>
            <div className={styles.image}>
              {isWebpSupported()
                ? <img src={openBlogDetail?.imgWebp} alt={openBlogDetail?.title} />
                : <img src={openBlogDetail?.img} alt={openBlogDetail?.title} />}
            </div>
          </div>
          <div className={styles.blogSidebar}>
            <div className={styles.content}>
              <div className={styles.contentText}>
                <div className={styles.text1}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>
                </div>
                <div className={styles.prepare}>
                  <div className={styles.prepareTitle}>
                    <h5>How to prepare your grill</h5>
                  </div>
                  <div className={styles.prepareText}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>
                  </div>
                  <ul className={styles.prepareList}>
                    <li className={styles.prepareItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li className={styles.prepareItem}> Tincidunt pharetra ut lobortis id.</li>
                    <li className={styles.prepareItem}>Commodo sit libero lacus a egestas penatibus pretium quis lorem. </li>
                  </ul>
                </div>
                <div className={styles.video}>
                  <div className={styles.play}>
                    <Play />
                  </div>
                </div>
                <div className={styles.text2}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>
                </div>
                <div className={styles.quote}>
                  <p>There is no love sincerer than the love of food.</p>
                </div>
                <div className={styles.textImageWrapper}>
                  <div className={styles.imageContent}>
                    <div className={styles.ICTitle}>
                      <h5>How to care for your grill</h5>
                    </div>
                    <div className={styles.ICText}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin cidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem.</p>
                    </div>
                    <ul className={styles.ICList}>
                      <li className={styles.ICItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li className={styles.ICItem}>Tincidunt pharetra ut lobortis id.</li>
                      <li className={styles.ICItem}>Commodo sit libero lacus a egestas penatibus.</li>
                    </ul>
                  </div>
                  <div className={styles.imageImg}>
                    {isWebpSupported()
                      ? <img src="../../../images/Blog_Details/01.webp" alt="How to care" />
                      : <img src="../../../images/Blog_Details/01.jpg" alt="How to care" />}
                  </div>
                </div>
                <div className={styles.text3}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>
                </div>
              </div>
              <div className={styles.contentActions}>
                <div className={styles.tags}>
                  <p className={styles.tag}>#Grilling</p>
                  <p className={styles.tag}>#Outdoors</p>
                  <p className={styles.tag}>#Cooking</p>
                </div>
                <div className={styles.actions}>
                  <div className={styles.action}>
                    <div className={styles.actionIcon}>
                      <Comment />
                    </div>
                    <div className={styles.actionText}>Comment</div>
                  </div>
                  <div className={styles.action}>
                    <div className={styles.actionIcon}>
                      <Like />
                    </div>
                    <div className={styles.actionText}>Like</div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
