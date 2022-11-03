import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  facilityList: Facility[] = [{
    facilityId: 1,
    facilityName: 'Villa House',
    facilityArea: 30,
    rentCost: 100000,
    maxPeople: 5,
    standardRoom: 'King Room',
    descriptionOtherConvenience: 'Water',
    poolArea: 20,
    numberOfFloors: 2,
    facilityFree: '',
    rentType: 'Days',
    facilityType: '',
    facilityImage: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  }, {
    facilityId: 2,
    facilityName: 'Villa House',
    facilityArea: 30,
    rentCost: 100000,
    maxPeople: 5,
    standardRoom: 'King Room',
    descriptionOtherConvenience: 'Water',
    poolArea: 20,
    numberOfFloors: 2,
    facilityFree: '',
    rentType: 'Days',
    facilityType: '',
    facilityImage: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  }, {
    facilityId: 3,
    facilityName: 'Villa House',
    facilityArea: 30,
    rentCost: 100000,
    maxPeople: 5,
    standardRoom: 'King Room',
    descriptionOtherConvenience: 'Water',
    poolArea: 20,
    numberOfFloors: 2,
    facilityFree: '',
    rentType: 'Days',
    facilityType: '',
    facilityImage: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  }, {
    facilityId: 4,
    facilityName: 'Villa House',
    facilityArea: 30,
    rentCost: 100000,
    maxPeople: 5,
    standardRoom: 'King Room',
    descriptionOtherConvenience: 'Water',
    poolArea: 20,
    numberOfFloors: 2,
    facilityFree: '',
    rentType: 'Days',
    facilityType: '',
    facilityImage: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  }, {
    facilityId: 5,
    facilityName: 'Villa House',
    facilityArea: 30,
    rentCost: 100000,
    maxPeople: 5,
    standardRoom: 'King Room',
    descriptionOtherConvenience: 'Water',
    poolArea: 20,
    numberOfFloors: 2,
    facilityFree: '',
    rentType: 'Days',
    facilityType: '',
    facilityImage: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
  }];

  constructor() {
  }

  getAll(): Facility[] {
    return this.facilityList;
  }
}
