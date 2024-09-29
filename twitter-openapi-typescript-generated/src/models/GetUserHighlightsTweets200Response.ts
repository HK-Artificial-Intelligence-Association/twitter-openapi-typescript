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

import type { Errors } from './Errors';
import {
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';
import type { UserHighlightsTweetsResponse } from './UserHighlightsTweetsResponse';
import {
    instanceOfUserHighlightsTweetsResponse,
    UserHighlightsTweetsResponseFromJSON,
    UserHighlightsTweetsResponseFromJSONTyped,
    UserHighlightsTweetsResponseToJSON,
} from './UserHighlightsTweetsResponse';

/**
 * @type GetUserHighlightsTweets200Response
 * 
 * @export
 */
export type GetUserHighlightsTweets200Response = Errors | UserHighlightsTweetsResponse;

export function GetUserHighlightsTweets200ResponseFromJSON(json: any): GetUserHighlightsTweets200Response {
    return GetUserHighlightsTweets200ResponseFromJSONTyped(json, false);
}

export function GetUserHighlightsTweets200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserHighlightsTweets200Response {
    if (json == null) {
        return json;
    }
    if (instanceOfErrors(json)) {
        return ErrorsFromJSONTyped(json, true);
    }
    if (instanceOfUserHighlightsTweetsResponse(json)) {
        return UserHighlightsTweetsResponseFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetUserHighlightsTweets200ResponseToJSON(value?: GetUserHighlightsTweets200Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfUserHighlightsTweetsResponse(value)) {
        return UserHighlightsTweetsResponseToJSON(value as UserHighlightsTweetsResponse);
    }

    return {};
}

