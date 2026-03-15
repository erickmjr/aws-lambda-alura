import { log } from "./log.mjs";
import { S3 } from '@aws-sdk/client-s3'; 

const s3Client = new S3({ region: 'sa-east-1' });

export const handler = async (event) => {

    const record = event.Records[0];
    const Bucket = record.s3.bucket.name;
    const Key = record.s3.object.key;
    const getObjectResult = await s3Client.getObject({
        Bucket,
        Key
    });
    const mega_byte = 1024 * 1024;

    if (getObjectResult.ContentLength > mega_byte) {
        log('Object too large');

        return 'Object too large';
    }

    log('Object size ok.');
    return 'Object size ok.';

};