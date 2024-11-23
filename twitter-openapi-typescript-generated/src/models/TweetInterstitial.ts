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
import type { TweetInterstitialText } from './TweetInterstitialText';
import {
    TweetInterstitialTextFromJSON,
    TweetInterstitialTextFromJSONTyped,
    TweetInterstitialTextToJSON,
    TweetInterstitialTextToJSONTyped,
} from './TweetInterstitialText';
import type { TweetInterstitialRevealText } from './TweetInterstitialRevealText';
import {
    TweetInterstitialRevealTextFromJSON,
    TweetInterstitialRevealTextFromJSONTyped,
    TweetInterstitialRevealTextToJSON,
    TweetInterstitialRevealTextToJSONTyped,
} from './TweetInterstitialRevealText';

/**
 * 
 * @export
 * @interface TweetInterstitial
 */
export interface TweetInterstitial {
    /**
     * 
     * @type {TypeName}
     * @memberof TweetInterstitial
     */
    typename: TypeName;
    /**
     * 
     * @type {string}
     * @memberof TweetInterstitial
     */
    displayType: TweetInterstitialDisplayTypeEnum;
    /**
     * 
     * @type {TweetInterstitialRevealText}
     * @memberof TweetInterstitial
     */
    revealText: TweetInterstitialRevealText;
    /**
     * 
     * @type {TweetInterstitialText}
     * @memberof TweetInterstitial
     */
    text: TweetInterstitialText;
}


/**
 * @export
 */
export const TweetInterstitialDisplayTypeEnum = {
    NonCompliant: 'NonCompliant'
} as const;
export type TweetInterstitialDisplayTypeEnum = typeof TweetInterstitialDisplayTypeEnum[keyof typeof TweetInterstitialDisplayTypeEnum];


/**
 * Check if a given object implements the TweetInterstitial interface.
 */
export function instanceOfTweetInterstitial(value: object): value is TweetInterstitial {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('displayType' in value) || value['displayType'] === undefined) return false;
    if (!('revealText' in value) || value['revealText'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function TweetInterstitialFromJSON(json: any): TweetInterstitial {
    return TweetInterstitialFromJSONTyped(json, false);
}

export function TweetInterstitialFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetInterstitial {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'displayType': json['displayType'],
        'revealText': TweetInterstitialRevealTextFromJSON(json['revealText']),
        'text': TweetInterstitialTextFromJSON(json['text']),
    };
}

export function TweetInterstitialToJSON(json: any): TweetInterstitial {
    return TweetInterstitialToJSONTyped(json, false);
}

export function TweetInterstitialToJSONTyped(value?: TweetInterstitial | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'displayType': value['displayType'],
        'revealText': TweetInterstitialRevealTextToJSON(value['revealText']),
        'text': TweetInterstitialTextToJSON(value['text']),
    };
}

