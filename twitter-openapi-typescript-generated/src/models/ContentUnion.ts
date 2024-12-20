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

import type { TimelineTimelineCursor } from './TimelineTimelineCursor';
import {
    instanceOfTimelineTimelineCursor,
    TimelineTimelineCursorFromJSON,
    TimelineTimelineCursorFromJSONTyped,
    TimelineTimelineCursorToJSON,
} from './TimelineTimelineCursor';
import type { TimelineTimelineItem } from './TimelineTimelineItem';
import {
    instanceOfTimelineTimelineItem,
    TimelineTimelineItemFromJSON,
    TimelineTimelineItemFromJSONTyped,
    TimelineTimelineItemToJSON,
} from './TimelineTimelineItem';
import type { TimelineTimelineModule } from './TimelineTimelineModule';
import {
    instanceOfTimelineTimelineModule,
    TimelineTimelineModuleFromJSON,
    TimelineTimelineModuleFromJSONTyped,
    TimelineTimelineModuleToJSON,
} from './TimelineTimelineModule';

/**
 * @type ContentUnion
 * 
 * @export
 */
export type ContentUnion = { entryType: 'TimelineTimelineCursor' } & TimelineTimelineCursor | { entryType: 'TimelineTimelineItem' } & TimelineTimelineItem | { entryType: 'TimelineTimelineModule' } & TimelineTimelineModule;

export function ContentUnionFromJSON(json: any): ContentUnion {
    return ContentUnionFromJSONTyped(json, false);
}

export function ContentUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentUnion {
    if (json == null) {
        return json;
    }
    switch (json['entryType']) {
        case 'TimelineTimelineCursor':
            return Object.assign({}, TimelineTimelineCursorFromJSONTyped(json, true), { entryType: 'TimelineTimelineCursor' } as const);
        case 'TimelineTimelineItem':
            return Object.assign({}, TimelineTimelineItemFromJSONTyped(json, true), { entryType: 'TimelineTimelineItem' } as const);
        case 'TimelineTimelineModule':
            return Object.assign({}, TimelineTimelineModuleFromJSONTyped(json, true), { entryType: 'TimelineTimelineModule' } as const);
        default:
            throw new Error(`No variant of ContentUnion exists with 'entryType=${json['entryType']}'`);
    }
}

export function ContentUnionToJSON(json: any): any {
    return ContentUnionToJSONTyped(json, false);
}

export function ContentUnionToJSONTyped(value?: ContentUnion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['entryType']) {
        case 'TimelineTimelineCursor':
            return Object.assign({}, TimelineTimelineCursorToJSON(value), { entryType: 'TimelineTimelineCursor' } as const);
        case 'TimelineTimelineItem':
            return Object.assign({}, TimelineTimelineItemToJSON(value), { entryType: 'TimelineTimelineItem' } as const);
        case 'TimelineTimelineModule':
            return Object.assign({}, TimelineTimelineModuleToJSON(value), { entryType: 'TimelineTimelineModule' } as const);
        default:
            throw new Error(`No variant of ContentUnion exists with 'entryType=${value['entryType']}'`);
    }

}

