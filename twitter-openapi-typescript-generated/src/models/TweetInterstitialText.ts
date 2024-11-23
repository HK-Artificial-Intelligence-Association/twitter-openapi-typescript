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
import type { TweetInterstitialTextEntity } from './TweetInterstitialTextEntity';
import {
    TweetInterstitialTextEntityFromJSON,
    TweetInterstitialTextEntityFromJSONTyped,
    TweetInterstitialTextEntityToJSON,
    TweetInterstitialTextEntityToJSONTyped,
} from './TweetInterstitialTextEntity';

/**
 * 
 * @export
 * @interface TweetInterstitialText
 */
export interface TweetInterstitialText {
    /**
     * 
     * @type {Array<TweetInterstitialTextEntity>}
     * @memberof TweetInterstitialText
     */
    entities: Array<TweetInterstitialTextEntity>;
    /**
     * 
     * @type {boolean}
     * @memberof TweetInterstitialText
     */
    rtl: boolean;
    /**
     * 
     * @type {string}
     * @memberof TweetInterstitialText
     */
    text: string;
}

/**
 * Check if a given object implements the TweetInterstitialText interface.
 */
export function instanceOfTweetInterstitialText(value: object): value is TweetInterstitialText {
    if (!('entities' in value) || value['entities'] === undefined) return false;
    if (!('rtl' in value) || value['rtl'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function TweetInterstitialTextFromJSON(json: any): TweetInterstitialText {
    return TweetInterstitialTextFromJSONTyped(json, false);
}

export function TweetInterstitialTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetInterstitialText {
    if (json == null) {
        return json;
    }
    return {
        
        'entities': ((json['entities'] as Array<any>).map(TweetInterstitialTextEntityFromJSON)),
        'rtl': json['rtl'],
        'text': json['text'],
    };
}

export function TweetInterstitialTextToJSON(json: any): TweetInterstitialText {
    return TweetInterstitialTextToJSONTyped(json, false);
}

export function TweetInterstitialTextToJSONTyped(value?: TweetInterstitialText | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'entities': ((value['entities'] as Array<any>).map(TweetInterstitialTextEntityToJSON)),
        'rtl': value['rtl'],
        'text': value['text'],
    };
}

