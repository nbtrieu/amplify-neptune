import React from 'react';
import { ForceGraph2D } from 'react-force-graph';

const ResultsGraph = ({ nodes, links }) => {
  // Function to determine color based on the node group
  const getNodeColor = node => {
    switch (node.label) {
      case 'person':
        return 'blue'; // Color for person
      case 'organization':
        return 'red'; // Color for organization
      case 'keyword':
        return 'green'; // Color for keyword
      default:
        return 'gray'; // Default color
    }
  };

  return (
    <ForceGraph2D
      graphData={{ nodes, links }}
      nodeLabel="id"
      nodeAutoColorBy={getNodeColor}
      linkDirectionalParticles="value"
      linkDirectionalParticleSpeed={d => d.value * 0.001}
      nodeCanvasObject={(node, ctx, globalScale) => {
        const label = node.name || node.uid; // Use name if available, otherwise uid
        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = getNodeColor(node);
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.fillText(label, node.x, node.y + 4);
      }}
    />
  );
};

export default ResultsGraph;
