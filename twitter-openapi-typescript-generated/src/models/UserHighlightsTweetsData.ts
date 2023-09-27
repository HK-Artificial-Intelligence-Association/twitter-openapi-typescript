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
import type { UserHighlightsTweetsUser } from './UserHighlightsTweetsUser';
import {
    UserHighlightsTweetsUserFromJSON,
    UserHighlightsTweetsUserFromJSONTyped,
    UserHighlightsTweetsUserToJSON,
} from './UserHighlightsTweetsUser';

/**
 * 
 * @export
 * @interface UserHighlightsTweetsData
 */
export interface UserHighlightsTweetsData {
    /**
     * 
     * @type {UserHighlightsTweetsUser}
     * @memberof UserHighlightsTweetsData
     */
    user: UserHighlightsTweetsUser;
}

/**
 * Check if a given object implements the UserHighlightsTweetsData interface.
 */
export function instanceOfUserHighlightsTweetsData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function UserHighlightsTweetsDataFromJSON(json: any): UserHighlightsTweetsData {
    return UserHighlightsTweetsDataFromJSONTyped(json, false);
}

export function UserHighlightsTweetsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserHighlightsTweetsData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': UserHighlightsTweetsUserFromJSON(json['user']),
    };
}

export function UserHighlightsTweetsDataToJSON(value?: UserHighlightsTweetsData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserHighlightsTweetsUserToJSON(value.user),
    };
}
