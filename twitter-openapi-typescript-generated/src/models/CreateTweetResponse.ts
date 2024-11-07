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
import type { CreateTweetResponseData } from './CreateTweetResponseData';
import {
    CreateTweetResponseDataFromJSON,
    CreateTweetResponseDataFromJSONTyped,
    CreateTweetResponseDataToJSON,
} from './CreateTweetResponseData';

/**
 * 
 * @export
 * @interface CreateTweetResponse
 */
export interface CreateTweetResponse {
    /**
     * 
     * @type {CreateTweetResponseData}
     * @memberof CreateTweetResponse
     */
    data: CreateTweetResponseData;
    /**
     * 
     * @type {Array<Error>}
     * @memberof CreateTweetResponse
     */
    errors?: Array<Error>;
}

/**
 * Check if a given object implements the CreateTweetResponse interface.
 */
export function instanceOfCreateTweetResponse(value: object): value is CreateTweetResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CreateTweetResponseFromJSON(json: any): CreateTweetResponse {
    return CreateTweetResponseFromJSONTyped(json, false);
}

export function CreateTweetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTweetResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CreateTweetResponseDataFromJSON(json['data']),
        'errors': json['errors'] == null ? undefined : json['errors'],
    };
}

export function CreateTweetResponseToJSON(value?: CreateTweetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CreateTweetResponseDataToJSON(value['data']),
        'errors': value['errors'],
    };
}

