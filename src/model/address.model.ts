/* eslint-disable new-cap */

import {ID, Type, Optional} from "validate-typescript";

export interface IAddress {
  apartment: string;
  streetNumber: number;
  streetName: string;
  city: string;
  province: string;
  postalCode: number;
}

export const addressSchema = {
  apartment: Optional(Type(String)),
  streetNumber: ID(),
  streetName: Type(String),
  city: Type(String),
  province: Type(String),
  postalCode: ID(),
};
