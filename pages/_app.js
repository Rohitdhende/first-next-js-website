import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    const handleRouteComplete = () => {
      setProgress(100);
    };
    const handleRouteStart = () => {
      setProgress(40);
    };
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.on("routeChangeStart", handleRouteStart);
    };
  }, [router.events]);

  return (
    <>
      <AppWrapper isNightMode>
        <LoadingBar
          color="#00FF00"
          waitingTime={300}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
