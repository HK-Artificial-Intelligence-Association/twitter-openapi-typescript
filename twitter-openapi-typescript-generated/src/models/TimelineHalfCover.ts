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
import type { Callback } from './Callback';
import {
    CallbackFromJSON,
    CallbackFromJSONTyped,
    CallbackToJSON,
    CallbackToJSONTyped,
} from './Callback';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
    TextToJSONTyped,
} from './Text';
import type { CoverCta } from './CoverCta';
import {
    CoverCtaFromJSON,
    CoverCtaFromJSONTyped,
    CoverCtaToJSON,
    CoverCtaToJSONTyped,
} from './CoverCta';

/**
 * 
 * @export
 * @interface TimelineHalfCover
 */
export interface TimelineHalfCover {
    /**
     * 
     * @type {boolean}
     * @memberof TimelineHalfCover
     */
    dismissible: boolean;
    /**
     * 
     * @type {string}
     * @memberof TimelineHalfCover
     */
    halfCoverDisplayType: TimelineHalfCoverHalfCoverDisplayTypeEnum;
    /**
     * 
     * @type {Array<Callback>}
     * @memberof TimelineHalfCover
     */
    impressionCallbacks: Array<Callback>;
    /**
     * 
     * @type {CoverCta}
     * @memberof TimelineHalfCover
     */
    primaryCoverCta: CoverCta;
    /**
     * 
     * @type {Text}
     * @memberof TimelineHalfCover
     */
    primaryText: Text;
    /**
     * 
     * @type {Text}
     * @memberof TimelineHalfCover
     */
    secondaryText: Text;
    /**
     * 
     * @type {string}
     * @memberof TimelineHalfCover
     */
    type: TimelineHalfCoverTypeEnum;
}


/**
 * @export
 */
export const TimelineHalfCoverHalfCoverDisplayTypeEnum = {
    Cover: 'Cover'
} as const;
export type TimelineHalfCoverHalfCoverDisplayTypeEnum = typeof TimelineHalfCoverHalfCoverDisplayTypeEnum[keyof typeof TimelineHalfCoverHalfCoverDisplayTypeEnum];

/**
 * @export
 */
export const TimelineHalfCoverTypeEnum = {
    TimelineHalfCover: 'TimelineHalfCover'
} as const;
export type TimelineHalfCoverTypeEnum = typeof TimelineHalfCoverTypeEnum[keyof typeof TimelineHalfCoverTypeEnum];


/**
 * Check if a given object implements the TimelineHalfCover interface.
 */
export function instanceOfTimelineHalfCover(value: object): value is TimelineHalfCover {
    if (!('dismissible' in value) || value['dismissible'] === undefined) return false;
    if (!('halfCoverDisplayType' in value) || value['halfCoverDisplayType'] === undefined) return false;
    if (!('impressionCallbacks' in value) || value['impressionCallbacks'] === undefined) return false;
    if (!('primaryCoverCta' in value) || value['primaryCoverCta'] === undefined) return false;
    if (!('primaryText' in value) || value['primaryText'] === undefined) return false;
    if (!('secondaryText' in value) || value['secondaryText'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TimelineHalfCoverFromJSON(json: any): TimelineHalfCover {
    return TimelineHalfCoverFromJSONTyped(json, false);
}

export function TimelineHalfCoverFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineHalfCover {
    if (json == null) {
        return json;
    }
    return {
        
        'dismissible': json['dismissible'],
        'halfCoverDisplayType': json['halfCoverDisplayType'],
        'impressionCallbacks': ((json['impressionCallbacks'] as Array<any>).map(CallbackFromJSON)),
        'primaryCoverCta': CoverCtaFromJSON(json['primaryCoverCta']),
        'primaryText': TextFromJSON(json['primaryText']),
        'secondaryText': TextFromJSON(json['secondaryText']),
        'type': json['type'],
    };
}

export function TimelineHalfCoverToJSON(json: any): TimelineHalfCover {
    return TimelineHalfCoverToJSONTyped(json, false);
}

export function TimelineHalfCoverToJSONTyped(value?: TimelineHalfCover | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dismissible': value['dismissible'],
        'halfCoverDisplayType': value['halfCoverDisplayType'],
        'impressionCallbacks': ((value['impressionCallbacks'] as Array<any>).map(CallbackToJSON)),
        'primaryCoverCta': CoverCtaToJSON(value['primaryCoverCta']),
        'primaryText': TextToJSON(value['primaryText']),
        'secondaryText': TextToJSON(value['secondaryText']),
        'type': value['type'],
    };
}

