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
import type { UnfavoriteTweet } from './UnfavoriteTweet';
import {
    UnfavoriteTweetFromJSON,
    UnfavoriteTweetFromJSONTyped,
    UnfavoriteTweetToJSON,
} from './UnfavoriteTweet';

/**
 * 
 * @export
 * @interface UnfavoriteTweetResponseData
 */
export interface UnfavoriteTweetResponseData {
    /**
     * 
     * @type {UnfavoriteTweet}
     * @memberof UnfavoriteTweetResponseData
     */
    data: UnfavoriteTweet;
}

/**
 * Check if a given object implements the UnfavoriteTweetResponseData interface.
 */
export function instanceOfUnfavoriteTweetResponseData(value: object): value is UnfavoriteTweetResponseData {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UnfavoriteTweetResponseDataFromJSON(json: any): UnfavoriteTweetResponseData {
    return UnfavoriteTweetResponseDataFromJSONTyped(json, false);
}

export function UnfavoriteTweetResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnfavoriteTweetResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UnfavoriteTweetFromJSON(json['data']),
    };
}

export function UnfavoriteTweetResponseDataToJSON(value?: UnfavoriteTweetResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UnfavoriteTweetToJSON(value['data']),
    };
}

