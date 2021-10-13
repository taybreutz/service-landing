import Link from "next/link";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/request">Service Request</Link>
      </li>
      <li>
        <Link href="/contract">Preventative Maintenance</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
};

export default Navbar;
