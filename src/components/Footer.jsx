import { useEffect, useState } from "react";

function Footer() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    localStorage.setItem("ua", navigator.userAgent);
    localStorage.setItem("pf", navigator.platform);

    setInfo({
      ua: localStorage.getItem("ua"),
      pf: localStorage.getItem("pf")
    });
  }, []);

  return (
    <footer>
      <p>{info.ua}</p>
      <p>{info.pf}</p>
    </footer>
  );
}

export default Footer;