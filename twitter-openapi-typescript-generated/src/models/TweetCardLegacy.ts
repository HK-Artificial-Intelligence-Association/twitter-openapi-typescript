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
import type { TweetCardPlatformData } from './TweetCardPlatformData';
import {
    TweetCardPlatformDataFromJSON,
    TweetCardPlatformDataFromJSONTyped,
    TweetCardPlatformDataToJSON,
    TweetCardPlatformDataToJSONTyped,
} from './TweetCardPlatformData';
import type { TweetCardLegacyBindingValue } from './TweetCardLegacyBindingValue';
import {
    TweetCardLegacyBindingValueFromJSON,
    TweetCardLegacyBindingValueFromJSONTyped,
    TweetCardLegacyBindingValueToJSON,
    TweetCardLegacyBindingValueToJSONTyped,
} from './TweetCardLegacyBindingValue';
import type { UserResults } from './UserResults';
import {
    UserResultsFromJSON,
    UserResultsFromJSONTyped,
    UserResultsToJSON,
    UserResultsToJSONTyped,
} from './UserResults';

/**
 * 
 * @export
 * @interface TweetCardLegacy
 */
export interface TweetCardLegacy {
    /**
     * 
     * @type {Array<TweetCardLegacyBindingValue>}
     * @memberof TweetCardLegacy
     */
    bindingValues: Array<TweetCardLegacyBindingValue>;
    /**
     * 
     * @type {TweetCardPlatformData}
     * @memberof TweetCardLegacy
     */
    cardPlatform?: TweetCardPlatformData;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacy
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacy
     */
    url: string;
    /**
     * 
     * @type {Array<UserResults>}
     * @memberof TweetCardLegacy
     */
    userRefsResults?: Array<UserResults>;
}

/**
 * Check if a given object implements the TweetCardLegacy interface.
 */
export function instanceOfTweetCardLegacy(value: object): value is TweetCardLegacy {
    if (!('bindingValues' in value) || value['bindingValues'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function TweetCardLegacyFromJSON(json: any): TweetCardLegacy {
    return TweetCardLegacyFromJSONTyped(json, false);
}

export function TweetCardLegacyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCardLegacy {
    if (json == null) {
        return json;
    }
    return {
        
        'bindingValues': ((json['binding_values'] as Array<any>).map(TweetCardLegacyBindingValueFromJSON)),
        'cardPlatform': json['card_platform'] == null ? undefined : TweetCardPlatformDataFromJSON(json['card_platform']),
        'name': json['name'],
        'url': json['url'],
        'userRefsResults': json['user_refs_results'] == null ? undefined : ((json['user_refs_results'] as Array<any>).map(UserResultsFromJSON)),
    };
}

export function TweetCardLegacyToJSON(json: any): TweetCardLegacy {
    return TweetCardLegacyToJSONTyped(json, false);
}

export function TweetCardLegacyToJSONTyped(value?: TweetCardLegacy | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'binding_values': ((value['bindingValues'] as Array<any>).map(TweetCardLegacyBindingValueToJSON)),
        'card_platform': TweetCardPlatformDataToJSON(value['cardPlatform']),
        'name': value['name'],
        'url': value['url'],
        'user_refs_results': value['userRefsResults'] == null ? undefined : ((value['userRefsResults'] as Array<any>).map(UserResultsToJSON)),
    };
}

