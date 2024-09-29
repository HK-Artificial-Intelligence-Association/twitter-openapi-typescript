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
import type { CommunityJoinActionResult } from './CommunityJoinActionResult';
import {
    CommunityJoinActionResultFromJSON,
    CommunityJoinActionResultFromJSONTyped,
    CommunityJoinActionResultToJSON,
} from './CommunityJoinActionResult';
import type { CommunityDeleteActionResult } from './CommunityDeleteActionResult';
import {
    CommunityDeleteActionResultFromJSON,
    CommunityDeleteActionResultFromJSONTyped,
    CommunityDeleteActionResultToJSON,
} from './CommunityDeleteActionResult';
import type { CommunityPinActionResult } from './CommunityPinActionResult';
import {
    CommunityPinActionResultFromJSON,
    CommunityPinActionResultFromJSONTyped,
    CommunityPinActionResultToJSON,
} from './CommunityPinActionResult';
import type { CommunityLeaveActionResult } from './CommunityLeaveActionResult';
import {
    CommunityLeaveActionResultFromJSON,
    CommunityLeaveActionResultFromJSONTyped,
    CommunityLeaveActionResultToJSON,
} from './CommunityLeaveActionResult';

/**
 * 
 * @export
 * @interface CommunityActions
 */
export interface CommunityActions {
    /**
     * 
     * @type {CommunityDeleteActionResult}
     * @memberof CommunityActions
     */
    deleteActionResult: CommunityDeleteActionResult;
    /**
     * 
     * @type {CommunityJoinActionResult}
     * @memberof CommunityActions
     */
    joinActionResult: CommunityJoinActionResult;
    /**
     * 
     * @type {CommunityLeaveActionResult}
     * @memberof CommunityActions
     */
    leaveActionResult: CommunityLeaveActionResult;
    /**
     * 
     * @type {CommunityPinActionResult}
     * @memberof CommunityActions
     */
    pinActionResult: CommunityPinActionResult;
}

/**
 * Check if a given object implements the CommunityActions interface.
 */
export function instanceOfCommunityActions(value: object): value is CommunityActions {
    if (!('deleteActionResult' in value) || value['deleteActionResult'] === undefined) return false;
    if (!('joinActionResult' in value) || value['joinActionResult'] === undefined) return false;
    if (!('leaveActionResult' in value) || value['leaveActionResult'] === undefined) return false;
    if (!('pinActionResult' in value) || value['pinActionResult'] === undefined) return false;
    return true;
}

export function CommunityActionsFromJSON(json: any): CommunityActions {
    return CommunityActionsFromJSONTyped(json, false);
}

export function CommunityActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityActions {
    if (json == null) {
        return json;
    }
    return {
        
        'deleteActionResult': CommunityDeleteActionResultFromJSON(json['delete_action_result']),
        'joinActionResult': CommunityJoinActionResultFromJSON(json['join_action_result']),
        'leaveActionResult': CommunityLeaveActionResultFromJSON(json['leave_action_result']),
        'pinActionResult': CommunityPinActionResultFromJSON(json['pin_action_result']),
    };
}

export function CommunityActionsToJSON(value?: CommunityActions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'delete_action_result': CommunityDeleteActionResultToJSON(value['deleteActionResult']),
        'join_action_result': CommunityJoinActionResultToJSON(value['joinActionResult']),
        'leave_action_result': CommunityLeaveActionResultToJSON(value['leaveActionResult']),
        'pin_action_result': CommunityPinActionResultToJSON(value['pinActionResult']),
    };
}

