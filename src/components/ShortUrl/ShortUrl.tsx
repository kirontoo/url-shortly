import React from 'react';
import './ShortUrl.scss';

import { Button } from 'components/Button';

interface ShortUrlProps {
  oldUrl: string;
  shortUrl: string;
}

export const ShortUrl: React.FC< ShortUrlProps > = ({ oldUrl, shortUrl }) => {
  // TODO: state for copied link
  // TODO: put link into copy/paste register on clik

  const addToClipboard = () => {
  }

  return (
    <div className="short-url">
      <div className="short-url__container">
        <p className="short-url__link">
          {
            ( oldUrl.length > 60 ) ? oldUrl.trim().slice( 0, 60 ).concat( "..." ) : oldUrl
          }
        </p>
        <div className="short-url__short-link-container">
          <p className="short-url__short-link">{ shortUrl }</p>
          <Button onClick={ addToClipboard } className="short-url__copy btn-square">Copy</Button>
        </div>
      </div>
    </div>
  );
};
