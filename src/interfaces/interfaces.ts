export interface CountryDataType {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  capital: string;
  region: string;
  flags: {
    png: string;
  }
}

export interface CountryPropsType {
  country: {
    name: {
      common: string;
      official: string;
    };
    cca2: string;
    capital: string;
    region: string;
    flags: {
      png: string;
    }
  };
}