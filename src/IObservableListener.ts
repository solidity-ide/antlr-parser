
import { Observable } from "rxjs/Observable";

export interface IObservableListener<T> {
    Observable (): Observable<T>;
    complete (): void;
}
