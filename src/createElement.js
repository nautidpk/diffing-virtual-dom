
//create virtual element
export default (tagName,opts={})=>{
	let vElem=Object.create(null);
	Object.assign(vElem,{
		tagName:tagName,
		attrs:opts.attrs||Object.create({}),
		children:opts.children||[]
	});
	return vElem;
};