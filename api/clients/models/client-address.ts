export type ClientAdress = {
  addressId?: string;
  addressType: string;
  country?: {
    countryId: string;
    iso2: string;
    iso3: string;
    name: string;
    isInEuropeUnion: boolean;
    vatRate: number;
  };
  state: string;
  city: {
    cityId: string;
    countryId: string;
    name: string;
  };
  streetLine1: string;
  streetLine2: string;
  houseNo: string;
  postalCode: string;
};
