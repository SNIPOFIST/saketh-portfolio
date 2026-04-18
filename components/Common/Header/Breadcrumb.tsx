import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { capitalize } from "@/utils/helpers";

import BreadcrumbItem from "./BreadcrumbItem";

interface IBreadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumb = (): JSX.Element => {
  const { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    const path = asPath.replace(/#.*/, "");

    const pathWithoutQuery = path.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();
    pathArray = pathArray.filter((p) => p !== "");

    const crumbs = pathArray.map((p, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: capitalize(p),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(crumbs);
  }, [asPath]);

  return (
    <ol aria-label="breadcrumb" className="flex space-x-2">
      <BreadcrumbItem href="/" isRoot>
        ~
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
            {label}
          </BreadcrumbItem>
        ))}
    </ol>
  );
};

export default Breadcrumb;
