import { Provider } from "next-auth/providers";

export function DiscogsProvider({ clientId, clientSecret, }: { clientId: string, clientSecret: string }): Provider {
    const currentTimestamp = new Date().getTime();
    return {
        id: "discogs",
        name: "Discogs",
        type: "oauth",
        version: '1.0',
        authorization: {
            url: "https://www.discogs.com/oauth/authorize",
            params: {
                "OAuth oauth_consumer_key": clientId,
                oauth_nonce: "jenesaispasquoimettre...",
                oauth_signature: clientSecret+"&",
                oauth_signature_method: "PLAINTEXT",
                oauth_timestamp: currentTimestamp,
                oauth_callback: "http://localhost:3000/api/auth/callback/discogs"
            }
        },
        encoding: 'PLAINTEXT',
        accessTokenUrl: "https://api.discogs.com/oauth/access_token",
        requestTokenUrl: "https://api.discogs.com/oauth/request_token",
        profileUrl: "https://api.discogs.com/oauth/identity",
        clientId: clientId,
        clientSecret: clientSecret,
        profile(profile) {
            return {
                id: profile.id,
                name: profile.username,
                ressource_url: profile.ressource_url,
            }
        },
    }
}