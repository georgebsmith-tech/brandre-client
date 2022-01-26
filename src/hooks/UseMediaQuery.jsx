import { useEffect, useState } from "react";

const useMediaQuery = (minWidth) => {
  const [state, setState] = useState({
      isDesiredWidth:false
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      console.log('windowwidth', window.innerWidth)
      console.log('IT IS THE DESIRED',isDesiredWidth)
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth]);

    return state.isDesiredWidth;
};

export default useMediaQuery;