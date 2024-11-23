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
import type { PrimaryCommunityTopic } from './PrimaryCommunityTopic';
import {
    PrimaryCommunityTopicFromJSON,
    PrimaryCommunityTopicFromJSONTyped,
    PrimaryCommunityTopicToJSON,
    PrimaryCommunityTopicToJSONTyped,
} from './PrimaryCommunityTopic';
import type { CommunityActions } from './CommunityActions';
import {
    CommunityActionsFromJSON,
    CommunityActionsFromJSONTyped,
    CommunityActionsToJSON,
    CommunityActionsToJSONTyped,
} from './CommunityActions';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
    TypeNameToJSONTyped,
} from './TypeName';
import type { CommunityJoinRequestsResult } from './CommunityJoinRequestsResult';
import {
    CommunityJoinRequestsResultFromJSON,
    CommunityJoinRequestsResultFromJSONTyped,
    CommunityJoinRequestsResultToJSON,
    CommunityJoinRequestsResultToJSONTyped,
} from './CommunityJoinRequestsResult';
import type { CommunityInvitesResult } from './CommunityInvitesResult';
import {
    CommunityInvitesResultFromJSON,
    CommunityInvitesResultFromJSONTyped,
    CommunityInvitesResultToJSON,
    CommunityInvitesResultToJSONTyped,
} from './CommunityInvitesResult';
import type { CommunityRule } from './CommunityRule';
import {
    CommunityRuleFromJSON,
    CommunityRuleFromJSONTyped,
    CommunityRuleToJSON,
    CommunityRuleToJSONTyped,
} from './CommunityRule';
import type { CommunityUrls } from './CommunityUrls';
import {
    CommunityUrlsFromJSON,
    CommunityUrlsFromJSONTyped,
    CommunityUrlsToJSON,
    CommunityUrlsToJSONTyped,
} from './CommunityUrls';
import type { UserResults } from './UserResults';
import {
    UserResultsFromJSON,
    UserResultsFromJSONTyped,
    UserResultsToJSON,
    UserResultsToJSONTyped,
} from './UserResults';

/**
 * 
 * @export
 * @interface CommunityData
 */
export interface CommunityData {
    /**
     * 
     * @type {TypeName}
     * @memberof CommunityData
     */
    typename: TypeName;
    /**
     * 
     * @type {CommunityActions}
     * @memberof CommunityData
     */
    actions: CommunityActions;
    /**
     * 
     * @type {UserResults}
     * @memberof CommunityData
     */
    adminResults: UserResults;
    /**
     * 
     * @type {number}
     * @memberof CommunityData
     */
    createdAt?: number;
    /**
     * 
     * @type {UserResults}
     * @memberof CommunityData
     */
    creatorResults: UserResults;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommunityData
     */
    customBannerMedia?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommunityData
     */
    defaultBannerMedia?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    idStr: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    invitesPolicy: CommunityDataInvitesPolicyEnum;
    /**
     * 
     * @type {CommunityInvitesResult}
     * @memberof CommunityData
     */
    invitesResult: CommunityInvitesResult;
    /**
     * 
     * @type {boolean}
     * @memberof CommunityData
     */
    isPinned: boolean;
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    joinPolicy: CommunityDataJoinPolicyEnum;
    /**
     * 
     * @type {CommunityJoinRequestsResult}
     * @memberof CommunityData
     */
    joinRequestsResult?: CommunityJoinRequestsResult;
    /**
     * 
     * @type {number}
     * @memberof CommunityData
     */
    memberCount: number;
    /**
     * 
     * @type {Array<UserResults>}
     * @memberof CommunityData
     */
    membersFacepileResults: Array<UserResults>;
    /**
     * 
     * @type {number}
     * @memberof CommunityData
     */
    moderatorCount: number;
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    name: string;
    /**
     * 
     * @type {PrimaryCommunityTopic}
     * @memberof CommunityData
     */
    primaryCommunityTopic?: PrimaryCommunityTopic;
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    question?: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityData
     */
    role: CommunityDataRoleEnum;
    /**
     * 
     * @type {Array<CommunityRule>}
     * @memberof CommunityData
     */
    rules: Array<CommunityRule>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommunityData
     */
    searchTags: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommunityData
     */
    showOnlyUsersToDisplay?: Array<string>;
    /**
     * 
     * @type {CommunityUrls}
     * @memberof CommunityData
     */
    urls?: CommunityUrls;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommunityData
     */
    viewerRelationship?: { [key: string]: any; };
}


/**
 * @export
 */
export const CommunityDataInvitesPolicyEnum = {
    MemberInvitesAllowed: 'MemberInvitesAllowed',
    ModeratorInvitesAllowed: 'ModeratorInvitesAllowed'
} as const;
export type CommunityDataInvitesPolicyEnum = typeof CommunityDataInvitesPolicyEnum[keyof typeof CommunityDataInvitesPolicyEnum];

/**
 * @export
 */
export const CommunityDataJoinPolicyEnum = {
    Open: 'Open',
    RestrictedJoinRequestsRequireModeratorApproval: 'RestrictedJoinRequestsRequireModeratorApproval'
} as const;
export type CommunityDataJoinPolicyEnum = typeof CommunityDataJoinPolicyEnum[keyof typeof CommunityDataJoinPolicyEnum];

/**
 * @export
 */
export const CommunityDataRoleEnum = {
    NonMember: 'NonMember'
} as const;
export type CommunityDataRoleEnum = typeof CommunityDataRoleEnum[keyof typeof CommunityDataRoleEnum];


/**
 * Check if a given object implements the CommunityData interface.
 */
export function instanceOfCommunityData(value: object): value is CommunityData {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('actions' in value) || value['actions'] === undefined) return false;
    if (!('adminResults' in value) || value['adminResults'] === undefined) return false;
    if (!('creatorResults' in value) || value['creatorResults'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('idStr' in value) || value['idStr'] === undefined) return false;
    if (!('invitesPolicy' in value) || value['invitesPolicy'] === undefined) return false;
    if (!('invitesResult' in value) || value['invitesResult'] === undefined) return false;
    if (!('isPinned' in value) || value['isPinned'] === undefined) return false;
    if (!('joinPolicy' in value) || value['joinPolicy'] === undefined) return false;
    if (!('memberCount' in value) || value['memberCount'] === undefined) return false;
    if (!('membersFacepileResults' in value) || value['membersFacepileResults'] === undefined) return false;
    if (!('moderatorCount' in value) || value['moderatorCount'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('rules' in value) || value['rules'] === undefined) return false;
    if (!('searchTags' in value) || value['searchTags'] === undefined) return false;
    return true;
}

export function CommunityDataFromJSON(json: any): CommunityData {
    return CommunityDataFromJSONTyped(json, false);
}

export function CommunityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityData {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'actions': CommunityActionsFromJSON(json['actions']),
        'adminResults': UserResultsFromJSON(json['admin_results']),
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'creatorResults': UserResultsFromJSON(json['creator_results']),
        'customBannerMedia': json['custom_banner_media'] == null ? undefined : json['custom_banner_media'],
        'defaultBannerMedia': json['default_banner_media'] == null ? undefined : json['default_banner_media'],
        'description': json['description'],
        'idStr': json['id_str'],
        'invitesPolicy': json['invites_policy'],
        'invitesResult': CommunityInvitesResultFromJSON(json['invites_result']),
        'isPinned': json['is_pinned'],
        'joinPolicy': json['join_policy'],
        'joinRequestsResult': json['join_requests_result'] == null ? undefined : CommunityJoinRequestsResultFromJSON(json['join_requests_result']),
        'memberCount': json['member_count'],
        'membersFacepileResults': ((json['members_facepile_results'] as Array<any>).map(UserResultsFromJSON)),
        'moderatorCount': json['moderator_count'],
        'name': json['name'],
        'primaryCommunityTopic': json['primary_community_topic'] == null ? undefined : PrimaryCommunityTopicFromJSON(json['primary_community_topic']),
        'question': json['question'] == null ? undefined : json['question'],
        'role': json['role'],
        'rules': ((json['rules'] as Array<any>).map(CommunityRuleFromJSON)),
        'searchTags': json['search_tags'],
        'showOnlyUsersToDisplay': json['show_only_users_to_display'] == null ? undefined : json['show_only_users_to_display'],
        'urls': json['urls'] == null ? undefined : CommunityUrlsFromJSON(json['urls']),
        'viewerRelationship': json['viewer_relationship'] == null ? undefined : json['viewer_relationship'],
    };
}

export function CommunityDataToJSON(json: any): CommunityData {
    return CommunityDataToJSONTyped(json, false);
}

export function CommunityDataToJSONTyped(value?: CommunityData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'actions': CommunityActionsToJSON(value['actions']),
        'admin_results': UserResultsToJSON(value['adminResults']),
        'created_at': value['createdAt'],
        'creator_results': UserResultsToJSON(value['creatorResults']),
        'custom_banner_media': value['customBannerMedia'],
        'default_banner_media': value['defaultBannerMedia'],
        'description': value['description'],
        'id_str': value['idStr'],
        'invites_policy': value['invitesPolicy'],
        'invites_result': CommunityInvitesResultToJSON(value['invitesResult']),
        'is_pinned': value['isPinned'],
        'join_policy': value['joinPolicy'],
        'join_requests_result': CommunityJoinRequestsResultToJSON(value['joinRequestsResult']),
        'member_count': value['memberCount'],
        'members_facepile_results': ((value['membersFacepileResults'] as Array<any>).map(UserResultsToJSON)),
        'moderator_count': value['moderatorCount'],
        'name': value['name'],
        'primary_community_topic': PrimaryCommunityTopicToJSON(value['primaryCommunityTopic']),
        'question': value['question'],
        'role': value['role'],
        'rules': ((value['rules'] as Array<any>).map(CommunityRuleToJSON)),
        'search_tags': value['searchTags'],
        'show_only_users_to_display': value['showOnlyUsersToDisplay'],
        'urls': CommunityUrlsToJSON(value['urls']),
        'viewer_relationship': value['viewerRelationship'],
    };
}

