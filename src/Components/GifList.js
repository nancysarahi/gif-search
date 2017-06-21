import React from 'react';
import Gif from './Gif';

const GifList = props => {

  const results = props.data;

// the api itself determines an id for every gif, will be using that as our key
  var gifs = results.map(gif =>
    <Gif url={gif.images.fixed_height.url} key={ gif.id } />
  );

  return(
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}

export default GifList;
