import json
import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal
from gremlin_python.process.graph_traversal import __


def handler(event, context):
    try:
        keyword = event.get('keyword')

        gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
        ssl_context = ssl.create_default_context(cafile=certifi.where())
        gremlin_client = DriverRemoteConnection(
            gremlin_url, "g", ssl_context=ssl_context
        )
        g = traversal().withRemote(gremlin_client)

        uid = (
            g.V()
            .hasLabel('keyword')
            .has('name', keyword)
            .values('uid')
            .next()
        )

        print(f"UID value: {uid}")
        return uid

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return {'error': 'An error occurred while processing your request.'}
