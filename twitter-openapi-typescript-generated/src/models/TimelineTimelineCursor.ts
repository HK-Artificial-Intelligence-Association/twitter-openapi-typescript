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
import type { CursorType } from './CursorType';
import {
    CursorTypeFromJSON,
    CursorTypeFromJSONTyped,
    CursorTypeToJSON,
} from './CursorType';
import type { DisplayTreatment } from './DisplayTreatment';
import {
    DisplayTreatmentFromJSON,
    DisplayTreatmentFromJSONTyped,
    DisplayTreatmentToJSON,
} from './DisplayTreatment';
import type { ContentEntryType } from './ContentEntryType';
import {
    ContentEntryTypeFromJSON,
    ContentEntryTypeFromJSONTyped,
    ContentEntryTypeToJSON,
} from './ContentEntryType';

/**
 * 
 * @export
 * @interface TimelineTimelineCursor
 */
export interface TimelineTimelineCursor {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineTimelineCursor
     */
    typename: TypeName;
    /**
     * 
     * @type {CursorType}
     * @memberof TimelineTimelineCursor
     */
    cursorType: CursorType;
    /**
     * 
     * @type {DisplayTreatment}
     * @memberof TimelineTimelineCursor
     */
    displayTreatment?: DisplayTreatment;
    /**
     * 
     * @type {ContentEntryType}
     * @memberof TimelineTimelineCursor
     */
    entryType?: ContentEntryType;
    /**
     * 
     * @type {ContentEntryType}
     * @memberof TimelineTimelineCursor
     */
    itemType?: ContentEntryType;
    /**
     * 
     * @type {boolean}
     * @memberof TimelineTimelineCursor
     */
    stopOnEmptyResponse?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TimelineTimelineCursor
     */
    value: string;
}



/**
 * Check if a given object implements the TimelineTimelineCursor interface.
 */
export function instanceOfTimelineTimelineCursor(value: object): value is TimelineTimelineCursor {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('cursorType' in value) || value['cursorType'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function TimelineTimelineCursorFromJSON(json: any): TimelineTimelineCursor {
    return TimelineTimelineCursorFromJSONTyped(json, false);
}

export function TimelineTimelineCursorFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTimelineCursor {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'cursorType': CursorTypeFromJSON(json['cursorType']),
        'displayTreatment': json['displayTreatment'] == null ? undefined : DisplayTreatmentFromJSON(json['displayTreatment']),
        'entryType': json['entryType'] == null ? undefined : ContentEntryTypeFromJSON(json['entryType']),
        'itemType': json['itemType'] == null ? undefined : ContentEntryTypeFromJSON(json['itemType']),
        'stopOnEmptyResponse': json['stopOnEmptyResponse'] == null ? undefined : json['stopOnEmptyResponse'],
        'value': json['value'],
    };
}

export function TimelineTimelineCursorToJSON(value?: TimelineTimelineCursor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'cursorType': CursorTypeToJSON(value['cursorType']),
        'displayTreatment': DisplayTreatmentToJSON(value['displayTreatment']),
        'entryType': ContentEntryTypeToJSON(value['entryType']),
        'itemType': ContentEntryTypeToJSON(value['itemType']),
        'stopOnEmptyResponse': value['stopOnEmptyResponse'],
        'value': value['value'],
    };
}

