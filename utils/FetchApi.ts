import { error } from "console";

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface FetchApiOptions {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: any;
    params?: Record<string, string | number>;
}

export class FetchApi {
    private static baseUrl: string = 'http://127.0.0.1:8000';

    private static buildEndpointUrl(endpoint: string): string {
        if (!this.baseUrl) {
            throw new Error('Base URL is not set. Use FetchApi.setBaseUrl(url) first.');
        }
        return `${this.baseUrl}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
    }

    private static buildUrl(url: string, params?: Record<string, string | number>): string {
        if (!params) return url;
        const query = new URLSearchParams(params as Record<string, string>).toString();
        console.log('Built URL:', query ? `${url}?${query}` : url);     
        return query ? `${url}?${query}` : url;
    }

    static async request<T = any>(
        endpoint: string,
        options: FetchApiOptions = {}
    ): Promise<T> {
        const { method = 'GET', headers = {}, body, params } = options;
        const url = this.buildEndpointUrl(endpoint);
        const fetchUrl = this.buildUrl(url, params);

        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        if (body && method !== 'GET') {
            fetchOptions.body = JSON.stringify(body);
        }

        const response = await fetch(fetchUrl, fetchOptions);

        if (!response.ok) {
            let errorMessage = 'Server error';
            try {
                const errorData = await response.json();
                if (errorData && errorData.detail) {
                    errorMessage = errorData.detail;
                }else if(response.statusText) {
                    errorMessage = response.statusText;
                }
            } catch (e) {
                // Ignore JSON parse errors, use default message
            }
            throw new Error(errorMessage);
        }

        return response.json();
    }

    static get<T = any>(endpoint: string, params?: Record<string, string | number>, headers?: Record<string, string>, body?: any) {
        return this.request<T>(endpoint, { method: 'GET', params, headers, body });
    }

    static post<T = any>(endpoint: string, body?: any, headers?: Record<string, string>,params?: Record<string, string | number>) {
        return this.request<T>(endpoint, { method: 'POST', body, headers, params });
    }

    static put<T = any>(endpoint: string, body?: any, headers?: Record<string, string>) {
        return this.request<T>(endpoint, { method: 'PUT', body, headers });
    }

    static delete<T = any>(endpoint: string, body?: any, headers?: Record<string, string>) {
        return this.request<T>(endpoint, { method: 'DELETE', body, headers });
    }

    static patch<T = any>(endpoint: string, body?: any, headers?: Record<string, string>) {
        return this.request<T>(endpoint, { method: 'PATCH', body, headers });
    }
}

/**
 * Example usage:
 */

