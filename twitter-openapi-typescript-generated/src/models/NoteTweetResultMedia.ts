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
import type { NoteTweetResultMediaInlineMedia } from './NoteTweetResultMediaInlineMedia';
import {
    NoteTweetResultMediaInlineMediaFromJSON,
    NoteTweetResultMediaInlineMediaFromJSONTyped,
    NoteTweetResultMediaInlineMediaToJSON,
    NoteTweetResultMediaInlineMediaToJSONTyped,
} from './NoteTweetResultMediaInlineMedia';

/**
 * 
 * @export
 * @interface NoteTweetResultMedia
 */
export interface NoteTweetResultMedia {
    /**
     * 
     * @type {Array<NoteTweetResultMediaInlineMedia>}
     * @memberof NoteTweetResultMedia
     */
    inlineMedia: Array<NoteTweetResultMediaInlineMedia>;
}

/**
 * Check if a given object implements the NoteTweetResultMedia interface.
 */
export function instanceOfNoteTweetResultMedia(value: object): value is NoteTweetResultMedia {
    if (!('inlineMedia' in value) || value['inlineMedia'] === undefined) return false;
    return true;
}

export function NoteTweetResultMediaFromJSON(json: any): NoteTweetResultMedia {
    return NoteTweetResultMediaFromJSONTyped(json, false);
}

export function NoteTweetResultMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteTweetResultMedia {
    if (json == null) {
        return json;
    }
    return {
        
        'inlineMedia': ((json['inline_media'] as Array<any>).map(NoteTweetResultMediaInlineMediaFromJSON)),
    };
}

export function NoteTweetResultMediaToJSON(json: any): NoteTweetResultMedia {
    return NoteTweetResultMediaToJSONTyped(json, false);
}

export function NoteTweetResultMediaToJSONTyped(value?: NoteTweetResultMedia | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inline_media': ((value['inlineMedia'] as Array<any>).map(NoteTweetResultMediaInlineMediaToJSON)),
    };
}

