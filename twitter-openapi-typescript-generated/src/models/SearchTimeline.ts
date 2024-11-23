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
    TimelineToJSONTyped,
} from './Timeline';

/**
 * 
 * @export
 * @interface SearchTimeline
 */
export interface SearchTimeline {
    /**
     * 
     * @type {Timeline}
     * @memberof SearchTimeline
     */
    timeline: Timeline;
}

/**
 * Check if a given object implements the SearchTimeline interface.
 */
export function instanceOfSearchTimeline(value: object): value is SearchTimeline {
    if (!('timeline' in value) || value['timeline'] === undefined) return false;
    return true;
}

export function SearchTimelineFromJSON(json: any): SearchTimeline {
    return SearchTimelineFromJSONTyped(json, false);
}

export function SearchTimelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchTimeline {
    if (json == null) {
        return json;
    }
    return {
        
        'timeline': TimelineFromJSON(json['timeline']),
    };
}

export function SearchTimelineToJSON(json: any): SearchTimeline {
    return SearchTimelineToJSONTyped(json, false);
}

export function SearchTimelineToJSONTyped(value?: SearchTimeline | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'timeline': TimelineToJSON(value['timeline']),
    };
}

