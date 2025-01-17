import { useEffect, useLayoutEffect, useState } from "react";
import {
  FacebookShare,
  LinkedinShare,
  RedditShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-kit";

import "./styles.css";

export default function ShareButtons({url, title}) {

  const borderRadius = 8;
  const size = 48;

  return (
    <div className="share-buttons">

      <h1>{title}</h1>

      <br></br>
      <h3>Compartir</h3>
      <br></br>
      <FacebookShare
        url={url}
        quote={title}
        borderRadius={borderRadius}
        size={size}
        className="cosa"
      />

      <TwitterShare
        url={url}
        title={title}
        borderRadius={borderRadius}
        size={size}
      />

      <LinkedinShare
        url={url}
        blankTarget={true}
        borderRadius={borderRadius}
        size={size}
      />

      <WhatsappShare
        url={url}
        title={title}
        separator=":: "
        blankTarget={true}
        borderRadius={borderRadius}
        size={size}
      />

      <TelegramShare url={url} borderRadius={borderRadius} size={size} />

      <RedditShare url={url} borderRadius={borderRadius} size={size} />

    </div>
  );
}
