import {Component, OnInit} from '@angular/core';
import {DictionaryServiceSkipTestsService} from '../service/dictionary-service--skip-tests.service';
import {Dictionary} from '../dictionary';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  meaning: Dictionary;

  constructor(private service: DictionaryServiceSkipTestsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const key = this.activatedRoute.snapshot.params.keyWord;
    this.meaning = this.service.getByValue(key);
    console.log(key);
  }

}
