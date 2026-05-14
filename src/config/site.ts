/** TradeStock / stock-lead site facts — single source of truth */
export const site = {
  brandName: 'TradeStock',
  companyLegalName: 'Trade Stock Research Services',
  addressLine:
    '1016, Gali No. 2, Bhoor Colony, Sector 29, Faridabad, Haryana, 121008',
  /** Voice / sales line (callbacks, compliance, printed contact) */
  salesPhone: '9243545172',
  salesPhoneDisplay: '+91 9243545172',
  /**
   * WhatsApp chat only — do not use for tel: links.
   * Digits with country code, no + (for https://wa.me/…)
   */
  whatsappE164: '918527506837',
  email: 'chahatmangla.ra@gmail.com',
  principalName: 'Chahat Mangla',
  complianceOfficerName: 'Chahat Mangla',
  sebiRegistrationNo: 'INH000018577',
  bseEnlistmentNo: '6396',
} as const;
