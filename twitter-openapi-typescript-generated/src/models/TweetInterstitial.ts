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
import type { TweetInterstitialRevealText } from './TweetInterstitialRevealText';
import {
    TweetInterstitialRevealTextFromJSON,
    TweetInterstitialRevealTextFromJSONTyped,
    TweetInterstitialRevealTextToJSON,
} from './TweetInterstitialRevealText';
import type { TweetInterstitialText } from './TweetInterstitialText';
import {
    TweetInterstitialTextFromJSON,
    TweetInterstitialTextFromJSONTyped,
    TweetInterstitialTextToJSON,
} from './TweetInterstitialText';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';

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
export function instanceOfTweetInterstitial(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "typename" in value;
    isInstance = isInstance && "displayType" in value;
    isInstance = isInstance && "revealText" in value;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

export function TweetInterstitialFromJSON(json: any): TweetInterstitial {
    return TweetInterstitialFromJSONTyped(json, false);
}

export function TweetInterstitialFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetInterstitial {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'displayType': json['displayType'],
        'revealText': TweetInterstitialRevealTextFromJSON(json['revealText']),
        'text': TweetInterstitialTextFromJSON(json['text']),
    };
}

export function TweetInterstitialToJSON(value?: TweetInterstitial | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
        'displayType': value.displayType,
        'revealText': TweetInterstitialRevealTextToJSON(value.revealText),
        'text': TweetInterstitialTextToJSON(value.text),
    };
}
