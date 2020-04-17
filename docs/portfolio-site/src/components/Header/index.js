import React from 'react';
import headerImage from './portfolioBackground1.png';
import './header.css'; 

function Header() {
  return (
    React.createElement("div", {
      style: {
      }, 
      className: "header-div" },
    
    React.createElement("div", { style: {
      paddingBottom: 800 / 1200 * 100 + '%'} 
    }),

    React.createElement("img", {
      src: headerImage, 
      className: "responsive-image"
    }),

    React.createElement("div", {
      className: "header-text"
    }), 

    React.createElement("h1", "test")));
}

export default Header;