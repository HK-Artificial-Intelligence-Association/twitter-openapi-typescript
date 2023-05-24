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


import * as runtime from '../runtime';
import type {
  BookmarksResponse,
  ListTweetsTimelineResponse,
  TimelineResponse,
  TweetDetailResponse,
  UserTweetsResponse,
} from '../models';
import {
    BookmarksResponseFromJSON,
    BookmarksResponseToJSON,
    ListTweetsTimelineResponseFromJSON,
    ListTweetsTimelineResponseToJSON,
    TimelineResponseFromJSON,
    TimelineResponseToJSON,
    TweetDetailResponseFromJSON,
    TweetDetailResponseToJSON,
    UserTweetsResponseFromJSON,
    UserTweetsResponseToJSON,
} from '../models';

export interface GetBookmarksRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetHomeLatestTimelineRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetHomeTimelineRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetLikesRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetListLatestTweetsTimelineRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetTweetDetailRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetUserMediaRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetUserTweetsRequest {
    queryId: string;
    variables: string;
    features: string;
}

export interface GetUserTweetsAndRepliesRequest {
    queryId: string;
    variables: string;
    features: string;
}

/**
 * 
 */
export class TweetApi extends runtime.BaseAPI {

    /**
     * get bookmarks
     */
    async getBookmarksRaw(requestParameters: GetBookmarksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BookmarksResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getBookmarks.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getBookmarks.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getBookmarks.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/tmd4ifV8RHltzn8ymGg1aw/Bookmarks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BookmarksResponseFromJSON(jsonValue));
    }

    /**
     * get bookmarks
     */
    async getBookmarks(requestParameters: GetBookmarksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BookmarksResponse> {
        const response = await this.getBookmarksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get tweet list of timeline
     */
    async getHomeLatestTimelineRaw(requestParameters: GetHomeLatestTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimelineResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getHomeLatestTimeline.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getHomeLatestTimeline.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getHomeLatestTimeline.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/zhX91JE87mWvfprhYE97xA/HomeLatestTimeline`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimelineResponseFromJSON(jsonValue));
    }

    /**
     * get tweet list of timeline
     */
    async getHomeLatestTimeline(requestParameters: GetHomeLatestTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimelineResponse> {
        const response = await this.getHomeLatestTimelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get tweet list of timeline
     */
    async getHomeTimelineRaw(requestParameters: GetHomeTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimelineResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getHomeTimeline.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getHomeTimeline.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getHomeTimeline.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/HCosKfLNW1AcOo3la3mMgg/HomeTimeline`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimelineResponseFromJSON(jsonValue));
    }

    /**
     * get tweet list of timeline
     */
    async getHomeTimeline(requestParameters: GetHomeTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimelineResponse> {
        const response = await this.getHomeTimelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get user likes tweets
     */
    async getLikesRaw(requestParameters: GetLikesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserTweetsResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getLikes.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getLikes.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getLikes.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/5fmEkRT-1AdHqEsbVgehMg/Likes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserTweetsResponseFromJSON(jsonValue));
    }

    /**
     * get user likes tweets
     */
    async getLikes(requestParameters: GetLikesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserTweetsResponse> {
        const response = await this.getLikesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get tweet list of timeline
     */
    async getListLatestTweetsTimelineRaw(requestParameters: GetListLatestTweetsTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTweetsTimelineResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getListLatestTweetsTimeline.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getListLatestTweetsTimeline.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getListLatestTweetsTimeline.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/2TemLyqrMpTeAmysdbnVqw/ListLatestTweetsTimeline`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListTweetsTimelineResponseFromJSON(jsonValue));
    }

    /**
     * get tweet list of timeline
     */
    async getListLatestTweetsTimeline(requestParameters: GetListLatestTweetsTimelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTweetsTimelineResponse> {
        const response = await this.getListLatestTweetsTimelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get TweetDetail
     */
    async getTweetDetailRaw(requestParameters: GetTweetDetailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TweetDetailResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getTweetDetail.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getTweetDetail.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getTweetDetail.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/wNNG8DBB8EaXw1lq4vFWGA/TweetDetail`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TweetDetailResponseFromJSON(jsonValue));
    }

    /**
     * get TweetDetail
     */
    async getTweetDetail(requestParameters: GetTweetDetailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TweetDetailResponse> {
        const response = await this.getTweetDetailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get user media tweets
     */
    async getUserMediaRaw(requestParameters: GetUserMediaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserTweetsResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getUserMedia.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getUserMedia.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getUserMedia.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/YqiE3JL1KNgf9nSljYdxaA/UserMedia`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserTweetsResponseFromJSON(jsonValue));
    }

    /**
     * get user media tweets
     */
    async getUserMedia(requestParameters: GetUserMediaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserTweetsResponse> {
        const response = await this.getUserMediaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get user tweets
     */
    async getUserTweetsRaw(requestParameters: GetUserTweetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserTweetsResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getUserTweets.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getUserTweets.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getUserTweets.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/HuTx74BxAnezK1gWvYY7zg/UserTweets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserTweetsResponseFromJSON(jsonValue));
    }

    /**
     * get user tweets
     */
    async getUserTweets(requestParameters: GetUserTweetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserTweetsResponse> {
        const response = await this.getUserTweetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get user replies tweets
     */
    async getUserTweetsAndRepliesRaw(requestParameters: GetUserTweetsAndRepliesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserTweetsResponse>> {
        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getUserTweetsAndReplies.');
        }

        if (requestParameters.variables === null || requestParameters.variables === undefined) {
            throw new runtime.RequiredError('variables','Required parameter requestParameters.variables was null or undefined when calling getUserTweetsAndReplies.');
        }

        if (requestParameters.features === null || requestParameters.features === undefined) {
            throw new runtime.RequiredError('features','Required parameter requestParameters.features was null or undefined when calling getUserTweetsAndReplies.');
        }

        const queryParameters: any = {};

        if (requestParameters.queryId !== undefined) {
            queryParameters['queryId'] = requestParameters.queryId;
        }

        if (requestParameters.variables !== undefined) {
            queryParameters['variables'] = requestParameters.variables;
        }

        if (requestParameters.features !== undefined) {
            queryParameters['features'] = requestParameters.features;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/graphql/RIWc55YCNyUJ-U3HHGYkdg/UserTweetsAndReplies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserTweetsResponseFromJSON(jsonValue));
    }

    /**
     * get user replies tweets
     */
    async getUserTweetsAndReplies(requestParameters: GetUserTweetsAndRepliesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserTweetsResponse> {
        const response = await this.getUserTweetsAndRepliesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
