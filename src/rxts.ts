import {Observable,Observer} from 'rxjs';
import { TeardownLogic } from 'rxjs/Subscription';


let observableCreator: (observer:Observer<number> ) => TeardownLogic // type of function to be passed to create function


//works in flow
// let observable$:Observable<boolean> = Observable.create( (observer:Observer<boolean> )=> {
//     observer.next(true);
// );

