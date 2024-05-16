import ssl
import certifi
from gremlin_python.driver.driver_remote_connection import DriverRemoteConnection
from gremlin_python.process.anonymous_traversal import traversal
from gremlin_python.process.graph_traversal import __

def handler(event, context):
    try:
        name = event.get('name')
        if not name:
            return {'error': 'Name is required.'}
        
        print(f"Name received: {name}")

        gremlin_url = "wss://db-bio-annotations.cluster-cu9wyuyqqen8.ap-southeast-1.neptune.amazonaws.com:8182/gremlin"
        ssl_context = ssl.create_default_context(cafile=certifi.where())
        gremlin_client = DriverRemoteConnection(
            gremlin_url, "g", ssl_context=ssl_context
        )
        g = traversal().withRemote(gremlin_client)
        
        # Combine results from all queries
        query_results = []

        first_name_query_result = (
            g.V()
            .has("person", "first_name", name)
            .valueMap()
            .dedup()
            .toList()
        )

        last_name_query_result = (
            g.V()
            .has("person", "last_name", name)
            .valueMap()
            .dedup()
            .toList()
        )

        full_name_query_result = (
            g.V()
            .has("person", "full_name", name)
            .valueMap()
            .dedup()
            .toList()
        )

        # Add non-empty results to query_results
        if first_name_query_result:
            query_results.extend(first_name_query_result)
        if last_name_query_result:
            query_results.extend(last_name_query_result)
        if full_name_query_result:
            query_results.extend(full_name_query_result)
        
        print(f"Query results: {query_results}")

        # Deduplicate results based on 'uid'
        seen_uids = set()
        result = []
        for person in query_results:
            formatted_person = {k: v[0] if v else None for k, v in person.items()}  # so that each field should have a single str value instead of list
            uid = formatted_person.get('uid')
            if uid not in seen_uids:
                seen_uids.add(uid)
                result.append(formatted_person)

        print(f"Formatted result: {result}")

        return result

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return {'error': 'An error occurred while processing your request.'}
