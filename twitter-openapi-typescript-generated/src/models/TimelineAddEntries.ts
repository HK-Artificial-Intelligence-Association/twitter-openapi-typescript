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
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
    InstructionTypeToJSONTyped,
} from './InstructionType';
import type { TimelineAddEntry } from './TimelineAddEntry';
import {
    TimelineAddEntryFromJSON,
    TimelineAddEntryFromJSONTyped,
    TimelineAddEntryToJSON,
    TimelineAddEntryToJSONTyped,
} from './TimelineAddEntry';

/**
 * 
 * @export
 * @interface TimelineAddEntries
 */
export interface TimelineAddEntries {
    /**
     * 
     * @type {Array<TimelineAddEntry>}
     * @memberof TimelineAddEntries
     */
    entries: Array<TimelineAddEntry>;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineAddEntries
     */
    type: InstructionType;
}



/**
 * Check if a given object implements the TimelineAddEntries interface.
 */
export function instanceOfTimelineAddEntries(value: object): value is TimelineAddEntries {
    if (!('entries' in value) || value['entries'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TimelineAddEntriesFromJSON(json: any): TimelineAddEntries {
    return TimelineAddEntriesFromJSONTyped(json, false);
}

export function TimelineAddEntriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineAddEntries {
    if (json == null) {
        return json;
    }
    return {
        
        'entries': ((json['entries'] as Array<any>).map(TimelineAddEntryFromJSON)),
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineAddEntriesToJSON(json: any): TimelineAddEntries {
    return TimelineAddEntriesToJSONTyped(json, false);
}

export function TimelineAddEntriesToJSONTyped(value?: TimelineAddEntries | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'entries': ((value['entries'] as Array<any>).map(TimelineAddEntryToJSON)),
        'type': InstructionTypeToJSON(value['type']),
    };
}

