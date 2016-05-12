import {Injectable} from "angular2/core";
/**
 * Created by Puneet on 09-May-16.
 */
@Injectable()
export class CommonService {
    message = 'Common Message'
    log(message:string) {
        console.log(message);
    }
}