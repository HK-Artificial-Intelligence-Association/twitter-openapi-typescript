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
import type { TextHighlight } from './TextHighlight';
import {
    TextHighlightFromJSON,
    TextHighlightFromJSONTyped,
    TextHighlightToJSON,
    TextHighlightToJSONTyped,
} from './TextHighlight';

/**
 * 
 * @export
 * @interface Highlight
 */
export interface Highlight {
    /**
     * 
     * @type {Array<TextHighlight>}
     * @memberof Highlight
     */
    textHighlights: Array<TextHighlight>;
}

/**
 * Check if a given object implements the Highlight interface.
 */
export function instanceOfHighlight(value: object): value is Highlight {
    if (!('textHighlights' in value) || value['textHighlights'] === undefined) return false;
    return true;
}

export function HighlightFromJSON(json: any): Highlight {
    return HighlightFromJSONTyped(json, false);
}

export function HighlightFromJSONTyped(json: any, ignoreDiscriminator: boolean): Highlight {
    if (json == null) {
        return json;
    }
    return {
        
        'textHighlights': ((json['textHighlights'] as Array<any>).map(TextHighlightFromJSON)),
    };
}

export function HighlightToJSON(json: any): Highlight {
    return HighlightToJSONTyped(json, false);
}

export function HighlightToJSONTyped(value?: Highlight | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'textHighlights': ((value['textHighlights'] as Array<any>).map(TextHighlightToJSON)),
    };
}

