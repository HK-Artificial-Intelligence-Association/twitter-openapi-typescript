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
import type { TimelineV2 } from './TimelineV2';
import {
    TimelineV2FromJSON,
    TimelineV2FromJSONTyped,
    TimelineV2ToJSON,
    TimelineV2ToJSONTyped,
} from './TimelineV2';

/**
 * 
 * @export
 * @interface TweetRetweetersResponseData
 */
export interface TweetRetweetersResponseData {
    /**
     * 
     * @type {TimelineV2}
     * @memberof TweetRetweetersResponseData
     */
    retweetersTimeline?: TimelineV2;
}

/**
 * Check if a given object implements the TweetRetweetersResponseData interface.
 */
export function instanceOfTweetRetweetersResponseData(value: object): value is TweetRetweetersResponseData {
    return true;
}

export function TweetRetweetersResponseDataFromJSON(json: any): TweetRetweetersResponseData {
    return TweetRetweetersResponseDataFromJSONTyped(json, false);
}

export function TweetRetweetersResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetRetweetersResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'retweetersTimeline': json['retweeters_timeline'] == null ? undefined : TimelineV2FromJSON(json['retweeters_timeline']),
    };
}

export function TweetRetweetersResponseDataToJSON(json: any): TweetRetweetersResponseData {
    return TweetRetweetersResponseDataToJSONTyped(json, false);
}

export function TweetRetweetersResponseDataToJSONTyped(value?: TweetRetweetersResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'retweeters_timeline': TimelineV2ToJSON(value['retweetersTimeline']),
    };
}

