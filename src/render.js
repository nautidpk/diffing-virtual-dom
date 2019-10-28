const render= (vNode)=>{
	if(typeof vNode == 'string')
		return document.createTextNode(vNode);

	let $el = document.createElement(vNode.tagName);

	if($el.nodeType==Node.TEXT_NODE)
		return $el;

	for(const [k,v] of Object.entries(vNode.attrs)){
		$el.setAttribute(k,v);
	}

	for(let child of vNode.children){
		$el.appendChild(render(child));
	}
	return $el;
};

export default render;