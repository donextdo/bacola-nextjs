import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ crumbs }: any) => {
  return (
    <nav className="text-gray-500 text-[15px] flex flex-row font-ff-headings font-medium">
      {crumbs.map((crumb: any, index: any) => (
        <React.Fragment key={index}>
          {crumb.url ? (
            <Link href={crumb.url}>
              <p className="hover:text-gray-700">{crumb.title}</p>
            </Link>
          ) : (
            <p>{crumb.title}</p>
          )}
          {index < crumbs.length - 1 && <span className="mx-2">&gt;</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
