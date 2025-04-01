import { useEffect } from "react";
import ApplicationProcess from "./applicationProcess";
import JoinUsHero from "./JoinUsHero";
// import PhotoGallery from "../../components/PhotoGallery";



const JoinUs = () => {
     useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },[]);
    return (
        <div className="bg-white min-h-screen">
           <JoinUsHero />
           <ApplicationProcess />
           {/* <PhotoGallery /> */}
        </div>
    );
}

export default JoinUs;