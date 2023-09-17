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
/**
 * 
 * @export
 * @interface MediaStats
 */
export interface MediaStats {
    /**
     * 
     * @type {number}
     * @memberof MediaStats
     */
    viewCount: number;
}

/**
 * Check if a given object implements the MediaStats interface.
 */
export function instanceOfMediaStats(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "viewCount" in value;

    return isInstance;
}

export function MediaStatsFromJSON(json: any): MediaStats {
    return MediaStatsFromJSONTyped(json, false);
}

export function MediaStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'viewCount': json['viewCount'],
    };
}

export function MediaStatsToJSON(value?: MediaStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'viewCount': value.viewCount,
    };
}

