exports.generateComponent = function(prompt) {
  return `// Public fallback model
// This just creates a simple button based on the prompt: "${prompt}"
export default function Button() {
  return <button style={{padding: '8px 16px', borderRadius: '6px'}}>Public Button</button>;
}`;
};
