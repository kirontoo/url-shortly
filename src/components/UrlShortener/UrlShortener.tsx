import React, { useState } from 'react';
import './UrlShortener.scss'

import { Button } from 'components/Button';

export const UrlShortener = () => {
  const [ urlInput, setUrlInput ] = useState( '' );
  
  const handleOnInputChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setUrlInput( event.target.value );
  }

  const createShortUrl = () => {
    // TODO: shorten url with api
  }

  return (
    <div className="url-shortener">
      <div className="url-shortener__container">
        <div className="url-shortener__form">
        <input onChange={ handleOnInputChange } placeholder="Shorten a link here..." type="text" name="url-link" id="url-link"/>
        <Button className="btn-square" type="button">Shorten It!</Button>
        </div>
      </div>
      { /* TODO: urls that have been shortened by api */ }
    </div>
  );
}
