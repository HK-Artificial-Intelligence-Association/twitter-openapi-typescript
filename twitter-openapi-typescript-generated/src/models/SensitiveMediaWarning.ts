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
 * @interface SensitiveMediaWarning
 */
export interface SensitiveMediaWarning {
    /**
     * 
     * @type {boolean}
     * @memberof SensitiveMediaWarning
     */
    adultContent?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SensitiveMediaWarning
     */
    graphicViolence?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SensitiveMediaWarning
     */
    other?: boolean;
}

/**
 * Check if a given object implements the SensitiveMediaWarning interface.
 */
export function instanceOfSensitiveMediaWarning(value: object): value is SensitiveMediaWarning {
    return true;
}

export function SensitiveMediaWarningFromJSON(json: any): SensitiveMediaWarning {
    return SensitiveMediaWarningFromJSONTyped(json, false);
}

export function SensitiveMediaWarningFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveMediaWarning {
    if (json == null) {
        return json;
    }
    return {
        
        'adultContent': json['adult_content'] == null ? undefined : json['adult_content'],
        'graphicViolence': json['graphic_violence'] == null ? undefined : json['graphic_violence'],
        'other': json['other'] == null ? undefined : json['other'],
    };
}

export function SensitiveMediaWarningToJSON(json: any): SensitiveMediaWarning {
    return SensitiveMediaWarningToJSONTyped(json, false);
}

export function SensitiveMediaWarningToJSONTyped(value?: SensitiveMediaWarning | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'adult_content': value['adultContent'],
        'graphic_violence': value['graphicViolence'],
        'other': value['other'],
    };
}

