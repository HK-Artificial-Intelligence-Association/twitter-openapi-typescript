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

import {
    Errors,
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';
import {
    UnfavoriteTweetResponseData,
    instanceOfUnfavoriteTweetResponseData,
    UnfavoriteTweetResponseDataFromJSON,
    UnfavoriteTweetResponseDataFromJSONTyped,
    UnfavoriteTweetResponseDataToJSON,
} from './UnfavoriteTweetResponseData';

/**
 * @type PostUnfavoriteTweet200Response
 * 
 * @export
 */
export type PostUnfavoriteTweet200Response = Errors | UnfavoriteTweetResponseData;

export function PostUnfavoriteTweet200ResponseFromJSON(json: any): PostUnfavoriteTweet200Response {
    return PostUnfavoriteTweet200ResponseFromJSONTyped(json, false);
}

export function PostUnfavoriteTweet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostUnfavoriteTweet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...UnfavoriteTweetResponseDataFromJSONTyped(json, true) };
}

export function PostUnfavoriteTweet200ResponseToJSON(value?: PostUnfavoriteTweet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfUnfavoriteTweetResponseData(value)) {
        return UnfavoriteTweetResponseDataToJSON(value as UnfavoriteTweetResponseData);
    }

    return {};
}
