import json
import ssl
import certifi
import aiohttp
import pandas as pd
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal


def handler(event, context):
    # try:
    #     gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
    #     # print("GREMLIN URL", gremlin_url)

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

    try:
        data = {'Name': ['John', 'Anna', 'Peter', 'Linda'],
                'Age': [28, 34, 29, 32]}
        df = pd.DataFrame(data)

        result = df.to_json(orient='records')

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'DataFrame created successfully', 'data': result})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': f'An error occurred: {str(e)}'})
        }


# import http.client


# def handler(event, context):
#     try:
#         conn = http.client.HTTPSConnection("www.example.com")
#         conn.request("GET", "/")
#         response = conn.getresponse()

#         if response.status == 200:
#             print("HTTPS request succeeded")
#         else:
#             print(f"HTTPS request failed with status: {response.status}")

#         conn.close()

#         return {
#             'statusCode': 200,
#             'body': 'HTTPS request test completed'
#         }
#     except Exception as e:
#         print(f"An error occurred: {str(e)}")
#         return {
#             'statusCode': 500,
#             'body': 'HTTPS request test failed'
#         }
