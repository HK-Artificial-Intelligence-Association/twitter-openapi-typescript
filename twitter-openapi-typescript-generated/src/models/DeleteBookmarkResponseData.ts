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
 * @interface DeleteBookmarkResponseData
 */
export interface DeleteBookmarkResponseData {
    /**
     * 
     * @type {string}
     * @memberof DeleteBookmarkResponseData
     */
    tweetBookmarkDelete?: string;
}

/**
 * Check if a given object implements the DeleteBookmarkResponseData interface.
 */
export function instanceOfDeleteBookmarkResponseData(value: object): value is DeleteBookmarkResponseData {
    return true;
}

export function DeleteBookmarkResponseDataFromJSON(json: any): DeleteBookmarkResponseData {
    return DeleteBookmarkResponseDataFromJSONTyped(json, false);
}

export function DeleteBookmarkResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteBookmarkResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'tweetBookmarkDelete': json['tweet_bookmark_delete'] == null ? undefined : json['tweet_bookmark_delete'],
    };
}

export function DeleteBookmarkResponseDataToJSON(json: any): DeleteBookmarkResponseData {
    return DeleteBookmarkResponseDataToJSONTyped(json, false);
}

export function DeleteBookmarkResponseDataToJSONTyped(value?: DeleteBookmarkResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tweet_bookmark_delete': value['tweetBookmarkDelete'],
    };
}

