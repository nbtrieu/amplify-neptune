import json
import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal


def handler(event, context):
    try:
        label = event.get('label')
        property_key = event.get('property_key')
        property_value = event.get('property_value')

        gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
        ssl_context = ssl.create_default_context(cafile=certifi.where())
        gremlin_client = DriverRemoteConnection(
            gremlin_url, "g", ssl_context=ssl_context
        )
        g = traversal().withRemote(gremlin_client)

        properties = (
            g.V()
            .hasLabel(label)
            .has(property_key, property_value)
            .project('properties', 'connected_nodes')
            .by(__.valueMap())
            .by(__.both().valueMap().fold())
            .toList()
        )

        return {
            'statusCode': 200,
            'body': json.dumps(properties)
        }

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'An error occurred while processing your request.'})
        }
