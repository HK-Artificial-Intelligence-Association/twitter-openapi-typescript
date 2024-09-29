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
} from './TypeName';
import type { Highlight } from './Highlight';
import {
    HighlightFromJSON,
    HighlightFromJSONTyped,
    HighlightToJSON,
} from './Highlight';
import type { ItemResult } from './ItemResult';
import {
    ItemResultFromJSON,
    ItemResultFromJSONTyped,
    ItemResultToJSON,
} from './ItemResult';
import type { SocialContextUnion } from './SocialContextUnion';
import {
    SocialContextUnionFromJSON,
    SocialContextUnionFromJSONTyped,
    SocialContextUnionToJSON,
} from './SocialContextUnion';
import type { ContentItemType } from './ContentItemType';
import {
    ContentItemTypeFromJSON,
    ContentItemTypeFromJSONTyped,
    ContentItemTypeToJSON,
} from './ContentItemType';

/**
 * 
 * @export
 * @interface TimelineTweet
 */
export interface TimelineTweet {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineTweet
     */
    typename: TypeName;
    /**
     * 
     * @type {Highlight}
     * @memberof TimelineTweet
     */
    highlights?: Highlight;
    /**
     * 
     * @type {ContentItemType}
     * @memberof TimelineTweet
     */
    itemType: ContentItemType;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTweet
     */
    promotedMetadata?: { [key: string]: any; };
    /**
     * 
     * @type {SocialContextUnion}
     * @memberof TimelineTweet
     */
    socialContext?: SocialContextUnion;
    /**
     * 
     * @type {string}
     * @memberof TimelineTweet
     */
    tweetDisplayType: TimelineTweetTweetDisplayTypeEnum;
    /**
     * 
     * @type {ItemResult}
     * @memberof TimelineTweet
     */
    tweetResults: ItemResult;
}


/**
 * @export
 */
export const TimelineTweetTweetDisplayTypeEnum = {
    Tweet: 'Tweet',
    SelfThread: 'SelfThread',
    MediaGrid: 'MediaGrid',
    CondensedTweet: 'CondensedTweet'
} as const;
export type TimelineTweetTweetDisplayTypeEnum = typeof TimelineTweetTweetDisplayTypeEnum[keyof typeof TimelineTweetTweetDisplayTypeEnum];


/**
 * Check if a given object implements the TimelineTweet interface.
 */
export function instanceOfTimelineTweet(value: object): value is TimelineTweet {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('itemType' in value) || value['itemType'] === undefined) return false;
    if (!('tweetDisplayType' in value) || value['tweetDisplayType'] === undefined) return false;
    if (!('tweetResults' in value) || value['tweetResults'] === undefined) return false;
    return true;
}

export function TimelineTweetFromJSON(json: any): TimelineTweet {
    return TimelineTweetFromJSONTyped(json, false);
}

export function TimelineTweetFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTweet {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'highlights': json['highlights'] == null ? undefined : HighlightFromJSON(json['highlights']),
        'itemType': ContentItemTypeFromJSON(json['itemType']),
        'promotedMetadata': json['promotedMetadata'] == null ? undefined : json['promotedMetadata'],
        'socialContext': json['socialContext'] == null ? undefined : SocialContextUnionFromJSON(json['socialContext']),
        'tweetDisplayType': json['tweetDisplayType'],
        'tweetResults': ItemResultFromJSON(json['tweet_results']),
    };
}

export function TimelineTweetToJSON(value?: TimelineTweet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'highlights': HighlightToJSON(value['highlights']),
        'itemType': ContentItemTypeToJSON(value['itemType']),
        'promotedMetadata': value['promotedMetadata'],
        'socialContext': SocialContextUnionToJSON(value['socialContext']),
        'tweetDisplayType': value['tweetDisplayType'],
        'tweet_results': ItemResultToJSON(value['tweetResults']),
    };
}

