import React, { useRef } from "react";
// import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { admissionRequirements } from "@/utils/data_admission_requirements";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

import CustomBreadcrumb from "@/components/BreadCrumb";

const Admission: React.FC = () => {
  const navItems = [
    { href: "#college", label: "College" },
    { href: "#high-school", label: "High School" },
  ];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const observerOptions = {
    rootMargin: "0% 0px -40% 0px",
    threshold: 1,
  };

  const h2Style = "text-lg font-semibold text-clarc-blue/90";
  const mainContent = (
    <div>
      <CustomBreadcrumb
        currentPage="Admission"
        secondLink="/admission"
        secondTitle="Admission"
      />
      <div className="mb-10 px-6 lg:px-0">
        <div id="college">
          <h1 className="bg-gradient-to-r from-clarc-blue to-clarc-gold p-1 px-2 text-xl font-bold uppercase text-clarc-white">
            College Department
          </h1>
        </div>

        <div className="mb-5 w-full lg:flex lg:flex-row lg:gap-10">
          <div className="flex-1 py-5 lg:pr-3">
            <h1 className="mb-3 font-universal_serif text-xl font-bold tracking-wider text-clarc-blue">
              Enrollment Procedures
            </h1>
            <div className="space-y-8">
              <div id="step-application">
                <h2 className={h2Style}>Application</h2>
                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                  <li className="break-words">
                    <span className="font-bold">Application Form: </span>Obtain
                    an application form from the college's admissions office.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Complete Application:</span>{" "}
                    Fill out the application form accurately and completely.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Submit Documents:</span> Gather
                    required documents such as academic transcripts,
                    identification, and any other specified materials.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Application Fee:</span> Pay the
                    application fee, if applicable.
                  </li>
                </ul>
              </div>
              <div id="step-admission">
                <h2 className={h2Style}>Admission</h2>
                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                  <li className="break-words">
                    <span className="font-bold">Review Process:</span> The
                    college reviews your application and documents.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Notification:</span> Your
                    application for admission will be reviewed and determined at
                    the Registrar's Office.
                  </li>
                </ul>
                <p className="mt-3 italic text-gray-600">
                  If accepted, confirm your intention to enroll by the specified
                  deadline.
                </p>
              </div>
              <div className="step-enrollment">
                <h2 className={h2Style}>Enrollment</h2>
                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                  <li className="break-words">
                    <span className="font-bold">Orientation:</span> Attend any
                    orientation sessions scheduled by the college.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Course Selection:</span> Choose
                    your courses for the upcoming semester, considering
                    prerequisites and your academic plan.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Registration:</span> Register
                    for courses online or in-person, following the college's
                    instructions.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Payment:</span> Pay tuition and
                    fees by the deadline using the specified payment methods.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">ID Card:</span> Obtain your
                    student ID card from the college's student affairs office.
                  </li>
                  <li className="break-words">
                    <span className="font-bold">Finalize Enrollment:</span>{" "}
                    Ensure all enrollment steps are completed before the start
                    of classes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 py-5" id="college-requirements">
            <h1 className="mb-3 block font-universal_serif text-xl font-bold tracking-wider text-clarc-blue">
              Requirements
            </h1>
            <div className="space-y-8">
              <div>
                <h1 className={cn(h2Style, "mt-0")}>Freshman</h1>
                <p className="mb-3 italic text-gray-500">
                  (Present Original and Submit photocopy only)
                </p>
                <div className="space-y-2 text-gray-600">
                  {admissionRequirements.college.freshman.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                      <p className="text-green-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className={h2Style}>Transferees</h1>
                <p className="mb-3 italic text-gray-500">
                  (Present Original and Submit photocopy only)
                </p>
                <div className="space-y-2 text-gray-600">
                  {admissionRequirements.college.transferees.map(
                    (item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                        <p className="text-green-600">{item}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="college-scholarships">
          <h1 className="mb-3 block font-universal_serif text-xl font-bold tracking-wider text-clarc-blue">
            Scholarships
          </h1>
          <div className="list-disc space-y-3 text-gray-600">
            {admissionRequirements.college.scholarships.map((item, index) => (
              <>
                <div key={index} className="flex items-start gap-2">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                  <div>
                    <a href={item.link ? item.link : "/"} target="_blank">
                      <h2 className="mb-2 text-base font-semibold">
                        {item.title}
                      </h2>
                    </a>
                    <p className="max-w-4xl text-pretty">{item.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 pb-28 lg:px-0">
        <div id="high-school">
          <h1 className="bg-gradient-to-r from-clarc-blue to-clarc-gold p-1 px-2 text-xl font-bold uppercase text-clarc-white">
            High School Department
          </h1>
        </div>
        <div className="mb-5 w-full lg:flex lg:flex-row lg:gap-10">
          <div className="flex-1 space-y-8 py-5 lg:pr-3">
            <div>
              <h1 className="mb-3 font-universal_serif text-xl font-bold tracking-wider text-clarc-blue">
                Enrollment Procedures
              </h1>
              <h2 className={h2Style}>Application</h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-600">
                <li className="break-words">
                  <span className="font-bold">Application Form: </span>Obtain an
                  application form from the college's admissions office.
                </li>
                <li className="break-words">
                  <span className="font-bold">Complete Application:</span> Fill
                  out the application form accurately and completely.
                </li>
                <li className="break-words">
                  <span className="font-bold">Submit Documents:</span> Gather
                  required documents such as academic transcripts,
                  identification, and any other specified materials.
                </li>
                <li className="break-words">
                  <span className="font-bold">Application Fee:</span> Pay the
                  application fee, if applicable.
                </li>
              </ul>
            </div>
            <div>
              <h2 className={h2Style}>Admission</h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-600">
                <li className="break-words">
                  <span className="font-bold">Review Process:</span> The college
                  reviews your application and documents.
                </li>
                <li className="break-words">
                  <span className="font-bold">Notification:</span> Your
                  application for admission will be reviewed and determined at
                  the Registrar's Office.
                </li>
              </ul>
              <p className="mt-3 italic text-gray-600">
                If accepted, confirm your intention to enroll by the specified
                deadline.
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-6 py-5 pr-5">
            <div>
              <h1 className="mb-3 block font-universal_serif text-xl font-bold tracking-wider text-clarc-blue">
                Requirements
              </h1>
              <h1 className={cn(h2Style, "mt-0")}>Incoming Grade 7</h1>
              <p className="mb-3 italic text-gray-500">
                (Present Original and Submit photocopy only)
              </p>
              <div className="space-y-2 text-gray-600">
                {admissionRequirements.high_school.grade_seven.map(
                  (item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                      <p className="text-green-600">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div>
              <h1 className={cn(h2Style, "mt-0")}>Transferees</h1>
              <p className="mb-3 italic text-gray-500">
                (Present Original and Submit photocopy only)
              </p>
              <div className="space-y-2 text-gray-600">
                {admissionRequirements.high_school.esc.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                    <p className="text-green-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="high-school-scholarships">
          <h1 className="mb-3 block font-universal_serif text-xl font-bold tracking-wider text-clarc-blue">
            Scholarships
          </h1>
          <div className="space-y-8 text-gray-600">
            <div className="space-y-3">
              <h2 className={h2Style}>Incoming Grade 7 Scholarship</h2>
              {admissionRequirements.high_school.scholarships.incoming_grade_seven.map(
                (item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                    <div>
                      <h2 className="mb-2 text-base font-medium">{item}</h2>
                    </div>
                  </div>
                ),
              )}
            </div>
            <div className="space-y-3">
              <h2 className={h2Style}>Incoming Grade 11 Scholarship</h2>
              {admissionRequirements.high_school.scholarships.incoming_grade_eleven.map(
                (item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-green-700" />
                    <div>
                      <h2 className="mb-2 text-base font-medium">{item}</h2>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const pageContent = (
    <div
      ref={mainContentRef}
      className="no-scrollbar flex-grow lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:px-6"
    >
      <div>{mainContent}</div>
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
        </>
      }
    />
  );
};

export default Admission;
