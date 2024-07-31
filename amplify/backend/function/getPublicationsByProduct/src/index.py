import json
import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal
from gremlin_python.process.graph_traversal import __

def handler(event, context):
    try:
        product_name = event.get('product_name')
        print(f"Product name received: {product_name}")

        gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
        ssl_context = ssl.create_default_context(cafile=certifi.where())
        gremlin_client = DriverRemoteConnection(
            gremlin_url, "g", ssl_context=ssl_context
        )
        g = traversal().withRemote(gremlin_client)

        query_result = (
            g.V()
            .has("publication_product", "name", product_name)
            .bothE()
            .outV()
            .hasLabel("publication")
            .valueMap()
            .dedup()
            .toList()
        )
        print(f"Query result: {query_result}")

        result = []
        for publication in query_result:
            formatted_publication = {k: v[0] if v else None for k, v in publication.items()}  # so that each field should have a single str value instead of list
            result.append(formatted_publication)

        print(f"Formatted result: {result}")  # output: <class 'list'>
        print(type(result))

        return result

    except Exception as e:
        print(f"An error occurred: {str(e)}")  # Error logging
        return {'error': 'An error occurred while processing your request.'}
