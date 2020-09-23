import React from 'react';

const backgroundImg = process.env.PUBLIC_URL + 'images/illustration-working.svg';

function Banner() {
  return (
    <div>
      Hello
      <img src={backgroundImg} alt=""/>
    </div>
  )
}

export default Banner;
