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
 * @interface DisplayTreatment
 */
export interface DisplayTreatment {
    /**
     * 
     * @type {string}
     * @memberof DisplayTreatment
     */
    actionText: string;
    /**
     * 
     * @type {string}
     * @memberof DisplayTreatment
     */
    labelText?: string;
}

/**
 * Check if a given object implements the DisplayTreatment interface.
 */
export function instanceOfDisplayTreatment(value: object): value is DisplayTreatment {
    if (!('actionText' in value) || value['actionText'] === undefined) return false;
    return true;
}

export function DisplayTreatmentFromJSON(json: any): DisplayTreatment {
    return DisplayTreatmentFromJSONTyped(json, false);
}

export function DisplayTreatmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisplayTreatment {
    if (json == null) {
        return json;
    }
    return {
        
        'actionText': json['actionText'],
        'labelText': json['labelText'] == null ? undefined : json['labelText'],
    };
}

export function DisplayTreatmentToJSON(value?: DisplayTreatment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'actionText': value['actionText'],
        'labelText': value['labelText'],
    };
}

