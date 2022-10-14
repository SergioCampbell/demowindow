export interface user {
  email: string;
  password: string;
  retypePassword: string;
  country: country;
  languaje: string;
}

export interface country {
  name_en: string;
  name_es: string;
  continent_en: string;
  continent_es: string;
  capital_en: string;
  capital_es: string;
  dial_code: string;
  code_2: string;
  code_3: string;
  tld: string;
}
