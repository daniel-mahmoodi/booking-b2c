import React from 'react'

const ArticleTags = () => {
  return (
     <div className="article-full__bottom" id="article-bottom">
        <div className="article-full__tags">
          <ul className="tags-list">
            <li>
              <a href="#!"> ایپسوم </a>
            </li>
            <li>
              <a href="#!">لورم ایپسوم متن </a>
            </li>
            <li>
              <a href="#!">لورم ایپسوم </a>
            </li>
          </ul>
        </div>
        <div className="article-full__share">
          <a className="share-link" href="#!">
            <i className="icon-share"></i>
            <span>اشتراک گذاری</span>
          </a>
        </div>
      </div>
  )
}

export default ArticleTags