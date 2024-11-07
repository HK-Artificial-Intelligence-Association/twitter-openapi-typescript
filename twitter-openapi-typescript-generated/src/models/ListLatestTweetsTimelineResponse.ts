/* tslint:disable */
/* eslint-disable */
/**
 * Twitter OpenAPI
 * Twitter OpenAPI(Swagger) specification
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: yuki@yuki0311.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ListTweetsTimelineData } from './ListTweetsTimelineData';
import {
    ListTweetsTimelineDataFromJSON,
    ListTweetsTimelineDataFromJSONTyped,
    ListTweetsTimelineDataToJSON,
} from './ListTweetsTimelineData';

/**
 * 
 * @export
 * @interface ListLatestTweetsTimelineResponse
 */
export interface ListLatestTweetsTimelineResponse {
    /**
     * 
     * @type {ListTweetsTimelineData}
     * @memberof ListLatestTweetsTimelineResponse
     */
    data: ListTweetsTimelineData;
    /**
     * 
     * @type {Array<Error>}
     * @memberof ListLatestTweetsTimelineResponse
     */
    errors?: Array<Error>;
}

/**
 * Check if a given object implements the ListLatestTweetsTimelineResponse interface.
 */
export function instanceOfListLatestTweetsTimelineResponse(value: object): value is ListLatestTweetsTimelineResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ListLatestTweetsTimelineResponseFromJSON(json: any): ListLatestTweetsTimelineResponse {
    return ListLatestTweetsTimelineResponseFromJSONTyped(json, false);
}

export function ListLatestTweetsTimelineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListLatestTweetsTimelineResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ListTweetsTimelineDataFromJSON(json['data']),
        'errors': json['errors'] == null ? undefined : json['errors'],
    };
}

export function ListLatestTweetsTimelineResponseToJSON(value?: ListLatestTweetsTimelineResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ListTweetsTimelineDataToJSON(value['data']),
        'errors': value['errors'],
    };
}

