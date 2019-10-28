import Render from './render.js';

// dif attributes and return patch
let diffAttr=(vOldAttrs,vNewAttrs)=>{
	let patches=[];
	for(const [k,v] of Object.entries(vNewAttrs)){
		patches.push($node=>{
			$node.setAttribute(k,v);
			return $node;
		});
	}
	for(const [k,v] of Object.entries(vOldAttrs)){
		if(k in vOldAttrs){}
		else{
			patches.push($node=>{
				$node.removeAttribute(k);
				return $node;
			});
		}
	}
	return $node=>{
		for(let patch of patches){
			patch($node);
		}
		return $node;
	};
};

//diff children and return patch
let diffChildren = (vOldChilds,vNewChilds)=>{
	let childPatches=[];
	vOldChilds.forEach((child,i)=>{
		childPatches.push(diffVApp(child,vNewChilds[i]));
	});
	let additionalPatches=[];

	if(vNewChilds.length>vOldChilds.length){
		for(let i=vOldChilds.length;i<vNewChilds.length;i++){
			additionalPatches.push($parent=>{
				$parent.appendChild(Render(vNewChilds[i]));
				return $parent;
			});
		}
	}

	return $parent=>{
		$parent.childNodes.forEach(($child,i)=>{
			childPatches[i]($child);
		});

		for(const patch of additionalPatches){
			patch($parent);
		}
		
		return $parent;
	}
};

// apply diffing algo in two virtual dom i.e. old virtual dom and new virtual dom
let  diffVApp=(vOldApp,vNewApp)=>{
	// if new virtual object is deleted then delete
	if(!vNewApp)
		return $node=>{
			$node.remove();
			return undefined;
		}
	// if both or one of then is string	
	if(typeof vOldApp == 'string' || typeof vNewApp == 'string'){
		// if both differnet then replace oldvirtual element with new virtual element
		if(vOldApp!=vNewApp){
			return $node=> {
				let $newNode = Render(vNewApp);
				$node.replaceWith($newNode);
				return $newNode;
			}
		}
		else{
			// else return same node
			return $node=>$node;
		}
	}
	// if tag are diffeent then replace old virtual element with new virtual element
	if(vOldApp.tagName != vNewApp.tagName){
		return $node => {
			let $newNode = createVapp(vNewApp);
			$node.replaceWith($newNode);
			return $newNode;
		}
	}
	
	let patchAttrs= diffAttr(vOldApp.attrs,vNewApp.attrs); // get patch for attributes
	let patchChilds = diffChildren(vOldApp.children,vNewApp.children); // get patch for children

	return $node=>{
		patchAttrs($node);
		patchChilds($node);
		return $node;
	}
};

export default diffVApp;