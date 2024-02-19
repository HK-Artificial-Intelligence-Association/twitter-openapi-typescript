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
import type { SuperFollowsReplyUserResultData } from './SuperFollowsReplyUserResultData';
import {
    SuperFollowsReplyUserResultDataFromJSON,
    SuperFollowsReplyUserResultDataFromJSONTyped,
    SuperFollowsReplyUserResultDataToJSON,
} from './SuperFollowsReplyUserResultData';

/**
 * 
 * @export
 * @interface SuperFollowsReplyUserResult
 */
export interface SuperFollowsReplyUserResult {
    /**
     * 
     * @type {SuperFollowsReplyUserResultData}
     * @memberof SuperFollowsReplyUserResult
     */
    result: SuperFollowsReplyUserResultData;
}

/**
 * Check if a given object implements the SuperFollowsReplyUserResult interface.
 */
export function instanceOfSuperFollowsReplyUserResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function SuperFollowsReplyUserResultFromJSON(json: any): SuperFollowsReplyUserResult {
    return SuperFollowsReplyUserResultFromJSONTyped(json, false);
}

export function SuperFollowsReplyUserResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuperFollowsReplyUserResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': SuperFollowsReplyUserResultDataFromJSON(json['result']),
    };
}

export function SuperFollowsReplyUserResultToJSON(value?: SuperFollowsReplyUserResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': SuperFollowsReplyUserResultDataToJSON(value.result),
    };
}
