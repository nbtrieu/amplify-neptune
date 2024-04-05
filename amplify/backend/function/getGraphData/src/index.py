import json
# import ssl
# import certifi
# import aiohttp
# import pandas as pd
# from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
# from gremlin_python.process.anonymous_traversal import traversal


def handler(event, context):
    # try:
    #     gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
    #     print("GREMLIN URL", gremlin_url)

    #     ssl_context = ssl.create_default_context(cafile=certifi.where())
    #     # print(ssl_context)
    #     gremlin_client = DriverRemoteConnection(gremlin_url, "g", ssl_context=ssl_context)
    #     # print(gremlin_client)
    #     g = traversal().withRemote(gremlin_client)
    #     node_count = g.V().count().next()

    #     return {
    #         'statusCode': 200,
    #         'body': json.dumps({'message': 'Successfully retrieved node count', 'node_count': node_count})
    #     }
    # except Exception as e:
    #     print(f"An error occurred: {str(e)}")
    #     return {
    #         'statusCode': 500,
    #         'body': json.dumps({'error': 'An error occurred while processing your request.'})
    #     }

    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "hello world",
        }),
    }
