/** @jsx h */

function h(node, props, ...args) {
  return { node, props, children: args.length ? [].concat(...args) : null };
}

function render(vnode) {
    // Strings are converted into text nodes
    if (typeof vnode === "string") return document.createTextNode(vnode);

    // Create a DOM element with the node of our VDOM element
    const $el = document.createElement(vnode.node);

    const attr = vnode.props || {};
    for (const [key, value] of Object.entries(attr)) {
      $el.setAttribute(key, value);
    }

    // Build (render) and then append child nodes
    vnode.children.map(render).forEach(c => $el.appendChild(c));

    return $el;
}

// Example
const items = ["Hello", "World"];

const vdom = (
  <div id="foo" class="bar">
    <div class="search">
      <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Go to Google</a>
    </div>
    <p id="text">Testing...</p>
    <ul>
      {items.map(item => <li>{item}</li>)}
    </ul>
  </div>
);
const dom = render(vdom);
document.body.appendChild(dom);

const json = JSON.stringify(vdom, null, ' ');
const json_dom = render(<pre>{json}</pre>);
document.body.appendChild(json_dom);
