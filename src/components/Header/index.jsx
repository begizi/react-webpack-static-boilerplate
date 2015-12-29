import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div id="header" className="header headroom slideDown headroom--top">
        <div className="header-wrap">
          <div className="inner">
            <div className="logo">
              <a data-jump="/" href="/">
                <svg id="mojo-logo" width="62px" height="55px" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xmlSpace="preserve">
                  <path id="mojo-hex" fill="#FFFFFF" d="M22.4,2H7.6L0,15.5L7.6,29h14.8L30,15.5L22.4,2z M22,22h-4v-5l0.9-1L15,17.9L11.2,16l0.8,1v5H8V10h2.7  l4.4,4.1l4.4-4.1H22V22z"></path>
                  <polyline id="mojo-m" fill="#FFFFFF" points="18,22 18,17 18.9,16 18.9,16 15,17.9 11.2,16 11.2,16 12,17 12,22 8,22 8,10 10.7,10 15.1,14.1   19.5,10 22,10 22,22 "></polyline>
                </svg>
              </a>
            </div>
            <div className="menu">
              <div className="hamburger"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
