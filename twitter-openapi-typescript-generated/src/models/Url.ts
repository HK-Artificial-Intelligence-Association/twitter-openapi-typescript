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
 * @interface Url
 */
export interface Url {
    /**
     * 
     * @type {string}
     * @memberof Url
     */
    displayUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Url
     */
    expandedUrl?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof Url
     */
    indices: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Url
     */
    url: string;
}

/**
 * Check if a given object implements the Url interface.
 */
export function instanceOfUrl(value: object): value is Url {
    if (!('displayUrl' in value) || value['displayUrl'] === undefined) return false;
    if (!('indices' in value) || value['indices'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function UrlFromJSON(json: any): Url {
    return UrlFromJSONTyped(json, false);
}

export function UrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): Url {
    if (json == null) {
        return json;
    }
    return {
        
        'displayUrl': json['display_url'],
        'expandedUrl': json['expanded_url'] == null ? undefined : json['expanded_url'],
        'indices': json['indices'],
        'url': json['url'],
    };
}

export function UrlToJSON(json: any): Url {
    return UrlToJSONTyped(json, false);
}

export function UrlToJSONTyped(value?: Url | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'display_url': value['displayUrl'],
        'expanded_url': value['expandedUrl'],
        'indices': value['indices'],
        'url': value['url'],
    };
}

