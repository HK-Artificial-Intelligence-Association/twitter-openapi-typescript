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
 * @interface ClientEventInfo
 */
export interface ClientEventInfo {
    /**
     * 
     * @type {string}
     * @memberof ClientEventInfo
     */
    component?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ClientEventInfo
     */
    details?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof ClientEventInfo
     */
    element?: string;
}

/**
 * Check if a given object implements the ClientEventInfo interface.
 */
export function instanceOfClientEventInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ClientEventInfoFromJSON(json: any): ClientEventInfo {
    return ClientEventInfoFromJSONTyped(json, false);
}

export function ClientEventInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClientEventInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'component': !exists(json, 'component') ? undefined : json['component'],
        'details': !exists(json, 'details') ? undefined : json['details'],
        'element': !exists(json, 'element') ? undefined : json['element'],
    };
}

export function ClientEventInfoToJSON(value?: ClientEventInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'component': value.component,
        'details': value.details,
        'element': value.element,
    };
}
