import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal
from gremlin_python.process.graph_traversal import __


def handler(event, context):
    try:
        keyword = event.get('keyword')
        print(f"Keyword received: {keyword}")

        gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
        ssl_context = ssl.create_default_context(cafile=certifi.where())
        gremlin_client = DriverRemoteConnection(
            gremlin_url, "g", ssl_context=ssl_context
        )
        g = traversal().withRemote(gremlin_client)

        query_result = (
            g.V()
            .has("keyword", "name", keyword)
            .bothE()
            .outV()
            .hasLabel("marketing_campaign")
            .valueMap()
            .dedup()
            .toList()
        )
        print(f"Query result: {query_result}")

        result = []
        for person in query_result:
            formatted_person = {k: v[0] if v else None for k, v in person.items()}  # so that each field should have a single str value instead of list
            result.append(formatted_person)

        print(f"Formatted result: {result}")  # output: <class 'list'>
        print(type(result))

        return result

    except Exception as e:
        print(f"An error occurred: {str(e)}")  # Error logging
        return {'error': 'An error occurred while processing your request.'}
