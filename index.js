// Load the AWS SDK for Node.js
const aws = require('aws-sdk');

// Create a new SES object in eu-central-1 region
const ses = new aws.SES({region: process.env.AwsRegion});

const RECEIVER = process.env.ToEmailAddress;
const SENDER = process.env.ToEmailAddress;

exports.handler = (event, context, callback) => {

    const params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Template: process.env.EmailTemplate,
        TemplateData: JSON.stringify({
            "name": event.name,
            "text": event.desc,
            "phone": event.phone,
            "email": event.email
        }),
        Source: SENDER
    };

    let responseStatusCode = 200;
    let responseResult = "Success";
    ses.sendTemplatedEmail(params, (err, data) => {
        callback(null, {err: err, data: data});
        if (err) {
            responseStatusCode = 500;
            responseResult = "Failed";
            console.log('Email failed:', err);
            context.fail(err);
        } else {
            console.log('Email sent:', data);
            context.succeed(event);
        }
    });

    const response = {
        "statusCode": responseStatusCode,
        "headers": {
            "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
        },
        "isBase64Encoded": false,
        "body": "{ \"result\": " + responseResult + "}"
    }

    return response;
};