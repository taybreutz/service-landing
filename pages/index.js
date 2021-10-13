import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import ServiceButtons from "../components/serviceButtons";

function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <ServiceButtons />
      <Footer />
    </>
  );
}

export default HomePage;
