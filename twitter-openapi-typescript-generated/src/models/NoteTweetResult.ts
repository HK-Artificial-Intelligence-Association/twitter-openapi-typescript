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
import type { NoteTweetResultData } from './NoteTweetResultData';
import {
    NoteTweetResultDataFromJSON,
    NoteTweetResultDataFromJSONTyped,
    NoteTweetResultDataToJSON,
} from './NoteTweetResultData';

/**
 * 
 * @export
 * @interface NoteTweetResult
 */
export interface NoteTweetResult {
    /**
     * 
     * @type {NoteTweetResultData}
     * @memberof NoteTweetResult
     */
    result: NoteTweetResultData;
}

/**
 * Check if a given object implements the NoteTweetResult interface.
 */
export function instanceOfNoteTweetResult(value: object): value is NoteTweetResult {
    if (!('result' in value) || value['result'] === undefined) return false;
    return true;
}

export function NoteTweetResultFromJSON(json: any): NoteTweetResult {
    return NoteTweetResultFromJSONTyped(json, false);
}

export function NoteTweetResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteTweetResult {
    if (json == null) {
        return json;
    }
    return {
        
        'result': NoteTweetResultDataFromJSON(json['result']),
    };
}

export function NoteTweetResultToJSON(value?: NoteTweetResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': NoteTweetResultDataToJSON(value['result']),
    };
}

