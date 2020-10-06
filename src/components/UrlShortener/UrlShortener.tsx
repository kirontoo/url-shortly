import React, { useState, useEffect } from 'react';
import './UrlShortener.scss'

import { Button } from 'components/Button';
import { ShortUrl } from 'components/ShortUrl';

interface ShortUrlType {
  url: string;
  hashid: string;
  created_at: string;
}

export const UrlShortener = () => {
  const [ urlInput, setUrlInput ] = useState<string>( '' );
  const [ invalidUrl, setInvalidUrl ] = useState<boolean>( false );

  // all urls that have been shortened
  const [ shortendUrls, setShortendUrls ] = useState< ShortUrlType[] >( [] );

  const API_URL = 'https://rel.ink/api/links/';
  const BASE_URL = 'https://rel.ink/';
  const LOCAL_STORAGE_KEY = 'shortendUrls';

  // regex for valid website links
  let urlRegex =/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

  useEffect( () => {
    // grab previously shortend urls from local storage
    setShortendUrls( getUrlsFromStorage() );
  }, []);

  // check for valid url links
  const isValidUrl = ( url: string ): boolean => urlRegex.test( url );

  // grab data from local storage and parse into an array
  const getUrlsFromStorage = () => JSON.parse( localStorage.getItem( LOCAL_STORAGE_KEY )! );

  const handleOnInputChange = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
    // set urlInput state
    setUrlInput( event.target.value );
    // test if url is valid
    setInvalidUrl( !isValidUrl( event.target.value ) );
  }

  const createShortUrl = async (): Promise<void> => {
    let requestData = {
      url: urlInput
    };

    // API request
    let response = await fetch( API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify( requestData )
    });

    let result = await response.json();

    // add to list of shortened urls
    setShortendUrls(  [ ...shortendUrls, result ] );

    // add to local storage
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( [ ...shortendUrls, result ] ));
  }

  return (
    <div className="url-shortener">
      <div className="url-shortener__container">
        <div className="url-shortener__form">
          <div className="url-shortener__input-container">

            <input 
              className="url-shortener__link-Error"
              onChange={ handleOnInputChange }
              placeholder="Shorten a link here..."
              type="text"
              name="url-link"
              id="url-link"/>

            <span 
              className="url-shortener__error"
              style={ ( invalidUrl ) ? { "display": "block" } : {} }
              >Please add a link</span>

          </div>
          <Button className="btn-square" type="button" onClick={ createShortUrl }>Shorten It!</Button>
        </div>
      </div>
      <div className="url-shortener__short-urls">
        {
          shortendUrls.map( ( shortUrl ) => <ShortUrl key={ shortUrl.hashid } oldUrl={ shortUrl.url } shortUrl={ BASE_URL + shortUrl.hashid }/> )
        }
      </div>
    </div>
  );
}
