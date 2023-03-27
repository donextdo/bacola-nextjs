import Link from "next/link";

const TopHeader = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-between py-2.5">
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
                                <Link href="#">
                                    <p>Wishlist</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <p>Order Tracking</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>

                </div>
            </div>
            <hr />
        </div>
    );
}

export default TopHeader;