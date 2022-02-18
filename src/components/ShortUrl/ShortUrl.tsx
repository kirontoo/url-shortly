import React, { useState, useRef } from 'react';
import './ShortUrl.scss';
import useClippy from 'use-clippy';

import { Button } from 'components/Button';

interface ShortUrlProps {
  oldUrl: string;
  shortUrl: string;
}

export const ShortUrl: React.FC< ShortUrlProps > = ({ oldUrl, shortUrl }) => {

  const [ copied, setCopied ] = useState< boolean >( false );
  const urlToCopyRef = useRef< null | HTMLParagraphElement >( null );
  const [ clipboard, setClipboard ] = useClippy();

  const addToClipboard = () => {
    setClipboard( shortUrl );
    setCopied( true );
    setTimeout( () => setCopied( false ), 1000 );
  }

  return (
    <li className="short-url">
      <span className="short-url__link">
        {
        ( oldUrl.length > 55 ) ? oldUrl.trim().slice( 0, 55 ).concat( "..." ) : oldUrl
      }
      </span>
      <span ref={ urlToCopyRef } className="short-url__short-link">{ shortUrl }</span>
      <Button onClick={ addToClipboard } className={ `short-url__copy btn-square ${( copied ) ? "btn-active" : ""}`  }>
        { copied ? "Copied!" : "Copy" }
      </Button>
    </li>
  );
};
