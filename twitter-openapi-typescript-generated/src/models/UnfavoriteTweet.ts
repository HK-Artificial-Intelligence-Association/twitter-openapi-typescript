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
 * @interface UnfavoriteTweet
 */
export interface UnfavoriteTweet {
    /**
     * 
     * @type {string}
     * @memberof UnfavoriteTweet
     */
    unfavoriteTweet?: string;
}

/**
 * Check if a given object implements the UnfavoriteTweet interface.
 */
export function instanceOfUnfavoriteTweet(value: object): value is UnfavoriteTweet {
    return true;
}

export function UnfavoriteTweetFromJSON(json: any): UnfavoriteTweet {
    return UnfavoriteTweetFromJSONTyped(json, false);
}

export function UnfavoriteTweetFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnfavoriteTweet {
    if (json == null) {
        return json;
    }
    return {
        
        'unfavoriteTweet': json['unfavorite_tweet'] == null ? undefined : json['unfavorite_tweet'],
    };
}

export function UnfavoriteTweetToJSON(json: any): UnfavoriteTweet {
    return UnfavoriteTweetToJSONTyped(json, false);
}

export function UnfavoriteTweetToJSONTyped(value?: UnfavoriteTweet | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'unfavorite_tweet': value['unfavoriteTweet'],
    };
}

