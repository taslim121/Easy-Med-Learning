export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | { [key: string]: boolean | null | undefined }
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];

  function process(val: ClassValue) {
    if (!val) return;
    if (typeof val === 'string' || typeof val === 'number') {
      classes.push(String(val));
    } else if (Array.isArray(val)) {
      val.forEach(process);
    } else if (typeof val === 'object') {
      for (const key in val) {
        if (val[key]) classes.push(key);
      }
    }
  }

  inputs.forEach(process);
  return classes.join(' ');
}

export function isValidUrl(urlString: string): boolean {
  if (!urlString) return false;
  try {
    const url = new URL(urlString);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}
