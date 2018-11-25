# The Productive Developer Blog

## Running in development
`gatsby develop`

## S3 Deployment

https://docs.aws.amazon.com/cli/latest/reference/s3/cp.html
`cd Public`
`aws s3 cp --recursive --dryrun . s3://the-productive-developer-blog`
