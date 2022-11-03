import {CustomerList} from './customerList';

export interface Saving {
  id?: number;
  dayOfBegin?: string;
  openingDay?: string;
  period?: number;
  money?: number;
  interest?: number;
  promotion?: string;
  customer?: CustomerList;
}
