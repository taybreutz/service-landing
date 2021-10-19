import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ServiceButtons from "../components/serviceButtons";

const Request = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ServiceButtons />
      <Footer />
    </>
  );
};

export default Request;
