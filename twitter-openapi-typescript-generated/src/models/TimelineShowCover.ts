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
import type { ClientEventInfo } from './ClientEventInfo';
import {
    ClientEventInfoFromJSON,
    ClientEventInfoFromJSONTyped,
    ClientEventInfoToJSON,
    ClientEventInfoToJSONTyped,
} from './ClientEventInfo';
import type { TimelineHalfCover } from './TimelineHalfCover';
import {
    TimelineHalfCoverFromJSON,
    TimelineHalfCoverFromJSONTyped,
    TimelineHalfCoverToJSON,
    TimelineHalfCoverToJSONTyped,
} from './TimelineHalfCover';

/**
 * 
 * @export
 * @interface TimelineShowCover
 */
export interface TimelineShowCover {
    /**
     * 
     * @type {ClientEventInfo}
     * @memberof TimelineShowCover
     */
    clientEventInfo: ClientEventInfo;
    /**
     * 
     * @type {TimelineHalfCover}
     * @memberof TimelineShowCover
     */
    cover: TimelineHalfCover;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineShowCover
     */
    type: InstructionType;
}



/**
 * Check if a given object implements the TimelineShowCover interface.
 */
export function instanceOfTimelineShowCover(value: object): value is TimelineShowCover {
    if (!('clientEventInfo' in value) || value['clientEventInfo'] === undefined) return false;
    if (!('cover' in value) || value['cover'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TimelineShowCoverFromJSON(json: any): TimelineShowCover {
    return TimelineShowCoverFromJSONTyped(json, false);
}

export function TimelineShowCoverFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineShowCover {
    if (json == null) {
        return json;
    }
    return {
        
        'clientEventInfo': ClientEventInfoFromJSON(json['clientEventInfo']),
        'cover': TimelineHalfCoverFromJSON(json['cover']),
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineShowCoverToJSON(json: any): TimelineShowCover {
    return TimelineShowCoverToJSONTyped(json, false);
}

export function TimelineShowCoverToJSONTyped(value?: TimelineShowCover | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'clientEventInfo': ClientEventInfoToJSON(value['clientEventInfo']),
        'cover': TimelineHalfCoverToJSON(value['cover']),
        'type': InstructionTypeToJSON(value['type']),
    };
}

