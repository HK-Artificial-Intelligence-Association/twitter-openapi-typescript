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
import type { DeleteRetweetResponseData } from './DeleteRetweetResponseData';
import {
    DeleteRetweetResponseDataFromJSON,
    DeleteRetweetResponseDataFromJSONTyped,
    DeleteRetweetResponseDataToJSON,
} from './DeleteRetweetResponseData';

/**
 * 
 * @export
 * @interface DeleteRetweetResponse
 */
export interface DeleteRetweetResponse {
    /**
     * 
     * @type {DeleteRetweetResponseData}
     * @memberof DeleteRetweetResponse
     */
    data: DeleteRetweetResponseData;
}

/**
 * Check if a given object implements the DeleteRetweetResponse interface.
 */
export function instanceOfDeleteRetweetResponse(value: object): value is DeleteRetweetResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function DeleteRetweetResponseFromJSON(json: any): DeleteRetweetResponse {
    return DeleteRetweetResponseFromJSONTyped(json, false);
}

export function DeleteRetweetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteRetweetResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': DeleteRetweetResponseDataFromJSON(json['data']),
    };
}

export function DeleteRetweetResponseToJSON(value?: DeleteRetweetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': DeleteRetweetResponseDataToJSON(value['data']),
    };
}

