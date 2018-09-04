import {Injectable} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class TabService {
public userData = new BehaviorSubject('1');
viewMode(mode){
this.userData.next(mode)
}
}