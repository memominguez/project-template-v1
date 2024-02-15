/* eslint-disable no-unused-vars */
import TopBanner from "../components/top-banner/TopBanner";
import ServicesListLong from "../components/services-list/ServicesListLong";
import SomeWorksMap from "../components/some-of-our-works/SomeWorksMap"
import MakeTogether from "../components/make-together/MakeTogether";
import MasterTouch from "../components/master-touch/MasterTouch";
import Slider from "../components/slider/Slider";

function ServicesPage() {
  return (
    <>
      <TopBanner title="Services" note="Home / Services" />
      <ServicesListLong />
      <SomeWorksMap longList={false} />
      <MakeTogether />
      <MasterTouch />
      <Slider />
    </>
  );
}

export default ServicesPage;
