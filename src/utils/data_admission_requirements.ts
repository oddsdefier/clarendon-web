import { scholarshipsData } from "./data_scholarships";

export const admissionRequirements = {
  college: {
    freshman: [
      "Original Copy of Report Card Form 138/Alternative Learning System (ALS)",
      "Authenticated/Original PSA/NSO Birth Certificate",
      "Original Copy of Certificate of Good Moral Character",
      "2 pcs. of 2x2 Colored picture with name tag ( taken within the last six months )",
      "Accomplished Application form for College Enrollment",
    ],
    transferees: [
      "Certificate of Transfer Credentials",
      "Official Transcript of Records (TOR)",
      "Certificate of Good Moral Character",
      "2x2 I.D. Pictures (2 pcs.)",
      "Original Copy of Birth Certificate (PSA)",
    ],
    scholarships: [...scholarshipsData],
  },
  high_school: {
    grade_seven: [
      "SF 9 (Report Card)",
      "PSA Birth Certificate",
      "Certificate of Good Moral Character",
      "2 pcs 2x2 ID",
    ],
    esc: [
      "Recent 2x2 ID Picture (2pcs)",
      "PSA Certified Birth Certificate (Original and Photocopy)",
      "Report Card (Original and Photocopy)",
      "Certificate of Good Moral Character (Original)",
      "ESC Certificate (Student from Private School)",
      "Form 137 (Permanent Record)",
      "Transferees previously granted with ESC may continue their grant in Clarendon College. Just submit the certification of ESC grant from previous school.",
    ],
    scholarships: {
      incoming_grade_seven: [
        "Free tuition fee for Elem graduates included in the top 10 ",
        "With ESC slot (Php 9,000.00 subsidy)",
        "Discount for children of PNP",
      ],
      incoming_grade_eleven: ["Free tuition fee ( SHS Voucher )"],
    },
  },
};
