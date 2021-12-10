# Serverless Contact Us Form
Quickly deploy an endpoint to handle your `contact us` form on your static website.

## Package and Deploy
```shell
aws cloudformation package 
  --template-file cloudformation-tamplate.yml 
  --output-template-file cloudformation-tamplate-output.yml --s3-bucket cloudformation-tamplates

aws cloudformation deploy 
  --template-file cloudformation-tamplate-output.yml 
  --stack-name contact-us 
  --capabilities CAPABILITY_IAM  
  --parameter-overrides "ContactUsEmailTemplate=contact-us-email-template" "ToEmailAddress=???"
```


## What AWS resources does this template use?
* Lambda (API Function)
* API Gateway (HTTP proxy to Lambda)
* SES (Send us the email)
* IAM (AWS permissions & users)