import Link from "next/link";

const TopHeader = () => {
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER;
  const message = process.env.NEXT_PUBLIC_MESSAGE;

  return (
    <div className="container mx-auto hidden xl:block px-40">
      <div className=" mx-auto flex justify-between py-2.5">
        <div>
          <nav>
            <ul className="flex gap-4 text-xs">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <p>My account</p>
                </Link>
              </li>
              <li>
                <Link href="/wishlist">
                  <p>Wishlist</p>
                </Link>
              </li>
              <li>
                {/* <Link href="#">
                                    <p>Order Tracking</p>
                                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <span className="text-xs mr-4">{message}</span>
          <span className="text-xs text-gray-300 mr-4">|</span>
          <span className="text-xs flex">
            Need help? Call Us:{" "}
            <p className="text-[#2bbef9] font-semibold ml-2">{contactNumber}</p>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TopHeader;
