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
 * @interface TimelineShowAlertRichText
 */
export interface TimelineShowAlertRichText {
    /**
     * 
     * @type {Array<object>}
     * @memberof TimelineShowAlertRichText
     */
    entities?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof TimelineShowAlertRichText
     */
    text?: string;
}

/**
 * Check if a given object implements the TimelineShowAlertRichText interface.
 */
export function instanceOfTimelineShowAlertRichText(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimelineShowAlertRichTextFromJSON(json: any): TimelineShowAlertRichText {
    return TimelineShowAlertRichTextFromJSONTyped(json, false);
}

export function TimelineShowAlertRichTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineShowAlertRichText {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entities': !exists(json, 'entities') ? undefined : json['entities'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function TimelineShowAlertRichTextToJSON(value?: TimelineShowAlertRichText | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entities': value.entities,
        'text': value.text,
    };
}

