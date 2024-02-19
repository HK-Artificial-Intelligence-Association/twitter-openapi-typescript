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

import { exists, mapValues } from '../runtime';
import type { TweetInterstitialTextEntity } from './TweetInterstitialTextEntity';
import {
    TweetInterstitialTextEntityFromJSON,
    TweetInterstitialTextEntityFromJSONTyped,
    TweetInterstitialTextEntityToJSON,
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
export function instanceOfTweetInterstitialText(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entities" in value;
    isInstance = isInstance && "rtl" in value;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

export function TweetInterstitialTextFromJSON(json: any): TweetInterstitialText {
    return TweetInterstitialTextFromJSONTyped(json, false);
}

export function TweetInterstitialTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetInterstitialText {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entities': ((json['entities'] as Array<any>).map(TweetInterstitialTextEntityFromJSON)),
        'rtl': json['rtl'],
        'text': json['text'],
    };
}

export function TweetInterstitialTextToJSON(value?: TweetInterstitialText | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entities': ((value.entities as Array<any>).map(TweetInterstitialTextEntityToJSON)),
        'rtl': value.rtl,
        'text': value.text,
    };
}
