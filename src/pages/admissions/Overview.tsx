import React, { useRef } from "react";
import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
// import { Construction } from "lucide-react";

const Overview: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  
  const h1Style = "mb-3 border-b pb-2 text-2xl font-bold text-clarc-blue";
  const h2Style = "mb-3 text-xl font-semibold text-clarc-blue/90";

  const mainContent = (
    <div className="mx-auto max-w-4xl py-5 pb-24 lg:pb-48">
      <h1 className={h1Style}>Guidelines</h1>
      <p className="mb-2 leading-relaxed text-gray-600">
        In order to be an enrolled student at Clarendon, the following
        documentary requirements must be met:
      </p>
      <p className="mb-4 leading-relaxed text-gray-600">
        Candidates must submit a PSA copy of their birth certificate along with
        form 137, form 138 and a Good Moral certificate with the Registrar's
        office from where you will be directed to make the necessary payments
        for enrolment.
      </p>
      <h1 className={h1Style}>College Enrollment Process:</h1>
      <div className="space-y-6">
        <div>
          <h2 className={h2Style}>Step 1: Application</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>
              Application Form: Obtain an application form from the college's
              admissions office.
            </li>
            <li>
              Complete Application: Fill out the application form accurately and
              completely.
            </li>
            <li>
              Submit Documents: Gather required documents such as academic
              transcripts, identification, and any other specified materials.
            </li>
            <li>Application Fee: Pay the application fee, if applicable.</li>
          </ul>
        </div>
        <div>
          <h2 className={h2Style}>Step 2: Admission</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>
              Review Process: The college reviews your application and
              documents.
            </li>
            <li>
              Notification: Your application for admission will be reviewed and
              determined at the Registrar's Office.
            </li>
          </ul>
          <p className="mt-3 text-gray-600">
            If accepted, confirm your intention to enroll by the specified
            deadline.
          </p>
        </div>
        <div>
          <h2 className={h2Style}>Step 3: Enrollment</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>
              Orientation: Attend any orientation sessions scheduled by the
              college.
            </li>
            <li>
              Course Selection: Choose your courses for the upcoming semester,
              considering prerequisites and your academic plan.
            </li>
            <li>
              Registration: Register for courses online or in-person, following
              the college's instructions.
            </li>
            <li>
              Payment: Pay tuition and fees by the deadline using the specified
              payment methods.
            </li>
            <li>
              ID Card: Obtain your student ID card from the college's student
              affairs office.
            </li>
            <li>
              Finalize Enrollment: Ensure all enrollment steps are completed
              before the start of classes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-16"
    >
      <div className="px-6 md:px-2">{mainContent}</div>
    </div>
  );
  return (
    <PageLayout
      mainContent={pageContent}
      sidebarContent={
        <>
          <OnThisPage
            mainContentRef={mainContentRef}
            navItems={navItems}
            observerOptions={observerOptions}
          />
          <AdmissionSide />
        </>
      }
    />
  );
};

export default Overview;
