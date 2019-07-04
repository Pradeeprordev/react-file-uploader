import React from 'react';
import { UploaderPage } from './uploader/uploader_page';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <UploaderPage/>
      </div>
    );
  }
}
