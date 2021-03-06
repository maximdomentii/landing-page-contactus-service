# Serverless Contact Us Form
Quickly deploy an endpoint to handle your `contact us` form on your static website.

## Package and Deploy
```shell
aws cloudformation delete-stack \
    --stack-name landing-page-contactus-service

aws cloudformation package \
  --template-file cloudformation-template.yaml \
  --output-template-file cloudformation-template-output.yaml --s3-bucket cloudformation-tamplates

aws cloudformation deploy \
  --template-file cloudformation-template-output.yaml \
  --stack-name landing-page-contactus-service \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides "FromEmailAddress=???" "ToEmailAddress=???" "password=???" 
```