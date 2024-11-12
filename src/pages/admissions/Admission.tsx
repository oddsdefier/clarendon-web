import React, { useRef } from "react";
import AdmissionSide from "./components/AdmissionSide";
import OnThisPage from "@/components/OnThisPage";
import PageLayout from "@/components/PageLayout";
import { admissionRequirements } from "@/utils/data_admission_requirements";
const Admission: React.FC = () => {
  const navItems = [{ href: "#sample", label: "Sample" }];
  const mainContentRef = useRef<HTMLDivElement>(null);

  const observerOptions = {
    rootMargin: "-5% 0px -60% 0px",
    threshold: 0.5,
  };

  console.log(admissionRequirements.college.scholarships[0]);
  const mainContent = (
    <>
      <h1>College</h1>
      <div className="space-y-8">
        <div>
          <h1>Freshman</h1>
          <ul className="list-disc">
            {admissionRequirements.college.freshman.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Transferees</h1>
          <ul className="list-disc">
            {admissionRequirements.college.transferees.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Scholarships</h1>

          {admissionRequirements.college.scholarships.map((item) => (
            <div className="my-3">
              {item.code ?? <h6>{item.code}</h6>}
              <h1>{item.title}</h1>
              <h4>{item.description}</h4>
              <a href={item.link ? item.link : "/"} target="_blank">
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
      <h1>High School</h1>
      <div className="space-y-8">
        <div>
          <h1>Grade 7</h1>
          <ul className="list-disc">
            {admissionRequirements.high_school.grade_seven.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Transferees</h1>
          <ul className="list-disc">
            {admissionRequirements.college.transferees.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Scholarships</h1>
          <h2>Incoming Grade 7 Scholarship</h2>
          {admissionRequirements.high_school.scholarships.incoming_grade_seven.map(
            (item) => (
              <li>{item}</li>
            ),
          )}
          <h2>Incoming Grade 11 Scholarship</h2>
          {admissionRequirements.high_school.scholarships.incoming_grade_eleven.map(
            (item) => (
              <li>{item}</li>
            ),
          )}
        </div>
      </div>
    </>
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

export default Admission;
