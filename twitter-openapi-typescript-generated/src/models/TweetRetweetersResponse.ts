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
import type { TweetRetweetersResponseData } from './TweetRetweetersResponseData';
import {
    TweetRetweetersResponseDataFromJSON,
    TweetRetweetersResponseDataFromJSONTyped,
    TweetRetweetersResponseDataToJSON,
    TweetRetweetersResponseDataToJSONTyped,
} from './TweetRetweetersResponseData';
import type { ErrorResponse } from './ErrorResponse';
import {
    ErrorResponseFromJSON,
    ErrorResponseFromJSONTyped,
    ErrorResponseToJSON,
    ErrorResponseToJSONTyped,
} from './ErrorResponse';

/**
 * 
 * @export
 * @interface TweetRetweetersResponse
 */
export interface TweetRetweetersResponse {
    /**
     * 
     * @type {TweetRetweetersResponseData}
     * @memberof TweetRetweetersResponse
     */
    data: TweetRetweetersResponseData;
    /**
     * 
     * @type {Array<ErrorResponse>}
     * @memberof TweetRetweetersResponse
     */
    errors?: Array<ErrorResponse>;
}

/**
 * Check if a given object implements the TweetRetweetersResponse interface.
 */
export function instanceOfTweetRetweetersResponse(value: object): value is TweetRetweetersResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function TweetRetweetersResponseFromJSON(json: any): TweetRetweetersResponse {
    return TweetRetweetersResponseFromJSONTyped(json, false);
}

export function TweetRetweetersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetRetweetersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': TweetRetweetersResponseDataFromJSON(json['data']),
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
    };
}

export function TweetRetweetersResponseToJSON(json: any): TweetRetweetersResponse {
    return TweetRetweetersResponseToJSONTyped(json, false);
}

export function TweetRetweetersResponseToJSONTyped(value?: TweetRetweetersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': TweetRetweetersResponseDataToJSON(value['data']),
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(ErrorResponseToJSON)),
    };
}

