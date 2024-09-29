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
import type { UserTweetsUser } from './UserTweetsUser';
import {
    UserTweetsUserFromJSON,
    UserTweetsUserFromJSONTyped,
    UserTweetsUserToJSON,
} from './UserTweetsUser';

/**
 * 
 * @export
 * @interface UserTweetsData
 */
export interface UserTweetsData {
    /**
     * 
     * @type {UserTweetsUser}
     * @memberof UserTweetsData
     */
    user: UserTweetsUser;
}

/**
 * Check if a given object implements the UserTweetsData interface.
 */
export function instanceOfUserTweetsData(value: object): value is UserTweetsData {
    if (!('user' in value) || value['user'] === undefined) return false;
    return true;
}

export function UserTweetsDataFromJSON(json: any): UserTweetsData {
    return UserTweetsDataFromJSONTyped(json, false);
}

export function UserTweetsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTweetsData {
    if (json == null) {
        return json;
    }
    return {
        
        'user': UserTweetsUserFromJSON(json['user']),
    };
}

export function UserTweetsDataToJSON(value?: UserTweetsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user': UserTweetsUserToJSON(value['user']),
    };
}

