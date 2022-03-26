import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    let fullVh = window.innerHeight
    pathname !== '/' && window.scrollTo(0, 0);
    pathname === '/' && window.scrollTo(0, fullVh);
  }, [pathname]);

  return null;
}