import React from 'react';
import './styles.css';
import { Navigation } from '../Sidebar/components/Navigation/index';
import { Library } from '../Sidebar/components/Library/index';

const Sidebar = () => {
    return(
        <div className="sidebar">
      <Navigation />
      <Library />

      </div>

    )
}
export default Sidebar;