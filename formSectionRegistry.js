// Central registry for all form sections
import { BasicInfoSection } from 'basicInfoSection.js';
import { ContactInfoSection } from 'contactInfoSection.js';
import { OrderInfoSection } from 'orderInfoSection.js';
import { PurposeSummarySection } from 'purposeSummarySection.js';
import { InspectionResultsSection } from 'inspectionResultsSection.js';
import { CertificatesSection } from 'certificatesSection.js';
import { AuditAssessmentSection } from 'auditAssessmentSection.js';
import { AdditionalDocsSection } from 'additionalDocsSection.js';
import { CalibrationSection } from 'calibrationSection.js';
import { ContainerSections } from 'containerSections.js';
import { SignaturesSection } from 'signaturesSection.js';
import { CreateObjectsSection } from 'createObjectsSection.js';
import { ImageAttachmentsSection } from 'imageAttachmentsSection.js';
import { ExtendedAuditSection } from 'extendedAuditSection.js';
import { ApprovedManufacturersSection } from 'approvedManufacturersSection.js';
import { ManufacturerAssessmentSection } from 'manufacturerAssessmentSection.js';
import { ManufacturerAssessmentSummarySection } from 'manufacturerAssessmentSummarySection.js';
import { ManufacturerAssessmentISO4Section } from 'manufacturerAssessmentISO4Section.js';
import { ManufacturerAssessmentISO5Section } from 'manufacturerAssessmentISO5Section.js';

export const FormSections = {
    createBasicInformationSection: BasicInfoSection.create,
    createContactInformationSection: ContactInfoSection.create,
    createOrderInformationSection: OrderInfoSection.create,
    createPurposeAndSummarySection: PurposeSummarySection.create,
    createInspectionResultsSection: InspectionResultsSection.create,
    createCertificatesSection: CertificatesSection.create,
    createAuditAssessmentSection: AuditAssessmentSection.create,
    createAdditionalDocsSection: AdditionalDocsSection.create,
    createCalibrationSection: CalibrationSection.create,
    createSignaturesSection: SignaturesSection.create,
    createCreateObjectsSection: CreateObjectsSection.create,
    createImageAttachmentsSection: ImageAttachmentsSection.create,
    createExtendedAuditSection: ExtendedAuditSection.create,
    createApprovedManufacturersSection: ApprovedManufacturersSection.create,
    createManufacturerAssessmentSection: ManufacturerAssessmentSection.create,
    createManufacturerAssessmentSummarySection: ManufacturerAssessmentSummarySection.create,
    createManufacturerAssessmentISO4Section: ManufacturerAssessmentISO4Section.create,
    createManufacturerAssessmentISO5Section: ManufacturerAssessmentISO5Section.create,
    createTimeBreakdownSection: ContainerSections.createTimeBreakdownSection,
    createContactTableSection: ContainerSections.createContactTableSection,
    createItemDetailsSection: ContainerSections.createItemDetailsSection,
    createInspectionSections: ContainerSections.createInspectionSections,
    createDocumentSection: ContainerSections.createDocumentSection,
    createISO9001Section: ContainerSections.createISO9001Section,
    createExtendedAuditTableSection: ContainerSections.createExtendedAuditTableSection
};