import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home light-motif">
        <div className="page-contents">
          <div className="hero video-wrap">
            <div className="video-full-bleed">
              <video loop="loop" autoPlay="autoplay" muted="muted" poster="https://mojotech-static.s3.amazonaws.com/m4/video/broll/mojo-hero-ff.jpg">
                <source src="https://mojotech-static.s3.amazonaws.com/m4/video/broll/mojo-hero-loop.mp4" type="video/mp4" />
                <source src="https://mojotech-static.s3.amazonaws.com/m4/video/broll/mojo-hero-loop.webmsd.webm" type="video/webm" />
                <source src="https://mojotech-static.s3.amazonaws.com/m4/video/broll/mojo-hero-loop.oggtheora.ogv" type="video/ogg" />
              </video>
            </div>
            <div className="inner">
              <h1 className="hero-headline">We build software that grows businesses.</h1>
              <div className="button-play"></div>
              <span className="small-headline button-label">What our clients are saying</span>
            </div>
          </div>
          <div className="content">
            <div className="our-background clearfix">
              <div className="inner">
                <div className="col-center">
                  <div className="who-we-are">
                    <h3 id="who-we-are">Who we are</h3>
                    <p>We are an exceptional team of software engineers, designers, and product managers. Our rigorous engineering standards allow us to turn complex software problems into elegant and scalable solutions. Our meticulous designs increase engagement and delight users while our diligent product management ensures we achieve our clients’ goals on time and on budget.</p>
                    <p>We love working with ambitious clients to turn their ideas into successful web and mobile applications.</p>
                  </div>
                  <div className="our-press">
                    <h3 className="small-headline">Where you've seen our work</h3>
                    <img src="https://mojotech-static.s3.amazonaws.com/m4/press-logos/press-logos.png" alt="Mashable, The Next Web, The New York Times, TechCrunch" className="press-logos" />
                  </div>
                </div>
              </div>
            </div>
            <a data-jump="/work/groove" href="/work/groove" className="media-link">
              <img src="https://mojotech-static.s3.amazonaws.com/m4/groove-featured.jpg" srcSet="https://mojotech-static.s3.amazonaws.com/m4/groove-featured.jpg 1200w, https://mojotech-static.s3.amazonaws.com/m4/groove-featured-small.jpg 800w, https://mojotech-static.s3.amazonaws.com/m4/groove-featured-xsmall.jpg 500w" sizes="100vw" alt="Groove - featured work item" className="full-bleed" />
            </a>
          <div className="featured-work-item">
            <div className="inner">
              <div className="col-center work-item-info">
                <h3 className="work-title">Groove</h3>
                <div className="work-desc">Simple Help Desk Software</div>
                <a data-jump="/work/groove" href="/work/groove" className="button button-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
