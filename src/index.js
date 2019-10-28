import CreateElement from './createElement.js';

import Render from './render.js';

import DiffVApp from './diffing.js';

let mount = ($elem,$target)=>{
	$target.replaceWith($elem);
	return $elem;
}

function returnRandomList(){
	return [
		CreateElement('div',{
			children:[
				CreateElement('span',{
					children:[
						`${Math.ceil(Math.random()*10)}`,
						'-----text 1---',
						'---------',
						CreateElement('input')
					]
				})
			]
		}),
		CreateElement('div',{
			children:[
				CreateElement('span',{
					children:[
						`${Math.ceil(Math.random()*10)}`,
						'-----text 2---',
						'---------'
					]
				})
			]
		}),
		CreateElement('div',{
			children:[
				CreateElement('span',{
					children:[
						`${Math.ceil(Math.random()*10)}`,
						'-----text 3---',
						'---------'
					]
				})
			]
		}),
		CreateElement('div',{
			children:[
				CreateElement('span',{
					children:[
						`${Math.ceil(Math.random()*10)}`,
						'-----text 1---',
						'---------'
					]
				})
			]
		})
	];
}



let createVapp=(count)=>{
	let larr= returnRandomList();

	let vElem=CreateElement('div',
	{
		children:[
			'text node',
			'count-------'+count+'-----',
			...larr
		]
	});
	return vElem;
};

let count =0; 
let vOldApp =createVapp(count);
let $element=Render(vOldApp);


let $rootElem = document.getElementById('app');

$rootElem=mount($element,$rootElem);

setInterval(()=>{
	count++;
	let vNewApp=createVapp(count);
	let patch = DiffVApp(vOldApp,vNewApp); 
	// simply patch is a function which accept current rootelem and then apply minimum required changes 
	// and return modified rootelem
	$rootElem = patch($rootElem);
	vOldApp=vNewApp;
},3000);

// let patch = function($node){
// 	//apply changes in $node
// 	return $node;
// }