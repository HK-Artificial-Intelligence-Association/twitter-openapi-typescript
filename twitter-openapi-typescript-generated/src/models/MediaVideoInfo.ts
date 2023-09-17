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

import { exists, mapValues } from '../runtime';
import type { MediaVideoInfoVariant } from './MediaVideoInfoVariant';
import {
    MediaVideoInfoVariantFromJSON,
    MediaVideoInfoVariantFromJSONTyped,
    MediaVideoInfoVariantToJSON,
} from './MediaVideoInfoVariant';

/**
 * 
 * @export
 * @interface MediaVideoInfo
 */
export interface MediaVideoInfo {
    /**
     * 
     * @type {Array<number>}
     * @memberof MediaVideoInfo
     */
    aspectRatio: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof MediaVideoInfo
     */
    durationMillis?: number;
    /**
     * 
     * @type {Array<MediaVideoInfoVariant>}
     * @memberof MediaVideoInfo
     */
    variants: Array<MediaVideoInfoVariant>;
}

/**
 * Check if a given object implements the MediaVideoInfo interface.
 */
export function instanceOfMediaVideoInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "aspectRatio" in value;
    isInstance = isInstance && "variants" in value;

    return isInstance;
}

export function MediaVideoInfoFromJSON(json: any): MediaVideoInfo {
    return MediaVideoInfoFromJSONTyped(json, false);
}

export function MediaVideoInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaVideoInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aspectRatio': json['aspect_ratio'],
        'durationMillis': !exists(json, 'duration_millis') ? undefined : json['duration_millis'],
        'variants': ((json['variants'] as Array<any>).map(MediaVideoInfoVariantFromJSON)),
    };
}

export function MediaVideoInfoToJSON(value?: MediaVideoInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aspect_ratio': value.aspectRatio,
        'duration_millis': value.durationMillis,
        'variants': ((value.variants as Array<any>).map(MediaVideoInfoVariantToJSON)),
    };
}

