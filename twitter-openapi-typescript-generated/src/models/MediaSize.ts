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
/**
 * 
 * @export
 * @interface MediaSize
 */
export interface MediaSize {
    /**
     * 
     * @type {number}
     * @memberof MediaSize
     */
    h: number;
    /**
     * 
     * @type {string}
     * @memberof MediaSize
     */
    resize: MediaSizeResizeEnum;
    /**
     * 
     * @type {number}
     * @memberof MediaSize
     */
    w: number;
}


/**
 * @export
 */
export const MediaSizeResizeEnum = {
    Crop: 'crop',
    Fit: 'fit'
} as const;
export type MediaSizeResizeEnum = typeof MediaSizeResizeEnum[keyof typeof MediaSizeResizeEnum];


/**
 * Check if a given object implements the MediaSize interface.
 */
export function instanceOfMediaSize(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "h" in value;
    isInstance = isInstance && "resize" in value;
    isInstance = isInstance && "w" in value;

    return isInstance;
}

export function MediaSizeFromJSON(json: any): MediaSize {
    return MediaSizeFromJSONTyped(json, false);
}

export function MediaSizeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaSize {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'h': json['h'],
        'resize': json['resize'],
        'w': json['w'],
    };
}

export function MediaSizeToJSON(value?: MediaSize | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'h': value.h,
        'resize': value.resize,
        'w': value.w,
    };
}

