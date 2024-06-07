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
  GetUsersByRestIds200Response,
} from '../models/index';
import {
    GetUsersByRestIds200ResponseFromJSON,
    GetUsersByRestIds200ResponseToJSON,
} from '../models/index';

export interface GetUsersByRestIdsRequest {
    pathQueryId: string;
    variables: string;
    features: string;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * get users by rest ids
     */
    async getUsersByRestIdsRaw(requestParameters: GetUsersByRestIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetUsersByRestIds200Response>> {
        if (requestParameters['pathQueryId'] == null) {
            throw new runtime.RequiredError(
                'pathQueryId',
                'Required parameter "pathQueryId" was null or undefined when calling getUsersByRestIds().'
            );
        }

        if (requestParameters['variables'] == null) {
            throw new runtime.RequiredError(
                'variables',
                'Required parameter "variables" was null or undefined when calling getUsersByRestIds().'
            );
        }

        if (requestParameters['features'] == null) {
            throw new runtime.RequiredError(
                'features',
                'Required parameter "features" was null or undefined when calling getUsersByRestIds().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['variables'] != null) {
            queryParameters['variables'] = requestParameters['variables'];
        }

        if (requestParameters['features'] != null) {
            queryParameters['features'] = requestParameters['features'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Priority"] = await this.configuration.apiKey("Priority"); // Priority authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Referer"] = await this.configuration.apiKey("Referer"); // Referer authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/UsersByRestIds`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters['pathQueryId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetUsersByRestIds200ResponseFromJSON(jsonValue));
    }

    /**
     * get users by rest ids
     */
    async getUsersByRestIds(requestParameters: GetUsersByRestIdsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetUsersByRestIds200Response> {
        const response = await this.getUsersByRestIdsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
