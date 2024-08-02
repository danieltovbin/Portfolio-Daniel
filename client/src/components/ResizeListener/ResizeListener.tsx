import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setIsSmallScreen } from "../../features/screen/screenSlice";

const ResizeListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsSmallScreen(window.innerWidth <= 768));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return null;
};

export default ResizeListener;
