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
import type { AdditionalMediaInfoCallToActionsUrl } from './AdditionalMediaInfoCallToActionsUrl';
import {
    AdditionalMediaInfoCallToActionsUrlFromJSON,
    AdditionalMediaInfoCallToActionsUrlFromJSONTyped,
    AdditionalMediaInfoCallToActionsUrlToJSON,
    AdditionalMediaInfoCallToActionsUrlToJSONTyped,
} from './AdditionalMediaInfoCallToActionsUrl';

/**
 * 
 * @export
 * @interface AdditionalMediaInfoCallToActions
 */
export interface AdditionalMediaInfoCallToActions {
    /**
     * 
     * @type {AdditionalMediaInfoCallToActionsUrl}
     * @memberof AdditionalMediaInfoCallToActions
     */
    visitSite?: AdditionalMediaInfoCallToActionsUrl;
    /**
     * 
     * @type {AdditionalMediaInfoCallToActionsUrl}
     * @memberof AdditionalMediaInfoCallToActions
     */
    watchNow?: AdditionalMediaInfoCallToActionsUrl;
}

/**
 * Check if a given object implements the AdditionalMediaInfoCallToActions interface.
 */
export function instanceOfAdditionalMediaInfoCallToActions(value: object): value is AdditionalMediaInfoCallToActions {
    return true;
}

export function AdditionalMediaInfoCallToActionsFromJSON(json: any): AdditionalMediaInfoCallToActions {
    return AdditionalMediaInfoCallToActionsFromJSONTyped(json, false);
}

export function AdditionalMediaInfoCallToActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdditionalMediaInfoCallToActions {
    if (json == null) {
        return json;
    }
    return {
        
        'visitSite': json['visit_site'] == null ? undefined : AdditionalMediaInfoCallToActionsUrlFromJSON(json['visit_site']),
        'watchNow': json['watch_now'] == null ? undefined : AdditionalMediaInfoCallToActionsUrlFromJSON(json['watch_now']),
    };
}

export function AdditionalMediaInfoCallToActionsToJSON(json: any): AdditionalMediaInfoCallToActions {
    return AdditionalMediaInfoCallToActionsToJSONTyped(json, false);
}

export function AdditionalMediaInfoCallToActionsToJSONTyped(value?: AdditionalMediaInfoCallToActions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'visit_site': AdditionalMediaInfoCallToActionsUrlToJSON(value['visitSite']),
        'watch_now': AdditionalMediaInfoCallToActionsUrlToJSON(value['watchNow']),
    };
}

