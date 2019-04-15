import { environment } from '../../environments/environment';

export class AppConstants {
    public static API_BASE_URL: string = environment.API_BASE_URL;
    public static MSGS: object = {
        ERROR: 'Something went wrong, please try again after some time',
        KEYWORD_MISSING: 'Please enter keyword(s)',
        TRACK: 'Added to tracking list',
        UNTRACK: 'Removed from tracking list',
        ALREADY_TRACKED: 'Item already been tracked'
    };
}