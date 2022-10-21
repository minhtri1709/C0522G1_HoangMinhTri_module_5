import {Component, OnInit} from '@angular/core';
import {DictionaryServiceSkipTestsService} from '../service/dictionary-service--skip-tests.service';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  word: Dictionary[];

  constructor(private service: DictionaryServiceSkipTestsService) {
  }

  ngOnInit(): void {
    this.word = this.service.getAll();
  }

}
