import BackToTopButton from "./components/BackToTop";
import BasicSummary from "./components/BasicSummary";
import CoRelation from "./components/CoRelation";
import CountSummary from "./components/CountSummary";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import TopData from "./components/TopData";

export default function App() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 border  border-r-2 mr-12">
        <SideBar />
      </div>
      <div className="col-span-10 mr-[70px] ">
        <NavBar />

        <div className="border border-gray-300 border-spacing-6 rounded-md p-12 mt-[150px]">
          <BasicSummary />
        </div>
        <div className="">
          <CountSummary />
          <CoRelation />
          <TopData />
        </div>
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
}
