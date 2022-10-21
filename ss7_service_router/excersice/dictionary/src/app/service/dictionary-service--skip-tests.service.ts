import {Injectable} from '@angular/core';
import {Dictionary} from '../dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceSkipTestsService {


  words: Dictionary[] = [{
    word: 'car', mean: 'oto'
  },
    {
      word: 'bike', mean: 'xe dap'
    },
    {
      word: 'bui hung', mean: 'chan'
    },

  ];

  constructor() {
  }

  getAll(): Dictionary[] {
    return this.words;
  }

  getByValue(key: string): Dictionary {
    return this.words.find(dictionary => dictionary.word === key );
  }
}
