import React, { useState, useEffect } from 'react';
import './UrlShortener.scss'

import { Button } from 'components/Button';
import { ShortUrl } from 'components/ShortUrl';

interface ShortUrlType {
    code: string,
    short_link: string,
    full_short_link: string,
    short_link2: string,
    full_short_link2: string,
    short_link3: string,
    full_short_link3: string,
    share_link: string,
    full_share_link: string,
    original_link: string
}

export const UrlShortener = () => {
  const [ urlInput, setUrlInput ] = useState<string>( '' );
  const [ invalidUrl, setInvalidUrl ] = useState<boolean>( false );

  // all urls that have been shortened
  const [ shortendUrls, setShortendUrls ] = useState< ShortUrlType[] >( [] );

  const API_URL = 'https://api.shrtco.de/v2/shorten';
  const LOCAL_STORAGE_KEY = 'shortendUrls';

  // regex for valid website links
  let urlRegex =/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

  useEffect( () => {
    // grab previously shortend urls from local storage
    if ( localStorage.getItem( LOCAL_STORAGE_KEY ) ) {
    setShortendUrls( getUrlsFromStorage() );
    }    
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
    try {
      // API request
      let response = await fetch( `${API_URL}?url=${urlInput}`, {
        mode: 'cors',
        method: 'POST',
      });

      let data = await response.json();

      // add to list of shortened urls
      setShortendUrls(  [ ...shortendUrls, data.result] );

      // add to local storage
      localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( [ ...shortendUrls, data.result ] ));

    } catch(err) {
      console.log(err)
    }
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
              >Please add a valid link</span>

          </div>
          <Button className="btn-square" type="button" onClick={ createShortUrl }>Shorten It!</Button>
        </div>
      </div>
      <div className="url-shortener__short-urls">
        {
          shortendUrls.map( ( shortUrl ) => <ShortUrl key={ shortUrl.code } oldUrl={ shortUrl.original_link } shortUrl={shortUrl.short_link}/> )
        }
      </div>
    </div>
  );
}
