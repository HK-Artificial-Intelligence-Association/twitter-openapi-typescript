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

import { exists, mapValues } from '../runtime';
import type { CommunityData } from './CommunityData';
import {
    CommunityDataFromJSON,
    CommunityDataFromJSONTyped,
    CommunityDataToJSON,
} from './CommunityData';

/**
 * 
 * @export
 * @interface Community
 */
export interface Community {
    /**
     * 
     * @type {CommunityData}
     * @memberof Community
     */
    result: CommunityData;
}

/**
 * Check if a given object implements the Community interface.
 */
export function instanceOfCommunity(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function CommunityFromJSON(json: any): Community {
    return CommunityFromJSONTyped(json, false);
}

export function CommunityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Community {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': CommunityDataFromJSON(json['result']),
    };
}

export function CommunityToJSON(value?: Community | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': CommunityDataToJSON(value.result),
    };
}
