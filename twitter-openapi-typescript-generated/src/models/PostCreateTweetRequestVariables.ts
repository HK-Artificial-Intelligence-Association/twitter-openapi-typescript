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
import type { PostCreateTweetRequestVariablesReply } from './PostCreateTweetRequestVariablesReply';
import {
    PostCreateTweetRequestVariablesReplyFromJSON,
    PostCreateTweetRequestVariablesReplyFromJSONTyped,
    PostCreateTweetRequestVariablesReplyToJSON,
    PostCreateTweetRequestVariablesReplyToJSONTyped,
} from './PostCreateTweetRequestVariablesReply';
import type { PostCreateTweetRequestVariablesConversationControl } from './PostCreateTweetRequestVariablesConversationControl';
import {
    PostCreateTweetRequestVariablesConversationControlFromJSON,
    PostCreateTweetRequestVariablesConversationControlFromJSONTyped,
    PostCreateTweetRequestVariablesConversationControlToJSON,
    PostCreateTweetRequestVariablesConversationControlToJSONTyped,
} from './PostCreateTweetRequestVariablesConversationControl';
import type { PostCreateTweetRequestVariablesMedia } from './PostCreateTweetRequestVariablesMedia';
import {
    PostCreateTweetRequestVariablesMediaFromJSON,
    PostCreateTweetRequestVariablesMediaFromJSONTyped,
    PostCreateTweetRequestVariablesMediaToJSON,
    PostCreateTweetRequestVariablesMediaToJSONTyped,
} from './PostCreateTweetRequestVariablesMedia';

/**
 * 
 * @export
 * @interface PostCreateTweetRequestVariables
 */
export interface PostCreateTweetRequestVariables {
    /**
     * 
     * @type {string}
     * @memberof PostCreateTweetRequestVariables
     */
    attachmentUrl?: string;
    /**
     * 
     * @type {PostCreateTweetRequestVariablesConversationControl}
     * @memberof PostCreateTweetRequestVariables
     */
    conversationControl?: PostCreateTweetRequestVariablesConversationControl;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestVariables
     */
    darkRequest: boolean;
    /**
     * 
     * @type {object}
     * @memberof PostCreateTweetRequestVariables
     */
    disallowedReplyOptions?: object;
    /**
     * 
     * @type {PostCreateTweetRequestVariablesMedia}
     * @memberof PostCreateTweetRequestVariables
     */
    media: PostCreateTweetRequestVariablesMedia;
    /**
     * 
     * @type {PostCreateTweetRequestVariablesReply}
     * @memberof PostCreateTweetRequestVariables
     */
    reply?: PostCreateTweetRequestVariablesReply;
    /**
     * 
     * @type {Array<object>}
     * @memberof PostCreateTweetRequestVariables
     */
    semanticAnnotationIds: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof PostCreateTweetRequestVariables
     */
    tweetText: string;
}

/**
 * Check if a given object implements the PostCreateTweetRequestVariables interface.
 */
export function instanceOfPostCreateTweetRequestVariables(value: object): value is PostCreateTweetRequestVariables {
    if (!('darkRequest' in value) || value['darkRequest'] === undefined) return false;
    if (!('media' in value) || value['media'] === undefined) return false;
    if (!('semanticAnnotationIds' in value) || value['semanticAnnotationIds'] === undefined) return false;
    if (!('tweetText' in value) || value['tweetText'] === undefined) return false;
    return true;
}

export function PostCreateTweetRequestVariablesFromJSON(json: any): PostCreateTweetRequestVariables {
    return PostCreateTweetRequestVariablesFromJSONTyped(json, false);
}

export function PostCreateTweetRequestVariablesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateTweetRequestVariables {
    if (json == null) {
        return json;
    }
    return {
        
        'attachmentUrl': json['attachment_url'] == null ? undefined : json['attachment_url'],
        'conversationControl': json['conversation_control'] == null ? undefined : PostCreateTweetRequestVariablesConversationControlFromJSON(json['conversation_control']),
        'darkRequest': json['dark_request'],
        'disallowedReplyOptions': json['disallowed_reply_options'] == null ? undefined : json['disallowed_reply_options'],
        'media': PostCreateTweetRequestVariablesMediaFromJSON(json['media']),
        'reply': json['reply'] == null ? undefined : PostCreateTweetRequestVariablesReplyFromJSON(json['reply']),
        'semanticAnnotationIds': json['semantic_annotation_ids'],
        'tweetText': json['tweet_text'],
    };
}

export function PostCreateTweetRequestVariablesToJSON(json: any): PostCreateTweetRequestVariables {
    return PostCreateTweetRequestVariablesToJSONTyped(json, false);
}

export function PostCreateTweetRequestVariablesToJSONTyped(value?: PostCreateTweetRequestVariables | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'attachment_url': value['attachmentUrl'],
        'conversation_control': PostCreateTweetRequestVariablesConversationControlToJSON(value['conversationControl']),
        'dark_request': value['darkRequest'],
        'disallowed_reply_options': value['disallowedReplyOptions'],
        'media': PostCreateTweetRequestVariablesMediaToJSON(value['media']),
        'reply': PostCreateTweetRequestVariablesReplyToJSON(value['reply']),
        'semantic_annotation_ids': value['semanticAnnotationIds'],
        'tweet_text': value['tweetText'],
    };
}

