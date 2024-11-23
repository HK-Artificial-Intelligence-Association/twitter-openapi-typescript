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
import type { UserHighlightsInfo } from './UserHighlightsInfo';
import {
    UserHighlightsInfoFromJSON,
    UserHighlightsInfoFromJSONTyped,
    UserHighlightsInfoToJSON,
    UserHighlightsInfoToJSONTyped,
} from './UserHighlightsInfo';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
    TypeNameToJSONTyped,
} from './TypeName';
import type { UserVerificationInfo } from './UserVerificationInfo';
import {
    UserVerificationInfoFromJSON,
    UserVerificationInfoFromJSONTyped,
    UserVerificationInfoToJSON,
    UserVerificationInfoToJSONTyped,
} from './UserVerificationInfo';
import type { UserLegacy } from './UserLegacy';
import {
    UserLegacyFromJSON,
    UserLegacyFromJSONTyped,
    UserLegacyToJSON,
    UserLegacyToJSONTyped,
} from './UserLegacy';
import type { UserLegacyExtendedProfile } from './UserLegacyExtendedProfile';
import {
    UserLegacyExtendedProfileFromJSON,
    UserLegacyExtendedProfileFromJSONTyped,
    UserLegacyExtendedProfileToJSON,
    UserLegacyExtendedProfileToJSONTyped,
} from './UserLegacyExtendedProfile';
import type { UserTipJarSettings } from './UserTipJarSettings';
import {
    UserTipJarSettingsFromJSON,
    UserTipJarSettingsFromJSONTyped,
    UserTipJarSettingsToJSON,
    UserTipJarSettingsToJSONTyped,
} from './UserTipJarSettings';
import type { UserProfessional } from './UserProfessional';
import {
    UserProfessionalFromJSON,
    UserProfessionalFromJSONTyped,
    UserProfessionalToJSON,
    UserProfessionalToJSONTyped,
} from './UserProfessional';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {TypeName}
     * @memberof User
     */
    typename: TypeName;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof User
     */
    affiliatesHighlightedLabel?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof User
     */
    businessAccount?: { [key: string]: any; };
    /**
     * 
     * @type {number}
     * @memberof User
     */
    creatorSubscriptionsCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    hasGraduatedAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    hasHiddenLikesOnProfile?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    hasNftAvatar?: boolean;
    /**
     * 
     * @type {UserHighlightsInfo}
     * @memberof User
     */
    highlightsInfo?: UserHighlightsInfo;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    isBlueVerified: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    isProfileTranslatable?: boolean;
    /**
     * 
     * @type {UserLegacy}
     * @memberof User
     */
    legacy: UserLegacy;
    /**
     * 
     * @type {UserLegacyExtendedProfile}
     * @memberof User
     */
    legacyExtendedProfile?: UserLegacyExtendedProfile;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    premiumGiftingEligible?: boolean;
    /**
     * 
     * @type {UserProfessional}
     * @memberof User
     */
    professional?: UserProfessional;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profileImageShape: UserProfileImageShapeEnum;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    restId: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    superFollowEligible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    superFollowedBy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    superFollowing?: boolean;
    /**
     * 
     * @type {UserTipJarSettings}
     * @memberof User
     */
    tipjarSettings?: UserTipJarSettings;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    userSeedTweetCount?: number;
    /**
     * 
     * @type {UserVerificationInfo}
     * @memberof User
     */
    verificationInfo?: UserVerificationInfo;
}


/**
 * @export
 */
export const UserProfileImageShapeEnum = {
    Circle: 'Circle',
    Square: 'Square',
    Hexagon: 'Hexagon'
} as const;
export type UserProfileImageShapeEnum = typeof UserProfileImageShapeEnum[keyof typeof UserProfileImageShapeEnum];


/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('isBlueVerified' in value) || value['isBlueVerified'] === undefined) return false;
    if (!('legacy' in value) || value['legacy'] === undefined) return false;
    if (!('profileImageShape' in value) || value['profileImageShape'] === undefined) return false;
    if (!('restId' in value) || value['restId'] === undefined) return false;
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'affiliatesHighlightedLabel': json['affiliates_highlighted_label'] == null ? undefined : json['affiliates_highlighted_label'],
        'businessAccount': json['business_account'] == null ? undefined : json['business_account'],
        'creatorSubscriptionsCount': json['creator_subscriptions_count'] == null ? undefined : json['creator_subscriptions_count'],
        'hasGraduatedAccess': json['has_graduated_access'] == null ? undefined : json['has_graduated_access'],
        'hasHiddenLikesOnProfile': json['has_hidden_likes_on_profile'] == null ? undefined : json['has_hidden_likes_on_profile'],
        'hasNftAvatar': json['has_nft_avatar'] == null ? undefined : json['has_nft_avatar'],
        'highlightsInfo': json['highlights_info'] == null ? undefined : UserHighlightsInfoFromJSON(json['highlights_info']),
        'id': json['id'],
        'isBlueVerified': json['is_blue_verified'],
        'isProfileTranslatable': json['is_profile_translatable'] == null ? undefined : json['is_profile_translatable'],
        'legacy': UserLegacyFromJSON(json['legacy']),
        'legacyExtendedProfile': json['legacy_extended_profile'] == null ? undefined : UserLegacyExtendedProfileFromJSON(json['legacy_extended_profile']),
        'premiumGiftingEligible': json['premium_gifting_eligible'] == null ? undefined : json['premium_gifting_eligible'],
        'professional': json['professional'] == null ? undefined : UserProfessionalFromJSON(json['professional']),
        'profileImageShape': json['profile_image_shape'],
        'restId': json['rest_id'],
        'superFollowEligible': json['super_follow_eligible'] == null ? undefined : json['super_follow_eligible'],
        'superFollowedBy': json['super_followed_by'] == null ? undefined : json['super_followed_by'],
        'superFollowing': json['super_following'] == null ? undefined : json['super_following'],
        'tipjarSettings': json['tipjar_settings'] == null ? undefined : UserTipJarSettingsFromJSON(json['tipjar_settings']),
        'userSeedTweetCount': json['user_seed_tweet_count'] == null ? undefined : json['user_seed_tweet_count'],
        'verificationInfo': json['verification_info'] == null ? undefined : UserVerificationInfoFromJSON(json['verification_info']),
    };
}

export function UserToJSON(json: any): User {
    return UserToJSONTyped(json, false);
}

export function UserToJSONTyped(value?: User | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'affiliates_highlighted_label': value['affiliatesHighlightedLabel'],
        'business_account': value['businessAccount'],
        'creator_subscriptions_count': value['creatorSubscriptionsCount'],
        'has_graduated_access': value['hasGraduatedAccess'],
        'has_hidden_likes_on_profile': value['hasHiddenLikesOnProfile'],
        'has_nft_avatar': value['hasNftAvatar'],
        'highlights_info': UserHighlightsInfoToJSON(value['highlightsInfo']),
        'id': value['id'],
        'is_blue_verified': value['isBlueVerified'],
        'is_profile_translatable': value['isProfileTranslatable'],
        'legacy': UserLegacyToJSON(value['legacy']),
        'legacy_extended_profile': UserLegacyExtendedProfileToJSON(value['legacyExtendedProfile']),
        'premium_gifting_eligible': value['premiumGiftingEligible'],
        'professional': UserProfessionalToJSON(value['professional']),
        'profile_image_shape': value['profileImageShape'],
        'rest_id': value['restId'],
        'super_follow_eligible': value['superFollowEligible'],
        'super_followed_by': value['superFollowedBy'],
        'super_following': value['superFollowing'],
        'tipjar_settings': UserTipJarSettingsToJSON(value['tipjarSettings']),
        'user_seed_tweet_count': value['userSeedTweetCount'],
        'verification_info': UserVerificationInfoToJSON(value['verificationInfo']),
    };
}

