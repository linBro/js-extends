var extends =function(s,p){
	if(p&&s){for(var i in p){s[i] = p[i];}}
	function t(){ this.constructor = s}	
	s.prototype = p===null? Object.create():( t.prototype = p.prototype,new t());
}


///初始原型对象{constructor:function Object,__proto__:Object.prototype}


//如果s实例化 就会拿到s.prototype的constructor属性  new s.prototype.constructor();
//s本身会有初始原型对象，如果继承的话.相当于改变初始原型对象的原型属性,改变为父类的原型对象>>>>s.prototype.prototype = p.prototype  
//s.prototype = {__proto__:p.prototype,
//				 constructor:function s(){} }
//实例化之后 var ss = new s(); ss.__proto__.__proto__ ==p.prototype; ss.__proto__==s.prototype;
//所以可继承属性 需要在 原型对象上面赋值 p.prototype.zidingyi = ?  s就能继承到p的zidingyi属性
//子父类呈现的结构就是原型链的结构:s.prototype.prototype==p.prototype
//								p.prototype.prototype==g.prototype					
//								g.prototype.prototype==Object.prototype
//
// s获取属性值，如果本身拿不到。就会往原型对象上面找，按这个层级，一层层往上取。直到 Object
//
