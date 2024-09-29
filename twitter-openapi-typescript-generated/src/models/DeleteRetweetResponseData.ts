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
import type { CreateRetweetResponseResult } from './CreateRetweetResponseResult';
import {
    CreateRetweetResponseResultFromJSON,
    CreateRetweetResponseResultFromJSONTyped,
    CreateRetweetResponseResultToJSON,
} from './CreateRetweetResponseResult';

/**
 * 
 * @export
 * @interface DeleteRetweetResponseData
 */
export interface DeleteRetweetResponseData {
    /**
     * 
     * @type {CreateRetweetResponseResult}
     * @memberof DeleteRetweetResponseData
     */
    createRetweet?: CreateRetweetResponseResult;
}

/**
 * Check if a given object implements the DeleteRetweetResponseData interface.
 */
export function instanceOfDeleteRetweetResponseData(value: object): value is DeleteRetweetResponseData {
    return true;
}

export function DeleteRetweetResponseDataFromJSON(json: any): DeleteRetweetResponseData {
    return DeleteRetweetResponseDataFromJSONTyped(json, false);
}

export function DeleteRetweetResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteRetweetResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'createRetweet': json['create_retweet'] == null ? undefined : CreateRetweetResponseResultFromJSON(json['create_retweet']),
    };
}

export function DeleteRetweetResponseDataToJSON(value?: DeleteRetweetResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'create_retweet': CreateRetweetResponseResultToJSON(value['createRetweet']),
    };
}

