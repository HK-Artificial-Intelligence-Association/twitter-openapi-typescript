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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
    TypeNameToJSONTyped,
} from './TypeName';

/**
 * 
 * @export
 * @interface TweetUnavailable
 */
export interface TweetUnavailable {
    /**
     * 
     * @type {TypeName}
     * @memberof TweetUnavailable
     */
    typename?: TypeName;
    /**
     * 
     * @type {string}
     * @memberof TweetUnavailable
     */
    reason?: string;
}



/**
 * Check if a given object implements the TweetUnavailable interface.
 */
export function instanceOfTweetUnavailable(value: object): value is TweetUnavailable {
    return true;
}

export function TweetUnavailableFromJSON(json: any): TweetUnavailable {
    return TweetUnavailableFromJSONTyped(json, false);
}

export function TweetUnavailableFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetUnavailable {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': json['__typename'] == null ? undefined : TypeNameFromJSON(json['__typename']),
        'reason': json['reason'] == null ? undefined : json['reason'],
    };
}

export function TweetUnavailableToJSON(json: any): TweetUnavailable {
    return TweetUnavailableToJSONTyped(json, false);
}

export function TweetUnavailableToJSONTyped(value?: TweetUnavailable | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'reason': value['reason'],
    };
}

