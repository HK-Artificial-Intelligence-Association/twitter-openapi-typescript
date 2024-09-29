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
import type { Session } from './Session';
import {
    SessionFromJSON,
    SessionFromJSONTyped,
    SessionToJSON,
} from './Session';

/**
 * 
 * @export
 * @interface OtherResponse
 */
export interface OtherResponse {
    /**
     * 
     * @type {Session}
     * @memberof OtherResponse
     */
    session?: Session;
}

/**
 * Check if a given object implements the OtherResponse interface.
 */
export function instanceOfOtherResponse(value: object): value is OtherResponse {
    return true;
}

export function OtherResponseFromJSON(json: any): OtherResponse {
    return OtherResponseFromJSONTyped(json, false);
}

export function OtherResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtherResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'session': json['Session'] == null ? undefined : SessionFromJSON(json['Session']),
    };
}

export function OtherResponseToJSON(value?: OtherResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Session': SessionToJSON(value['session']),
    };
}

