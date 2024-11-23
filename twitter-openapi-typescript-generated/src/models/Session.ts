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
import type { OneFactorLoginEligibility } from './OneFactorLoginEligibility';
import {
    OneFactorLoginEligibilityFromJSON,
    OneFactorLoginEligibilityFromJSONTyped,
    OneFactorLoginEligibilityToJSON,
    OneFactorLoginEligibilityToJSONTyped,
} from './OneFactorLoginEligibility';
import type { CommunitiesActions } from './CommunitiesActions';
import {
    CommunitiesActionsFromJSON,
    CommunitiesActionsFromJSONTyped,
    CommunitiesActionsToJSON,
    CommunitiesActionsToJSONTyped,
} from './CommunitiesActions';
import type { UserFeatures } from './UserFeatures';
import {
    UserFeaturesFromJSON,
    UserFeaturesFromJSONTyped,
    UserFeaturesToJSON,
    UserFeaturesToJSONTyped,
} from './UserFeatures';

/**
 * 
 * @export
 * @interface Session
 */
export interface Session {
    /**
     * 
     * @type {object}
     * @memberof Session
     */
    ssoInitTokens?: object;
    /**
     * 
     * @type {CommunitiesActions}
     * @memberof Session
     */
    communitiesActions: CommunitiesActions;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    guestId: string;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    hasCommunityMemberships: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    isActiveCreator: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    isRestrictedSession: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Session
     */
    isSuperFollowSubscriber: boolean;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    language: string;
    /**
     * 
     * @type {OneFactorLoginEligibility}
     * @memberof Session
     */
    oneFactorLoginEligibility: OneFactorLoginEligibility;
    /**
     * 
     * @type {number}
     * @memberof Session
     */
    superFollowersCount: number;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    superFollowsApplicationStatus: SessionSuperFollowsApplicationStatusEnum;
    /**
     * 
     * @type {UserFeatures}
     * @memberof Session
     */
    userFeatures: UserFeatures;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    userId: string;
}


/**
 * @export
 */
export const SessionSuperFollowsApplicationStatusEnum = {
    NotStarted: 'NotStarted'
} as const;
export type SessionSuperFollowsApplicationStatusEnum = typeof SessionSuperFollowsApplicationStatusEnum[keyof typeof SessionSuperFollowsApplicationStatusEnum];


/**
 * Check if a given object implements the Session interface.
 */
export function instanceOfSession(value: object): value is Session {
    if (!('communitiesActions' in value) || value['communitiesActions'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('guestId' in value) || value['guestId'] === undefined) return false;
    if (!('hasCommunityMemberships' in value) || value['hasCommunityMemberships'] === undefined) return false;
    if (!('isActiveCreator' in value) || value['isActiveCreator'] === undefined) return false;
    if (!('isRestrictedSession' in value) || value['isRestrictedSession'] === undefined) return false;
    if (!('isSuperFollowSubscriber' in value) || value['isSuperFollowSubscriber'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('oneFactorLoginEligibility' in value) || value['oneFactorLoginEligibility'] === undefined) return false;
    if (!('superFollowersCount' in value) || value['superFollowersCount'] === undefined) return false;
    if (!('superFollowsApplicationStatus' in value) || value['superFollowsApplicationStatus'] === undefined) return false;
    if (!('userFeatures' in value) || value['userFeatures'] === undefined) return false;
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function SessionFromJSON(json: any): Session {
    return SessionFromJSONTyped(json, false);
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
    if (json == null) {
        return json;
    }
    return {
        
        'ssoInitTokens': json['SsoInitTokens'] == null ? undefined : json['SsoInitTokens'],
        'communitiesActions': CommunitiesActionsFromJSON(json['communitiesActions']),
        'country': json['country'],
        'guestId': json['guestId'],
        'hasCommunityMemberships': json['hasCommunityMemberships'],
        'isActiveCreator': json['isActiveCreator'],
        'isRestrictedSession': json['isRestrictedSession'],
        'isSuperFollowSubscriber': json['isSuperFollowSubscriber'],
        'language': json['language'],
        'oneFactorLoginEligibility': OneFactorLoginEligibilityFromJSON(json['oneFactorLoginEligibility']),
        'superFollowersCount': json['superFollowersCount'],
        'superFollowsApplicationStatus': json['superFollowsApplicationStatus'],
        'userFeatures': UserFeaturesFromJSON(json['userFeatures']),
        'userId': json['user_id'],
    };
}

export function SessionToJSON(json: any): Session {
    return SessionToJSONTyped(json, false);
}

export function SessionToJSONTyped(value?: Session | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'SsoInitTokens': value['ssoInitTokens'],
        'communitiesActions': CommunitiesActionsToJSON(value['communitiesActions']),
        'country': value['country'],
        'guestId': value['guestId'],
        'hasCommunityMemberships': value['hasCommunityMemberships'],
        'isActiveCreator': value['isActiveCreator'],
        'isRestrictedSession': value['isRestrictedSession'],
        'isSuperFollowSubscriber': value['isSuperFollowSubscriber'],
        'language': value['language'],
        'oneFactorLoginEligibility': OneFactorLoginEligibilityToJSON(value['oneFactorLoginEligibility']),
        'superFollowersCount': value['superFollowersCount'],
        'superFollowsApplicationStatus': value['superFollowsApplicationStatus'],
        'userFeatures': UserFeaturesToJSON(value['userFeatures']),
        'user_id': value['userId'],
    };
}

