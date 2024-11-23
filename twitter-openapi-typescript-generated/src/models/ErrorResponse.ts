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
import type { ErrorExtensions } from './ErrorExtensions';
import {
    ErrorExtensionsFromJSON,
    ErrorExtensionsFromJSONTyped,
    ErrorExtensionsToJSON,
    ErrorExtensionsToJSONTyped,
} from './ErrorExtensions';
import type { Tracing } from './Tracing';
import {
    TracingFromJSON,
    TracingFromJSONTyped,
    TracingToJSON,
    TracingToJSONTyped,
} from './Tracing';
import type { Location } from './Location';
import {
    LocationFromJSON,
    LocationFromJSONTyped,
    LocationToJSON,
    LocationToJSONTyped,
} from './Location';

/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    code: number;
    /**
     * 
     * @type {ErrorExtensions}
     * @memberof ErrorResponse
     */
    extensions: ErrorExtensions;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    kind: string;
    /**
     * 
     * @type {Array<Location>}
     * @memberof ErrorResponse
     */
    locations: Array<Location>;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    name: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof ErrorResponse
     */
    path: Array<any>;
    /**
     * 
     * @type {number}
     * @memberof ErrorResponse
     */
    retryAfter?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    source: string;
    /**
     * 
     * @type {Tracing}
     * @memberof ErrorResponse
     */
    tracing: Tracing;
}

/**
 * Check if a given object implements the ErrorResponse interface.
 */
export function instanceOfErrorResponse(value: object): value is ErrorResponse {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('extensions' in value) || value['extensions'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('locations' in value) || value['locations'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('tracing' in value) || value['tracing'] === undefined) return false;
    return true;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'extensions': ErrorExtensionsFromJSON(json['extensions']),
        'kind': json['kind'],
        'locations': ((json['locations'] as Array<any>).map(LocationFromJSON)),
        'message': json['message'],
        'name': json['name'],
        'path': json['path'],
        'retryAfter': json['retry_after'] == null ? undefined : json['retry_after'],
        'source': json['source'],
        'tracing': TracingFromJSON(json['tracing']),
    };
}

export function ErrorResponseToJSON(json: any): ErrorResponse {
    return ErrorResponseToJSONTyped(json, false);
}

export function ErrorResponseToJSONTyped(value?: ErrorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'extensions': ErrorExtensionsToJSON(value['extensions']),
        'kind': value['kind'],
        'locations': ((value['locations'] as Array<any>).map(LocationToJSON)),
        'message': value['message'],
        'name': value['name'],
        'path': value['path'],
        'retry_after': value['retryAfter'],
        'source': value['source'],
        'tracing': TracingToJSON(value['tracing']),
    };
}

