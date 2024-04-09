import json
import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal


def handler(event, context):
    try:
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Successfully invoked'})
        }

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'An error occurred while processing your request.'})
        }
