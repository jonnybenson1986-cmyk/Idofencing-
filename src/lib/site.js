import settings from '../content/settings.json';

export { settings };

/** Phone number formatted for a tel: link, e.g. "0484 753 461" -> "tel:0484753461" */
export const telHref = (phone = settings.phone) => 'tel:' + String(phone).replace(/[^\d+]/g, '');

/**
 * Replace {tokens} in CMS text with values from Site Settings,
 * e.g. "ABN {abn} & tax invoices" or "{serviceArea}".
 */
export const fill = (text = '') =>
  String(text).replace(/\{(\w+)\}/g, (match, key) => (key in settings ? String(settings[key]) : match));

/** Split the business name so the last word can be shown in the accent colour. */
export const brandParts = (name = settings.businessName) => {
  const words = String(name).trim().split(/\s+/);
  const last = words.pop() ?? '';
  return { first: words.join(' '), last };
};

export const pad2 = (n) => String(n).padStart(2, '0');
