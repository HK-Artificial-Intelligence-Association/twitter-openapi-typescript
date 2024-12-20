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
import type { AdditionalMediaInfo } from './AdditionalMediaInfo';
import {
    AdditionalMediaInfoFromJSON,
    AdditionalMediaInfoFromJSONTyped,
    AdditionalMediaInfoToJSON,
    AdditionalMediaInfoToJSONTyped,
} from './AdditionalMediaInfo';
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import {
    AllowDownloadStatusFromJSON,
    AllowDownloadStatusFromJSONTyped,
    AllowDownloadStatusToJSON,
    AllowDownloadStatusToJSONTyped,
} from './AllowDownloadStatus';
import type { MediaResults } from './MediaResults';
import {
    MediaResultsFromJSON,
    MediaResultsFromJSONTyped,
    MediaResultsToJSON,
    MediaResultsToJSONTyped,
} from './MediaResults';
import type { SensitiveMediaWarning } from './SensitiveMediaWarning';
import {
    SensitiveMediaWarningFromJSON,
    SensitiveMediaWarningFromJSONTyped,
    SensitiveMediaWarningToJSON,
    SensitiveMediaWarningToJSONTyped,
} from './SensitiveMediaWarning';
import type { ExtMediaAvailability } from './ExtMediaAvailability';
import {
    ExtMediaAvailabilityFromJSON,
    ExtMediaAvailabilityFromJSONTyped,
    ExtMediaAvailabilityToJSON,
    ExtMediaAvailabilityToJSONTyped,
} from './ExtMediaAvailability';
import type { MediaVideoInfo } from './MediaVideoInfo';
import {
    MediaVideoInfoFromJSON,
    MediaVideoInfoFromJSONTyped,
    MediaVideoInfoToJSON,
    MediaVideoInfoToJSONTyped,
} from './MediaVideoInfo';
import type { MediaSizes } from './MediaSizes';
import {
    MediaSizesFromJSON,
    MediaSizesFromJSONTyped,
    MediaSizesToJSON,
    MediaSizesToJSONTyped,
} from './MediaSizes';
import type { MediaOriginalInfo } from './MediaOriginalInfo';
import {
    MediaOriginalInfoFromJSON,
    MediaOriginalInfoFromJSONTyped,
    MediaOriginalInfoToJSON,
    MediaOriginalInfoToJSONTyped,
} from './MediaOriginalInfo';

/**
 * 
 * @export
 * @interface Media
 */
export interface Media {
    /**
     * 
     * @type {AdditionalMediaInfo}
     * @memberof Media
     */
    additionalMediaInfo?: AdditionalMediaInfo;
    /**
     * 
     * @type {AllowDownloadStatus}
     * @memberof Media
     */
    allowDownloadStatus?: AllowDownloadStatus;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    displayUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    expandedUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    extAltText?: string;
    /**
     * 
     * @type {ExtMediaAvailability}
     * @memberof Media
     */
    extMediaAvailability: ExtMediaAvailability;
    /**
     * 
     * @type {object}
     * @memberof Media
     */
    features?: object;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    idStr: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof Media
     */
    indices: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    mediaKey: string;
    /**
     * 
     * @type {MediaResults}
     * @memberof Media
     */
    mediaResults?: MediaResults;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    mediaUrlHttps: string;
    /**
     * 
     * @type {MediaOriginalInfo}
     * @memberof Media
     */
    originalInfo: MediaOriginalInfo;
    /**
     * 
     * @type {SensitiveMediaWarning}
     * @memberof Media
     */
    sensitiveMediaWarning?: SensitiveMediaWarning;
    /**
     * 
     * @type {MediaSizes}
     * @memberof Media
     */
    sizes: MediaSizes;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    sourceStatusIdStr?: string;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    sourceUserIdStr?: string;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    type: MediaTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Media
     */
    url: string;
    /**
     * 
     * @type {MediaVideoInfo}
     * @memberof Media
     */
    videoInfo?: MediaVideoInfo;
}


/**
 * @export
 */
export const MediaTypeEnum = {
    Photo: 'photo',
    Video: 'video',
    AnimatedGif: 'animated_gif'
} as const;
export type MediaTypeEnum = typeof MediaTypeEnum[keyof typeof MediaTypeEnum];


/**
 * Check if a given object implements the Media interface.
 */
export function instanceOfMedia(value: object): value is Media {
    if (!('displayUrl' in value) || value['displayUrl'] === undefined) return false;
    if (!('expandedUrl' in value) || value['expandedUrl'] === undefined) return false;
    if (!('extMediaAvailability' in value) || value['extMediaAvailability'] === undefined) return false;
    if (!('idStr' in value) || value['idStr'] === undefined) return false;
    if (!('indices' in value) || value['indices'] === undefined) return false;
    if (!('mediaKey' in value) || value['mediaKey'] === undefined) return false;
    if (!('mediaUrlHttps' in value) || value['mediaUrlHttps'] === undefined) return false;
    if (!('originalInfo' in value) || value['originalInfo'] === undefined) return false;
    if (!('sizes' in value) || value['sizes'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function MediaFromJSON(json: any): Media {
    return MediaFromJSONTyped(json, false);
}

export function MediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Media {
    if (json == null) {
        return json;
    }
    return {
        
        'additionalMediaInfo': json['additional_media_info'] == null ? undefined : AdditionalMediaInfoFromJSON(json['additional_media_info']),
        'allowDownloadStatus': json['allow_download_status'] == null ? undefined : AllowDownloadStatusFromJSON(json['allow_download_status']),
        'displayUrl': json['display_url'],
        'expandedUrl': json['expanded_url'],
        'extAltText': json['ext_alt_text'] == null ? undefined : json['ext_alt_text'],
        'extMediaAvailability': ExtMediaAvailabilityFromJSON(json['ext_media_availability']),
        'features': json['features'] == null ? undefined : json['features'],
        'idStr': json['id_str'],
        'indices': json['indices'],
        'mediaKey': json['media_key'],
        'mediaResults': json['media_results'] == null ? undefined : MediaResultsFromJSON(json['media_results']),
        'mediaUrlHttps': json['media_url_https'],
        'originalInfo': MediaOriginalInfoFromJSON(json['original_info']),
        'sensitiveMediaWarning': json['sensitive_media_warning'] == null ? undefined : SensitiveMediaWarningFromJSON(json['sensitive_media_warning']),
        'sizes': MediaSizesFromJSON(json['sizes']),
        'sourceStatusIdStr': json['source_status_id_str'] == null ? undefined : json['source_status_id_str'],
        'sourceUserIdStr': json['source_user_id_str'] == null ? undefined : json['source_user_id_str'],
        'type': json['type'],
        'url': json['url'],
        'videoInfo': json['video_info'] == null ? undefined : MediaVideoInfoFromJSON(json['video_info']),
    };
}

export function MediaToJSON(json: any): Media {
    return MediaToJSONTyped(json, false);
}

export function MediaToJSONTyped(value?: Media | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'additional_media_info': AdditionalMediaInfoToJSON(value['additionalMediaInfo']),
        'allow_download_status': AllowDownloadStatusToJSON(value['allowDownloadStatus']),
        'display_url': value['displayUrl'],
        'expanded_url': value['expandedUrl'],
        'ext_alt_text': value['extAltText'],
        'ext_media_availability': ExtMediaAvailabilityToJSON(value['extMediaAvailability']),
        'features': value['features'],
        'id_str': value['idStr'],
        'indices': value['indices'],
        'media_key': value['mediaKey'],
        'media_results': MediaResultsToJSON(value['mediaResults']),
        'media_url_https': value['mediaUrlHttps'],
        'original_info': MediaOriginalInfoToJSON(value['originalInfo']),
        'sensitive_media_warning': SensitiveMediaWarningToJSON(value['sensitiveMediaWarning']),
        'sizes': MediaSizesToJSON(value['sizes']),
        'source_status_id_str': value['sourceStatusIdStr'],
        'source_user_id_str': value['sourceUserIdStr'],
        'type': value['type'],
        'url': value['url'],
        'video_info': MediaVideoInfoToJSON(value['videoInfo']),
    };
}

