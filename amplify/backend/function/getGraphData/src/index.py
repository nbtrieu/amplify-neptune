import json
import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal


def handler(event, context):
    try:
        gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"

        ssl_context = ssl.create_default_context(cafile=certifi.where())
        gremlin_client = DriverRemoteConnection(
            gremlin_url, "g", ssl_context=ssl_context
        )
        g = traversal().withRemote(gremlin_client)
        node_count = g.V().count().next()

        print(f"Successfully retrieved node count: {node_count}")
        print(type(node_count))

        return node_count

    except Exception as e:
        print(f"An error occurred: {str(e)}")  # Error logging
        return {'error': 'An error occurred while processing your request.'}
