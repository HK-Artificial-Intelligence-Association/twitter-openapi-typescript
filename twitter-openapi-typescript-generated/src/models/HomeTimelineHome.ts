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
 * @interface HomeTimelineHome
 */
export interface HomeTimelineHome {
    /**
     * 
     * @type {Timeline}
     * @memberof HomeTimelineHome
     */
    homeTimelineUrt: Timeline;
}

/**
 * Check if a given object implements the HomeTimelineHome interface.
 */
export function instanceOfHomeTimelineHome(value: object): value is HomeTimelineHome {
    if (!('homeTimelineUrt' in value) || value['homeTimelineUrt'] === undefined) return false;
    return true;
}

export function HomeTimelineHomeFromJSON(json: any): HomeTimelineHome {
    return HomeTimelineHomeFromJSONTyped(json, false);
}

export function HomeTimelineHomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomeTimelineHome {
    if (json == null) {
        return json;
    }
    return {
        
        'homeTimelineUrt': TimelineFromJSON(json['home_timeline_urt']),
    };
}

export function HomeTimelineHomeToJSON(value?: HomeTimelineHome | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'home_timeline_urt': TimelineToJSON(value['homeTimelineUrt']),
    };
}

