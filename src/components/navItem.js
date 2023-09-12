import React from 'react';

class NavItem extends React.Component {
  render() {
    const { link, aClass, iClass, text } = this.props;

    return (
      <li>
        <a href={link} className={aClass}>
          <i className={iClass}></i> <span>{text}</span>
        </a>
      </li>
    );
  }
}

export default NavItem;