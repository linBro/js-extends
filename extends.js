var extends =function(s,p){
	if(p&&s){for(var i in p){s[i] = p[i];}}
	function t(){ this.constructor = s}	
	s.prototype = p===null? Object.create():( t.prototype = p.prototype,new t());
}

