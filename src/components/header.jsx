import React from 'react';
import HowTo from './howto';

export default function(props) {
  return (
    <header>
      <h1>Annotated Meals</h1>
      <p>
        Did you see a recipe on YouTube that you'd like to make, but don't want to constantly pause the video while you're cooking? Annotated Meals lets you quickly type up a recipe from a video.
      </p>
      <HowTo />
      <p>
        For a quick test, try pasting this link <strong>https://www.youtube.com/watch?v=bjmYkPkjnVo</strong> into the "YouTube URL..." input below.
      </p>
    </header> 
  );
}