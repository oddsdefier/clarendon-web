import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CustomBreadcrumbProps {
  currentPage: string;
  secondTitle?: string;
  secondLink?: string;
}

export default function CustomBreadcrumb({
  currentPage,
  secondTitle = "",
  secondLink = "",
}: CustomBreadcrumbProps) {
  return (
    <Breadcrumb className="bg-white px-6 py-5 lg:px-0">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={secondLink}>{secondTitle}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
