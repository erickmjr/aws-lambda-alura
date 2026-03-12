import { log } from "./log.mjs";

export const handler = async(event) => {

    log('event: ' + JSON.stringify((event)))

    const response = {
        statusCode: 200,
        body: `<html><body>Request data: ${JSON.stringify(event)}</body></html>`,
        headers: {
            'content-type': 'text/html'
        }
    };
    
    return response;
};