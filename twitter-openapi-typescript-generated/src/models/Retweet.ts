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
import type { RetweetLegacy } from './RetweetLegacy';
import {
    RetweetLegacyFromJSON,
    RetweetLegacyFromJSONTyped,
    RetweetLegacyToJSON,
    RetweetLegacyToJSONTyped,
} from './RetweetLegacy';

/**
 * 
 * @export
 * @interface Retweet
 */
export interface Retweet {
    /**
     * 
     * @type {RetweetLegacy}
     * @memberof Retweet
     */
    legacy: RetweetLegacy;
    /**
     * 
     * @type {string}
     * @memberof Retweet
     */
    restId: string;
}

/**
 * Check if a given object implements the Retweet interface.
 */
export function instanceOfRetweet(value: object): value is Retweet {
    if (!('legacy' in value) || value['legacy'] === undefined) return false;
    if (!('restId' in value) || value['restId'] === undefined) return false;
    return true;
}

export function RetweetFromJSON(json: any): Retweet {
    return RetweetFromJSONTyped(json, false);
}

export function RetweetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Retweet {
    if (json == null) {
        return json;
    }
    return {
        
        'legacy': RetweetLegacyFromJSON(json['legacy']),
        'restId': json['rest_id'],
    };
}

export function RetweetToJSON(json: any): Retweet {
    return RetweetToJSONTyped(json, false);
}

export function RetweetToJSONTyped(value?: Retweet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'legacy': RetweetLegacyToJSON(value['legacy']),
        'rest_id': value['restId'],
    };
}

