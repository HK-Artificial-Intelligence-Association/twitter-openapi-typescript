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
/**
 * 
 * @export
 * @interface TimelineCoverBehaviorUrl
 */
export interface TimelineCoverBehaviorUrl {
    /**
     * 
     * @type {string}
     * @memberof TimelineCoverBehaviorUrl
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof TimelineCoverBehaviorUrl
     */
    urlType: TimelineCoverBehaviorUrlUrlTypeEnum;
}


/**
 * @export
 */
export const TimelineCoverBehaviorUrlUrlTypeEnum = {
    ExternalUrl: 'ExternalUrl'
} as const;
export type TimelineCoverBehaviorUrlUrlTypeEnum = typeof TimelineCoverBehaviorUrlUrlTypeEnum[keyof typeof TimelineCoverBehaviorUrlUrlTypeEnum];


/**
 * Check if a given object implements the TimelineCoverBehaviorUrl interface.
 */
export function instanceOfTimelineCoverBehaviorUrl(value: object): value is TimelineCoverBehaviorUrl {
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('urlType' in value) || value['urlType'] === undefined) return false;
    return true;
}

export function TimelineCoverBehaviorUrlFromJSON(json: any): TimelineCoverBehaviorUrl {
    return TimelineCoverBehaviorUrlFromJSONTyped(json, false);
}

export function TimelineCoverBehaviorUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineCoverBehaviorUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'urlType': json['url_type'],
    };
}

export function TimelineCoverBehaviorUrlToJSON(value?: TimelineCoverBehaviorUrl | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
        'url_type': value['urlType'],
    };
}

