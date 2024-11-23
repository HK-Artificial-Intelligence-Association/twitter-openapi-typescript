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
    ModuleItemToJSONTyped,
} from './ModuleItem';
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
    InstructionTypeToJSONTyped,
} from './InstructionType';

/**
 * 
 * @export
 * @interface TimelineAddToModule
 */
export interface TimelineAddToModule {
    /**
     * 
     * @type {string}
     * @memberof TimelineAddToModule
     */
    moduleEntryId: string;
    /**
     * 
     * @type {Array<ModuleItem>}
     * @memberof TimelineAddToModule
     */
    moduleItems: Array<ModuleItem>;
    /**
     * 
     * @type {boolean}
     * @memberof TimelineAddToModule
     */
    prepend?: boolean;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineAddToModule
     */
    type: InstructionType;
}



/**
 * Check if a given object implements the TimelineAddToModule interface.
 */
export function instanceOfTimelineAddToModule(value: object): value is TimelineAddToModule {
    if (!('moduleEntryId' in value) || value['moduleEntryId'] === undefined) return false;
    if (!('moduleItems' in value) || value['moduleItems'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TimelineAddToModuleFromJSON(json: any): TimelineAddToModule {
    return TimelineAddToModuleFromJSONTyped(json, false);
}

export function TimelineAddToModuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineAddToModule {
    if (json == null) {
        return json;
    }
    return {
        
        'moduleEntryId': json['moduleEntryId'],
        'moduleItems': ((json['moduleItems'] as Array<any>).map(ModuleItemFromJSON)),
        'prepend': json['prepend'] == null ? undefined : json['prepend'],
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineAddToModuleToJSON(json: any): TimelineAddToModule {
    return TimelineAddToModuleToJSONTyped(json, false);
}

export function TimelineAddToModuleToJSONTyped(value?: TimelineAddToModule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'moduleEntryId': value['moduleEntryId'],
        'moduleItems': ((value['moduleItems'] as Array<any>).map(ModuleItemToJSON)),
        'prepend': value['prepend'],
        'type': InstructionTypeToJSON(value['type']),
    };
}

