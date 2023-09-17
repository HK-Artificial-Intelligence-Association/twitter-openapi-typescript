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
import type { ClientEventInfo } from './ClientEventInfo';
import {
    ClientEventInfoFromJSON,
    ClientEventInfoFromJSONTyped,
    ClientEventInfoToJSON,
} from './ClientEventInfo';
import type { ItemContentUnion } from './ItemContentUnion';
import {
    ItemContentUnionFromJSON,
    ItemContentUnionFromJSONTyped,
    ItemContentUnionToJSON,
} from './ItemContentUnion';

/**
 * 
 * @export
 * @interface ModuleEntry
 */
export interface ModuleEntry {
    /**
     * 
     * @type {ClientEventInfo}
     * @memberof ModuleEntry
     */
    clientEventInfo: ClientEventInfo;
    /**
     * 
     * @type {ItemContentUnion}
     * @memberof ModuleEntry
     */
    itemContent: ItemContentUnion;
}

/**
 * Check if a given object implements the ModuleEntry interface.
 */
export function instanceOfModuleEntry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clientEventInfo" in value;
    isInstance = isInstance && "itemContent" in value;

    return isInstance;
}

export function ModuleEntryFromJSON(json: any): ModuleEntry {
    return ModuleEntryFromJSONTyped(json, false);
}

export function ModuleEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModuleEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientEventInfo': ClientEventInfoFromJSON(json['clientEventInfo']),
        'itemContent': ItemContentUnionFromJSON(json['itemContent']),
    };
}

export function ModuleEntryToJSON(value?: ModuleEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientEventInfo': ClientEventInfoToJSON(value.clientEventInfo),
        'itemContent': ItemContentUnionToJSON(value.itemContent),
    };
}

