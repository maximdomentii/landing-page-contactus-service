# Serverless Contact Us Form
Quickly deploy an endpoint to handle your `contact us` form on your static website.

## Package and Deploy
```shell
aws cloudformation package \
  --template-file cloudformation-template.yaml \
  --output-template-file cloudformation-template-output.yaml --s3-bucket cloudformation-tamplates

aws cloudformation deploy \
  --template-file cloudformation-template-output.yaml \
  --stack-name contact-us \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides "ContactUsEmailTemplate=contact-us-email-template" "ToEmailAddress=???"
```


## What AWS resources does this template use?
* Lambda (API Function)
* API Gateway (HTTP proxy to Lambda)
* SES (Send us the email)
* SES Email template
* IAM (AWS permissions & users)