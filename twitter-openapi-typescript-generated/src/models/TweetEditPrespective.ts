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
 * @interface TweetEditPrespective
 */
export interface TweetEditPrespective {
    /**
     * 
     * @type {boolean}
     * @memberof TweetEditPrespective
     */
    favorited?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TweetEditPrespective
     */
    retweeted?: boolean;
}

/**
 * Check if a given object implements the TweetEditPrespective interface.
 */
export function instanceOfTweetEditPrespective(value: object): value is TweetEditPrespective {
    return true;
}

export function TweetEditPrespectiveFromJSON(json: any): TweetEditPrespective {
    return TweetEditPrespectiveFromJSONTyped(json, false);
}

export function TweetEditPrespectiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetEditPrespective {
    if (json == null) {
        return json;
    }
    return {
        
        'favorited': json['favorited'] == null ? undefined : json['favorited'],
        'retweeted': json['retweeted'] == null ? undefined : json['retweeted'],
    };
}

export function TweetEditPrespectiveToJSON(json: any): TweetEditPrespective {
    return TweetEditPrespectiveToJSONTyped(json, false);
}

export function TweetEditPrespectiveToJSONTyped(value?: TweetEditPrespective | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'favorited': value['favorited'],
        'retweeted': value['retweeted'],
    };
}

