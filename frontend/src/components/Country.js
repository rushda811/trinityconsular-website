// src/data/country.js
import bahrain from "../assets/bahrain.webp";
import china from "../assets/china.webp";
import egypt from "../assets/egypt.webp";
import jordan from "../assets/jordan.jpg";
import kuwait from "../assets/kuwait.png";
import malaysia from "../assets/malaysia.webp";
import pakistan from "../assets/pakistan.webp";
import qatar from "../assets/qatar.webp";
import india from "../assets/india.png";
import taiwan from "../assets/taiwan.webp";
import thailand from "../assets/thailand.webp";
import uae from "../assets/uae.webp";
import vietnam from "../assets/vietnam.jpg";
import UAEP from "../assets/UAEP.38b9f92109e06633aea9.webp";
import bahrainp from "../assets/bahrainp.ddd6356a054507c7ca81.webp";
import chinap from "../assets/CHINAp.6cd8c8efec5419ea7db3.webp";
import egyptp from "../assets/egyptp.jpg";
import jordanp from "../assets/JORDANp.dba87f8d5e9d2dc70d18.webp";
import kuwaitp from "../assets/KUWAITp.80c23394c138e2429730.webp";
import malaysiap from "../assets/MALASIYAp.5a51680b55e998c8509c.webp";
import pakistanp from "../assets/PAKISTANp.d2149ffd2068caacfdc9.webp";
import qatarp from "../assets/QATARp.46b74629e0c001bf97a7.webp";
import indiap from "../assets/indiap.9540e49567450d9a6692.webp";
import thailandp from "../assets/THAILANDp.84e4aa1b06612c724cf6.webp";
import vietnamp from "../assets/VIETNAMp.f6917358095d6af89d44.webp";
import taiwanp from "../assets/THAILANDp.84e4aa1b06612c724cf6.webp";

const countries = [
  {
    name: "UAE",
    flag: uae,
    bgImage: UAEP,
    details: {
      process: [
        { step: 1, title: "Document Notarisation & Verification", description: "We ensure your documents are properly notarised and verified by local authorities, confirming authenticity." },
        { step: 2, title: "UAE Embassy Authentication", description: "We handle submission to the UAE Embassy, where officials verify signatures, stamps, and seals for legal use in the UAE.." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use, with no hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Notarization or home country attestation (if required)",
  "Certified Arabic translation for some documents",
  "Applicable UAE embassy fees and processing time"
],
      pricing: ["Personal Documents: £230", "Educational documents: £240","Commertial Documents: £750",  "(An additional fee applies if the document requires notary verification.)"],
      EstimatedProcessing: "Processing: 9 business days."
    }
  },
  {
    name: "China",
    flag: china,
    bgImage: chinap,

    details: {
      process: [
        { step: 1, title: "Document Notarisation & Verification", description: "We ensure your documents are notarised and verified by relevant authorities, confirming authenticity." },
        { step: 2, title: "China Embassy Authentication", description: "We handle the submission to the Chinese Embassy, where officials verify signatures, stamps, and seals for legal use in China." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in China—hassle-free." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Notarization or attestation from the Ministry of Foreign Affairs (home country)",
  "Chinese translation by certified translator (if applicable)",
  "Applicable Chinese embassy fees and processing time"
],
      pricing: ["Personal Documents: £750", "Educational documents: £190", "Commercial Documents: £300"],
      EstimatedProcessing: "Processing takes about 9 business days."
    }
  },
  {
    name: "Egypt",
    flag: egypt,
        bgImage: egyptp,

    details: {
      process: [
        { step: 1, title: "Document Notarisation & Verification", description: "We ensure your documents are notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Egypt Embassy Authentication", description: "We handle submission to the Egyptian Embassy, where officials verify signatures, stamps, and seals for legal use in Egypt." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Egypt—hassle-free." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Notarization or attestation from home country authority (if required)",
  "Certified Arabic translation for certain documents",
  "Applicable Egyptian embassy fees and processing time"
],
      pricing: ["Employment/Experience Letters: £220", "Educational Documents: £180","Commercial Document depends on the of the type of document"],
      EstimatedProcessing: "Processing may take 5-7 business days."
    }
  },

  {
    name: "Jordan",
    flag: jordan,
        bgImage: jordanp,

    details: {
      process: [
        { step: 1, title: "Document Notarisation & Verification", description: "We ensure your documents are correctly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "EJordan Embassy Authentication", description: "We handle submission to the Jordanian Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Jordan." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Jordan—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Certified Arabic translation (if applicable)",
  "Applicable Jordanian embassy fees and processing time"
],
      pricing: ["Personal Documents: £140","Educational Documents: £150","Commercial Documents: £270"],
      EstimatedProcessing: "Processing takes about 5-7 business days."
    }
  },
  {
    name: "Kuwait",
    flag: kuwait,
        bgImage: kuwaitp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are properly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: " kuwait Embassy Attestation", description: "We manage the submission to the Kuwaiti Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Kuwait." },
        { step: 3, title: "Completion & Safe Delivery", description: "official or business use in Kuwait—completely hassle-free." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Notarization or attestation from home country authorities (if required)",
  "Certified Arabic translation for selected documents",
  "Applicable Kuwaiti embassy fees and processing time"
],
      pricing: ["Personal Documents: £160","Educational Documents: £160","Commercial Documents: 320"],
      EstimatedProcessing: "Processing takes about 5-7 business days."
    }
  },
  {
    name: "Malaysia",
    flag: malaysia,
        bgImage: malaysiap,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Malaysia Embassy Authentication", description: "We handle submission to the Malaysian Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Malaysia." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Malaysia—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Malay or English certified translation (if applicable)",
  "Applicable Malaysian embassy fees and processing time"
],
      pricing: ["Personal Documents: £140","Educational Documents: £150","Commercial Documents: £300"],
      EstimatedProcessing: "Processing 7 business days."
    }
  },
  {
    name: "Pakistan",
    flag: pakistan,
        bgImage: pakistanp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are correctly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Pakistan Embassy Authentication", description: "We handle submission to the Pakistan Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Pakistan." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Pakistan—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Certified Urdu or Arabic translation (if applicable)",
  "Applicable Pakistan embassy fees and processing time"
],
      pricing: ["Personal Documents: £140","Educational Documents: £170","Commercial Documents: £300"],
      EstimatedProcessing: "Processing takes about 7 business days."
    }
  },
  {
    name: "Qatar",
    flag: qatar,
        bgImage: qatarp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are properly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Qatar Embassy Authentication", description: "We handle submission to the Qatari Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Qatar." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Qatar—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Certified Arabic translation (if applicable)",
  "Applicable Qatari embassy fees and processing time"
],
      pricing: ["Personal Documents: £150","Educational Documents :£450(Certificate, Transcript & Letter of concern)","Commercial Documents :£320"],
      EstimatedProcessing: "Processing takes about 2 weeks."
    }
  },
  {
    name: "India",
    flag: india,
        bgImage: indiap,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are properly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "MEA Apostille in India", description: "We arrange for your documents to be apostilled by the Ministry of External Affairs (MEA) in India. This official certificate confirms authenticity and is accepted across all Hague Convention countries." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once apostilled, we ensure safe return of your documents—ready for official, educational, or business use abroad." }
      ],
documents: [
  "For OCI applications based on Indian parentage, your UK birth certificate must be apostilled",
  "Original documents (scanned copies of Birth, Marriage, Death certificates, and Police Clearance are not accepted)",
  "Passport copy of the applicant or authorised signatory",
  "Notarisation/attestation from home country authorities (if required)",
  "Certified Hindi or English translation (if applicable)",
  "Applicable MEA fees and processing time"
],
      pricing: "Personal/educational/commercial: £82  Requires Apostille only",
      EstimatedProcessing: "Processing takes about 3-5 business days."
    }
  },
  {
    name: "Taiwan",
    flag: taiwan,
        bgImage: taiwanp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are properly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Taiwan Embassy Authentication", description: "signatures, stamps, and seals for legal use in Taiwan." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Taiwan—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Mandarin Chinese translation (if applicable)",
  "Applicable Taiwan embassy/TECO fees and processing time"
],
      pricing: ["Personal Documents: £180","Educational Documents: £190","Commercial Documents: £300"],
      EstimatedProcessing: "Processing takes about 9 business days."
    }
  },
  {
    name: "Thailand",
    flag: thailand,
        bgImage: thailandp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are correctly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Thailand Embassy Authentication", description: "We handle submission to the Thai Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Thailand." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Thailand—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Thai or English certified translation (if applicable)",
  "Applicable Thai embassy fees and processing time"
],
      pricing: ["Personal Documents: £150","Educational Documents: £160","Commercial Documents: £170"],
      EstimatedProcessing: "Processing takes about 9 business days."
    }
  },
  {
    name: "Bahrain",
    flag: bahrain,
        bgImage: bahrainp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are correctly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Bahrain Embassy Authentication", description: "We handle submission to the Bahraini Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Bahrain." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Bahrain—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Notarization or home country attestation (if required)",
  "Certified Arabic translation for some documents",
  "Applicable Bahrain embassy fees and processing time"
],
      pricing: ["Personal Documents: £160", "Educational Dcomuents: £170","Commercial Documents:depends.."],
      EstimatedProcessing: "Processing takes about 5-7 business days."
    }
  },
  {
    name: "Vietnam",
    flag: vietnam,
        bgImage: vietnamp,

    details: {
      process: [
        { step: 1, title: "Document Verification & Notarization", description: "We ensure your documents are correctly notarised and verified by the relevant local authorities to confirm authenticity." },
        { step: 2, title: "Vietnam Embassy Authentication", description: "We handle submission to the Vietnamese Embassy, where officials authenticate the signatures, stamps, and seals for legal use in Vietnam." },
        { step: 3, title: "Completion & Safe Delivery", description: "Once legalised, we return your documents securely, fully authenticated and ready for official or business use in Vietnam—without any hassle for you." }
      ],
documents: [
  "Original documents/Scanned Copies (scanned copies or of Birth, Marriage, Death certificates, and Police Clearance will not be accepted)",
  "Passport copy of the applicant or authorized signatory",
  "Home country notarization or attestation (if required)",
  "Vietnamese or English certified translation (if applicable)",
  "Applicable Vietnamese embassy fees and processing time"
],
      pricing: ["Personal Documents: £170","Educational Documents: £180","Commercial Documents: £240"],
      EstimatedProcessing: "Processing takes about 9 business days."
    }
  }
];

export default countries;
