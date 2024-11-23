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
 * @interface UserHighlightsInfo
 */
export interface UserHighlightsInfo {
    /**
     * 
     * @type {boolean}
     * @memberof UserHighlightsInfo
     */
    canHighlightTweets: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserHighlightsInfo
     */
    highlightedTweets: string;
}

/**
 * Check if a given object implements the UserHighlightsInfo interface.
 */
export function instanceOfUserHighlightsInfo(value: object): value is UserHighlightsInfo {
    if (!('canHighlightTweets' in value) || value['canHighlightTweets'] === undefined) return false;
    if (!('highlightedTweets' in value) || value['highlightedTweets'] === undefined) return false;
    return true;
}

export function UserHighlightsInfoFromJSON(json: any): UserHighlightsInfo {
    return UserHighlightsInfoFromJSONTyped(json, false);
}

export function UserHighlightsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserHighlightsInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'canHighlightTweets': json['can_highlight_tweets'],
        'highlightedTweets': json['highlighted_tweets'],
    };
}

export function UserHighlightsInfoToJSON(json: any): UserHighlightsInfo {
    return UserHighlightsInfoToJSONTyped(json, false);
}

export function UserHighlightsInfoToJSONTyped(value?: UserHighlightsInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'can_highlight_tweets': value['canHighlightTweets'],
        'highlighted_tweets': value['highlightedTweets'],
    };
}

