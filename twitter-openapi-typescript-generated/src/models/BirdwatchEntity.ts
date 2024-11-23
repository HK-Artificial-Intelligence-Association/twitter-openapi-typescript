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
import type { BirdwatchEntityRef } from './BirdwatchEntityRef';
import {
    BirdwatchEntityRefFromJSON,
    BirdwatchEntityRefFromJSONTyped,
    BirdwatchEntityRefToJSON,
    BirdwatchEntityRefToJSONTyped,
} from './BirdwatchEntityRef';

/**
 * 
 * @export
 * @interface BirdwatchEntity
 */
export interface BirdwatchEntity {
    /**
     * 
     * @type {number}
     * @memberof BirdwatchEntity
     */
    fromIndex: number;
    /**
     * 
     * @type {BirdwatchEntityRef}
     * @memberof BirdwatchEntity
     */
    ref: BirdwatchEntityRef;
    /**
     * 
     * @type {number}
     * @memberof BirdwatchEntity
     */
    toIndex: number;
}

/**
 * Check if a given object implements the BirdwatchEntity interface.
 */
export function instanceOfBirdwatchEntity(value: object): value is BirdwatchEntity {
    if (!('fromIndex' in value) || value['fromIndex'] === undefined) return false;
    if (!('ref' in value) || value['ref'] === undefined) return false;
    if (!('toIndex' in value) || value['toIndex'] === undefined) return false;
    return true;
}

export function BirdwatchEntityFromJSON(json: any): BirdwatchEntity {
    return BirdwatchEntityFromJSONTyped(json, false);
}

export function BirdwatchEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): BirdwatchEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'fromIndex': json['fromIndex'],
        'ref': BirdwatchEntityRefFromJSON(json['ref']),
        'toIndex': json['toIndex'],
    };
}

export function BirdwatchEntityToJSON(json: any): BirdwatchEntity {
    return BirdwatchEntityToJSONTyped(json, false);
}

export function BirdwatchEntityToJSONTyped(value?: BirdwatchEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fromIndex': value['fromIndex'],
        'ref': BirdwatchEntityRefToJSON(value['ref']),
        'toIndex': value['toIndex'],
    };
}

