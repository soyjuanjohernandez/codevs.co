import { useEffect, useState } from "react";
import {
  FacebookShare,
  LinkedinShare,
  RedditShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-kit";

import "./styles.css";

export default function ShareButtons() {
  const [info, setInfo] = useState({
    url: "",
    title: "",
  });

  useEffect(() => {
    const url = window.location.href;
    const title = document.title;
    setInfo({ url, title });

  }, []);

  const borderRadius = 8;
  const size = 48;

  return (
    <div className="share-buttons">
      <br></br>
      <h3>Compartir</h3>
      <br></br>
      <FacebookShare
        url={info.url}
        quote={info.title}
        borderRadius={borderRadius}
        size={size}
        className="cosa"
      />

      <TwitterShare
        url={info.url}
        title={info.title}
        borderRadius={borderRadius}
        size={size}
      />

      <LinkedinShare
        url={info.url}
        blankTarget={true}
        borderRadius={borderRadius}
        size={size}
      />

      <WhatsappShare
        url={info.url}
        title={info.title}
        separator=":: "
        blankTarget={true}
        borderRadius={borderRadius}
        size={size}
      />

      <TelegramShare url={info.url} borderRadius={borderRadius} size={size} />

      <RedditShare url={info.url} borderRadius={borderRadius} size={size} />

    </div>
  );
}
