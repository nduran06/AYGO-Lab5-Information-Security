const cdk = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigw = require('aws-cdk-lib/aws-apigateway');
const iam = require('aws-cdk-lib/aws-iam');
const dynamodb = require('aws-cdk-lib/aws-dynamodb');

class RequestUnicornStack extends cdk.Stack {
  /**
  *
  * @param {Construct} scope
  * @param {string} id
  * @param {StackProps=} props
  */
  constructor(scope, id, props) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'UnicornFunction', {
      code: lambda.Code.asset('lib/lambda-handler'),
      runtime: lambda.Runtime.NODEJS_LATEST,
      handler: 'index.handler',
      role: iam.Role.fromRoleArn(this, "LabRole", "arn:aws:iam::645349541441:role/LabRole")
    });

    const endpoint = new apigw.LambdaRestApi(this, 'UnicornEndpoint', {
      handler: fn,
      restApiName: "UnicornApi"
    });

    const ridesTable = new dynamodb.Table(this, 'RidesTable', {
      tableName: 'Rides',
      partitionKey: { name: 'RideId', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}

module.exports = { RequestUnicornStack }
