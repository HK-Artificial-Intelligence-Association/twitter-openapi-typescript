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
import type { TweetDetailResponse } from './TweetDetailResponse';
import {
    instanceOfTweetDetailResponse,
    TweetDetailResponseFromJSON,
    TweetDetailResponseFromJSONTyped,
    TweetDetailResponseToJSON,
} from './TweetDetailResponse';

/**
 * @type GetTweetDetail200Response
 * 
 * @export
 */
export type GetTweetDetail200Response = Errors | TweetDetailResponse;

export function GetTweetDetail200ResponseFromJSON(json: any): GetTweetDetail200Response {
    return GetTweetDetail200ResponseFromJSONTyped(json, false);
}

export function GetTweetDetail200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTweetDetail200Response {
    if (json == null) {
        return json;
    }
    if (instanceOfErrors(json)) {
        return ErrorsFromJSONTyped(json, true);
    }
    if (instanceOfTweetDetailResponse(json)) {
        return TweetDetailResponseFromJSONTyped(json, true);
    }

    return {} as any;
}

export function GetTweetDetail200ResponseToJSON(value?: GetTweetDetail200Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfTweetDetailResponse(value)) {
        return TweetDetailResponseToJSON(value as TweetDetailResponse);
    }

    return {};
}

