import json
import ssl
import certifi
import aiohttp
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal


def handler(event, context):
    print('received event:')
    print(event)

    gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
    print(gremlin_url)
    # ssl_context = ssl.create_default_context(cafile=certifi.where())
    # gremlin_client = DriverRemoteConnection(gremlin_url, "g", ssl_context=ssl_context)
    # g = traversal().withRemote(gremlin_client)
    # node_count = g.V().count().next()
    # return node_count

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }
