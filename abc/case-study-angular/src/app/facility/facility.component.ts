import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../service/facility.service';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilityList: Facility[];

  constructor(private service: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityList = this.service.getAll();
  }

}
