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
import type { ModuleItem } from './ModuleItem';
import {
    ModuleItemFromJSON,
    ModuleItemFromJSONTyped,
    ModuleItemToJSON,
} from './ModuleItem';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';
import type { DisplayType } from './DisplayType';
import {
    DisplayTypeFromJSON,
    DisplayTypeFromJSONTyped,
    DisplayTypeToJSON,
} from './DisplayType';
import type { FeedbackInfo } from './FeedbackInfo';
import {
    FeedbackInfoFromJSON,
    FeedbackInfoFromJSONTyped,
    FeedbackInfoToJSON,
} from './FeedbackInfo';
import type { ContentEntryType } from './ContentEntryType';
import {
    ContentEntryTypeFromJSON,
    ContentEntryTypeFromJSONTyped,
    ContentEntryTypeToJSON,
} from './ContentEntryType';

/**
 * 
 * @export
 * @interface TimelineTimelineModule
 */
export interface TimelineTimelineModule {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineTimelineModule
     */
    typename: TypeName;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    clientEventInfo: { [key: string]: any; };
    /**
     * 
     * @type {DisplayType}
     * @memberof TimelineTimelineModule
     */
    displayType: DisplayType;
    /**
     * 
     * @type {ContentEntryType}
     * @memberof TimelineTimelineModule
     */
    entryType: ContentEntryType;
    /**
     * 
     * @type {FeedbackInfo}
     * @memberof TimelineTimelineModule
     */
    feedbackInfo?: FeedbackInfo;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    footer?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    header?: { [key: string]: any; };
    /**
     * 
     * @type {Array<ModuleItem>}
     * @memberof TimelineTimelineModule
     */
    items?: Array<ModuleItem>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    metadata?: { [key: string]: any; };
}



/**
 * Check if a given object implements the TimelineTimelineModule interface.
 */
export function instanceOfTimelineTimelineModule(value: object): value is TimelineTimelineModule {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('clientEventInfo' in value) || value['clientEventInfo'] === undefined) return false;
    if (!('displayType' in value) || value['displayType'] === undefined) return false;
    if (!('entryType' in value) || value['entryType'] === undefined) return false;
    return true;
}

export function TimelineTimelineModuleFromJSON(json: any): TimelineTimelineModule {
    return TimelineTimelineModuleFromJSONTyped(json, false);
}

export function TimelineTimelineModuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTimelineModule {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'clientEventInfo': json['clientEventInfo'],
        'displayType': DisplayTypeFromJSON(json['displayType']),
        'entryType': ContentEntryTypeFromJSON(json['entryType']),
        'feedbackInfo': json['feedbackInfo'] == null ? undefined : FeedbackInfoFromJSON(json['feedbackInfo']),
        'footer': json['footer'] == null ? undefined : json['footer'],
        'header': json['header'] == null ? undefined : json['header'],
        'items': json['items'] == null ? undefined : ((json['items'] as Array<any>).map(ModuleItemFromJSON)),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
    };
}

export function TimelineTimelineModuleToJSON(value?: TimelineTimelineModule | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'clientEventInfo': value['clientEventInfo'],
        'displayType': DisplayTypeToJSON(value['displayType']),
        'entryType': ContentEntryTypeToJSON(value['entryType']),
        'feedbackInfo': FeedbackInfoToJSON(value['feedbackInfo']),
        'footer': value['footer'],
        'header': value['header'],
        'items': value['items'] == null ? undefined : ((value['items'] as Array<any>).map(ModuleItemToJSON)),
        'metadata': value['metadata'],
    };
}

