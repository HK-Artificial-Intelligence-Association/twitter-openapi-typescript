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
import type { TweetCardLegacyBindingValueDataImage } from './TweetCardLegacyBindingValueDataImage';
import {
    TweetCardLegacyBindingValueDataImageFromJSON,
    TweetCardLegacyBindingValueDataImageFromJSONTyped,
    TweetCardLegacyBindingValueDataImageToJSON,
} from './TweetCardLegacyBindingValueDataImage';
import type { UserValue } from './UserValue';
import {
    UserValueFromJSON,
    UserValueFromJSONTyped,
    UserValueToJSON,
} from './UserValue';

/**
 * 
 * @export
 * @interface TweetCardLegacyBindingValueData
 */
export interface TweetCardLegacyBindingValueData {
    /**
     * 
     * @type {boolean}
     * @memberof TweetCardLegacyBindingValueData
     */
    booleanValue?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TweetCardLegacyBindingValueData
     */
    imageColorValue?: { [key: string]: any; };
    /**
     * 
     * @type {TweetCardLegacyBindingValueDataImage}
     * @memberof TweetCardLegacyBindingValueData
     */
    imageValue?: TweetCardLegacyBindingValueDataImage;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacyBindingValueData
     */
    scribeKey?: string;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacyBindingValueData
     */
    stringValue?: string;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacyBindingValueData
     */
    type: string;
    /**
     * 
     * @type {UserValue}
     * @memberof TweetCardLegacyBindingValueData
     */
    userValue?: UserValue;
}

/**
 * Check if a given object implements the TweetCardLegacyBindingValueData interface.
 */
export function instanceOfTweetCardLegacyBindingValueData(value: object): value is TweetCardLegacyBindingValueData {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TweetCardLegacyBindingValueDataFromJSON(json: any): TweetCardLegacyBindingValueData {
    return TweetCardLegacyBindingValueDataFromJSONTyped(json, false);
}

export function TweetCardLegacyBindingValueDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCardLegacyBindingValueData {
    if (json == null) {
        return json;
    }
    return {
        
        'booleanValue': json['boolean_value'] == null ? undefined : json['boolean_value'],
        'imageColorValue': json['image_color_value'] == null ? undefined : json['image_color_value'],
        'imageValue': json['image_value'] == null ? undefined : TweetCardLegacyBindingValueDataImageFromJSON(json['image_value']),
        'scribeKey': json['scribe_key'] == null ? undefined : json['scribe_key'],
        'stringValue': json['string_value'] == null ? undefined : json['string_value'],
        'type': json['type'],
        'userValue': json['user_value'] == null ? undefined : UserValueFromJSON(json['user_value']),
    };
}

export function TweetCardLegacyBindingValueDataToJSON(value?: TweetCardLegacyBindingValueData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'boolean_value': value['booleanValue'],
        'image_color_value': value['imageColorValue'],
        'image_value': TweetCardLegacyBindingValueDataImageToJSON(value['imageValue']),
        'scribe_key': value['scribeKey'],
        'string_value': value['stringValue'],
        'type': value['type'],
        'user_value': UserValueToJSON(value['userValue']),
    };
}

