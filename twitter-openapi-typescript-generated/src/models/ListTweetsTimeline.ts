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
import type { Timeline } from './Timeline';
import {
    TimelineFromJSON,
    TimelineFromJSONTyped,
    TimelineToJSON,
} from './Timeline';

/**
 * 
 * @export
 * @interface ListTweetsTimeline
 */
export interface ListTweetsTimeline {
    /**
     * 
     * @type {Timeline}
     * @memberof ListTweetsTimeline
     */
    timeline?: Timeline;
}

/**
 * Check if a given object implements the ListTweetsTimeline interface.
 */
export function instanceOfListTweetsTimeline(value: object): value is ListTweetsTimeline {
    return true;
}

export function ListTweetsTimelineFromJSON(json: any): ListTweetsTimeline {
    return ListTweetsTimelineFromJSONTyped(json, false);
}

export function ListTweetsTimelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTweetsTimeline {
    if (json == null) {
        return json;
    }
    return {
        
        'timeline': json['timeline'] == null ? undefined : TimelineFromJSON(json['timeline']),
    };
}

export function ListTweetsTimelineToJSON(value?: ListTweetsTimeline | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'timeline': TimelineToJSON(value['timeline']),
    };
}

