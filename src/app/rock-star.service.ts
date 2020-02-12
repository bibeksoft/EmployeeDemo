import { Injectable } from '@angular/core';
import {rockstar} from '../app/rockstar'
import {RockStars} from '../app/mock-rockstars'
@Injectable({
  providedIn: 'root'
})
export class RockStarService {

  constructor() { }
  getRockstar():rockstar[] {
    return RockStars;
  }
}
