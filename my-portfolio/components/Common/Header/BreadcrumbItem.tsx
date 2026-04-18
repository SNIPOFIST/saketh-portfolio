import Link from "@/components/Shared/Link";
import cx from "classnames";
import { Fragment, ReactNode } from "react";

interface BreadcrumbItemProps {
  isRoot?: boolean;
  children: ReactNode;
  href: string;
  isCurrent?: boolean;
}

const BreadcrumbItem = ({
  isRoot,
  children,
  href,
  isCurrent,
}: BreadcrumbItemProps): JSX.Element => (
  <Fragment>
    {!isRoot && (
      <span aria-hidden="true" className="opacity-50">
        /
      </span>
    )}
    <li>
      <Link
        href={href}
        className={cx(
          isCurrent
            ? "font-pokemon text-[0.5rem] text-poke-yellow"
            : "font-pokemon text-[0.5rem] text-gray-400 hover:text-poke-yellow",
          "transition duration-200"
        )}
        aria-current={isCurrent ? "page" : "false"}
        noGradientUnderline
      >
        {children}
      </Link>
    </li>
  </Fragment>
);

export default BreadcrumbItem;
