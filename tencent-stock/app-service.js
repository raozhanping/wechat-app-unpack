	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
		var __wxAppConsole__ = console;definePlugin("plugin://wxa75efa648b60994b", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20190514_syb_scopedata*/global.__wcc_version__='v0.5vv_20190514_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wxa75efa648b60994b=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wxa75efa648b60994b:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b || [];
function gz$gwx_wxa75efa648b60994b_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autoplay']])
Z([3,'__onTvpEnded'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[7],[3,'tvpIsAd']]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[7],[3,'enableDanmu']])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[7],[3,'poster']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_1
}
function gz$gwx_wxa75efa648b60994b_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2)return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'autoPauseIfNavigate']])
Z([[7],[3,'autoPauseIfOpenNative']])
Z([[7],[3,'autoplay']])
Z([3,'__onTvpEnded'])
Z([3,'__onTvpError'])
Z([3,'__onTvpFullScreenChange'])
Z([3,'__onTvpPause'])
Z([3,'__onTvpPlay'])
Z([3,'__onTvpProgress'])
Z([3,'__onTvpTimeupdate'])
Z([3,'__onTvpWaiting'])
Z([3,'player_video'])
Z([[2,'!'],[[2,'==='],[[7],[3,'controls']],[1,false]]])
Z([[7],[3,'danmuBtn']])
Z([[7],[3,'danmuList']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'direction']],[[2,'-'],[1,1]]],[1,90],[[7],[3,'direction']]])
Z([[7],[3,'enableDanmu']])
Z([[7],[3,'enablePlayGesture']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,false],[[7],[3,'enableProgressGesture']]])
Z([[2,'||'],[[7],[3,'isHiddenVideo']],[[2,'=='],[[7],[3,'tvpState']],[1,'error']]])
Z([[7],[3,'playerid']])
Z([[2,'?:'],[[7],[3,'tvpIsAd']],[1,0],[[7],[3,'initialTime']]])
Z([[7],[3,'loop']])
Z([[7],[3,'muted']])
Z([[7],[3,'objectFit']])
Z([[7],[3,'playBtnPosition']])
Z([[2,'?:'],[[7],[3,'usePoster']],[[2,'||'],[[7],[3,'poster']],[[2,'?:'],[[7],[3,'formattedVid']],[[2,'+'],[[2,'+'],[1,'http://shp.qpic.cn/qqvideo/0/'],[[7],[3,'formattedVid']]],[1,'/0']],[1,'']]],[1,'']])
Z([[7],[3,'showCenterPlayBtn']])
Z([[7],[3,'showFullscreenBtn']])
Z([[7],[3,'showMuteBtn']])
Z([[7],[3,'showPlayBtn']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'showProgress']]])
Z([[7],[3,'tvpUrl']])
Z([[7],[3,'title']])
Z([[2,'||'],[[7],[3,'pageGesture']],[[7],[3,'vslideGesture']]])
Z([[7],[3,'vslideGestureInFullscreen']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isQB']]],[[7],[3,'tvpIsAd']]],[[2,'>'],[[7],[3,'progressSkipTime']],[[2,'-'],[1,1]]]])
Z([3,'mod_skipad'])
Z([[2,'!'],[[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]]])
Z(z[38])
Z([[2,'<='],[[7],[3,'progressSkipTime']],[[2,'+'],[[7],[3,'progressTime']],[[7],[3,'progressBaseTime']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'tvpIsAd']]],[[7],[3,'fullscreen']]],[[2,'!'],[[7],[3,'isHideFullscreenBtn']]]])
Z([[2,'!'],[[2,'!'],[[7],[3,'formats_selected']]]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[2,'||'],[[7],[3,'showHDSelector']],[[7],[3,'showBrightSelector']]]])
Z([[2,'&&'],[[2,'&&'],[[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showHDSelector']]],[[7],[3,'formats']]],[[6],[[7],[3,'formats']],[3,'length']]])
Z([[2,'&&'],[[7],[3,'fullscreen']],[[7],[3,'showBrightSelector']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2);return __WXML_GLOBAL__.ops_cached.$gwx_wxa75efa648b60994b_2
}
__WXML_GLOBAL__.ops_set.$gwx_wxa75efa648b60994b=z;
__WXML_GLOBAL__.ops_init.$gwx_wxa75efa648b60994b=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./component/live/live.wxml','./component/video/video.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_1()
var oB=_mz(z,'video',['autoplay',0,'bindended',1,'binderror',1,'bindfullscreenchange',2,'bindpause',3,'bindplay',4,'bindtimeupdate',5,'bindwaiting',6,'class',7,'controls',8,'danmuBtn',9,'danmuList',10,'enableDanmu',11,'hidden',12,'id',13,'poster',14,'showCenterPlayBtn',15,'src',16,'title',17],[],e,s,gg)
var xC=_n('slot')
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wxa75efa648b60994b_2()
var fE=_mz(z,'video',['autoPauseIfNavigate',0,'autoPauseIfOpenNative',1,'autoplay',1,'bindended',2,'binderror',3,'bindfullscreenchange',4,'bindpause',5,'bindplay',6,'bindprogress',7,'bindtimeupdate',8,'bindwaiting',9,'class',10,'controls',11,'danmuBtn',12,'danmuList',13,'direction',14,'enableDanmu',15,'enablePlayGesture',16,'enableProgressGesture',17,'hidden',18,'id',19,'initialTime',20,'loop',21,'muted',22,'objectFit',23,'playBtnPosition',24,'poster',25,'showCenterPlayBtn',26,'showFullscreenBtn',27,'showMuteBtn',28,'showPlayBtn',29,'showProgress',30,'src',31,'title',32,'vslideGesture',33,'vslideGestureInFullscreen',34],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,36,e,s,gg)){cF.wxVkey=1
var lK=_n('view')
_rz(z,lK,'class',37,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,38,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,39,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(lK,eN)
if(_oz(z,40,e,s,gg)){eN.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
_(cF,lK)
}
var hG=_v()
_(fE,hG)
if(_oz(z,41,e,s,gg)){hG.wxVkey=1
var bO=_v()
_(hG,bO)
if(_oz(z,42,e,s,gg)){bO.wxVkey=1
}
bO.wxXCkey=1
}
var oH=_v()
_(fE,oH)
if(_oz(z,43,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(fE,cI)
if(_oz(z,44,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(fE,oJ)
if(_oz(z,45,e,s,gg)){oJ.wxVkey=1
}
var oP=_n('slot')
_(fE,oP)
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
_(r,fE)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = [$gwx_wxa75efa648b60994b, './component/live/live.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/live/live.wxml'] = $gwx_wxa75efa648b60994b( './component/live/live.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = [$gwx_wxa75efa648b60994b, './component/video/video.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/component/video/video.wxml'] = $gwx_wxa75efa648b60994b( './component/video/video.wxml' );
		global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.json'] = {
  "publicComponents": {
    "video": "component/video/video",
    "live": "component/live/live"
  },
  "main": "component/txv-context.js"
};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = [$gwx_wxa75efa648b60994b, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wxa75efa648b60994b/plugin.wxml'] = $gwx_wxa75efa648b60994b( './plugin.wxml' );
	
				define("component/live/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../src/util/base64text");module.exports={tvpUrl:e,tvpIsAd:!1,tvpState:"",tvpVideoError:"",title:"",liveEndInfo:"",liveStatus:"",liveStartTime:"",getDataError:"",errCode:"",isBefore:!1,isAfter:!1,isHiddenContainer:!1,isHiddenVideo:!1,isHiddenWithVoice:!1}; 
 			}); 
		define("component/live/properties.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={pid:{type:String,value:"",observer:"onVideoChange"},sid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:""},autoplay:{type:Boolean,value:!1},width:{type:String,value:""},height:{type:String,value:""},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},poster:{type:String,value:""},showCenterPlayBtn:{type:Boolean,value:!1},beforeText:{type:String,value:"直播未开始"},afterText:{type:String,value:"直播已结束"},isStopPoll:{type:Boolean,value:!1},extraParam:{type:Object,value:{}},title:{type:String,value:""}}; 
 			}); 
		define("component/txv-context.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../src/module/log"),t=require("../src/module/reporter/index"),r=require("../src/lib/request"),n={},o="",s=Object.create({report:{on:function(e){"report"==e&&(t.off("report"),t.on.apply(t,arguments))},release:t.release,saveState:t.saveState,restoreState:t.restoreState,checkState:t.checkState},setRequest:function(e){r.busRequest=e}});module.exports=Object.assign(s,{getTxvContext:function(e){if(!n[e])throw new Error("找不到playerid为"+e+"的txv-video组件");return n[e]},existTxvContext:function(e){return!!n[e]},txvAttached:function(e,t){n[e]=t},txvDetached:function(e){delete n[e]},getAllContext:function(){return n},getLastPlayId:function(){return o},setLastPlayId:function(e){o=e},setTvpPlayState:function(e,t){this.getTxvContext(e).isPlaying=t},openLog:function(){e.isOpenLog=!0},closeLog:function(){e.isOpenLog=!1}}); 
 			}); 
		define("component/video/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={progressBaseTime:0,progressSkipTime:0,progressTime:0,progressDuration:0,tvpUrl:"",tvpIsAd:!1,tvpState:"",tvpVideoError:"",reportUrl:"",isHiddenContainer:!1,isHiddenVideo:!1,fullscreen:!1,showHDSelector:!1,showBrightSelector:!1,showRateSelector:!1,showControlBtn:!1,bright:function(){for(var r=[],e=1;e<=8;e++)r.push({val:.125*e});return r}(),currentBright:0,isPlaying:!1,isIpx:!1}; 
 			}); 
		define("component/video/properties.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={vid:{type:String,value:"",observer:"onVideoChange"},playerid:{type:String,value:"",observer:"onPlayeridChange"},autoplay:{type:Boolean,value:!1},objectFit:{type:String,value:"contain"},poster:{type:String,value:""},showProgress:{type:Boolean,value:!0},controls:{type:Boolean,value:!0},initialTime:{type:Number,value:0},showFullscreenBtn:{type:Boolean,value:!0},showPlayBtn:{type:Boolean,value:!0},showCenterPlayBtn:{type:Boolean,value:!0},enableProgressGesture:{type:Boolean,value:!0},vslideGesture:{type:Boolean,value:!1},pageGesture:{type:Boolean,value:!1},muted:{type:Boolean,value:!1},loop:{type:Boolean,value:!1},direction:{type:Number,value:-1},width:{type:String,value:""},height:{type:String,value:""},usePoster:{type:Boolean,value:!0},isHiddenStop:{type:Boolean,value:!1},isNeedMutex:{type:Boolean,value:!0},enableDanmu:{type:Boolean,value:!1},danmuBtn:{type:Boolean,value:!1},danmuList:{type:Array,value:[]},videoInfo:{type:Object,value:{}},defn:{type:String,value:""},extraParam:{type:Object,value:{}},title:{type:String,value:""},vslideGestureInFullscreen:{type:Boolean,value:!0},autoPauseIfNavigate:{type:Boolean,value:!0},autoPauseIfOpenNative:{type:Boolean,value:!0},enablePlayGesture:{type:Boolean,value:!1},showMuteBtn:{type:Boolean,value:!1},playBtnPosition:{type:String,value:"bottom"},isHideQB:{type:Boolean,value:!0},isHideFullscreenBtn:{type:Boolean,value:!1}}; 
 			}); 
		define("conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={version:"2.0.3"}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./src/video");module.exports=e; 
 			}); 
		define("lib-inject.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="./src/lib/es6-promise",r="./src/lib/request";try{var s=require("../tvp.js");e=s.Promise||e,r=s.request||r}catch(e){}module.exports={Promise:require(e),request:require(r).get,post:require(r).post}; 
 			}); 
		define("private-setting.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t={};module.exports={set:function(e,r){return t[e]=r,this},get:function(e){return t[e]}}; 
 			}); 
		define("src/classes/Content.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=require("../lib/message"),r=1;module.exports=function(){function o(e){var i=this;t(this,o),this.mockUpdate=0,this._urlIndex=0,Object.defineProperties(this,{_iretcode:{value:e.iretcode},_url:{value:e.url instanceof Array?e.url:[e.url]},_id:{value:r++},_duration:{value:e.duration},_filesize:{value:e.filesize},_charged:{value:e.charged},_preview:{value:e.preview},isad:{value:e.isad}}),(new n).assign(this);var u=null,a=null;this.on("play",function(){u=setTimeout(function(){i.emit("timeout",1e4)},1e4),a=setTimeout(function(){i.emit("timeout",2e4)},2e4)},!0),this.on("start",function(){clearTimeout(u),clearTimeout(a)},!0)}return i(o,[{key:"url",get:function(){return this._url[this._urlIndex]}},{key:"id",get:function(){return this._id}},{key:"duration",get:function(){return this._duration}},{key:"filesize",get:function(){return this._filesize}},{key:"preview",get:function(){return this._preview}},{key:"charged",get:function(){return this._charged}},{key:"iretcode",get:function(){return this._iretcode}}]),i(o,[{key:"onContentEnd",value:function(){this.emit("end")}},{key:"onContentPlay",value:function(){this.emittedPlay=!0,this.emit("play")}},{key:"onContentPause",value:function(){this.emit("pause")}},{key:"onContentTimeupdate",value:function(t){this.emittedPlay&&(t&&t.target&&(t=t.detail.currentTime),!this.emittedStart&&((void 0===t?"undefined":e(t))==e(void 0)?this.mockUpdate++>5:t>0)&&(this.emit("start",t||this.mockUpdate),this.emittedStart=!0),this.emit.apply(this,["timeupdate",t]))}},{key:"onContentError",value:function(){if(this._url.length>this._urlIndex+1)return this._urlIndex++,void this.emit("change",this.url);this.emit.apply(this,["error"].concat([].slice.call(arguments,0)))}},{key:"onContentSkip",value:function(){this.isad&&this.emit("skip")}},{key:"onContentWaiting",value:function(){this.emit("waiting")}}]),o}(); 
 			}); 
		define("src/classes/Controller.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){var e={};return(t instanceof Array?t:[].slice.call(arguments,0)).forEach(function(t){var n=t.initialize;Object.defineProperty(e,t.name,{get:function(){return n},set:function(e){var r=n;n=e,t.onChange&&t.onChange(e,r)}})}),e}var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=require("../lib/message"),i=require("../../lib-inject").Promise;module.exports=function(){function o(){for(var n=this,a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];t(this,o),this.started=i.defer(),(new r).assign(this);var u=this.model=new e([{name:"state",onChange:function(t,e){n.emit("statechange",t,e)},initialize:"loading"},{name:"currentContent",initialize:null}]);Object.defineProperties(this,{currentContent:{get:function(){return u.currentContent}},state:{get:function(){return u.state}}}),this.flow=this.createFlow.apply(this,s),this.flow.catch(function(t){n.emit("error",t)}),["End","Play","Pause","Timeupdate","Error","Skip","Waiting"].forEach(function(t){n["onContent"+t]=function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];n.emit.apply(n,["content"+t.toLowerCase()].concat(r))},n["on"+t]=function(){console.warn("不建议再使用video.on"+t+"，请使用onContent"+t),this["onContent"+t].apply(this,arguments)}})}return n(o,[{key:"createFlow",value:function(){}},{key:"start",value:function(){return console.log("process start"),this.started.resolve(),this}},{key:"stop",value:function(){return this.started.reject(),this.flow&&this.flow.stop&&this.flow.stop(),this.off(),this}}]),o}(); 
 			}); 
		define("src/classes/State.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(){}var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=require("../lib/message"),s=require("../../lib-inject").Promise;module.exports=function(){function a(n,s){e(this,a),this.destroyed=!1;var i=Object.keys(n);i.forEach(function(e){!(n[e].to instanceof Array)&&(n[e].to=[]),!("function"==typeof n[e].beforeLeave)&&(n[e].beforeLeave=t),!("function"==typeof n[e].beforeEnter)&&(n[e].beforeEnter=t),!("function"==typeof n[e].afterLeave)&&(n[e].afterLeave=t),!("function"==typeof n[e].afterEnter)&&(n[e].afterEnter=t)}),this.message=new r,this.states=n,this._state=i[0],this._laststate="",Object.defineProperties(this,{state:{get:function(){return this._state}},lastState:{get:function(){return this._laststate}}})}return n(a,null,[{key:"create",value:function(e,t){return new a(e,t)}}]),n(a,[{key:"setState",value:function(e,t){var n=(t=t||{}).force||!1,r=t.silent||!1,s=this.states;if(n||~s[this._state].to.indexOf(e)){var a=this._state;if(r)this._laststate=this._state,this._state=e;else{var i=!1;if(n||(i=!1===s[a].beforeLeave(e),i=!1===s[e].beforeEnter(a)||!0===i),i)return;this._laststate=this._state,this._state=e,this.message.emit("change",e,a),s[a].afterLeave(e),s[e].afterEnter(a)}return 0==s[e].to.length&&(this.message.emit("end",e),this.message.off()),this}}},{key:"getStatePromise",value:function(e){var t=this;if("function"!=typeof e){var n=e;e=function(e){return e==n}}return new s(function(n,r){var s=t.message.on("change",function(t){e(t)&&(s(),n())});t.message.on("end",function(e){s(),r(new Error("state ended:"+e))},!0)})}},{key:"onChange",value:function(e){return this.message.on("change",e),this}}]),a}(); 
 			}); 
		define("src/controller-live/flow-getinfo/err-code.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={4444:"网络错误",3333:"播放出错"};module.exports={PLAY_ERROR:1,errCode:e,genCode:function(e,r){return"63"+(1==r?104:200)+"."+e},genError:function(r){var n=new Error(r.msg||e[r.em]),o=1==r.scene;return n.code=o?"P.0":"G."+r.em,n.em=r.em,n.fullecode=this.genCode(r.em,o?0:1),n}}; 
 			}); 
		define("src/controller-live/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../util/platform-config").APP_PLATFORM,r=require("../../../lib-inject").request,t=require("../../lib/algorithm/qvsec"),i=require("../../module/network"),n=require("../../lib/algorithm/fillTimeStamp"),o=require("../../../lib-inject").Promise,u=require("../../module/log")("live-info"),c=require("./err-code"),f=require("../../module/guid");module.exports=function(l,d,m,q){function a(r){return"https://info.zb.video.qq.com/?host=qq.com&cmd=2&qq=0&guid="+f+"&appVer=7&stream=2&ip=&system=1&sdtfrom="+e[m]+"&livepid="+d+"&cnlid="+l+"&_rnd="+v+"&"+h+"&newnettype="+r.networkCode+(q?"&defn="+q+"&fntick="+r.fntick:"")}function s(){return p=a({fntick:Date.now(),networkCode:w}),b=Date.now(),r(p,{needlogin:!0})}var v=n(),g=t["v4138"==m?"$xxzb":"$xxzbf"](e[m],l,1,1,v),h="";g&&(h="encver="+("v4138"==m?"201":"301")+"&_qv_rmtv2="+g);var p,w=0,b=void 0;return new o(function(e){i(function(r){w=r,e()})}).then(s).catch(function(e){return u("first request error",e),s()}).catch(function(){throw c.genError({em:4444})}).then(function(e){return u("getinfo result:",e),e.loadTime=Date.now()-b,e})}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){return e("https://access.video.qq.com/tinyapp/live_detail?vappid=49109510&vsecret=c1202d7f3ba41f86cdd2d3d1082605b4ed764c21e29520f3&pid="+t)}; 
 			}); 
		define("src/controller-live/flow-getinfo/live-poll.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){return e("https://zbaccess.video.qq.com/fcgi/live_poll?vappid=31678259&vsecret=1e029a67beb2d7e7e7bb8321fb161a46fe76c7837beb2cee",{data:t})}; 
 			}); 
		define("src/controller-live/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(o)},i=require("./flow-getinfo/index"),a=require("../classes/Controller"),u=require("../classes/Content"),c=require("./reporter"),f=require("../lib/message"),l=require("../lib/es6-promise"),s=require("../module/gen-guid"),p=require("./flow-getinfo/err-code"),d=require("../util/platform-config").APP_PLATFORM,m=function(m){function y(){return e(this,y),t(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return n(y,a),o(y,[{key:"createFlow",value:function(e,t){var n=this,o=e.sid,r=e.from,a=e.pid,m=(e.defn,t.getReportParam);var y,v=null,h=!1,w=s(),g=new c;g.setInitData({seq:0,firstreport:1,playno:w,platform:d[r],sid:o,pid:a,getReportParam:m});var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Date.now();return i(o,a,r,e.defn||"").then(function(e){v&&v.off(),v=new u({url:e.data.playurl,iretcode:e.data.iretcode}),n.emit("contentchange",{currentContent:v,getinforaw:e}),t.isSwitchDefn&&y&&y.emit("videoend",{switch:o}),y&&y.off(),y=new f;var r={url:v.url,iretcode:v.iretcode};t.isSwitchDefn&&(r.switch=o),g.initPlay(y,r,e.data),g.report({firstload:Date.now()-c,geturltime:e.loadTime,cmd:205})}).then(function(){return new l(function(e,t){!h&&v.on("start",function(){y.emit("videoplaying",v),h=!0},!0),v.on("start",function(e){y.emit("videostart",e)}),v.on("play",function(){y.emit("videoplay",v)}),v.on("pause",function(){y.emit("videopause",v)}),v.on("timeupdate",function(e){y.emit("videotimeupdate",e)}),v.on("error",function(e){var n=p.genError({msg:e?e.detail&&e.detail.errMsg||e.message:"",em:3333,scene:p.PLAY_ERROR});t(n)},!0),v.on("end",function(){e(),y.emit("videoend")},!0),v.on("timeout",function(e){y.emit("videotimeout",e)}),v.on("waiting",function(){y.emit("videowaiting")})})}).catch(function(e){g.error(e),n.emit("error",e)})},O=b();return["End","Play","Pause","Timeupdate","Error","Skip","Waiting"].forEach(function(e){n.on("content"+e.toLowerCase(),function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];v&&v["onContent"+e].apply(v,o)})}),this.switchDefn=function(e){b({defn:e},{isSwitchDefn:!0})},O}},{key:"stop",value:function(){r(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),y}();module.exports=function(e,t){return new m(e,t)}; 
 			}); 
		define("src/controller-live/reporter-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,r){var t=e.sid||r.sid||0,i={lookback:f,guid:o,fplayerver:s,BossId:l,Pwd:a,prog:+t,livepid:+(e.pid||0),viewid:t.slice(0,-2),_dc:Math.random(),devtype:v,playertype:m},n=void 0;return g.forEach(function(o){n=r[o]||e[o],i[o]="number"==typeof n?n:n||""}),i}var r=require("../module/reporter/report-queue"),o=require("../module/guid"),t=require("../module/system-info")(),i=require("../module/network"),n=require("../module/log")("txv-live-reporter-play"),c=require("../module/account"),u=require("../../conf"),p=c.getAccountInfoSync(),s=p&&p.plugin&&p.plugin.version||u.version,d=t.system.match(/ios/i),l=7433,a=1230624807,f=0,m=0,y={"6g":6,"5g":5,"4g":4,"3g":3,"2g":2,wifi:1,"有线":100,0:0},v=0;switch(t.platform){case"devtools":v=d?3:2;break;case"android":v=2;break;case"ios":v=3;break;case"ipad":v=4}var g=["playno","hc_qq","sdtfrom","firstload","blocktime","block","prd","errcode","dsip","durl","firstreport","sUrl","sRef","seq","cmd","fullecode","live_type","geturltime","playtime","ispay","isuserpay","switch","freetype","https","cdn","vip_type","hc_pvid","login_type","open_id"];module.exports=function(o,t){t(function(t,c){!t&&c||(c={}),n("before",o);var u=e(o,c);(c.networkCode?function(e){e&&e(y[c.networkCode])}:i)(function(e){Object.assign(u,{nettype:e}),n("report obj",u),r.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(u).map(function(e){return e in u?e+"="+encodeURIComponent(u[e]):""}).filter(function(e){return e}).join("&")})},y)})}; 
 			}); 
		define("src/controller-live/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){if(!t)return{};var a=t.durl=t.url||t.durl||"",r=n.queryParse(a),o=a.match(/\/\/([^/]+?)\//),l=/^https:/.test(a),u="0.0.0.0";o&&o[1]&&(u=(o[1]||"").split(":")[0]);var m={dsip:u,sdtfrom:r.sdtfrom,cdn:s[r.cdn]||0,https:l?1:0,live_type:e(i),playtime:i.playtime,ispay:i.ispay,isuserpay:i.isuserpay,errcode:i.iretcode};return Object.assign(m,t)}function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i="";return i+=1==t.stream?"0":"1",i+=1==t.vcode?"10":"01",i+=1==t.live360?"1":"0",i+=2==t.acode?"1":"0",parseInt(i,2)}var a=function(){function t(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(i,e,a){return e&&t(i.prototype,e),a&&t(i,a),i}}(),r=require("./reporter-play"),n=require("../lib/url"),o=require("../module/log")("txv-live-reporter"),s={zijian:1,lanxun:2,wangsu:3,dilian:4,akama:5,tongxin:6},l=function(){function e(){t(this,e),this.baseParam=null,this.initParam=null,this.getReportParam=null,this.firstreport=0,this.lastStartTime=0,this.waitingCount=0,this.waitingTotalDuration=0,this.lastTimeUpdate=0,this.waitingStartTimeStamp=0}return a(e,[{key:"initBaseData",value:function(t){o("initBaseData~~~~~~~~~"),this.lastStartTime=t||0,this.waitingCount=0,this.waitingTotalDuration=0,this.waitingStartTimeStamp=0,this.lastTimeUpdate=0}},{key:"initPlay",value:function(t,e,a){var r=this;r.baseParam=i(e,a),t.on("videoplaying",function(t){o("videoplaying~~~~")}),t.on("videostart",function(t){o("START~~~~~~~~~~~",t),r.initBaseData(t)}),t.on("videoplay",function(t){o("playing~~~~~~~~~~~",r.waitingStartTimeStamp),r.waitingStartTimeStamp&&(r.waitingTotalDuration+=Date.now()-r.waitingStartTimeStamp,r.waitingStartTimeStamp=0)}),t.on("videopause",function(){}),t.on("videotimeupdate",function(t){r.lastTimeUpdate=t,t-r.lastStartTime>=60&&(o("timeupdate~~~~~~~~~",r.lastStartTime,t),r.report({cmd:263,prd:Math.floor(6e4),block:r.waitingCount,blocktime:r.waitingTotalDuration}),r.initBaseData(t))}),t.on("videotimeout",function(t){}),t.on("videoend",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o("ended~~~~~~",r.lastTimeUpdate-r.lastStartTime),r.report(Object.assign({cmd:263,prd:Math.floor(1e3*(r.lastTimeUpdate-r.lastStartTime)),block:r.waitingCount,blocktime:r.waitingTotalDuration},t)),r.initBaseData()}),t.on("videowaiting",function(){r.waitingStartTimeStamp||(r.waitingStartTimeStamp=Date.now()),o("WAITING~~~~~~~~~~~",r.waitingStartTimeStamp),++r.waitingCount})}},{key:"report",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this;t.firstreport=i.firstreport,i.firstreport&&(i.firstreport=0),r(Object.assign({},i.initParam,i.baseParam,t),i.getReportParam),i.initParam.seq++}},{key:"error",value:function(t){this.report({cmd:150,errcode:t.em,fullecode:t.fullecode})}},{key:"setfirstreport",value:function(t){this.firstreport=t}},{key:"setAsyncFn",value:function(t){this.getReportParam=t}},{key:"setInitData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setfirstreport(t.firstreport),this.setAsyncFn(t.getReportParam),delete t.firstreport,delete t.getReportParam,this.initParam=t,this.initParam.seq=t.seq||0}}]),e}();module.exports=l; 
 			}); 
		define("src/controller-video/flow-getinfo/data/ad.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){s(r,{header:{Cookie:"appuser="+l+"; Lturn="+d}}).then(function(r){v("上报成功"),v(r)},function(e){v("上报失败"),v(e),r=r+"&appuesr="+l,q.emit("report",{reportUrl:r}),v("用message抛出上报事件")})}function e(){d=c.get("Lturn"),v("Lturn:"+d),d?v("Lturn+1:"+(d+=1)):(d=Math.floor(1e3*Math.random()),v("create Lturn:"+d)),d>999&&(d=0),c.set("Lturn",d,72e5)}function t(r){var e=[];return r.item.forEach(function(r,t){e.push(r)}),e}function i(r){v("开始检查trueview贴片状态");for(var e=r.length,t=[],i=0,p=0;p<e;p++)r[p].trueviewTurn=!1,1==r[p].order_id||"FT"==r[p].type?t[p]=0:(o(r[p])&&(r[p].trueviewTurn=!0),t[p]=1,i+=1);a=1==i,v("trueviewCheckArr内容是："+t+",trueviewCount值是："+i)}function o(r){if(v("开始检查trueview开关"),r.params&&void 0!=r.params&&""!=r.params){var e=r.params;if(-1!=e.indexOf("richdata=")){var t=e.substr(e.indexOf("richdata=")+9);-1!=t.indexOf("&")&&(t=t.substr(0,t.indexOf("&"))),t=decodeURIComponent(t.replace(/\+/g," ")),v("转换出来的richdata参数是："+t);try{var i=JSON.parse(t);if(v("转换成json后的对象是："+i),i.plugins&&void 0!=i.plugins&&i.plugins.trueview&&void 0!=i.plugins.trueview&&"Y"==i.plugins.trueview)return v("trueview开关是打开的Y！"),!0}catch(r){v("richdata解析出错！")}}}return!1}function p(r){y=0;for(var e=0;e<r.length;e++)1!=r[e].order_id&&(y+=r[e].duration/1e3);v("广告总时长为："+y)}var a,n,d,l,u,s=require("../../../../lib-inject").request,h=require("../../../lib/message"),c=require("../../../module/cache"),v=require("../../../module/log")("ad"),m=require("./adReport"),U=require("./md5"),f=require("../../../../private-setting"),g="",D=0,w="",L=0,T=-1,O=1,S=-1,y=0,K="",R="",q=new h;(module.exports=function(o){v(o),o.vid&&(g=o.vid),o.live&&(D=o.live),o.chid&&(L=o.chid),o.coverid&&(w=o.coverid),o.pu&&(T=o.pu),o.openid&&(R=o.openid),l=String(U(R).substr(0,16)).toUpperCase(),e();var h={};return n=(new Date).getTime(),s("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+D+"&pu="+T+"&rfid="+K+"&openid="+R+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+L+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+g+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&"+(1===f.get("adstyle")?"style=1":"")+"&coverid="+w,{needlogin:!0,header:{Cookie:"appuser="+l+"; Lturn="+d}}).then(function(r){u=r,r.data.adLoc&&r.data.adLoc.tpid&&(O=r.data.adLoc.tpid),h={t:"0",url:"",vid:g,coverid:w,pf:"H5",vptag:"",pid:"",chid:L,tpid:O};var e=(new Date).getTime()-n;v("livew请求完成，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,100,0,R,h),n=(new Date).getTime();var o=t(r.data.adList);return v("最终adList:"+o),i(o),p(o),o},function(r){v("livew error，再试一次");var e=(new Date).getTime()-n;return v("livew请求失败，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,202,0,R,h),n=(new Date).getTime(),s("https://livew.l.qq.com/livemsg?ty=web&ad_type=WL&pf=H5&lt=wx&pt=0&live="+D+"&pu="+T+"&rfid="+K+"&v=TencentPlayerV3.2.19.358&plugin=1.0.0&speed=0&adaptor=2&musictxt=&chid="+L+"&openid="+R+"&st=0&resp_type=json&_t=1478361546359&rfid=&vid="+g+"&vptag=&url=&refer=&pid=&mbid=&oid=&guid=&coverid="+w,{needlogin:!0,header:{Cookie:"appuser="+l+"; Lturn="+d}}).then(function(r){u=r,r.data.adLoc&&r.data.adLoc.tpid&&(O=r.data.adLoc.tpid),h={t:"0",url:"",vid:g,coverid:w,pf:"H5",vptag:"",pid:"",chid:L,tpid:O};var e=(new Date).getTime()-n;v("livew重试请求完成，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,100,0,R,h),n=(new Date).getTime();var o=t(r.data.adList);return v("最终adList:"+o),i(o),p(o),o},function(r){var e=(new Date).getTime()-n;return v("livew error，订单获取失败，返回空数组，进行dp3上报,时间为:"+e),m.reportDp3(2,"WL",e,1,202,0,R,h),n=(new Date).getTime(),[]})}).then(function(e){return e=e.map(function(e,t){return function(){var t=[];if(e.reportUrlOther.reportitem)for(o=0;o<e.reportUrlOther.reportitem.length;o++)t[o]={url:e.reportUrlOther.reportitem[o].url,time:e.reportUrlOther.reportitem[o].reporttime,isReported:!1};var i=[];if(e.reportUrlSDK.reportitem)for(var o=0;o<e.reportUrlSDK.reportitem.length;o++)i[o]={url:e.reportUrlSDK.reportitem[o].url,time:e.reportUrlSDK.reportitem[o].reporttime,isReported:!1};return v("当前广告的trueview开关是否打开："+e.trueviewTurn),v("当前广告是否符合trueview条件："+a),a?(v("allAdDuration:"+y),S=y<=5?0:5):S=-1,v("skipable:"+S),{oid:e.order_id,url:e.image[0].url,reportUrl:{url:e.reportUrl,time:e.ReportTime,isReported:!1},reportUrlOther:t,reportUrlSDK:i,skipable:S,duration:e.duration/1e3,allDuration:y,onSkip:function(){v("当前广告被跳过了，上报智慧点10237"),m.reportWisdomPoint(10237,e.order_id,e.order_id,"");var r=(new Date).getTime()-n;v("当前广告被跳过，进行dp3上报,时间为:"+r),m.reportDp3(4,"WL",r,1,"",0,R,h),n=(new Date).getTime()},onTimeupdate:function(r){},onEnd:function(){var r=(new Date).getTime()-n;v("当前广告播放结束，进行dp3上报,时间为:"+r),m.reportDp3(5,"WL",r,1,"",0,R,h),n=(new Date).getTime(),u.data.adLoc&&u.data.adLoc.rfid&&(K=u.data.adLoc.rfid,v("rfid赋值成功："+K))},onStart:function(){v("当前广告开始播放"+e),v("当前广告的oid是："+this.oid);var t=(new Date).getTime()-n;if(v("素材加载完成，开始播放，进行dp3上报,时间为:"+t),m.reportDp3(3,"WL",t,1,"",0,R,h),n=(new Date).getTime(),this.reportUrl.url=m.updateUrlParam(this.reportUrl.url,h),this.reportUrl.time>=0&&!this.reportUrl.isReported){this.reportUrl.isReported=!0;try{r(this.reportUrl.url)}catch(r){}}for(i=0;i<this.reportUrlOther.length;i++)if(this.reportUrlOther[i].url=m.updateUrlParam(this.reportUrlOther[i].url,h),this.reportUrlOther[i].time>=0&&!this.reportUrlOther[i].isReported){this.reportUrlOther[i].isReported=!0;try{m.pingUrl(this.reportUrlOther[i].url)}catch(r){}}for(var i=0;i<this.reportUrlSDK.length;i++)if(this.reportUrlSDK[i].url=m.updateUrlParam(this.reportUrlSDK[i].url,h),this.reportUrlSDK[i].time>=0&&!this.reportUrlSDK[i].isReported){this.reportUrlSDK[i].isReported=!0;try{m.pingUrl(this.reportUrlSDK[i].url)}catch(r){}}},onError:function(){var r=(new Date).getTime()-n;v("当前广告播放出错，进行dp3上报,时间为:"+r),m.reportDp3(4,"WL",r,1,"",0,R,h),n=(new Date).getTime()},onReportEmpty:function(){v("我是空单上报，当前广告的上报地址是："+this.reportUrl.url),this.reportUrl.url=m.updateUrlParam(this.reportUrl.url,h);try{r(this.reportUrl.url)}catch(r){}for(e=0;e<this.reportUrlOther.length;e++)if(this.reportUrlOther[e].url=m.updateUrlParam(this.reportUrlOther[e].url,h),this.reportUrlOther[e].time>=0&&!this.reportUrlOther[e].isReported){this.reportUrlOther[e].isReported=!0;try{m.pingUrl(this.reportUrlOther[e].url)}catch(r){}}for(var e=0;e<this.reportUrlSDK.length;e++)if(this.reportUrlSDK[e].url=m.updateUrlParam(this.reportUrlSDK[e].url,h),this.reportUrlSDK[e].time>=0&&!this.reportUrlSDK[e].isReported){this.reportUrlSDK[e].isReported=!0;try{m.pingUrl(this.reportUrlSDK[e].url)}catch(r){}}}}}}),{adList:e}}).catch(function(r){return{}})}).reporter=m.reporter; 
 			}); 
		define("src/controller-video/flow-getinfo/data/adReport.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function r(r){var t=r.indexOf("?"),e=new Object,i=r;if(t>=0)for(var n,o=(i=i.substr(t+1)).split("&"),a=0;a<o.length;a++)(n=o[a].split("=")).length>1?e[n[0]]=n[1]:e[n[0]]="null";return e}var t=require("../../../lib/message"),e=(require("../../../module/cache"),require("../../../module/log")("ad-report")),i=new t;(module.exports={updateUrlParam:function(t,e){try{var i=r(t),n=t,o=!0;if(-1!=t.indexOf("?")){n=t.substring(0,t.indexOf("?"));var a;for(a in e)i[a]=e[a];for(a in i)o?(o=!1,n+="?"+a+"="+i[a]):n+="&"+a+"="+i[a]}}catch(r){n=""}return n},reportDp3:function(r,t,i,n,o,a,p,d){e("开始dp3上报");var s="https://dp3.qq.com/stdlog/?bid=weixin&step="+r+"&merged="+n+"&errorcode="+o+"&trycount="+a+"&openid="+p;s=this.updateUrlParam(s,d);try{this.pingUrl(s)}catch(r){e("dp3上报失败")}},reportWisdomPoint:function(r,t,i,n){e("开始智慧点上报");var o="https://t.l.qq.com?t=s&actid="+r;o+="&oid="+t+"&mid="+i+"&locid="+n;try{this.pingUrl(o)}catch(r){}},pingUrl:function(r,t,n,o){e("ping上报地址："+r);var a=(new Date).getTime();r=this.updateUrlParam(r,{reportTime:a}),i.emit("report",{reportUrl:r}),e("用message抛出上报事件")}}).reporter=i; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo-status.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={};e[10001]=e[50]=e[68]=e[71]=e[73]=e[74]=e[76]=e[77]=e[445]=e[444]="啊哦，没能找到你要的节目信息~",e[51]=e[52]=e[64]=e[61]=e[62]=e[63]=e[65]=e[66]=e[69]=e[81]=e[82]=e[84]=e[86]="啊哦，本来在这儿的视频不见了~",e[94]="经检测您当前登录的账号存在安全问题，为保障您的账号安全，已暂停了您的会员权益。",e[80]=e[83]="啊哦，版权原因，该视频暂时无法播放~",module.exports=e; 
 			}); 
		define("src/controller-video/flow-getinfo/data/getinfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,m,d,s,v){if(v&&v.vl&&v.fl)return c.resolve(v);t=m,d=d||"auto";var y=u(),h=i["v4138"==m?"$xx":"$xxf"](p[m],e,t,1,y),g="";h&&(g="encver="+("v4138"==m?2:300)+"&_qv_rmtv2="+h),l("getinfo waiting");var b=0,q="";return c.resolve().then(function(){return s.onBeforeGetinfo(e)}).then(function(e){q="object"==(void 0===e?"undefined":r(e))?e:{},(q=Object.keys(q).map(function(e,t){return-1!=["auth_from","auth_ext","defnpayver","spvideo","spaudio"].indexOf(e)?e+"="+q[e]:""}).filter(function(e){return e}).join("&"))&&(q="&"+q),console.log("getinfo beforeGetinfoParam",q)}).then(function(){return new c(function(e,t){f(function(t){b=t,e()})})}).then(function(){l("request start");var t="https://h5vv.video.qq.com/getinfo?"+g+"&defn="+d+"&platform="+p[m]+"&otype=json&sdtfrom="+m+"&_rnd="+y+"&appVer=7&"+(a?"dtype=3&":"")+"vid="+e+"&newnettype="+b+q;return o(t,{needlogin:!0,needLoginCase:!0})}).catch(function(t){return o("https://bkvv.video.qq.com/getinfo?"+g+"&defn="+d+"&platform="+p[m]+"&otype=json&sdtfrom="+m+"&_rnd="+y+"&appVer=7&"+(a?"dtype=3&":"")+"vid="+e+"&newnettype="+b+q,{needlogin:!0,needLoginCase:!0})}).catch(function(){var e=new Error(n[444]);throw e.em=444,e.code="G.444",e}).then(function(e){return e=e.data,l("getinfo result:",e),e})}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=require("./getinfo-status"),o=require("../../../../lib-inject").request,i=require("../../../lib/algorithm/qvsec"),u=require("../../../lib/algorithm/fillTimeStamp"),f=require("../../../module/network"),l=require("../../../module/log")("getInfo"),c=require("../../../../lib-inject").Promise,a="devtools"!=wx.getSystemInfoSync().platform,p=require("../../../util/platform-config").APP_PLATFORM;module.exports=function(){return e.apply(this,arguments).then(function(e){if(e.em){var t=new Error(n[e.em]||e.msg);throw t.em=e.em,t.code="G."+e.em,t}return e}).then(function(e){var r=e.vl.vi[0],n={duration:+r.td,dltype:e.dltype,fmid:e.fl.fi.filter(function(e){return+e.sl})[0].id,filesize:e.fl.fi.filter(function(e){return+e.sl})[0].fs,preview:e.preview,charge:r.ch,raw:e};return r.ch<1&&(n.preview=e.preview,n.charged=r.ch),3==e.dltype?(n.url=r.ul.ui.map(function(e){return e.hls.pt?e.url+e.hls.pt+"&platform="+p[t]+"&sdtfrom="+t:""}),n.url=n.url.filter(function(e){return e})):n.url=r.ul.ui.map(function(e){return e.url+r.fn+"?vkey="+r.fvkey+"&br="+r.br+"&fmt=auto&level="+r.level+"&platform="+p[t]+"&sdtfrom="+t}),n})}; 
 			}); 
		define("src/controller-video/flow-getinfo/data/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(t){function r(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n,t){return n<<t|n>>>32-t}function e(n,t,e,u,f,c){return r(o(r(r(t,n),r(u,c)),f),e)}function u(n,t,r,o,u,f,c){return e(t&r|~t&o,n,t,u,f,c)}function f(n,t,r,o,u,f,c){return e(t&o|r&~o,n,t,u,f,c)}function c(n,t,r,o,u,f,c){return e(t^r^o,n,t,u,f,c)}function i(n,t,r,o,u,f,c){return e(r^(t|~o),n,t,u,f,c)}function d(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var o,e,d,l,a,h=1732584193,m=-271733879,y=-1732584194,p=271733878;for(o=0;o<n.length;o+=16)e=h,d=m,l=y,a=p,m=i(m=i(m=i(m=i(m=c(m=c(m=c(m=c(m=f(m=f(m=f(m=f(m=u(m=u(m=u(m=u(m,y=u(y,p=u(p,h=u(h,m,y,p,n[o],7,-680876936),m,y,n[o+1],12,-389564586),h,m,n[o+2],17,606105819),p,h,n[o+3],22,-1044525330),y=u(y,p=u(p,h=u(h,m,y,p,n[o+4],7,-176418897),m,y,n[o+5],12,1200080426),h,m,n[o+6],17,-1473231341),p,h,n[o+7],22,-45705983),y=u(y,p=u(p,h=u(h,m,y,p,n[o+8],7,1770035416),m,y,n[o+9],12,-1958414417),h,m,n[o+10],17,-42063),p,h,n[o+11],22,-1990404162),y=u(y,p=u(p,h=u(h,m,y,p,n[o+12],7,1804603682),m,y,n[o+13],12,-40341101),h,m,n[o+14],17,-1502002290),p,h,n[o+15],22,1236535329),y=f(y,p=f(p,h=f(h,m,y,p,n[o+1],5,-165796510),m,y,n[o+6],9,-1069501632),h,m,n[o+11],14,643717713),p,h,n[o],20,-373897302),y=f(y,p=f(p,h=f(h,m,y,p,n[o+5],5,-701558691),m,y,n[o+10],9,38016083),h,m,n[o+15],14,-660478335),p,h,n[o+4],20,-405537848),y=f(y,p=f(p,h=f(h,m,y,p,n[o+9],5,568446438),m,y,n[o+14],9,-1019803690),h,m,n[o+3],14,-187363961),p,h,n[o+8],20,1163531501),y=f(y,p=f(p,h=f(h,m,y,p,n[o+13],5,-1444681467),m,y,n[o+2],9,-51403784),h,m,n[o+7],14,1735328473),p,h,n[o+12],20,-1926607734),y=c(y,p=c(p,h=c(h,m,y,p,n[o+5],4,-378558),m,y,n[o+8],11,-2022574463),h,m,n[o+11],16,1839030562),p,h,n[o+14],23,-35309556),y=c(y,p=c(p,h=c(h,m,y,p,n[o+1],4,-1530992060),m,y,n[o+4],11,1272893353),h,m,n[o+7],16,-155497632),p,h,n[o+10],23,-1094730640),y=c(y,p=c(p,h=c(h,m,y,p,n[o+13],4,681279174),m,y,n[o],11,-358537222),h,m,n[o+3],16,-722521979),p,h,n[o+6],23,76029189),y=c(y,p=c(p,h=c(h,m,y,p,n[o+9],4,-640364487),m,y,n[o+12],11,-421815835),h,m,n[o+15],16,530742520),p,h,n[o+2],23,-995338651),y=i(y,p=i(p,h=i(h,m,y,p,n[o],6,-198630844),m,y,n[o+7],10,1126891415),h,m,n[o+14],15,-1416354905),p,h,n[o+5],21,-57434055),y=i(y,p=i(p,h=i(h,m,y,p,n[o+12],6,1700485571),m,y,n[o+3],10,-1894986606),h,m,n[o+10],15,-1051523),p,h,n[o+1],21,-2054922799),y=i(y,p=i(p,h=i(h,m,y,p,n[o+8],6,1873313359),m,y,n[o+15],10,-30611744),h,m,n[o+6],15,-1560198380),p,h,n[o+13],21,1309151649),y=i(y,p=i(p,h=i(h,m,y,p,n[o+4],6,-145523070),m,y,n[o+11],10,-1120210379),h,m,n[o+2],15,718787259),p,h,n[o+9],21,-343485551),h=r(h,e),m=r(m,d),y=r(y,l),p=r(p,a);return[h,m,y,p]}function l(n){var t,r="",o=32*n.length;for(t=0;t<o;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var o=8*n.length;for(t=0;t<o;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return l(d(a(n),8*n.length))}function m(n,t){var r,o,e=a(n),u=[],f=[];for(u[15]=f[15]=void 0,e.length>16&&(e=d(e,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^e[r],f[r]=1549556828^e[r];return o=d(u.concat(a(t)),512+8*t.length),l(d(f.concat(o),640))}function y(n){var t,r,o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return o}function p(n){return unescape(encodeURIComponent(n))}function g(n){return h(p(n))}function v(n){return y(g(n))}function b(n,t){return m(p(n),p(t))}function s(n,t){return y(b(n,t))}function S(n,t,r){return t?r?b(t,n):s(t,n):r?g(n):v(n)}"function"==typeof define&&define.amd?define(function(){return S}):"object"===("undefined"==typeof module?"undefined":n(module))&&module.exports?module.exports=S:t.md5=S}(void 0); 
 			}); 
		define("src/controller-video/flow-getinfo/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){e=e||"";var n=t.test(e);if(n)return n;var r="";return e.replace(f,function(e,n){r=n}),/qq\.com/.test(r)}var n=require("../../../lib-inject").Promise,r=require("./data/ad"),i=require("./data/getinfo"),o=require("../../module/account"),t=/\/\/[^/]*?qq\.com/,f=/\/\/[^/]+?\/([^/]+?)\//;module.exports=function(t,f){var u=(t=t||{}).vid,d=t.cid,c=t.from,a=t.openid,v=t.defn,l=t.videoInfo||{},s=t.chid,q="function"==typeof f.onBeforeGetinfo?f.onBeforeGetinfo:function(){},m=([u,c,v].join("/"),o.isInner()),p=o.canUse(),h=p&&m;if(l.hasOwnProperty("url")&&(h||!p&&e(l.url))){var B=l.vecDefn;return B&&B.length&&(l.fmid=B.filter(function(e){return e.selected})[0].id),n.resolve({videoinfo:l,ad:{}})}if((h||!p)&&l.vl&&l.fl)return i(u,c,v,{onBeforeGetinfo:q},l).then(function(e){return{videoinfo:e,ad:{}}});var G=1===t.scene&&(h||!p&&t.qwer);return n.all([G?n.resolve({}):r({coverid:d,vid:u,live:0,chid:s||41,pu:1,openid:a||""}),i(u,c,v,{onBeforeGetinfo:q})]).then(function(e){return{ad:e[0],videoinfo:e[1]}})}; 
 			}); 
		define("src/controller-video/flow-play/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../../../lib-inject").Promise,e=require("../../lib/message"),t=require("../../classes/Content"),i=require("../../module/log")("flow-getinfo");module.exports=function(o,r,u){var a={time:0,duration:0,skipable:!1},c={},f={},d=[],s=n.defer(),l=s.promise,p=new e,m=null,v=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={currentContent:n=n||m,preloadContents:d.filter(function(e){return!f[e.id]&&e!=n}),extra:e,getinforaw:g.raw};n&&n.isad&&(t.progress=a),m=n,u(t)},h=o.ad,g=o.videoinfo,w=!1;(h.adList||[]).forEach(function(e){var o=e(),r=new t({url:o.url,duration:o.duration,isad:!0}),u=new n(function(n){w||(r.on("end",function(){n(),o.onEnd()},!0),r.on("error",function(){n(),o.onError()},!0),r.on("timeout",function(){n(),o.onError()},!0),r.on("skip",function(){w=!0,n(),o.onSkip()},!0),r.on("start",function(){p.emit("adplaying",r),o.onStart()},!0),r.on("timeupdate",function(n){o.onTimeupdate(n)},!0),p.on("_terminate",function(){n()}))}).then(function(n){return f[r.id]=!0,n});c[r.id]=r,d.push(r),a.duration+=o.duration,a.skipable=o.skipable,l=l.then(function(){return i("playflow: ad."+o.url),"1"==o.oid?(i("这是一个空单，往下走"),void o.onReportEmpty()):(v(r),u.then(function(n){a.time+=r.duration}))})});var y=new t({url:g.url,duration:g.duration,filesize:g.filesize,isad:!1,preview:g.preview,charged:g.charged});c[y.id]=y,d.unshift(y);var E=new n(function(n,e){function t(t){!i&&t.on("start",function(){p.emit("videoplaying",t),i=!0},!0),t.on("start",function(){p.emit("videostart",t)}),t.on("play",function(){p.emit("videoplay",t)}),t.on("pause",function(){p.emit("videopause",t)}),t.on("timeupdate",function(n){p.emit("videotimeupdate",n,g.duration)}),t.on("error",function(n){var t=new Error(n?n.detail&&n.detail.errMsg||n.message:"播放出错");t.code="P.0",e(t)},!0),t.on("end",n,!0),t.on("timeout",function(n){p.emit("videotimeout",n)})}var i=!1;t(y),p.on("_terminate",function(){n()}),p.on("_changevideocontent",function(n){y.off(),f[y.id]=!0,d.every(function(e,t){return e!=y||(d.splice(t,1,n),!1)}),t(n),m==y?v(n):v(null,{isPlayingAd:!0}),c[n.id]=n,y=n})}).then(function(n){return f[y.id]=!0,n});l=l.then(function(){return y.off("change"),y.on("change",function(){v(y)}),p.on("_changevideocontent",function(n){y.off("change"),n.on("change",function(){v(n)})}),v(y),E}).then(function(){p.emit("end")}).catch(function(n){throw p.emit("error",n),n}),v(null);var k={progress:l,stop:function(){return p.emit("_terminate"),p.emit("terminate"),Object.keys(c).forEach(function(n){c[n].off()}),p.off(),this},start:function(){return s.resolve(),l},on:function(){return p.on.apply(p,arguments)},switchVideo:function(n){var e=n.videoinfo;g=e;var i=new t({url:e.url,duration:e.duration,filesize:e.filesize,isad:!1,preview:e.preview,charged:e.charged});p.emit("_changevideocontent",i)}};return["End","Play","Pause","Timeupdate","Error","Skip"].forEach(function(n){r.on("content"+n.toLowerCase(),function(e){for(var t=e&&c[e]?c[e]:m,i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];t&&t["onContent"+n].apply(t,o)})}),k}; 
 			}); 
		define("src/controller-video/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(n)},i=require("../../lib-inject").Promise,u=require("./flow-getinfo/index"),a=require("./flow-play/index"),c=require("./reporter"),f=require("../module/reporter/index"),l=require("../classes/Controller"),p=require("../module/log")("controller-video-index");require("./flow-getinfo/data/ad").reporter.on("report",function(e){p("url",e),f.any(e)});var s=function(f){function p(){return e(this,p),t(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return r(p,l),n(p,[{key:"createFlow",value:function(e,t){var r=this;e=e||{},t=t||{};var n=e,o=n.vid,f=n.from,l=n.cid,p=(n.defn,n.qwer,n.scene,n.videoInfo,t.getReportParam),s=new i(function(e){p?p(function(t,r){e(r&&r.hc_openid||"")}):e("")}),d=c({cid:l,vid:o},{getReportParam:p}),y=this.model,h=s.then(function(r){return e.openid=r,u(e,t)}).then(function(e){y.state="ready";var t=r.playflow=a(e,r,function(e){y.currentContent=e.currentContent,r.emit("contentchange",e)});return d.setPlayFlow(t),d.setVideoInfo(e.videoinfo),t.on("videotimeupdate",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.emit.apply(r,["videotimeupdate"].concat(t))}),t.on("videostart",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.emit.apply(r,["videostart"].concat(t))}),r.started.promise}).then(function(){return y.state="playing",r.playflow.start()}).then(function(e){y.state="ended"}).catch(function(e){throw y.state="error",r.playflow&&r.playflow.stop(),d.error(e),e});return this.switchDefn=function(e){var n=r.currDefn;return s.then(function(r){return u({vid:o,from:f,cid:l,openid:r,defn:e||n},t)}).then(function(e){r.playflow.switchVideo(e)})},h}},{key:"stop",value:function(){this.model.state="ended",o(p.prototype.__proto__||Object.getPrototypeOf(p.prototype),"stop",this).call(this),this.playflow&&this.playflow.stop()}}]),p}();module.exports=function(e,t){return new s(e,t)}; 
 			}); 
		define("src/controller-video/report-play.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=require("./../module/reporter/report-queue"),t=require("../../conf"),n=wx.getSystemInfoSync();module.exports=function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=arguments[2],p=arguments[3];c(function(c,a){c&&(a={}),delete(a=a||{}).val1,delete a.val2,delete a.val3,"object"==e(a[r])&&(["val1","val2","val3"].forEach(function(e){a[e]=a[r][e]}),delete a[r]),(a.isReportNetwork?wx.getNetworkType:function(e){e&&e.success({})})({success:function(e){var c={BossId:4327,Pwd:944465292,app_version:t.version,platform:n.platform,client_model:n.model,wx_version:n.version,network:e&&e.networkType?e.networkType:"",step:r,page_url:a.pageName||"",page_query:a.pageQuery||"",page_ref:a.refName||""};["hc_vuserid","hc_openid","hc_appid","ptag","iformat","duration","defn","tpay","adid","playtime","page_url","page_query","page_ref","cid","vid","isvip","val1","val2","val3","appname","nick","rmd","scene","additional","videourl"].forEach(function(e){e in i&&(c[e]=i[e]),e in a&&(c[e]=a[e]),void 0==c[e]&&(c[e]="")}),p&&"function"==typeof p?p(null,{reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(c).map(function(e){return e in c?e+"="+encodeURIComponent(c[e]):""}).filter(function(e){return e}).join("&")}):o.push({reportUrl:"https://btrace.qq.com/kvcollect?"+Object.keys(c).map(function(e){return e in c?e+"="+encodeURIComponent(c[e]):""}).filter(function(e){return e}).join("&")})}})})}; 
 			}); 
		define("src/controller-video/reporter.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){return{1:1,2:1,10001:4,10002:3,10003:2,10201:4,10202:3,10203:2,100001:2,320089:2,320091:3,320092:4,320093:5}[e]}var n=require("./report-play"),o=require("../module/reporter/index"),t=require("../util/index").Oncer,r=[5,30];module.exports=function(i,a){function u(){return{iformat:d&&d.dltype?d.dltype:0,duration:d&&d.duration?Math.floor(d.duration):"",defn:d&&d.fmid?e(d.fmid):"",playtime:s+(l?Date.now()-l:0),vid:c||"",cid:v||""}}var l,c=i.vid,v=i.cid,f=a.getReportParam||function(e){return e({})},d=null,p=0,s=0,m=!1,w=!1,y=t(function(e){var o=u();o.val1=0,o.val2=0,o.val3=e,o.videourl=e,n(7,o,f)}),D=t(function(e){var o=u();o.val1=p?Date.now()-p:0,o.val2=m?0:1,o.val3=e,o.videourl=e,n(6,o,f)}),h=t(function(e,o){var t=u();t.val1=p?Date.now()-p:0,t.val2={error:3,complete:1,incomplete:w?2:0}[e],void 0==t.val2&&(t.val2=2),t.val3=o,n(5,t,f)}),g=null,C=t(function(e,t){o.reportCache.del("step30");var r=u();r.val1=e,r.val2=t,n(30,r,f)}),q=function(e,t){if(1e4==e){g=setTimeout(function(){C(e)},11e3);var r=u();r.val1=e,r.val2=t,n(30,r,f,function(e,n){o.reportCache.set("step30",n)})}else clearTimeout(g),C(e)};return n(3,u(),f),o.on("_save",function(){var e=u();e.val1=p?Date.now()-p:0,e.val2=w?2:0,n(5,e,f,function(e,n){o.reportCache.set("step5",n)})}),o.on("_restore",function(){r.forEach(function(e){o.reportCache.del("step"+e)})}),{setPlayFlow:t(function(e){e.on("adplaying",function(e){m=!0,y(e.url)}),e.on("videoplay",function(e){!p&&(p=Date.now()),l=Date.now()}),e.on("videoplaying",function(e){w=!0,D(e.url),q(p?Date.now()-p:0,0)}),e.on("videopause",function(){s+=Date.now()-l,l=0}),e.on("videotimeout",function(e){q(e,1)}),e.on("terminate",function(){h("incomplete")}),e.on("end",function(){h("complete")}),e.on("error",function(e){h("error","1 "+(e.code||"")+" "+e.message)})}),setVideoInfo:t(function(e){d=e}),error:function(e){h("error","2 "+(e.code||"")+" "+e.message)}}}; 
 			}); 
		define("src/lib/algorithm/fillTimeStamp.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(r){r=r||10;var t=parseInt(+new Date)+"";if(t.length===r)return t;if(t.length>r)return t.substring(0,r);for(var e=r-t.length;e>0;)t="0"+t,e--;return t}; 
 			}); 
		define("src/lib/algorithm/qvsec.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r={};r.ha=function(r){function t(r,t){return((r>>1)+(t>>1)<<1)+(1&r)+(1&t)}for(var e=[],n=0;n<64;)e[n]=0|4294967296*Math.abs(Math.sin(++n));return function(r){for(var n,a,o,u,c=[],h=decodeURIComponent(encodeURI(r)),f=h.length,i=[n=1732584193,a=-271733879,~n,~a],d=0;d<=f;)c[d>>2]|=(h.charCodeAt(d)||128)<<d++%4*8;for(c[r=16*(f+8>>6)+14]=8*f,d=0;d<r;d+=16){for(f=i,u=0;u<64;)f=[o=f[3],t(n=f[1],(o=t(t(f[0],[n&(a=f[2])|~n&o,o&n|~o&a,n^a^o,a^(n|~o)][f=u>>4]),t(e[u],c[[u,5*u+1,3*u+5,7*u][f]%16+d])))<<(f=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*f+u++%4])|o>>>32-f),n,a];for(u=4;u;)i[--u]=t(i[u],f[u])}for(r="";u<32;)r+=(i[u>>3]>>4*(1^7&u++)&15).toString(16);return r}}(),r.stringToHex=function(r){for(var t="",e=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),n=0;n<r.length;n++)t+=e[r.charCodeAt(n)>>4]+e[15&r.charCodeAt(n)];return t},r.hexToString=function(r){for(var t="",e="0x"==r.substr(0,2)?2:0;e<r.length;e+=2)t+=String.fromCharCode(parseInt(r.substr(e,2),16));return t},r._Seed="#$#@#*ad",r.tempcalc=function(r,t){for(var e="",n=0;n<r.length;n++)e+=String.fromCharCode(r.charCodeAt(n)^t.charCodeAt(n%4));return e},r.u1=function(r,t){for(var e="",n=t;n<r.length;n+=2)e+=r.charAt(n);return e},r._urlStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r.urlenc=function(t,e,n){for(var a,o,u,c,h,f,i,d="",s=0;s<t.length;)a=t.charCodeAt(s++),o=t.charCodeAt(s++),u=t.charCodeAt(s++),15==s&&(d+="A",d+=e,d+=n),c=a>>2,h=(3&a)<<4|o>>4,f=(15&o)<<2|u>>6,i=63&u,isNaN(o)?f=i=64:isNaN(u)&&(i=64),d=d+r._urlStr.charAt(c)+r._urlStr.charAt(h)+r._urlStr.charAt(f)+r._urlStr.charAt(i);return d},r.$xx=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(t+e+o+r._Seed+n+"heherand")},r.$xxzb=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(e+"tmp123"+t+"#$$&c2*KA"+o)},r.$xxf=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(t+"ques"+o+"*&%$(SD!L}"+e+n)},r.$xxzbf=function(t,e,n,a,o){var o=o||parseInt(+new Date/1e3);return r.ha(e+o+"*#016"+t+"zput")},module.exports=r; 
 			}); 
		define("src/lib/es6-promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,n){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.ES6Promise=n()}(void 0,function(){function e(e){return"function"==typeof e||"object"===(void 0===e?"undefined":t(e))&&null!==e}function n(t){return"function"==typeof t}function r(){return void 0!==D?function(){D(i)}:o()}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<F;t+=2)(0,G[t])(G[t+1]),G[t]=void 0,G[t+1]=void 0;F=0}function s(t,e){var n=arguments,r=this,o=new this.constructor(c);void 0===o[I]&&x(o);var i=r._state;return i?function(){var t=n[i-1];L(function(){return j(i,o,t,r._result)})}():w(r,o,t,e),o}function u(e){var n=this;if(e&&"object"===(void 0===e?"undefined":t(e))&&e.constructor===n)return e;var r=new n(c);return _(r,e),r}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function a(){return new TypeError("A promises callback cannot return that same promise.")}function l(t){try{return t.then}catch(t){return V.error=t,V}}function h(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function p(t,e,n){L(function(t){var r=!1,o=h(n,e,function(n){r||(r=!0,e!==n?_(t,n):m(t,n))},function(e){r||(r=!0,b(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function d(t,e){e._state===Q?m(t,e._result):e._state===R?b(t,e._result):w(e,void 0,function(e){return _(t,e)},function(e){return b(t,e)})}function v(t,e,r){e.constructor===t.constructor&&r===s&&e.constructor.resolve===u?d(t,e):r===V?b(t,V.error):void 0===r?m(t,e):n(r)?p(t,e,r):m(t,e)}function _(t,n){t===n?b(t,f()):e(n)?v(t,n,l(n)):m(t,n)}function y(t){t._onerror&&t._onerror(t._result),g(t)}function m(t,e){t._state===J&&(t._result=e,t._state=Q,0!==t._subscribers.length&&L(g,t))}function b(t,e){t._state===J&&(t._state=R,t._result=e,L(y,t))}function w(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Q]=n,o[i+R]=r,0===i&&t._state&&L(g,t)}function g(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function S(t,e){try{return t(e)}catch(t){return X.error=t,X}}function j(t,e,r,o){var i=n(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if((s=S(r,o))===X?(f=!0,u=s.error,s=null):c=!0,e===s)return void b(e,a())}else s=o,c=!0;e._state!==J||(i&&c?_(e,s):f?b(e,u):t===Q?m(e,s):t===R&&b(e,s))}function E(t,e){try{e(function(e){_(t,e)},function(e){b(t,e)})}catch(e){b(t,e)}}function T(){return Z++}function x(t){t[I]=Z++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,e){this._instanceConstructor=t,this.promise=new t(c),this.promise[I]||x(this.promise),q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?m(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&m(this.promise,this._result))):b(this.promise,P())}function P(){return new Error("Array Methods must be provided an Array")}function C(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function O(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function k(t){this[I]=T(),this._result=this._state=void 0,this._subscribers=[],c!==t&&("function"!=typeof t&&C(),this instanceof k?E(this,t):O())}var Y=void 0,q=Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},F=0,D=void 0,K=void 0,L=function(t,e){G[F]=t,G[F+1]=e,2===(F+=2)&&(K?K(i):H())},N="undefined"!=typeof window?window:void 0,U=N||{},W=U.MutationObserver||U.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),B="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,G=new Array(1e3),H=void 0;H=z?function(){return process.nextTick(i)}:W?function(){var t=0,e=new W(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():B?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===N&&"function"==typeof require?function(){try{var t=require("vertx");return D=t.runOnLoop||t.runOnContext,r()}catch(t){return o()}}():o();var I=Math.random().toString(36).substring(16),J=void 0,Q=1,R=2,V=new A,X=new A,Z=0;return M.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===J&&n<t;n++)this._eachEntry(e[n],n)},M.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===u){var o=l(t);if(o===s&&t._state!==J)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===k){var i=new n(c);v(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},M.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===J&&(this._remaining--,t===R?b(r,n):this._result[e]=n),0===this._remaining&&m(r,this._result)},M.prototype._willSettleAt=function(t,e){var n=this;w(t,void 0,function(t){return n._settledAt(Q,e,t)},function(t){return n._settledAt(R,e,t)})},k.all=function(t){return new M(this,t).promise},k.race=function(t){var e=this;return new e(q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},k.resolve=u,k.reject=function(t){var e=new this(c);return b(e,t),e},k._setScheduler=function(t){K=t},k._setAsap=function(t){L=t},k._asap=L,k.prototype={constructor:k,then:s,catch:function(t){return this.then(null,t)}},k.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=k},k.Promise=k,k.defer=function(){var t={};return t.promise=new k(function(e,n){t.resolve=e,t.reject=n}),t},k}); 
 			}); 
		define("src/lib/message.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function t(){this._evtObjs={},this._outdatedMsgs={}}function e(){}t.prototype.on=function(t,e,s){this._evtObjs[t]||(this._evtObjs[t]=[]),this._evtObjs[t].push({handler:e,once:s});var n=this;return function(){n.off(t,e)}},t.prototype.wait=function(t,s){return this._outdatedMsgs[t]?(s.apply(null,this._outdatedMsgs[t]),e):this.on(t,s,!0)},t.prototype.off=function(t,e){var s=this;return(t?[t]:Object.keys(this._evtObjs)).forEach(function(t){if(e){var n=[];(s._evtObjs[t]||[]).forEach(function(t){t.handler!==e&&n.push(t)}),s._evtObjs[t]=n}else s._evtObjs[t]=[]}),this},t.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1);this._outdatedMsgs[t]=e,(this._evtObjs[t]||[]).forEach(function(t){if(!t.once||!t.called){t.called=!0;try{t.handler&&t.handler.apply(null,e)}catch(t){console.error(t.stack||t.message||t)}}})},t.prototype.emitAsync=function(){var t=arguments,e=this;setTimeout(function(){e.emit.apply(e,t)},0)},t.prototype.assign=function(t){var e=this;["on","off","wait","emit","emitAsync"].forEach(function(s){var n=e[s];t[s]=function(){return n.apply(e,arguments)}})},(new t).assign(t),module.exports=t; 
 			}); 
		define("src/lib/parse-body.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(t){if("string"!=typeof t)return t;t&&(t=t.trim()),t&&/^(data|QZOutputJson)=/.test(t)&&(t=t.replace(/^(data|QZOutputJson)=/,"").replace(/;?$/,""));try{return JSON.parse(t)}catch(t){throw new Error("parse jsonp body failed")}}; 
 			}); 
		define("src/lib/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./parse-body"),n=require("./es6-promise"),t=require("../module/log")("lib-request"),u=module.exports={request:function(n){return n.success=function(n){return n=n||function(){},function(u){if(t("wx.request success"),u&&200==u.statusCode)try{u.data=e(u.data)}catch(e){}n(u)}}(n.success),t("wx.request",n.url),wx.request(n)},get:function(e,t){return t=t||{},new n(function(n,s){(u.busRequest||u.request)({url:e,data:t.data||{},header:t.header||{},method:"GET",success:function(e){n(e)},fail:function(e){s(e)},needLoginCase:t.needLoginCase,needlogin:t.needlogin})})},post:function(e,t){return t=t||{},new n(function(n,s){(u.busRequest||u.request)({url:e,data:t.data||{},header:t.header||{},method:"POST",success:function(e){n(e)},fail:function(e){s(e)},needLoginCase:t.needLoginCase,needlogin:t.needlogin})})}}; 
 			}); 
		define("src/lib/url.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={queryParse:function(e,n){if(!e)return{};n=n||"&";var r=e.replace(/^\?/,""),t={},i=r?r.split(n):null;return i&&i.length>0&&i.forEach(function(e){var n=(e=e.split("=")).splice(0,1),r=e.join("=");t[n]=decodeURIComponent(r)}),t},queryJoin:function(n){var r=[].slice.call(arguments);r[0]={};var t=e.queryStringify(Object.extend.apply(Object,r));if(!t)return n;var i;return i=/[\?&]$/.test(n)?"":~n.indexOf("?")?"&":"?",n+i+t},queryStringify:function(e,n){return e?Object.keys(e).map(function(n){return n+"="+encodeURIComponent(e[n])}).join(n||"&"):""}};module.exports=e; 
 			}); 
		define("src/module/account.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var n=require("../util/appids"),e=require("./system-info")(),r={canUse:function(){return!!wx.getAccountInfoSync},isInner:function(){if(r.canUse()){var c=wx.getAccountInfoSync();return!!e.isQB||!!n[c.miniProgram.appId]}return!1},getAccountInfoSync:function(){if(r.canUse())return wx.getAccountInfoSync()},canUseInner:function(){return r.canUse()&&r.isInner()}};module.exports=r; 
 			}); 
		define("src/module/cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={set:function(e,t,a){wx.setStorageSync("_cache_"+e,{expr:a||0,date:+new Date,data:t})},get:function(e){e="_cache_"+e;var t=wx.getStorageSync(e);return t?t.expr&&t.expr?new Date-(t.date+t.expr)<0?t.data:(wx.removeStorageSync(e),null):t.data:null},del:function(e){e="_cache_"+e,wx.removeStorageSync(e)}}; 
 			}); 
		define("src/module/curr-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var r;module.exports={getCurrUrl:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return t[t.length-1].route},getCurrPageQuery:function(e){if(!(r=e.getCurrentPages||r))return"/pages/default";var t=r();return(e=t[t.length-1].options)||{}},getCurrUrlWithQuery:function(){var r=this.getCurrPageQuery(),e=this.getCurrUrl()+"?";for(var t in r)e+=t+"="+r[t]+"&";return e=e.substring(0,e.length-1)}}; 
 			}); 
		define("src/module/gen-guid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(){return Math.random().toString(16).substring(2)}; 
 			}); 
		define("src/module/guid.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./cache"),r=require("./gen-guid"),t=e.get("tvp_guid");t||(t=r(),e.set("tvp_guid",t)),module.exports=t; 
 			}); 
		define("src/module/log.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function o(a){var t=[Math.floor(50*Math.random()+200),Math.floor(50*Math.random()+150),Math.floor(50*Math.random()+100)].sort(function(){return Math.random()-.5});return t="rgb("+t[0]+", "+t[1]+", "+t[2]+")",n?function(){if(o.isOpenLog){var n=["%c【%s】%c "+a+" %c %s ","background: #ddd",new Date,"background: "+t,"background: #333;color: white"];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}:function(){if(o.isOpenLog){var n=["【%s】 "+a+" %s ",new Date];console.log.apply(console,n.concat([].slice.call(arguments,0)))}}}var n="devtools"==wx.getSystemInfoSync().platform;o.isOpenLog=!1,module.exports=o; 
 			}); 
		define("src/module/network.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={"4g":4,"3g":3,"2g":2,wifi:1};module.exports=function(t,o){wx.getNetworkType({complete:function(r){var i=(o||e)[r&&r.networkType]||0;t&&t(i)}})}; 
 			}); 
		define("src/module/reporter/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=new(require("../../lib/message")),r=require("./report-queue"),t=require("../log")("module-reporter");r.onReport=function(e){s.emit("report",e)};var o=require("./report-cache"),s={};s.any=function(e){r.push(e)},s.saveState=function(){t("reporter.js","saveState"),s.emit("_save")},s.restoreState=function(){t("reporter.js","restoreState"),s.emit("_restore")},s.checkState=function(){t("reporter.js","checkState"),o.getAll().forEach(r.push),o.del()},s.reportCache=o,e.assign(s),module.exports=s; 
 			}); 
		define("src/module/reporter/report-cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../cache"),e=t.get("tvp_report")||{};exports.get=function(t){return e[t]},exports.set=function(r,n){e[r]=n,t.set("tvp_report",e)},exports.del=function(r){r?delete e[r]:e={},t.set("tvp_report",e)},exports.getAll=function(){return Object.keys(e).map(function(t){return e[t]})}; 
 			}); 
		define("src/module/reporter/report-queue.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../../lib-inject").request;module.exports=function(t){function n(t){~t.reportUrl.indexOf("btrace.qq.com")?e(t.reportUrl).then(function(){r.release()}).catch(function(){r.onReport&&r.onReport(t)}):r.onReport&&r.onReport(t),c=setTimeout(function(){r.release()},o)}var r,o=3e3,u=!1,i=[],c=null;return r={release:function(e){u&&e&&e!=u||(u=!1,clearTimeout(c),i.length&&n(i.shift()))},push:function(e){u?i.push(e):(u=e,n(e))}}}(); 
 			}); 
		define("src/module/system-info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t;module.exports=function(){return t=t||wx.getSystemInfoSync()}; 
 			}); 
		define("src/module/visiable.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t=require("./log")("visiable");module.exports=function(o){if(!o.dom){var r=wx.createSelectorQuery().in(o);o.dom=r.select("#"+o.data.playerid)}o.dom.boundingClientRect(function(r){e=e||wx.getSystemInfoSync();var i=!0;(r.top>=e.windowHeight||r.bottom<=0)&&(t(r),i=!1),i||o.isEnterFullscreen||o._controller.pause()}).exec()}; 
 			}); 
		define("src/util/appids.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={wxa75efa648b60994b:!0,wxac48d234d44e23e3:!0}; 
 			}); 
		define("src/util/base64text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAtxtZGF0AAACvAYF//+43EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDEzNSByMjM0NSBmMGMxYzUzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxMyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTYgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9YWJyIG1idHJlZT0xIGJpdHJhdGU9NTAgcmF0ZXRvbD0xLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAQZYiEABr//vfUt8yy8ER/gQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAA8AAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAEAAAAAoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEAAKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAn/4QAZZ2QACazZX+TAWyAAAAMAIAAAAwKB4kSywAEABWjr7LIsAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAtQAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU1LjEyLjEwMg=="; 
 			}); 
		define("src/util/defn-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,r,d){return r in e?Object.defineProperty(e,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[r]=d,e}var r;module.exports=(r={"流畅":"msd","标清":"sd","高清":"mp4"},e(r,"高清","hd"),e(r,"超清","shd"),e(r,"蓝光","fhd"),e(r,"4K","uhd"),e(r,"杜比","dolby"),r); 
 			}); 
		define("src/util/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={formatDate:function(e,t){if(!e)return"";"string"==typeof e&&(e=new Date(e.replace(/-/g,"/"))),t=t||"yyyy-MM-dd";var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},Oncer:function(e){var t=!1,n=function(){t||(t=!0,e.done=t,e.apply(this,arguments))};return n.done=t,n}}; 
 			}); 
		define("src/util/platform-config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={APP_NAME:{v4170:"zhihuiwang",v4163:"xiaosongliu",v4162:"dongqiji",v4161:"egame.qq.com",v4169:"plugin",v4160:"sport.qq.com",v4159:"oddjohn",v4158:"sherrygu",v4157:"sophiachang",v4153:"yidiandian",v4152:"pvp.wx.com",v4151:"pipixia",v4150:"wechat_class",v4149:"x5.qq.com",v4148:"auto.qq.com",v4146:"wuxia.qq.com",v4145:"dnf.qq.com",v4144:"pvp.qq.com",v4143:"ke.qq.com",v4142:"qnreading",v4141:"om",v4140:"wx_reader",v4139:"news",v4138:"video"},APP_PLATFORM:{v4170:"4340801",v4163:"4090801",v4162:"4120801",v4161:"3960801",v4169:"4210801",v4160:"40801",v4159:"3810801",v4158:"3710801",v4157:"3690801",v4153:"3500801",v4152:"3470801",v4151:"3450801",v4150:"3310801",v4149:"3280801",v4148:"3170801",v4146:"3140801",v4145:"3110801",v4144:"3100801",v4143:"260801",v4142:"570801",v4141:"3040801",v4140:"60801",v4139:"20801",v4138:"10801"}}; 
 			}); 
		define("src/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./module/reporter/index"),t=require("./controller-video/index"),o=require("./controller-live/index"),n=require("./util/platform-config").APP_NAME,r=module.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.from,d=void 0===r.autoplay||r.autoplay,f=r.defn||"",c=r.chid||void 0,p="function"==typeof r.getReportParam?r.getReportParam:"function"==typeof r.getLoginData?function(e){r.getLoginData(function(t,o){o.hc_openid=o.openid,delete o.openid,e(t,o)})}:function(e){return e()},u=e.vid;"string"==typeof e&&(u=e);var l,s=e.cid||"",v=e.sid,g=e.pid,m=r.scene,h=r.qwer;return l=u?t({vid:u,cid:s,from:a,chid:c,defn:f,scene:m,qwer:h,videoInfo:i},{onBeforeGetinfo:r.onBeforeGetinfo,getReportParam:function(e){p(function(t,o){o&&(o.appname=n[a]),e(t,o)})}}):o({sid:v,pid:g,from:a,defn:f},{getReportParam:function(e){p(function(t,o){o&&(o.appname=n[a]),e(t,o)})}}),d&&l.start(),l};r.on=function(t){"report"==t&&(e.off("report"),e.on.apply(e,arguments))},r.release=e.release,r.saveState=e.saveState,r.restoreState=e.restoreState,r.checkState=e.checkState; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/live/live.js';global.__wxRouteBegin = true; 	define("component/live/live.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../../index"),e=require("../txv-context"),i=require("../../src/module/log")("txv-live-component"),r=(require("../../src/controller-live/flow-getinfo/live-detail"),require("../../src/controller-live/flow-getinfo/live-poll")),a=(require("../../src/util/index"),require("../../src/util/base64text")),n=require("./properties"),o=require("./data");Component({properties:n,data:o,attached:function(){i("attached",this.data);var t=this;wx.onNetworkStatusChange(function(i){function r(){t.currPlayTime=t.data.progressTime,t.networkChange&&t.networkChange()}t.data.tvpIsAd||(t.data.playerid!=e.getLastPlayId()?t.delayNetworkChangeReq=r:r())})},detached:function(){i("detached",this.data),e.txvDetached(this.data.playerid),clearTimeout(this.livePollTimer),this.networkChange=null,this.livePollTimer=!1},methods:{registerInterface:function(){var t=this,i=this.data.playerid;if(!i)throw new Error("需要为txv-live组件指定一个playerid，可以采用sid+pid组合形成playerid");if(!this._controller){this.videoContext=wx.createVideoContext(i,this);var r=this._controller={};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(e){r[e]=function(){for(var i=arguments.length,r=Array(i),a=0;a<i;a++)r[a]=arguments[a];t.videoContext[e].apply(t.videoContext,r)}}),e.txvAttached(i,r),this.mountMore(r)}},mountMore:function(t){var e=this,i={hideVideo:function(){e.setData({isHiddenVideo:!0})},showVideo:function(){e.setData({isHiddenVideo:!1})},hideVideoWithVoice:function(){e.setData({isHiddenWithVoice:!0})},showVideoWithVoice:function(){e.setData({isHiddenWithVoice:!1},function(){})},showContainer:function(){e.setData({isHiddenContainer:!1})},hideContainer:function(){e.setData({isHiddenContainer:!0})}};Object.assign(t,i)},getVideoInfo:function(){if(this.data.sid&&this.data.pid)return t({sid:this.data.sid,pid:this.data.pid},Object.assign({from:"v4169"},this.data.extraParam))},onVideoChange:function(t,e,r){var a=this.data.sid,n=this.data.pid;this.formerPid==n&&this.formerSid==a||(this.formerPid=n,this.formerSid=a,a&&n&&(this.registerInterface(),i("onVideoChange",a,n),clearTimeout(this.livePollTimer),this.livePollTimer=null,this.createPlayer()))},triggerLivePoll:function(t,e){var n=this;if(!this.isPolling)return this.isPolling=!0,r({pollDataKey:t,pollContext:e||""}).then(function(e){n.isPolling=!1,i("@@@@@@@@@@@@@@@",e),e=e&&e.data&&e.data.data,!1!==n.livePollTimer&&(n.livePollTimer=setTimeout(function(){n.triggerLivePoll(t,e.pollContext)},1e3*(e.pollTimeOut||5)));var r={onlineNumber:e.onlineNumber,likeNum:e.likeNum,popularity:e.popularity,playCount:e.playCount,attentNumber:e.attentNumber};2!=e.liveStatus?(clearTimeout(n.livePollTimer),n.livePollTimer=!1,n.triggerEvent("livestatus",{status:3,msg:"直播已结束",data:r}),n.setData({getDataError:"",isAfter:!0,isBefore:!1,tvpUrl:a,autoplay:!1})):n.triggerEvent("livestatus",{status:2,msg:"直播中",data:r})}).catch(function(i){n.isPolling=!1,!1!==n.livePollTimer&&(n.livePollTimer=setTimeout(function(){n.triggerLivePoll(t,e)},2e4))})},createPlayer:function(){var t=this;this.video=this.getVideoInfo(),this.video&&(this.networkChange=this.video.switchDefn,this.video.on("contentchange",function(e){if(t.triggerEvent("contentchange",e),e.currentContent){i("tvpUrl",e,e.currentContent);var r=e.currentContent.url,a=e.currentContent.iretcode,n={isBefore:!1,isAfter:!1,getDataError:!1,errCode:""};0===a&&r?(n.tvpUrl=r,t.triggerEvent("livestatus",{status:2,msg:"直播中"}),!t.data.isStopPoll&&t.triggerLivePoll("pid="+t.data.pid)):7==a?(n.isBefore=!0,t.triggerEvent("livestatus",{status:1,msg:"直播未开始"})):8==a?(n.isAfter=!0,t.triggerEvent("livestatus",{status:3,msg:"直播已结束"})):(n.getDataError=!0,n.errCode=a||8888,t.triggerEvent("livestatus",{status:a,msg:"未知错误"})),t.setData(n)}}),this.video.on("error",function(e){t.triggerEvent("contenterror",e)}))},__onTvpPlay:function(t){var i=this.data.playerid,r=e.getLastPlayId();if(e.setTvpPlayState(i,!0),r!=i){if(r){var a=e.getTxvContext(r);this.data.isNeedMutex&&a&&a.pause(),e.setTvpPlayState(r,!1)}e.setLastPlayId(i)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",t.detail)}},__onTvpPause:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",t.detail)}},__onTvpEnded:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{this.triggerEvent("ended",t.detail)}},__onTvpTimeupdate:function(t){e.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",t.detail),this.video&&this.video.onContentTimeupdate(null,t)},__onTvpFullScreenChange:function(t){this.isEnterFullscreen=!!t.detail.fullScreen,this.triggerEvent("fullscreenchange",t.detail)},__onTvpError:function(t){if(this.data.tvpUrl!==a){console.log("__onTvpError",this.data.tvpUrl,t),e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError(null,t)}finally{this.triggerEvent("error",t.detail)}}},__onTvpWaiting:function(t){this.video&&this.video.onContentWaiting()}}}); 
 			}); 	require("component/live/live.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wxa75efa648b60994b/component/video/video.js';global.__wxRouteBegin = true; 	define("component/video/video.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../../index"),e=require("../txv-context"),i=require("../../src/module/log")("txv-video-component"),n=require("../../src/util/defn-config"),r=require("../../src/module/system-info")(),a=require("./properties"),o=require("./data"),s=wx.getStorageSync("tvp_openid");s||(s=["_",Math.random().toString(16).slice(2),Math.random().toString(16).slice(2),Math.random().toString(16).slice(2)].join("").slice(0,28),wx.setStorageSync("tvp_openid",s)),Component({properties:a,data:o,attached:function(){var n=this;i("attached",this.data);var r=this;wx.onNetworkStatusChange(function(t){function i(){r.currPlayTime=r.data.progressTime,r.isNetworkChange=!0,r.networkChange&&r.networkChange()}r.data.tvpIsAd||(console.log("network change"),r.data.playerid!=e.getLastPlayId()?r.delayNetworkChangeReq=i:i())}),t.on("report",function(t){n.setData({reportUrl:t.reportUrl.replace("https","http")})}),this.initBright(),this.isIpx()},ready:function(){this.register()},moved:function(){},detached:function(){i("detached",this.data),e.txvDetached(this.data.playerid),this._controller=null,this.networkChange=null},methods:{register:function(){this.data.isHiddenStop&&this.registerIntersectionObserver()},registerIntersectionObserver:function(){var t=this;this.createIntersectionObserver().relativeToViewport().observe("#"+this.data.playerid,function(e){var i=e.boundingClientRect;t.isEnterFullscreen||t.data.isHiddenWithVoice||!i||(i.bottom<=0||i.top>=r.windowHeight)&&t.videoContext.pause()})},registerInterface:function(){var t=this;if(!this.data.playerid)throw new Error('需要为txv-video组件指定一个playerid，如果是采用的playerid="{{playerid}}"，请加上wx:if="{{playerid}}"');if(!this._controller){this.videoContext=wx.createVideoContext(this.data.playerid,this);var n=this._controller={};["play","pause","seek","playbackRate","requestFullScreen","exitFullScreen","sendDanmu"].forEach(function(e){n[e]=function(){for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];t.videoContext[e].apply(t.videoContext,n)}}),this.mountMore(n),e.txvAttached(this.data.playerid,n),i("!!!!!!!",e)}},mountMore:function(t){var e=this,i=this,n={hideVideo:function(){i.setData({isHiddenVideo:!0})},showVideo:function(){i.setData({isHiddenVideo:!1})},hideVideoWithVoice:function(){i.setData({isHiddenWithVoice:!0})},showVideoWithVoice:function(){i.setData({isHiddenWithVoice:!1},function(){})},showContainer:function(){i.setData({isHiddenContainer:!1})},hideContainer:function(){i.setData({isHiddenContainer:!0})},controller:this.video||null,replay:function(t,i,n){i=i||e.data,n=n||e.data.videoInfo,e.start(t,i,n),setTimeout(function(){e.videoContext.play()})}};Object.assign(t,n)},skipAd:function(){this.video.onContentSkip(0)},onPlayeridChange:function(t,i){i&&e.txvDetached(i),t&&this._controller&&e.txvAttached(t,this._controller)},onVideoChange:function(t,e){this.start(t,this.data,this.data.videoInfo)},getVideoInfo:function(e,r,a){if(e)return i("denf",n[r.defn]),t(e,Object.assign({from:"v4169",defn:n[r.defn]||"",getReportParam:function(t){t(null,{hc_openid:s,hc_vuserid:s})}},r.extraParam),a)},start:function(t,n,a){var o=this;if(t){this.registerInterface();var s={tvpState:"",formattedVid:t=t.replace(/^\s+|\s+$/,"")};this.setData(s),n=n||{},a=a||{},i("onVideoChange",t),console.log("onVideoCHnage");var h=this.video=this.getVideoInfo(t,n,a);if(h){try{var d=e.getTxvContext(this.data.playerid);d&&(d.controller=h)}catch(t){}this.networkChange=h.switchDefn,h.on("error",function(t){o.triggerEvent("contenterror",t),o.setData({tvpVideoError:t.message+"("+(t.code||"L")+")"})}),h.on("statechange",function(t,e){if(i("onstatechange",t,e),o.triggerEvent("statechange",{newstate:t,oldstate:e}),t!=o.data.tvpState){switch(i("playerstatechange "+o.data.tvpState+" => "+t),o.data.tvpState){case"stop":break;case"error":return}o.setData({tvpState:t})}});var c=!0;h.on("contentchange",function(e){i("contentchange",e);var n=o.isSwitchDefn?1:o.isNetworkChange?2:0;if(e=e||{},e.origin=n,o.triggerEvent("contentchange",e),e.currentContent){var s={};e.extra.isPlayingAd||(s.progressTime=0,e.progress?(s.progressDuration=e.progress.duration,s.progressBaseTime=e.progress.time,s.progressSkipTime=e.progress.skipable):(s.progressDuration=0,s.progressBaseTime=0,s.progressSkipTime=0)),s.isQB=r.isQB&&o.data.isHideQB||!1,s.tvpUrl=e.currentContent.url;var d=s.tvpIsAd=!!e.currentContent.isad;if(!d&&s.tvpUrl===o.data.tvpUrl){var l=/\?/.test(s.tvpUrl)?"&":"?";s.tvpUrl+=l+"_r="+Math.random()}if(i("tvpUrl",s.tvpUrl),console.log("tvpUrl",s.tvpUrl),-1==o.data.direction){var v=e.getinforaw&&e.getinforaw.vl&&e.getinforaw.vl.vi;v&&v.length?v.some(function(e){e.vid===t&&e.vh&&e.vw&&(s.direction=e.vh<e.vw?90:0)}):a&&a.vh&&a.vw&&(s.direction=a.vh<a.vw?90:0)}if(!d){var u=e.getinforaw&&e.getinforaw.fl&&e.getinforaw.fl.fi,f="",g="";(u=u||a&&a.vecDefn)&&u.length&&(u.forEach(function(t){t.cname.replace(/([^;]+?);\(([^)]+?)\)/,function(e,i,n){t.cname=i+" "+n,t.cname_short=i}),t.selected=t.selected||!1,f||!t.selected&&!t.sl||(f=t.cname_short||"",g=t.name,t.selected=!0)}),u.reverse(),h.currDefn=g,s.formats=u,s.formats_selected=f)}o.setData(s,function(){c||setTimeout(function(){o.videoContext.play()},200),c=!1}),o.isSwitchDefn&&(o.currPlayTime&&e.currentContent.wait("start",function(){i("seek"),o.videoContext.seek(o.currPlayTime)}),o.isSwitchDefn=!1)}else i("first content change",e)}),h.on("videostart",function(t){o.triggerEvent("videostart",t)})}}},__onTvpPlay:function(t){this.setData({isPlaying:!0}),this.isNetworkChange&&(this.videoContext.seek(this.currPlayTime),this.isNetworkChange=!1);var i=this.data.playerid;e.setTvpPlayState(i,!0);var n=e.getLastPlayId();if(n!=i){if(n&&e.existTxvContext(n)){var r=e.getTxvContext(n);this.data.isNeedMutex&&r&&r.pause(),e.setTvpPlayState(n,!1)}e.setLastPlayId(i)}if(this.delayNetworkChangeReq)return this.delayNetworkChangeReq(),void(this.delayNetworkChangeReq=null);try{this.video&&this.video.onContentPlay()}finally{this.triggerEvent("play",t.detail)}},__onTvpPause:function(t){this.setData({isPlaying:!1}),e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentPause()}finally{this.triggerEvent("pause",t.detail)}},__onTvpEnded:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentEnd()}finally{t.detail=t.detail||{},t.detail.isAd=!!this.data.tvpIsAd,this.triggerEvent("ended",t.detail)}},__onTvpTimeupdate:function(t){e.setTvpPlayState(this.data.playerid,!0),this.triggerEvent("timeupdate",t.detail);try{this.setData({progressTime:Math.floor(t.detail.currentTime)}),this.video&&this.video.onContentTimeupdate(null,t)}catch(t){}},__onTvpError:function(t){e.setTvpPlayState(this.data.playerid,!1);try{this.video&&this.video.onContentError(null,t)}finally{this.triggerEvent("error",t.detail)}},__onTvpFullScreenChange:function(t){this.isEnterFullscreen=!!t.detail.fullScreen,this.triggerEvent("fullscreenchange",t.detail),this.setData({fullscreen:this.isEnterFullscreen,showControlBtn:!this.data.fullscreen&&this.isEnterFullscreen}),this.showControlBtn()},__onTvpWaiting:function(t){this.triggerEvent("waiting",t&&t.detail||{})},__onTvpProgress:function(t){this.triggerEvent("progress",t&&t.detail||{})},tapRetry:function(t){},isIpx:function(){var t=this;wx.getSystemInfo({success:function(e){"iPhone X"==e.model.substring(0,e.model.indexOf("X"))+"X"&&t.setData({isIpx:!0})}})},initBright:function(){var t=this;wx.getScreenBrightness({success:function(e){var i=e.value;t.setData({currentBright:i})}})},__onTvpCloseBright:function(){this.setData({showBrightSelector:!1,showControlBtn:!0}),this.showControlBtn()},__onTvpShowBright:function(){this.setData({showBrightSelector:!0,showControlBtn:!0})},setBright:function(t){var e=t.currentTarget.dataset.type,n=this.data.currentBright;0==e?(n-=.125)<0&&(n=0):(n+=.125)>1&&(n=1),wx.setScreenBrightness({value:n,success:function(){i("设置亮度成功",new Date)},fail:function(){i("设置亮度失败",new Date)}}),this.setData({currentBright:n})},__onTvpCloseHD:function(){this.setData({showHDSelector:!1,showControlBtn:!0}),this.showControlBtn()},__onTvpShowHD:function(){this.setData({showHDSelector:!0,showControlBtn:!0})},__onTvpTap:function(){this.data.fullscreen&&(this.setData({showControlBtn:!0}),this.showControlBtn(4500))},selectHD:function(t){if("end"!=this.data.tvpState){var e=t.currentTarget.dataset;e.fname&&!e.selected&&(this.isSwitchDefn=!0,this.currPlayTime=this.data.progressTime,this.video&&this.video.switchDefn&&this.video.switchDefn(e.fname))}},showControlBtn:function(t){var e=this;clearTimeout(this._playerHDSelectorBtnTimer),this._playerHDSelectorBtnTimer=setTimeout(function(){e.setData({showControlBtn:!1})},t||3e3)}}}); 
 			}); 	require("component/video/video.js");
 	
				global.publishDomainComponents({
			"plugin://wxa75efa648b60994b/video":"plugin-private://wxa75efa648b60994b/component/video/video","plugin://wxa75efa648b60994b/live":"plugin-private://wxa75efa648b60994b/component/live/live"
	})
				module.exports = function() {
		return require('component/txv-context.js')
	}
			});
	requirePlugin("plugin://wxa75efa648b60994b");
/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0f0e9824'])
Z([3,'_div data-v-57a98307 container flex-1 flex flex-direction-column flex-justify-center flex-align-center'])
Z([3,'default'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$p']]]],[[10],[[6],[[7],[3,'$root']],[[7],[3,'$k']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[2,'||'],[[7],[3,'$slotdefault']],[1,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'841be480'])
Z([[7],[3,'visible']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'90aa3146'])
Z([[7],[3,'advInfo']])
Z([[6],[[7],[3,'advInfo']],[3,'adv_img']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'20564238'])
Z([3,'_view data-v-c5330d06'])
Z([3,'index'])
Z([3,'news'])
Z([[7],[3,'omList']])
Z(z[2])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'0_']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3892aaa0'])
Z([[2,'&&'],[[2,'>'],[[6],[[7],[3,'omList']],[3,'length']],[1,0]],[[2,'>'],[[6],[[7],[3,'historyList']],[3,'length']],[1,0]]])
Z(z[2])
Z(z[3])
Z([[7],[3,'historyList']])
Z(z[2])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'1_']],[[7],[3,'index']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'39956948'])
Z([3,'_view data-v-2e09864f'])
Z([[2,'!'],[[7],[3,'type']]])
Z([[2,'=='],[[7],[3,'type']],[1,'quote']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0023438f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1acfa614'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6d0983ad'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2f24d1f7'])
Z([[2,'>'],[[6],[[7],[3,'investlist']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'68defc3e'])
Z([3,'_div data-v-85c62452'])
Z([3,'parentIndex'])
Z([3,'content'])
Z([[7],[3,'formateData']])
Z(z[2])
Z([[2,'&&'],[[7],[3,'formateData']],[[2,'!='],[[6],[[7],[3,'formateData']],[3,'length']],[1,0]]])
Z([3,'index'])
Z([3,'data'])
Z([[6],[[7],[3,'content']],[3,'groupList']])
Z(z[7])
Z([3,'_div data-v-85c62452 left'])
Z([[2,'=='],[[7],[3,'index']],[1,0]])
Z([[2,'=='],[[7],[3,'index']],[[2,'-'],[[6],[[6],[[7],[3,'content']],[3,'groupList']],[3,'length']],[1,1]]])
Z([[2,'>'],[[6],[[7],[3,'formateData']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'39b8e316'])
Z([3,'_view data-v-3a7796e4'])
Z([[2,'&&'],[[7],[3,'showMore']],[[2,'!'],[[7],[3,'showLoading']]]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'showNoMore']],[[2,'!'],[[7],[3,'showMore']]]],[[2,'!'],[[7],[3,'showLoading']]]])
Z([[7],[3,'showLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'678ce178'])
Z([[6],[[7],[3,'stocks']],[3,'length']])
Z([3,'index'])
Z([3,'stock'])
Z([[7],[3,'stocks']])
Z(z[2])
Z([3,'handleProxy'])
Z([3,'_view data-v-79cb29dd stock-item flex flex-pack-justify'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'1_'],[[7],[3,'index']]])
Z([[6],[[7],[3,'stock']],[3,'negative_rate']])
Z([[6],[[7],[3,'stock']],[3,'neutral_rate']])
Z([[6],[[7],[3,'stock']],[3,'positive_rate']])
Z([[6],[[7],[3,'stock']],[3,'symbol']])
Z([[7],[3,'index']])
Z([[2,'&&'],[[7],[3,'showRankNum']],[[2,'<'],[[7],[3,'index']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'2a7af61c'])
Z([[2,'!'],[[7],[3,'noNotice']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3892aaa0'])
Z([3,'handleProxy'])
Z([a,[3,'_view data-v-810882b2 '],[[4],[[5],[[5],[[2,'?:'],[[6],[[7],[3,'news']],[3,'singleImg']],[1,'flex'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'news']],[3,'readed']],[1,'read'],[1,'']]]]])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([[6],[[7],[3,'news']],[3,'singleImg']])
Z([[2,'=='],[[6],[[7],[3,'news']],[3,'label']],[1,'2']])
Z([[2,'&&'],[[6],[[7],[3,'news']],[3,'images']],[[2,'=='],[[6],[[6],[[7],[3,'news']],[3,'images']],[3,'length']],[1,3]]])
Z([[2,'!'],[[6],[[7],[3,'news']],[3,'singleImg']]])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9e209026'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4443a4c4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'notConfirmList']])
Z(z[1])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'id']],[[6],[[7],[3,'item']],[3,'title']]],[[6],[[7],[3,'item']],[3,'url']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7c332e02'])
Z([[7],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0d616550'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-155139fa-default-0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4717551d'])
Z([[6],[[7],[3,'data']],[3,'topicFlag']])
Z([[2,'&&'],[[6],[[7],[3,'data']],[3,'description']],[[2,'!='],[[6],[[7],[3,'data']],[3,'description']],[1,'undefined']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4d56c6f1'])
Z([[7],[3,'topic_info']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'22a993e8'])
Z([3,'_view data-v-51c0e8d3 wrap-market-index'])
Z([3,'handleProxy'])
Z([3,'_swiper data-v-51c0e8d3 wrap-index-group flex'])
Z([[7],[3,'$k']])
Z([1,'2'])
Z([3,'index'])
Z([3,'market'])
Z([[7],[3,'mlist']])
Z(z[6])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z([[2,'>'],[[6],[[7],[3,'mlist']],[3,'length']],[1,3]])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[6])
Z([[2,'>'],[[7],[3,'index']],[1,2]])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1dad7f9e'])
Z([3,'_view data-v-12219ca5 box-setting'])
Z([3,'_view data-v-12219ca5 bd-cont'])
Z([3,'handleProxy'])
Z([3,'_view data-v-12219ca5 layer-top-account'])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'_view data-v-12219ca5 inner flex flex-align-center'])
Z([[7],[3,'headImg']])
Z([[2,'==='],[[7],[3,'status']],[1,'yes']])
Z([[2,'==='],[[7],[3,'status']],[1,'outer_user']])
Z([[2,'==='],[[7],[3,'status']],[1,'no']])
Z([[2,'==='],[[7],[3,'status']],[1,'verify']])
Z(z[9])
Z([3,'_view data-v-12219ca5 layer-content page-main'])
Z(z[9])
Z([[2,'&&'],[[2,'==='],[[7],[3,'status']],[1,'yes']],[[2,'=='],[[7],[3,'priority']],[1,1]]])
Z(z[3])
Z([3,'_view data-v-12219ca5 row-inf flex flex-pack-justify'])
Z(z[5])
Z([1,'3'])
Z([[2,'=='],[[7],[3,'heroboardDot']],[1,1]])
Z(z[9])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4443a4c4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1dad7f9e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'61b3148e'])
Z([a,[3,'_view data-v-0f44af27 container hq-container '],[[2,'?:'],[[2,'=='],[[7],[3,'skin']],[1,'black']],[1,'skin-black'],[1,'skin-white']]])
Z([[2,'!'],[[7],[3,'isIOS']]])
Z([a,[3,'_view data-v-0f44af27 layout-fix-strategy-tab layout-fix '],[[2,'?:'],[[7],[3,'showFixed']],[1,''],[1,'hide']]])
Z([3,'handleProxy'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'0'])
Z([3,'6d0983ad'])
Z(z[4])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([1,'1'])
Z([3,'1acfa614'])
Z([3,'_view data-v-0f44af27 fix-tab-bar'])
Z(z[4])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([1,'2'])
Z(z[8])
Z(z[4])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([1,'3'])
Z(z[13])
Z(z[4])
Z(z[4])
Z([3,'_swiper data-v-0f44af27'])
Z([[7],[3,'currentTabIndex']])
Z(z[6])
Z([1,'12'])
Z([3,'250'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'?:'],[[2,'=='],[[7],[3,'currentMarketStrategy']],[1,0]],[[2,'+'],[[7],[3,'swiperHeight']],[1,'px']],[[2,'+'],[[7],[3,'swiperPickTabHeight']],[1,'px']]]],[1,';']]])
Z([[2,'&&'],[[7],[3,'mlist']],[[6],[[7],[3,'mlist']],[3,'length']]])
Z([3,'_view data-v-0f44af27 market-box'])
Z([3,'market-a'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'22a993e8'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0023438f'])
Z([3,'热门行业板块'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'6']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[39])
Z([3,'热门概念板块'])
Z([3,'index'])
Z([3,'stock'])
Z([[6],[[7],[3,'HSList']],[3,'hsmarketStock']])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,0]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,5]]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'65c095a0'])
Z([3,'kchRank'])
Z([[2,'&&'],[[7],[3,'hkMlist']],[[6],[[7],[3,'hkMlist']],[3,'length']]])
Z(z[34])
Z([3,'market-hk'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'11']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[37])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'12']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[39])
Z(z[40])
Z(z[44])
Z(z[45])
Z([[6],[[7],[3,'HKList']],[3,'hkmarketStock']])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,2]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,5]]])
Z([[2,'&&'],[[7],[3,'usMlist']],[[6],[[7],[3,'usMlist']],[3,'length']]])
Z(z[34])
Z([3,'market-us'])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'15']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[37])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'16']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[39])
Z(z[40])
Z(z[44])
Z(z[45])
Z([[6],[[7],[3,'USList']],[3,'usmarketStock']])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,3]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,5]]])
Z(z[4])
Z(z[4])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'19']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[6])
Z([1,'13'])
Z([3,'9e209026'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'61b3148e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'efe38a00'])
Z([3,'_view data-v-0ef74f07'])
Z([3,'height: 100%'])
Z([3,'handleProxy'])
Z([a,[3,'_view data-v-0ef74f07 '],[[4],[[5],[[5],[[5],[[5],[1,'choose-index']],[1,'container']],[[2,'+'],[1,'skin-'],[[7],[3,'skin']]]],[[2,'?:'],[[2,'||'],[[2,'||'],[[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,0]],[[6],[[7],[3,'slist']],[3,'length']]],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,1]],[[6],[[7],[3,'alist']],[3,'length']]]],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,2]],[[6],[[7],[3,'hklist']],[3,'length']]]],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,3]],[[6],[[7],[3,'uslist']],[3,'length']]]],[1,''],[1,'show-no-cont']]]]])
Z([[7],[3,'$k']])
Z([1,'53'])
Z([[2,'!'],[[7],[3,'isIOS']]])
Z([[7],[3,'showMarketTipBar']])
Z([a,z[4][1],[[4],[[5],[[5],[1,'hd-cont']],[[2,'?:'],[[7],[3,'isIOS']],[1,'fix-list-title'],[1,'']]]]])
Z([a,[3,' '],[[2,'?:'],[[7],[3,'isIOS']],[1,''],[[2,'+'],[[2,'+'],[1,'position:'],[1,'relative']],[1,';']]]])
Z(z[8])
Z([[7],[3,'showMarqueeProbe']])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[3])
Z([3,'_swiper data-v-0ef74f07'])
Z([[7],[3,'currentTab']])
Z(z[5])
Z([1,'52'])
Z([3,'250'])
Z([a,z[10][1],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'+'],[[7],[3,'swiperHeight']],[1,2]],[1,'px']]],[1,';']]])
Z([3,'_view data-v-0ef74f07 stock-list'])
Z([a,z[10][1],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'position:'],[1,'relative']],[1,';']],[1,'min-height:']],[[2,'+'],[[7],[3,'swiperHeight']],[1,'px']]],[1,';']]])
Z([3,'index'])
Z([3,'stock'])
Z([[7],[3,'slist']])
Z(z[25])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,0]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,20]]])
Z(z[3])
Z(z[3])
Z([a,z[4][1],[[4],[[5],[[5],[[5],[[5],[[5],[1,'list-item']],[[7],[3,'operateIndex']]],[[7],[3,'tapIndex']]],[[2,'?:'],[[2,'||'],[[2,'=='],[[7],[3,'index']],[[7],[3,'operateIndex']]],[[2,'=='],[[7],[3,'index']],[[7],[3,'tapIndex']]]],[1,'long-tap'],[1,'']]],[[6],[[7],[3,'stock']],[3,'riseClass']]]]])
Z(z[5])
Z([[6],[[7],[3,'stock']],[3,'price']])
Z([[2,'+'],[1,'21_'],[[7],[3,'index']]])
Z([3,'zixuan'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'stock']],[3,'isIndex']])
Z([[6],[[7],[3,'stock']],[3,'type']])
Z([[6],[[7],[3,'stock']],[3,'scode']])
Z([[6],[[7],[3,'stock']],[3,'rise']])
Z([[6],[[7],[3,'stock']],[3,'rise_per']])
Z(z[37])
Z([3,'_view data-v-0ef74f07 li-wrap flex flex-align-center flex-pack-justify'])
Z([[6],[[7],[3,'stock']],[3,'isHold']])
Z(z[3])
Z([3,'_view data-v-0ef74f07 row-c'])
Z(z[5])
Z([[2,'+'],[1,'18_'],[[7],[3,'index']]])
Z([[2,'!='],[[7],[3,'riseColumn']],[1,'zsz']])
Z([[2,'=='],[[7],[3,'riseColumn']],[1,'zsz']])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'operateIndex']]])
Z([a,z[4][1],[[4],[[5],[[5],[[5],[[5],[1,'li-btn']],[1,'flex']],[1,'li-btn-1']],[[2,'?:'],[[7],[3,'isFirstItem']],[1,'li-btn-first'],[1,'']]]]])
Z([a,z[10][1],[[2,'+'],[[2,'+'],[1,'left:'],[[2,'+'],[[7],[3,'operateLeft']],[1,'px']]],[1,';']]])
Z([[2,'=='],[[7],[3,'arrowDirection']],[1,'left']])
Z([[2,'=='],[[7],[3,'arrowDirection']],[1,'right']])
Z([[2,'&&'],[[6],[[7],[3,'stock_rank']],[3,'length']],[[6],[[7],[3,'hot_plate']],[3,'length']]])
Z([3,'_view data-v-0ef74f07 rcmd-subs cold-boot-rcmd swiper-container'])
Z([[7],[3,'autoplay']])
Z(z[3])
Z([3,'true'])
Z([3,'_swiper data-v-0ef74f07 flex flex-pack-justify swiper-wrapper rcmd-cards'])
Z(z[5])
Z([1,'36'])
Z([3,'3000'])
Z([3,'#007aff'])
Z([3,'#cccccc'])
Z([3,'height:446rpx;'])
Z(z[25])
Z([3,'i'])
Z([[4],[[5],[[5],[1,0]],[1,1]]])
Z(z[25])
Z(z[3])
Z([3,'_view data-v-0ef74f07 col-flex flex-1 align-c'])
Z([[6],[[6],[[7],[3,'hot_plate']],[[7],[3,'i']]],[3,'code']])
Z(z[5])
Z([[2,'+'],[1,'28_'],[[7],[3,'index']]])
Z([[6],[[6],[[7],[3,'hot_plate']],[[7],[3,'i']]],[3,'type']])
Z([[2,'&&'],[[7],[3,'choose']],[[6],[[7],[3,'choose']],[3,'rcmd_plate']]])
Z(z[37])
Z([3,'indexJ'])
Z([3,'j'])
Z(z[71])
Z([[2,'&&'],[[6],[[6],[[7],[3,'hot_plate']],[[7],[3,'i']]],[3,'list']],[[6],[[6],[[6],[[7],[3,'hot_plate']],[[7],[3,'i']]],[3,'list']],[[7],[3,'j']]]])
Z([[2,'>'],[[6],[[7],[3,'relate_stocks']],[3,'length']],[1,0]])
Z([3,'_view data-v-0ef74f07 swiper-slide'])
Z([[2,'!'],[[7],[3,'showRelStock']]])
Z([[7],[3,'showRelStock']])
Z(z[85])
Z(z[25])
Z(z[26])
Z([[7],[3,'alist']])
Z(z[25])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,1]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,20]]])
Z(z[3])
Z(z[3])
Z([a,z[4][1],[[4],[[5],[[5],[[5],[[5],[1,'list-item']],[[2,'?:'],[[2,'||'],[[2,'=='],[[7],[3,'index']],[[7],[3,'operateIndex']]],[[2,'=='],[[7],[3,'index']],[[7],[3,'tapIndex']]]],[1,'long-tap'],[1,'']]],[[6],[[7],[3,'stock']],[3,'riseClass']]],[[6],[[7],[3,'stock']],[3,'moveDirect']]]]])
Z(z[5])
Z(z[34])
Z([[2,'+'],[1,'40_'],[[7],[3,'index']]])
Z(z[36])
Z(z[37])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z(z[37])
Z(z[44])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[5])
Z([[2,'+'],[1,'37_'],[[7],[3,'index']]])
Z(z[50])
Z(z[51])
Z(z[52])
Z([a,z[4][1],z[53][2]])
Z([a,z[10][1],z[54][2]])
Z(z[55])
Z(z[56])
Z(z[25])
Z(z[26])
Z([[7],[3,'hklist']])
Z(z[25])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,2]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,20]]])
Z(z[3])
Z(z[3])
Z([a,z[4][1],z[97][2]])
Z(z[5])
Z(z[34])
Z([[2,'+'],[1,'45_'],[[7],[3,'index']]])
Z(z[36])
Z(z[37])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z(z[37])
Z(z[44])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[5])
Z([[2,'+'],[1,'42_'],[[7],[3,'index']]])
Z(z[50])
Z(z[51])
Z(z[52])
Z([a,z[4][1],z[53][2]])
Z([a,z[10][1],z[54][2]])
Z(z[55])
Z(z[56])
Z(z[25])
Z(z[26])
Z([[7],[3,'uslist']])
Z(z[25])
Z([[2,'||'],[[2,'&&'],[[2,'=='],[[7],[3,'currentTab']],[1,3]],[[2,'<'],[[7],[3,'index']],[[7],[3,'listLength']]]],[[2,'<'],[[7],[3,'index']],[1,20]]])
Z(z[3])
Z(z[3])
Z([a,z[4][1],z[97][2]])
Z(z[5])
Z(z[34])
Z([[2,'+'],[1,'50_'],[[7],[3,'index']]])
Z(z[36])
Z(z[37])
Z(z[38])
Z(z[39])
Z(z[40])
Z(z[41])
Z(z[42])
Z(z[37])
Z(z[44])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[5])
Z([[2,'+'],[1,'47_'],[[7],[3,'index']]])
Z(z[50])
Z(z[51])
Z(z[52])
Z([a,z[4][1],z[53][2]])
Z([a,z[10][1],z[54][2]])
Z(z[55])
Z(z[56])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'8']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'90aa3146'])
Z(z[3])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([1,'54'])
Z([3,'841be480'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'efe38a00'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7042bcdd'])
Z([3,'_view data-v-b87a0338 container'])
Z([3,'_view data-v-b87a0338 lay-nav flex'])
Z([3,'ui-tab-switch'])
Z([[2,'!='],[[6],[[7],[3,'tabIds']],[1,'focus']],[1,undefined]])
Z([[2,'!='],[[6],[[7],[3,'tabIds']],[1,'om']],[1,undefined]])
Z([[2,'!='],[[6],[[7],[3,'tabIds']],[1,'current']],[1,undefined]])
Z([[2,'!='],[[6],[[7],[3,'tabIds']],[1,'choose']],[1,undefined]])
Z([3,'_view data-v-b87a0338 auto-adapt scroll-content'])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'handleProxy'])
Z([3,'_swiper data-v-b87a0338 cont-wrapper'])
Z([[7],[3,'currentTab']])
Z([[7],[3,'$k']])
Z([1,'16'])
Z([3,'250'])
Z([a,[3,' '],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'swiperHeight']],[1,'px']]],[1,';']]])
Z(z[4])
Z([3,'_view data-v-b87a0338'])
Z([3,'focus-news'])
Z([[2,'&&'],[[7],[3,'importantBanners']],[[2,'>'],[[6],[[7],[3,'importantBanners']],[3,'length']],[1,1]]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'1']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2f24d1f7'])
Z([3,'index'])
Z([3,'news'])
Z([[7],[3,'importantList']])
Z(z[28])
Z(z[15])
Z([3,'_view data-v-b87a0338 li-wrap flex'])
Z(z[18])
Z([[2,'+'],[1,'10_'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z(z[36])
Z([[2,'&&'],[[7],[3,'banner']],[[6],[[7],[3,'banner']],[3,'structData']]])
Z([a,[3,'_view data-v-b87a0338 li-cont flex-1 '],[[2,'?:'],[[6],[[7],[3,'news']],[3,'readed']],[1,'read'],[1,'']]])
Z([[2,'=='],[[6],[[7],[3,'news']],[3,'type']],[1,5]])
Z([[6],[[7],[3,'news']],[3,'label']])
Z([3,'_view data-v-b87a0338 li-img-box'])
Z([[6],[[7],[3,'news']],[3,'img']])
Z([[6],[[7],[3,'news']],[3,'video_time']])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'2']]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7c332e02'])
Z(z[5])
Z(z[23])
Z([3,'om-news'])
Z(z[15])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[18])
Z([1,'11'])
Z([3,'20564238'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'omList']],[3,'length']],[1,0]],[[2,'=='],[[6],[[7],[3,'omHistoryList']],[3,'length']],[1,0]]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'5']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[46])
Z(z[6])
Z(z[23])
Z([3,'current-day'])
Z(z[28])
Z([3,'flash'])
Z([[7],[3,'flashList']])
Z(z[28])
Z([[6],[[6],[[7],[3,'flash']],[3,'stocks']],[3,'length']])
Z([3,'_view data-v-b87a0338 stock-item-wrapper'])
Z([3,'indexStock'])
Z([3,'stock'])
Z([[6],[[7],[3,'flash']],[3,'stocks']])
Z(z[67])
Z([[2,'<'],[[7],[3,'indexStock']],[1,2]])
Z(z[15])
Z([a,[3,'_view data-v-b87a0338 related-stock-box '],[[4],[[5],[[5],[[2,'?:'],[[6],[[7],[3,'stock']],[3,'state']],[1,'stop'],[1,'']]],[[2,'?:'],[[2,'>'],[[6],[[7],[3,'stock']],[3,'zdf']],[1,0]],[1,'red'],[[2,'?:'],[[2,'<'],[[6],[[7],[3,'stock']],[3,'zdf']],[1,0]],[1,'green'],[1,'stop']]]]]])
Z(z[18])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'12_'],[[7],[3,'index']]],[1,'-']],[[7],[3,'indexStock']]])
Z(z[36])
Z([[7],[3,'indexStock']])
Z(z[77])
Z([[2,'||'],[[2,'>'],[[6],[[7],[3,'stock']],[3,'zdf']],[1,0]],[[2,'<'],[[6],[[7],[3,'stock']],[3,'zdf']],[1,0]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'flash']],[3,'stocks']],[3,'length']],[1,2]])
Z(z[67])
Z(z[68])
Z(z[69])
Z(z[67])
Z([[2,'&&'],[[2,'>'],[[7],[3,'indexStock']],[1,1]],[[2,'<'],[[7],[3,'indexStock']],[1,4]]])
Z(z[15])
Z([a,z[73][1],z[73][2]])
Z(z[18])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'13_'],[[7],[3,'index']]],[1,'-']],[[7],[3,'indexStock']]])
Z(z[36])
Z(z[77])
Z(z[77])
Z(z[79])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'7']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[46])
Z(z[7])
Z(z[23])
Z([3,'my-choose'])
Z([[6],[[7],[3,'chooseList']],[3,'length']])
Z([[2,'||'],[[2,'!'],[[7],[3,'chooseList']]],[[2,'=='],[[6],[[7],[3,'chooseList']],[3,'length']],[1,0]]])
Z([[9],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9']]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[46])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7042bcdd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'17b17210'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'17b17210'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'65c095a0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/Empty.vue.wxml','/components/slots','./components/addToMyMpGuide.vue.wxml','./components/advClgg.vue.wxml','./components/aikanNews.vue.wxml','/components/omItem.vue.wxml','./components/diversionPopup.vue.wxml','./components/hotBlock.vue.wxml','./components/inc_market_tab_bar.vue.wxml','./components/inc_strategy_tab_bar.vue.wxml','./components/investNews.vue.wxml','./components/list/LoadTzbdList.vue.wxml','./components/loadingOrMore.vue.wxml','./components/newsStock.vue.wxml','./components/notices.vue.wxml','./components/omItem.vue.wxml','./components/popup.vue.wxml','./components/privpopup.vue.wxml','./components/reachBottom.vue.wxml','./components/replyBox.vue.wxml','./components/slots.wxml','/components/privpopup.vue.wxml','/components/list/LoadTzbdList.vue.wxml','/components/loadingOrMore.vue.wxml','/components/replyBox.vue.wxml','/pages/newsCon/components/relatedStock.vue.wxml','/pages/newsCon/components/newBody.vue.wxml','/pages/newsCon/components/relatedNews.vue.wxml','/components/notices.vue.wxml','/components/topicArea.vue.wxml','/components/Empty.vue.wxml','/pages/choose/components/BatchItem.vue.wxml','/pages/choose/components/CheckBox.vue.wxml','/components/advClgg.vue.wxml','/components/addToMyMpGuide.vue.wxml','/components/investNews.vue.wxml','/components/reachBottom.vue.wxml','/components/aikanNews.vue.wxml','/components/inc_strategy_tab_bar.vue.wxml','/components/inc_market_tab_bar.vue.wxml','/components/zhishuSwiper.vue.wxml','/components/hotBlock.vue.wxml','/pages/kch/rank.vue.wxml','/components/popup.vue.wxml','./components/topicArea.vue.wxml','./components/topicTimeLine.vue.wxml','./components/zhishuSwiper.vue.wxml','./pages/index/account/index.vue.wxml','./pages/index/account/main.wxml','/pages/index/account/index.vue.wxml','./pages/index/hq/index.vue.wxml','./pages/index/hq/main.wxml','/pages/index/hq/index.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','/pages/index/index.vue.wxml','./pages/index/information/index.vue.wxml','./pages/index/information/main.wxml','/pages/index/information/index.vue.wxml','./pages/index/strategy/index.vue.wxml','./pages/index/strategy/main.wxml','/pages/index/strategy/index.vue.wxml','./pages/kch/rank.vue.wxml'];d_[x[0]]={}
d_[x[0]]["0f0e9824"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':0f0e9824'
r.wxVkey=b
gg.f=$gdc(f_["./components/Empty.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=_oz(z,4,e,s,gg)
var fE=_gd(x[0],oD,e_,d_)
if(fE){
var cF=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[0],1,357)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["default"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':default'
r.wxVkey=b
gg.f=$gdc(f_["./components/Empty.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["841be480"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':841be480'
r.wxVkey=b
gg.f=$gdc(f_["./components/addToMyMpGuide.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["90aa3146"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':90aa3146'
r.wxVkey=b
gg.f=$gdc(f_["./components/advClgg.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
d_[x[4]]["20564238"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':20564238'
r.wxVkey=b
gg.f=$gdc(f_["./components/aikanNews.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,7,hG,cF,gg)
var aL=_gd(x[4],lK,e_,d_)
if(aL){
var tM=_1z(z,6,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[4],1,372)
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'news','index','index')
var xC=_v()
_(oB,xC)
if(_oz(z,8,e,s,gg)){xC.wxVkey=1
}
var eN=_v()
_(oB,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,14,xQ,oP,gg)
var oV=_gd(x[4],hU,e_,d_)
if(oV){
var cW=_1z(z,13,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[4],1,1008)
return oR
}
eN.wxXCkey=2
_2z(z,11,bO,e,s,gg,eN,'news','index','index')
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cF=e_[x[4]].i
_ai(cF,x[5],e_,x[4],1,1)
cF.pop()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["39956948"]=function(e,s,r,gg){
var z=gz$gwx_5()
var b=x[6]+':39956948'
r.wxVkey=b
gg.f=$gdc(f_["./components/diversionPopup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
d_[x[7]]["0023438f"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':0023438f'
r.wxVkey=b
gg.f=$gdc(f_["./components/hotBlock.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["1acfa614"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[8]+':1acfa614'
r.wxVkey=b
gg.f=$gdc(f_["./components/inc_market_tab_bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
d_[x[9]]["6d0983ad"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[9]+':6d0983ad'
r.wxVkey=b
gg.f=$gdc(f_["./components/inc_strategy_tab_bar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
d_[x[10]]["2f24d1f7"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[10]+':2f24d1f7'
r.wxVkey=b
gg.f=$gdc(f_["./components/investNews.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[10]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
d_[x[11]]["68defc3e"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[11]+':68defc3e'
r.wxVkey=b
gg.f=$gdc(f_["./components/list/LoadTzbdList.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_v()
_(oB,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
if(_oz(z,6,hG,cF,gg)){oJ.wxVkey=1
var lK=_v()
_(oJ,lK)
var aL=function(eN,tM,bO,gg){
var xQ=_n('view')
_rz(z,xQ,'class',11,eN,tM,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,12,eN,tM,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,13,eN,tM,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
_(bO,xQ)
return bO
}
lK.wxXCkey=2
_2z(z,9,aL,hG,cF,gg,lK,'data','index','index')
}
oJ.wxXCkey=1
return oH
}
oD.wxXCkey=2
_2z(z,4,fE,e,s,gg,oD,'content','parentIndex','parentIndex')
var xC=_v()
_(oB,xC)
if(_oz(z,14,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[11]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
d_[x[12]]["39b8e316"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[12]+':39b8e316'
r.wxVkey=b
gg.f=$gdc(f_["./components/loadingOrMore.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,4,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[12]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
d_[x[13]]["678ce178"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[13]+':678ce178'
r.wxVkey=b
gg.f=$gdc(f_["./components/newsStock.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_mz(z,'view',['bindtap',6,'class',1,'data-comkey',2,'data-eventid',3,'data-negative-rate',4,'data-neutral-rate',5,'data-positive-rate',6,'data-symbol',7,'key',8],[],cF,fE,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,15,cF,fE,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,4,oD,e,s,gg,xC,'stock','index','index')
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[13]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
d_[x[14]]["2a7af61c"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[14]+':2a7af61c'
r.wxVkey=b
gg.f=$gdc(f_["./components/notices.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[14]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
d_[x[15]]["3892aaa0"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[15]+':3892aaa0'
r.wxVkey=b
gg.f=$gdc(f_["./components/omItem.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[15]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['bindtap',1,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
var hG=_v()
_(xC,hG)
if(_oz(z,6,e,s,gg)){hG.wxVkey=1
}
hG.wxXCkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oB,cF)
if(_oz(z,9,e,s,gg)){cF.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[15]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
d_[x[16]]["9e209026"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[16]+':9e209026'
r.wxVkey=b
gg.f=$gdc(f_["./components/popup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[16]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
d_[x[17]]["4443a4c4"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[17]+':4443a4c4'
r.wxVkey=b
gg.f=$gdc(f_["./components/privpopup.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,5,fE,oD,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','index')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[17]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
d_[x[18]]["7c332e02"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[18]+':7c332e02'
r.wxVkey=b
gg.f=$gdc(f_["./components/reachBottom.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[18]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[18]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
d_[x[19]]["0d616550"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[19]+':0d616550'
r.wxVkey=b
gg.f=$gdc(f_["./components/replyBox.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[19]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
d_[x[20]]["data-v-155139fa-default-0"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[20]+':data-v-155139fa-default-0'
r.wxVkey=b
gg.f=$gdc(f_["./components/slots.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oV=e_[x[20]].i
_ai(oV,x[21],e_,x[20],1,1)
_ai(oV,x[22],e_,x[20],3,2)
_ai(oV,x[23],e_,x[20],4,2)
_ai(oV,x[24],e_,x[20],4,53)
_ai(oV,x[25],e_,x[20],5,2)
_ai(oV,x[26],e_,x[20],5,66)
_ai(oV,x[27],e_,x[20],5,125)
_ai(oV,x[23],e_,x[20],6,2)
_ai(oV,x[28],e_,x[20],7,2)
_ai(oV,x[29],e_,x[20],7,47)
_ai(oV,x[23],e_,x[20],7,94)
_ai(oV,x[24],e_,x[20],7,145)
_ai(oV,x[30],e_,x[20],8,2)
_ai(oV,x[31],e_,x[20],8,45)
_ai(oV,x[32],e_,x[20],8,105)
_ai(oV,x[33],e_,x[20],9,2)
_ai(oV,x[34],e_,x[20],9,47)
_ai(oV,x[35],e_,x[20],10,2)
_ai(oV,x[36],e_,x[20],10,50)
_ai(oV,x[37],e_,x[20],10,99)
_ai(oV,x[32],e_,x[20],12,2)
_ai(oV,x[38],e_,x[20],13,2)
_ai(oV,x[39],e_,x[20],13,60)
_ai(oV,x[40],e_,x[20],13,116)
_ai(oV,x[41],e_,x[20],13,166)
_ai(oV,x[42],e_,x[20],13,212)
_ai(oV,x[43],e_,x[20],13,253)
_ai(oV,x[5],e_,x[20],14,2)
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
oV.pop()
return r
}
e_[x[20]]={f:m18,j:[],i:[],ti:[x[21],x[22],x[23],x[24],x[25],x[26],x[27],x[23],x[28],x[29],x[23],x[24],x[30],x[31],x[32],x[33],x[34],x[35],x[36],x[37],x[32],x[38],x[39],x[40],x[41],x[42],x[43],x[5]],ic:[]}
d_[x[44]]={}
d_[x[44]]["4717551d"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[44]+':4717551d'
r.wxVkey=b
gg.f=$gdc(f_["./components/topicArea.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[44]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[44]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
d_[x[45]]["4d56c6f1"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[45]+':4d56c6f1'
r.wxVkey=b
gg.f=$gdc(f_["./components/topicTimeLine.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[45]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[45]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
d_[x[46]]["22a993e8"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[46]+':22a993e8'
r.wxVkey=b
gg.f=$gdc(f_["./components/zhishuSwiper.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_mz(z,'swiper',['bindchange',2,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cF=_v()
_(oD,cF)
var hG=function(cI,oH,oJ,gg){
var aL=_v()
_(oJ,aL)
if(_oz(z,10,cI,oH,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
return oJ
}
cF.wxXCkey=2
_2z(z,8,hG,e,s,gg,cF,'market','index','index')
var fE=_v()
_(oD,fE)
if(_oz(z,11,e,s,gg)){fE.wxVkey=1
var tM=_v()
_(fE,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_v()
_(xQ,fS)
if(_oz(z,16,oP,bO,gg)){fS.wxVkey=1
}
fS.wxXCkey=1
return xQ
}
tM.wxXCkey=2
_2z(z,14,eN,e,s,gg,tM,'market','index','index')
}
fE.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,17,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[46]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
d_[x[47]]["1dad7f9e"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[47]+':1dad7f9e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/account/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[47]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',7,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,8,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,9,e,s,gg)){oH.wxVkey=1
}
var cI=_v()
_(cF,cI)
if(_oz(z,10,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(cF,oJ)
if(_oz(z,11,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cF,lK)
if(_oz(z,12,e,s,gg)){lK.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
_(oD,cF)
var fE=_v()
_(oD,fE)
if(_oz(z,13,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
_(xC,oD)
var aL=_n('view')
_rz(z,aL,'class',14,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,15,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,16,e,s,gg)){eN.wxVkey=1
var oP=_mz(z,'view',['bindtap',17,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,21,e,s,gg)){xQ.wxVkey=1
}
xQ.wxXCkey=1
_(eN,oP)
}
var bO=_v()
_(aL,bO)
if(_oz(z,22,e,s,gg)){bO.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
_(xC,aL)
_(oB,xC)
var oR=_v()
_(oB,oR)
var fS=_oz(z,24,e,s,gg)
var cT=_gd(x[47],fS,e_,d_)
if(cT){
var hU=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[47],3,2349)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var t1=e_[x[47]].i
_ai(t1,x[21],e_,x[47],1,1)
t1.pop()
return r
}
e_[x[47]]={f:m22,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[48]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var b3=e_[x[48]].i
_ai(b3,x[49],e_,x[48],1,1)
var o4=_v()
_(r,o4)
var x5=_oz(z,1,e,s,gg)
var o6=_gd(x[48],x5,e_,d_)
if(o6){
var f7=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o4.wxXCkey=3
o6(f7,f7,o4,gg)
gg.f=cur_globalf
}
else _w(x5,x[48],1,65)
b3.pop()
return r
}
e_[x[48]]={f:m23,j:[],i:[],ti:[x[49]],ic:[]}
d_[x[50]]={}
d_[x[50]]["61b3148e"]=function(e,s,r,gg){
var z=gz$gwx_25()
var b=x[50]+':61b3148e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/hq/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[50]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_v()
_(oD,fE)
var cF=_oz(z,8,e,s,gg)
var hG=_gd(x[50],cF,e_,d_)
if(hG){
var oH=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[50],1,748)
var cI=_v()
_(oD,cI)
var oJ=_oz(z,13,e,s,gg)
var lK=_gd(x[50],oJ,e_,d_)
if(lK){
var aL=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[50],1,989)
_(xC,oD)
}
var tM=_n('view')
_rz(z,tM,'class',14,e,s,gg)
var eN=_v()
_(tM,eN)
var bO=_oz(z,19,e,s,gg)
var oP=_gd(x[50],bO,e_,d_)
if(oP){
var xQ=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[50],1,1275)
var oR=_v()
_(tM,oR)
var fS=_oz(z,24,e,s,gg)
var cT=_gd(x[50],fS,e_,d_)
if(cT){
var hU=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[50],1,1516)
_(oB,tM)
var oV=_mz(z,'swiper',['bindanimationfinish',25,'bindchange',1,'class',2,'current',3,'data-comkey',4,'data-eventid',5,'duration',6,'style',7],[],e,s,gg)
var cW=_v()
_(oV,cW)
if(_oz(z,33,e,s,gg)){cW.wxVkey=1
var aZ=_mz(z,'view',['class',34,'id',1],[],e,s,gg)
var t1=_v()
_(aZ,t1)
var e2=_oz(z,37,e,s,gg)
var b3=_gd(x[50],e2,e_,d_)
if(b3){
var o4=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[50],1,2157)
var x5=_v()
_(aZ,x5)
var o6=_oz(z,39,e,s,gg)
var f7=_gd(x[50],o6,e_,d_)
if(f7){
var c8=_1z(z,38,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[50],1,3105)
var h9=_v()
_(aZ,h9)
var o0=_oz(z,42,e,s,gg)
var cAB=_gd(x[50],o0,e_,d_)
if(cAB){
var oBB=_1z(z,41,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[50],1,3204)
var lCB=_v()
_(aZ,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_v()
_(bGB,xIB)
if(_oz(z,47,eFB,tEB,gg)){xIB.wxVkey=1
}
xIB.wxXCkey=1
return bGB
}
lCB.wxXCkey=2
_2z(z,46,aDB,e,s,gg,lCB,'stock','index','')
_(cW,aZ)
}
var oJB=_v()
_(oV,oJB)
var fKB=_oz(z,49,e,s,gg)
var cLB=_gd(x[50],fKB,e_,d_)
if(cLB){
var hMB=_1z(z,48,e,s,gg) || {}
var cur_globalf=gg.f
oJB.wxXCkey=3
cLB(hMB,hMB,oJB,gg)
gg.f=cur_globalf
}
else _w(fKB,x[50],1,5789)
var oX=_v()
_(oV,oX)
if(_oz(z,51,e,s,gg)){oX.wxVkey=1
var oNB=_mz(z,'view',['class',52,'id',1],[],e,s,gg)
var cOB=_v()
_(oNB,cOB)
var oPB=_oz(z,55,e,s,gg)
var lQB=_gd(x[50],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,54,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[50],1,6131)
var tSB=_v()
_(oNB,tSB)
var eTB=_oz(z,57,e,s,gg)
var bUB=_gd(x[50],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,56,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[50],1,6238)
var xWB=_v()
_(oNB,xWB)
var oXB=function(cZB,fYB,h1B,gg){
var c3B=_v()
_(h1B,c3B)
if(_oz(z,62,cZB,fYB,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
return h1B
}
xWB.wxXCkey=2
_2z(z,61,oXB,e,s,gg,xWB,'stock','index','')
_(oX,oNB)
}
var lY=_v()
_(oV,lY)
if(_oz(z,63,e,s,gg)){lY.wxVkey=1
var o4B=_mz(z,'view',['class',64,'id',1],[],e,s,gg)
var l5B=_v()
_(o4B,l5B)
var a6B=_oz(z,67,e,s,gg)
var t7B=_gd(x[50],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,66,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[50],1,9108)
var b9B=_v()
_(o4B,b9B)
var o0B=_oz(z,69,e,s,gg)
var xAC=_gd(x[50],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,68,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[50],1,10282)
var fCC=_v()
_(o4B,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_v()
_(cGC,lIC)
if(_oz(z,74,oFC,hEC,gg)){lIC.wxVkey=1
}
lIC.wxXCkey=1
return cGC
}
fCC.wxXCkey=2
_2z(z,73,cDC,e,s,gg,fCC,'stock','index','')
_(lY,o4B)
}
cW.wxXCkey=1
oX.wxXCkey=1
lY.wxXCkey=1
_(oB,oV)
var aJC=_v()
_(oB,aJC)
var tKC=_oz(z,80,e,s,gg)
var eLC=_gd(x[50],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,77,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[50],1,13144)
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var h9=e_[x[50]].i
_ai(h9,x[38],e_,x[50],1,1)
_ai(h9,x[39],e_,x[50],1,59)
_ai(h9,x[40],e_,x[50],1,115)
_ai(h9,x[41],e_,x[50],1,165)
_ai(h9,x[42],e_,x[50],1,211)
_ai(h9,x[43],e_,x[50],1,252)
h9.pop()
h9.pop()
h9.pop()
h9.pop()
h9.pop()
h9.pop()
return r
}
e_[x[50]]={f:m24,j:[],i:[],ti:[x[38],x[39],x[40],x[41],x[42],x[43]],ic:[]}
d_[x[51]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var cAB=e_[x[51]].i
_ai(cAB,x[52],e_,x[51],1,1)
var oBB=_v()
_(r,oBB)
var lCB=_oz(z,1,e,s,gg)
var aDB=_gd(x[51],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[51],1,60)
cAB.pop()
return r
}
e_[x[51]]={f:m25,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[53]]={}
d_[x[53]]["efe38a00"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[53]+':efe38a00'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
var oB=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xC=_mz(z,'view',['bindtap',3,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,7,e,s,gg)){oD.wxVkey=1
var fE=_v()
_(oD,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
}
fE.wxXCkey=1
}
var cF=_mz(z,'view',['class',9,'style',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,11,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(xC,cF)
var cI=_mz(z,'swiper',['bindanimationfinish',13,'bindchange',1,'bindtouchend',2,'bindtouchstart',3,'class',4,'current',5,'data-comkey',6,'data-eventid',7,'duration',8,'style',9],[],e,s,gg)
var oJ=_mz(z,'view',['class',23,'style',1],[],e,s,gg)
var aL=_v()
_(oJ,aL)
var tM=function(bO,eN,oP,gg){
var oR=_v()
_(oP,oR)
if(_oz(z,29,bO,eN,gg)){oR.wxVkey=1
var fS=_mz(z,'view',['bindlongpress',30,'bindtap',1,'class',2,'data-comkey',3,'data-dqj',4,'data-eventid',5,'data-from',6,'data-index',7,'data-isindex',8,'data-market',9,'data-scode',10,'data-zde',11,'data-zdf',12,'key',13],[],bO,eN,gg)
var hU=_n('view')
_rz(z,hU,'class',44,bO,eN,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,45,bO,eN,gg)){oV.wxVkey=1
}
var cW=_mz(z,'view',['catchtap',46,'class',1,'data-comkey',2,'data-eventid',3],[],bO,eN,gg)
var oX=_v()
_(cW,oX)
if(_oz(z,50,bO,eN,gg)){oX.wxVkey=1
}
var lY=_v()
_(cW,lY)
if(_oz(z,51,bO,eN,gg)){lY.wxVkey=1
}
oX.wxXCkey=1
lY.wxXCkey=1
_(hU,cW)
oV.wxXCkey=1
_(fS,hU)
var cT=_v()
_(fS,cT)
if(_oz(z,52,bO,eN,gg)){cT.wxVkey=1
var aZ=_mz(z,'view',['class',53,'style',1],[],bO,eN,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,55,bO,eN,gg)){t1.wxVkey=1
}
var e2=_v()
_(aZ,e2)
if(_oz(z,56,bO,eN,gg)){e2.wxVkey=1
}
t1.wxXCkey=1
e2.wxXCkey=1
_(cT,aZ)
}
cT.wxXCkey=1
_(oR,fS)
}
oR.wxXCkey=1
return oP
}
aL.wxXCkey=2
_2z(z,27,tM,e,s,gg,aL,'stock','index','index')
var lK=_v()
_(oJ,lK)
if(_oz(z,57,e,s,gg)){lK.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',58,e,s,gg)
var x5=_mz(z,'swiper',['autoplay',59,'bindchange',1,'circular',2,'class',3,'data-comkey',4,'data-eventid',5,'duration',6,'indicatorActiveColor',7,'indicatorColor',8,'style',9],[],e,s,gg)
var f7=_v()
_(x5,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_mz(z,'view',['bindtap',73,'class',1,'data-code',2,'data-comkey',3,'data-eventid',4,'data-plate',5,'data-stat',6,'key',7],[],o0,h9,gg)
var aDB=_v()
_(lCB,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_v()
_(oHB,oJB)
if(_oz(z,84,bGB,eFB,gg)){oJB.wxVkey=1
}
oJB.wxXCkey=1
return oHB
}
aDB.wxXCkey=2
_2z(z,83,tEB,o0,h9,gg,aDB,'j','indexJ','')
_(cAB,lCB)
return cAB
}
f7.wxXCkey=2
_2z(z,71,c8,e,s,gg,f7,'i','index','index')
var o6=_v()
_(x5,o6)
if(_oz(z,85,e,s,gg)){o6.wxVkey=1
var fKB=_n('view')
_rz(z,fKB,'class',86,e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,87,e,s,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(fKB,hMB)
if(_oz(z,88,e,s,gg)){hMB.wxVkey=1
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(o6,fKB)
}
o6.wxXCkey=1
_(b3,x5)
var o4=_v()
_(b3,o4)
if(_oz(z,89,e,s,gg)){o4.wxVkey=1
}
o4.wxXCkey=1
_(lK,b3)
}
lK.wxXCkey=1
_(cI,oJ)
var oNB=_v()
_(cI,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_v()
_(aRB,eTB)
if(_oz(z,94,lQB,oPB,gg)){eTB.wxVkey=1
var bUB=_mz(z,'view',['bindlongpress',95,'bindtap',1,'class',2,'data-comkey',3,'data-dqj',4,'data-eventid',5,'data-from',6,'data-index',7,'data-isindex',8,'data-market',9,'data-scode',10,'data-zde',11,'data-zdf',12,'key',13],[],lQB,oPB,gg)
var xWB=_n('view')
_rz(z,xWB,'class',109,lQB,oPB,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,110,lQB,oPB,gg)){oXB.wxVkey=1
}
var fYB=_mz(z,'view',['catchtap',111,'class',1,'data-comkey',2,'data-eventid',3],[],lQB,oPB,gg)
var cZB=_v()
_(fYB,cZB)
if(_oz(z,115,lQB,oPB,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(fYB,h1B)
if(_oz(z,116,lQB,oPB,gg)){h1B.wxVkey=1
}
cZB.wxXCkey=1
h1B.wxXCkey=1
_(xWB,fYB)
oXB.wxXCkey=1
_(bUB,xWB)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,117,lQB,oPB,gg)){oVB.wxVkey=1
var o2B=_mz(z,'view',['class',118,'style',1],[],lQB,oPB,gg)
var c3B=_v()
_(o2B,c3B)
if(_oz(z,120,lQB,oPB,gg)){c3B.wxVkey=1
}
var o4B=_v()
_(o2B,o4B)
if(_oz(z,121,lQB,oPB,gg)){o4B.wxVkey=1
}
c3B.wxXCkey=1
o4B.wxXCkey=1
_(oVB,o2B)
}
oVB.wxXCkey=1
_(eTB,bUB)
}
eTB.wxXCkey=1
return aRB
}
oNB.wxXCkey=2
_2z(z,92,cOB,e,s,gg,oNB,'stock','index','index')
var l5B=_v()
_(cI,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_v()
_(b9B,xAC)
if(_oz(z,126,e8B,t7B,gg)){xAC.wxVkey=1
var oBC=_mz(z,'view',['bindlongpress',127,'bindtap',1,'class',2,'data-comkey',3,'data-dqj',4,'data-eventid',5,'data-from',6,'data-index',7,'data-isindex',8,'data-market',9,'data-scode',10,'data-zde',11,'data-zdf',12,'key',13],[],e8B,t7B,gg)
var cDC=_n('view')
_rz(z,cDC,'class',141,e8B,t7B,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,142,e8B,t7B,gg)){hEC.wxVkey=1
}
var oFC=_mz(z,'view',['catchtap',143,'class',1,'data-comkey',2,'data-eventid',3],[],e8B,t7B,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,147,e8B,t7B,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,148,e8B,t7B,gg)){oHC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
_(cDC,oFC)
hEC.wxXCkey=1
_(oBC,cDC)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,149,e8B,t7B,gg)){fCC.wxVkey=1
var lIC=_mz(z,'view',['class',150,'style',1],[],e8B,t7B,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,152,e8B,t7B,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,153,e8B,t7B,gg)){tKC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
_(fCC,lIC)
}
fCC.wxXCkey=1
_(xAC,oBC)
}
xAC.wxXCkey=1
return b9B
}
l5B.wxXCkey=2
_2z(z,124,a6B,e,s,gg,l5B,'stock','index','index')
var eLC=_v()
_(cI,eLC)
var bMC=function(xOC,oNC,oPC,gg){
var cRC=_v()
_(oPC,cRC)
if(_oz(z,158,xOC,oNC,gg)){cRC.wxVkey=1
var hSC=_mz(z,'view',['bindlongpress',159,'bindtap',1,'class',2,'data-comkey',3,'data-dqj',4,'data-eventid',5,'data-from',6,'data-index',7,'data-isindex',8,'data-market',9,'data-scode',10,'data-zde',11,'data-zdf',12,'key',13],[],xOC,oNC,gg)
var cUC=_n('view')
_rz(z,cUC,'class',173,xOC,oNC,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,174,xOC,oNC,gg)){oVC.wxVkey=1
}
var lWC=_mz(z,'view',['catchtap',175,'class',1,'data-comkey',2,'data-eventid',3],[],xOC,oNC,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,179,xOC,oNC,gg)){aXC.wxVkey=1
}
var tYC=_v()
_(lWC,tYC)
if(_oz(z,180,xOC,oNC,gg)){tYC.wxVkey=1
}
aXC.wxXCkey=1
tYC.wxXCkey=1
_(cUC,lWC)
oVC.wxXCkey=1
_(hSC,cUC)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,181,xOC,oNC,gg)){oTC.wxVkey=1
var eZC=_mz(z,'view',['class',182,'style',1],[],xOC,oNC,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,184,xOC,oNC,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(eZC,o2C)
if(_oz(z,185,xOC,oNC,gg)){o2C.wxVkey=1
}
b1C.wxXCkey=1
o2C.wxXCkey=1
_(oTC,eZC)
}
oTC.wxXCkey=1
_(cRC,hSC)
}
cRC.wxXCkey=1
return oPC
}
eLC.wxXCkey=2
_2z(z,156,bMC,e,s,gg,eLC,'stock','index','index')
_(xC,cI)
oD.wxXCkey=1
_(oB,xC)
var x3C=_v()
_(oB,x3C)
var o4C=_oz(z,187,e,s,gg)
var f5C=_gd(x[53],o4C,e_,d_)
if(f5C){
var c6C=_1z(z,186,e,s,gg) || {}
var cur_globalf=gg.f
x3C.wxXCkey=3
f5C(c6C,c6C,x3C,gg)
gg.f=cur_globalf
}
else _w(o4C,x[53],1,30483)
var h7C=_v()
_(oB,h7C)
var o8C=_oz(z,192,e,s,gg)
var c9C=_gd(x[53],o8C,e_,d_)
if(c9C){
var o0C=_1z(z,189,e,s,gg) || {}
var cur_globalf=gg.f
h7C.wxXCkey=3
c9C(o0C,o0C,h7C,gg)
gg.f=cur_globalf
}
else _w(o8C,x[53],1,30660)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var bGB=e_[x[53]].i
_ai(bGB,x[33],e_,x[53],1,1)
_ai(bGB,x[34],e_,x[53],1,46)
bGB.pop()
bGB.pop()
return r
}
e_[x[53]]={f:m26,j:[],i:[],ti:[x[33],x[34]],ic:[]}
d_[x[54]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xIB=e_[x[54]].i
_ai(xIB,x[55],e_,x[54],1,1)
var oJB=_v()
_(r,oJB)
var fKB=_oz(z,1,e,s,gg)
var cLB=_gd(x[54],fKB,e_,d_)
if(cLB){
var hMB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oJB.wxXCkey=3
cLB(hMB,hMB,oJB,gg)
gg.f=cur_globalf
}
else _w(fKB,x[54],1,57)
xIB.pop()
return r
}
e_[x[54]]={f:m27,j:[],i:[],ti:[x[55]],ic:[]}
d_[x[56]]={}
d_[x[56]]["7042bcdd"]=function(e,s,r,gg){
var z=gz$gwx_29()
var b=x[56]+':7042bcdd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/information/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_mz(z,'view',['class',2,'id',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,5,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,6,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(xC,hG)
if(_oz(z,7,e,s,gg)){hG.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,xC)
var oH=_n('view')
_rz(z,oH,'class',8,e,s,gg)
var cI=_mz(z,'view',['class',9,'id',1],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,11,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,12,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(cI,aL)
if(_oz(z,13,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(cI,tM)
if(_oz(z,14,e,s,gg)){tM.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
_(oH,cI)
var eN=_mz(z,'swiper',['bindchange',15,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5,'style',6],[],e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,22,e,s,gg)){bO.wxVkey=1
var fS=_mz(z,'view',['class',23,'id',1],[],e,s,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,25,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(fS,hU)
var oV=_oz(z,27,e,s,gg)
var cW=_gd(x[56],oV,e_,d_)
if(cW){
var oX=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[56],3,480)
var lY=_v()
_(fS,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'view',['bindtap',32,'class',1,'data-comkey',2,'data-eventid',3,'data-index',4,'key',5,'scopeData',6],[],e2,t1,gg)
var o6=_n('view')
_rz(z,o6,'class',39,e2,t1,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,40,e2,t1,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,41,e2,t1,gg)){c8.wxVkey=1
}
f7.wxXCkey=1
c8.wxXCkey=1
_(x5,o6)
var h9=_n('view')
_rz(z,h9,'class',42,e2,t1,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,43,e2,t1,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,44,e2,t1,gg)){cAB.wxVkey=1
}
o0.wxXCkey=1
cAB.wxXCkey=1
_(x5,h9)
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,30,aZ,e,s,gg,lY,'news','index','index')
var oBB=_v()
_(fS,oBB)
var lCB=_oz(z,46,e,s,gg)
var aDB=_gd(x[56],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,45,e,s,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[56],7,632)
cT.wxXCkey=1
_(bO,fS)
}
var oP=_v()
_(eN,oP)
if(_oz(z,47,e,s,gg)){oP.wxVkey=1
var eFB=_mz(z,'view',['class',48,'id',1],[],e,s,gg)
var oHB=_v()
_(eFB,oHB)
var xIB=_oz(z,54,e,s,gg)
var oJB=_gd(x[56],xIB,e_,d_)
if(oJB){
var fKB=_1z(z,51,e,s,gg) || {}
var cur_globalf=gg.f
oHB.wxXCkey=3
oJB(fKB,fKB,oHB,gg)
gg.f=cur_globalf
}
else _w(xIB,x[56],7,1143)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,55,e,s,gg)){bGB.wxVkey=1
}
var cLB=_v()
_(eFB,cLB)
var hMB=_oz(z,57,e,s,gg)
var oNB=_gd(x[56],hMB,e_,d_)
if(oNB){
var cOB=_1z(z,56,e,s,gg) || {}
var cur_globalf=gg.f
cLB.wxXCkey=3
oNB(cOB,cOB,cLB,gg)
gg.f=cur_globalf
}
else _w(hMB,x[56],7,1494)
bGB.wxXCkey=1
_(oP,eFB)
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,58,e,s,gg)){xQ.wxVkey=1
var oPB=_mz(z,'view',['class',59,'id',1],[],e,s,gg)
var lQB=_v()
_(oPB,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
if(_oz(z,65,eTB,tSB,gg)){xWB.wxVkey=1
var oXB=_n('view')
_rz(z,oXB,'class',66,eTB,tSB,gg)
var cZB=_v()
_(oXB,cZB)
var h1B=function(c3B,o2B,o4B,gg){
var a6B=_v()
_(o4B,a6B)
if(_oz(z,71,c3B,o2B,gg)){a6B.wxVkey=1
var t7B=_mz(z,'view',['bindtap',72,'class',1,'data-comkey',2,'data-eventid',3,'data-findex',4,'data-index',5,'key',6],[],c3B,o2B,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,79,c3B,o2B,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
_(a6B,t7B)
}
a6B.wxXCkey=1
return o4B
}
cZB.wxXCkey=2
_2z(z,69,h1B,eTB,tSB,gg,cZB,'stock','indexStock','indexStock')
var fYB=_v()
_(oXB,fYB)
if(_oz(z,80,eTB,tSB,gg)){fYB.wxVkey=1
var b9B=_v()
_(fYB,b9B)
var o0B=function(oBC,xAC,fCC,gg){
var hEC=_v()
_(fCC,hEC)
if(_oz(z,85,oBC,xAC,gg)){hEC.wxVkey=1
var oFC=_mz(z,'view',['bindtap',86,'class',1,'data-comkey',2,'data-eventid',3,'data-findex',4,'data-index',5,'key',6],[],oBC,xAC,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,93,oBC,xAC,gg)){cGC.wxVkey=1
}
cGC.wxXCkey=1
_(hEC,oFC)
}
hEC.wxXCkey=1
return fCC
}
b9B.wxXCkey=2
_2z(z,83,o0B,eTB,tSB,gg,b9B,'stock','indexStock','indexStock')
}
fYB.wxXCkey=1
_(xWB,oXB)
}
xWB.wxXCkey=1
return bUB
}
lQB.wxXCkey=2
_2z(z,63,aRB,e,s,gg,lQB,'flash','index','index')
var oHC=_v()
_(oPB,oHC)
var lIC=_oz(z,95,e,s,gg)
var aJC=_gd(x[56],lIC,e_,d_)
if(aJC){
var tKC=_1z(z,94,e,s,gg) || {}
var cur_globalf=gg.f
oHC.wxXCkey=3
aJC(tKC,tKC,oHC,gg)
gg.f=cur_globalf
}
else _w(lIC,x[56],7,4336)
_(xQ,oPB)
}
var oR=_v()
_(eN,oR)
if(_oz(z,96,e,s,gg)){oR.wxVkey=1
var eLC=_mz(z,'view',['class',97,'id',1],[],e,s,gg)
var bMC=_v()
_(eLC,bMC)
if(_oz(z,99,e,s,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(eLC,oNC)
if(_oz(z,100,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(eLC,xOC)
var oPC=_oz(z,102,e,s,gg)
var fQC=_gd(x[56],oPC,e_,d_)
if(fQC){
var cRC=_1z(z,101,e,s,gg) || {}
var cur_globalf=gg.f
xOC.wxXCkey=3
fQC(cRC,cRC,xOC,gg)
gg.f=cur_globalf
}
else _w(oPC,x[56],7,6059)
bMC.wxXCkey=1
oNC.wxXCkey=1
_(oR,eLC)
}
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(oH,eN)
_(oB,oH)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var cOB=e_[x[56]].i
_ai(cOB,x[35],e_,x[56],1,1)
_ai(cOB,x[36],e_,x[56],1,49)
_ai(cOB,x[37],e_,x[56],1,98)
cOB.pop()
cOB.pop()
cOB.pop()
return r
}
e_[x[56]]={f:m28,j:[],i:[],ti:[x[35],x[36],x[37]],ic:[]}
d_[x[57]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var lQB=e_[x[57]].i
_ai(lQB,x[58],e_,x[57],1,1)
var aRB=_v()
_(r,aRB)
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[57],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[57],1,69)
lQB.pop()
return r
}
e_[x[57]]={f:m29,j:[],i:[],ti:[x[58]],ic:[]}
d_[x[59]]={}
d_[x[59]]["17b17210"]=function(e,s,r,gg){
var z=gz$gwx_31()
var b=x[59]+':17b17210'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/strategy/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[59]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[59]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[60]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var oXB=e_[x[60]].i
_ai(oXB,x[61],e_,x[60],1,1)
var fYB=_v()
_(r,fYB)
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[60],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[60],1,66)
oXB.pop()
return r
}
e_[x[60]]={f:m31,j:[],i:[],ti:[x[61]],ic:[]}
d_[x[62]]={}
d_[x[62]]["65c095a0"]=function(e,s,r,gg){
var z=gz$gwx_33()
var b=x[62]+':65c095a0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/kch/rank.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[62]]={f:m32,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['pages/index/account/main.json'] = {"enablePullDownRefresh":false,"disableScroll":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/account/main.wxml'] = [$gwx, './pages/index/account/main.wxml'];else __wxAppCode__['pages/index/account/main.wxml'] = $gwx( './pages/index/account/main.wxml' );
		__wxAppCode__['pages/index/hq/main.json'] = {"enablePullDownRefresh":true,"disableScroll":false,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/hq/main.wxml'] = [$gwx, './pages/index/hq/main.wxml'];else __wxAppCode__['pages/index/hq/main.wxml'] = $gwx( './pages/index/hq/main.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"enablePullDownRefresh":true,"disableScroll":false,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/index/information/main.json'] = {"enablePullDownRefresh":true,"disableScroll":false,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/information/main.wxml'] = [$gwx, './pages/index/information/main.wxml'];else __wxAppCode__['pages/index/information/main.wxml'] = $gwx( './pages/index/information/main.wxml' );
		__wxAppCode__['pages/index/strategy/main.json'] = {"enablePullDownRefresh":true,"disableScroll":false,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/strategy/main.wxml'] = [$gwx, './pages/index/strategy/main.wxml'];else __wxAppCode__['pages/index/strategy/main.wxml'] = $gwx( './pages/index/strategy/main.wxml' );
	
	define("common/manifest.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";!function(e){function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n=global.webpackJsonpMpvue;if(!global.webpackJsonpMpvueIsInit){global.webpackJsonpMpvueIsInit=!0,global.webpackJsonpMpvue=function(o,p,u){for(var l,c,a,f=0,i=[];f<o.length;f++)c=o[f],t[c]&&i.push(t[c][0]),t[c]=0;for(l in p)Object.prototype.hasOwnProperty.call(p,l)&&(e[l]=p[l]);for(n&&n(o,p,u);i.length;)i.shift()();if(u)for(f=0;f<u.length;f++)a=r(r.s=u[f]);return a};var o={},t={40:0};r.m=e,r.c=o,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r.oe=function(e){throw console.error(e),e}}}([]); 
 			}); 
		define("common/vendor.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};global.webpackJsonpMpvue([0],{"+7rG":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.getNewStr=function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),i=t.getHours(),a=t.getMinutes(),u=t.getSeconds();return e+"-"+r(n)+"-"+r(o)+" "+r(i)+":"+r(a)+":"+r(u)};var r=e.fillZero=function(t){return t>9?String(t):"0"+String(t)};e.slice=function(t,e,n){var r=[];if(!t)return r;e||(e=0),(!n||n>t.length-1)&&(n=t.length-1);for(var o=0;o<t.length;o++)if(!(o<e)){if(o>n)break;r.push(t[o])}return r}},"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"+tPU":function(t,e,n){n("xGkn");for(var r=n("7KvD"),o=n("hJx8"),i=n("/bQp"),a=n("dSzd")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],l=r[c],f=l&&l.prototype;f&&!f[a]&&o(f,a,c),i[c]=i.Array}},"//Fk":function(t,e,n){t.exports={default:n("U5ju"),__esModule:!0}},"/1L7":function(t,e,n){var r={version:"2.3.6",appname:"zxg",appid:"wx4ffb369b6881ee5e",publishUpdateTipStyle:"serverget"};t.exports=r},"/bQp":function(t,e){t.exports={}},"/n6Q":function(t,e,n){n("zQR9"),n("+tPU"),t.exports=n("Kh4W").f("iterator")},"/puD":function(t,e){},"/qzR":function(t,e,n){var r={isIndexStockByMarketType:function(t){return"9"===t||"i"===t||"I"===t},isMarketIndex:function(t,e){return"000001"===t&&"1"===e||"399001"===t&&"0"===e||"399006"===t&&"0"===e||"399005"===t&&"0"===e||"000300"===t&&"1"===e||"399905"===t&&"0"===e||"HSI"===t&&"2"===e||"HSCEI"===t&&"2"===e||"HSCCI"===t&&"2"===e||"DJI"===t&&"3"===e||"INX"===t&&"3"===e||"IXIC"===t&&"3"===e},isIndex:function(t,e){switch(e){case $.Env.MARKET.SA:return/^399/.test(t);case $.Env.MARKET.HA:return/^000/.test(t);default:return this.isMarketIndex(t,e)}},isDebt:function(t){return"g"===t},isTransferableApplyDebt:function(t){return"s"===t},isTransferableDebt:function(t){return"z"==t},isShenZhenAShares:function(t){return"0"==t},isShangHaiAShares:function(t){return"1"==t},isAShares:function(t){return this.isShenZhenAShares(t)||this.isShangHaiAShares(t)},isUSShares:function(t){return"3"==t},isHKShares:function(t){return"2"==t},isASharesTradeTime:function(t){return t>="0930"&&t<="1130"||t>="1300"&&t<="1500"},isHKSharesTradeTime:function(t){return t>="0930"&&t<="1200"||t>="1300"&&t<="1600"},isUSSharesTradeTime:function(t){return t>="2130"&&t<="2359"||t>="0000"&&t<="0400"},isMarketBShareByCls:function(t){return"6"==t||"7"==t},isMarketBShare:function(t,e){return"0"==e&&0==t.indexOf("20")||"1"==e&&0==t.indexOf("9")}};t.exports=r},"02iA":function(t,e,n){Array.prototype.push,Array.prototype.slice;var r=Object.prototype.toString,o=(Object.prototype.hasOwnProperty,{each:function(t,e){var n,r;if(t instanceof Array)for(n=0,r=t.length;n<r;n++)e(t[n],n,t);return t}});o.each(["Object","Arguments","Function","String","Number","Date","RegExp","Error"],function(t){o["is"+t]=function(e){return r.call(e)==="[object "+t+"]"}}),o.encode2Json=function(t){if("string"==typeof t)return t.replace(/\\x([0-9A-Fa-f]{2})/g,function(){var t=String.fromCharCode(parseInt(arguments[1],16));return'"'===t?"“":t}).replace("\n"," ").replace(/\\“/g,"“").replace(/\\/g," ")},o.extend=function(t,e){if(!o.isObject(t)||!o.isObject(e))return t;for(var n in e)t[n]=e[n];return t},o.getParameter=function(t,e,n){if(!(arguments.length<2)){n=void 0===n||n;var r={},o=e.split("&");if(o.length>0)for(var i=0,a=o.length;i<a;i++)try{if(/(.*?)=(.*)/.test(o[i])){var u=RegExp.$1,s=RegExp.$2;s=n?decodeURIComponent(s):s,r[u]=this.filterScript(s)}}catch(t){console.log(t.message)}return t?r[t]:r}},o.filterScript=function(t){return t=(t=(t=(t=(t=(t=t.toString()).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")).replace(/'/g,"&#x27;")).replace(/\//g,"&#x2f;")},o.showMsg=function(t,e){wx.showModal({title:e||"",content:t,showCancel:!1,confirmText:"确定"})},o.resCommonHandle=function(t){var e;if(t||(t={errMsg:"wx.request未返回数据",statusCode:"f2e"}),t&&"200"==t.statusCode){if("string"==typeof(e=t.data)){var n=this.encode2Json(e);e=JSON.parse(n||"{}")}return{check:!0,json:e}}return{check:!1}},o.throttle=function(t,e){var n=0;return function(){var r=+new Date;r-n>t&&(e.apply(this,arguments),n=r)}},o.convertShareChartIndicatorType=function(t){var e=["minute","fdays","day","week","month"].indexOf(t);return e>=0?e:0},o.getShareIndicatorType=function(t){var e=["minute","fdays","day","week","month"];if(t&&t.length>0)for(var n=0;n<t.length;n++)if(t[n])return e[n]||e[0];return e[0]},o.isIndexByCls=function(t){return"9"==t||"i"==t||"I"==t},t.exports=o},"041s":function(t,e,n){(function(t){function n(e,n){void 0!==t&&(t[e]=n)}Object.defineProperty(e,"__esModule",{value:!0});var r=["onLaunch","onShow","onHide","onError","onPageNotFound"],o=["onLoad","onShow","onReady","onHide","onUnload","onPulldownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];e.appHook=function(e){var o=void 0!==t?t.App:App;n("App",function(t){r.forEach(function(n){var r=t[n],o=e[n];t[n]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{o&&o.apply(this,t)}catch(t){console.error(t)}return r?r.apply(this,t):null}}),o(t)})},e.pageHook=function(e){var r=void 0!==t?t.Page:Page;n("Page",function(t){o.forEach(function(n){var r=t[n],o=e[n];t[n]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{o&&o.apply(this,t)}catch(t){console.error(t)}return r?r.apply(this,t):null}}),r(t)})},e.default={appHook:e.appHook,pageHook:e.pageHook}}).call(e,n("DuR2"))},"06OY":function(e,n,r){var o=r("3Eo+")("meta"),i=r("EqjI"),a=r("D2L2"),u=r("evD5").f,s=0,c=Object.isExtensible||function(){return!0},l=!r("S82l")(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,o,{value:{i:"O"+ ++s,w:{}}})},p=e.exports={KEY:o,NEED:!1,fastKey:function(e,n){if(!i(e))return"symbol"==(void 0===e?"undefined":t(e))?e:("string"==typeof e?"S":"P")+e;if(!a(e,o)){if(!c(e))return"F";if(!n)return"E";f(e)}return e[o].i},getWeak:function(t,e){if(!a(t,o)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[o].w},onFreeze:function(t){return l&&p.NEED&&c(t)&&!a(t,o)&&f(t),t}}},"08La":function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo");(r.prototype=new i).initialize=function(){var t,e,n,r,i=this.ctx,a=this.options,u=a.data.items,s=a.region;!0===a.clearRegion&&i.clearRect(s.x,s.y,s.width,s.height),void 0===a.maxCount&&(a.maxCount=u&&u.length),void 0===a.middleValue?(a.isNeedMiddle=!1,a.middleValue=0):a.isNeedMiddle=!0,o.each(u,function(n,r){t=void 0===t?n.value:parseFloat(o.isMore(n.value,t)?n.value:t),e=void 0===e?n.value:parseFloat(o.isLess(n.value,e)?n.value:e)}),n=Math.abs(o.sub(t,a.middleValue)),r=Math.abs(o.sub(e,a.middleValue)),a.maxDiff=o.mul(n>r?n:r,1.1),a.totalWidth=o.div(s.width,a.maxCount),a.barWidth=o.mul(a.totalWidth,.8),a.spaceWidth=o.mul(a.totalWidth,.2)},r.prototype.getX=function(t){var e=this.options;return o.mul(t,e.totalWidth)},r.prototype.getY=function(t){var e=this.options,n=e.data.items,r=o.sub(n[t].value,e.middleValue),i=e.region.height;return e.isNeedMiddle&&(i/=2),0-r/e.maxDiff*i},r.prototype.start=function(){var t=this.ctx,e=this.options,n=e.region;t.save(),e.isNeedMiddle?t.translate(n.x,n.y+n.height/2):t.translate(n.x,n.y+n.height),t.beginPath()},r.prototype.end=function(t){var e=this.ctx;e.closePath(),e.restore()},r.prototype.paintItem=function(t,e,n){var r=this.ctx,o=this.options,i=o.data.items[t];r.beginPath(),r.setFillStyle(i.color),r.rect(e,0,o.barWidth,n),r.fill()},t.exports=r},"0Dul":function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return+t<10?"0"+t:t}function i(t){var e=[],n=[],r=/(\u001c\<\d{1},[^\>\u001c]+\>\u001c)/,o=/(\x1e\[\S+\s\S+\]\x1e)|(\x1e\[\S+[\s|\S]*\S+\]\x1e)/,i=0;return t.split(/(\x1c\<\d{1},[^(\>\x1c)]+\>\x1c)|(\x1e\[\S+\s\S+\]\x1e)|(\x1e\[\S+[\s|\S]*\S+\]\x1e)/).forEach(function(t){if(t)if(t.match(r)){var a=t.match(r)[0],u=a.substr(2,a.length-4),l=u.split(":")[0].split(","),f=l[0],p=l[1],h=u.split(":")[1];1==f?++i<2&&e.push({text:h,type:"at"}):4==f&&e.push({type:"topic",text:h,topicid:p})}else if(t.match(o)){var d=t.match(o)[0],v=d.substr(2,d.length-4),g=v.split(" "),y=g[0],m=g[1];g.length>2&&(m=v.substr(v.indexOf(" ")));var _={text:m,symbol:y,type:"stock"};n.push(y),i<2&&e.push(_)}else if(i<2){var x=t.split(/\r\n|\n|\r/),b={text:"",type:"plain-br"},w={text:" ",type:"plain-br"};x.forEach(function(t,n){""===t?e.push(w):(e.push.apply(e,(0,s.default)(function(t){var e=[],n=/\[\S{1,3}\]/;return t.split(/(\[\S{1,3}\])/).forEach(function(t){try{var r=t.match(n)[0].substr(1,t.length-2),o=function(t){var e=c.indexOf(t);if(e<0)return!1;var n=Math.floor(e/20);return{page:n,id:e-20*n}}(r);if(!o)throw"not emoji";var i={type:"emoji",emojiName:r,emojiPage:o.page,emojiId:o.id,content:"emoji"+r};e.push(i)}catch(n){t&&e.push({text:t,type:"plain"})}}),e}(t))),n<x.length-1&&e.push(b))})}}),{content:e,stocks:n}}function a(t){if(t&&0!==t.length){var e=1===t.length&&function(t){if(t&&t.origin_prop){var e=t.origin_prop.split(",");if(2===e.length){var n=+e[0],r=+e[1],o=0,i=0;return n===r?(o=360,i=360):n>r?n/r<=3?(o=360,i=r/(n/360)):(o=n/(r/120),i=120):r/n<=3?(o=n/(r/360),i=360):(o=120,i=r/(n/120)),{width:Math.round(o),height:Math.round(i),mode:"scaleToFill"}}}}(t[0])||{width:224,height:224,mode:"aspectFill"};t.forEach(function(t){t&&(t.width=e.width+"rpx",t.height=e.height+"rpx",t.mode=e.mode)})}}var u=r(n("woOf")),s=r(n("Gu7T")),c=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","愉快","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","悠闲","奋斗","咒骂","疑问","嘘","晕","疯了","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","嘴唇","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","投降"];t.exports=function(t,e){var n=t.rss_list||t.content||t.comment,r=[],s=t.subject_dict||null;Array.isArray(n)?r=n:r.push(n);var c=[];return n&&r.forEach(function(e,n){if(!t.rss_list||""==e.comment_id||e.topicAd){var r=""==e.comment_id?e.subject_id:e.root_id,l=""==e.comment_id?e.subject_id:e.comment_id,f=!1;try{var p=wx.getStorageSync("illegalReport");p&&p[l]&&(f=!0)}catch(t){}var h=""!=e.comment_id,d=function(t){if(!t)return"";if("刚刚"===t)return{formatTime:t};var e=t,n=t.split("T").length,r=n>1?t.split("T")[0]:t,i=n>1?t.split("T")[1].split("+")[0]:"",a=t=r+" "+i;try{t=Date.parse(t.replace(/-/g,"/"));var u=new Date(t)||new Date(e),s=u.getFullYear(),c=new Date,l=c.getTime(),f=c.getFullYear(),p=((new Date).setHours(0,0,0,0),new Date(t)),h=o(p.getMinutes()),d=o(p.getHours()),v=parseInt(l)-parseInt(u.getTime());a=v>0&&v<=6e4?"刚刚":v>6e4&&v<=36e5?Math.floor(parseInt(v/6e4))+"分钟前":v>36e5&&v<=864e5?Math.floor(parseInt(v)/36e5)+"小时前":s==f?r.substr(r.indexOf("-")+1)+" "+d+":"+h:r+" "+d+":"+h}catch(t){}return{formatTime:a,time:r+" "+i}}(e.created_at),v=s&&s[r]?s[r]:{content:e.content};if(void 0!=v.content){var g=""==v.content?{content:[],stocks:[]}:i(v.content);v.content_array=g.content,v.stocks=g.stocks;var y=s?v.type:e.type,m=s?v.news_id:e.news_id;if(3==y&&m){var _=m.split("_")[1]||null;v.resourceType=_}var x=(0,u.default)({},e,{search_id:r,id:l,isIllegalReport:f,isReply:h,image_list:e.image_list||v.image_list,detailInfo:v,time:d.time,formatTime:d.formatTime,litype:v.type||e.publishType});a(x.image_list),c.push(x)}}}),e((0,u.default)({},t,{commentsData:c}))}},"12ER":function(t,e,n){function r(t,e){this.ctx=wx.createCanvasContext(t),this.data=e.data,this.canvasId=t,this.options=e,this.clearRect()}var o=function(t){return t&&t.__esModule?t:{default:t}}(n("woOf")),i=n("noXn"),a=n("q5c5"),u=(n("znIw"),n("7Kfv")),s=n("XsTK"),c=n("N7zV"),l=n("IKMJ"),f=n("3jpz"),p=n("zmq6"),h=n("Lh5B"),d=n("ZFFg"),v=n("iDdM"),g=n("Kgpq"),y=n("T894"),m={size:12,arrowSize:12,offsetRight:10,offsetBottom:25,color:"#26292F"},_=function(t,e,n){return t.font=e,t.measureText(n)};r.prototype={getOptions:function(){return this.options},paint:function(t){var e=this.options;e.kline.region,this.options.data=t||this.options.data,this.initliaze(),this.clearRect(),e.isHorizontalScreen&&(this.ctx.translate(e.width,0),this.ctx.rotate(90*Math.PI/180)),this.drawXAxis(),this.paintCandleLine(),e.immediatelyDrawIndicator&&this.drawVolume(),this.ctx.restore(),this.ctx.draw(),i.isWindowsEnv()||this.drawZoomButton()},initliaze:function(){var t,e,n=this.options,r=(this.options.kline.region,n.data.ks&&n.data.ks.length),o=this.getDataCount();this.startIndex=r>=o?r-o:0,this.renderData=n.data.ks.slice(this.startIndex),i.each(this.renderData,function(n,r,o){0===r?(t=n.high,e=n.low):(t=Math.max(n.high,t),e=Math.min(e,n.low))}),this.high=t,this.low=e},clearRect:function(){var t=this.ctx,e=this.options;t.clearRect(0,0,e.width,e.height)},getDataCount:function(){return this.options.dataCount},getXAxisDateType:function(){switch(this.options.chartType){case"monthLine":return"y";case"weekLine":return"ym";case"dayLine":default:return"ymd"}},paintCandleLine:function(){var t=this.ctx,e=this.options,n=e.kline;n.data={high:e.data.high,items:e.data.ks,low:e.data.low},i.extend(n,{isDraw:!1,data:{high:e.data.high,items:e.data.ks,low:e.data.low},riseColor:e.riseColor,dropColor:e.dropColor,normalColor:e.normalColor,defaultColor:e.defaultColor,maxCount:e.maxRenderCount,vGridXPos:e.vGridXPos}),e.isHorizontalScreen?n.yAxisLeft.axisCount=4:n.yAxisLeft&&(n.yAxisLeft.axisCount=2),new y(t,n).paint()},isNewBoundary:function(t,e,n,r,o){var i=e.substr(0,7),a=n.substr(0,7),u=o.length&&o[o.length-1],s=!u||r>u+100,c=parseInt(e.substr(5,2),10),l=parseInt(e.substr(0,4),10);if("dayLine"===t){if(n&&i!==a&&s)return!0}else if("weekLine"===t){if(n&&(c+1)%4==0&&i!==a&&s)return!0}else if("monthLine"===t&&n&&l%2==0&&e.substr(0,4)!==n.substr(0,4)&&s)return!0;return!1},formatAxisTime:function(t,e){return{dayLine:t.substr(0,7),weekLine:t.substr(0,7),monthLine:t.substr(0,4)}[e]},drawXAxis:function(){var t=this.options,e=this.options.kline.region,n=this.renderData.slice(Math.max((this.options.data.ks&&this.options.data.ks.length)-this.options.maxCount,0));if(t.xAxis){for(var o=t.xAxis,u=[],s=[],c=0;c<n.length;c++){var l=n[c].quoteTime,f=n[c-1]?n[c-1].quoteTime:"",p=function(n){return i.mul(n,i.div(e.width,t.maxCount))}(c),h=this.formatAxisTime(l,this.options.chartType),d=_(this.ctx,o.font+"px Arial",h);this.isNewBoundary(this.options.chartType,l,f,p,s)&&(s.push(p),(p-=d.width/2)+d.width>e.width&&(p=e.width-d.width),p<0&&(p=0),u.push({text:h,x:p}))}o.data={items:u},t.showFqLabel&&(u[0]={text:t.showFqLabel,x:0},o.showFqLabel=!0),new a(this.ctx,o).paint(),r.vGridXPos=t.vGridXPos=s}},drawVolume:function(){var t=this.ctx,e=this.options,n=e.volume;e.data,n&&(i.extend(n,{isDraw:!1,maxCount:e.maxRenderCount,data:{items:this.renderData},vGridXPos:e.vGridXPos}),n.unit=this.options.unit,new u(t,n).paint())},drawMacd:function(t){var e=this.ctx,n={};i.extend(n,t),new s(e,n).paint()},drawWr:function(t){var e=this.ctx,n={};i.extend(n,t),new l(e,n).paint()},drawDmi:function(t){var e=this.ctx,n={};i.extend(n,t),new c(e,n).paint()},drawBoll:function(t){var e=this.ctx,n={};i.extend(n,t),new f(e,n).paint()},drawKdj:function(t){var e=this.ctx,n={};i.extend(n,t),new p(e,n).paint()},drawObv:function(t){var e=this.ctx,n={};i.extend(n,t),new h(e,n).paint()},drawRsi:function(t){var e=this.ctx,n={};i.extend(n,t),new d(e,n).paint()},drawSar:function(t){var e=this.ctx,n={};i.extend(n,t),new v(e,n).paint()},drawCci:function(t){var e=this.ctx,n={};i.extend(n,t),new g(e,n).paint()},getZoomButtonArea:function(){var t=this.options,e=(0,o.default)(m,t.zoomButtonOptions||{}),n=e.size,r=e.offsetRight,i=e.offsetBottom,a=t.width-n-r,u=t.height-n-i;return{x:a,y:u,dimension:[a-n,u-n,a+n,u+n]}},drawZoomButton:function(){var t=this.ctx;t.restore();var e=this.options;if(e.showZoomButton){var n=(0,o.default)(m,e.zoomButtonOptions||{}),r=this.getZoomButtonArea(),i=n.color,a=n.size,u=n.arrowSize,s=r.x,c=r.y;t.setFillStyle(i),t.arc(s,c,a,0,2*Math.PI),t.fill(),wx.getImageInfo({src:"https://wzq.gtimg.com/resource/images/fca8973946050adeb1279280276213dd.png",success:function(e){t.drawImage(e.path,s-u/2,c-u/2,u,u),t.draw(!0)}})}}},r.Vol=u,r.Macd=s,r.Dmi=c,r.Wr=l,r.Boll=f,r.Kdj=p,r.Obv=h,r.Rsi=d,r.Sar=v,r.Cci=g,t.exports=r},"1VpI":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n("P8AU")),o=n("niax"),i=getApp();e.default={data:function(){return{stocksStorage:{}}},props:{body:{type:Array,english_news:String},summary:{type:String,default:""}},mounted:function(){var t=this;this.$on("bridge",function(e){t.checkStocksClick(e)})},methods:{onTvpPlay:function(){o.Request.reportData("xcx.info.detail.video.click")},tapstock:function(t){var e=t.currentTarget.dataset,n=e.symbol;if(e.canclick){var a={symbol:n};r.default.convertQuoteSymbol(a),i.openStock(a.scode,a.market),o.Request.reportData("news.mini.detail.stockClick"),o.Request.reportMTAData({eventName:"news.mini.detail.stockClick"})}},checkStocksClick:function(t){var e=this,n=wx.getStorageSync("clickStocks");n=n||{},this.stocksStorage=n,t.length&&o.Request.getClickStatus(t,n).then(function(t){var n=wx.getStorageSync("clickStocks");e.stocksStorage=n||{}})}}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"280F":function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=r(n("deEJ")),i=r(n("wsaK")),a=r(n("H4kx"));t.exports={mpRealTimeLog:o.default,mpReport:i.default,KeyPointReport:a.default}},"2KxR":function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"2Xkg":function(e,n,r){(function(e,o){var i;(function(){function a(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function u(t,e,n,r){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];e(r,a,n(a),t)}return r}function s(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function c(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function l(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function f(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}function p(t,e){return!!(null==t?0:t.length)&&b(t,e,0)>-1}function h(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}function d(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function v(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function g(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function y(t,e,n,r){var o=null==t?0:t.length;for(r&&o&&(n=t[--o]);o--;)n=e(n,t[o],o,t);return n}function m(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function _(t,e,n){var r;return n(t,function(t,n,o){if(e(t,n,o))return r=n,!1}),r}function x(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}function b(t,e,n){return e==e?function(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}(t,e,n):x(t,S,n)}function w(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function S(t){return t!=t}function O(t,e){var n=null==t?0:t.length;return n?C(t,e)/n:vt}function A(t){return function(e){return null==e?H:e[t]}}function k(t){return function(e){return null==t?H:t[e]}}function E(t,e,n,r,o){return o(t,function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)}),n}function C(t,e){for(var n,r=-1,o=t.length;++r<o;){var i=e(t[r]);i!==H&&(n=n===H?i:n+i)}return n}function T(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function P(t){return function(e){return t(e)}}function j(t,e){return d(e,function(e){return t[e]})}function M(t,e){return t.has(e)}function D(t,e){for(var n=-1,r=t.length;++n<r&&b(e,t[n],0)>-1;);return n}function I(t,e){for(var n=t.length;n--&&b(e,t[n],0)>-1;);return n}function L(t){return"\\"+nn[t]}function F(t){return Qe.test(t)}function R(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function N(t,e){return function(n){return t(e(n))}}function z(t,e){for(var n=-1,r=t.length,o=0,i=[];++n<r;){var a=t[n];a!==e&&a!==K||(t[n]=K,i[o++]=n)}return i}function B(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function U(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t]}),n}function q(t){return F(t)?function(t){for(var e=Ke.lastIndex=0;Ke.test(t);)++e;return e}(t):_n(t)}function W(t){return F(t)?function(t){return t.match(Ke)||[]}(t):function(t){return t.split("")}(t)}var H,V=200,G="Expected a function",X="__lodash_hash_undefined__",K="__lodash_placeholder__",Y=1,Q=2,$=4,J=1,Z=2,tt=1,et=2,nt=4,rt=8,ot=16,it=32,at=64,ut=128,st=256,ct=512,lt=800,ft=16,pt=1/0,ht=9007199254740991,dt=1.7976931348623157e308,vt=NaN,gt=4294967295,yt=gt-1,mt=gt>>>1,_t=[["ary",ut],["bind",tt],["bindKey",et],["curry",rt],["curryRight",ot],["flip",ct],["partial",it],["partialRight",at],["rearg",st]],xt="[object Arguments]",bt="[object Array]",wt="[object AsyncFunction]",St="[object Boolean]",Ot="[object Date]",At="[object DOMException]",kt="[object Error]",Et="[object Function]",Ct="[object GeneratorFunction]",Tt="[object Map]",Pt="[object Number]",jt="[object Null]",Mt="[object Object]",Dt="[object Proxy]",It="[object RegExp]",Lt="[object Set]",Ft="[object String]",Rt="[object Symbol]",Nt="[object Undefined]",zt="[object WeakMap]",Bt="[object ArrayBuffer]",Ut="[object DataView]",qt="[object Float32Array]",Wt="[object Float64Array]",Ht="[object Int8Array]",Vt="[object Int16Array]",Gt="[object Int32Array]",Xt="[object Uint8Array]",Kt="[object Uint8ClampedArray]",Yt="[object Uint16Array]",Qt="[object Uint32Array]",$t=/\b__p \+= '';/g,Jt=/\b(__p \+=) '' \+/g,Zt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,te=/&(?:amp|lt|gt|quot|#39);/g,ee=/[&<>"']/g,ne=RegExp(te.source),re=RegExp(ee.source),oe=/<%-([\s\S]+?)%>/g,ie=/<%([\s\S]+?)%>/g,ae=/<%=([\s\S]+?)%>/g,ue=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,se=/^\w*$/,ce=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,le=/[\\^$.*+?()[\]{}|]/g,fe=RegExp(le.source),pe=/^\s+|\s+$/g,he=/^\s+/,de=/\s+$/,ve=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ge=/\{\n\/\* \[wrapped with (.+)\] \*/,ye=/,? & /,me=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,_e=/\\(\\)?/g,xe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,be=/\w*$/,we=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,Oe=/^\[object .+?Constructor\]$/,Ae=/^0o[0-7]+$/i,ke=/^(?:0|[1-9]\d*)$/,Ee=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ce=/($^)/,Te=/['\n\r\u2028\u2029\\]/g,Pe="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",je="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Me="["+je+"]",De="["+Pe+"]",Ie="[a-z\\xdf-\\xf6\\xf8-\\xff]",Le="[^\\ud800-\\udfff"+je+"\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",Fe="\\ud83c[\\udffb-\\udfff]",Re="[^\\ud800-\\udfff]",Ne="(?:\\ud83c[\\udde6-\\uddff]){2}",ze="[\\ud800-\\udbff][\\udc00-\\udfff]",Be="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Ue="(?:"+Ie+"|"+Le+")",qe="(?:"+De+"|"+Fe+")?",We="[\\ufe0e\\ufe0f]?"+qe+"(?:\\u200d(?:"+[Re,Ne,ze].join("|")+")[\\ufe0e\\ufe0f]?"+qe+")*",He="(?:"+["[\\u2700-\\u27bf]",Ne,ze].join("|")+")"+We,Ve="(?:"+[Re+De+"?",De,Ne,ze,"[\\ud800-\\udfff]"].join("|")+")",Ge=RegExp("['’]","g"),Xe=RegExp(De,"g"),Ke=RegExp(Fe+"(?="+Fe+")|"+Ve+We,"g"),Ye=RegExp([Be+"?"+Ie+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Me,Be,"$"].join("|")+")","(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Me,Be+Ue,"$"].join("|")+")",Be+"?"+Ue+"+(?:['’](?:d|ll|m|re|s|t|ve))?",Be+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",He].join("|"),"g"),Qe=RegExp("[\\u200d\\ud800-\\udfff"+Pe+"\\ufe0e\\ufe0f]"),$e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Je=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ze=-1,tn={};tn[qt]=tn[Wt]=tn[Ht]=tn[Vt]=tn[Gt]=tn[Xt]=tn[Kt]=tn[Yt]=tn[Qt]=!0,tn[xt]=tn[bt]=tn[Bt]=tn[St]=tn[Ut]=tn[Ot]=tn[kt]=tn[Et]=tn[Tt]=tn[Pt]=tn[Mt]=tn[It]=tn[Lt]=tn[Ft]=tn[zt]=!1;var en={};en[xt]=en[bt]=en[Bt]=en[Ut]=en[St]=en[Ot]=en[qt]=en[Wt]=en[Ht]=en[Vt]=en[Gt]=en[Tt]=en[Pt]=en[Mt]=en[It]=en[Lt]=en[Ft]=en[Rt]=en[Xt]=en[Kt]=en[Yt]=en[Qt]=!0,en[kt]=en[Et]=en[zt]=!1;var nn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rn=parseFloat,on=parseInt,an="object"==(void 0===e?"undefined":t(e))&&e&&e.Object===Object&&e,un=("object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,{Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),sn="object"==(void 0===n?"undefined":t(n))&&n&&!n.nodeType&&n,cn=sn&&"object"==(void 0===o?"undefined":t(o))&&o&&!o.nodeType&&o,ln=cn&&cn.exports===sn,fn=ln&&an.process,pn=function(){try{return cn&&cn.require&&cn.require("util").types||fn&&fn.binding&&fn.binding("util")}catch(t){}}(),hn=pn&&pn.isArrayBuffer,dn=pn&&pn.isDate,vn=pn&&pn.isMap,gn=pn&&pn.isRegExp,yn=pn&&pn.isSet,mn=pn&&pn.isTypedArray,_n=A("length"),xn=k({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n",ſ:"s"}),bn=k({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),wn=k({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),Sn=function e(n){function r(t){if(ri(t)&&!Gu(t)&&!(t instanceof k)){if(t instanceof i)return t;if(Gi.call(t,"__wrapped__"))return To(t)}return new i(t)}function o(){}function i(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=H}function k(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=gt,this.__views__=[]}function Pe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function je(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Me(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function De(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Me;++e<n;)this.add(t[e])}function Ie(t){var e=this.__data__=new je(t);this.size=e.size}function Le(t,e){var n=Gu(t),r=!n&&Vu(t),o=!n&&!r&&Ku(t),i=!n&&!r&&!o&&Zu(t),a=n||r||o||i,u=a?T(t.length,zi):[],s=u.length;for(var c in t)!e&&!Gi.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||ho(c,s))||u.push(c);return u}function Fe(t){var e=t.length;return e?t[Jn(0,e-1)]:H}function Re(t,e){return ko(Tr(t),Ke(e,0,t.length))}function Ne(t){return ko(Tr(t))}function ze(t,e,n){(n===H||Yo(t[e],n))&&(n!==H||e in t)||He(t,e,n)}function Be(t,e,n){var r=t[e];Gi.call(t,e)&&Yo(r,n)&&(n!==H||e in t)||He(t,e,n)}function Ue(t,e){for(var n=t.length;n--;)if(Yo(t[n][0],e))return n;return-1}function qe(t,e,n,r){return Ha(t,function(t,o,i){e(r,t,n(t),i)}),r}function We(t,e){return t&&Pr(e,yi(e),t)}function He(t,e,n){"__proto__"==e&&la?la(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Ve(t,e){for(var n=-1,r=e.length,o=Mi(r),i=null==t;++n<r;)o[n]=i?H:vi(t,e[n]);return o}function Ke(t,e,n){return t==t&&(n!==H&&(t=t<=n?t:n),e!==H&&(t=t>=e?t:e)),t}function Qe(t,e,n,r,o,i){var a,u=e&Y,c=e&Q,l=e&$;if(n&&(a=o?n(t,r,o,i):n(t)),a!==H)return a;if(!ni(t))return t;var f=Gu(t);if(f){if(a=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&Gi.call(t,"index")&&(n.index=t.index,n.input=t.input),n}(t),!u)return Tr(t,a)}else{var p=nu(t),h=p==Et||p==Ct;if(Ku(t))return Sr(t,u);if(p==Mt||p==xt||h&&!o){if(a=c||h?{}:fo(t),!u)return c?function(t,e){return Pr(t,eu(t),e)}(t,function(t,e){return t&&Pr(e,mi(e),t)}(a,t)):function(t,e){return Pr(t,tu(t),e)}(t,We(a,t))}else{if(!en[p])return o?t:{};a=function(t,e,n){var r=t.constructor;switch(e){case Bt:return Or(t);case St:case Ot:return new r(+t);case Ut:return function(t,e){var n=e?Or(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case qt:case Wt:case Ht:case Vt:case Gt:case Xt:case Kt:case Yt:case Qt:return Ar(t,n);case Tt:return new r;case Pt:case Ft:return new r(t);case It:return function(t){var e=new t.constructor(t.source,be.exec(t));return e.lastIndex=t.lastIndex,e}(t);case Lt:return new r;case Rt:return function(t){return Ua?Ri(Ua.call(t)):{}}(t)}}(t,p,u)}}i||(i=new Ie);var d=i.get(t);if(d)return d;if(i.set(t,a),Ju(t))return t.forEach(function(r){a.add(Qe(r,e,n,r,t,i))}),a;if(Qu(t))return t.forEach(function(r,o){a.set(o,Qe(r,e,n,o,t,i))}),a;var v=f?H:(l?c?ro:no:c?mi:yi)(t);return s(v||t,function(r,o){v&&(r=t[o=r]),Be(a,o,Qe(r,e,n,o,t,i))}),a}function nn(t,e,n){var r=n.length;if(null==t)return!r;for(t=Ri(t);r--;){var o=n[r],i=e[o],a=t[o];if(a===H&&!(o in t)||!i(a))return!1}return!0}function an(t,e,n){if("function"!=typeof t)throw new Bi(G);return iu(function(){t.apply(H,n)},e)}function sn(t,e,n,r){var o=-1,i=p,a=!0,u=t.length,s=[],c=e.length;if(!u)return s;n&&(e=d(e,P(n))),r?(i=h,a=!1):e.length>=V&&(i=M,a=!1,e=new De(e));t:for(;++o<u;){var l=t[o],f=null==n?l:n(l);if(l=r||0!==l?l:0,a&&f==f){for(var v=c;v--;)if(e[v]===f)continue t;s.push(l)}else i(e,f,r)||s.push(l)}return s}function cn(t,e){var n=!0;return Ha(t,function(t,r,o){return n=!!e(t,r,o)}),n}function fn(t,e,n){for(var r=-1,o=t.length;++r<o;){var i=t[r],a=e(i);if(null!=a&&(u===H?a==a&&!ui(a):n(a,u)))var u=a,s=i}return s}function pn(t,e){var n=[];return Ha(t,function(t,r,o){e(t,r,o)&&n.push(t)}),n}function _n(t,e,n,r,o){var i=-1,a=t.length;for(n||(n=po),o||(o=[]);++i<a;){var u=t[i];e>0&&n(u)?e>1?_n(u,e-1,n,r,o):v(o,u):r||(o[o.length]=u)}return o}function On(t,e){return t&&Ga(t,e,yi)}function An(t,e){return t&&Xa(t,e,yi)}function kn(t,e){return f(e,function(e){return Zo(t[e])})}function En(t,e){for(var n=0,r=(e=br(e,t)).length;null!=t&&n<r;)t=t[Eo(e[n++])];return n&&n==r?t:H}function Cn(t,e,n){var r=e(t);return Gu(t)?r:v(r,n(t))}function Tn(t){return null==t?t===H?Nt:jt:ca&&ca in Ri(t)?function(t){var e=Gi.call(t,ca),n=t[ca];try{t[ca]=H;var r=!0}catch(t){}var o=Yi.call(t);return r&&(e?t[ca]=n:delete t[ca]),o}(t):function(t){return Yi.call(t)}(t)}function Pn(t,e){return t>e}function jn(t,e){return null!=t&&Gi.call(t,e)}function Mn(t,e){return null!=t&&e in Ri(t)}function Dn(t,e,n){for(var r=n?h:p,o=t[0].length,i=t.length,a=i,u=Mi(i),s=1/0,c=[];a--;){var l=t[a];a&&e&&(l=d(l,P(e))),s=wa(l.length,s),u[a]=!n&&(e||o>=120&&l.length>=120)?new De(a&&l):H}l=t[0];var f=-1,v=u[0];t:for(;++f<o&&c.length<s;){var g=l[f],y=e?e(g):g;if(g=n||0!==g?g:0,!(v?M(v,y):r(c,y,n))){for(a=i;--a;){var m=u[a];if(!(m?M(m,y):r(t[a],y,n)))continue t}v&&v.push(y),c.push(g)}}return c}function In(t,e,n){var r=null==(t=wo(t,e=br(e,t)))?t:t[Eo(Io(e))];return null==r?H:a(r,t,n)}function Ln(t){return ri(t)&&Tn(t)==xt}function Fn(t,e,n,r,o){return t===e||(null==t||null==e||!ri(t)&&!ri(e)?t!=t&&e!=e:function(t,e,n,r,o,i){var a=Gu(t),u=Gu(e),s=a?bt:nu(t),c=u?bt:nu(e),l=(s=s==xt?Mt:s)==Mt,f=(c=c==xt?Mt:c)==Mt,p=s==c;if(p&&Ku(t)){if(!Ku(e))return!1;a=!0,l=!1}if(p&&!l)return i||(i=new Ie),a||Zu(t)?to(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case Ut:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case Bt:return!(t.byteLength!=e.byteLength||!i(new ea(t),new ea(e)));case St:case Ot:case Pt:return Yo(+t,+e);case kt:return t.name==e.name&&t.message==e.message;case It:case Ft:return t==e+"";case Tt:var u=R;case Lt:var s=r&J;if(u||(u=B),t.size!=e.size&&!s)return!1;var c=a.get(t);if(c)return c==e;r|=Z,a.set(t,e);var l=to(u(t),u(e),r,o,i,a);return a.delete(t),l;case Rt:if(Ua)return Ua.call(t)==Ua.call(e)}return!1}(t,e,s,n,r,o,i);if(!(n&J)){var h=l&&Gi.call(t,"__wrapped__"),d=f&&Gi.call(e,"__wrapped__");if(h||d){var v=h?t.value():t,g=d?e.value():e;return i||(i=new Ie),o(v,g,n,r,i)}}return!!p&&(i||(i=new Ie),function(t,e,n,r,o,i){var a=n&J,u=no(t),s=u.length;if(s!=no(e).length&&!a)return!1;for(var c=s;c--;){var l=u[c];if(!(a?l in e:Gi.call(e,l)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var p=!0;i.set(t,e),i.set(e,t);for(var h=a;++c<s;){var d=t[l=u[c]],v=e[l];if(r)var g=a?r(v,d,l,e,t,i):r(d,v,l,t,e,i);if(!(g===H?d===v||o(d,v,n,r,i):g)){p=!1;break}h||(h="constructor"==l)}if(p&&!h){var y=t.constructor,m=e.constructor;y!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof m&&m instanceof m)&&(p=!1)}return i.delete(t),i.delete(e),p}(t,e,n,r,o,i))}(t,e,n,r,Fn,o))}function Rn(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Ri(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var s=(u=n[o])[0],c=t[s],l=u[1];if(a&&u[2]){if(c===H&&!(s in t))return!1}else{var f=new Ie;if(r)var p=r(c,l,s,t,e,f);if(!(p===H?Fn(l,c,J|Z,r,f):p))return!1}}return!0}function Nn(t){return!(!ni(t)||function(t){return!!Ki&&Ki in t}(t))&&(Zo(t)?Ji:Oe).test(Co(t))}function zn(e){return"function"==typeof e?e:null==e?Ai:"object"==(void 0===e?"undefined":t(e))?Gu(e)?Vn(e[0],e[1]):Hn(e):Ti(e)}function Bn(t){if(!mo(t))return xa(t);var e=[];for(var n in Ri(t))Gi.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Un(t){if(!ni(t))return function(t){var e=[];if(null!=t)for(var n in Ri(t))e.push(n);return e}(t);var e=mo(t),n=[];for(var r in t)("constructor"!=r||!e&&Gi.call(t,r))&&n.push(r);return n}function qn(t,e){return t<e}function Wn(t,e){var n=-1,r=Qo(t)?Mi(t.length):[];return Ha(t,function(t,o,i){r[++n]=e(t,o,i)}),r}function Hn(t){var e=so(t);return 1==e.length&&e[0][2]?xo(e[0][0],e[0][1]):function(n){return n===t||Rn(n,t,e)}}function Vn(t,e){return go(t)&&_o(e)?xo(Eo(t),e):function(n){var r=vi(n,t);return r===H&&r===e?gi(n,t):Fn(e,r,J|Z)}}function Gn(t,e,n,r,o){t!==e&&Ga(e,function(i,a){if(ni(i))o||(o=new Ie),function(t,e,n,r,o,i,a){var u=So(t,n),s=So(e,n),c=a.get(s);if(c)ze(t,n,c);else{var l=i?i(u,s,n+"",t,e,a):H,f=l===H;if(f){var p=Gu(s),h=!p&&Ku(s),d=!p&&!h&&Zu(s);l=s,p||h||d?Gu(u)?l=u:$o(u)?l=Tr(u):h?(f=!1,l=Sr(s,!0)):d?(f=!1,l=Ar(s,!0)):l=[]:ii(s)||Vu(s)?(l=u,Vu(u)?l=hi(u):ni(u)&&!Zo(u)||(l=fo(s))):f=!1}f&&(a.set(s,l),o(l,s,r,i,a),a.delete(s)),ze(t,n,l)}}(t,e,a,n,Gn,r,o);else{var u=r?r(So(t,a),i,a+"",t,e,o):H;u===H&&(u=i),ze(t,a,u)}},mi)}function Xn(t,e){var n=t.length;if(n)return ho(e+=e<0?n:0,n)?t[e]:H}function Kn(t,e,n){var r=-1;return e=d(e.length?e:[Ai],P(ao())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(Wn(t,function(t,n,o){return{criteria:d(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return function(t,e,n){for(var r=-1,o=t.criteria,i=e.criteria,a=o.length,u=n.length;++r<a;){var s=kr(o[r],i[r]);if(s)return r>=u?s:s*("desc"==n[r]?-1:1)}return t.index-e.index}(t,e,n)})}function Yn(t,e,n){for(var r=-1,o=e.length,i={};++r<o;){var a=e[r],u=En(t,a);n(u,a)&&rr(i,br(a,t),u)}return i}function Qn(t,e,n,r){var o=r?w:b,i=-1,a=e.length,u=t;for(t===e&&(e=Tr(e)),n&&(u=d(t,P(n)));++i<a;)for(var s=0,c=e[i],l=n?n(c):c;(s=o(u,l,s,r))>-1;)u!==t&&aa.call(u,s,1),aa.call(t,s,1);return t}function $n(t,e){for(var n=t?e.length:0,r=n-1;n--;){var o=e[n];if(n==r||o!==i){var i=o;ho(o)?aa.call(t,o,1):hr(t,o)}}return t}function Jn(t,e){return t+va(Aa()*(e-t+1))}function Zn(t,e){var n="";if(!t||e<1||e>ht)return n;do{e%2&&(n+=t),(e=va(e/2))&&(t+=t)}while(e);return n}function tr(t,e){return au(bo(t,e,Ai),t+"")}function er(t){return Fe(xi(t))}function nr(t,e){var n=xi(t);return ko(n,Ke(e,0,n.length))}function rr(t,e,n,r){if(!ni(t))return t;for(var o=-1,i=(e=br(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var s=Eo(e[o]),c=n;if(o!=a){var l=u[s];(c=r?r(l,s,u):H)===H&&(c=ni(l)?l:ho(e[o+1])?[]:{})}Be(u,s,c),u=u[s]}return t}function or(t){return ko(xi(t))}function ir(t,e,n){var r=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var i=Mi(o);++r<o;)i[r]=t[r+e];return i}function ar(t,e){var n;return Ha(t,function(t,r,o){return!(n=e(t,r,o))}),!!n}function ur(t,e,n){var r=0,o=null==t?r:t.length;if("number"==typeof e&&e==e&&o<=mt){for(;r<o;){var i=r+o>>>1,a=t[i];null!==a&&!ui(a)&&(n?a<=e:a<e)?r=i+1:o=i}return o}return sr(t,e,Ai,n)}function sr(t,e,n,r){e=n(e);for(var o=0,i=null==t?0:t.length,a=e!=e,u=null===e,s=ui(e),c=e===H;o<i;){var l=va((o+i)/2),f=n(t[l]),p=f!==H,h=null===f,d=f==f,v=ui(f);if(a)var g=r||d;else g=c?d&&(r||p):u?d&&p&&(r||!h):s?d&&p&&!h&&(r||!v):!h&&!v&&(r?f<=e:f<e);g?o=l+1:i=l}return wa(i,yt)}function cr(t,e){for(var n=-1,r=t.length,o=0,i=[];++n<r;){var a=t[n],u=e?e(a):a;if(!n||!Yo(u,s)){var s=u;i[o++]=0===a?0:a}}return i}function lr(t){return"number"==typeof t?t:ui(t)?vt:+t}function fr(t){if("string"==typeof t)return t;if(Gu(t))return d(t,fr)+"";if(ui(t))return qa?qa.call(t):"";var e=t+"";return"0"==e&&1/t==-pt?"-0":e}function pr(t,e,n){var r=-1,o=p,i=t.length,a=!0,u=[],s=u;if(n)a=!1,o=h;else if(i>=V){var c=e?null:Ja(t);if(c)return B(c);a=!1,o=M,s=new De}else s=e?[]:u;t:for(;++r<i;){var l=t[r],f=e?e(l):l;if(l=n||0!==l?l:0,a&&f==f){for(var d=s.length;d--;)if(s[d]===f)continue t;e&&s.push(f),u.push(l)}else o(s,f,n)||(s!==u&&s.push(f),u.push(l))}return u}function hr(t,e){return null==(t=wo(t,e=br(e,t)))||delete t[Eo(Io(e))]}function dr(t,e,n,r){return rr(t,e,n(En(t,e)),r)}function vr(t,e,n,r){for(var o=t.length,i=r?o:-1;(r?i--:++i<o)&&e(t[i],i,t););return n?ir(t,r?0:i,r?i+1:o):ir(t,r?i+1:0,r?o:i)}function gr(t,e){var n=t;return n instanceof k&&(n=n.value()),g(e,function(t,e){return e.func.apply(e.thisArg,v([t],e.args))},n)}function yr(t,e,n){var r=t.length;if(r<2)return r?pr(t[0]):[];for(var o=-1,i=Mi(r);++o<r;)for(var a=t[o],u=-1;++u<r;)u!=o&&(i[o]=sn(i[o]||a,t[u],e,n));return pr(_n(i,1),e,n)}function mr(t,e,n){for(var r=-1,o=t.length,i=e.length,a={};++r<o;){var u=r<i?e[r]:H;n(a,t[r],u)}return a}function _r(t){return $o(t)?t:[]}function xr(t){return"function"==typeof t?t:Ai}function br(t,e){return Gu(t)?t:go(t,e)?[t]:uu(di(t))}function wr(t,e,n){var r=t.length;return n=n===H?r:n,!e&&n>=r?t:ir(t,e,n)}function Sr(t,e){if(e)return t.slice();var n=t.length,r=na?na(n):new t.constructor(n);return t.copy(r),r}function Or(t){var e=new t.constructor(t.byteLength);return new ea(e).set(new ea(t)),e}function Ar(t,e){var n=e?Or(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function kr(t,e){if(t!==e){var n=t!==H,r=null===t,o=t==t,i=ui(t),a=e!==H,u=null===e,s=e==e,c=ui(e);if(!u&&!c&&!i&&t>e||i&&a&&s&&!u&&!c||r&&a&&s||!n&&s||!o)return 1;if(!r&&!i&&!c&&t<e||c&&n&&o&&!r&&!i||u&&n&&o||!a&&o||!s)return-1}return 0}function Er(t,e,n,r){for(var o=-1,i=t.length,a=n.length,u=-1,s=e.length,c=ba(i-a,0),l=Mi(s+c),f=!r;++u<s;)l[u]=e[u];for(;++o<a;)(f||o<i)&&(l[n[o]]=t[o]);for(;c--;)l[u++]=t[o++];return l}function Cr(t,e,n,r){for(var o=-1,i=t.length,a=-1,u=n.length,s=-1,c=e.length,l=ba(i-u,0),f=Mi(l+c),p=!r;++o<l;)f[o]=t[o];for(var h=o;++s<c;)f[h+s]=e[s];for(;++a<u;)(p||o<i)&&(f[h+n[a]]=t[o++]);return f}function Tr(t,e){var n=-1,r=t.length;for(e||(e=Mi(r));++n<r;)e[n]=t[n];return e}function Pr(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],s=r?r(n[u],t[u],u,n,t):H;s===H&&(s=t[u]),o?He(n,u,s):Be(n,u,s)}return n}function jr(t,e){return function(n,r){var o=Gu(n)?u:qe,i=e?e():{};return o(n,t,ao(r,2),i)}}function Mr(t){return tr(function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:H,a=o>2?n[2]:H;for(i=t.length>3&&"function"==typeof i?(o--,i):H,a&&vo(n[0],n[1],a)&&(i=o<3?H:i,o=1),e=Ri(e);++r<o;){var u=n[r];u&&t(e,u,r,i)}return e})}function Dr(t,e){return function(n,r){if(null==n)return n;if(!Qo(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=Ri(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}function Ir(t){return function(e,n,r){for(var o=-1,i=Ri(e),a=r(e),u=a.length;u--;){var s=a[t?u:++o];if(!1===n(i[s],s,i))break}return e}}function Lr(t){return function(e){var n=F(e=di(e))?W(e):H,r=n?n[0]:e.charAt(0),o=n?wr(n,1).join(""):e.slice(1);return r[t]()+o}}function Fr(t){return function(e){return g(Si(wi(e).replace(Ge,"")),t,"")}}function Rr(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Wa(t.prototype),r=t.apply(n,e);return ni(r)?r:n}}function Nr(t){return function(e,n,r){var o=Ri(e);if(!Qo(e)){var i=ao(n,3);e=yi(e),n=function(t){return i(o[t],t,o)}}var a=t(e,n,r);return a>-1?o[i?e[a]:a]:H}}function zr(t){return eo(function(e){var n=e.length,r=n,o=i.prototype.thru;for(t&&e.reverse();r--;){var a=e[r];if("function"!=typeof a)throw new Bi(G);if(o&&!u&&"wrapper"==oo(a))var u=new i([],!0)}for(r=u?r:n;++r<n;){var s=oo(a=e[r]),c="wrapper"==s?Za(a):H;u=c&&yo(c[0])&&c[1]==(ut|rt|it|st)&&!c[4].length&&1==c[9]?u[oo(c[0])].apply(u,c[3]):1==a.length&&yo(a)?u[s]():u.thru(a)}return function(){var t=arguments,r=t[0];if(u&&1==t.length&&Gu(r))return u.plant(r).value();for(var o=0,i=n?e[o].apply(this,t):r;++o<n;)i=e[o].call(this,i);return i}})}function Br(t,e,n,r,o,i,a,u,s,c){var l=e&ut,f=e&tt,p=e&et,h=e&(rt|ot),d=e&ct,v=p?H:Rr(t);return function g(){for(var y=arguments.length,m=Mi(y),_=y;_--;)m[_]=arguments[_];if(h)var x=io(g),b=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}(m,x);if(r&&(m=Er(m,r,o,h)),i&&(m=Cr(m,i,a,h)),y-=b,h&&y<c){var w=z(m,x);return Xr(t,e,Br,g.placeholder,n,m,w,u,s,c-y)}var S=f?n:this,O=p?S[t]:t;return y=m.length,u?m=function(t,e){for(var n=t.length,r=wa(e.length,n),o=Tr(t);r--;){var i=e[r];t[r]=ho(i,n)?o[i]:H}return t}(m,u):d&&y>1&&m.reverse(),l&&s<y&&(m.length=s),this&&this!==un&&this instanceof g&&(O=v||Rr(O)),O.apply(S,m)}}function Ur(t,e){return function(n,r){return function(t,e,n,r){return On(t,function(t,o,i){e(r,n(t),o,i)}),r}(n,t,e(r),{})}}function qr(t,e){return function(n,r){var o;if(n===H&&r===H)return e;if(n!==H&&(o=n),r!==H){if(o===H)return r;"string"==typeof n||"string"==typeof r?(n=fr(n),r=fr(r)):(n=lr(n),r=lr(r)),o=t(n,r)}return o}}function Wr(t){return eo(function(e){return e=d(e,P(ao())),tr(function(n){var r=this;return t(e,function(t){return a(t,r,n)})})})}function Hr(t,e){var n=(e=e===H?" ":fr(e)).length;if(n<2)return n?Zn(e,t):e;var r=Zn(e,da(t/q(e)));return F(e)?wr(W(r),0,t).join(""):r.slice(0,t)}function Vr(t){return function(e,n,r){return r&&"number"!=typeof r&&vo(e,n,r)&&(n=r=H),e=ci(e),n===H?(n=e,e=0):n=ci(n),function(t,e,n,r){for(var o=-1,i=ba(da((e-t)/(n||1)),0),a=Mi(i);i--;)a[r?i:++o]=t,t+=n;return a}(e,n,r=r===H?e<n?1:-1:ci(r),t)}}function Gr(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=pi(e),n=pi(n)),t(e,n)}}function Xr(t,e,n,r,o,i,a,u,s,c){var l=e&rt;e|=l?it:at,(e&=~(l?at:it))&nt||(e&=~(tt|et));var f=[t,e,o,l?i:H,l?a:H,l?H:i,l?H:a,u,s,c],p=n.apply(H,f);return yo(t)&&ou(p,f),p.placeholder=r,Oo(p,t,e)}function Kr(t){var e=Fi[t];return function(t,n){if(t=pi(t),n=null==n?0:wa(li(n),292)){var r=(di(t)+"e").split("e");return+((r=(di(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}function Yr(t){return function(e){var n=nu(e);return n==Tt?R(e):n==Lt?U(e):function(t,e){return d(e,function(e){return[e,t[e]]})}(e,t(e))}}function Qr(t,e,n,r,o,i,u,s){var c=e&et;if(!c&&"function"!=typeof t)throw new Bi(G);var l=r?r.length:0;if(l||(e&=~(it|at),r=o=H),u=u===H?u:ba(li(u),0),s=s===H?s:li(s),l-=o?o.length:0,e&at){var f=r,p=o;r=o=H}var h=c?H:Za(t),d=[t,e,n,r,o,f,p,i,u,s];if(h&&function(t,e){var n=t[1],r=e[1],o=n|r,i=o<(tt|et|ut),a=r==ut&&n==rt||r==ut&&n==st&&t[7].length<=e[8]||r==(ut|st)&&e[7].length<=e[8]&&n==rt;if(!i&&!a)return t;r&tt&&(t[2]=e[2],o|=n&tt?0:nt);var u=e[3];if(u){var s=t[3];t[3]=s?Er(s,u,e[4]):u,t[4]=s?z(t[3],K):e[4]}(u=e[5])&&(s=t[5],t[5]=s?Cr(s,u,e[6]):u,t[6]=s?z(t[5],K):e[6]),(u=e[7])&&(t[7]=u),r&ut&&(t[8]=null==t[8]?e[8]:wa(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=o}(d,h),t=d[0],e=d[1],n=d[2],r=d[3],o=d[4],!(s=d[9]=d[9]===H?c?0:t.length:ba(d[9]-l,0))&&e&(rt|ot)&&(e&=~(rt|ot)),e&&e!=tt)v=e==rt||e==ot?function(t,e,n){var r=Rr(t);return function o(){for(var i=arguments.length,u=Mi(i),s=i,c=io(o);s--;)u[s]=arguments[s];var l=i<3&&u[0]!==c&&u[i-1]!==c?[]:z(u,c);return(i-=l.length)<n?Xr(t,e,Br,o.placeholder,H,u,l,H,H,n-i):a(this&&this!==un&&this instanceof o?r:t,this,u)}}(t,e,s):e!=it&&e!=(tt|it)||o.length?Br.apply(H,d):function(t,e,n,r){var o=e&tt,i=Rr(t);return function e(){for(var u=-1,s=arguments.length,c=-1,l=r.length,f=Mi(l+s),p=this&&this!==un&&this instanceof e?i:t;++c<l;)f[c]=r[c];for(;s--;)f[c++]=arguments[++u];return a(p,o?n:this,f)}}(t,e,n,r);else var v=function(t,e,n){var r=e&tt,o=Rr(t);return function e(){return(this&&this!==un&&this instanceof e?o:t).apply(r?n:this,arguments)}}(t,e,n);return Oo((h?Ka:ou)(v,d),t,e)}function $r(t,e,n,r){return t===H||Yo(t,Wi[n])&&!Gi.call(r,n)?e:t}function Jr(t,e,n,r,o,i){return ni(t)&&ni(e)&&(i.set(e,t),Gn(t,e,H,Jr,i),i.delete(e)),t}function Zr(t){return ii(t)?H:t}function to(t,e,n,r,o,i){var a=n&J,u=t.length,s=e.length;if(u!=s&&!(a&&s>u))return!1;var c=i.get(t);if(c&&i.get(e))return c==e;var l=-1,f=!0,p=n&Z?new De:H;for(i.set(t,e),i.set(e,t);++l<u;){var h=t[l],d=e[l];if(r)var v=a?r(d,h,l,e,t,i):r(h,d,l,t,e,i);if(v!==H){if(v)continue;f=!1;break}if(p){if(!m(e,function(t,e){if(!M(p,e)&&(h===t||o(h,t,n,r,i)))return p.push(e)})){f=!1;break}}else if(h!==d&&!o(h,d,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f}function eo(t){return au(bo(t,H,Mo),t+"")}function no(t){return Cn(t,yi,tu)}function ro(t){return Cn(t,mi,eu)}function oo(t){for(var e=t.name+"",n=Ia[e],r=Gi.call(Ia,e)?n.length:0;r--;){var o=n[r],i=o.func;if(null==i||i==t)return o.name}return e}function io(t){return(Gi.call(r,"placeholder")?r:t).placeholder}function ao(){var t=r.iteratee||ki;return t=t===ki?zn:t,arguments.length?t(arguments[0],arguments[1]):t}function uo(e,n){var r=e.__data__;return function(e){var n=void 0===e?"undefined":t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e}(n)?r["string"==typeof n?"string":"hash"]:r.map}function so(t){for(var e=yi(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,_o(o)]}return e}function co(t,e){var n=function(t,e){return null==t?H:t[e]}(t,e);return Nn(n)?n:H}function lo(t,e,n){for(var r=-1,o=(e=br(e,t)).length,i=!1;++r<o;){var a=Eo(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&ei(o)&&ho(a,o)&&(Gu(t)||Vu(t))}function fo(t){return"function"!=typeof t.constructor||mo(t)?{}:Wa(ra(t))}function po(t){return Gu(t)||Vu(t)||!!(ua&&t&&t[ua])}function ho(e,n){var r=void 0===e?"undefined":t(e);return!!(n=null==n?ht:n)&&("number"==r||"symbol"!=r&&ke.test(e))&&e>-1&&e%1==0&&e<n}function vo(e,n,r){if(!ni(r))return!1;var o=void 0===n?"undefined":t(n);return!!("number"==o?Qo(r)&&ho(n,r.length):"string"==o&&n in r)&&Yo(r[n],e)}function go(e,n){if(Gu(e))return!1;var r=void 0===e?"undefined":t(e);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ui(e))||se.test(e)||!ue.test(e)||null!=n&&e in Ri(n)}function yo(t){var e=oo(t),n=r[e];if("function"!=typeof n||!(e in k.prototype))return!1;if(t===n)return!0;var o=Za(n);return!!o&&t===o[0]}function mo(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Wi)}function _o(t){return t==t&&!ni(t)}function xo(t,e){return function(n){return null!=n&&n[t]===e&&(e!==H||t in Ri(n))}}function bo(t,e,n){return e=ba(e===H?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=ba(r.length-e,0),u=Mi(i);++o<i;)u[o]=r[e+o];o=-1;for(var s=Mi(e+1);++o<e;)s[o]=r[o];return s[e]=n(u),a(t,this,s)}}function wo(t,e){return e.length<2?t:En(t,ir(e,0,-1))}function So(t,e){if("__proto__"!=e)return t[e]}function Oo(t,e,n){var r=e+"";return au(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(ve,"{\n/* [wrapped with "+e+"] */\n")}(r,function(t,e){return s(_t,function(n){var r="_."+n[0];e&n[1]&&!p(t,r)&&t.push(r)}),t.sort()}(function(t){var e=r.match(ge);return e?e[1].split(ye):[]}(),n)))}function Ao(t){var e=0,n=0;return function(){var r=Sa(),o=ft-(r-n);if(n=r,o>0){if(++e>=lt)return arguments[0]}else e=0;return t.apply(H,arguments)}}function ko(t,e){var n=-1,r=t.length,o=r-1;for(e=e===H?r:e;++n<e;){var i=Jn(n,o),a=t[i];t[i]=t[n],t[n]=a}return t.length=e,t}function Eo(t){if("string"==typeof t||ui(t))return t;var e=t+"";return"0"==e&&1/t==-pt?"-0":e}function Co(t){if(null!=t){try{return Vi.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function To(t){if(t instanceof k)return t.clone();var e=new i(t.__wrapped__,t.__chain__);return e.__actions__=Tr(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}function Po(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:li(n);return o<0&&(o=ba(r+o,0)),x(t,ao(e,3),o)}function jo(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r-1;return n!==H&&(o=li(n),o=n<0?ba(r+o,0):wa(o,r-1)),x(t,ao(e,3),o,!0)}function Mo(t){return null!=t&&t.length?_n(t,1):[]}function Do(t){return t&&t.length?t[0]:H}function Io(t){var e=null==t?0:t.length;return e?t[e-1]:H}function Lo(t,e){return t&&t.length&&e&&e.length?Qn(t,e):t}function Fo(t){return null==t?t:ka.call(t)}function Ro(t){if(!t||!t.length)return[];var e=0;return t=f(t,function(t){if($o(t))return e=ba(t.length,e),!0}),T(e,function(e){return d(t,A(e))})}function No(t,e){if(!t||!t.length)return[];var n=Ro(t);return null==e?n:d(n,function(t){return a(e,H,t)})}function zo(t){var e=r(t);return e.__chain__=!0,e}function Bo(t,e){return e(t)}function Uo(t,e){return(Gu(t)?s:Ha)(t,ao(e,3))}function qo(t,e){return(Gu(t)?c:Va)(t,ao(e,3))}function Wo(t,e){return(Gu(t)?d:Wn)(t,ao(e,3))}function Ho(t,e,n){return e=n?H:e,e=t&&null==e?t.length:e,Qr(t,ut,H,H,H,H,e)}function Vo(t,e){var n;if("function"!=typeof e)throw new Bi(G);return t=li(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=H),n}}function Go(t,e,n){function r(e){var n=s,r=c;return s=c=H,d=e,f=t.apply(r,n)}function o(t){var n=t-h;return h===H||n>=e||n<0||g&&t-d>=l}function i(){var t=Iu();if(o(t))return a(t);p=iu(i,function(t){var n=e-(t-h);return g?wa(n,l-(t-d)):n}(t))}function a(t){return p=H,y&&s?r(t):(s=c=H,f)}function u(){var t=Iu(),n=o(t);if(s=arguments,c=this,h=t,n){if(p===H)return function(t){return d=t,p=iu(i,e),v?r(t):f}(h);if(g)return p=iu(i,e),r(h)}return p===H&&(p=iu(i,e)),f}var s,c,l,f,p,h,d=0,v=!1,g=!1,y=!0;if("function"!=typeof t)throw new Bi(G);return e=pi(e)||0,ni(n)&&(v=!!n.leading,l=(g="maxWait"in n)?ba(pi(n.maxWait)||0,e):l,y="trailing"in n?!!n.trailing:y),u.cancel=function(){p!==H&&$a(p),d=0,s=h=c=p=H},u.flush=function(){return p===H?f:a(Iu())},u}function Xo(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new Bi(G);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Xo.Cache||Me),n}function Ko(t){if("function"!=typeof t)throw new Bi(G);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function Yo(t,e){return t===e||t!=t&&e!=e}function Qo(t){return null!=t&&ei(t.length)&&!Zo(t)}function $o(t){return ri(t)&&Qo(t)}function Jo(t){if(!ri(t))return!1;var e=Tn(t);return e==kt||e==At||"string"==typeof t.message&&"string"==typeof t.name&&!ii(t)}function Zo(t){if(!ni(t))return!1;var e=Tn(t);return e==Et||e==Ct||e==wt||e==Dt}function ti(t){return"number"==typeof t&&t==li(t)}function ei(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=ht}function ni(e){var n=void 0===e?"undefined":t(e);return null!=e&&("object"==n||"function"==n)}function ri(e){return null!=e&&"object"==(void 0===e?"undefined":t(e))}function oi(t){return"number"==typeof t||ri(t)&&Tn(t)==Pt}function ii(t){if(!ri(t)||Tn(t)!=Mt)return!1;var e=ra(t);if(null===e)return!0;var n=Gi.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Vi.call(n)==Qi}function ai(t){return"string"==typeof t||!Gu(t)&&ri(t)&&Tn(t)==Ft}function ui(e){return"symbol"==(void 0===e?"undefined":t(e))||ri(e)&&Tn(e)==Rt}function si(t){if(!t)return[];if(Qo(t))return ai(t)?W(t):Tr(t);if(sa&&t[sa])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[sa]());var e=nu(t);return(e==Tt?R:e==Lt?B:xi)(t)}function ci(t){return t?(t=pi(t))===pt||t===-pt?(t<0?-1:1)*dt:t==t?t:0:0===t?t:0}function li(t){var e=ci(t),n=e%1;return e==e?n?e-n:e:0}function fi(t){return t?Ke(li(t),0,gt):0}function pi(t){if("number"==typeof t)return t;if(ui(t))return vt;if(ni(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ni(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(pe,"");var n=Se.test(t);return n||Ae.test(t)?on(t.slice(2),n?2:8):we.test(t)?vt:+t}function hi(t){return Pr(t,mi(t))}function di(t){return null==t?"":fr(t)}function vi(t,e,n){var r=null==t?H:En(t,e);return r===H?n:r}function gi(t,e){return null!=t&&lo(t,e,Mn)}function yi(t){return Qo(t)?Le(t):Bn(t)}function mi(t){return Qo(t)?Le(t,!0):Un(t)}function _i(t,e){if(null==t)return{};var n=d(ro(t),function(t){return[t]});return e=ao(e),Yn(t,n,function(t,n){return e(t,n[0])})}function xi(t){return null==t?[]:j(t,yi(t))}function bi(t){return As(di(t).toLowerCase())}function wi(t){return(t=di(t))&&t.replace(Ee,xn).replace(Xe,"")}function Si(t,e,n){return t=di(t),(e=n?H:e)===H?function(t){return $e.test(t)}(t)?function(t){return t.match(Ye)||[]}(t):function(t){return t.match(me)||[]}(t):t.match(e)||[]}function Oi(t){return function(){return t}}function Ai(t){return t}function ki(t){return zn("function"==typeof t?t:Qe(t,Y))}function Ei(t,e,n){var r=yi(e),o=kn(e,r);null!=n||ni(e)&&(o.length||!r.length)||(n=e,e=t,t=this,o=kn(e,yi(e)));var i=!(ni(n)&&"chain"in n&&!n.chain),a=Zo(t);return s(o,function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(i||e){var n=t(this.__wrapped__);return(n.__actions__=Tr(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,v([this.value()],arguments))})}),t}function Ci(){}function Ti(t){return go(t)?A(Eo(t)):function(t){return function(e){return En(e,t)}}(t)}function Pi(){return[]}function ji(){return!1}var Mi=(n=null==n?un:Sn.defaults(un.Object(),n,Sn.pick(un,Je))).Array,Di=n.Date,Ii=n.Error,Li=n.Function,Fi=n.Math,Ri=n.Object,Ni=n.RegExp,zi=n.String,Bi=n.TypeError,Ui=Mi.prototype,qi=Li.prototype,Wi=Ri.prototype,Hi=n["__core-js_shared__"],Vi=qi.toString,Gi=Wi.hasOwnProperty,Xi=0,Ki=function(){var t=/[^.]+$/.exec(Hi&&Hi.keys&&Hi.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Yi=Wi.toString,Qi=Vi.call(Ri),$i=un._,Ji=Ni("^"+Vi.call(Gi).replace(le,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zi=ln?n.Buffer:H,ta=n.Symbol,ea=n.Uint8Array,na=Zi?Zi.allocUnsafe:H,ra=N(Ri.getPrototypeOf,Ri),oa=Ri.create,ia=Wi.propertyIsEnumerable,aa=Ui.splice,ua=ta?ta.isConcatSpreadable:H,sa=ta?ta.iterator:H,ca=ta?ta.toStringTag:H,la=function(){try{var t=co(Ri,"defineProperty");return t({},"",{}),t}catch(t){}}(),fa=n.clearTimeout!==un.clearTimeout&&n.clearTimeout,pa=Di&&Di.now!==un.Date.now&&Di.now,ha=n.setTimeout!==un.setTimeout&&n.setTimeout,da=Fi.ceil,va=Fi.floor,ga=Ri.getOwnPropertySymbols,ya=Zi?Zi.isBuffer:H,ma=n.isFinite,_a=Ui.join,xa=N(Ri.keys,Ri),ba=Fi.max,wa=Fi.min,Sa=Di.now,Oa=n.parseInt,Aa=Fi.random,ka=Ui.reverse,Ea=co(n,"DataView"),Ca=co(n,"Map"),Ta=co(n,"Promise"),Pa=co(n,"Set"),ja=co(n,"WeakMap"),Ma=co(Ri,"create"),Da=ja&&new ja,Ia={},La=Co(Ea),Fa=Co(Ca),Ra=Co(Ta),Na=Co(Pa),za=Co(ja),Ba=ta?ta.prototype:H,Ua=Ba?Ba.valueOf:H,qa=Ba?Ba.toString:H,Wa=function(){function t(){}return function(e){if(!ni(e))return{};if(oa)return oa(e);t.prototype=e;var n=new t;return t.prototype=H,n}}();r.templateSettings={escape:oe,evaluate:ie,interpolate:ae,variable:"",imports:{_:r}},r.prototype=o.prototype,r.prototype.constructor=r,i.prototype=Wa(o.prototype),i.prototype.constructor=i,k.prototype=Wa(o.prototype),k.prototype.constructor=k,Pe.prototype.clear=function(){this.__data__=Ma?Ma(null):{},this.size=0},Pe.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Pe.prototype.get=function(t){var e=this.__data__;if(Ma){var n=e[t];return n===X?H:n}return Gi.call(e,t)?e[t]:H},Pe.prototype.has=function(t){var e=this.__data__;return Ma?e[t]!==H:Gi.call(e,t)},Pe.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ma&&e===H?X:e,this},je.prototype.clear=function(){this.__data__=[],this.size=0},je.prototype.delete=function(t){var e=this.__data__,n=Ue(e,t);return!(n<0||(n==e.length-1?e.pop():aa.call(e,n,1),--this.size,0))},je.prototype.get=function(t){var e=this.__data__,n=Ue(e,t);return n<0?H:e[n][1]},je.prototype.has=function(t){return Ue(this.__data__,t)>-1},je.prototype.set=function(t,e){var n=this.__data__,r=Ue(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Me.prototype.clear=function(){this.size=0,this.__data__={hash:new Pe,map:new(Ca||je),string:new Pe}},Me.prototype.delete=function(t){var e=uo(this,t).delete(t);return this.size-=e?1:0,e},Me.prototype.get=function(t){return uo(this,t).get(t)},Me.prototype.has=function(t){return uo(this,t).has(t)},Me.prototype.set=function(t,e){var n=uo(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},De.prototype.add=De.prototype.push=function(t){return this.__data__.set(t,X),this},De.prototype.has=function(t){return this.__data__.has(t)},Ie.prototype.clear=function(){this.__data__=new je,this.size=0},Ie.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Ie.prototype.get=function(t){return this.__data__.get(t)},Ie.prototype.has=function(t){return this.__data__.has(t)},Ie.prototype.set=function(t,e){var n=this.__data__;if(n instanceof je){var r=n.__data__;if(!Ca||r.length<V-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Me(r)}return n.set(t,e),this.size=n.size,this};var Ha=Dr(On),Va=Dr(An,!0),Ga=Ir(),Xa=Ir(!0),Ka=Da?function(t,e){return Da.set(t,e),t}:Ai,Ya=la?function(t,e){return la(t,"toString",{configurable:!0,enumerable:!1,value:Oi(e),writable:!0})}:Ai,Qa=tr,$a=fa||function(t){return un.clearTimeout(t)},Ja=Pa&&1/B(new Pa([,-0]))[1]==pt?function(t){return new Pa(t)}:Ci,Za=Da?function(t){return Da.get(t)}:Ci,tu=ga?function(t){return null==t?[]:(t=Ri(t),f(ga(t),function(e){return ia.call(t,e)}))}:Pi,eu=ga?function(t){for(var e=[];t;)v(e,tu(t)),t=ra(t);return e}:Pi,nu=Tn;(Ea&&nu(new Ea(new ArrayBuffer(1)))!=Ut||Ca&&nu(new Ca)!=Tt||Ta&&"[object Promise]"!=nu(Ta.resolve())||Pa&&nu(new Pa)!=Lt||ja&&nu(new ja)!=zt)&&(nu=function(t){var e=Tn(t),n=e==Mt?t.constructor:H,r=n?Co(n):"";if(r)switch(r){case La:return Ut;case Fa:return Tt;case Ra:return"[object Promise]";case Na:return Lt;case za:return zt}return e});var ru=Hi?Zo:ji,ou=Ao(Ka),iu=ha||function(t,e){return un.setTimeout(t,e)},au=Ao(Ya),uu=function(t){var e=Xo(t,function(t){return 500===n.size&&n.clear(),t}),n=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ce,function(t,n,r,o){e.push(r?o.replace(_e,"$1"):n||t)}),e}),su=tr(function(t,e){return $o(t)?sn(t,_n(e,1,$o,!0)):[]}),cu=tr(function(t,e){var n=Io(e);return $o(n)&&(n=H),$o(t)?sn(t,_n(e,1,$o,!0),ao(n,2)):[]}),lu=tr(function(t,e){var n=Io(e);return $o(n)&&(n=H),$o(t)?sn(t,_n(e,1,$o,!0),H,n):[]}),fu=tr(function(t){var e=d(t,_r);return e.length&&e[0]===t[0]?Dn(e):[]}),pu=tr(function(t){var e=Io(t),n=d(t,_r);return e===Io(n)?e=H:n.pop(),n.length&&n[0]===t[0]?Dn(n,ao(e,2)):[]}),hu=tr(function(t){var e=Io(t),n=d(t,_r);return(e="function"==typeof e?e:H)&&n.pop(),n.length&&n[0]===t[0]?Dn(n,H,e):[]}),du=tr(Lo),vu=eo(function(t,e){var n=null==t?0:t.length,r=Ve(t,e);return $n(t,d(e,function(t){return ho(t,n)?+t:t}).sort(kr)),r}),gu=tr(function(t){return pr(_n(t,1,$o,!0))}),yu=tr(function(t){var e=Io(t);return $o(e)&&(e=H),pr(_n(t,1,$o,!0),ao(e,2))}),mu=tr(function(t){var e=Io(t);return e="function"==typeof e?e:H,pr(_n(t,1,$o,!0),H,e)}),_u=tr(function(t,e){return $o(t)?sn(t,e):[]}),xu=tr(function(t){return yr(f(t,$o))}),bu=tr(function(t){var e=Io(t);return $o(e)&&(e=H),yr(f(t,$o),ao(e,2))}),wu=tr(function(t){var e=Io(t);return e="function"==typeof e?e:H,yr(f(t,$o),H,e)}),Su=tr(Ro),Ou=tr(function(t){var e=t.length,n=e>1?t[e-1]:H;return No(t,n="function"==typeof n?(t.pop(),n):H)}),Au=eo(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return Ve(e,t)};return!(e>1||this.__actions__.length)&&r instanceof k&&ho(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:Bo,args:[o],thisArg:H}),new i(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(H),t})):this.thru(o)}),ku=jr(function(t,e,n){Gi.call(t,n)?++t[n]:He(t,n,1)}),Eu=Nr(Po),Cu=Nr(jo),Tu=jr(function(t,e,n){Gi.call(t,n)?t[n].push(e):He(t,n,[e])}),Pu=tr(function(t,e,n){var r=-1,o="function"==typeof e,i=Qo(t)?Mi(t.length):[];return Ha(t,function(t){i[++r]=o?a(e,t,n):In(t,e,n)}),i}),ju=jr(function(t,e,n){He(t,n,e)}),Mu=jr(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),Du=tr(function(t,e){if(null==t)return[];var n=e.length;return n>1&&vo(t,e[0],e[1])?e=[]:n>2&&vo(e[0],e[1],e[2])&&(e=[e[0]]),Kn(t,_n(e,1),[])}),Iu=pa||function(){return un.Date.now()},Lu=tr(function(t,e,n){var r=tt;if(n.length){var o=z(n,io(Lu));r|=it}return Qr(t,r,e,n,o)}),Fu=tr(function(t,e,n){var r=tt|et;if(n.length){var o=z(n,io(Fu));r|=it}return Qr(e,r,t,n,o)}),Ru=tr(function(t,e){return an(t,1,e)}),Nu=tr(function(t,e,n){return an(t,pi(e)||0,n)});Xo.Cache=Me;var zu=Qa(function(t,e){var n=(e=1==e.length&&Gu(e[0])?d(e[0],P(ao())):d(_n(e,1),P(ao()))).length;return tr(function(r){for(var o=-1,i=wa(r.length,n);++o<i;)r[o]=e[o].call(this,r[o]);return a(t,this,r)})}),Bu=tr(function(t,e){var n=z(e,io(Bu));return Qr(t,it,H,e,n)}),Uu=tr(function(t,e){var n=z(e,io(Uu));return Qr(t,at,H,e,n)}),qu=eo(function(t,e){return Qr(t,st,H,H,H,e)}),Wu=Gr(Pn),Hu=Gr(function(t,e){return t>=e}),Vu=Ln(function(){return arguments}())?Ln:function(t){return ri(t)&&Gi.call(t,"callee")&&!ia.call(t,"callee")},Gu=Mi.isArray,Xu=hn?P(hn):function(t){return ri(t)&&Tn(t)==Bt},Ku=ya||ji,Yu=dn?P(dn):function(t){return ri(t)&&Tn(t)==Ot},Qu=vn?P(vn):function(t){return ri(t)&&nu(t)==Tt},$u=gn?P(gn):function(t){return ri(t)&&Tn(t)==It},Ju=yn?P(yn):function(t){return ri(t)&&nu(t)==Lt},Zu=mn?P(mn):function(t){return ri(t)&&ei(t.length)&&!!tn[Tn(t)]},ts=Gr(qn),es=Gr(function(t,e){return t<=e}),ns=Mr(function(t,e){if(mo(e)||Qo(e))Pr(e,yi(e),t);else for(var n in e)Gi.call(e,n)&&Be(t,n,e[n])}),rs=Mr(function(t,e){Pr(e,mi(e),t)}),os=Mr(function(t,e,n,r){Pr(e,mi(e),t,r)}),is=Mr(function(t,e,n,r){Pr(e,yi(e),t,r)}),as=eo(Ve),us=tr(function(t,e){t=Ri(t);var n=-1,r=e.length,o=r>2?e[2]:H;for(o&&vo(e[0],e[1],o)&&(r=1);++n<r;)for(var i=e[n],a=mi(i),u=-1,s=a.length;++u<s;){var c=a[u],l=t[c];(l===H||Yo(l,Wi[c])&&!Gi.call(t,c))&&(t[c]=i[c])}return t}),ss=tr(function(t){return t.push(H,Jr),a(hs,H,t)}),cs=Ur(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Yi.call(e)),t[e]=n},Oi(Ai)),ls=Ur(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Yi.call(e)),Gi.call(t,e)?t[e].push(n):t[e]=[n]},ao),fs=tr(In),ps=Mr(function(t,e,n){Gn(t,e,n)}),hs=Mr(function(t,e,n,r){Gn(t,e,n,r)}),ds=eo(function(t,e){var n={};if(null==t)return n;var r=!1;e=d(e,function(e){return e=br(e,t),r||(r=e.length>1),e}),Pr(t,ro(t),n),r&&(n=Qe(n,Y|Q|$,Zr));for(var o=e.length;o--;)hr(n,e[o]);return n}),vs=eo(function(t,e){return null==t?{}:function(t,e){return Yn(t,e,function(e,n){return gi(t,n)})}(t,e)}),gs=Yr(yi),ys=Yr(mi),ms=Fr(function(t,e,n){return e=e.toLowerCase(),t+(n?bi(e):e)}),_s=Fr(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),xs=Fr(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),bs=Lr("toLowerCase"),ws=Fr(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),Ss=Fr(function(t,e,n){return t+(n?" ":"")+As(e)}),Os=Fr(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),As=Lr("toUpperCase"),ks=tr(function(t,e){try{return a(t,H,e)}catch(t){return Jo(t)?t:new Ii(t)}}),Es=eo(function(t,e){return s(e,function(e){e=Eo(e),He(t,e,Lu(t[e],t))}),t}),Cs=zr(),Ts=zr(!0),Ps=tr(function(t,e){return function(n){return In(n,t,e)}}),js=tr(function(t,e){return function(n){return In(t,n,e)}}),Ms=Wr(d),Ds=Wr(l),Is=Wr(m),Ls=Vr(),Fs=Vr(!0),Rs=qr(function(t,e){return t+e},0),Ns=Kr("ceil"),zs=qr(function(t,e){return t/e},1),Bs=Kr("floor"),Us=qr(function(t,e){return t*e},1),qs=Kr("round"),Ws=qr(function(t,e){return t-e},0);return r.after=function(t,e){if("function"!=typeof e)throw new Bi(G);return t=li(t),function(){if(--t<1)return e.apply(this,arguments)}},r.ary=Ho,r.assign=ns,r.assignIn=rs,r.assignInWith=os,r.assignWith=is,r.at=as,r.before=Vo,r.bind=Lu,r.bindAll=Es,r.bindKey=Fu,r.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Gu(t)?t:[t]},r.chain=zo,r.chunk=function(t,e,n){e=(n?vo(t,e,n):e===H)?1:ba(li(e),0);var r=null==t?0:t.length;if(!r||e<1)return[];for(var o=0,i=0,a=Mi(da(r/e));o<r;)a[i++]=ir(t,o,o+=e);return a},r.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,o=[];++e<n;){var i=t[e];i&&(o[r++]=i)}return o},r.concat=function(){var t=arguments.length;if(!t)return[];for(var e=Mi(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return v(Gu(n)?Tr(n):[n],_n(e,1))},r.cond=function(t){var e=null==t?0:t.length,n=ao();return t=e?d(t,function(t){if("function"!=typeof t[1])throw new Bi(G);return[n(t[0]),t[1]]}):[],tr(function(n){for(var r=-1;++r<e;){var o=t[r];if(a(o[0],this,n))return a(o[1],this,n)}})},r.conforms=function(t){return function(t){var e=yi(t);return function(n){return nn(n,t,e)}}(Qe(t,Y))},r.constant=Oi,r.countBy=ku,r.create=function(t,e){var n=Wa(t);return null==e?n:We(n,e)},r.curry=function t(e,n,r){var o=Qr(e,rt,H,H,H,H,H,n=r?H:n);return o.placeholder=t.placeholder,o},r.curryRight=function t(e,n,r){var o=Qr(e,ot,H,H,H,H,H,n=r?H:n);return o.placeholder=t.placeholder,o},r.debounce=Go,r.defaults=us,r.defaultsDeep=ss,r.defer=Ru,r.delay=Nu,r.difference=su,r.differenceBy=cu,r.differenceWith=lu,r.drop=function(t,e,n){var r=null==t?0:t.length;return r?ir(t,(e=n||e===H?1:li(e))<0?0:e,r):[]},r.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?ir(t,0,(e=r-(e=n||e===H?1:li(e)))<0?0:e):[]},r.dropRightWhile=function(t,e){return t&&t.length?vr(t,ao(e,3),!0,!0):[]},r.dropWhile=function(t,e){return t&&t.length?vr(t,ao(e,3),!0):[]},r.fill=function(t,e,n,r){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&vo(t,e,n)&&(n=0,r=o),function(t,e,n,r){var o=t.length;for((n=li(n))<0&&(n=-n>o?0:o+n),(r=r===H||r>o?o:li(r))<0&&(r+=o),r=n>r?0:fi(r);n<r;)t[n++]=e;return t}(t,e,n,r)):[]},r.filter=function(t,e){return(Gu(t)?f:pn)(t,ao(e,3))},r.flatMap=function(t,e){return _n(Wo(t,e),1)},r.flatMapDeep=function(t,e){return _n(Wo(t,e),pt)},r.flatMapDepth=function(t,e,n){return n=n===H?1:li(n),_n(Wo(t,e),n)},r.flatten=Mo,r.flattenDeep=function(t){return null!=t&&t.length?_n(t,pt):[]},r.flattenDepth=function(t,e){return null!=t&&t.length?_n(t,e=e===H?1:li(e)):[]},r.flip=function(t){return Qr(t,ct)},r.flow=Cs,r.flowRight=Ts,r.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var o=t[e];r[o[0]]=o[1]}return r},r.functions=function(t){return null==t?[]:kn(t,yi(t))},r.functionsIn=function(t){return null==t?[]:kn(t,mi(t))},r.groupBy=Tu,r.initial=function(t){return null!=t&&t.length?ir(t,0,-1):[]},r.intersection=fu,r.intersectionBy=pu,r.intersectionWith=hu,r.invert=cs,r.invertBy=ls,r.invokeMap=Pu,r.iteratee=ki,r.keyBy=ju,r.keys=yi,r.keysIn=mi,r.map=Wo,r.mapKeys=function(t,e){var n={};return e=ao(e,3),On(t,function(t,r,o){He(n,e(t,r,o),t)}),n},r.mapValues=function(t,e){var n={};return e=ao(e,3),On(t,function(t,r,o){He(n,r,e(t,r,o))}),n},r.matches=function(t){return Hn(Qe(t,Y))},r.matchesProperty=function(t,e){return Vn(t,Qe(e,Y))},r.memoize=Xo,r.merge=ps,r.mergeWith=hs,r.method=Ps,r.methodOf=js,r.mixin=Ei,r.negate=Ko,r.nthArg=function(t){return t=li(t),tr(function(e){return Xn(e,t)})},r.omit=ds,r.omitBy=function(t,e){return _i(t,Ko(ao(e)))},r.once=function(t){return Vo(2,t)},r.orderBy=function(t,e,n,r){return null==t?[]:(Gu(e)||(e=null==e?[]:[e]),Gu(n=r?H:n)||(n=null==n?[]:[n]),Kn(t,e,n))},r.over=Ms,r.overArgs=zu,r.overEvery=Ds,r.overSome=Is,r.partial=Bu,r.partialRight=Uu,r.partition=Mu,r.pick=vs,r.pickBy=_i,r.property=Ti,r.propertyOf=function(t){return function(e){return null==t?H:En(t,e)}},r.pull=du,r.pullAll=Lo,r.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Qn(t,e,ao(n,2)):t},r.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Qn(t,e,H,n):t},r.pullAt=vu,r.range=Ls,r.rangeRight=Fs,r.rearg=qu,r.reject=function(t,e){return(Gu(t)?f:pn)(t,Ko(ao(e,3)))},r.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,o=[],i=t.length;for(e=ao(e,3);++r<i;){var a=t[r];e(a,r,t)&&(n.push(a),o.push(r))}return $n(t,o),n},r.rest=function(t,e){if("function"!=typeof t)throw new Bi(G);return tr(t,e=e===H?e:li(e))},r.reverse=Fo,r.sampleSize=function(t,e,n){return e=(n?vo(t,e,n):e===H)?1:li(e),(Gu(t)?Re:nr)(t,e)},r.set=function(t,e,n){return null==t?t:rr(t,e,n)},r.setWith=function(t,e,n,r){return r="function"==typeof r?r:H,null==t?t:rr(t,e,n,r)},r.shuffle=function(t){return(Gu(t)?Ne:or)(t)},r.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&vo(t,e,n)?(e=0,n=r):(e=null==e?0:li(e),n=n===H?r:li(n)),ir(t,e,n)):[]},r.sortBy=Du,r.sortedUniq=function(t){return t&&t.length?cr(t):[]},r.sortedUniqBy=function(t,e){return t&&t.length?cr(t,ao(e,2)):[]},r.split=function(t,e,n){return n&&"number"!=typeof n&&vo(t,e,n)&&(e=n=H),(n=n===H?gt:n>>>0)?(t=di(t))&&("string"==typeof e||null!=e&&!$u(e))&&!(e=fr(e))&&F(t)?wr(W(t),0,n):t.split(e,n):[]},r.spread=function(t,e){if("function"!=typeof t)throw new Bi(G);return e=null==e?0:ba(li(e),0),tr(function(n){var r=n[e],o=wr(n,0,e);return r&&v(o,r),a(t,this,o)})},r.tail=function(t){var e=null==t?0:t.length;return e?ir(t,1,e):[]},r.take=function(t,e,n){return t&&t.length?ir(t,0,(e=n||e===H?1:li(e))<0?0:e):[]},r.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?ir(t,(e=r-(e=n||e===H?1:li(e)))<0?0:e,r):[]},r.takeRightWhile=function(t,e){return t&&t.length?vr(t,ao(e,3),!1,!0):[]},r.takeWhile=function(t,e){return t&&t.length?vr(t,ao(e,3)):[]},r.tap=function(t,e){return e(t),t},r.throttle=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new Bi(G);return ni(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Go(t,e,{leading:r,maxWait:e,trailing:o})},r.thru=Bo,r.toArray=si,r.toPairs=gs,r.toPairsIn=ys,r.toPath=function(t){return Gu(t)?d(t,Eo):ui(t)?[t]:Tr(uu(di(t)))},r.toPlainObject=hi,r.transform=function(t,e,n){var r=Gu(t),o=r||Ku(t)||Zu(t);if(e=ao(e,4),null==n){var i=t&&t.constructor;n=o?r?new i:[]:ni(t)&&Zo(i)?Wa(ra(t)):{}}return(o?s:On)(t,function(t,r,o){return e(n,t,r,o)}),n},r.unary=function(t){return Ho(t,1)},r.union=gu,r.unionBy=yu,r.unionWith=mu,r.uniq=function(t){return t&&t.length?pr(t):[]},r.uniqBy=function(t,e){return t&&t.length?pr(t,ao(e,2)):[]},r.uniqWith=function(t,e){return e="function"==typeof e?e:H,t&&t.length?pr(t,H,e):[]},r.unset=function(t,e){return null==t||hr(t,e)},r.unzip=Ro,r.unzipWith=No,r.update=function(t,e,n){return null==t?t:dr(t,e,xr(n))},r.updateWith=function(t,e,n,r){return r="function"==typeof r?r:H,null==t?t:dr(t,e,xr(n),r)},r.values=xi,r.valuesIn=function(t){return null==t?[]:j(t,mi(t))},r.without=_u,r.words=Si,r.wrap=function(t,e){return Bu(xr(e),t)},r.xor=xu,r.xorBy=bu,r.xorWith=wu,r.zip=Su,r.zipObject=function(t,e){return mr(t||[],e||[],Be)},r.zipObjectDeep=function(t,e){return mr(t||[],e||[],rr)},r.zipWith=Ou,r.entries=gs,r.entriesIn=ys,r.extend=rs,r.extendWith=os,Ei(r,r),r.add=Rs,r.attempt=ks,r.camelCase=ms,r.capitalize=bi,r.ceil=Ns,r.clamp=function(t,e,n){return n===H&&(n=e,e=H),n!==H&&(n=(n=pi(n))==n?n:0),e!==H&&(e=(e=pi(e))==e?e:0),Ke(pi(t),e,n)},r.clone=function(t){return Qe(t,$)},r.cloneDeep=function(t){return Qe(t,Y|$)},r.cloneDeepWith=function(t,e){return Qe(t,Y|$,e="function"==typeof e?e:H)},r.cloneWith=function(t,e){return Qe(t,$,e="function"==typeof e?e:H)},r.conformsTo=function(t,e){return null==e||nn(t,e,yi(e))},r.deburr=wi,r.defaultTo=function(t,e){return null==t||t!=t?e:t},r.divide=zs,r.endsWith=function(t,e,n){t=di(t),e=fr(e);var r=t.length,o=n=n===H?r:Ke(li(n),0,r);return(n-=e.length)>=0&&t.slice(n,o)==e},r.eq=Yo,r.escape=function(t){return(t=di(t))&&re.test(t)?t.replace(ee,bn):t},r.escapeRegExp=function(t){return(t=di(t))&&fe.test(t)?t.replace(le,"\\$&"):t},r.every=function(t,e,n){var r=Gu(t)?l:cn;return n&&vo(t,e,n)&&(e=H),r(t,ao(e,3))},r.find=Eu,r.findIndex=Po,r.findKey=function(t,e){return _(t,ao(e,3),On)},r.findLast=Cu,r.findLastIndex=jo,r.findLastKey=function(t,e){return _(t,ao(e,3),An)},r.floor=Bs,r.forEach=Uo,r.forEachRight=qo,r.forIn=function(t,e){return null==t?t:Ga(t,ao(e,3),mi)},r.forInRight=function(t,e){return null==t?t:Xa(t,ao(e,3),mi)},r.forOwn=function(t,e){return t&&On(t,ao(e,3))},r.forOwnRight=function(t,e){return t&&An(t,ao(e,3))},r.get=vi,r.gt=Wu,r.gte=Hu,r.has=function(t,e){return null!=t&&lo(t,e,jn)},r.hasIn=gi,r.head=Do,r.identity=Ai,r.includes=function(t,e,n,r){t=Qo(t)?t:xi(t),n=n&&!r?li(n):0;var o=t.length;return n<0&&(n=ba(o+n,0)),ai(t)?n<=o&&t.indexOf(e,n)>-1:!!o&&b(t,e,n)>-1},r.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:li(n);return o<0&&(o=ba(r+o,0)),b(t,e,o)},r.inRange=function(t,e,n){return e=ci(e),n===H?(n=e,e=0):n=ci(n),function(t,e,n){return t>=wa(e,n)&&t<ba(e,n)}(t=pi(t),e,n)},r.invoke=fs,r.isArguments=Vu,r.isArray=Gu,r.isArrayBuffer=Xu,r.isArrayLike=Qo,r.isArrayLikeObject=$o,r.isBoolean=function(t){return!0===t||!1===t||ri(t)&&Tn(t)==St},r.isBuffer=Ku,r.isDate=Yu,r.isElement=function(t){return ri(t)&&1===t.nodeType&&!ii(t)},r.isEmpty=function(t){if(null==t)return!0;if(Qo(t)&&(Gu(t)||"string"==typeof t||"function"==typeof t.splice||Ku(t)||Zu(t)||Vu(t)))return!t.length;var e=nu(t);if(e==Tt||e==Lt)return!t.size;if(mo(t))return!Bn(t).length;for(var n in t)if(Gi.call(t,n))return!1;return!0},r.isEqual=function(t,e){return Fn(t,e)},r.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:H)?n(t,e):H;return r===H?Fn(t,e,H,n):!!r},r.isError=Jo,r.isFinite=function(t){return"number"==typeof t&&ma(t)},r.isFunction=Zo,r.isInteger=ti,r.isLength=ei,r.isMap=Qu,r.isMatch=function(t,e){return t===e||Rn(t,e,so(e))},r.isMatchWith=function(t,e,n){return n="function"==typeof n?n:H,Rn(t,e,so(e),n)},r.isNaN=function(t){return oi(t)&&t!=+t},r.isNative=function(t){if(ru(t))throw new Ii("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Nn(t)},r.isNil=function(t){return null==t},r.isNull=function(t){return null===t},r.isNumber=oi,r.isObject=ni,r.isObjectLike=ri,r.isPlainObject=ii,r.isRegExp=$u,r.isSafeInteger=function(t){return ti(t)&&t>=-ht&&t<=ht},r.isSet=Ju,r.isString=ai,r.isSymbol=ui,r.isTypedArray=Zu,r.isUndefined=function(t){return t===H},r.isWeakMap=function(t){return ri(t)&&nu(t)==zt},r.isWeakSet=function(t){return ri(t)&&"[object WeakSet]"==Tn(t)},r.join=function(t,e){return null==t?"":_a.call(t,e)},r.kebabCase=_s,r.last=Io,r.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r;return n!==H&&(o=(o=li(n))<0?ba(r+o,0):wa(o,r-1)),e==e?function(t,e,n){for(var r=o+1;r--;)if(t[r]===e)return r;return r}(t,e):x(t,S,o,!0)},r.lowerCase=xs,r.lowerFirst=bs,r.lt=ts,r.lte=es,r.max=function(t){return t&&t.length?fn(t,Ai,Pn):H},r.maxBy=function(t,e){return t&&t.length?fn(t,ao(e,2),Pn):H},r.mean=function(t){return O(t,Ai)},r.meanBy=function(t,e){return O(t,ao(e,2))},r.min=function(t){return t&&t.length?fn(t,Ai,qn):H},r.minBy=function(t,e){return t&&t.length?fn(t,ao(e,2),qn):H},r.stubArray=Pi,r.stubFalse=ji,r.stubObject=function(){return{}},r.stubString=function(){return""},r.stubTrue=function(){return!0},r.multiply=Us,r.nth=function(t,e){return t&&t.length?Xn(t,li(e)):H},r.noConflict=function(){return un._===this&&(un._=$i),this},r.noop=Ci,r.now=Iu,r.pad=function(t,e,n){t=di(t);var r=(e=li(e))?q(t):0;if(!e||r>=e)return t;var o=(e-r)/2;return Hr(va(o),n)+t+Hr(da(o),n)},r.padEnd=function(t,e,n){t=di(t);var r=(e=li(e))?q(t):0;return e&&r<e?t+Hr(e-r,n):t},r.padStart=function(t,e,n){t=di(t);var r=(e=li(e))?q(t):0;return e&&r<e?Hr(e-r,n)+t:t},r.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),Oa(di(t).replace(he,""),e||0)},r.random=function(t,e,n){if(n&&"boolean"!=typeof n&&vo(t,e,n)&&(e=n=H),n===H&&("boolean"==typeof e?(n=e,e=H):"boolean"==typeof t&&(n=t,t=H)),t===H&&e===H?(t=0,e=1):(t=ci(t),e===H?(e=t,t=0):e=ci(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var o=Aa();return wa(t+o*(e-t+rn("1e-"+((o+"").length-1))),e)}return Jn(t,e)},r.reduce=function(t,e,n){var r=Gu(t)?g:E,o=arguments.length<3;return r(t,ao(e,4),n,o,Ha)},r.reduceRight=function(t,e,n){var r=Gu(t)?y:E,o=arguments.length<3;return r(t,ao(e,4),n,o,Va)},r.repeat=function(t,e,n){return e=(n?vo(t,e,n):e===H)?1:li(e),Zn(di(t),e)},r.replace=function(){var t=arguments,e=di(t[0]);return t.length<3?e:e.replace(t[1],t[2])},r.result=function(t,e,n){var r=-1,o=(e=br(e,t)).length;for(o||(o=1,t=H);++r<o;){var i=null==t?H:t[Eo(e[r])];i===H&&(r=o,i=n),t=Zo(i)?i.call(t):i}return t},r.round=qs,r.runInContext=e,r.sample=function(t){return(Gu(t)?Fe:er)(t)},r.size=function(t){if(null==t)return 0;if(Qo(t))return ai(t)?q(t):t.length;var e=nu(t);return e==Tt||e==Lt?t.size:Bn(t).length},r.snakeCase=ws,r.some=function(t,e,n){var r=Gu(t)?m:ar;return n&&vo(t,e,n)&&(e=H),r(t,ao(e,3))},r.sortedIndex=function(t,e){return ur(t,e)},r.sortedIndexBy=function(t,e,n){return sr(t,e,ao(n,2))},r.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=ur(t,e);if(r<n&&Yo(t[r],e))return r}return-1},r.sortedLastIndex=function(t,e){return ur(t,e,!0)},r.sortedLastIndexBy=function(t,e,n){return sr(t,e,ao(n,2),!0)},r.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=ur(t,e,!0)-1;if(Yo(t[n],e))return n}return-1},r.startCase=Ss,r.startsWith=function(t,e,n){return t=di(t),n=null==n?0:Ke(li(n),0,t.length),e=fr(e),t.slice(n,n+e.length)==e},r.subtract=Ws,r.sum=function(t){return t&&t.length?C(t,Ai):0},r.sumBy=function(t,e){return t&&t.length?C(t,ao(e,2)):0},r.template=function(t,e,n){var o=r.templateSettings;n&&vo(t,e,n)&&(e=H),t=di(t),e=os({},e,o,$r);var i,a,u=os({},e.imports,o.imports,$r),s=yi(u),c=j(u,s),l=0,f=e.interpolate||Ce,p="__p += '",h=Ni((e.escape||Ce).source+"|"+f.source+"|"+(f===ae?xe:Ce).source+"|"+(e.evaluate||Ce).source+"|$","g"),d="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++Ze+"]")+"\n";t.replace(h,function(e,n,r,o,u,s){return r||(r=o),p+=t.slice(l,s).replace(Te,L),n&&(i=!0,p+="' +\n__e("+n+") +\n'"),u&&(a=!0,p+="';\n"+u+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=s+e.length,e}),p+="';\n";var v=e.variable;v||(p="with (obj) {\n"+p+"\n}\n"),p=(a?p.replace($t,""):p).replace(Jt,"$1").replace(Zt,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=ks(function(){return Li(s,d+"return "+p).apply(H,c)});if(g.source=p,Jo(g))throw g;return g},r.times=function(t,e){if((t=li(t))<1||t>ht)return[];var n=gt,r=wa(t,gt);e=ao(e),t-=gt;for(var o=T(r,e);++n<t;)e(n);return o},r.toFinite=ci,r.toInteger=li,r.toLength=fi,r.toLower=function(t){return di(t).toLowerCase()},r.toNumber=pi,r.toSafeInteger=function(t){return t?Ke(li(t),-ht,ht):0===t?t:0},r.toString=di,r.toUpper=function(t){return di(t).toUpperCase()},r.trim=function(t,e,n){if((t=di(t))&&(n||e===H))return t.replace(pe,"");if(!t||!(e=fr(e)))return t;var r=W(t),o=W(e);return wr(r,D(r,o),I(r,o)+1).join("")},r.trimEnd=function(t,e,n){if((t=di(t))&&(n||e===H))return t.replace(de,"");if(!t||!(e=fr(e)))return t;var r=W(t);return wr(r,0,I(r,W(e))+1).join("")},r.trimStart=function(t,e,n){if((t=di(t))&&(n||e===H))return t.replace(he,"");if(!t||!(e=fr(e)))return t;var r=W(t);return wr(r,D(r,W(e))).join("")},r.truncate=function(t,e){var n=30,r="...";if(ni(e)){var o="separator"in e?e.separator:o;n="length"in e?li(e.length):n,r="omission"in e?fr(e.omission):r}var i=(t=di(t)).length;if(F(t)){var a=W(t);i=a.length}if(n>=i)return t;var u=n-q(r);if(u<1)return r;var s=a?wr(a,0,u).join(""):t.slice(0,u);if(o===H)return s+r;if(a&&(u+=s.length-u),$u(o)){if(t.slice(u).search(o)){var c,l=s;for(o.global||(o=Ni(o.source,di(be.exec(o))+"g")),o.lastIndex=0;c=o.exec(l);)var f=c.index;s=s.slice(0,f===H?u:f)}}else if(t.indexOf(fr(o),u)!=u){var p=s.lastIndexOf(o);p>-1&&(s=s.slice(0,p))}return s+r},r.unescape=function(t){return(t=di(t))&&ne.test(t)?t.replace(te,wn):t},r.uniqueId=function(t){var e=++Xi;return di(t)+e},r.upperCase=Os,r.upperFirst=As,r.each=Uo,r.eachRight=qo,r.first=Do,Ei(r,function(){var t={};return On(r,function(e,n){Gi.call(r.prototype,n)||(t[n]=e)}),t}(),{chain:!1}),r.VERSION="4.17.11",s(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){r[t].placeholder=r}),s(["drop","take"],function(t,e){k.prototype[t]=function(n){n=n===H?1:ba(li(n),0);var r=this.__filtered__&&!e?new k(this):this.clone();return r.__filtered__?r.__takeCount__=wa(n,r.__takeCount__):r.__views__.push({size:wa(n,gt),type:t+(r.__dir__<0?"Right":"")}),r},k.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),s(["filter","map","takeWhile"],function(t,e){var n=e+1,r=1==n||3==n;k.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ao(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),s(["head","last"],function(t,e){var n="take"+(e?"Right":"");k.prototype[t]=function(){return this[n](1).value()[0]}}),s(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");k.prototype[t]=function(){return this.__filtered__?new k(this):this[n](1)}}),k.prototype.compact=function(){return this.filter(Ai)},k.prototype.find=function(t){return this.filter(t).head()},k.prototype.findLast=function(t){return this.reverse().find(t)},k.prototype.invokeMap=tr(function(t,e){return"function"==typeof t?new k(this):this.map(function(n){return In(n,t,e)})}),k.prototype.reject=function(t){return this.filter(Ko(ao(t)))},k.prototype.slice=function(t,e){t=li(t);var n=this;return n.__filtered__&&(t>0||e<0)?new k(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==H&&(n=(e=li(e))<0?n.dropRight(-e):n.take(e-t)),n)},k.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},k.prototype.toArray=function(){return this.take(gt)},On(k.prototype,function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),o=/^(?:head|last)$/.test(e),a=r[o?"take"+("last"==e?"Right":""):e],u=o||/^find/.test(e);a&&(r.prototype[e]=function(){var e=this.__wrapped__,s=o?[1]:arguments,c=e instanceof k,l=s[0],f=c||Gu(e),p=function(t){var e=a.apply(r,v([t],s));return o&&h?e[0]:e};f&&n&&"function"==typeof l&&1!=l.length&&(c=f=!1);var h=this.__chain__,d=!!this.__actions__.length,g=u&&!h,y=c&&!d;if(!u&&f){e=y?e:new k(this);var m=t.apply(e,s);return m.__actions__.push({func:Bo,args:[p],thisArg:H}),new i(m,h)}return g&&y?t.apply(this,s):(m=this.thru(p),g?o?m.value()[0]:m.value():m)})}),s(["pop","push","shift","sort","splice","unshift"],function(t){var e=Ui[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",o=/^(?:pop|shift)$/.test(t);r.prototype[t]=function(){var t=arguments;if(o&&!this.__chain__){var r=this.value();return e.apply(Gu(r)?r:[],t)}return this[n](function(n){return e.apply(Gu(n)?n:[],t)})}}),On(k.prototype,function(t,e){var n=r[e];if(n){var o=n.name+"";(Ia[o]||(Ia[o]=[])).push({name:e,func:n})}}),Ia[Br(H,et).name]=[{name:"wrapper",func:H}],k.prototype.clone=function(){var t=new k(this.__wrapped__);return t.__actions__=Tr(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=Tr(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=Tr(this.__views__),t},k.prototype.reverse=function(){if(this.__filtered__){var t=new k(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},k.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=Gu(t),r=e<0,o=n?t.length:0,i=function(t,e,n){for(var r=-1,o=n.length;++r<o;){var i=n[r],a=i.size;switch(i.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=wa(e,t+a);break;case"takeRight":t=ba(t,e-a)}}return{start:t,end:e}}(0,o,this.__views__),a=i.start,u=i.end,s=u-a,c=r?u:a-1,l=this.__iteratees__,f=l.length,p=0,h=wa(s,this.__takeCount__);if(!n||!r&&o==s&&h==s)return gr(t,this.__actions__);var d=[];t:for(;s--&&p<h;){for(var v=-1,g=t[c+=e];++v<f;){var y=l[v],m=y.iteratee,_=y.type,x=m(g);if(2==_)g=x;else if(!x){if(1==_)continue t;break t}}d[p++]=g}return d},r.prototype.at=Au,r.prototype.chain=function(){return zo(this)},r.prototype.commit=function(){return new i(this.value(),this.__chain__)},r.prototype.next=function(){this.__values__===H&&(this.__values__=si(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?H:this.__values__[this.__index__++]}},r.prototype.plant=function(t){for(var e,n=this;n instanceof o;){var r=To(n);r.__index__=0,r.__values__=H,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e},r.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof k){var e=t;return this.__actions__.length&&(e=new k(this)),(e=e.reverse()).__actions__.push({func:Bo,args:[Fo],thisArg:H}),new i(e,this.__chain__)}return this.thru(Fo)},r.prototype.toJSON=r.prototype.valueOf=r.prototype.value=function(){return gr(this.__wrapped__,this.__actions__)},r.prototype.first=r.prototype.head,sa&&(r.prototype[sa]=function(){return this}),r}();un._=Sn,(i=function(){return Sn}.call(n,r,n,o))===H||(o.exports=i)}).call(this)}).call(n,r("DuR2"),r("3IRH")(e))},"2vZo":function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){function n(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){u.label=n[1];break}if(6===n[0]&&u.label<i[1]){u.label=i[1],i=n;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(n);break}i[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}var r,o,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){try{Object.defineProperty(wx,"request",{get:function(){return t}})}catch(t){console.log("无法重写 wx.request 方法",t)}};e.requestHook={before:function(t){var n=wx.request;return i(function(e){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,t(e)];case 1:return o.sent(),[3,3];case 2:return r=o.sent(),console.error(r),[3,3];case 3:return n(e),[2]}})})}),e.requestHook},after:function(t){var n=wx.request;return i(function(e){var r=e.success;e.success=function(n){"function"==typeof r&&r(n),t(n,e)},n(e)}),e.requestHook}}},"33ci":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n("//Fk"));getApp();var o=n("dv6X"),i={setApp:function(){getApp()},getStockInfo:null,queryStockInfo:function(t,e){this.getStockInfo=new r.default(function(n,r){o.request({url:"/cgi-bin/stockinfo.fcgi",data:{scode:t,markets:e,needfive:1,needquote:1,needfollow:1},success:function(t){n(t)},fail:function(t){r(t)}})})},getPrimary:null,queryPrimary:function(t,e){this.getPrimary=new r.default(function(n,r){o.request({url:"/cgi-bin/stockinfo.fcgi",data:{type:1,markets:e,scode:t},success:function(t){n(t)},fail:function(t){r(t)}})})},getUserStock:null,queryUserStock:function(t){this.getUserStock=new r.default(function(e,n){var r={url:"/cgi-bin/userstock.fcgi",data:{action:1,new_price:1,is_hold:1,get_market:1,outputtype:3},success:function(t){e(t)},fail:function(t){n(t)}};t.request(r)})}};e.default=i},"33nk":function(t,e,n){(function(t,r){function o(t){return t&&t.__esModule?t:{default:t}}function i(t){Error.call(this),this.message=t,this.name=i.name,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,i)}var a,u,s,c=o(n("//Fk")),l=o(n("pFYg")),f=o(n("HSQo")),p=o(n("OvRC"));i.prototype=(0,p.default)(Error.prototype),i.prototype.constructor=i,Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice,n=e.call(arguments,1),r=this,o=function(){},i=function(){return r.apply(this instanceof o?this:t,n.concat(e.call(arguments)))};return this.prototype&&(o.prototype=this.prototype),i.prototype=new o,i}),function(t,o){function h(t){var e=this;(0,f.default)(this,{_subscribers:{value:[]},_invokeHandlers:{value:[],writable:!0},_invokeHandler:{value:A,writable:!0},_filterHandles:{value:[],writable:!0},_filterHandle:{value:k,writable:!0},resolve:{value:this.resolve.bind(this)},reject:{value:this.reject.bind(this)}}),"function"==typeof t&&M(function(){try{e.resolve(t())}catch(t){e.reject(t)}})}function d(t){return t instanceof h}function v(t){return d(t)?t:x(t)}function g(t){return!!t&&"fucntion"==typeof t.next&&"function"==typeof t.throw}function y(t){if(!t)return!1;var e=t.constructor;return!!e&&("GeneratorFunction"===e.name||"GeneratorFunction"===e.displayName||g(e.prototype))}function m(){if(y(fn)||g(fn))return S(fn);var t=function(){return this}(),e=new h;return fn.call(t,function(t){return function(e,n){return e instanceof Error?t.reject(e):arguments.length<2?t.resolve(e):void(1===(n=null===e||e===o?I.call(arguments,1):I.call(arguments,0)).length?t.resolve(n[0]):t.resolve(n))}}(e)),e}function _(t){var e=new h;return e.reject(t),e}function x(t){var e=new h;return e.resolve(t),e}function b(t){return v(t).then(function(t){var e=new h;return D.call(t,function(t){v(t).fill(e)}),e})}function w(t){return v(t).then(function(t){var e=t.length,n=function(t){var e=0;return D.call(t,function(){++e}),e}(t),r=new Array(e);if(0===n)return r;var o=new h;return D.call(t,function(t,e){v(t).then(function(t){r[e]=t,0==--n&&o.resolve(r)},o.reject)}),o})}function S(t){function e(e){try{r(t.next(e))}catch(t){a.reject(t)}}function n(e){try{r(t.throw(e))}catch(t){a.reject(t)}}function r(t){t.done?a.resolve(t.value):("function"==typeof t.value?m(t.value):v(t.value)).then(e,n)}var o=function(){return this}();if("function"==typeof t){var i=I.call(arguments,1);t=t.apply(o,i)}if(!t||"function"!=typeof t.next)return v(t);var a=new h;return e(),a}function O(t,e){return function(){return e=e||this,w(arguments).then(function(n){var r=t.apply(e,n);return y(r)||g(r)?S.call(e,r):r})}}function A(t,e){return null}function k(t){return h.promise(function(e,n){e(t)})}function E(t,e,n){return arguments.length>2?w(t).then(function(r){return v(n).then(function(n){return t.reduceRight(e,n)})}):w(t).then(function(t){return t.reduceRight(e)})}function C(t,e,n){M(function(){try{var r=t(n);e.resolve(r)}catch(t){e.reject(t)}})}function T(t,e,n){if(t){if(this._filterHandles.length>0)return void this._filterHandle(n).then(function(n){C(t,e,n)},function(t){e.reject(t)});C(t,e,n)}else e.resolve(n)}function P(t,e,n){t?C(t,e,n):e.reject(n)}function j(){h.call(this),executor(this.resolve,this.reject)}var M=void 0===t.process||"[object process]"!==Object.prototype.toString.call(t.process)||t.process.browser?"function"==typeof t.setImmediate?t.setImmediate:function(t){setTimeout(t,0)}:t.process.nextTick,D=Array.prototype.forEach,I=Array.prototype.slice;S.wrap=O,(0,f.default)(h,{delayed:{value:function(t,e){var n="function"==typeof e?e:function(){return e},r=new h;return setTimeout(function(){try{r.resolve(n())}catch(t){r.reject(t)}},t),r}},error:{value:_},value:{value:x},sync:{value:function(t){try{return x(t())}catch(t){return _(t)}}},all:{value:w},race:{value:b},resolve:{value:x},reject:{value:_},promise:{value:function(t){var e=new h;return t(e.resolve,e.reject),e}},isPPdog:{value:d},toPPdog:{value:v},isPromise:{value:function(t){return"function"==typeof t.then}},toPromise:{value:function(t){return y(t)||g(t)?S(t):v(t)}},co:{value:S},wrap:{value:O},thunkify:{value:function(t){return function(){var e=I.call(arguments,0),n=this,r=new h;e.push(function(){n=this,r.resolve(arguments)});try{t.apply(this,e)}catch(t){r.resolve([t])}return function(t){r.then(function(e){t.apply(n,e)})}}}},reduceRight:{value:E}}),(0,f.default)(h.prototype,{_value:{writable:!0},_reason:{writable:!0},_state:{value:0,writable:!0},resolve:{value:function(t){if(this._invokeHandlers.length>0&&this._invokeHandler.call(this,t),t!==this)if(d(t))t.fill(this);else{if(null!==t&&"object"===(void 0===t?"undefined":(0,l.default)(t))||"function"==typeof t){var e;try{e=t.then}catch(t){return void this.reject(t)}if("function"==typeof e){var n=!0;try{var r=this;return void e.call(t,function(t){n&&(n=!1,r.resolve(t))},function(t){n&&(n=!1,r.reject(t))})}catch(t){n&&(n=!1,this.reject(t))}return}}if(0===this._state){this._state=1,this._value=t;for(var o=this._subscribers;o.length>0;){var i=o.shift();T.call(this,i.onfulfill,i.next,t)}}}else this.reject(new TypeError("Self resolution"))}},reject:{value:function(t){if(0===this._state){this._state=2,this._reason=t;for(var e=this._subscribers;e.length>0;){var n=e.shift();P(n.onreject,n.next,t)}}}},then:{value:function(t,e){"function"!=typeof t&&(t=null),"function"!=typeof e&&(e=null);var n=new h;return 1===this._state?T.call(this,t,n,this._value):2===this._state?P(e,n,this._reason):this._subscribers.push({onfulfill:t,onreject:e,next:n}),n}},done:{value:function(t,e){this.then(t,e).then(null,function(t){M(function(){throw t})})}},catch:{value:function(t){return this.then(null,t)}},fail:{value:function(t){this.done(null,t)}},inspect:{value:function(){switch(this._state){case 0:return{state:"pending"};case 1:return{state:"fulfilled",value:this._value};case 2:return{state:"rejected",reason:this._reason}}}},whenComplete:{value:function(t){return this.then(function(e){return t(),e},function(e){throw t(),e})}},complete:{value:function(t){return t=t||function(t){return t},this.then(t,t)}},always:{value:function(t){this.done(t,t)}},fill:{value:function(t){this.then(t.resolve,t.reject)}},timeout:{value:function(t,e){var n=new h,r=setTimeout(function(){n.reject(e||new i("timeout"))},t);return this.whenComplete(function(){clearTimeout(r)}).fill(n),n}},delay:{value:function(t){var e=new h;return this.then(function(n){setTimeout(function(){e.resolve(n)},t)},e.reject),e}},reduceRight:{value:function(t,e){return arguments.length>1?E(this,t,e):E(this,t)}},use:{value:function(t,e){return e=e||function(){return this}(),function(t,e){this._invokeHandlers.push(t),this._invokeHandler=this._invokeHandlers.reduceRight(function(t,n){return function(r){return h.toPromise(n(r,e,t))}},A)}.call(this,t,e),this}},filter:{value:function(t){return function(t){this._filterHandles.push(t),this._filterHandle=this._filterHandles.reduceRight(function(t,e){return function(n){return h.toPromise(e(n,t))}},k)}.call(this,t),this}}}),t.PPdog=h,n("LGuY").cmd?(u=[],(s="function"==typeof(a=h)?a.apply(e,u):a)===o||(r.exports=s)):(s=function(){return h}.apply(e,u=[]))===o||(r.exports=s),"object"===(0,l.default)(r)&&(r.exports=h),"function"!=typeof c.default?(j.prototype=(0,p.default)(h.prototype),j.prototype.constructor=h,(0,f.default)(j,{all:{value:w},race:{value:b},resolve:{value:x},reject:{value:_}}),t.Promise=j):t.Promise=c.default}("object"===(void 0===t?"undefined":(0,l.default)(t))?t:"object"===("undefined"==typeof window?"undefined":(0,l.default)(window))?window:"object"===("undefined"==typeof self?"undefined":(0,l.default)(self))?self:void 0),function(t,e){Array.prototype.slice;var n=t.PPdog,r=["invoke","showNavigationBarLoading","hideNavigationBarLoading","navigateBack","drawCanvas","canvasToTempFilePath","hideKeyboard","getPublicLibVersion"];for(var o in n.wx={},wx)"function"==typeof wx[o]&&r.indexOf(o)<0&&o.search(/(^(on|create|stop|pause))|((Sync)$)/)<0?n.wx[o]=function(t){return function(e){e=e||{};var r=new n;try{e.success=r.resolve,e.fail=r.reject,wx.getSystemInfo({complete:function(n){e.data=e.data||{},e.data.scenes=n.platform&&"ios"===n.platform?5:6,wx[t](e)}})}catch(t){r.reject(t)}return r}}(o):n.wx[o]=wx[o]}("object"===(void 0===t?"undefined":(0,l.default)(t))?t:"object"===("undefined"==typeof window?"undefined":(0,l.default)(window))?window:"object"===("undefined"==typeof self?"undefined":(0,l.default)(self))?self:void 0)}).call(e,n("DuR2"),n("3IRH")(t))},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"3fs2":function(t,e,n){var r=n("RY/4"),o=n("dSzd")("iterator"),i=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"3jpz":function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k"),c=n("sPVI");(r.prototype=new i).initialize=function(){var t,e,n=this.options,r=[],i=[],a=[],u=n.hlocData,s=n.bollData.items;o.each(s,function(t,e){var n=parseFloat(t.UPPER),o=parseFloat(t.LOWER),u=parseFloat(t.MID);isNaN(n)||r.push(n),isNaN(o)||i.push(o),isNaN(u)||a.push(u)}),r.length>n.maxCount&&(u=u.slice(u.length-n.maxCount),r=r.slice(r.length-n.maxCount),i=i.slice(i.length-n.maxCount),a=a.slice(a.length-n.maxCount)),o.each(r,function(n,r){var o=i[r];t=void 0===t?n:n>t?n:t,e=void 0===e?o:o<e?o:e}),n.high=t,n.low=e,n.middleValue=o.div(t+e,2),this.hlocOptions={region:n.region,data:{items:u},maxCount:n.maxCount,color:n.hlocColor,middleValue:n.middleValue},this.upperOptions={region:n.region,data:{items:r},color:n.upperColor,maxCount:n.maxCount,middleValue:n.middleValue},this.lowerOptions={region:n.region,data:{items:i},color:n.lowerColor,maxCount:n.maxCount,middleValue:n.middleValue},this.middleOptions={region:n.region,data:{items:a},color:n.middleColor,maxCount:n.maxCount,middleValue:n.middleValue}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:t.high.toFixed(2),color:e.color},{text:t.low.toFixed(2),color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new c(t,this.hlocOptions),n=new s(t,this.upperOptions),r=new s(t,this.lowerOptions),o=new s(t,this.middleOptions);e.paint(),n.paint(),r.paint(),o.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},"443i":function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Inject=function(t){return Object(a.createDecorator)(function(e,n){void 0===e.inject&&(e.inject={}),Array.isArray(e.inject)||(e.inject[n]=t||n)})},n.Provide=function(t){return Object(a.createDecorator)(function(e,n){var r=e.provide;if("function"!=typeof r||!r.managed){var o=e.provide;(r=e.provide=function(){var t=Object.create(("function"==typeof o?o.call(this):o)||null);for(var e in r.managed)t[r.managed[e]]=this[e];return t}).managed={}}r.managed[n]=t||n})},n.Model=function(t,e){return void 0===e&&(e={}),Object(a.createDecorator)(function(n,r){(n.props||(n.props={}))[r]=e,n.model={prop:r,event:t||r}})},n.Prop=function(t){return void 0===t&&(t={}),Object(a.createDecorator)(function(e,n){(e.props||(e.props={}))[n]=t})},n.Watch=function(e,n){void 0===n&&(n={});var r=n.deep,o=void 0!==r&&r,i=n.immediate,u=void 0!==i&&i;return Object(a.createDecorator)(function(n,r){"object"!=t(n.watch)&&(n.watch=Object.create(null));var i=n.watch;"object"!=t(i[e])||Array.isArray(i[e])?void 0===i[e]&&(i[e]=[]):i[e]=[i[e]],i[e].push({handler:r,deep:o,immediate:u})})},n.Emit=function(t){return function(e,n,r){n=c(n);var o=r.value;r.value=function(){for(var e=this,r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var a=function(o){void 0!==o&&r.unshift(o),e.$emit.apply(e,[t||n].concat(r))},u=o.apply(this,r);!function(t){return t instanceof Promise||t&&"function"==typeof t.then}(u)?a(u):u.then(function(t){a(t)})}}};var o=r("5nAL"),i=r.n(o),a=r("c+8m"),u=r.n(a);r.d(n,"Component",function(){return u.a}),r.d(n,"Vue",function(){return i.a}),r.o(a,"mixins")&&r.d(n,"Mixins",function(){return a.mixins});var s=/\B([A-Z])/g,c=function(t){return t.replace(s,"-$1").toLowerCase()}},"4jCy":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("SWxZ"),o=n.n(r),i=n("A2Du"),a=n("ybqe")(o.a,i.a,function(t){n("vF0O")},"data-v-e9206f92",null);e.default=a.exports},"4mcu":function(t,e){t.exports=function(){}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"5PlU":function(t,e,n){var r=n("RY/4"),o=n("dSzd")("iterator"),i=n("/bQp");t.exports=n("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},"5QVw":function(t,e,n){t.exports={default:n("BwfY"),__esModule:!0}},"5nAL":function(e,n,r){(function(n){try{n||(n={}),n.process=n.process||{},n.process.env=n.process.env||{},n.App=n.App||App,n.Page=n.Page||Page,n.Component=n.Component||Component,n.getApp=n.getApp||getApp,"undefined"!=typeof wx?(n.mpvue=wx,n.mpvuePlatform="wx"):"undefined"!=typeof swan?(n.mpvue=swan,n.mpvuePlatform="swan"):"undefined"!=typeof tt?(n.mpvue=tt,n.mpvuePlatform="tt"):"undefined"!=typeof my&&(n.mpvue=my,n.mpvuePlatform="my")}catch(t){}!function(t,n){e.exports=n()}(0,function(){function e(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t}function a(e){return null!==e&&"object"==(void 0===e?"undefined":t(e))}function u(t){return"[object Object]"===Gt.call(t)}function s(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function c(e){return null==e?"":"object"==(void 0===e?"undefined":t(e))?JSON.stringify(e,null,2):String(e)}function l(t){var e=parseFloat(t);return isNaN(e)?t:e}function f(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function p(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function h(t,e){return Yt.call(t,e)}function d(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function v(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function g(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function y(t,e){for(var n in e)t[n]=e[n];return t}function m(t,e,n){}function _(t,e){var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function x(t,e){for(var n=0;n<t.length;n++)if(_(t[n],e))return n;return-1}function b(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function w(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function S(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function O(t,e,n){if(ae.errorHandler)ae.errorHandler.call(null,t,e,n);else{if(!fe||"undefined"==typeof console)throw t;console.error(t)}}function A(t){return"function"==typeof t&&/native code/.test(t.toString())}function k(t,e,n){t.__proto__=e}function E(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];S(t,i,e[i])}}function C(t,e,n){var r;if(a(t))return h(t,"__ob__")&&t.__ob__ instanceof Ce?r=t.__ob__:Ee.shouldConvert&&!ye()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(r=new Ce(t,n)),e&&r&&r.vmCount++,r}function T(t,e,n,r,o){var i=new we,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var u=a&&a.get,s=a&&a.set,c=!o&&C(n,void 0,e);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return we.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e)),e},set:function(r){var a=u?u.call(t):n;r===a||r!=r&&a!=a||(s?s.call(t,r):n=r,c=!o&&C(r,void 0,e),i.notify(),t.__keyPath||S(t,"__keyPath",{},!1),t.__keyPath[e]=!0,r instanceof Object&&!(r instanceof Array)&&S(r,"__newReference",!0,!1))}})}}function P(t,e,n){if(Array.isArray(t)&&s(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(h(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(T(r.value,e,n),t.__keyPath||S(t,"__keyPath",{},!1),t.__keyPath[e]=!0,r.dep.notify(),n):(t[e]=n,n)}function j(t,e){if(Array.isArray(t)&&s(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||h(t,e)&&(delete t[e],n&&(t.__keyPath||S(t,"__keyPath",{},!1),t.__keyPath[e]="del",n.dep.notify()))}}function M(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],h(t,n)?u(r)&&u(o)&&M(r,o):P(t,n,o);return t}function D(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,o="function"==typeof t?t.call(n):void 0;return r?M(r,o):o}:void 0:e?t?function(){return M("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function I(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function L(t,e){var n=Object.create(t||null);return e?y(n,e):n}function F(t,e,n){function r(r){var o=Te[r]||Pe;c[r]=o(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var n,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(o[$t(r)]={type:null});else if(u(e))for(var i in e)r=e[i],o[$t(i)]=u(r)?r:{type:r};t.props=o}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var o=e.extends;if(o&&(t=F(t,o,n)),e.mixins)for(var i=0,a=e.mixins.length;i<a;i++)t=F(t,e.mixins[i],n);var s,c={};for(s in t)r(s);for(s in e)h(t,s)||r(s);return c}function R(t,e,n,r){if("string"==typeof n){var o=t[e];if(h(o,n))return o[n];var i=$t(n);if(h(o,i))return o[i];var a=Jt(i);return h(o,a)?o[a]:o[n]||o[i]||o[a]}}function N(t,e,n,r){var o=e[t],i=!h(n,t),a=n[t];if(B(Boolean,o.type)&&(i&&!h(o,"default")?a=!1:B(String,o.type)||""!==a&&a!==te(t)||(a=!0)),void 0===a){a=function(t,e,n){if(h(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"==typeof r&&"Function"!==z(e.type)?r.call(t):r}}(r,o,t);var u=Ee.shouldConvert;Ee.shouldConvert=!0,C(a),Ee.shouldConvert=u}return a}function z(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function B(t,e){if(!Array.isArray(e))return z(e)===z(t);for(var n=0,r=e.length;n<r;n++)if(z(e[n])===z(t))return!0;return!1}function U(t){return new je(void 0,void 0,void 0,String(t))}function q(t){var e=new je(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function W(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=q(t[r]);return n}function H(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function V(t,e,n,o,i){if(r(e)){if(h(e,n))return t[n]=e[n],i||delete e[n],!0;if(h(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function G(t){return i(t)?[U(t)]:Array.isArray(t)?function t(n,a){var u,s,c,l=[];for(u=0;u<n.length;u++)e(s=n[u])||"boolean"==typeof s||(c=l[l.length-1],Array.isArray(s)?l.push.apply(l,t(s,(a||"")+"_"+u)):i(s)?X(c)?c.text+=String(s):""!==s&&l.push(U(s)):X(s)&&X(c)?l[l.length-1]=U(c.text+s.text):(o(n._isVList)&&r(s.tag)&&e(s.key)&&r(a)&&(s.key="__vlist"+a+"_"+u+"__"),l.push(s)));return l}(t):void 0}function X(t){return r(t)&&r(t.text)&&function(t){return!1===t}(t.isComment)}function K(t,e){return t.__esModule&&t.default&&(t=t.default),a(t)?e.extend(t):t}function Y(t,e,n){n?De.$once(t,e):De.$on(t,e)}function Q(t,e){De.$off(t,e)}function $(t,n,r){De=t,function(t,n,r,o,i){var a,u,s,c;for(a in t)u=t[a],s=n[a],c=Le(a),e(u)||(e(s)?(e(u.fns)&&(u=t[a]=H(u)),r(c.name,u,c.once,c.capture,c.passive)):u!==s&&(s.fns=u,t[a]=s));for(a in n)e(t[a])&&o((c=Le(a)).name,n[a],c.capture)}(n,r||{},Y,Q)}function J(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var u=a.data.slot,s=n[u]||(n[u]=[]);"template"===a.tag?s.push.apply(s,a.children):s.push(a)}}return r.every(Z)||(n.default=r),n}function Z(t){return t.isComment||" "===t.text}function tt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?tt(t[n],e):e[t[n].key]=t[n].fn;return e}function et(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ie),ot(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new He(t,r,m),n=!1,null==t.$vnode&&(t._isMounted=!0,ot(t,"mounted")),t}function nt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function rt(t,e){if(e){if(t._directInactive=!1,nt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)rt(t.$children[n]);ot(t,"activated")}}function ot(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){O(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function it(){var t,e;for(Ue=!0,Re.sort(function(t,e){return t.id-e.id}),qe=0;qe<Re.length;qe++)e=(t=Re[qe]).id,ze[e]=null,t.run();var n=Ne.slice(),r=Re.slice();qe=Re.length=Ne.length=0,ze={},Be=Ue=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,rt(t[e],!0)}(n),function(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&ot(r,"updated")}}(r),me&&ae.devtools&&me.emit("flush")}function at(t,e,n){Ge.get=function(){return this[e][n]},Ge.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ge)}function ut(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;Ee.shouldConvert=i;for(var a in e)!function(i){o.push(i);var a=N(i,e,n,t);T(r,i,a),i in t||at(t,"_props",i)}(a);Ee.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?m:v(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;u(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return O(t,e,"data()"),{}}}(e,t):e||{})||(e={});for(var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);o--;){var i=n[o];r&&h(r,i)||w(i)||at(t,"_data",i)}C(e,!0)}(t):C(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"==typeof o?o:o.get;n[r]=new He(t,i,m,Xe),r in t||st(t,r,o)}}(t,e.computed),e.watch&&e.watch!==de&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)lt(t,n,r[o]);else lt(t,n,r)}}(t,e.watch)}function st(t,e,n){"function"==typeof n?(Ge.get=ct(e),Ge.set=m):(Ge.get=n.get?!1!==n.cache?ct(e):n.get:m,Ge.set=n.set?n.set:m),Object.defineProperty(t,e,Ge)}function ct(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),we.target&&e.depend(),e.value}}function lt(t,e,n,r){return u(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function ft(t,e){if(t){for(var n=Object.create(null),r=_e?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++)for(var i=r[o],a=t[i],u=e;u;){if(u._provided&&a in u._provided){n[i]=u._provided[a];break}u=u.$parent}return n}}function pt(t,e){for(var n in e)t[$t(n)]=e[n]}function ht(t,n,i,u,s){if(!e(t)){var c=i.$options._base;if(a(t)&&(t=c.extend(t)),"function"==typeof t){var l;if(e(t.cid)&&void 0===(t=function(t,n,i){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var u=t.contexts=[i],s=!0,c=function(){for(var t=0,e=u.length;t<e;t++)u[t].$forceUpdate()},l=b(function(e){t.resolved=K(e,n),s||c()}),f=b(function(e){r(t.errorComp)&&(t.error=!0,c())}),p=t(l,f);return a(p)&&("function"==typeof p.then?e(t.resolved)&&p.then(l,f):r(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),r(p.error)&&(t.errorComp=K(p.error,n)),r(p.loading)&&(t.loadingComp=K(p.loading,n),0===p.delay?t.loading=!0:setTimeout(function(){e(t.resolved)&&e(t.error)&&(t.loading=!0,c())},p.delay||200)),r(p.timeout)&&setTimeout(function(){e(t.resolved)&&f(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(i)}(l=t,c,i)))return function(t,e,n,r,o){var i=Ie();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(l,n,i,u,s);n=n||{},kt(t),r(n.model)&&function(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});r(i[o])?i[o]=[e.model.callback].concat(i[o]):i[o]=e.model.callback}(t.options,n);var f=function(t,n,o){var i=n.options.props;if(!e(i)){var a={},u=t.attrs,s=t.props;if(r(u)||r(s))for(var c in i){var l=te(c);V(a,s,c,l,!0)||V(a,u,c,l,!1)}return a}}(n,t);if(o(t.options.functional))return function(t,e,n,o,i){var a={},u=t.options.props;if(r(u))for(var s in u)a[s]=N(s,u,e||{});else r(n.attrs)&&pt(a,n.attrs),r(n.props)&&pt(a,n.props);var c=Object.create(o),l=t.options.render.call(null,function(t,e,n,r){return vt(c,t,e,n,r,!0)},{data:n,props:a,children:i,parent:o,listeners:n.on||{},injections:ft(t.options.inject,o),slots:function(){return J(i,o)}});return l instanceof je&&(l.functionalContext=o,l.functionalOptions=t.options,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}(t,f,n,i,u);var p=n.on;if(o(t.options.abstract)){var h=n.slot;n={},h&&(n.slot=h)}!function(t){t.hook||(t.hook={});for(var e=0;e<Ye.length;e++){var n=Ye[e],r=t.hook[n],o=Ke[n];t.hook[n]=r?dt(o,r):o}}(n);var d=t.options.name||s;return new je("vue-component-"+t.cid+(d?"-"+d:""),n,void 0,void 0,void 0,i,{Ctor:t,propsData:f,listeners:p,tag:s,children:u},l)}}}function dt(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function vt(t,n,a,u,s,c){return(Array.isArray(a)||i(a))&&(s=u,u=a,a=void 0),o(c)&&(s=$e),function(t,n,o,i,a){if(r(o)&&r(o.__ob__))return Ie();if(r(o)&&r(o.is)&&(n=o.is),!n)return Ie();Array.isArray(i)&&"function"==typeof i[0]&&((o=o||{}).scopedSlots={default:i[0]},i.length=0),a===$e?i=G(i):a===Qe&&(i=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(i));var u,s;if("string"==typeof n){var c;s=ae.getTagNamespace(n),u=ae.isReservedTag(n)?new je(ae.parsePlatformTagName(n),o,i,void 0,void 0,t):r(c=R(t.$options,"components",n))?ht(c,o,t,i,n):new je(n,o,i,void 0,void 0,t)}else u=ht(n,o,t,i);return r(u)?(s&&function t(n,o){if(n.ns=o,"foreignObject"!==n.tag&&r(n.children))for(var i=0,a=n.children.length;i<a;i++){var u=n.children[i];r(u.tag)&&e(u.ns)&&t(u,o)}}(u,s),u):Ie()}(t,n,a,u,s)}function gt(t,e){var n,o,i,u,s;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(a(t))for(u=Object.keys(t),n=new Array(u.length),o=0,i=u.length;o<i;o++)s=u[o],n[o]=e(t[s],s,o);return r(n)&&(n._isVList=!0),n}function yt(t,e,n,r){var o=this.$scopedSlots[t];return o?(n=n||{},r&&(n=y(y({},r),n)),o(n)||e):this.$slots[t]||e}function mt(t){return R(this.$options,"filters",t)||ne}function _t(t,e,n){var r=ae.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function xt(t,e,n,r,o){if(n&&a(n)){var i;Array.isArray(n)&&(n=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&y(e,t[n]);return e}(n));for(var u in n)!function(a){if("class"===a||"style"===a||Kt(a))i=t;else{var u=t.attrs&&t.attrs.type;i=r||ae.mustUseProp(e,u,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))}(u)}return t}function bt(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?W(n):q(n):(St(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),n)}function wt(t,e,n){return St(t,"__once__"+e+(n?"_"+n:""),!0),t}function St(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Ot(t[r],e+"_"+r,n);else Ot(t,e,n)}function Ot(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function At(t,e){if(e&&u(e)){var n=t.on=t.on?y({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}return t}function kt(t){var e=t.options;if(t.super){var n=kt(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Et(n[i],r[i],o[i]));return e}(t);r&&y(t.extendOptions,r),(e=t.options=F(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Et(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Ct(t){this._init(t)}function Tt(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=F(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)at(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)st(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,oe.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=y({},a.options),o[r]=a,a}}function Pt(t){return t&&(t.Ctor.options.name||t.tag)}function jt(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!function(t){return"[object RegExp]"===Gt.call(t)}(t)&&t.test(e)}function Mt(t,e,n){for(var r in t){var o=t[r];if(o){var i=Pt(o.componentOptions);i&&!n(i)&&(o!==e&&Dt(o),t[r]=null)}}}function Dt(t){t&&t.componentInstance.$destroy()}function It(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}function Lt(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?p(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}function Ft(t,n){return t.key===n.key&&(t.tag===n.tag&&t.isComment===n.isComment&&r(t.data)===r(n.data)&&function(t,e){if("input"!==t.tag)return!0;var n;return(r(n=t.data)&&r(n=n.attrs)&&n.type)===(r(n=e.data)&&r(n=n.attrs)&&n.type)}(t,n)||o(t.isAsyncPlaceholder)&&t.asyncFactory===n.asyncFactory&&e(n.asyncFactory.error))}function Rt(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}function Nt(t,e,n){var r,o=t.$options[e];if("onError"===e&&o?o=[o]:"onPageNotFound"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)try{r=o[i].call(t,n)}catch(n){O(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Nt(t,e,n)}),r}function zt(t,e,n){if(t){var r,o,i;if(Array.isArray(t))for(r=t.length;r--;)"string"==typeof(o=t[r])&&(e[i=$t(o)]={type:null});else if(u(t))for(var a in t)o=t[a],e[i=$t(a)]=u(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var l=c.observer;c.observer=function(t,e){n[i]=t,"function"==typeof l&&l.call(n,t,e)}}return e}}function Bt(t,e,n,r,o){try{var i=function t(e,n){if(e.length>1){var r=n[e.splice(0,1)];return r?t(e,r):null}return n[e[0]]?n[e[0]]:null}(t.split("."),n.$root.$mp.page.data);null===i||JSON.stringify(i)!==JSON.stringify(e)||o?r[t]=e:Object.keys(i).forEach(function(n){var o=Object.getOwnPropertyDescriptor(i,n);o.get||o.set||(r[t+"."+n]=e[n])})}catch(r){console.log(r,t,e,n)}}function Ut(t,e,n,r,o,i){try{if(n instanceof Array)Bt(t+"."+e,n,i,r,!0);else{var a={};n.__keyPath&&!n.__newReference?(a=n.__keyPath,Object.keys(n).forEach(function(o){if(n[o]instanceof Object){if("__keyPath"===o)return;Ut(t+"."+e,o,n[o],r,null,i)}else!0===a[o]&&(e?r[t+"."+e+"."+o]=n[o]:r[t+"."+o]=n[o])}),i.__mpKeyPath=i.__mpKeyPath||{},i.__mpKeyPath[n.__ob__.dep.id]=n):Bt(t+"."+e,n,i,r),S(n,"__newReference",!1,!1)}}catch(o){console.log(o,t,e,n,r)}}function qt(t,e){var n=t._data||{},r=t._props||{},o="";o=t.$attrs?function t(e,n){return e.$parent.$attrs?(n=e.$parent.$attrs.mpcomid+pn+n,t(e.$parent,n)):n="$root.0"+pn+n}(t,t.$attrs.mpcomid):"$root.0",Ct.nextTick(function(){!function(t){t.__mpKeyPath&&Object.keys(t.__mpKeyPath).forEach(function(e){delete t.__mpKeyPath[e].__keyPath})}(t)});var i=n.__keyPath||t.__keyPath||{};if(delete t.__keyPath,delete n.__keyPath,delete r.__keyPath,"done"===t._mpValueSet){Object.keys(n).forEach(function(r){n[r]instanceof Object?Ut(o,r,n[r],e,t._mpValueSet,t):void 0!==n[r]&&!0===i[r]&&(e[o+"."+r]=n[r])}),Object.keys(r).forEach(function(n){r[n]instanceof Object?Ut(o,n,r[n],e,t._mpValueSet,t):void 0!==r[n]&&(e[o+"."+n]=r[n])});var a=t._mpProps||{},u=t._computedWatchers||{};Object.keys(a).forEach(function(n){e[o+"."+n]=t[n]}),Object.keys(u).forEach(function(n){e[o+"."+n]=t[n]}),delete e[o]}void 0===t._mpValueSet&&(t._mpValueSet="done"),Ct.config._mpTrace&&function(t){t=JSON.stringify(t),Ct._mpvueTraceTimer?Ct._mpvueTraceTimer&&(t=t.replace(/[^\u0000-\u00ff]/g,"aa"),fn+=t.length):Ct._mpvueTraceTimer=setTimeout(function(){clearTimeout(Ct._mpvueTraceTimer),fn=(fn/1024).toFixed(1),console.log("这次操作引发500ms内数据更新量:"+fn+"kb"),Ct._mpvueTraceTimer=0,fn=0},500)}(e)}function Wt(t){var e=function t(e,n){void 0===n&&(n=[]);var r=(e||{}).$parent;return r?(n.unshift(It(r)),r.$parent?t(r,n):n):n}(t).join(hn),n=e+(e?hn:"")+It(t),r=Object.assign(function(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}(t),{$k:n,$kk:""+n+hn,$p:e}),o={};return o["$root."+n]=r,o}function Ht(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var r=e.page;if("app"!==n&&r&&"function"==typeof r.setData)return r}function Vt(t,e){return!(!t||!e||e!==t&&0!==e.indexOf(t+vn))}var Gt=Object.prototype.toString;f("slot,component",!0);var Xt,Kt=f("key,ref,slot,is"),Yt=Object.prototype.hasOwnProperty,Qt=/-(\w)/g,$t=d(function(t){return t.replace(Qt,function(t,e){return e?e.toUpperCase():""})}),Jt=d(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Zt=/([^-])([A-Z])/g,te=d(function(t){return t.replace(Zt,"$1-$2").replace(Zt,"$1-$2").toLowerCase()}),ee=function(t,e,n){return!1},ne=function(t){return t},re="data-server-rendered",oe=["component","directive","filter"],ie=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached"],ae={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ee,isReservedAttr:ee,isUnknownElement:ee,getTagNamespace:m,parsePlatformTagName:ne,mustUseProp:ee,_lifecycleHooks:ie},ue=Object.freeze({}),se=/[^\w.$]/,ce=m,le="__proto__"in{},fe="undefined"!=typeof window,pe=["mpvue-runtime"].join(),he=(pe&&/msie|trident/.test(pe),pe&&pe.indexOf("msie 9.0"),pe&&pe.indexOf("edge/"),pe&&pe.indexOf("android"),pe&&/iphone|ipad|ipod|ios/.test(pe)),de=(pe&&/chrome\/\d+/.test(pe),{}.watch);if(fe)try{var ve={};Object.defineProperty(ve,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ve)}catch(e){}var ge,ye=function(){return void 0===Xt&&(Xt=!fe&&void 0!==n&&"server"===n.process.env.VUE_ENV),Xt},me=fe&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,_e="undefined"!=typeof Symbol&&A(Symbol)&&"undefined"!=typeof Reflect&&A(Reflect.ownKeys),xe=function(){function t(){r=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],r=!1;if("undefined"!=typeof Promise&&A(Promise)){var o=Promise.resolve(),i=function(t){console.error(t)};e=function(){o.then(t).catch(i),he&&setTimeout(m)}}else e=function(){setTimeout(t,0)};return function(t,o){var i;if(n.push(function(){if(t)try{t.call(o)}catch(t){O(t,o,"nextTick")}else i&&i(o)}),r||(r=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){i=t})}}();ge="undefined"!=typeof Set&&A(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var be=0,we=function(){this.id=be++,this.subs=[]};we.prototype.addSub=function(t){this.subs.push(t)},we.prototype.removeSub=function(t){p(this.subs,t)},we.prototype.depend=function(){we.target&&we.target.addDep(this)},we.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},we.target=null;var Se=[],Oe=Array.prototype,Ae=Object.create(Oe);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Oe[t];S(Ae,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var ke=Object.getOwnPropertyNames(Ae),Ee={shouldConvert:!0},Ce=function(t,e){this.value=t,this.dep=new we,this.vmCount=0,e&&(this.key=e),S(t,"__ob__",this),Array.isArray(t)?((le?k:E)(t,Ae,ke),this.observeArray(t)):this.walk(t)};Ce.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)T(t,e[n],t[e[n]])},Ce.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)C(t[e])};var Te=ae.optionMergeStrategies;Te.data=function(t,e,n){return n?D(t,e,n):e&&"function"!=typeof e?t:D.call(this,t,e)},ie.forEach(function(t){Te[t]=I}),oe.forEach(function(t){Te[t+"s"]=L}),Te.watch=function(t,e){if(t===de&&(t=void 0),e===de&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in y(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Te.props=Te.methods=Te.inject=Te.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return y(n,t),y(n,e),n},Te.provide=D;var Pe=function(t,e){return void 0===e?t:e},je=function(t,e,n,r,o,i,a,u){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Me={child:{}};Me.child.get=function(){return this.componentInstance},Object.defineProperties(je.prototype,Me);var De,Ie=function(t){void 0===t&&(t="");var e=new je;return e.text=t,e.isComment=!0,e},Le=d(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}}),Fe=null,Re=[],Ne=[],ze={},Be=!1,Ue=!1,qe=0,We=0,He=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++We,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ge,this.newDepIds=new ge,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!se.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};He.prototype.get=function(){var t;!function(t){we.target&&Se.push(we.target),we.target=t}(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;O(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&function(t){Ve.clear(),function t(e,n){var r,o,i=Array.isArray(e);if((i||a(e))&&Object.isExtensible(e)){if(e.__ob__){var u=e.__ob__.dep.id;if(n.has(u))return;n.add(u)}if(i)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n)}}(t,Ve)}(t),we.target=Se.pop(),this.cleanupDeps()}return t},He.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},He.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},He.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==ze[e]){if(ze[e]=!0,Ue){for(var n=Re.length-1;n>qe&&Re[n].id>t.id;)n--;Re.splice(n+1,0,t)}else Re.push(t);Be||(Be=!0,xe(it))}}(this)},He.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){O(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},He.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},He.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},He.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var Ve=new ge,Ge={enumerable:!0,configurable:!0,get:m,set:m},Xe={lazy:!0},Ke={init:function(t,e,n,o){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,o){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},u=t.data.inlineTemplate;return r(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new i.Ctor(a)}(t,Fe,n,o)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;Ke.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==ue);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){Ee.shouldConvert=!1;for(var a=t._props,u=t.$options._propKeys||[],s=0;s<u.length;s++){var c=u[s];a[c]=N(c,t.$options.props,e,t)}Ee.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,$(t,n,l)}i&&(t.$slots=J(o,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,ot(n,"mounted")),t.data.keepAlive&&(e._isMounted?function(t){t._inactive=!1,Ne.push(t)}(n):rt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,nt(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);ot(e,"deactivated")}}(e,!0):e.$destroy())}},Ye=Object.keys(Ke),Qe=1,$e=2,Je=0;Ct.prototype._init=function(t){var e=this;e._uid=Je++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=F(kt(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=J(t.$options._renderChildren,n),t.$scopedSlots=ue,t._c=function(e,n,r,o){return vt(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vt(t,e,n,r,o,!0)};var r=e&&e.data;T(t,"$attrs",r&&r.attrs,0,!0),T(t,"$listeners",r&&r.on,0,!0)}(e),ot(e,"beforeCreate"),function(t){var e=ft(t.$options.inject,t);e&&(Ee.shouldConvert=!1,Object.keys(e).forEach(function(n){T(t,n,e[n])}),Ee.shouldConvert=!0)}(e),ut(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),ot(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=P,t.prototype.$delete=j,t.prototype.$watch=function(t,e,n){if(u(e))return lt(this,t,e,n);(n=n||{}).user=!0;var r=new He(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(Ct),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)this.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(1===arguments.length)return n._events[t]=null,n;for(var u=a.length;u--;)if((i=a[u])===e||i.fn===e){a.splice(u,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?g(e):e;for(var n=g(arguments,1),r=0,o=e.length;r<o;r++)try{e[r].apply(this,n)}catch(e){O(e,this,'event handler for "'+t+'"')}}return this}}(Ct),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&ot(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=Fe;Fe=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Fe=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){ot(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||p(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),ot(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Ct),function(t){t.prototype.$nextTick=function(t){return xe(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n.staticRenderFns,i=n._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=W(e.$slots[a]);e.$scopedSlots=i&&i.data.scopedSlots||ue,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){O(n,e,"render function"),t=e._vnode}return t instanceof je||(t=Ie()),t.parent=i,t},t.prototype._o=wt,t.prototype._n=l,t.prototype._s=c,t.prototype._l=gt,t.prototype._t=yt,t.prototype._q=_,t.prototype._i=x,t.prototype._m=bt,t.prototype._f=mt,t.prototype._k=_t,t.prototype._b=xt,t.prototype._v=U,t.prototype._e=Ie,t.prototype._u=tt,t.prototype._g=At}(Ct);var Ze=[String,RegExp,Array],tn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Ze,exclude:Ze},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Dt(this.cache[t])},watch:{include:function(t){Mt(this.cache,this._vnode,function(e){return jt(t,e)})},exclude:function(t){Mt(this.cache,this._vnode,function(e){return!jt(t,e)})}},render:function(){var t=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&r(n.componentOptions))return n}}(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Pt(e);if(n&&(this.include&&!jt(this.include,n)||this.exclude&&jt(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.componentInstance=this.cache[o].componentInstance:this.cache[o]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return ae}};Object.defineProperty(t,"config",e),t.util={warn:ce,extend:y,mergeOptions:F,defineReactive:T},t.set=P,t.delete=j,t.nextTick=xe,t.options=Object.create(null),oe.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,y(t.options.components,tn),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=g(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=F(this.options,t),this}}(t),Tt(t),function(t){oe.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Ct),Object.defineProperty(Ct.prototype,"$isServer",{get:ye}),Object.defineProperty(Ct.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ct.version="2.4.1",Ct.mpvueVersion="2.0.6";var en=f("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),nn=f("style,class");f("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),f("embed,img,image,input,link,meta",!0);var rn={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},on={},an=Object.freeze({createElement:function(t,e){return on},createElementNS:function(t,e){return on},createTextNode:function(t){return on},createComment:function(t){return on},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return on},nextSibling:function(t){return on},tagName:function(t){return"div"},setTextContent:function(t,e){return on},setAttribute:function(t,e,n){return on}}),un={create:function(t,e){Lt(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Lt(t,!0),Lt(e))},destroy:function(t){Lt(t,!0)}},sn=new je("",{},[]),cn=["create","activate","update","remove","destroy"],ln=function(t){function n(t){var e=A.parentNode(t);r(e)&&A.removeChild(e,t)}function a(t,e,n,i,a){if(t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var c=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,i),r(t.componentInstance))return u(t,e),o(c)&&function(t,e,n,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(i=a.data)&&r(i=i.transition)){for(i=0;i<S.activate.length;++i)S.activate[i](sn,a);e.push(a);break}s(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var l=t.data,f=t.children,d=t.tag;r(d)?(t.elm=t.ns?A.createElementNS(t.ns,d):A.createElement(d,t),h(t),c(t,f,e),r(l)&&p(t,e),s(n,t.elm,i)):o(t.isComment)?(t.elm=A.createComment(t.text),s(n,t.elm,i)):(t.elm=A.createTextNode(t.text),s(n,t.elm,i))}}function u(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,l(t)?(p(t,e),h(t)):(Lt(t),e.push(t))}function s(t,e,n){r(t)&&(r(n)?n.parentNode===t&&A.insertBefore(t,e,n):A.appendChild(t,e))}function c(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)a(e[r],n,t.elm,null,!0);else i(t.text)&&A.appendChild(t.elm,A.createTextNode(t.text))}function l(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function p(t,e){for(var n=0;n<S.create.length;++n)S.create[n](sn,t);r(b=t.data.hook)&&(r(b.create)&&b.create(sn,t),r(b.insert)&&e.push(t))}function h(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&A.setAttribute(t.elm,e,""),n=n.parent;r(e=Fe)&&e!==t.context&&r(e=e.$options._scopeId)&&A.setAttribute(t.elm,e,"")}function d(t,e,n,r,o,i){for(;r<=o;++r)a(n[r],i,t,e)}function v(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<S.destroy.length;++e)S.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)v(t.children[n])}function g(t,e,o,i){for(;o<=i;++o){var a=e[o];r(a)&&(r(a.tag)?(y(a),v(a)):n(a.elm))}}function y(t,e){if(r(e)||r(t.data)){var o,i=S.remove.length+1;for(r(e)?e.listeners+=i:e=function(t,e){function r(){0==--r.listeners&&n(t)}return r.listeners=e,r}(t.elm,i),r(o=t.componentInstance)&&r(o=o._vnode)&&r(o.data)&&y(o,e),o=0;o<S.remove.length;++o)S.remove[o](t,e);r(o=t.data.hook)&&r(o=o.remove)?o(t,e):e()}else n(t.elm)}function m(t,n,i,u){if(t!==n){var s=n.elm=t.elm;if(o(t.isAsyncPlaceholder))r(n.asyncFactory.resolved)?x(t.elm,n,i):n.isAsyncPlaceholder=!0;else if(o(n.isStatic)&&o(t.isStatic)&&n.key===t.key&&(o(n.isCloned)||o(n.isOnce)))n.componentInstance=t.componentInstance;else{var c,f=n.data;r(f)&&r(c=f.hook)&&r(c=c.prepatch)&&c(t,n);var p=t.children,h=n.children;if(r(f)&&l(n)){for(c=0;c<S.update.length;++c)S.update[c](t,n);r(c=f.hook)&&r(c=c.update)&&c(t,n)}e(n.text)?r(p)&&r(h)?p!==h&&function(t,n,o,i,u){for(var s,c,l,f=0,p=0,h=n.length-1,v=n[0],y=n[h],_=o.length-1,x=o[0],b=o[_],w=!u;f<=h&&p<=_;)e(v)?v=n[++f]:e(y)?y=n[--h]:Ft(v,x)?(m(v,x,i),v=n[++f],x=o[++p]):Ft(y,b)?(m(y,b,i),y=n[--h],b=o[--_]):Ft(v,b)?(m(v,b,i),w&&A.insertBefore(t,v.elm,A.nextSibling(y.elm)),v=n[++f],b=o[--_]):Ft(y,x)?(m(y,x,i),w&&A.insertBefore(t,y.elm,v.elm),y=n[--h],x=o[++p]):(e(s)&&(s=Rt(n,f,h)),e(c=r(x.key)?s[x.key]:null)?(a(x,i,t,v.elm),x=o[++p]):Ft(l=n[c],x)?(m(l,x,i),n[c]=void 0,w&&A.insertBefore(t,l.elm,v.elm),x=o[++p]):(a(x,i,t,v.elm),x=o[++p]));f>h?d(t,e(o[_+1])?null:o[_+1].elm,o,p,_,i):p>_&&g(0,n,f,h)}(s,p,h,i,u):r(h)?(r(t.text)&&A.setTextContent(s,""),d(s,null,h,0,h.length-1,i)):r(p)?g(0,p,0,p.length-1):r(t.text)&&A.setTextContent(s,""):t.text!==n.text&&A.setTextContent(s,n.text),r(f)&&r(c=f.hook)&&r(c=c.postpatch)&&c(t,n)}}}function _(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}function x(t,e,n){if(o(e.isComment)&&r(e.asyncFactory))return e.elm=t,e.isAsyncPlaceholder=!0,!0;e.elm=t;var i=e.tag,a=e.data,s=e.children;if(r(a)&&(r(b=a.hook)&&r(b=b.init)&&b(e,!0),r(b=e.componentInstance)))return u(e,n),!0;if(r(i)){if(r(s))if(t.hasChildNodes()){for(var l=!0,f=t.firstChild,h=0;h<s.length;h++){if(!f||!x(f,s[h],n)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else c(e,s,n);if(r(a))for(var d in a)if(!k(d)){p(e,n);break}}else t.data!==e.text&&(t.data=e.text);return!0}var b,w,S={},O=t.modules,A=t.nodeOps;for(b=0;b<cn.length;++b)for(S[cn[b]]=[],w=0;w<O.length;++w)r(O[w][cn[b]])&&S[cn[b]].push(O[w][cn[b]]);var k=f("attrs,style,class,staticClass,staticStyle,key");return function(t,n,i,u,s,c){if(!e(n)){var f=!1,p=[];if(e(t))f=!0,a(n,p,s,c);else{var h=r(t.nodeType);if(!h&&Ft(t,n))m(t,n,p,u);else{if(h){if(1===t.nodeType&&t.hasAttribute(re)&&(t.removeAttribute(re),i=!0),o(i)&&x(t,n,p))return _(n,p,!0),t;t=function(t){return new je(A.tagName(t).toLowerCase(),{},[],void 0,t)}(t)}var d=t.elm,y=A.parentNode(d);if(a(n,p,d._leaveCb?null:y,A.nextSibling(d)),r(n.parent)){for(var b=n.parent;b;)b.elm=n.elm,b=b.parent;if(l(n))for(var w=0;w<S.create.length;++w)S.create[w](sn,n.parent)}r(y)?g(0,[t],0,0):r(t.tag)&&v(t)}}return _(n,p,f),n.elm}r(t)&&v(t)}}({nodeOps:an,modules:[un]}),fn=0,pn="_",hn="_",dn=function(t,e,n){function r(){s=!1===n.leading?0:Date.now(),u=null,a=t.apply(o,i),u||(o=i=null)}var o,i,a,u=null,s=0;return n||(n={}),function(e,c){var l=Date.now();s||!1!==n.leading||(s=l);var f=50-(l-s);return o=this,i=i?[e,Object.assign(i[1],c)]:[e,c],f<=0||f>50?(clearTimeout(u),u=null,s=l,a=t.apply(o,i),u||(o=i=null)):u||!1===n.trailing||(u=setTimeout(r,f)),a}}(function(t,e){t(e)}),vn="_";return Ct.config.mustUseProp=function(){},Ct.config.isReservedTag=en,Ct.config.isReservedAttr=nn,Ct.config.getTagNamespace=function(){},Ct.config.isUnknownElement=function(){},Ct.prototype.__patch__=function(){ln.apply(this,arguments),this.$updateDataToMP()},Ct.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return et(n,void 0,void 0)})}return et(this,void 0,void 0)},Ct.prototype._initMP=function(t,e){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Nt(this,"onLaunch",o.appOptions):(Nt(this,"onLoad",o.query),Nt(this,"onReady")),e();if(o.mpType=t,o.status="register","app"===t)n.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Nt(r,"onLaunch",t),e()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Nt(r,"onShow",t)},onHide:function(){o.status="hide",Nt(r,"onHide")},onError:function(t){Nt(r,"onError",t)},onPageNotFound:function(t){Nt(r,"onPageNotFound",t)}});else if("component"===t)!function(t){var e=t._mpProps={};Object.keys(t.$options.properties||{}).forEach(function(n){n in t||(at(t,"_mpProps",n),e[n]=void 0)}),C(e,!0)}(r),n.Component({properties:function(t){var e=t.$options.properties,n=t.$options.props,r={};return zt(e,r,t),zt(n,r,t),r}(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Nt(r,"attached")},ready:function(){o.status="ready",Nt(r,"ready"),e(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Nt(r,"moved")},detached:function(){o.status="detached",Nt(r,"detached")}});else{var i=n.getApp();n.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){o.page=this,o.query=t,o.status="load",function(t,e){var n=r.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}(i),Nt(r,"onLoad",t)},onShow:function(){o.page=this,o.status="show",Nt(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Nt(r,"onReady"),e()},onHide:function(){o.status="hide",Nt(r,"onHide"),o.page=null},onUnload:function(){o.status="unload",Nt(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Nt(r,"onPullDownRefresh")},onReachBottom:function(){Nt(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Nt(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Nt(r,"onPageScroll",t)},onTabItemTap:function(t){Nt(r,"onTabItemTap",t)}})}},Ct.prototype.$updateDataToMP=function(){var t=Ht(this);if(t){var e=Wt(this);qt(this,e),dn(t.setData.bind(t),e)}},Ct.prototype._initDataToMP=function(){var t=Ht(this);if(t){var e=function t(e,n){void 0===n&&(n={});var r=e.$children;return r&&r.length&&r.forEach(function(e){return t(e,n)}),Object.assign(n,Wt(e))}(this.$root);t.setData(e)}},Ct.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=(t.currentTarget||r).dataset;void 0===o&&(o={});var i=o.comkey;void 0===i&&(i="");var a=o.eventid,u=function(t,e){void 0===e&&(e=[]);var n=e.slice(1);if(!n.length)return t;var r=n.join(vn),o="";return n.reduce(function(t,e){for(var n=t.$children.length,i=0;i<n;i++){var a=t.$children[i],u=It(a);if(o&&(u=o+vn+u),Vt(u,r))return o=u,t=a}return t},t)}(e,i.split(vn));if(u){var s=rn[n]||[n],c=function t(e,n,r){void 0===r&&(r=[]);var o=[];if(!e||!e.tag)return o;var i=e||{},a=i.data;void 0===a&&(a={});var u=i.children;void 0===u&&(u=[]);var s=i.componentInstance;s?Object.keys(s.$slots).forEach(function(e){var i=s.$slots[e];(Array.isArray(i)?i:[i]).forEach(function(e){o=o.concat(t(e,n,r))})}):u.forEach(function(e){o=o.concat(t(e,n,r))});var c=a.attrs,l=a.on;return c&&l&&c.eventid===n?(r.forEach(function(t){var e=l[t];"function"==typeof e?o.push(e):Array.isArray(e)&&(o=o.concat(e))}),o):o}(u._vnode,a,s);if(c.length){var l=function(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var u={mp:t,type:e,timeStamp:n,x:o.x,y:o.y,target:Object.assign({},i,o),currentTarget:a,stopPropagation:m,preventDefault:m};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}(t);if(1===c.length)return c[0](l);c.forEach(function(t){return t(l)})}}},Ct})}).call(n,r("DuR2"))},"5zde":function(t,e,n){n("zQR9"),n("qyJz"),t.exports=n("FeBl").Array.from},"6A2i":function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("P90k"),s=n("znIw");(r.prototype=new i).initialize=function(){this.ctx;var t,e,n=this.options,r=n.data.items,i=[],a=[],u=0,s=0;void 0===n.isDraw&&(n.isDraw=!0),o.each(r,function(n,r,c){var l=parseFloat(n.price),f=parseFloat(n.amount),p=parseFloat(n.volume);isNaN(l)||isNaN(f)||isNaN(p)||(u=o.add(u,f),s=o.add(s,p),i.push(l),a.push((u/s/100).toFixed(3)),0===r?(e=n.price,t=n.price):(e=Math.max(n.price,e),t=Math.min(t,n.price)))}),n.high=e,n.low=t,void 0===n.middleValue&&(n.middleValue=(e+t)/2),n.maxDiff=Math.max(Math.abs(e-n.middleValue),Math.abs(t-n.middleValue)),this.priceOptions={region:n.region,data:{items:i},color:n.priceLineColor,gradientColor:n.priceLineFullGradientColor,maxCount:n.maxDotsCount,middleValue:n.middleValue,maxDiff:n.maxDiff},this.averPriceOptions={region:n.region,data:{items:a},color:n.avgPriceLineColor,maxCount:n.maxDotsCount,middleValue:n.middleValue,maxDiff:n.maxDiff}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,color:e.gridColor};new a(t,n).paint()},r.prototype.paintMiddleLine=function(){var t=this.ctx,e=this.options,n=e.region;t.save(),t.setLineDash&&t.setLineDash([5,2],0),t.moveTo(n.x,n.y+n.height/2),t.lineTo(n.x+n.width,n.y+n.height/2),t.setStrokeStyle(e.middleLineColor),t.stroke(),t.restore()},r.prototype.getYAxisColor=function(t){var e=this.options;return t==e.middleValue?e.normalColor:t>e.middleValue?e.riseColor:e.dropColor},r.prototype.paintYAxisLeft=function(){this.ctx;var t=this.options,e=t.middleValue,n=t.maxDiff;if(t.yAxisLeft){for(var r=t.yAxisLeft,i=[],a=2*n/(r.axisCount-1),u=0;u<r.axisCount;u++){var c=o.add(e,n-a*u);isNaN(c)&&(c=0),i.push({text:c.toFixed(2),color:this.getYAxisColor(c)})}r.data={items:i},new s(this.ctx,r).paint()}},r.prototype.paintYAxisRight=function(){this.ctx;var t=this.options,e=t.middleValue,n=t.maxDiff;if(t.yAxisRight){for(var r=t.yAxisRight,i=[],a=2*n/(r.axisCount-1),u=0;u<r.axisCount;u++){var c=o.sub(n,a*u),l=o.add(e,n-a*u),f=(c/e*100).toFixed(2);isNaN(f)&&(f="0.00"),c>0?f="+"+f+"%":f+="%",i.push({text:f,color:this.getYAxisColor(l)})}r.data={items:i},new s(this.ctx,r).paint()}},r.prototype.paint=function(){var t=this.ctx,e=this.options;this.initialize(),this.paintGrid(),this.paintMiddleLine();var n=new u(t,this.averPriceOptions),r=new u(t,this.priceOptions);n.paint(),r.paint(),this.paintYAxisLeft(),this.paintYAxisRight(),!0===e.isDraw&&t.draw(!0)},t.exports=r},"6c6d":function(t,e,n){t.exports={add:function(t,e){var n,r,o,i,a=t.toString(),u=e.toString();try{n=a.split(".")[1].length}catch(t){n=0}try{r=u.split(".")[1].length}catch(t){r=0}if(i=Math.abs(n-r),o=Math.pow(10,Math.max(n,r)),i>0){var s=Math.pow(10,i);n>r?(t=Number(a.replace(".","")),e=Number(u.replace(".",""))*s):(t=Number(a.replace(".",""))*s,e=Number(u.replace(".","")))}else t=Number(a.replace(".","")),e=Number(u.replace(".",""));return(t+e)/o},sub:function(t,e){var n,r,o;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{r=e.toString().split(".")[1].length}catch(t){r=0}return((t*(o=Math.pow(10,Math.max(n,r)))-e*o)/o).toFixed(n>=r?n:r)},mul:function(t,e){var n=0,r=t.toString(),o=e.toString();try{n+=r.split(".")[1].length}catch(t){}try{n+=o.split(".")[1].length}catch(t){}return Number(r.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,n)},div:function(t,e){var n=0,r=0;try{n=t.toString().split(".")[1].length}catch(t){}try{r=e.toString().split(".")[1].length}catch(t){}return Number(t.toString().replace(".",""))/Number(e.toString().replace(".",""))*Math.pow(10,r-n)},isEqual:function(t,e){if(t&&e)return(t=parseFloat(t))===(e=parseFloat(e))},isLess:function(t,e){if(t&&e)return(t=parseFloat(t))<(e=parseFloat(e))},isMore:function(t,e){if(t&&e)return(t=parseFloat(t))>(e=parseFloat(e))}}},"75fD":function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o=r(n("//Fk")),i=r(n("5nAL"));i.default.prototype.$toast={success:function(t){wx.showToast({title:t.message,icon:"success",duration:t.duration,success:t.success})}},i.default.prototype.$dialog={confirm:function(t){return new o.default(function(e,n){wx.showModal({title:t.title||"",content:t.content,success:function(t){t.confirm?e():t.cancel&&n()}})})}}},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7FL1":function(e,n,r){!function(t,n){e.exports=n()}(window,function(){return function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=e,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=53)}([function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(24);e.addBreadcrumb=r.addBreadcrumb,e.captureException=r.captureException,e.captureEvent=r.captureEvent,e.captureMessage=r.captureMessage,e.configureScope=r.configureScope,e.withScope=r.withScope;var o=n(14);e.addGlobalEventProcessor=o.addGlobalEventProcessor,e.getCurrentHub=o.getCurrentHub,e.Hub=o.Hub,e.getHubFromCarrier=o.getHubFromCarrier,e.Scope=o.Scope;var i=n(29);e.API=i.API;var a=n(30);e.BaseClient=a.BaseClient;var u=n(34);e.BaseBackend=u.BaseBackend;var s=n(17);e.Dsn=s.Dsn;var c=n(18);e.SentryError=c.SentryError;var l=n(20);e.RequestBuffer=l.RequestBuffer;var f=n(35);e.LogLevel=f.LogLevel;var p=n(36);e.initAndBind=p.initAndBind;var h=n(37);e.Integrations=h},function(t,e,n){t.exports=n(45)},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.isError=function(t){switch(Object.prototype.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return t instanceof Error}},e.isErrorEvent=function(t){return"[object ErrorEvent]"===Object.prototype.toString.call(t)},e.isDOMError=function(t){return"[object DOMError]"===Object.prototype.toString.call(t)},e.isDOMException=function(t){return"[object DOMException]"===Object.prototype.toString.call(t)},e.isUndefined=function(t){return void 0===t},e.isFunction=function(t){return"function"==typeof t},e.isString=function(t){return"[object String]"===Object.prototype.toString.call(t)},e.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},e.isPlainObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isNaN=function(t){return t!=t}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),o=r.getGlobalObject(),i=new(function(){function t(){this.enabled=!1}return t.prototype.disable=function(){this.enabled=!1},t.prototype.enable=function(){this.enabled=!0},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&r.consoleSandbox(function(){o.console.log("Sentry Logger [Log]: "+t.join(" "))})},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&r.consoleSandbox(function(){o.console.warn("Sentry Logger [Warn]: "+t.join(" "))})},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.enabled&&r.consoleSandbox(function(){o.console.error("Sentry Logger [Error]: "+t.join(" "))})},t}());e.logger=i},function(t,e){function n(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){function a(t){n(s,o,i,a,u,"next",t)}function u(t){n(s,o,i,a,u,"throw",t)}var s=t.apply(e,r);a(void 0)})}}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(e,n,r){function o(t,e){function n(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function a(e,n,r,o){var i,a=arguments.length,u=a<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,r):o;if("object"==("undefined"==typeof Reflect?"undefined":t(Reflect))&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(u=(a<3?i(u):a>3?i(n,r,u):i(n,r))||u);return a>3&&u&&Object.defineProperty(n,r,u),u}function u(t,e){return function(n,r){e(n,r,t)}}function s(e,n){if("object"==("undefined"==typeof Reflect?"undefined":t(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function c(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})}function l(t,e){function n(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){u.label=n[1];break}if(6===n[0]&&u.label<i[1]){u.label=i[1],i=n;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(n);break}i[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}var r,o,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a}function f(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function p(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function h(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function d(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(h(arguments[e]));return t}function v(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function g(t){return this instanceof g?(this.v=t,this):new g(t)}function y(t,e,n){function r(t){c[t]&&(s[t]=function(e){return new Promise(function(n,r){l.push([t,e,n,r])>1||o(t,e)})})}function o(t,e){try{(n=c[t](e)).value instanceof g?Promise.resolve(n.value.v).then(i,a):u(l[0][2],n)}catch(t){u(l[0][3],t)}var n}function i(t){o("next",t)}function a(t){o("throw",t)}function u(t,e){t(e),l.shift(),l.length&&o(l[0][0],l[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,c=n.apply(t,e||[]),l=[];return s={},r("next"),r("throw"),r("return"),s[Symbol.asyncIterator]=function(){return this},s}function m(t){function e(e,o){n[e]=t[e]?function(n){return(r=!r)?{value:g(t[e](n)),done:"return"===e}:o?o(n):n}:o}var n,r;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n}function _(t){function e(e){n[e]=t[e]&&function(n){return new Promise(function(r,o){!function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)}(r,o,(n=t[e](n)).done,n.value)})}}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=t[Symbol.asyncIterator];return r?r.call(t):(t=p(t),n={},e("next"),e("throw"),e("return"),n[Symbol.asyncIterator]=function(){return this},n)}function x(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function b(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function w(t){return t&&t.__esModule?t:{default:t}}r.r(n),r.d(n,"__extends",function(){return o}),r.d(n,"__assign",function(){return O}),r.d(n,"__rest",function(){return i}),r.d(n,"__decorate",function(){return a}),r.d(n,"__param",function(){return u}),r.d(n,"__metadata",function(){return s}),r.d(n,"__awaiter",function(){return c}),r.d(n,"__generator",function(){return l}),r.d(n,"__exportStar",function(){return f}),r.d(n,"__values",function(){return p}),r.d(n,"__read",function(){return h}),r.d(n,"__spread",function(){return d}),r.d(n,"__spreadArrays",function(){return v}),r.d(n,"__await",function(){return g}),r.d(n,"__asyncGenerator",function(){return y}),r.d(n,"__asyncDelegator",function(){return m}),r.d(n,"__asyncValues",function(){return _}),r.d(n,"__makeTemplateObject",function(){return x}),r.d(n,"__importStar",function(){return b}),r.d(n,"__importDefault",function(){return w});var S=function(t,e){return(S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},O=function(){return(O=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},function(t,e,n){function r(){var t=[],e=[];return function(n,r){var o=r;if(c.isNaN(r)?o=l:c.isUndefined(r)&&(o=f),t.length>0){var i=t.indexOf(this);-1!==i?(t.splice(i+1),e.splice(i,1/0,n)):(t.push(this),e.push(n)),-1!==t.indexOf(o)&&(o=function(n,r){return t[0]===r?"[Circular ~]":"[Circular ~."+e.slice(0,t.indexOf(r)).join(".")+"]"}.call(this,n,o))}else t.push(o);return o instanceof Error?function(t){var e={message:t.message,name:t.name,stack:t.stack};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}(o):o}}function o(t,e){return e===l?NaN:e!==f?e:void 0}function i(t){return JSON.stringify(t,r())}function a(t){return JSON.parse(t,o)}function u(t){if("string"==typeof t)return t.length<=40?t:t.substr(0,39)+"…";if("number"==typeof t||"boolean"==typeof t||void 0===t)return t;if(c.isNaN(t))return"[NaN]";if(c.isUndefined(t))return"[undefined]";var e=Object.prototype.toString.call(t);if("[object Object]"===e)return"[Object]";if("[object Array]"===e)return"[Array]";if("[object Function]"===e){var n=t.name;return n?"[Function: "+n+"]":"[Function]"}return t}function s(t,e){if(0===e)return u(t);if(c.isPlainObject(t)){var n={},r=t;return Object.keys(r).forEach(function(t){n[t]=s(r[t],e-1)}),n}return Array.isArray(t)?t.map(function(t){return s(t,e-1)}):u(t)}Object.defineProperty(e,"__esModule",{value:!0});var c=n(2),l="[NaN]",f="[undefined]";e.serialize=i,e.deserialize=a,e.clone=function(t){return a(i(t))},e.fill=function(t,e,n){if(e in t&&!t[e].__sentry__){var r=t[e],o=n(r);o.__sentry__=!0,o.__sentry_original__=r,o.__sentry_wrapped__=o,t[e]=o}},e.urlEncode=function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},e.serializeObject=s,e.limitObjectDepthToSize=function t(e,n,r){void 0===n&&(n=3),void 0===r&&(r=102400);var o=s(e,n);return function(t){return function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(t))}(i(o))>r?t(e,n-1):o},e.serializeKeysToEventMessage=function(t,e){if(void 0===e&&(e=40),!t.length)return"[object has no keys]";if(t[0].length>=e)return t[0];for(var n=t.length;n>0;n--){var r=t.slice(0,n).join(", ");if(!(r.length>e))return n===t.length?r:r+"…"}return""},e.assign=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(t),o=0;o<e.length;o++){var i=e[o];if(null!==i)for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])}return r}},function(t,e,n){(function(t,r){function o(){return"[object process]"===Object.prototype.toString.call(void 0!==t?t:0)}function i(){return o()?r:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{}}function a(t){var e,n,r,o,i,a=[];if(!t||!t.tagName)return"";if(a.push(t.tagName.toLowerCase()),t.id&&a.push("#"+t.id),(e=t.className)&&u.isString(e))for(n=e.split(/\s+/),i=0;i<n.length;i++)a.push("."+n[i]);var s=["type","name","title","alt"];for(i=0;i<s.length;i++)r=s[i],(o=t.getAttribute(r))&&a.push("["+r+'="'+o+'"]');return a.join("")}Object.defineProperty(e,"__esModule",{value:!0});var u=n(2);e.dynamicRequire=function(t,e){return t.require(e)},e.isNodeEnv=o,e.getGlobalObject=i,e.uuid4=function(){var t=i(),e=t.crypto||t.msCrypto;if(void 0!==e&&e.getRandomValues){var n=new Uint16Array(8);e.getRandomValues(n),n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768;var r=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e};return r(n[0])+r(n[1])+r(n[2])+r(n[3])+r(n[4])+r(n[5])+r(n[6])+r(n[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},e.htmlTreeAsString=function(t){for(var e,n=t,r=[],o=0,i=0,u=" > ".length;n&&o++<5&&!("html"===(e=a(n))||o>1&&i+r.length*u+e.length>=80);)r.push(e),i+=e.length,n=n.parentNode;return r.reverse().join(" > ")},e.htmlElementAsString=a,e.parseUrl=function(t){if(!t)return{};var e=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};var n=e[6]||"",r=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],relative:e[5]+n+r}},e.getEventDescription=function(t){if(t.message)return t.message;if(t.exception&&t.exception.values&&t.exception.values[0]){var e=t.exception.values[0];return e.type&&e.value?e.type+": "+e.value:e.type||e.value||t.event_id||"<unknown>"}return t.event_id||"<unknown>"},e.consoleSandbox=function(t){var e=i();if(!("console"in e))return t();var n=e.console,r={};["debug","info","warn","error","log"].forEach(function(t){t in e.console&&n[t].__sentry__&&(r[t]=n[t].__sentry_wrapped__,n[t]=n[t].__sentry_original__)});var o=t();return Object.keys(r).forEach(function(t){n[t]=r[t]}),o}}).call(this,n(25),n(26))},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.truncate=function(t,e){return void 0===e&&(e=0),0!==e&&r.isString(t)?t.length<=e?t:t.substr(0,e)+"…":t},e.snipLine=function(t,e){var n=t,r=n.length;if(r<=150)return n;e>r&&(e=r);var o=Math.max(e-60,0);o<5&&(o=0);var i=Math.min(o+140,r);return i>r-5&&(i=r),i===r&&(o=Math.max(i-140,0)),n=n.slice(o,i),o>0&&(n="'{snip} "+n),i<r&&(n+=" {snip}"),n},e.safeJoin=function(t,e){if(!Array.isArray(t))return"";for(var n=[],r=0;r<t.length;r++){var o=t[r];try{n.push(String(o))}catch(t){n.push("[value cannot be serialized]")}}return n.join(e)},e.includes=function(t,e){return!(e.length>t.length)&&-1!==t.indexOf(e)}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.Fatal="fatal",t.Error="error",t.Warning="warning",t.Log="log",t.Info="info",t.Debug="debug",t.Critical="critical"}(e.Severity||(e.Severity={})),function(t){t.fromString=function(e){switch(e){case"debug":return t.Debug;case"info":return t.Info;case"warn":case"warning":return t.Warning;case"error":return t.Error;case"fatal":return t.Fatal;case"critical":return t.Critical;case"log":default:return t.Log}}}(e.Severity||(e.Severity={})),function(t){t.Unknown="unknown",t.Skipped="skipped",t.Success="success",t.RateLimit="rate_limit",t.Invalid="invalid",t.Failed="failed"}(e.Status||(e.Status={})),function(t){t.fromHttpCode=function(e){return e>=200&&e<300?t.Success:429===e?t.RateLimit:e>=400&&e<500?t.Invalid:e>=500?t.Failed:t.Unknown}}(e.Status||(e.Status={}))},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(19);e.addGlobalEventProcessor=r.addGlobalEventProcessor,e.Scope=r.Scope;var o=n(27);e.getCurrentHub=o.getCurrentHub,e.getHubFromCarrier=o.getHubFromCarrier,e.getMainCarrier=o.getMainCarrier,e.Hub=o.Hub,e.setHubOnCarrier=o.setHubOnCarrier},function(t,e,n){var r=n(46),o=n(47);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(48);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(2),i=n(9),a=n(18),u=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,s=function(){function t(t){"string"==typeof t?this.fromString(t):this.fromComponents(t),this.validate()}return t.prototype.toString=function(t){void 0===t&&(t=!1);var e=this,n=e.host,r=e.path,o=e.pass,i=e.port,a=e.projectId;return e.protocol+"://"+e.user+(t&&o?":"+o:"")+"@"+n+(i?":"+i:"")+"/"+(r?r+"/":r)+a},t.prototype.fromString=function(t){var e=u.exec(t);if(!e)throw new a.SentryError("Invalid Dsn");var n=r.__read(e.slice(1),6),o=n[0],s=n[1],c=n[2],l=void 0===c?"":c,f=n[3],p=n[4],h=void 0===p?"":p,d="",v=n[5],g=v.split("/");g.length>1&&(d=g.slice(0,-1).join("/"),v=g.pop()),i.assign(this,{host:f,pass:l,path:d,projectId:v,port:h,protocol:o,user:s})},t.prototype.fromComponents=function(t){this.protocol=t.protocol,this.user=t.user,this.pass=t.pass||"",this.host=t.host,this.port=t.port||"",this.path=t.path||"",this.projectId=t.projectId},t.prototype.validate=function(){var t,e;try{for(var n=r.__values(["protocol","user","host","projectId"]),i=n.next();!i.done;i=n.next()){var u=i.value;if(!this[u])throw new a.SentryError("Invalid Dsn: Missing "+u)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}if("http"!==this.protocol&&"https"!==this.protocol)throw new a.SentryError('Invalid Dsn: Unsupported protocol "'+this.protocol+'"');if(this.port&&o.isNaN(parseInt(this.port,10)))throw new a.SentryError('Invalid Dsn: Invalid port number "'+this.port+'"')},t}();e.Dsn=s},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=function(t){function e(e){var n=this.constructor,r=t.call(this,e)||this;return r.message=e,r.name=n.prototype.constructor.name,Object.setPrototypeOf(r,n.prototype),r}return r.__extends(e,t),e}(Error);e.SentryError=o},function(t,e,n){function r(){var t=i.getGlobalObject();return t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.globalEventProcessors=t.__SENTRY__.globalEventProcessors||[],t.__SENTRY__.globalEventProcessors}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=n(10),a=n(9),u=function(){function t(){this.notifyingListeners=!1,this.scopeListeners=[],this.eventProcessors=[],this.breadcrumbs=[],this.user={},this.tags={},this.extra={}}return t.prototype.addScopeListener=function(t){this.scopeListeners.push(t)},t.prototype.addEventProcessor=function(t){return this.eventProcessors.push(t),this},t.prototype.notifyScopeListeners=function(){var t=this;this.notifyingListeners||(this.notifyingListeners=!0,setTimeout(function(){t.scopeListeners.forEach(function(e){e(t)}),t.notifyingListeners=!1},0))},t.prototype.notifyEventProcessors=function(t,e){return o.__awaiter(this,void 0,void 0,function(){var n,i,a,u,s,c,l;return o.__generator(this,function(f){switch(f.label){case 0:a=t,f.label=1;case 1:f.trys.push([1,8,9,10]),u=o.__values(o.__spread(r(),this.eventProcessors)),s=u.next(),f.label=2;case 2:if(s.done)return[3,7];c=s.value,f.label=3;case 3:return f.trys.push([3,5,,6]),[4,c(o.__assign({},a),e)];case 4:return null===(a=f.sent())?[2,null]:[3,6];case 5:return f.sent(),[3,6];case 6:return s=u.next(),[3,2];case 7:return[3,10];case 8:return l=f.sent(),n={error:l},[3,10];case 9:try{s&&!s.done&&(i=u.return)&&i.call(u)}finally{if(n)throw n.error}return[7];case 10:return[2,a]}})})},t.prototype.setUser=function(t){return this.user=t,this.notifyScopeListeners(),this},t.prototype.setTag=function(t,e){var n;return this.tags=o.__assign({},this.tags,((n={})[t]=e,n)),this.notifyScopeListeners(),this},t.prototype.setExtra=function(t,e){var n;return this.extra=o.__assign({},this.extra,((n={})[t]=e,n)),this.notifyScopeListeners(),this},t.prototype.setFingerprint=function(t){return this.fingerprint=t,this.notifyScopeListeners(),this},t.prototype.setLevel=function(t){return this.level=t,this.notifyScopeListeners(),this},t.clone=function(e){var n=new t;return a.assign(n,e,{scopeListeners:[]}),e&&(n.extra=a.assign(e.extra),n.tags=a.assign(e.tags),n.breadcrumbs=o.__spread(e.breadcrumbs),n.eventProcessors=o.__spread(e.eventProcessors)),n},t.prototype.clear=function(){this.breadcrumbs=[],this.tags={},this.extra={},this.user={},this.level=void 0,this.fingerprint=void 0,this.notifyScopeListeners()},t.prototype.addBreadcrumb=function(t,e){this.breadcrumbs=void 0!==e&&e>=0?o.__spread(this.breadcrumbs,[t]).slice(-e):o.__spread(this.breadcrumbs,[t]),this.notifyScopeListeners()},t.prototype.applyFingerprint=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this.fingerprint?t.fingerprint=t.fingerprint.concat(this.fingerprint):t.message&&(t.fingerprint=t.fingerprint.concat(t.message)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},t.prototype.applyToEvent=function(t,e,n){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(r){return this.extra&&Object.keys(this.extra).length&&(t.extra=o.__assign({},this.extra,t.extra)),this.tags&&Object.keys(this.tags).length&&(t.tags=o.__assign({},this.tags,t.tags)),this.user&&Object.keys(this.user).length&&(t.user=o.__assign({},this.user,t.user)),this.level&&(t.level=this.level),this.applyFingerprint(t),(!t.breadcrumbs||0===t.breadcrumbs.length)&&this.breadcrumbs.length>0&&(t.breadcrumbs=void 0!==n&&n>=0?this.breadcrumbs.slice(-n):this.breadcrumbs),[2,this.notifyEventProcessors(t,e)]})})},t}();e.Scope=u,e.addGlobalEventProcessor=function(t){r().push(t)}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=function(){function t(){this.buffer=[]}return t.prototype.add=function(t){return r.__awaiter(this,void 0,void 0,function(){var e=this;return r.__generator(this,function(n){return-1===this.buffer.indexOf(t)&&this.buffer.push(t),t.then(function(){return r.__awaiter(e,void 0,void 0,function(){return r.__generator(this,function(e){return[2,this.remove(t)]})})}).catch(function(){return r.__awaiter(e,void 0,void 0,function(){return r.__generator(this,function(e){return[2,this.remove(t)]})})}),[2,t]})})},t.prototype.remove=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2,this.buffer.splice(this.buffer.indexOf(t),1)[0]]})})},t.prototype.length=function(){return this.buffer.length},t.prototype.drain=function(t){return r.__awaiter(this,void 0,void 0,function(){var e=this;return r.__generator(this,function(n){return[2,new Promise(function(n){var r=setTimeout(function(){t&&t>0&&n(!1)},t);Promise.all(e.buffer).then(function(){clearTimeout(r),n(!0)}).catch(function(){n(!0)})})]})})},t}();e.RequestBuffer=o},function(t,e,n){var r=n(49),o=n(50),i=n(51);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e,n){function r(e,n,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=r=Reflect.get:t.exports=r=function(t,e,n){var r=o(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},r(e,n,i||e)}var o=n(52);t.exports=r},function(t,e){"undefined"==typeof window&&(window={console:console})},function(t,e,n){function r(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=i.getCurrentHub();if(r&&r[t])return r[t].apply(r,o.__spread(e));throw new Error("No hub defined or "+t+" was not found on the hub, please open a bug report.")}Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i=n(14);e.captureException=function(t){var e;try{throw new Error("Sentry syntheticException")}catch(t){e=t}return r("captureException",t,{originalException:t,syntheticException:e})},e.captureMessage=function(t,e){var n;try{throw new Error(t)}catch(t){n=t}return r("captureMessage",t,e,{originalException:t,syntheticException:n})},e.captureEvent=function(t){return r("captureEvent",t)},e.addBreadcrumb=function(t){r("addBreadcrumb",t)},e.configureScope=function(t){r("configureScope",t)},e.withScope=function(t){r("withScope",t)},e._callOnClient=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];r.apply(void 0,o.__spread(["invokeClient",t],e))}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function i(){d&&p&&(d=!1,p.length?h=p.concat(h):v=-1,h.length&&a())}function a(){if(!d){var t=o(i);d=!0;for(var e=h.length;e;){for(p=h,h=[];++v<e;)p&&p[v].run();v=-1,e=h.length}p=null,d=!1,function(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}(t)}}function u(t,e){this.fun=t,this.array=e}function s(){}var c,l,f=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,h=[],d=!1,v=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||d||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==("undefined"==typeof window?"undefined":t(window))&&(r=window)}e.exports=r},function(t,e,n){(function(t){function r(){var t=l.getGlobalObject();return t.__SENTRY__=t.__SENTRY__||{hub:void 0},t}function o(t){var e=r(),n=a(e);return u(e,t),n}function i(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function a(t){return t&&t.__SENTRY__&&t.__SENTRY__.hub?t.__SENTRY__.hub:(t.__SENTRY__={},t.__SENTRY__.hub=new p,t.__SENTRY__.hub)}function u(t,e){return!!t&&(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=e,!0)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),c=n(3),l=n(10),f=n(19);e.API_VERSION=3;var p=function(){function t(t,n,r){void 0===n&&(n=new f.Scope),void 0===r&&(r=e.API_VERSION),this.version=r,this.stack=[],this.stack.push({client:t,scope:n})}return t.prototype.invokeClient=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this.getStackTop();o&&o.client&&o.client[t]&&(e=o.client)[t].apply(e,s.__spread(n,[o.scope]))},t.prototype.invokeClientAsync=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this.getStackTop();o&&o.client&&o.client[t]&&(e=o.client)[t].apply(e,s.__spread(n,[o.scope])).catch(function(t){c.logger.error(t)})},t.prototype.isOlderThan=function(t){return this.version<t},t.prototype.bindClient=function(t){var e=this.getStackTop();e.client=t,e&&e.scope&&t&&e.scope.addScopeListener(function(e){if(t.getBackend)try{t.getBackend().storeScope(e)}catch(t){}})},t.prototype.pushScope=function(){var t=this.getStack(),e=t.length>0?t[t.length-1].scope:void 0,n=f.Scope.clone(e);return this.getStack().push({client:this.getClient(),scope:n}),n},t.prototype.popScope=function(){return void 0!==this.getStack().pop()},t.prototype.withScope=function(t){var e=this.pushScope();try{t(e)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this.stack},t.prototype.getStackTop=function(){return this.stack[this.stack.length-1]},t.prototype.captureException=function(t,e){var n=this._lastEventId=l.uuid4();return this.invokeClientAsync("captureException",t,s.__assign({},e,{event_id:n})),n},t.prototype.captureMessage=function(t,e,n){var r=this._lastEventId=l.uuid4();return this.invokeClientAsync("captureMessage",t,e,s.__assign({},n,{event_id:r})),r},t.prototype.captureEvent=function(t,e){var n=this._lastEventId=l.uuid4();return this.invokeClientAsync("captureEvent",t,s.__assign({},e,{event_id:n})),n},t.prototype.lastEventId=function(){return this._lastEventId},t.prototype.addBreadcrumb=function(t,e){this.invokeClient("addBreadcrumb",t,s.__assign({},e))},t.prototype.configureScope=function(t){var e=this.getStackTop();e.scope&&e.client&&t(e.scope)},t.prototype.run=function(t){var e=o(this);try{t(this)}finally{o(e)}},t.prototype.getIntegration=function(t){try{return this.getClient().getIntegration(t)}catch(e){return c.logger.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},t}();e.Hub=p,e.getMainCarrier=r,e.makeMain=o,e.getCurrentHub=function(){var n=r();i(n)&&!a(n).isOlderThan(e.API_VERSION)||u(n,new p);try{var o=l.dynamicRequire(t,"domain").active;if(!o)return a(n);if(!i(o)||a(o).isOlderThan(e.API_VERSION)){var s=a(n).getStackTop();u(o,new p(s.client,f.Scope.clone(s.scope)))}return a(o)}catch(t){return a(n)}},e.hasHubOnCarrier=i,e.getHubFromCarrier=a,e.setHubOnCarrier=u}).call(this,n(28)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n(17),i=function(){function t(t){this.dsn=t,this.dsnObject=new o.Dsn(t)}return t.prototype.getDsn=function(){return this.dsnObject},t.prototype.getStoreEndpoint=function(){return""+this.getBaseUrl()+this.getStoreEndpointPath()},t.prototype.getStoreEndpointWithUrlEncodedAuth=function(){var t={sentry_key:this.dsnObject.user,sentry_version:"7"};return this.getStoreEndpoint()+"?"+r.urlEncode(t)},t.prototype.getBaseUrl=function(){var t=this.dsnObject,e=t.protocol?t.protocol+":":"",n=t.port?":"+t.port:"";return e+"//"+t.host+n},t.prototype.getStoreEndpointPath=function(){var t=this.dsnObject;return(t.path?"/"+t.path:"")+"/api/"+t.projectId+"/store/"},t.prototype.getRequestHeaders=function(t,e){var n=this.dsnObject,r=["Sentry sentry_version=7"];return r.push("sentry_timestamp="+(new Date).getTime()),r.push("sentry_client="+t+"/"+e),r.push("sentry_key="+n.user),n.pass&&r.push("sentry_secret="+n.pass),{"Content-Type":"application/json","X-Sentry-Auth":r.join(", ")}},t.prototype.getReportDialogEndpoint=function(t){void 0===t&&(t={});var e=this.dsnObject,n=this.getBaseUrl()+(e.path?"/"+e.path:"")+"/api/embed/error-page/",r=[];for(var o in r.push("dsn="+e.toString()),t)if("user"===o){if(!t.user)continue;t.user.name&&r.push("name="+encodeURIComponent(t.user.name)),t.user.email&&r.push("email="+encodeURIComponent(t.user.email))}else r.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return r.length?n+"?"+r.join("&"):n},t}();e.API=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(31),i=n(32),a=n(3),u=n(10),s=n(11),c=n(17),l=n(33),f=function(){function t(t,e){this.backend=new t(e),this.options=e,e.dsn&&(this.dsn=new c.Dsn(e.dsn)),this.integrations=l.setupIntegrations(this.options)}return t.prototype.install=function(){if(!this.isEnabled())return this.installed=!1;var t=this.getBackend();return!this.installed&&t.install&&t.install(),this.installed=!0},t.prototype.buffer=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2,this.getBackend().getBuffer().add(t)]})})},t.prototype.captureException=function(t,e,n){return r.__awaiter(this,void 0,void 0,function(){var o=this;return r.__generator(this,function(i){return[2,this.buffer(r.__awaiter(o,void 0,void 0,function(){var o;return r.__generator(this,function(r){switch(r.label){case 0:return[4,this.getBackend().eventFromException(t,e)];case 1:return o=r.sent(),[2,this.captureEvent(o,e,n)]}})}))]})})},t.prototype.captureMessage=function(t,e,n,o){return r.__awaiter(this,void 0,void 0,function(){var i=this;return r.__generator(this,function(a){return[2,this.buffer(r.__awaiter(i,void 0,void 0,function(){var i;return r.__generator(this,function(r){switch(r.label){case 0:return[4,this.getBackend().eventFromMessage(t,e,n)];case 1:return i=r.sent(),[2,this.captureEvent(i,n,o)]}})}))]})})},t.prototype.captureEvent=function(t,e,n){return r.__awaiter(this,void 0,void 0,function(){var o=this;return r.__generator(this,function(i){return[2,this.buffer(r.__awaiter(o,void 0,void 0,function(){var o=this;return r.__generator(this,function(i){return[2,this.processEvent(t,function(t){return r.__awaiter(o,void 0,void 0,function(){return r.__generator(this,function(e){return[2,this.getBackend().sendEvent(t)]})})},e,n)]})}))]})})},t.prototype.addBreadcrumb=function(t,e,n){var o=this.getOptions(),i=o.beforeBreadcrumb,a=o.maxBreadcrumbs,s=void 0===a?30:a;if(!(s<=0)){var c=(new Date).getTime()/1e3,l=r.__assign({timestamp:c},t),f=i?u.consoleSandbox(function(){return i(l,e)}):l;null!==f&&this.getBackend().storeBreadcrumb(f)&&n&&n.addBreadcrumb(f,Math.min(s,100))}},t.prototype.getDsn=function(){return this.dsn},t.prototype.getOptions=function(){return this.options},t.prototype.getBackend=function(){return this.backend},t.prototype.isEnabled=function(){return!1!==this.getOptions().enabled&&void 0!==this.dsn},t.prototype.prepareEvent=function(t,e,n){return r.__awaiter(this,void 0,void 0,function(){var o,i,a,c,l,f,p,h,d;return r.__generator(this,function(v){return o=this.getOptions(),i=o.environment,a=o.maxBreadcrumbs,c=void 0===a?30:a,l=o.release,f=o.dist,void 0===(p=r.__assign({},t)).environment&&void 0!==i&&(p.environment=i),void 0===p.release&&void 0!==l&&(p.release=l),void 0===p.dist&&void 0!==f&&(p.dist=f),p.message&&(p.message=s.truncate(p.message,250)),(h=p.exception&&p.exception.values&&p.exception.values[0])&&h.value&&(h.value=s.truncate(h.value,250)),(d=p.request)&&d.url&&(d.url=s.truncate(d.url,250)),void 0===p.event_id&&(p.event_id=u.uuid4()),e?[2,e.applyToEvent(p,n,Math.min(c,100))]:[2,p]})})},t.prototype.processEvent=function(t,e,n,u){return r.__awaiter(this,void 0,void 0,function(){var s,c,l,f,p,h,d;return r.__generator(this,function(r){switch(r.label){case 0:return this.isEnabled()?(s=this.getOptions(),c=s.beforeSend,"number"==typeof(l=s.sampleRate)&&Math.random()>l?[2,{status:o.Status.Skipped}]:[4,this.prepareEvent(t,u,n)]):[2,{status:o.Status.Skipped}];case 1:if(null===(f=r.sent()))return[2,{status:o.Status.Skipped}];p=f,r.label=2;case 2:return r.trys.push([2,5,,6]),n&&n.data&&!0===n.data.__sentry__||!c?[3,4]:[4,c(f,n)];case 3:void 0===(p=r.sent())&&a.logger.error("`beforeSend` method has to return `null` or a valid event"),r.label=4;case 4:return[3,6];case 5:return h=r.sent(),i.forget(this.captureException(h,{data:{__sentry__:!0},originalException:h})),[2,{reason:"Event processing in beforeSend method threw an exception",status:o.Status.Invalid}];case 6:return null===p?[2,{reason:"Event dropped due to being discarded by beforeSend method",status:o.Status.Skipped}]:[4,e(p)];case 7:return(d=r.sent()).event=p,d.status,o.Status.RateLimit,[2,d]}})})},t.prototype.close=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){return[2,this.getBackend().getBuffer().drain(t)]})})},t.prototype.getIntegrations=function(){return this.integrations||{}},t.prototype.getIntegration=function(t){try{return this.integrations[t.id]||null}catch(e){return a.logger.warn("Cannot retrieve integration "+t.id+" from the current Client"),null}},t}();e.BaseClient=f},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.Fatal="fatal",t.Error="error",t.Warning="warning",t.Log="log",t.Info="info",t.Debug="debug",t.Critical="critical"}(e.Severity||(e.Severity={})),function(t){t.fromString=function(e){switch(e){case"debug":return t.Debug;case"info":return t.Info;case"warn":case"warning":return t.Warning;case"error":return t.Error;case"fatal":return t.Fatal;case"critical":return t.Critical;case"log":default:return t.Log}}}(e.Severity||(e.Severity={})),function(t){t.Unknown="unknown",t.Skipped="skipped",t.Success="success",t.RateLimit="rate_limit",t.Invalid="invalid",t.Failed="failed"}(e.Status||(e.Status={})),function(t){t.fromHttpCode=function(e){return e>=200&&e<300?t.Success:429===e?t.RateLimit:e>=400&&e<500?t.Invalid:e>=500?t.Failed:t.Unknown}}(e.Status||(e.Status={}))},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8);e.forget=function(t){t.catch(function(t){console.error(t)})},e.filterAsync=function(t,e,n){return r.__awaiter(this,void 0,void 0,function(){var o;return r.__generator(this,function(r){switch(r.label){case 0:return[4,Promise.all(t.map(e,n))];case 1:return o=r.sent(),[2,t.filter(function(t,e){return o[e]})]}})})}},function(t,e,n){function r(t){var e,n,r,o,u=t.defaultIntegrations&&a.__spread(t.defaultIntegrations)||[],s=t.integrations,c=[];if(Array.isArray(s)){var l=s.map(function(t){return t.name}),f=[];try{for(var p=a.__values(u),h=p.next();!h.done;h=p.next()){var d=h.value;-1===l.indexOf(i(d))&&-1===f.indexOf(i(d))&&(c.push(d),f.push(i(d)))}}catch(t){e={error:t}}finally{try{h&&!h.done&&(n=p.return)&&n.call(p)}finally{if(e)throw e.error}}try{for(var v=a.__values(s),g=v.next();!g.done;g=v.next()){var y=g.value;-1===f.indexOf(i(y))&&(c.push(y),f.push(i(y)))}}catch(t){r={error:t}}finally{try{g&&!g.done&&(o=v.return)&&o.call(v)}finally{if(r)throw r.error}}}else{if("function"!=typeof s)return a.__spread(u);c=s(u),c=Array.isArray(c)?c:[c]}return c}function o(t,n){if(-1===e.installedIntegrations.indexOf(i(t))){try{t.setupOnce()}catch(e){u.logger.warn("Integration "+i(t)+': The install method is deprecated. Use "setupOnce".'),t.install&&t.install(n)}e.installedIntegrations.push(i(t)),u.logger.log("Integration installed: "+i(t))}}function i(t){return t.constructor.id||t.name}Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),u=n(3);e.installedIntegrations=[],e.getIntegrationsToSetup=r,e.setupIntegration=o,e.setupIntegrations=function(t){var e={};return r(t).forEach(function(n){e[i(n)]=n,o(n,t)}),e}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(3),i=n(18),a=n(20),u=function(){function t(t){this.buffer=new a.RequestBuffer,this.options=t,this.options.dsn||o.logger.warn("No DSN provided, backend will not do anything.")}return t.prototype.eventFromException=function(t,e){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){throw new i.SentryError("Backend has to implement `eventFromException` method")})})},t.prototype.eventFromMessage=function(t,e,n){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){throw new i.SentryError("Backend has to implement `eventFromMessage` method")})})},t.prototype.sendEvent=function(t){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(t){throw new i.SentryError("Backend has to implement `sendEvent` method")})})},t.prototype.storeBreadcrumb=function(t){return!0},t.prototype.storeScope=function(t){},t.prototype.getBuffer=function(){return this.buffer},t}();e.BaseBackend=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.None=0]="None",t[t.Error=1]="Error",t[t.Debug=2]="Debug",t[t.Verbose=3]="Verbose"}(e.LogLevel||(e.LogLevel={}))},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(14),o=n(3);e.initAndBind=function(t,e){if(!0===e.debug&&o.logger.enable(),!r.getCurrentHub().getClient()){var n=new t(e);r.getCurrentHub().bindClient(n),n.install()}}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(38);e.Dedupe=r.Dedupe;var o=n(39);e.FunctionToString=o.FunctionToString;var i=n(40);e.SDKInformation=i.SDKInformation;var a=n(41);e.InboundFilters=a.InboundFilters;var u=n(42);e.Debug=u.Debug;var s=n(43);e.RewriteFrames=s.RewriteFrames},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(14),i=n(3),a=n(10),u=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){var e=this;o.addGlobalEventProcessor(function(n){return r.__awaiter(e,void 0,void 0,function(){var e;return r.__generator(this,function(r){if(e=o.getCurrentHub().getIntegration(t)){try{if(e.shouldDropEvent(n,e.previousEvent))return[2,null]}catch(t){return[2,e.previousEvent=n]}return[2,e.previousEvent=n]}return[2,n]})})})},t.prototype.shouldDropEvent=function(t,e){return!(!e||(this.isSameMessageEvent(t,e)?(i.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: "+a.getEventDescription(t)),0):!this.isSameExceptionEvent(t,e)||(i.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: "+a.getEventDescription(t)),0)))},t.prototype.isSameMessageEvent=function(t,e){var n=t.message,r=e.message;return!(!n&&!r||n&&!r||!n&&r||n!==r||!this.isSameFingerprint(t,e)||!this.isSameStacktrace(t,e))},t.prototype.getFramesFromEvent=function(t){var e=t.exception;if(!e)return t.stacktrace?t.stacktrace.frames:void 0;try{return e.values[0].stacktrace.frames}catch(t){return}},t.prototype.isSameStacktrace=function(t,e){var n=this.getFramesFromEvent(t),r=this.getFramesFromEvent(e);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(n=n,(r=r).length!==n.length)return!1;for(var o=0;o<r.length;o++){var i=r[o],a=n[o];if(i.filename!==a.filename||i.lineno!==a.lineno||i.colno!==a.colno||i.function!==a.function)return!1}return!0},t.prototype.getExceptionFromEvent=function(t){return t.exception&&t.exception.values&&t.exception.values[0]},t.prototype.isSameExceptionEvent=function(t,e){var n=this.getExceptionFromEvent(e),r=this.getExceptionFromEvent(t);return!!(n&&r&&n.type===r.type&&n.value===r.value&&this.isSameFingerprint(t,e)&&this.isSameStacktrace(t,e))},t.prototype.isSameFingerprint=function(t,e){var n=t.fingerprint,r=e.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;n=n,r=r;try{return!(n.join("")!==r.join(""))}catch(t){return!1}},t.id="Dedupe",t}();e.Dedupe=u},function(t,e,n){var r;Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.name=t.id}return t.prototype.setupOnce=function(){r=Function.prototype.toString,Function.prototype.toString=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.__sentry__?this.__sentry_original__:this;return r.apply(n,t)}},t.id="FunctionToString",t}();e.FunctionToString=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(){function t(){this.name="SDKInformation"}return t.prototype.setupOnce=function(){r.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.")},t}();e.SDKInformation=o},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(14),i=n(2),a=n(3),u=n(10),s=n(11),c=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],l=function(){function t(e){void 0===e&&(e={}),this.options=e,this.name=t.id}return t.prototype.setupOnce=function(){var e=this;o.addGlobalEventProcessor(function(n){return r.__awaiter(e,void 0,void 0,function(){var e,i,a,u,s;return r.__generator(this,function(r){return(e=o.getCurrentHub())&&(i=e.getIntegration(t))&&(a=e.getClient(),u=a?a.getOptions():{},s=i.mergeOptions(u),i.shouldDropEvent(n,s))?[2,null]:[2,n]})})})},t.prototype.shouldDropEvent=function(t,e){return this.isSentryError(t,e)?(a.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: "+u.getEventDescription(t)),!0):this.isIgnoredError(t,e)?(a.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: "+u.getEventDescription(t)),!0):this.isBlacklistedUrl(t,e)?(a.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: "+u.getEventDescription(t)+".\nUrl: "+this.getEventFilterUrl(t)),!0):!this.isWhitelistedUrl(t,e)&&(a.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: "+u.getEventDescription(t)+".\nUrl: "+this.getEventFilterUrl(t)),!0)},t.prototype.isSentryError=function(t,e){if(void 0===e&&(e={}),!e.ignoreInternal)return!1;try{return"SentryError"===t.exception.values[0].type}catch(t){return!1}},t.prototype.isIgnoredError=function(t,e){var n=this;return void 0===e&&(e={}),!(!e.ignoreErrors||!e.ignoreErrors.length)&&this.getPossibleEventMessages(t).some(function(t){return e.ignoreErrors.some(function(e){return n.isMatchingPattern(t,e)})})},t.prototype.isBlacklistedUrl=function(t,e){var n=this;if(void 0===e&&(e={}),!e.blacklistUrls||!e.blacklistUrls.length)return!1;var r=this.getEventFilterUrl(t);return!!r&&e.blacklistUrls.some(function(t){return n.isMatchingPattern(r,t)})},t.prototype.isWhitelistedUrl=function(t,e){var n=this;if(void 0===e&&(e={}),!e.whitelistUrls||!e.whitelistUrls.length)return!0;var r=this.getEventFilterUrl(t);return!r||e.whitelistUrls.some(function(t){return n.isMatchingPattern(r,t)})},t.prototype.mergeOptions=function(t){return void 0===t&&(t={}),{blacklistUrls:r.__spread(this.options.blacklistUrls||[],t.blacklistUrls||[]),ignoreErrors:r.__spread(this.options.ignoreErrors||[],t.ignoreErrors||[],c),ignoreInternal:void 0===this.options.ignoreInternal||this.options.ignoreInternal,whitelistUrls:r.__spread(this.options.whitelistUrls||[],t.whitelistUrls||[])}},t.prototype.isMatchingPattern=function(t,e){return i.isRegExp(e)?e.test(t):"string"==typeof e&&s.includes(t,e)},t.prototype.getPossibleEventMessages=function(t){if(t.message)return[t.message];if(!t.exception)return[];try{var e=t.exception.values[0],n=e.type,r=e.value;return[""+r,n+": "+r]}catch(e){return a.logger.error("Cannot extract message for event "+u.getEventDescription(t)),[]}},t.prototype.getEventFilterUrl=function(t){try{return t.stacktrace?t.stacktrace.frames[0].filename:t.exception?t.exception.values[0].stacktrace.frames[0].filename:null}catch(e){return a.logger.error("Cannot extract url for event "+u.getEventDescription(t)),null}},t.id="InboundFilters",t}();e.InboundFilters=l},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(14),i=function(){function t(e){this.name=t.id,this.options=r.__assign({debugger:!1,stringify:!1},e)}return t.prototype.setupOnce=function(){var e=this;o.addGlobalEventProcessor(function(n,i){return r.__awaiter(e,void 0,void 0,function(){var e;return r.__generator(this,function(r){return(e=o.getCurrentHub().getIntegration(t))&&(e.options.debugger,e.options.stringify?(console.log(JSON.stringify(n,null,2)),i&&console.log(JSON.stringify(i,null,2))):(console.log(n),i&&console.log(i))),[2,n]})})})},t.id="Debug",t}();e.Debug=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n(14),i=n(44),a=function(){function t(e){void 0===e&&(e={});var n=this;this.name=t.id,this.iteratee=function(t){return r.__awaiter(n,void 0,void 0,function(){var e;return r.__generator(this,function(n){return t.filename&&t.filename.startsWith("/")&&(e=this.root?i.relative(this.root,t.filename):i.basename(t.filename),t.filename="app:///"+e),[2,t]})})},e.root&&(this.root=e.root),e.iteratee&&(this.iteratee=e.iteratee)}return t.prototype.setupOnce=function(){var e=this;o.addGlobalEventProcessor(function(n){return r.__awaiter(e,void 0,void 0,function(){var e;return r.__generator(this,function(r){return(e=o.getCurrentHub().getIntegration(t))?[2,e.process(n)]:[2,n]})})})},t.prototype.process=function(t){return r.__awaiter(this,void 0,void 0,function(){var e,n,o,i,a,u,s;return r.__generator(this,function(r){switch(r.label){case 0:if(!(e=this.getFramesFromEvent(t)))return[3,4];for(o in n=[],e)n.push(o);i=0,r.label=1;case 1:return i<n.length?(a=n[i],u=e,s=a,[4,this.iteratee(e[a])]):[3,4];case 2:u[s]=r.sent(),r.label=3;case 3:return i++,[3,1];case 4:return[2,t]}})})},t.prototype.getFramesFromEvent=function(t){var e=t.exception;if(!e)return t.stacktrace?t.stacktrace.frames:void 0;try{return e.values[0].stacktrace.frames}catch(t){return}},t.id="RewriteFrames",t}();e.RewriteFrames=a},function(t,e,n){function r(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function o(t){var e=c.exec(t);return e?e.slice(1):[]}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n="",o=!1,i=t.length-1;i>=-1&&!o;i--){var a=i>=0?t[i]:"/";a&&(n=a+"/"+n,o="/"===a.charAt(0))}return(o?"/":"")+(n=r(n.split("/").filter(function(t){return!!t}),!o).join("/"))||"."}function a(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}function u(t){var e=s(t),n="/"===t.substr(-1),o=r(t.split("/").filter(function(t){return!!t}),!e).join("/");return o||e||(o="."),o&&n&&(o+="/"),(e?"/":"")+o}function s(t){return"/"===t.charAt(0)}Object.defineProperty(e,"__esModule",{value:!0});var c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;e.resolve=i,e.relative=function(t,e){t=i(t).substr(1),e=i(e).substr(1);for(var n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length),u=o,s=0;s<o;s++)if(n[s]!==r[s]){u=s;break}var c=[];for(s=u;s<n.length;s++)c.push("..");return(c=c.concat(r.slice(u))).join("/")},e.normalize=u,e.isAbsolute=s,e.join=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u(t.join("/"))},e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}},function(e,n,r){!function(e){function n(t,e,n,i){var a=e&&e.prototype instanceof o?e:o,u=Object.create(a.prototype),s=new p(i||[]);return u._invoke=function(t,e,n){var o=w;return function(i,a){if(o===O)throw new Error("Generator is already running");if(o===A){if("throw"===i)throw a;return d()}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var s=c(u,n);if(s){if(s===k)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===w)throw o=A,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=O;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?A:S,l.arg===k)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=A,n.method="throw",n.arg=l.arg)}}}(t,n,s),u}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function u(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(e){var n;this._invoke=function(o,i){function a(){return new Promise(function(n,a){!function n(o,i,a,u){var s=r(e[o],e,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==(void 0===l?"undefined":t(l))&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,a,u)},function(t){n("throw",t,a,u)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},function(t){return n("throw",t,a,u)})}u(s.arg)}(o,i,n,a)})}return n=n?n.then(a,a):a()}}function c(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,c(t,e),"throw"===e.method))return k;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,k;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,k):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function f(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function h(t){if(t){var e=t[_];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:d}}function d(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,m="function"==typeof Symbol?Symbol:{},_=m.iterator||"@@iterator",x=m.asyncIterator||"@@asyncIterator",b=m.toStringTag||"@@toStringTag";e.wrap=n;var w="suspendedStart",S="suspendedYield",O="executing",A="completed",k={},E={};E[_]=function(){return this};var C=Object.getPrototypeOf,T=C&&C(C(h([])));T&&T!==g&&y.call(T,_)&&(E=T);var P=a.prototype=o.prototype=Object.create(E);i.prototype=P.constructor=a,a.constructor=i,a[b]=i.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},u(s.prototype),s.prototype[x]=function(){return this},e.AsyncIterator=s,e.async=function(t,r,o,i){var a=new s(n(t,r,o,i));return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},u(P),P[b]="Generator",P[_]=function(){return this},P.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=h,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(f),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),u=y.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),f(n),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;f(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),k}}}(e.exports)},function(e,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)})(e)}function o(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=o=function(t){return r(t)}:e.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},o(t)}e.exports=o},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e,n){var r=n(13);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}},function(t,e,n){function r(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function o(t,e,n,o,i,a){return r((u=r(r(e,t),r(o,a)))<<(s=i)|u>>>32-s,n);var u,s}function i(t,e,n,r,i,a,u){return o(e&n|~e&r,t,e,i,a,u)}function a(t,e,n,r,i,a,u){return o(e&r|n&~r,t,e,i,a,u)}function u(t,e,n,r,i,a,u){return o(e^n^r,t,e,i,a,u)}function s(t,e,n,r,i,a,u){return o(n^(e|~r),t,e,i,a,u)}function c(t,e){var n,o,c,l,f;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var p=1732584193,h=-271733879,d=-1732584194,v=271733878;for(n=0;n<t.length;n+=16)o=p,c=h,l=d,f=v,p=s(p=u(p=u(p=u(p=u(p=a(p=a(p=a(p=a(p=i(p=i(p=i(p=i(p,h,d,v,t[n],7,-680876936),h=i(h,d=i(d,v=i(v,p,h,d,t[n+1],12,-389564586),p,h,t[n+2],17,606105819),v,p,t[n+3],22,-1044525330),d,v,t[n+4],7,-176418897),h=i(h,d=i(d,v=i(v,p,h,d,t[n+5],12,1200080426),p,h,t[n+6],17,-1473231341),v,p,t[n+7],22,-45705983),d,v,t[n+8],7,1770035416),h=i(h,d=i(d,v=i(v,p,h,d,t[n+9],12,-1958414417),p,h,t[n+10],17,-42063),v,p,t[n+11],22,-1990404162),d,v,t[n+12],7,1804603682),h=i(h,d=i(d,v=i(v,p,h,d,t[n+13],12,-40341101),p,h,t[n+14],17,-1502002290),v,p,t[n+15],22,1236535329),d,v,t[n+1],5,-165796510),h=a(h,d=a(d,v=a(v,p,h,d,t[n+6],9,-1069501632),p,h,t[n+11],14,643717713),v,p,t[n],20,-373897302),d,v,t[n+5],5,-701558691),h=a(h,d=a(d,v=a(v,p,h,d,t[n+10],9,38016083),p,h,t[n+15],14,-660478335),v,p,t[n+4],20,-405537848),d,v,t[n+9],5,568446438),h=a(h,d=a(d,v=a(v,p,h,d,t[n+14],9,-1019803690),p,h,t[n+3],14,-187363961),v,p,t[n+8],20,1163531501),d,v,t[n+13],5,-1444681467),h=a(h,d=a(d,v=a(v,p,h,d,t[n+2],9,-51403784),p,h,t[n+7],14,1735328473),v,p,t[n+12],20,-1926607734),d,v,t[n+5],4,-378558),h=u(h,d=u(d,v=u(v,p,h,d,t[n+8],11,-2022574463),p,h,t[n+11],16,1839030562),v,p,t[n+14],23,-35309556),d,v,t[n+1],4,-1530992060),h=u(h,d=u(d,v=u(v,p,h,d,t[n+4],11,1272893353),p,h,t[n+7],16,-155497632),v,p,t[n+10],23,-1094730640),d,v,t[n+13],4,681279174),h=u(h,d=u(d,v=u(v,p,h,d,t[n],11,-358537222),p,h,t[n+3],16,-722521979),v,p,t[n+6],23,76029189),d,v,t[n+9],4,-640364487),h=u(h,d=u(d,v=u(v,p,h,d,t[n+12],11,-421815835),p,h,t[n+15],16,530742520),v,p,t[n+2],23,-995338651),d,v,t[n],6,-198630844),h=s(h=s(h=s(h=s(h,d=s(d,v=s(v,p,h,d,t[n+7],10,1126891415),p,h,t[n+14],15,-1416354905),v,p,t[n+5],21,-57434055),d=s(d,v=s(v,p=s(p,h,d,v,t[n+12],6,1700485571),h,d,t[n+3],10,-1894986606),p,h,t[n+10],15,-1051523),v,p,t[n+1],21,-2054922799),d=s(d,v=s(v,p=s(p,h,d,v,t[n+8],6,1873313359),h,d,t[n+15],10,-30611744),p,h,t[n+6],15,-1560198380),v,p,t[n+13],21,1309151649),d=s(d,v=s(v,p=s(p,h,d,v,t[n+4],6,-145523070),h,d,t[n+11],10,-1120210379),p,h,t[n+2],15,718787259),v,p,t[n+9],21,-343485551),p=r(p,o),h=r(h,c),d=r(d,l),v=r(v,f);return[p,h,d,v]}function l(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function f(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function p(t){var e,n,r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e);return r}function h(t){return unescape(encodeURIComponent(t))}function d(t){return function(t){return l(c(f(t),8*t.length))}(h(t))}function v(t,e){return function(t,e){var n,r,o=f(t),i=[],a=[];for(i[15]=a[15]=void 0,o.length>16&&(o=c(o,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],a[n]=1549556828^o[n];return r=c(i.concat(f(e)),512+8*e.length),l(c(a.concat(r),640))}(h(t),h(e))}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function m(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _(){return"undefined"==typeof document||null==document.location?"":document.location.href}function x(t,e){var n=Object.keys(t).sort(),r={extra:{__serialized__:Object(ft.limitObjectDepthToSize)(t)},fingerprint:[ht(n.join(""))],message:"Non-Error exception captured with keys: ".concat(Object(ft.serializeKeysToEventMessage)(n))};if(e){var o=w(bt(e).stack);r.stacktrace={frames:o}}return r}function b(t){return{exception:{values:[function(t){var e={stacktrace:{frames:w(t.stack)},type:t.name,value:t.message};return void 0===e.type&&""===e.value&&(e.value="Unrecoverable error caught"),e}(t)]}}}function w(t){if(!t||!t.length)return[];var e=t,n=e[0].func||"",r=e[e.length-1].func||"";return(Object(pt.includes)(n,"captureMessage")||Object(pt.includes)(n,"captureException"))&&(e=e.slice(1)),Object(pt.includes)(r,"sentryWrapped")&&(e=e.slice(0,-1)),e.map(function(t){return{colno:t.column,filename:t.url||e[0].url,function:t.func||"?",in_app:!0,lineno:t.line}}).slice(0,wt).reverse()}function S(){return St}function O(){return!!St.request}function A(){try{if("function"==typeof getCurrentPages){var t=getCurrentPages();return t[t.length-1].route}return lt.logger.warn("getCurrentPages is not function in global"),"unknow"}catch(t){return"unknow"}}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function P(t,e,n){try{if(!(e in t)||t[e].__sentry__)return;var r=t[e],o=n(r);if(o.__sentry__=!0,o.__sentry_original__=r,o.__sentry_wrapped__=o,Object.defineProperties&&Object.getOwnPropertyDescriptor){if(!Object.getOwnPropertyDescriptor(t,e).configurable)throw new Error("unable to config");Object.defineProperties(t,G()({},e,{value:o}))}else t[e]=o}catch(t){lt.logger.warn("fail to reset property ".concat(e))}}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;if(!Object(ct.isFunction)(t))return t;try{if(t.__sentry__)return t;if(t.__sentry_wrapped__)return t.__sentry_wrapped__}catch(e){return t}var r=function(){var r=this;n&&Object(ct.isFunction)(n)&&n.apply(r,arguments);var o=Array.prototype.slice.call(arguments);try{var i=o.map(function(t){return I(t,e)});return t.handleEvent?t.handleEvent.apply(r,i):t.apply(r,i)}catch(t){throw Rt+=1,setTimeout(function(){Rt-=1}),Object(X.withScope)(function(){var n=$()(Y.a.mark(function n(r){return Y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.addEventProcessor(function(){var t=$()(Y.a.mark(function t(n){var r;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=D({},n),e.mechanism&&(r.exception=r.exception||{},r.exception.mechanism=e.mechanism),r.extra=D({},r.extra,{arguments:Object(ft.serializeObject)(o,2)}),t.abrupt("return",r);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(X.captureException)(t);case 2:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()),t}};try{for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}catch(t){}return r.prototype=t.prototype,t.__sentry_wrapped__=r,r.__sentry__=!0,r.__sentry_original__=t,r}function L(t,e){if(!t.__sentry__){var n=e(t);return n.__sentry__=!0,n.__sentry_original__=t,n.__sentry_wrapped__=n,n}}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function z(t){var e;void 0===t.defaultIntegrations&&(t.defaultIntegrations=Wt),t.minaContext&&(e=t.minaContext,St=e),Object(X.initAndBind)(It,t);var n=function(){try{return Ot||(Ot=St.getSystemInfoSync())}catch(e){lt.logger.warn("getSystemInfoSync is undefined in minaContext");var t={};return At.forEach(function(e){t[e]="unknow"}),t}}(),r=S().getLaunchOptionsSync?S().getLaunchOptionsSync():null;Object(X.configureScope)(function(t){n&&At.forEach(function(e){t.setTag("mina_".concat(e),n[e]||"unknow")}),r&&(r.scene&&t.setTag("scene",r.scene),t.setExtra("launch",r))}),r&&Object(X.addBreadcrumb)({category:"app-life-cycle",data:{name:"onAppLaunch",args:r}})}function B(){throw new X.SentryError("showReportDialog not support")}function U(){return Object(X.getCurrentHub)().lastEventId()}function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}n.r(e);var W={};n.r(W),n.d(W,"BaseTransport",function(){return Et}),n.d(W,"RequestTransport",function(){return Ct});var H={};n.r(H),n.d(H,"Breadcrumbs",function(){return Ft}),n.d(H,"TryCatch",function(){return Nt}),n.d(H,"LogManager",function(){return zt}),n.d(H,"GlobalHandlers",function(){return Ut}),n.d(H,"FunctionToString",function(){return qt});var V=n(5),G=n.n(V),X=(n(23),n(0)),K=n(1),Y=n.n(K),Q=n(4),$=n.n(Q),J=n(6),Z=n.n(J),tt=n(7),et=n.n(tt),nt=n(15),rt=n.n(nt),ot=n(13),it=n.n(ot),at=n(16),ut=n.n(at),st=n(12),ct=n(2),lt=n(3),ft=n(9),pt=n(11),ht=function(t,e,n){return e?n?v(e,t):p(v(e,t)):n?d(t):p(d(t))},dt=n(10),vt=Object(dt.getGlobalObject)(),gt={wrap:function(){return function(){}},report:!1,collectWindowErrors:!1,computeStackTrace:!1,remoteFetching:!1,linesOfContext:!1,extendToAsynchronousCallbacks:!1},yt=[].slice,mt="?",_t=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;gt.wrap=function(t){return function(){try{return t.apply(this,arguments)}catch(t){throw gt.report(t),t}}},gt.report=function(){function t(t,e,n){var r=null;if(!e||gt.collectWindowErrors){for(var o in c)if(m(c,o))try{c[o](t,e,n)}catch(t){r=t}if(r)throw r}}function e(e,n,o,a,u){var s=null;if(u=Object(ct.isErrorEvent)(u)?u.error:u,e=Object(ct.isErrorEvent)(e)?e.message:e,f)gt.computeStackTrace.augmentStackTraceWithInitialElement(f,n,o,e),r();else if(u&&Object(ct.isError)(u))(s=gt.computeStackTrace(u)).mechanism="onerror",t(s,!0,u);else{var c,l={url:n,line:o,column:a},p=e;if("[object String]"==={}.toString.call(e)){var h=e.match(_t);h&&(c=h[1],p=h[2])}l.func=gt.computeStackTrace.guessFunctionName(l.url,l.line),l.context=gt.computeStackTrace.gatherContext(l.url,l.line),t(s={name:c,message:p,mode:"onerror",mechanism:"onerror",stack:[y({},l,{url:l.url||_()})]},!0,null)}return!!i&&i.apply(this,arguments)}function n(e){var n=e&&(e.detail?e.detail.reason:e.reason)||e,r=gt.computeStackTrace(n);r.mechanism="onunhandledrejection",t(r,!0,n)}function r(){var e=f,n=l;f=null,l=null,t(e,!1,n)}function o(t){if(f){if(l===t)return;r()}var e=gt.computeStackTrace(t);throw f=e,l=t,setTimeout(function(){l===t&&r()},e.incomplete?2e3:0),t}var i,a,u,s,c=[],l=null,f=null;return o.subscribe=function(t){c.push(t)},o.unsubscribe=function(t){for(var e=c.length-1;e>=0;--e)c[e]===t&&c.splice(e,1);0===c.length&&(a&&(vt.onerror=i,a=!1),s&&(vt.onerror=u,s=!1))},o.installGlobalHandler=function(){!0!==a&&(i=vt.onerror,vt.onerror=e,a=!0)},o.installGlobalUnhandledRejectionHandler=function(){!0!==s&&(u=vt.onunhandledrejection,vt.onunhandledrejection=n,s=!0)},o.traceKitWindowOnUnhandledRejection=n,o}(),gt.computeStackTrace=function(){function t(t){if("string"!=typeof t)return[];if(!m(h,t)){var e="",n="";try{n=vt.document.domain}catch(t){}var r=/(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t);r&&r[2]===n&&(e=function(t){if(!gt.remoteFetching)return"";try{var e=function(){try{return new vt.XMLHttpRequest}catch(t){return new vt.ActiveXObject("Microsoft.XMLHTTP")}}();return e.open("GET",t,!1),e.send(""),e.responseText}catch(t){return""}}(t)),h[t]=e?e.split("\n"):[]}return h[t]}function e(e,n){var r,o=/function ([^(]*)\(([^)]*)\)/,i=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,a="",u=t(e);if(!u.length)return mt;for(var s=0;s<10;++s)if(a=u[n-s]+a,!Object(ct.isUndefined)(a)){if(r=i.exec(a))return r[1];if(r=o.exec(a))return r[1]}return mt}function n(e,n){var r=t(e);if(!r.length)return null;var o=[],i=Math.floor(gt.linesOfContext/2),a=i+gt.linesOfContext%2,u=Math.max(0,n-i-1),s=Math.min(r.length,n+a-1);n-=1;for(var c=u;c<s;++c)Object(ct.isUndefined)(r[c])||o.push(r[c]);return o.length>0?o:null}function r(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function o(t){return r(t).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function i(e,n){for(var r,o,i=0,a=n.length;i<a;++i)if((r=t(n[i])).length&&(r=r.join("\n"),o=e.exec(r)))return{url:n[i],line:r.substring(0,o.index).split("\n").length,column:o.index-r.lastIndexOf("\n",o.index)-1};return null}function a(e,n,o){var i,a=t(n),u=new RegExp("\\b"+r(e)+"\\b");return o-=1,a&&a.length>o&&(i=u.exec(a[o]))?i.index:null}function u(t){if(!Object(ct.isUndefined)(vt&&vt.document)){for(var e,n,a,u,s=[_()],c=vt.document.getElementsByTagName("script"),l=""+t,f=0;f<c.length;++f){var p=c[f];p.src&&s.push(p.src)}if(a=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)){var h=a[1]?"\\s+"+a[1]:"",d=a[2].split(",").join("\\s*,\\s*");e=r(a[3]).replace(/;$/,";?"),n=new RegExp("function"+h+"\\s*\\(\\s*"+d+"\\s*\\)\\s*{\\s*"+e+"\\s*}")}else n=new RegExp(r(l).replace(/\s+/g,"\\s+"));if(u=i(n,s))return u;if(a=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)){var v=a[1];if(e=o(a[2]),u=i(n=new RegExp("on"+v+"=[\\'\"]\\s*"+e+"\\s*[\\'\"]","i"),s[0]))return u;if(u=i(n=new RegExp(e),s))return u}return null}}function s(t){if(!t.stack)return null;for(var r,o,i,u=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,s=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,c=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,l=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,f=/\((\S*)(?::(\d+))(?::(\d+))\)/,p=t.stack.split("\n"),h=[],d=/^(.*) is undefined$/.exec(t.message),v=0,g=p.length;v<g;++v){if(o=u.exec(p[v])){var y=o[2]&&0===o[2].indexOf("native");o[2]&&0===o[2].indexOf("eval")&&(r=f.exec(o[2]))&&(o[2]=r[1]),i={url:y?null:o[2],func:o[1]||mt,args:y?[o[2]]:[],line:o[3]?+o[3]:null,column:o[4]?+o[4]:null}}else if(o=c.exec(p[v]))i={url:o[2],func:o[1]||mt,args:[],line:+o[3],column:o[4]?+o[4]:null};else{if(!(o=s.exec(p[v])))continue;o[3]&&o[3].indexOf(" > eval")>-1&&(r=l.exec(o[3]))?o[3]=r[1]:0!==v||o[5]||Object(ct.isUndefined)(t.columnNumber)||(h[0].column=t.columnNumber+1),i={url:o[3],func:o[1]||mt,args:o[2]?o[2].split(","):[],line:o[4]?+o[4]:null,column:o[5]?+o[5]:null}}if(!i.func&&i.line&&(i.func=e(i.url,i.line)),gt.remoteFetching&&i.url&&"blob:"===i.url.substr(0,5)){var m=new XMLHttpRequest;if(m.open("GET",i.url,!1),m.send(""),200===m.status){var _=m.responseText||"",x=(_=_.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);if(x){var b=x[1];"~"===b.charAt(0)&&(b=("undefined"==typeof document||null==document.location?"":document.location.origin?document.location.origin:document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:""))+b.slice(1)),i.url=b.slice(0,-4)}}}i.context=i.line?n(i.url,i.line):null,h.push(i)}return h.length?(h[0]&&h[0].line&&!h[0].column&&d&&(h[0].column=a(d[1],h[0].url,h[0].line)),{mode:"stack",name:t.name,message:t.message,stack:h}):null}function c(t,r,o,i){var u={url:r,line:o};if(u.url&&u.line){t.incomplete=!1,u.func||(u.func=e(u.url,u.line)),u.context||(u.context=n(u.url,u.line));var s=/ '([^']+)' /.exec(i);if(s&&(u.column=a(s[1],u.url,u.line)),t.stack.length>0&&t.stack[0].url===u.url){if(t.stack[0].line===u.line)return!1;if(!t.stack[0].line&&t.stack[0].func===u.func)return t.stack[0].line=u.line,t.stack[0].context=u.context,!1}return t.stack.unshift(u),t.partial=!0,!0}return t.incomplete=!0,!1}function l(t,n){for(var r,o,i,s=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,p=[],h={},d=!1,v=l.caller;v&&!d;v=v.caller)if(v!==f&&v!==gt.report){if(o={url:null,func:mt,args:[],line:null,column:null},v.name?o.func=v.name:(r=s.exec(v.toString()))&&(o.func=r[1]),void 0===o.func)try{o.func=r.input.substring(0,r.input.indexOf("{"))}catch(t){}if(i=u(v)){o.url=i.url,o.line=i.line,o.func===mt&&(o.func=e(o.url,o.line));var g=/ '([^']+)' /.exec(t.message||t.description);g&&(o.column=a(g[1],i.url,i.line))}h[""+v]?d=!0:h[""+v]=!0,p.push(o)}n&&p.splice(0,n);var y={mode:"callers",name:t.name,message:t.message,stack:p};return c(y,t.sourceURL||t.fileName,t.line||t.lineNumber,t.message||t.description),y}function f(r,a){var u=null;a=null==a?0:+a;try{if(u=function(t){var r=t.stacktrace;if(r){for(var o,i=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,a=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,u=r.split("\n"),s=[],c=0;c<u.length;c+=2){var l=null;if((o=i.exec(u[c]))?l={url:o[2],line:+o[1],column:null,func:o[3],args:[]}:(o=a.exec(u[c]))&&(l={url:o[6],line:+o[1],column:+o[2],func:o[3]||o[4],args:o[5]?o[5].split(","):[]}),l){if(!l.func&&l.line&&(l.func=e(l.url,l.line)),l.line)try{l.context=n(l.url,l.line)}catch(t){}l.context||(l.context=[u[c+1]]),s.push(l)}}return s.length?{mode:"stacktrace",name:t.name,message:t.message,stack:s}:null}}(r))return u}catch(r){if(p)throw r}try{if(u=s(r))return u}catch(r){if(p)throw r}try{if(u=function(r){var a=r.message.split("\n");if(a.length<4)return null;var u,s=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,c=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,l=/^\s*Line (\d+) of function script\s*$/i,f=[],p=vt&&vt.document&&vt.document.getElementsByTagName("script"),h=[];for(var d in p)m(p,d)&&!p[d].src&&h.push(p[d]);for(var v=2;v<a.length;v+=2){var g=null;if(u=s.exec(a[v]))g={url:u[2],func:u[3],args:[],line:+u[1],column:null};else if(u=c.exec(a[v])){g={url:u[3],func:u[4],args:[],line:+u[1],column:null};var y=+u[1],x=h[u[2]-1];if(x){var b=t(g.url);if(b){var w=(b=b.join("\n")).indexOf(x.innerText);w>=0&&(g.line=y+b.substring(0,w).split("\n").length)}}}else if(u=l.exec(a[v])){var S=_().replace(/#.*$/,""),O=i(new RegExp(o(a[v+1])),[S]);g={url:S,func:"",args:[],line:O?O.line:u[1],column:null}}if(g){g.func||(g.func=e(g.url,g.line));var A=n(g.url,g.line),k=A?A[Math.floor(A.length/2)]:null;A&&k.replace(/^\s*/,"")===a[v+1].replace(/^\s*/,"")?g.context=A:g.context=[a[v+1]],f.push(g)}}return f.length?{mode:"multiline",name:r.name,message:a[0],stack:f}:null}(r))return u}catch(r){if(p)throw r}try{if(u=l(r,a+1))return u}catch(r){if(p)throw r}return{name:r.name,message:r.message,mode:"failed"}}var p=!1,h={};return f.augmentStackTraceWithInitialElement=c,f.computeStackTraceFromStackProp=s,f.guessFunctionName=e,f.gatherContext=n,f.ofCaller=function(t){t=1+(null==t?0:+t);try{throw new Error}catch(e){return f(e,t+1)}},f.getSource=t,f}(),gt.extendToAsynchronousCallbacks=function(){var t=function(t){var e=vt[t];vt[t]=function(){var t=yt.call(arguments),n=t[0];return"function"==typeof n&&(t[0]=gt.wrap(n)),e.apply?e.apply(this,t):e(t[0],t[1])}};t("setTimeout"),t("setInterval")},gt.remoteFetching=!1,gt.collectWindowErrors=!0,gt.linesOfContext=11,gt.report;var xt=gt.report.subscribe,bt=(gt.report.installGlobalHandler,gt.report.installGlobalUnhandledRejectionHandler,gt.computeStackTrace),wt=50,St="undefined"!=typeof wx?wx:{},Ot=null,At=["brand","model","language","version","system","platform","SDKVersion"],kt=["onAppShow","onAppHide"],Et=function(){function t(e){Z()(this,t),this.options=e,this.url=new X.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth(),this.supportStorage=2===["setStorage","getStorageSync"].filter(function(t){return!!St[t]}).length,this.tasks=this.loadTasks(),this.task=null;var n=parseInt(e.retry,10);isNaN(n)&&(n=2),this.retry=n+1}var e,n,r;return et()(t,[{key:"addTask",value:function(t){var e={event:t,ctime:Date.now()};this.tasks.push(e),this.manageTask()}},{key:"saveTasks",value:function(){this.supportStorage&&S().setStorage({key:"transport_tasks",data:this.tasks})}},{key:"loadTasks",value:function(){return this.supportStorage&&S().getStorageSync("transport_tasks")||[]}},{key:"manageTask",value:(r=$()(Y.a.mark(function t(){var e,n,r=this;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.task&&0!==this.tasks.length){t.next=3;break}return this.saveTasks(),t.abrupt("return");case 3:this.task=this.tasks.shift(),e=Y.a.mark(function t(e){return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.processTask(r.task);case 3:return t.abrupt("return","break");case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,new Promise(function(t){setTimeout(t,2e3*Math.pow(2,e))});case 10:case"end":return t.stop()}},t,null,[[0,6]])}),n=0;case 6:if(!(n<this.retry)){t.next=14;break}return t.delegateYield(e(n),"t0",8);case 8:if("break"!==t.t0){t.next=11;break}return t.abrupt("break",14);case 11:n++,t.next=6;break;case 14:this.task.event._resolve&&"function"==typeof this.task.event._resolve&&this.task.event._resolve({}),this.task=null,this.saveTasks(),this.manageTask();case 18:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"processTask",value:(n=$()(Y.a.mark(function t(){return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw new X.SentryError("Transport Class has to implement `processTask` method");case 1:case"end":return t.stop()}},t)})),function(){return n.apply(this,arguments)})},{key:"captureEvent",value:(e=$()(Y.a.mark(function t(){return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:throw new X.SentryError("Transport Class has to implement `captureEvent` method");case 1:case"end":return t.stop()}},t)})),function(){return e.apply(this,arguments)})}]),t}(),Ct=function(t){function e(t){return Z()(this,e),rt()(this,it()(e).call(this,t))}var n,r;return ut()(e,t),et()(e,[{key:"processTask",value:(r=$()(Y.a.mark(function t(e){var n=this;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,r){S().request({url:n.url,method:"POST",data:e.event,success:function(e){200===e.statusCode?t({status:st.Status.fromHttpCode(e.statusCode)}):r(new Error("request fail with status code: ".concat(e.statusCode)))},fail:function(t){r(t)}})}));case 1:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},{key:"captureEvent",value:(n=$()(Y.a.mark(function t(e){var n=this;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t){e._resolve=t,n.addTask(e)}));case 1:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})}]),e}(Et),Tt=function(t){function e(){return Z()(this,e),rt()(this,it()(e).apply(this,arguments))}var n,r,o;return ut()(e,t),et()(e,[{key:"install",value:function(){if(!this.options.dsn)throw new X.SentryError("Invariant exception: install() must not be called when disabled");return Error.stackTraceLimit=50,!0}},{key:"eventFromException",value:(o=$()(Y.a.mark(function t(e,n){var r,o;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!Object(ct.isErrorEvent)(e)||!e.error){t.next=6;break}e=e.error,r=b(bt(e)),t.next=19;break;case 6:if(!Object(ct.isError)(e)){t.next=10;break}r=b(bt(e)),t.next=19;break;case 10:if(!(Object(ct.isPlainObject)(e)&&n&&n.syntheticException)){t.next=15;break}r=x(e,n.syntheticException),t.next=19;break;case 15:return o=e,t.next=18,this.eventFromMessage(o,void 0,n);case 18:r=t.sent;case 19:return r=E({},r,{event_id:n&&n.event_id,exception:E({},r.exception,{mechanism:{handled:!0,type:"generic"}})}),t.abrupt("return",r);case 21:case"end":return t.stop()}},t,this)})),function(t,e){return o.apply(this,arguments)})},{key:"eventFromMessage",value:(r=$()(Y.a.mark(function t(e,n,r){var o,i,a;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={event_id:r&&r.event_id,level:n,message:e},this.options.attachStacktrace&&r&&r.syntheticException&&(i=bt(r.syntheticException),a=w(i.stack),o.stacktrace={frames:a}),t.abrupt("return",o);case 3:case"end":return t.stop()}},t,this)})),function(t,e,n){return r.apply(this,arguments)})},{key:"sendEvent",value:(n=$()(Y.a.mark(function t(e){var n;return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.options.dsn){t.next=3;break}return lt.logger.warn("Event has been skipped because no Dsn is configured."),t.abrupt("return",{status:st.Status.Skipped,reason:"Event has been skipped because no Dsn is configured."});case 3:if(this.transport||(n=this.options.transportOptions?this.options.transportOptions:{dsn:this.options.dsn},this.options.transport?this.transport=new this.options.transport({dsn:this.options.dsn}):O()&&(this.transport=new Ct(n))),this.transport){t.next=7;break}return lt.logger.warn("Event has been skipped because no transport is configured."),t.abrupt("return",{status:st.Status.Skipped,reason:"Event has been skipped because no transport is configured."});case 7:return t.abrupt("return",this.transport.captureEvent(e));case 8:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)})}]),e}(X.BaseBackend),Pt=n(21),jt=n.n(Pt),Mt=n(22),Dt=n.n(Mt),It=function(t){function e(t){return Z()(this,e),rt()(this,it()(e).call(this,Tt,t))}var n;return ut()(e,t),et()(e,[{key:"prepareEvent",value:(n=$()(Y.a.mark(function t(n,r,o){return Y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.platform=n.platform||"javascript",n.sdk=T({},n.sdk,{name:"sentry.mina",packages:[].concat(jt()(n.sdk&&n.sdk.packages||[]),[{name:"npm:sentry-mina",version:"0.0.7"}]),version:"0.0.7"}),r.tags=r.tags||{},r.tags.page=A(),t.abrupt("return",Dt()(it()(e.prototype),"prepareEvent",this).call(this,n,r,o));case 5:case"end":return t.stop()}},t,this)})),function(t,e,r){return n.apply(this,arguments)})},{key:"showReportDialog",value:function(){}}]),e}(X.BaseClient),Lt=Object(dt.getGlobalObject)(),Ft=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Z()(this,t),this.name=t.id,this.ctx=S(),this.ctx.getRealtimeLogManager&&(this.realtimeLogManager=this.ctx.getRealtimeLogManager()),this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({console:!0,request:!0,navigation:!0,api:!0,lifecycle:!0,unhandleError:!0,realtimeLog:!0},e)}return et()(t,[{key:"instrumentConsole",value:function(){if("console"in Lt){var e=["info","warn","error","log","debug"],n=this.options.console?e:[];Object(ct.isArray)(this.options.console)&&(n=this.options.console);var r=this.options.realtimeLog?["warn","error","info"]:[];Object(ct.isArray)(this.options.realtimeLog)&&(r=this.options.realtimeLog);var o=this.options.unhandleError,i=this.realtimeLogManager;e.forEach(function(e){e in Lt.console&&P(Lt.console,e,function(a){return function(){for(var u=arguments.length,s=new Array(u),c=0;c<u;c++)s[c]=arguments[c];if(n.indexOf(e)>-1){var l={category:"console",data:{extra:{arguments:Object(ft.serializeObject)(s,2)},logger:e},level:st.Severity.fromString(e),message:Object(pt.safeJoin)(s," ")};"assert"===e&&!1===s[0]&&(l.message="Assertion failed: ".concat(Object(pt.safeJoin)(s.slice(1)," ")||"console.assert"),l.data.extra.arguments=Object(ft.serializeObject)(s.slice(1),2)),t.addBreadcrumb(l,{input:s,level:e})}if(r.indexOf(e)>-1&&i){var f=e;"log"===f&&(f="info"),i[f]&&i[f].apply(i,s)}if("warn"!==e&&"error"!==e||!o||function(t){return!(!t||"string"!=typeof t||!/^(Unhandled|Uncaught)/i.test(t))}(s[0])&&Object(ct.isError)(s[1])&&Object(X.captureException)(s[1]),a)try{Function.prototype.apply.call(a,Lt.console,s)}catch(t){a.apply(Lt.console,s)}}})})}}},{key:"instrumentMinaApi",value:function(){var e=this,n=this,r=Object.keys(St).filter(function(t){return"function"==typeof St[t]});Object(ct.isArray)(this.options.api)?r=this.options.api:this.options.api||(r=[]),r.forEach(function(r){e.ctx[r]&&"function"==typeof e.ctx[r]&&P(e.ctx,r,function(e){return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t.addBreadcrumb({category:"mina-api",data:{args:i,name:r}}),e.apply(n.ctx,i)}})})}},{key:"instrumentRequest",value:function(){if(O()){var e=this;P(e.ctx,"request",function(n){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.method?r.method.toUpperCase():"GET",i=r.url,a=Object(X.getCurrentHub)().getClient(),u=a&&a.getDsn();if(u){var s=new X.API(u).getStoreEndpoint();if(s&&Object(pt.includes)(i,s))return"POST"===o&&r.data&&function(t){try{var e=Object(ft.deserialize)(t);Ft.addBreadcrumb({category:"sentry",event_id:e.event_id,level:e.level||st.Severity.fromString("error"),message:Object(dt.getEventDescription)(e)},{event:e})}catch(t){lt.logger.error("Error while adding sentry type breadcrumb")}}(r.data),n.call(e.ctx,r)}var c={method:o,url:i,header:r.header,dataType:r.dataType},l=r.success,f=r.fail;return r.success=function(e){l&&l(e),c.status_code=e.statusCode,t.addBreadcrumb({category:"request",data:c,type:"http"})},r.fail=function(e){f&&f(e),t.addBreadcrumb({category:"request",data:c,level:st.Severity.Error,type:"http"})},n.call(e.ctx,r)}})}}},{key:"instrumentNavigation",value:function(){function e(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url;return!n&&e.delta&&(n=function(t){try{if("function"==typeof getCurrentPages){var e=getCurrentPages();return t||(t=1),e[e.length-1-t].route}return lt.logger.warn("getCurrentPages is not function in global"),"unknow"}catch(t){return"unknow"}}(e.delta)),n&&i(n),t.call(this,e)}}var n,r=this,o=(n=["navigateBack","navigateTo","redirectTo","reLaunch","switchTab"].filter(function(t){return!!St[t]})).length>0?n:null;if(o){var i=function(e){var n=A();t.addBreadcrumb({category:"navigation",data:{from:n,to:e}})};o.forEach(function(t){P(r.ctx,t,e)})}}},{key:"instrumentLifeCycle",value:function(){var e=this.ctx;kt.forEach(function(n){e[n]&&e[n](function(e){t.addBreadcrumb({category:"app-life-cycle",data:{name:n,args:e}})})})}},{key:"setupOnce",value:function(){(this.options.console||this.options.realtimeLog&&this.realtimeLogManager)&&this.instrumentConsole(),this.options.navigation&&this.instrumentNavigation(),this.options.request&&this.instrumentRequest(),this.options.api&&this.instrumentMinaApi(),this.options.lifecycle&&this.instrumentLifeCycle()}}],[{key:"addBreadcrumb",value:function(e,n){Object(X.getCurrentHub)().getIntegration(t)&&Object(X.getCurrentHub)().addBreadcrumb(e,n)}}]),t}();Ft.id="Breadcrumbs";var Rt=0,Nt=function(){function t(){Z()(this,t),this.ignoreOnError=0,this.name="TryCatch"}return et()(t,[{key:"wrapTimeFunction",value:function(t){var e=this;return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=r[0];return r[0]=I(i,{mechanism:{data:{function:t.name||"<anonymous>"},handled:!0,type:"instrument"}}),t.apply(e,r)}}},{key:"setupOnce",value:function(){setTimeout=L(setTimeout,this.wrapTimeFunction.bind(this)),setInterval=L(setInterval,this.wrapTimeFunction.bind(this))}}]),t}();Nt.id="TryCatch";var zt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Z()(this,t),this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({level:0},e),this.name="LogManager",this.logManager=null}return et()(t,[{key:"instrumentLogManager",value:function(){if(!this.logManager){var t=this.logManager=S().getLogManager(this.options.level);Object(X.addGlobalEventProcessor)(function(e,n){return t.log("sentry-event",{event:e,hint:n}),e})}}},{key:"setupOnce",value:function(){St.getLogManager&&this.instrumentLogManager()}}]),t}();zt.id="LogManager";var Bt,Ut=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Z()(this,t),this.name="GlobalHandlers",this.ctx=S(),this.options=N({onerror:!0,onpagenotfound:!0},e)}var e;return et()(t,[{key:"setupOnce",value:(e=$()(Y.a.mark(function e(){return Y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:xt(function(e,n,r){if(!(Rt>0)){var o=Object(X.getCurrentHub)().getIntegration(t);o&&Object(X.getCurrentHub)().captureEvent(o.eventFromGlobalHandler(e),{originalException:r,data:{stack:e}})}}),this.options.onerror&&this.ctx.onError&&(lt.logger.log("Global Error Handler attached: onError"),this.installGlobalErrorHandler()),this.options.onpagenotfound&&this.ctx.onPageNotFound&&(lt.logger.log("Global Handler attached: onPageNotFound"),this.installGlobalPageNotFoundHandler());case 3:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"installGlobalErrorHandler",value:function(){this.ctx.onError(function(t){Object(X.withScope)(function(e){var n,r=function(t){try{return Object(ct.isError)(t)&&(t=t.message),t.split("\n").slice(0,2)}catch(t){return null}}(t);if(r&&e.setFingerprint(r),Object(ct.isError)(t))n=t;else if(r){var o=r[0]||"UnknowAppError",i=r[1]||o;(n=new Error(i)).name=o,n.stack=t}else(n=new Error("UnknowAppError")).stack=t;Object(X.captureException)(n)})})}},{key:"installGlobalPageNotFoundHandler",value:function(){this.ctx.onPageNotFound(function(t){Object(X.captureEvent)({message:"page not found",extra:t})})}},{key:"eventFromGlobalHandler",value:function(t){var e=b(t);return N({},e,{exception:N({},e.exception,{mechanism:{data:{mode:t.mode},handled:!1,type:t.mechanism}})})}}]),t}();Ut.id="GlobalHandlers";var qt=function(){function t(){Z()(this,t)}return et()(t,[{key:"setupOnce",value:function(){Bt=Function.prototype.toString;try{Function.prototype.toString=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.__sentry__?this.__sentry_original__:this;return Bt.apply(n,t)}}catch(t){console.warn("sentry-mina: FunctionToString integration not support")}}}]),t}();qt.id="FunctionToString";var Wt=[new X.Integrations.Dedupe,new X.Integrations.InboundFilters,new qt,new Ut,new Ft,new zt];n.d(e,"Integrations",function(){return Ht}),n.d(e,"addGlobalEventProcessor",function(){return X.addGlobalEventProcessor}),n.d(e,"addBreadcrumb",function(){return X.addBreadcrumb}),n.d(e,"captureException",function(){return X.captureException}),n.d(e,"captureEvent",function(){return X.captureEvent}),n.d(e,"captureMessage",function(){return X.captureMessage}),n.d(e,"configureScope",function(){return X.configureScope}),n.d(e,"withScope",function(){return X.withScope}),n.d(e,"getHubFromCarrier",function(){return X.getHubFromCarrier}),n.d(e,"getCurrentHub",function(){return X.getCurrentHub}),n.d(e,"Hub",function(){return X.Hub}),n.d(e,"Scope",function(){return X.Scope}),n.d(e,"MinaBackend",function(){return Tt}),n.d(e,"MinaClient",function(){return It}),n.d(e,"defaultIntegrations",function(){return Wt}),n.d(e,"init",function(){return z}),n.d(e,"lastEventId",function(){return U}),n.d(e,"showReportDialog",function(){return B}),n.d(e,"SDK_NAME",function(){return"sentry.mina"}),n.d(e,"SDK_VERSION",function(){return"0.0.7"}),n.d(e,"Transports",function(){return W}),n.d(e,"SYSTEMINFO_TAGS",function(){return At});var Ht=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach(function(e){G()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},X.Integrations,{},H)}])})},"7Kfv":function(t,e,n){function r(t,e){void 0===e.isDraw&&(e.isDraw=!0),void 0===e.clearRegion&&(e.clearRegion=!0),!0===e.isDraw&&(t=wx.createCanvasContext(t)),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("08La");(r.prototype=new i).initialize=function(){var t=this,e=this.options,n=e.data.items,r=n.length,i=0,a=[];r>e.maxCount&&(n=n.slice(r-e.maxCount)),o.each(n,function(n,r,u){var s="";s="mins"==e.type?t.getMinsVolColor(n,r,u):t.getKlineVolColor(n),a.push({value:n.volume,color:s}),i=o.isMore(n.volume,i)?n.volume:i}),e.maxVolume=i,this.barOptions={region:e.region,maxCount:e.maxCount,data:{items:a},middleValue:e.middleValue}},r.prototype.getKlineVolColor=function(t){var e=this.options,n=t.open,r=t.close,i=t.zsj,a=e.bar;return o.isMore(r,n)?a.riseColor:o.isLess(r,n)?a.dropColor:o.isMore(r,i)?a.riseColor:o.isLess(r,i)?a.dropColor:a.riseColor},r.prototype.getMinsVolColor=function(t,e,n){var r=this.options.bar;return e<=0||o.isMore(t.price,n[e-1].price)?r.riseColor:r.dropColor},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e,n=t.yAxis,r=o.formatBigNumber(t.maxVolume);void 0===n.clearRegion&&(n.clearRegion=!0),e=[{text:r.v,color:n.color},{text:r.u+t.unit,color:n.color}],n.data={items:e},new u(this.ctx,n).paint()}},r.prototype.paint=function(t,e,n){var r=this.ctx,o=this.options;this.options.region,this.initialize(),this.paintGrid(),new s(r,this.barOptions).paint(),this.paintYAxis(),!0===o.isDraw&&r.draw(!0)},t.exports=r},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"7UMu":function(t,e,n){var r=n("R9M2");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"809r":function(t,e,n){var r=function(t){return t&&t.__esModule?t:{default:t}}(n("33nk"));t.exports=function(t,e){var n=t.statusCode,o=t.data;return 200==n?0==o.code?(o.data.response&&delete o.data.response,e(o.data)):r.default.reject(o.msg):r.default.reject(t.errMsg)}},"82Mu":function(t,e,n){var r=n("7KvD"),o=n("L42u").set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,u=r.Promise,s="process"==n("R9M2")(a);t.exports=function(){var t,e,n,c=function(){var r,o;for(s&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(c)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var l=u.resolve(void 0);n=function(){l.then(c)}}else n=function(){o.call(r,c)};else{var f=!0,p=document.createTextNode("");new i(c).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},"880/":function(t,e,n){t.exports=n("hJx8")},"8MXu":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA3lBMVEXplQjqmgvokwbsoRDqlwmmVxD////rnQ3rnw7uqhbwrxrvrBjtphPtpBLytyDxtB7okQTuqBXwshzyuiL2xyv0wSbzvCPzviT1xSn4zjD50TL1wyj3zC751DT65b73yi30vyX61zb72Tj658D++vD87tHwt031zH/yu1DzvlP426H1z4H0yX398+D73DrxtCj20oP0x2TuqyP54rHvsTjvryX64KT1y3D1yFryvEL42IjyujDtqCz99uH768P66MH65bP42JP30nf1zXTxtkH31ZHzxG3spB765rT425WSto/PAAAEXElEQVRYw63UCVMTQRQE4Cj6VJIQg3ggGtDsAskSc3KEG8Hr//8he+btpDN5SdZQNlRRUMVX3TNTKT3/zyk9/6b56vMF+ezyEdne3v706dPu7tbW1ocPOztv3+69f//u3Zs3GxsbtVptc3N9fb1cLr9C6vVKpVqtrq2tAfQWuWXennoIPILeI2g4etvBm18QgUcQHkFY5Ew/69mCE1ApcqxHj4MJ0uMJEoRDLvb0AAsLEgRCLecQcHM9UzACX3qQHOtZzwy2BRUkxnY6d5FnT7ASPAcqRC6uB29noceCBqQGjh77mQNkwSnPg6S8Ro4euMgzgyNwSjPcQo9g7L0ASIvcdL2l3jwQCjFysx4vhJ4tSHDXaOB4HeAizz4ZgnACxrGLvU16drAHt5RiOdYznjlAFiRotIhbzSMIaAlnvXgwvScAoRCDFrh/9iy446igsR04M9d6cUEH0lIttDP17IPhYMR5HgRCLNLAmX6hoPUIqhUwy9Er237RYAX3aHlNOa5FlKOHnGat4HGwglBoUXO5ODdz74Z9v7cp2Ww/glCIOe3s6vwC7cYiZ+Ci40vkHp4H6cVgZGm5E0kuXLdrufYcvXtJjuFZEF4AA8SpZyLYinxHxfj4buSH3kdTDsxggl5iruUqP7srSVkPacm87NN7BnAjivY6BeeCrj1wwaunK4J+5ziR315zY29FxvR6kgz0/bnJPD96E7DGpJJ0VUO6iXS64Lw3SiQL7xlg7BGsRdk8EekHDmv7Iulx/mlwI53J50EDoPVi0M88F/kz0Vx6KtaRVqelnoLWUxAKgwu5neYwti3SGYMbtJDDkFTa+8yl52ZBINibdr3Wu7vwHAJRsnqlJYtzFMASwPVJurfqQcJlJMphLFZLv/LQDGmY/AxeDPadp0tRtZdzSD9p4zbC8fG5ROdnQDD3J2UN5t1MOLyUEbnFHjgPlmcC57gjyYgcEnP2fi1IDbnDYD91SM57B2LToEfQSQwGD52Hn21yC0F6CirC1DG4c+y3tkVOyXmwMXN8R9KgZ8G6y1BkXNE0RQ5zjiA9gvAI1p3EZCJZOLpBKsnDGm8DIDmCziNIys88xcHxJh4SSQfBm4D0nilYisCK+8oDD4JifusP/J5rCsaeA5UjWJnKoC0o2PRJJKStHg7PgeSKwerAK0wDSSGGp3wkNo3SDFidTpYOs+zgEOFV4NZ/Os2DSSNOJwafzoABoYb86qQj9dydci3iJ09xTx1IyWqay1+59+RyfxR7JfyFnoIEYo0fArnG0EPIEbTaJLlGjxo9AxqLGNsxczmCRrLcv9ULYACsRY0hVwASe1msWc6CYEgVcMaLQQrGWomzoHkhhZwFXxNkrVU0cgQtYLgCj9xrA1qseCy9pxFotbicjeUIFpcr7ocQNNbjOIKEVtO4lyD+yVBGK74Ngiti1OxegtYq5qxH0FKr1yNYeoYvfBdbpaUaQaawms3jQHYz2uPAZZoF/3P+AiuFIRXz7O0qAAAAAElFTkSuQmCC"},"8WQo":function(t,e,n){function r(t,e){this.ctx=t,this.options=e}r.prototype={initialize:function(){},getX:function(t){},getY:function(t){},start:function(){this.ctx.save()},paintItem:function(t,e,n){},end:function(){this.ctx.restore()},paint:function(){this.ctx;var t=this.options.data;this.initialize(),this.start();for(var e=t&&t.items&&t.items.length,n=0;n<e;n++){var r=this.getX(n),o=this.getY(n);this.paintItem(n,r,o)}this.end(e-1)}},t.exports=r},"8o3y":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("hGD6"),o=n.n(r),i=n("r24t"),a=n("ybqe")(o.a,i.a,function(t){n("GYQF")},"data-v-675320c3",null);e.default=a.exports},"937u":function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo");(r.prototype=new i).initialize=function(){var t=this.ctx,e=this.options,n=e.region;e.lineWidth||(e.lineWidth=.8),void 0===e.needBorder&&(e.needBorder=!0),void 0===e.horizontalLine&&(e.horizontalLine=0),void 0===e.verticalLine&&(e.verticalLine=0),!0===e.clearRegion&&t.clearRect(n.x,n.y,n.width,n.height)},r.prototype.start=function(){var t=this.ctx,e=this.options,n=e.region;t.save(),t.translate(n.x,n.y),t.beginPath(),t.setLineWidth(e.lineWidth),t.setStrokeStyle(e.color)},r.prototype.end=function(t){var e=this.ctx;this.options,e.stroke(),e.restore()},r.prototype.paintBorder=function(){var t=this.ctx,e=this.options,n=e.region;!1!==e.needBorder&&t.strokeRect(0,0,n.width,n.height)},r.prototype.paintHorizontalLine=function(){var t=this.ctx,e=this.options,n=e.region;if(!(e.horizontalLine<=0))for(var r=o.div(n.height,e.horizontalLine+1),i=0;i<e.horizontalLine;i++)t.moveTo(0,r*(i+1)),t.lineTo(n.width,r*(i+1))},r.prototype.paintVerticalLine=function(){var t=this.ctx,e=this.options,n=e.region,r=e.vGridXPos;if(r&&r.length)for(var i=0;i<r.length;i++){var a=r[i];t.moveTo(a,0),t.lineTo(a,n.height)}else if(!(e.verticalLine<=0)){var u=o.div(n.width,e.verticalLine+1);for(i=0;i<e.verticalLine;i++)t.moveTo(u*(i+1),0),t.lineTo(u*(i+1),n.height)}},r.prototype.paint=function(){this.ctx,this.options.data,this.initialize(),this.start(),this.paintBorder(),this.paintHorizontalLine(),this.paintVerticalLine(),this.end()},t.exports=r},"94VQ":function(t,e,n){var r=n("Yobk"),o=n("X8DO"),i=n("e6n0"),a={};n("hJx8")(a,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},"9JwV":function(t,e,n){function r(){try{var t="s"+o();return wx.setStorageSync(l.prefix+"ssid",t),t}catch(t){}}function o(t){for(var e=[0,1,2,3,4,5,6,7,8,9],n=10;1<n;n--){var r=Math.floor(10*Math.random()),o=e[r];e[r]=e[n-1],e[n-1]=o}for(n=r=0;5>n;n++)r=10*r+e[n];return(t||"")+(r+"")+ +new Date}function i(){try{var t=getCurrentPages(),e="/";return 0<t.length&&(e=t.pop().__route__),e}catch(t){console.log("get current page path error:"+t)}}function a(){var t={dm:"wechat.apps.xx",url:encodeURIComponent(i()+c(f.Data.pageQuery)),pvi:"",si:"",ty:0};return t.pvi=function(){var e=function(){try{return wx.getStorageSync(l.prefix+"auid")}catch(t){}}();return e||(e=function(){try{var t=o();return wx.setStorageSync(l.prefix+"auid",t),t}catch(t){}}(),t.ty=1),e}(),t.si=function(){var t=function(){try{return wx.getStorageSync(l.prefix+"ssid")}catch(t){}}();return t||(t=r()),t}(),t}function u(){var t=function(){var t=wx.getSystemInfoSync();return{adt:encodeURIComponent(t.model),scl:t.pixelRatio,scr:t.windowWidth+"x"+t.windowHeight,lg:t.language,fl:t.version,jv:encodeURIComponent(t.system),tz:encodeURIComponent(t.platform)}}();return function(t){wx.getNetworkType({success:function(e){t(e.networkType)}})}(function(t){try{wx.setStorageSync(l.prefix+"ntdata",t)}catch(t){}}),t.ct=wx.getStorageSync(l.prefix+"ntdata")||"4g",t}function s(){var t,e=f.Data.userInfo,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+e[t]);return e=n.join(";"),{r2:l.app_id,r4:"wx",ext:"v="+l.version+(null!==e&&""!==e?";ui="+encodeURIComponent(e):"")}}function c(t){if(!l.stat_param||!t)return"";t=function(t){if(1>l.ignore_params.length)return t;var e,n={};for(e in t)0<=l.ignore_params.indexOf(e)||(n[e]=t[e]);return n}(t);var e,n=[];for(e in t)n.push(e+"="+t[e]);return 0<n.length?"?"+n.join("&"):""}Object.defineProperty(e,"__esModule",{value:!0});var l={app_id:"",event_id:"",api_base:"https://pingtas.qq.com/pingd",prefix:"_mta_",version:"1.3.10",stat_share_app:!1,stat_pull_down_fresh:!1,stat_reach_bottom:!1,stat_param:!0},f={App:{init:function(t){"appID"in t&&(l.app_id=t.appID),"eventID"in t&&(l.event_id=t.eventID),"statShareApp"in t&&(l.stat_share_app=t.statShareApp),"statPullDownFresh"in t&&(l.stat_pull_down_fresh=t.statPullDownFresh),"statReachBottom"in t&&(l.stat_reach_bottom=t.statReachBottom),"ignoreParams"in t&&(l.ignore_params=t.ignoreParams),"statParam"in t&&(l.stat_param=t.statParam),r();try{"lauchOpts"in t&&(f.Data.lanchInfo=t.lauchOpts,f.Data.lanchInfo.landing=1)}catch(t){}"autoReport"in t&&t.autoReport&&function(){var t=Page;Page=function(e){var n=e.onLoad;e.onLoad=function(t){n&&n.call(this,t),f.Data.lastPageQuery=f.Data.pageQuery,f.Data.pageQuery=t,f.Data.lastPageUrl=f.Data.pageUrl,f.Data.pageUrl=i(),f.Data.show=!1,f.Page.init()},t(e)}}()}},Page:{init:function(){var t=getCurrentPages()[getCurrentPages().length-1];t.onShow&&function(){var e=t.onShow;t.onShow=function(){if(!0===f.Data.show){var t=f.Data.lastPageQuery;f.Data.lastPageQuery=f.Data.pageQuery,f.Data.pageQuery=t,f.Data.lastPageUrl=f.Data.pageUrl,f.Data.pageUrl=i()}f.Data.show=!0,f.Page.stat(),e.apply(this,arguments)}}(),l.stat_pull_down_fresh&&t.onPullDownRefresh&&function(){var e=t.onPullDownRefresh;t.onPullDownRefresh=function(){f.Event.stat(l.prefix+"pulldownfresh",{url:t.__route__}),e.apply(this,arguments)}}(),l.stat_reach_bottom&&t.onReachBottom&&function(){var e=t.onReachBottom;t.onReachBottom=function(){f.Event.stat(l.prefix+"reachbottom",{url:t.__route__}),e.apply(this,arguments)}}(),l.stat_share_app&&t.onShareAppMessage&&function(){var e=t.onShareAppMessage;t.onShareAppMessage=function(){return f.Event.stat(l.prefix+"shareapp",{url:t.__route__}),e.apply(this,arguments)}}()},multiStat:function(t,e){if(1==e)f.Page.stat(t);else{var n=getCurrentPages()[getCurrentPages().length-1];n.onShow&&function(){var e=n.onShow;n.onShow=function(){f.Page.stat(t),e.call(this,arguments)}}()}},stat:function(t){if(""!=l.app_id){var e=[],n=s();if(t&&(n.r2=t),t=[a(),n,u()],f.Data.lanchInfo){t.push({ht:f.Data.lanchInfo.scene}),f.Data.pageQuery&&f.Data.pageQuery._mta_ref_id&&t.push({rarg:f.Data.pageQuery._mta_ref_id});try{1==f.Data.lanchInfo.landing&&(n.ext+=";lp=1",f.Data.lanchInfo.landing=0)}catch(t){}}t.push({rdm:"/",rurl:0>=f.Data.lastPageUrl.length?f.Data.pageUrl+c(f.Data.lastPageQuery):encodeURIComponent(f.Data.lastPageUrl+c(f.Data.lastPageQuery))}),t.push({rand:+new Date}),n=0;for(var r=t.length;n<r;n++)for(var o in t[n])t[n].hasOwnProperty(o)&&e.push(o+"="+(void 0===t[n][o]?"":t[n][o]));wx.request({url:l.api_base+"?"+e.join("&")})}}},Event:{stat:function(t,e){if(""!=l.event_id){var n=[],r=a(),o=s();r.dm="wxapps.click",r.url=t,o.r2=l.event_id;var i=void 0===e?{}:e;try{o.r5=encodeURIComponent(JSON.stringify(i))}catch(i){o.r5=i.toString()}for(i=0,o=(r=[r,o,u(),{rand:+new Date}]).length;i<o;i++)for(var c in r[i])r[i].hasOwnProperty(c)&&n.push(c+"="+(void 0===r[i][c]?"":r[i][c]));wx.request({url:l.api_base+"?"+n.join("&")})}}},Data:{userInfo:null,lanchInfo:null,pageQuery:null,lastPageQuery:null,pageUrl:"",lastPageUrl:"",show:!1}},p={init:function(t){f.App.init(t)},pgv:function(t,e){void 0===e&&(e={}),t=t.toLowerCase(),e.mtime=+new Date,f.Event.stat(t,e)},stat:function(t,e){void 0===e&&(e={}),t=t.toLowerCase(),e.mtime=+new Date,f.Event.stat(t,e)},immediateStat:function(t,e){void 0===e&&(e={}),this.stat(t,e)}};e.default=p},"9Vme":function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("fZjL")),i=r(n("mvHQ")),a=r(n("Zrlr")),u=r(n("wxAW")),s=r(n("zxuL")),c=n("JR0G"),l=n("+7rG"),f={},p=function(){function t(e,n){(0,a.default)(this,t),this.name=e,this.dir=n,this._logHistory={}}return(0,u.default)(t,[{key:"getLogHistory",value:function(){return!0===(arguments.length>0&&void 0!==arguments[0]&&arguments[0])?(0,i.default)(f):f}},{key:"pageError",value:function(){return this._print("pageError",arguments),this}},{key:"debug",value:function(){return this._print("debug",arguments),this}},{key:"log",value:function(){return this._print("log",arguments),this}},{key:"info",value:function(){return this._print("info",arguments),this}},{key:"warn",value:function(){return this._print("warn",arguments),this}},{key:"error",value:function(){if(s.default.throwError)throw new Error(arguments);this._print("error",arguments)}},{key:"_print",value:function(t,e){if(this._canLog(t)){this.dir?f[this.dir]?f[this.dir][this.name]=this._logHistory:(f[this.dir]={},f[this.dir][this.name]=this._logHistory):f[this.name]=this._logHistory;var n=this,r={time:(0,l.getNewStr)(),name:this.name,args:e,level:t};c.expanders&&c.expanders.length>0&&(0,o.default)(c.expanders).forEach(function(t){c.expanders[t].call(n,r)})}}},{key:"_canLog",value:function(){return!(!s.default.level||!0!==s.default.level&&!eqOrIn(s.default.level,level))}}]),t}();e.default=p},"9bBU":function(t,e,n){n("mClu");var r=n("FeBl").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"9pEC":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("niax"),o=getApp();e.default={data:function(){return{stocksUp:!0}},props:{stocks:{type:Array}},methods:{togglestock:function(){this.stocksUp=!this.stocksUp},openStock:function(t){var e=t.currentTarget.dataset.index,n=this.stocks[e];o.openStock(n.c,n.m),r.Request.reportData("news.mini.detail.relatedStock"),r.Request.reportMTAData({eventName:"news.mini.detail.relatedStock"})}}}},A1SD:function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("P90k"),s=n("znIw");(r.prototype=new i).initialize=function(){this.ctx;var t,e,n=this.options,r=n.data.items,i=Math.round(n.maxDotsCount/5),a=[],u=[],s=0,c=0;void 0===n.isDraw&&(n.isDraw=!0),o.each(r,function(n,r,l){var f=parseFloat(n.price),p=parseFloat(n.amount),h=parseFloat(n.volume);isNaN(f)||isNaN(p)||isNaN(h)||(s=o.add(s,p),c=o.add(c,h),a.push(f),u.push(s/c/100),r%i==0&&(s=0,c=0),0===r?(e=n.price,t=n.price):(e=Math.max(n.price,e),t=Math.min(t,n.price)))}),n.high=e,n.low=t,void 0===n.middleValue&&(n.middleValue=(e+t)/2),n.maxDiff=Math.max(Math.abs(e-n.middleValue),Math.abs(t-n.middleValue)),this.priceOptions={region:n.region,data:{items:a},color:n.priceLineColor,gradientColor:n.priceLineFullGradientColor,partCount:5,maxCount:n.maxDotsCount,middleValue:n.middleValue,maxDiff:n.maxDiff},this.averPriceOptions={region:n.region,data:{items:u},color:n.avgPriceLineColor,partCount:5,maxCount:n.maxDotsCount,middleValue:n.middleValue,maxDiff:n.maxDiff,splitLine:n.splitLine}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,color:e.gridColor};new a(t,n).paint()},r.prototype.paintMiddleLine=function(){var t=this.ctx,e=this.options,n=e.region;t.save(),t.setLineDash&&t.setLineDash([5,2],0),t.moveTo(n.x,n.y+n.height/2),t.lineTo(n.x+n.width,n.y+n.height/2),t.setStrokeStyle(e.middleLineColor),t.stroke(),t.restore()},r.prototype.getYAxisColor=function(t){var e=this.options;return t==e.middleValue?e.normalColor:t>e.middleValue?e.riseColor:e.dropColor},r.prototype.paintYAxisLeft=function(){this.ctx;var t=this.options,e=t.middleValue,n=t.maxDiff;if(t.yAxisLeft){for(var r=t.yAxisLeft,i=[],a=2*n/(r.axisCount-1),u=0;u<r.axisCount;u++){var c=o.add(e,n-a*u);i.push({text:c.toFixed(2),color:this.getYAxisColor(c)})}r.data={items:i},new s(this.ctx,r).paint()}},r.prototype.paintYAxisRight=function(){this.ctx;var t=this.options,e=t.middleValue,n=t.maxDiff;if(t.yAxisRight){for(var r=t.yAxisRight,i=[],a=2*n/(r.axisCount-1),u=0;u<r.axisCount;u++){var c=o.sub(n,a*u),l=o.add(e,n-a*u),f=(c/e*100).toFixed(2)+"%";c>0&&(f="+"+f),i.push({text:f,color:this.getYAxisColor(l)})}r.data={items:i},new s(this.ctx,r).paint()}},r.prototype.paint=function(){var t=this.ctx,e=this.options;this.initialize(),this.paintGrid(),this.paintMiddleLine();var n=new u(t,this.averPriceOptions),r=new u(t,this.priceOptions);n.paint(),r.paint(),this.paintYAxisLeft(),this.paintYAxisRight(),!0===e.isDraw&&t.draw(!0)},t.exports=r},A2Du:function(t,e,n){var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"site-popup",class:[t.visible?"show":""]},[n("view",{staticClass:"site-popup-item"},[n("view",{staticClass:"st-popup st-popup_mask st-modal",staticStyle:{"z-index":"100"},attrs:{id:"modal_1"}},[n("view",{staticClass:"st-popup-container st-popup-center"},[n("view",{staticClass:"st-popup-content"},[n("view",{staticClass:"st-modal-main"},[n("span",{staticClass:"st-modal-close",staticStyle:{display:"none"}},[n("i",{staticClass:"st-close"})],1),t._v(" "),n("view",{staticClass:"st-modal-confirm"},[n("view",{staticClass:"st-modal-content",staticStyle:{color:"rgb(103, 109, 121)"}},[n("view",{staticClass:"popup-protocol"},[n("view",{staticClass:"popup-protocol__hd"},[t._v("欢迎使用腾讯微证券服务，请先阅读并同意以下协议：")]),t._v(" "),n("view",{staticClass:"popup-protocol__bd"},t._l(t.notConfirmList,function(e,r){return e.id&&e.title&&e.url?n("view",{key:r,staticClass:"popup-protocol__item",attrs:{"data-url":e.url,eventid:"0_"+r},on:{click:t.clickProtocol}},[t._v("《"+t._s(e.title)+"》")]):t._e()}))])]),t._v(" "),n("view",{staticClass:"st-modal-btns"},[n("label",{staticClass:"st-modal-btn border-top-1px border-right-1px st-button st-button-default",attrs:{role:"button",eventid:"1"},on:{click:t.onCancel}},[n("span",{staticClass:"st-button__text"},[t._v("取消")])]),t._v(" "),n("label",{staticClass:"st-modal-btn border-top-1px st-button st-button-default st-modal-btn_highlight",attrs:{role:"button",eventid:"2"},on:{click:t.onConfirm}},[n("span",{staticClass:"st-button__text"},[t._v("已阅读并同意")])])],1)])])])])])])])},staticRenderFns:[]};e.a=r},BO1k:function(t,e,n){t.exports={default:n("fxRn"),__esModule:!0}},BwfY:function(t,e,n){n("fWfb"),n("M6a0"),n("OYls"),n("QWe/"),t.exports=n("FeBl").Symbol},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},CAPz:function(t,e,n){var r=getApp(),o={4:"1",10:"0",8:"1",9:"2"};t.exports=function(t,e){var n=t.currentTarget.dataset,i=n.sname,a=n.scode,u=n.market,s=n.zxtype,c=n.nid,l=n.source,f=n.title,p=o[s]||"1",h=l||"",d=n.date?n.date:"",v=["sname="+i,"scode="+a.substr(2),"market="+u,"zxtype="+p,"id="+c.split("_")[2],"date=","source="+h,"title="+f,"date="+d,"comsour=1"];r.navigateTo({url:"/pages/newsCon/newsCon?"+v.join("&"),fail:function(t){console.log(t)}})}},CJli:function(t,e,n){n("pRCB");var r=n("FeBl").Object;t.exports=function(t,e){return r.defineProperties(t,e)}},CXw9:function(t,e,n){var r,o,i,a,u=n("O4g8"),s=n("7KvD"),c=n("+ZMJ"),l=n("RY/4"),f=n("kM2E"),p=n("EqjI"),h=n("lOnJ"),d=n("2KxR"),v=n("NWt+"),g=n("t8x9"),y=n("L42u").set,m=n("82Mu")(),_=n("qARP"),x=n("dNDb"),b=n("iUbK"),w=n("fJUb"),S=s.TypeError,O=s.process,A=O&&O.versions,k=A&&A.v8||"",E=s.Promise,C="process"==l(O),T=function(){},P=o=_.f,j=!!function(){try{var t=E.resolve(1),e=(t.constructor={})[n("dSzd")("species")]=function(t){t(T,T)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==k.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),M=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0;n.length>i;)!function(e){var n,i,a,u=o?e.ok:e.fail,s=e.resolve,c=e.reject,l=e.domain;try{u?(o||(2==t._h&&F(t),t._h=1),!0===u?n=r:(l&&l.enter(),n=u(r),l&&(l.exit(),a=!0)),n===e.promise?c(S("Promise-chain cycle")):(i=M(n))?i.call(n,s,c):s(n)):c(r)}catch(t){l&&!a&&l.exit(),c(t)}}(n[i++]);t._c=[],t._n=!1,e&&!t._h&&I(t)})}},I=function(t){y.call(s,function(){var e,n,r,o=t._v,i=L(t);if(i&&(e=x(function(){C?O.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=C||L(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){y.call(s,function(){var e;C?O.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0))},N=function t(e){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw S("Promise can't be resolved itself");(n=M(e))?m(function(){var o={_w:r,_d:!1};try{n.call(e,c(t,o,1),c(R,o,1))}catch(t){R.call(o,t)}}):(r._v=e,r._s=1,D(r,!1))}catch(e){R.call({_w:r,_d:!1},e)}}};j||(E=function(t){d(this,E,"Promise","_h"),h(t),r.call(this);try{t(c(N,this,1),c(R,this,1))}catch(t){R.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("xH/j")(E.prototype,{then:function(t,e){var n=P(g(this,E));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=C?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=c(N,t,1),this.reject=c(R,t,1)},_.f=P=function(t){return t===E||t===a?new i(t):o(t)}),f(f.G+f.W+f.F*!j,{Promise:E}),n("e6n0")(E,"Promise"),n("bRrM")("Promise"),a=n("FeBl").Promise,f(f.S+f.F*!j,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(u||!j),"Promise",{resolve:function(t){return w(u&&this===a?E:this,t)}}),f(f.S+f.F*!(j&&n("dY0y")(function(t){E.all(t).catch(T)})),"Promise",{all:function(t){var e=this,n=P(e),r=n.resolve,o=n.reject,i=x(function(){var n=[],i=0,a=1;v(t,!1,function(t){var u=i++,s=!1;n.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,n[u]=t,--a||r(n))},o)}),--a||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=P(e),r=n.reject,o=x(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},Cdx3:function(t,e,n){var r=n("sB3e"),o=n("lktj");n("uqUo")("keys",function(){return function(t){return o(r(t))}})},CpRe:function(t,e){},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},D4CW:function(e,n,r){function o(t){if("string"==typeof t)return t;var e=t.path,n=function(t,e,n,r){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===(void 0===t?"undefined":c(t))?Object.keys(t).map(function(r){var o=l(r)+n;return Array.isArray(t[r])?t[r].map(function(t){return o+l(t)}).join(e):o+l(t[r])}).filter(Boolean).join(e):""}(t.query);return n?e+"?"+n:e}function i(t,e,n,r){var i={url:o(t),complete:e,fail:n,success:r};t.isTab?wx.switchTab(i):t.reLaunch?wx.reLaunch(i):wx.navigateTo(i)}function a(t,e,n,r){var i=o(t);wx.redirectTo({url:i,complete:e,fail:n,success:r})}function u(t){wx.navigateBack({delta:t})}function s(){wx.navigateBack()}Object.defineProperty(n,"__esModule",{value:!0}),r.d(n,"_Vue",function(){return f});var c="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},l=function(t){switch(void 0===t?"undefined":c(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}},f=void 0,p={install:function(t){if(!this.installed||f!==t){this.installed=!0,f=t;var e={mode:"history",push:i,replace:a,go:u,back:s};t.mixin({onLoad:function(){var t=this.$root.$mp;this._route=function(t){var e=t||{},n=e.page&&e.page.route;return{path:"/"+n,params:{},query:e.query,hash:"",fullPath:o({path:"/"+n,query:e.query}),name:n&&n.replace(/\/(\w)/g,function(t,e){return e.toUpperCase()})}}(t)},onShow:function(){e.app=this,e.currentRoute=this._route}}),Object.defineProperty(t.prototype,"$router",{get:function(){return e}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._route}})}}};n.default=p},Dd8w:function(t,e,n){e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("woOf"));e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},Dk3b:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.INDEX_CATEGORY_SWITCH={key:"index.category_switch",params:["category"]},e.SYSTEM_DETAIL_STAR={key:"system-detail.star",params:["strategy_id"]},e.SYSTEM_DETAIL_UNSTAR={key:"system-detail.unstar",params:["strategy_id"]},e.SYSTEM_DETAIL_SHARE_TAP={key:"system-detail.share_tap",params:["strategy_id"]},e.SYSTEM_DETAIL_SHARE_CHANNEL_TAP={key:"system-detail.share_channel_tap",params:["channel"]},e.CUSTOM_DESCRIPTION_INDICATOR_SHOW={key:"custom-description.indicator_show"},e.CUSTOM_INDEX_RESULT_TAP={key:"custom-index.result_tap"},e.NEWS_INDEX_SHOW={key:"news-index.show"},e.NEWS_DETAIL_SHOW={key:"news-detail.show"},e.STOCKPK_INDEX_SHOW={key:"stockpk-index.show"},e.STOCKPK_RESULT_SHOW={key:"stockpk-result.show"},e.CALEFFECT_INDEX_SHOW={key:"caleffect-index.show"},e.CALEFFECT_LIST_SHOW={key:"caleffect-list.show"},e.CALEFFECT_DETAIL_SHOW={key:"caleffect-detail.show",params:["effect"]},e.CALEFFECT_PLATE_SHOW={key:"caleffect-plate.show"},e.UNDEFINED_SHOW={key:"undefined.show"},e.CALEFFECT_STOCK_SHOW={key:"caleffect-stock.show"},e.INDEX_SHOW={key:"index.show"},e.INDEX_PAGE_DURATION={key:"index.page_duration"},e.INDEX_PULLDOWNREFRESH={key:"index.pulldownrefresh"},e.INDEX_USERENTRY_TAP={key:"index.userentry_tap",params:["type"]},e.INDEX_STRATEGY_TAP={key:"index.strategy_tap",params:["strategy_id"]},e.INDEX_NEWS_MORE_TAP={key:"index.news_more_tap"},e.INDEX_STOCK_NEWS_TAP={key:"index.stock_news_tap"},e.INDEX_TOOL_TAP={key:"index.tool_tap",params:["tool"]},e.INDEX_SUBJECT_MORE_TAP={key:"index.subject_more_tap"},e.INDEX_SUBJECT_ITEM_TAP={key:"index.subject_item_tap"},e.SYSTEM_DETAIL_SHOW={key:"system-detail.show",params:["strategy_id"]},e.SYSTEM_DETAIL_PULLDOWNREFRESH={key:"system-detail.pulldownrefresh",params:["strategy_id"]},e.SYSTEM_DETAIL_PROFIT_PERIOD_TAP={key:"system-detail.profit_period_tap",params:["strategy_id","period"]},e.SYSTEM_DETAIL_PROFIT_PUSH={key:"system-detail.profit_push",params:["strategy_id"]},e.SYSTEM_DETAIL_STOCKLIST_TAP={key:"system-detail.stocklist_tap",params:["strategy_id"]},e.SYSTEM_DETAIL_STOCKLIST_SWIPE={key:"system-detail.stocklist_swipe",params:["strategy_id"]},e.SYSTEM_DETAIL_STOCKLIST_SORT={key:"system-detail.stocklist_sort",params:["strategy_id"]},e.SYSTEM_DETAIL_INDUSTRY_FILTER={key:"system-detail.industry_filter",params:["strategy_id"]},e.SYSTEM_DETAIL_HISTORY_TAP={key:"system-detail.history_tap",params:["strategy_id"]},e.SYSTEM_DETAIL_FAVORITE_TAP={key:"system-detail.favorite_tap",params:["strategy_id"]},e.SYSTEM_DETAIL_COMMENT_TAP={key:"system-detail.comment_tap",params:["strategy_id"]},e.USER_TAB_SHOW={key:"user.tab_show",params:["tab"]},e.USER_TAB_CLICK={key:"user.tab_click",params:["tab"]},e.USER_ALL_TAP={key:"user.all_tap"},e.USER_STICK={key:"user.stick",params:["tab"]},e.USER_REMOVE={key:"user.remove",params:["tab"]},e.USER_PULLDOWNREFRESH={key:"user.pulldownrefresh",params:["tab"]},e.USER_SYSTEM_STRATEGY_TAP={key:"user.system_strategy_tap",params:["strategy_id"]},e.SYSTEM_INDEX_STRATEGY_TAP={key:"system-index.strategy_tap",params:["strategy_id"]},e.USER_CREATE_TAP={key:"user.create_tap"},e.USER_RENAME={key:"user.rename"},e.USER_STRATEGY_TAP={key:"user.strategy_tap"},e.CUSTOM_INDEX_INFO_TAP={key:"custom-index.info_tap"},e.CUSTOM_INDEX_SUGGESTION_TAP={key:"custom-index.suggestion_tap",params:["hot_indicator_id"]},e.CUSTOM_DETAIL_SAVE_TAP={key:"custom-detail.save_tap"},e.CUSTOM_DETAIL_EDIT_TAP={key:"custom-detail.edit_tap"},e.CUSTOM_DETAIL_STOCK_FIELD_SORT={key:"custom-detail.stock_field_sort",params:["fieled"]},e.CUSTOM_DETAIL_STOCK_TAP={key:"custom-detail.stock_tap"},e.CUSTOM_DETAIL_PULLDOWNREFRESH={key:"custom-detail.pulldownrefresh"},e.CUSTOM_INDEX_INDICATOR_SELECT={key:"custom-index.indicator_select",params:["leve_id"," indicator_id","option_id"]},e.NEWS_INDEX_STOCK_TAP={key:"news-index.stock_tap",params:["stock_code"]},e.NEWS_INDEX_SHARE_TAP={key:"news-index.share_tap"},e.NEWS_INDEX_SHARE_CHANNEL_TAP={key:"news-index.share_channel_tap"},e.NEWS_DETAIL_DETAIL_NEWS_TAP={key:"news-detail.detail_news_tap",params:["news_id"]},e.STOCKPK_INDEX_ADDSTOCK={key:"stockpk-index.addstock"},e.STOCKPK_INDEX_STARTPK={key:"stockpk-index.startpk"},e.STOCKPK_INDEX_SUGGEST_SWITCH={key:"stockpk-index.suggest_switch",params:["category"]},e.STOCKPK_INDEX_REFRESH={key:"stockpk-index.refresh"},e.STOCKPK_INDEX_GUESS_CLICK={key:"stockpk-index.guess_click",params:["type"]},e.STOCKPK_INDEX_HOT_PK_CLICK={key:"stockpk-index.hot_pk_click"},e.STOCKPK_INDEX_CLEAR_HISTORY={key:"stockpk-index.clear_history"},e.STOCKPK_INDEX_CHOOSE={key:"stockpk-index.choose"},e.STOCKPK_INDEX_DELETE={key:"stockpk-index.delete"},e.STOCKPK_SEARCH_PICK_STOCK={key:"stockpk-search.pick_stock",params:["type"]},e.STOCKPK_RESULT_INDICATOR_SWITCH={key:"stockpk-result.indicator_switch",params:["indicator"]},e.STOCKPK_RESULT_INDICATOR_ENTRY_TAP={key:"stockpk-result.indicator_entry_tap"},e.STOCKPK_INDICATOR_ADD_CONFIRM={key:"stockpk-indicator.add_confirm"},e.CALEFFECT_INDEX_DATE_TAP={key:"caleffect-index.date_tap"},e.CALEFFECT_INDEX_EFFECT_TAP={key:"caleffect-index.effect_tap"},e.CALEFFECT_INDEX_PLATE_TAP={key:"caleffect-index.plate_tap"},e.CALEFFECT_INDEX_STOCK_TAP={key:"caleffect-index.stock_tap"},e.CALEFFECT_INDEX_LATEST_EFFECT_TAP={key:"caleffect-index.latest_effect_tap"},e.CALEFFECT_INDEX_MORE_EFFECT_TAP={key:"caleffect-index.more_effect_tap"},e.CALEFFECT_INDEX_CATEGORY_TAP={key:"caleffect-index.category_tap",params:["category"]},e.CALEFFECT_INDEX_LISTITEM_TAP={key:"caleffect-index.listitem_tap",params:["category"]},e.CALEFFECT_INDEX_SHARE_TAP={key:"caleffect-index.share_tap"},e.CALEFFECT_INDEX_SHARE_CHANNEL_TAP={key:"caleffect-index.share_channel_tap"},e.CALEFFECT_LIST_CATEGORY_TAP={key:"caleffect-list.category_tap",params:["category"]},e.CALEFFECT_LIST_EFFECT_TAP={key:"caleffect-list.effect_tap",params:["effect"]},e.CALEFFECT_DETAIL_CATEGORY_TAP={key:"caleffect-detail.category_tap",params:["category"]},e.CALEFFECT_DETAIL_LISTITEM_TAP={key:"caleffect-detail.listitem_tap",params:["category"]},e.CALEFFECT_PLATE_QUOTE_TAP={key:"caleffect-plate.quote_tap"},e.CALEFFECT_PLATE_MOREEFFECT_TAP={key:"caleffect-plate.moreeffect_tap"},e.CALEFFECT_PLATE_EFFECT_SWITCH={key:"caleffect-plate.effect_switch"},e.CALEFFECT_PLATE_HISTORY_TAP={key:"caleffect-plate.history_tap"},e.CALEFFECT_PLATE_STOCKITEM_TAP={key:"caleffect-plate.stockitem_tap"},e.CALEFFECT_STOCK_ADD_TAP={key:"caleffect-stock.add_tap"},e.CALEFFECT_STOCK_QUOTE_TAP={key:"caleffect-stock.quote_tap"},e.CALEFFECT_STOCK_MOREEFFECT_TAP={key:"caleffect-stock.moreeffect_tap"},e.CALEFFECT_STOCK_EFFECT_SWITCH={key:"caleffect-stock.effect_switch"},e.CALEFFECT_DATE_TAB_SHOW={key:"caleffect-date.tab_show",params:["tab"]},e.CALEFFECT_DATE_TAB_TAP={key:"caleffect-date.tab_tap",params:["tab"]},e.CALEFFECT_DATE_CATEGORY_TAP={key:"caleffect-date.category_tap",params:["category"]},e.CALEFFECT_DATE_LISTITEM_TAP={key:"caleffect-date.listitem_tap",params:["tab","category"]},e.CALEFFECT_DATE_TABITEM_SWITCH={key:"caleffect-date.tabitem_switch",params:["tab"]}},DuR2:function(e,n){var r;r=function(){return"undefined"!=typeof global?global:this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==("undefined"==typeof window?"undefined":t(window))&&(r=window)}e.exports=r},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},EJPq:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=getApp().reportData;e.default={click:r}},EUYj:function(t,e,n){var r,o=function(t){return t&&t.__esModule?t:{default:t}}(n("pFYg")),i=n("NpZb"),a=(i.USERSTATE,n("02iA"),n("VBVG")),u=null,s=!0,c=n("dv6X"),l=function(t,e,n){if("boolean"==typeof t&&(t={force:t}),"function"==typeof t&&(n=e,e=t,t=null),t=t||{showLoading:!1,force:!!t},e="function"==typeof e?e:function(){},n="function"==typeof n?n:function(t){"51001000"!=t.retcode&&"51001097"!=t.retcode&&wx.showModal({content:t.retmsg,showCancel:!1,confirmText:"我知道了"})},u&&u.userstate===i.USERSTATE.VERIFYING)return e(u);if(t.force&&(u=null),!u||t.force){var r=a.getLoginInfo();c.request({url:"/cgi-bin/userinfo.fcgi",data:{detail:1,dealer:1,qluin:r.qluin,qlskey:r.qlskey},success:function(t){switch(t.retcode){case"0":t.dealercode!==i.DEALER.CHINALIONS.CODE||t.dealerbranchname||(t.dealerbranchname="拉萨柳梧新区察古大道营业部"),u=t,e(t);break;default:n(t)}s=!1},fail:function(t){s&&(s=!1,n({retcode:"EABORT",retmsg:"获取用户信息失败"}))}})}else e(u)};t.exports={get:l,set:function(t,e){var n;if(u)if("object"===(void 0===t?"undefined":(0,o.default)(t)))for(n in t)t.hasOwnProperty(n)&&(u[n]=t[n]);else"string"==typeof t&&(u[t]=e)},remove:function(t){var e,n=u;if(n){if("[object Array]"===Object.prototype.toString.call(t))for(e=0;e<t.length;e++)delete n[t[e]];else"string"==typeof t&&delete n[t];u=n}},getSync:function(){return u},disableAutoUpdate:function(){clearInterval(r),r=null},enableAutoUpdate:function(){clearInterval(r),r=setInterval(function(){l(!0)},18e4)},print:function(){console.log(u)},clean:function(){u=null}}},EqBC:function(t,e,n){var r=n("kM2E"),o=n("FeBl"),i=n("7KvD"),a=n("t8x9"),u=n("fJUb");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},EqjI:function(e,n){e.exports=function(e){return"object"==(void 0===e?"undefined":t(e))?null!==e:"function"==typeof e}},FeBl:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},GYQF:function(t,e){},Gu7T:function(t,e,n){e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("c/Tr"));e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},GurM:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0});n.default=function e(n,r,o){if(void 0===r&&(r=!1),void 0===o&&(o=!1),"object"==(void 0===n?"undefined":t(n)))for(var i in n)n.hasOwnProperty(i)&&(null!==n[i]&&void 0!==n[i]||(r?delete n[i]:n[i]=""),o&&""===n[i]&&delete n[i],"object"==t(n[i])&&(n[i]=e(n[i])));return n}},H4kx:function(e,n,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var i=o(r("deEJ")),a=o(r("wsaK")),u=r("I5ey"),s=function(){function e(t){void 0===t&&(t={logAbnormalUrlParam:!0,logAbnormalReqParam:!0,logAbnormalResCode:!0}),this.option=t,!1!==t.logAbnormalUrlParam&&this.checkAbnormalUrlParam(),!1!==t.logAbnormalReqParam&&this.checkAbnormalReqParam(),!1!==t.logAbnormalResCode&&this.checkAbnormalResCode(),t.reportPageTimeMpidMap&&this.reportPageTime(),t.reportCgiTimeMpidMap&&this.reportCgiTime()}return e.prototype.getReqOptionParam=function(e){var n={},r=u.urltools.param.parse;if("object"!=(void 0===e?"undefined":t(e)))return n;switch(e.method?e.method.toUpperCase():"GET"){case"GET":n=r(e.url);break;case"POST":n="string"==typeof e.data?r(e.url,{searchSep:null}):"object"==t(e.data)?e.data:{}}return n},e.prototype.getReqCgiName=function(t){var e=(t.url||"").match(/\w+\.f?cgi/);return null===e?"":e[0]},e.prototype.getArrFromObj=function(t){var e=[];return Object.keys(t).forEach(function(n){e.push(n+"="+t[n])}),e},e.prototype.checkAbnormalUrlParam=function(){var e=this;u.mpPageHook({onLoad:function(n){if("object"==(void 0===n?"undefined":t(n))&&u.isExistNullUndefProperty(n)){console.warn("AbnormalUrlParam: 页面参数存在异常情况，已上报");var r=e.option.reportAbnormalUrlParamMonitor;i.default.error(u.JSONStringify(n)),r&&a.default.reportMonitor(r.id,r.value)}}})},e.prototype.checkAbnormalReqParam=function(){var t=this;u.mpRequestHook.before(function(e){var n=t.getReqOptionParam(e);if(t.option.filterAbnormalReqList instanceof Array){var r=!1;if(t.option.filterAbnormalReqList.forEach(function(t){e.url&&t.test(e.url)&&(r=!0)}),r)return}if(u.isExistNullUndefProperty(n)){console.warn("AbnormalReqParam: 存在异常请求参数，已上报");var o=t.option.abnormalReqMonitorOption;i.default.error(u.JSONStringify(e)),o&&a.default.reportMonitor(o.id,o.value)}})},e.prototype.checkAbnormalResCode=function(){var e=this;u.mpRequestHook.after(function(n,r){var o,s,c;if(e.option.filterAbnormalReqList instanceof Array){var l=!1;if(e.option.filterAbnormalReqList.forEach(function(t){r.url&&t.test(r.url)&&(l=!0)}),l)return}if(n&&"200"==n.statusCode?((s="object"!=t(c="string"==typeof n.data?u.mpParseJSON(n.data):n.data)?"":c.retcode||c.retCode||c.code)&&-1===["0","200",0,200].indexOf(s)&&(o="wx.request response code abnormal"),e.option.filterAbnormalResCodeList&&-1!==e.option.filterAbnormalResCodeList.indexOf(s)&&(o="")):o="wx.request statusCode not 200",o){console.warn("AbnormalResCode: 存在异常接口返回数据，已上报");var f=e.option.abnormalResCodeOption;i.default.error(o,u.JSONStringify(n),u.JSONStringify(r)),f&&a.default.reportMonitor(f.id,f.value)}})},e.prototype.reportPageTime=function(){var t=this.option.reportPageTimeMpidMap,e=0;u.mpPageHook({onReady:function(){var n,r=getCurrentPages(),o=r.length,i=r[o-1].route||"",u=0;r[o-1]._mp_monitor_ready_time=+new Date,o>1&&r[o-2]._mp_monitor_hide_time>0?u=r[o-1]._mp_monitor_ready_time-r[o-2]._mp_monitor_hide_time:0===u&&1===o&&e>0?(u=r[o-1]._mp_monitor_ready_time-e,e=0):u=0,t&&t[i]&&t[i].id&&u>0&&(n=t[i].id,a.default.reportPerformance(n,u),console.log("上报页面测速",i,n,u))},onHide:function(){var t=getCurrentPages(),n=t.length;t[n-1]._mp_monitor_hide_time=+new Date,e=t[n-1]._mp_monitor_hide_time}})},e.prototype.reportCgiTime=function(){var t=this,e=this.option.reportCgiTimeMpidMap;u.mpRequestHook.before(function(n){var r=t.getReqCgiName(n),o=t.getReqOptionParam(n),i=t.getArrFromObj(o);e.hasOwnProperty(r)&&(e[r].param&&-1===i.indexOf(e[r].param)||(e[r]._start=+new Date))}).after(function(n,r){var o=t.getReqCgiName(r),i=t.getReqOptionParam(r),u=t.getArrFromObj(i);if(e.hasOwnProperty(o)&&e[o]._start&&(!e[o].param||-1!==u.indexOf(e[o].param))){var s=+new Date-e[o]._start;a.default.reportPerformance(e[o].id,s),delete e[o]._start,console.log("上报接口测速",o,e[o].id,s)}})},e}();n.default=s},HSQo:function(t,e,n){t.exports={default:n("CJli"),__esModule:!0}},I5ey:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("Ujqn"));e.blackhole=i.default;var a=r(n("SZoR"));e.detect=a.default;var u=o(n("JJFI"));e.err=u.default,e.transformError=u.transformError,e.ERR_MAP=u.ERR_MAP;var s=n("uJOP");e.parseJSON=s.parseJSON,e.mpParseJSON=s.mpParseJSON,e.JSONStringify=s.JSONStringify;var c=r(n("GurM"));e.safeobj=c.default;var l=r(n("Uqg3"));e.uniqid=l.default;var f=r(n("a2JC"));e.urltools=f.default;var p=r(n("ulIw"));e.isExistNullUndefProperty=p.default;var h=n("2vZo");e.mpRequestHook=h.requestHook;var d=n("041s");e.mpAppHook=d.appHook,e.mpPageHook=d.pageHook},IKMJ:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k");(r.prototype=new i).initialize=function(){var t,e,n=[],r=[],i=this.options,a=i.data.items;o.each(a,function(o,i){var a=parseFloat(o.WR6),u=parseFloat(o.WR10);isNaN(a)||(n.push(a),t=a>t?a:t,e=a<e?a:e),isNaN(u)||(r.push(u),t=u>t?u:t,e=u<e?u:e)}),n.length>i.maxCount&&(n=n.slice(n.length-i.maxCount),r=r.slice(r.length-i.maxCount)),o.each(n,function(n,i){var a=[n,r[i]],u=Math.max.apply([],a),s=Math.min.apply([],a);t=void 0===t?u:parseFloat(o.isMore(u,t)?u:t),e=void 0===e?s:parseFloat(o.isLess(s,e)?s:e)}),i.middleValue=o.div(t+e,2),this.wr1Options={region:i.region,data:{items:n},maxCount:i.maxCount,middleValue:i.middleValue,color:i.wr1Color},this.wr2Options={region:i.region,data:{items:r},maxCount:i.maxCount,middleValue:i.middleValue,color:i.wr2Color}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,horizontalLine:e.horizontalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:80,color:e.color},{text:50,color:e.color},{text:20,color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new s(t,this.wr1Options),n=new s(t,this.wr2Options);e.paint(),n.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},Ibhu:function(t,e,n){var r=n("D2L2"),o=n("TcQ7"),i=n("vFc/")(!1),a=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(c,n)||c.push(n));return c}},JJFI:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),n("YWsp"),e.ERR_MAP={DEFAULT:"系统繁忙 请稍后再试"};var o=function(t){return void 0===t&&(t=i.DEFAULT),r({},t,{content:t.retmsg,message:t.retmsg})},i=new Proxy(e.ERR_MAP,{get:function(t,e){return o({retcode:e,retmsg:t[e]})}});e.transformError=function(t,e){return void 0===e&&(e=i.DEFAULT),t=function(t){return t instanceof Error}(t=t||e)?r({},e,{retmsg:/[\u4e00-\u9fa5]/.test(t.message)?t.message:e.retmsg}):function(t){return"string"==typeof t}(t)?r({},e,{retmsg:t}):r({retcode:t.code,retmsg:t.msg},t),o(t)},e.default=i},JR0G:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.generate=e.expanders=e.request=void 0;var o=r(n("fZjL")),i=r(n("Syvq")),a=r(n("fw3I")),u={},s=e.request=function(t,e){u[t]=e},c=e.expanders=[];e.generate=function(t){if(function(t){if(t&&0!==t.length)for(var e=0;e<t.length;e++)t.splice(e,1),e--}(c),!t)return c.push((0,i.default)({printTime:!1}));(0,o.default)(t).forEach(function(e){u[e]&&c.push(u[e](t[e]))})},s("console",i.default),s("wxlogreport",a.default)},K6ED:function(t,e,n){t.exports={default:n("cnlX"),__esModule:!0}},Kbzh:function(t,e,n){var r=n("p3fu"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},u=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},s=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},c=function(t,e){if(i(t)){for(var n=[],r=0;r<t.length;r+=1)n.push(e(t[r]));return n}return e(t)},l=function(t,e,n,r){if(t){var i=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,u=n.depth>0&&/(\[[^[\]]*])/.exec(i),c=u?i.slice(0,u.index):i,l=[];if(c){if(!n.plainObjects&&o.call(Object.prototype,c)&&!n.allowPrototypes)return;l.push(c)}for(var f=0;n.depth>0&&null!==(u=a.exec(i))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,u[1].slice(1,-1))&&!n.allowPrototypes)return;l.push(u[1])}return u&&l.push("["+i.slice(u.index)+"]"),function(t,e,n,r){for(var o=r?e:s(e,n),i=t.length-1;i>=0;--i){var a,u=t[i];if("[]"===u&&n.parseArrays)a=[].concat(o);else{a=n.plainObjects?Object.create(null):{};var c="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,l=parseInt(c,10);n.parseArrays||""!==c?!isNaN(l)&&u!==c&&String(l)===c&&l>=0&&n.parseArrays&&l<=n.arrayLimit?(a=[])[l]=o:a[c]=o:a={0:o}}o=a}return o}(l,e,n,r)}};t.exports=function(t,e){var n=function(t){if(!t)return a;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?a.charset:t.charset;return{allowDots:void 0===t.allowDots?a.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:a.comma,decoder:"function"==typeof t.decoder?t.decoder:a.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:a.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:a.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling}}(e);if(""===t||null===t||void 0===t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var n,l={},f=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,p=e.parameterLimit===1/0?void 0:e.parameterLimit,h=f.split(e.delimiter,p),d=-1,v=e.charset;if(e.charsetSentinel)for(n=0;n<h.length;++n)0===h[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[n]?v="utf-8":"utf8=%26%2310003%3B"===h[n]&&(v="iso-8859-1"),d=n,n=h.length);for(n=0;n<h.length;++n)if(n!==d){var g,y,m=h[n],_=m.indexOf("]="),x=-1===_?m.indexOf("="):_+1;-1===x?(g=e.decoder(m,a.decoder,v,"key"),y=e.strictNullHandling?null:""):(g=e.decoder(m.slice(0,x),a.decoder,v,"key"),y=c(s(m.slice(x+1),e),function(t){return e.decoder(t,a.decoder,v,"value")})),y&&e.interpretNumericEntities&&"iso-8859-1"===v&&(y=u(y)),m.indexOf("[]=")>-1&&(y=i(y)?[y]:y),o.call(l,g)?l[g]=r.combine(l[g],y):l[g]=y}return l}(t,n):t,p=n.plainObjects?Object.create(null):{},h=Object.keys(f),d=0;d<h.length;++d){var v=h[d],g=l(v,f[v],n,"string"==typeof t);p=r.merge(p,g,n)}return r.compact(p)}},Kgpq:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k");(r.prototype=new i).initialize=function(){var t,e,n=[],r=this.options,i=r.data.items;o.each(i,function(t,e){var r=parseFloat(t.CCI);isNaN(r)||n.push(r)}),n.length>r.maxCount&&(n=n.slice(n.length-r.maxCount)),o.each(n,function(n,r){t=void 0===t?n:parseFloat(o.isMore(n,t)?n:t),e=void 0===e?n:parseFloat(o.isLess(n,e)?n:e)}),r.high=t,r.low=e,r.middleValue=o.div(t+e,2),this.cciOptions={region:r.region,data:{items:n},maxCount:r.maxCount,middleValue:r.middleValue,color:r.cciColor}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:t.high.toFixed(2),color:e.color},{text:t.low.toFixed(2),color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid(),new s(t,this.cciOptions).paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},Kh4W:function(t,e,n){e.f=n("dSzd")},Kh5d:function(t,e,n){var r=n("sB3e"),o=n("PzxK");n("uqUo")("getPrototypeOf",function(){return function(t){return o(r(t))}})},L42u:function(t,e,n){var r,o,i,a=n("+ZMJ"),u=n("knuC"),s=n("RPLV"),c=n("ON07"),l=n("7KvD"),f=l.process,p=l.setImmediate,h=l.clearImmediate,d=l.MessageChannel,v=l.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},_=function(t){m.call(t.data)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e)},r(g),g},h=function(t){delete y[t]},"process"==n("R9M2")(f)?r=function(t){f.nextTick(a(m,t,1))}:v&&v.now?r=function(t){v.now(a(m,t,1))}:d?(i=(o=new d).port2,o.port1.onmessage=_,r=a(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",_,!1)):r="onreadystatechange"in c("script")?function(t){s.appendChild(c("script")).onreadystatechange=function(){s.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:p,clear:h}},LGuY:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},LKZe:function(t,e,n){var r=n("NpIQ"),o=n("X8DO"),i=n("TcQ7"),a=n("MmMw"),u=n("D2L2"),s=n("SfB7"),c=Object.getOwnPropertyDescriptor;e.f=n("+E39")?c:function(t,e){if(t=i(t),e=a(e,!0),s)try{return c(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},Lh5B:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k");(r.prototype=new i).initialize=function(){var t,e,n=[],r=this.options,i=r.data.items;o.each(i,function(t,e){var r=parseFloat(t.OBV);isNaN(r)||n.push(r)}),n.length>r.maxCount&&(n=n.slice(n.length-r.maxCount)),o.each(n,function(n,r){t=void 0===t?n:o.isMore(n,t)?n:t,e=void 0===e?n:o.isLess(n,e)?n:e}),r.high=t,r.middleValue=o.div(t+e,2),this.obvOptions={region:r.region,data:{items:n},maxCount:r.maxCount,middleValue:r.middleValue,color:r.obvColor}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){var t=this.options;if(t.yAxis){var e,n=t.yAxis,r=o.formatBigNumber(t.high);e=[{text:r.v,color:n.color},{text:r.u,color:n.color}],void 0===n.clearRegion&&(n.clearRegion=!0),n.data={items:e},new u(this.ctx,n).paint()}},r.prototype.paint=function(){var t=this.ctx;this.initialize(),this.paintGrid(),new s(t,this.obvOptions).paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},M6a0:function(t,e){},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mhyx:function(t,e,n){var r=n("/bQp"),o=n("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},N7zV:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k");(r.prototype=new i).initialize=function(){var t,e,n=[],r=[],i=[],a=[],u=this.options,s=u.data.items;o.each(s,function(t,e){var o=parseFloat(t.ADX),u=parseFloat(t.ADXR),s=parseFloat(t.MDI),c=parseFloat(t.PDI);isNaN(o)||n.push(o),isNaN(u)||r.push(u),isNaN(s)||i.push(s),isNaN(c)||a.push(c)}),i.length>u.maxCount&&(i=i.slice(i.length-u.maxCount),n=n.slice(n.length-u.maxCount),r=r.slice(r.length-u.maxCount),a=a.slice(a.length-u.maxCount)),o.each(n,function(n,u){var s=[n,r[u],i[u],a[u]],c=Math.max.apply([],s),l=Math.min.apply([],s);t=void 0===t?c:o.isMore(c,t)?c:t,e=void 0===e?l:o.isLess(l,e)?l:e}),u.high=t,u.low=e,u.middleValue=o.div(t+e,2),this.adxOptions={region:u.region,data:{items:n},maxCount:u.maxCount,middleValue:u.middleValue,color:u.adxColor},this.adxrOptions={region:u.region,data:{items:r},maxCount:u.maxCount,middleValue:u.middleValue,color:u.adxrColor},this.mdiOptions={region:u.region,data:{items:i},maxCount:u.maxCount,middleValue:u.middleValue,color:u.mdiColor},this.pdiOptions={region:u.region,data:{items:a},maxCount:u.maxCount,middleValue:u.middleValue,color:u.pdiColor}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:t.high.toFixed(2),color:e.color},{text:t.low.toFixed(2),color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new s(t,this.adxOptions),n=new s(t,this.adxrOptions),r=new s(t,this.mdiOptions),o=new s(t,this.pdiOptions);e.paint(),n.paint(),r.paint(),o.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},"NWt+":function(t,e,n){var r=n("+ZMJ"),o=n("msXi"),i=n("Mhyx"),a=n("77Pl"),u=n("QRG4"),s=n("3fs2"),c={},l={};(e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:s(t),m=r(n,f,e?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(h=u(t.length);h>_;_++)if((g=e?m(a(d=t[_])[0],d[1]):m(t[_]))===c||g===l)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=o(v,m,d.value,e))===c||g===l)return g}).BREAK=c,e.RETURN=l},NYxO:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),function(e){function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function i(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function a(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;s(t,n,[],t._modules.root,!0),u(t,n,e)}function u(t,e,n){var r=t._vm;t.getters={};var i={};o(t._wrappedGetters,function(e,n){i[n]=function(t,e){return function(){return t(e)}}(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=_.config.silent;_.config.silent=!0,t._vm=new _({data:{$$state:e},computed:i}),_.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){},{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),_.nextTick(function(){return r.$destroy()}))}function s(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var u=c(e,n.slice(0,-1)),f=n[n.length-1];t._withCommit(function(){_.set(u,f,r.state)})}var p=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=l(n,r,o),a=i.payload,u=i.options,s=i.type;return u&&u.root||(s=e+s),t.dispatch(s,a)},commit:r?t.commit:function(n,r,o){var i=l(n,r,o),a=i.payload,u=i.options,s=i.type;u&&u.root||(s=e+s),t.commit(s,a,u)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return c(t.state,n)}}}),o}(t,a,n);r.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,a+n,e,p)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return function(t){return t&&"function"==typeof t.then}(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}(t,r,o,p)}),r.forEachGetter(function(e,n){!function(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}(t,a+n,e,p)}),r.forEachChild(function(r,i){s(t,e,n.concat(i),r,o)})}function c(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function l(e,n,r){return function(e){return null!==e&&"object"==(void 0===e?"undefined":t(e))}(e)&&e.type&&(r=n,n=e,e=e.type),{type:e,payload:n,options:r}}function f(t){_&&t===_||function(t){function e(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:e});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,n.call(this,t)}}}(_=t)}function p(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function h(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function d(t,e,n){return t._modulesNamespaceMap[n]}r.d(n,"Store",function(){return x}),r.d(n,"install",function(){return f}),r.d(n,"mapState",function(){return w}),r.d(n,"mapMutations",function(){return S}),r.d(n,"mapGetters",function(){return O}),r.d(n,"mapActions",function(){return A}),r.d(n,"createNamespacedHelpers",function(){return k});var v=("undefined"!=typeof window?window:void 0!==e?e:{}).__VUE_DEVTOOLS_GLOBAL_HOOK__,g=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},y={namespaced:{configurable:!0}};y.namespaced.get=function(){return!!this._rawModule.namespaced},g.prototype.addChild=function(t,e){this._children[t]=e},g.prototype.removeChild=function(t){delete this._children[t]},g.prototype.getChild=function(t){return this._children[t]},g.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},g.prototype.forEachChild=function(t){o(this._children,t)},g.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},g.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},g.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(g.prototype,y);var m=function(t){this.register([],t,!1)};m.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},m.prototype.update=function(t){!function t(e,n,r){if(n.update(r),r.modules)for(var o in r.modules){if(!n.getChild(o))return;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},m.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new g(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i),e.modules&&o(e.modules,function(e,o){r.register(t.concat(o),e,n)})},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var _,x=function(t){var e=this;void 0===t&&(t={}),!_&&"undefined"!=typeof window&&window.Vue&&f(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new _;var o=this,i=this.dispatch,a=this.commit;this.dispatch=function(t,e){return i.call(o,t,e)},this.commit=function(t,e,n){return a.call(o,t,e,n)},this.strict=r;var c=this._modules.root.state;s(this,c,[],this._modules.root),u(this,c),n.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:_.config.devtools)&&function(t){v&&(t._devtoolHook=v,v.emit("vuex:init",t),v.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){v.emit("vuex:mutation",t,e)}))}(this)},b={state:{configurable:!0}};b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){},x.prototype.commit=function(t,e,n){var r=this,o=l(t,e,n),i=o.type,a=o.payload,u=(o.options,{type:i,payload:a}),s=this._mutations[i];s&&(this._withCommit(function(){s.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(u,r.state)}))},x.prototype.dispatch=function(t,e){var n=this,r=l(t,e),o=r.type,i=r.payload,a={type:o,payload:i},u=this._actions[o];if(u){try{this._actionSubscribers.filter(function(t){return t.before}).forEach(function(t){return t.before(a,n.state)})}catch(t){}return(u.length>1?Promise.all(u.map(function(t){return t(i)})):u[0](i)).then(function(t){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(a,n.state)})}catch(t){}return t})}},x.prototype.subscribe=function(t){return i(t,this._subscribers)},x.prototype.subscribeAction=function(t){return i("function"==typeof t?{before:t}:t,this._actionSubscribers)},x.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},x.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},x.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),s(this,this.state,t,this._modules.get(t),n.preserveState),u(this,this.state)},x.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=c(e.state,t.slice(0,-1));_.delete(n,t[t.length-1])}),a(this)},x.prototype.hotUpdate=function(t){this._modules.update(t),a(this,!0)},x.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(x.prototype,b);var w=h(function(t,e){var n={};return p(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=d(this.$store,0,t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),S=h(function(t,e){var n={};return p(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=d(this.$store,0,t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),O=h(function(t,e){var n={};return p(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||d(this.$store,0,t))return this.$store.getters[o]},n[r].vuex=!0}),n}),A=h(function(t,e){var n={};return p(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=d(this.$store,0,t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),k=function(t){return{mapState:w.bind(null,t),mapGetters:O.bind(null,t),mapMutations:S.bind(null,t),mapActions:A.bind(null,t)}},E={Store:x,install:f,version:"3.1.1",mapState:w,mapMutations:S,mapGetters:O,mapActions:A,createNamespacedHelpers:k};n.default=E}.call(n,r("DuR2"))},NgOC:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAMAAADbYcjNAAAAilBMVEUAAADWOzvXOzvYPDzhRETXOzvXOzvcQED/W1vXOzvXOzvZPT3bQEDXOzvXOzvXPDzWPDzXPDzXOzvXOzvXOzvXOzvXPDzYOzvZPj7bQEDXOzvXOzvXPDzXOzvXPDzYPDzXPDzYPT3bPz/mSUnXOzvXPDzXOzvXPDzZPj7ZPT3YPT3YPT3bPj7WOzujv7jjAAAALXRSTlMA74FVDfTmEQT3e0MW+9/a1sy/rqKciWwmIunQx7ioY1I3HAnYj3FLLytcTzGRfOdpAAABK0lEQVRIx53U13KCUBSF4UUHQREQxN5bkvX+rxfJaOhl+92fmdP+jTddmwWmMwljzUbBQo1WiuGHowcqrMTh2zKx8HLb8F/gomivsMh0kdFjlkRWvkJllQog9VlxTvMVdVdYPmtM77UrNtFCNlif8GQpFBjhKaGE4QG6QxEV0CgzBWYUWiCg0A0mhXYYU2gEhUJzTCmkfXBjn7yLbUqPAqiUMHQAP2MKRABkv2yt48+OQ60svFw5jO9V5kWvyREFF/ZbpigYko1yR5kdsZtxQJW9YRfHRd1pzXbjPZroq64Um3nn9r/Y5jhpa7ddumSDC7rcFdbE6HYwWLFFH9dhycZGr+9ScuEJA3wxF+gYZJ6PEw8DjfJABkuYMRcQiLNAHhDZZoHI2FsXLX4BZkL6g40TNcAAAAAASUVORK5CYII="},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},NpZb:function(t,e,n){t.exports={USERSTATE:{HASACCOUNT:"0",NOACCOUNT:"1",VERIFYING:"2",HASBUNDLE:"3",FAILED:"4"},MARKET:{SA:"0",HA:"1",US:"3",HK:"2"},MARKETSTATE:{NOT_TRADEDAY:"-1",NOT_OPEN:"0",OPEN_AUCTION:"1",MORNING_OPENED:"2",SIESTA:"3",AFTERNOON_OPENED:"4",CLOSE_AUCTION:"5",COLSED:"6"},STOCKSTATE:{NORMAL:"0",DELISTED:"D",SUSPENSION:"S",SUSPENDED:"Z",UNLIST:"U",UNISSUED:"I",PURCHASE:"P"},DEALER:{CMSCHINA:{CODE:"10800",DOMAIN:"wzq.newone.com.cn",NAME:"招商证券"},CHINALIONS:{CODE:"10100",DOMAIN:"wzq.chinalions.cn",NAME:"华林证券"},WZQ:{CODE:"0",DOMAIN:"wzq.tenpay.com",NAME:"微证券"},CNHB:{CODE:"21900",DOMAIN:"wzq.cnhbstock.com",NAME:"华宝证券"}}}},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),o=n("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},OYls:function(t,e,n){n("crlp")("asyncIterator")},OlWb:function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo");(r.prototype=new i).initialize=function(){var t,e,n,r,i=this.options,a=i.data.items,u=i.region;i.maxCount||(i.maxCount=a&&a.length),void 0===i.middleValue&&(i.middleValue=0),o.each(a,function(n,r){void 0===t&&(t=n.value),void 0===e&&(e=n.value),t=parseFloat(o.isMore(n.value,t)?n.value:t),e=parseFloat(o.isLess(n.value,e)?n.value:e)}),n=Math.abs(o.sub(t,i.middleValue)),r=Math.abs(o.sub(e,i.middleValue)),i.maxDiff=o.mul(n>r?n:r,1.1),i.totalWidth=o.div(u.width,i.maxCount),i.dotsWidth=o.mul(i.totalWidth,.8),i.spaceWidth=o.mul(i.totalWidth,.2)},r.prototype.getX=function(t){var e=this.options;return o.mul(t,e.totalWidth)},r.prototype.getY=function(t){var e=this.options,n=e.data.items,r=o.sub(n[t].value,e.middleValue),i=e.region.height/2;return 0-r/e.maxDiff*i},r.prototype.start=function(){var t=this.ctx,e=this.options.region;t.save(),t.translate(e.x,e.y+e.height/2)},r.prototype.end=function(t){var e=this.ctx;e.closePath(),e.restore()},r.prototype.paintItem=function(t,e,n){var r=this.ctx,o=this.options,i=o.data.items[t];r.beginPath(),r.setFillStyle(i.color),r.setStrokeStyle(i.color),r.moveTo(e+o.dotsWidth/2,n),r.arc(e+o.dotsWidth/2,n,o.dotsWidth/2,0,2*Math.PI),r.stroke(),r.fill()},t.exports=r},OvRC:function(t,e,n){t.exports={default:n("oM7Q"),__esModule:!0}},P8AU:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={strLen:function(t){var e,n;for(n=0,e=0;e<t.length;e++)t.charCodeAt(e)>=0&&t.charCodeAt(e)<=255?e%2==0&&(n+=1):n+=1;return n},ColorSet:function(t){var e=Number(t);return e>0?"red":e<0?"green":""},fmPrice:function(t){var e=Number(t);return e>0?"+"+e:e<0?e:"--"},fmChgRatio:function(t){var e=Number(t);return e>0?"+"+e+"%":e<0?e+"%":"--"},getProperDecimal:function(t,e,n){return(1*t).toFixed(e)},fmtVol:function(t,e){var n=e.slice(0,2).toUpperCase();return"HK"===n&&this.isIndex(e)&&(n="HKZS"),Math.abs(t)>=1e8?{data:(t/1e8).toFixed(2),fmtUnit:"亿",mktUnit:r[n]}:Math.abs(t)>=1e4?{data:(t/1e4).toFixed(1),fmtUnit:"万",mktUnit:r[n]}:{data:t.toFixed(0),fmtUnit:"",mktUnit:r[n]}},isIndex:function(t){return t.match(/sh000|sz399|nq899|hkHSI$|hkHSCEI$|hkHSCCI$|hkGEM$|hkCES100$|hkCES300$|usDJI$|usIXIC$|usINX$|us.DJI$|us.IXIC$|us.INX$/)},convertQuoteSymbol:function(t){var e=t.symbol;e&&(t.market={sz:"0",sh:"1",hk:"2",us:"3"}[(e.substring(0,2)||"").toLowerCase()],t.scode=e.substring(2))},getMinsTimeArr:function(t){return[["09:30","11:30/13:00","15:00"],["09:30","11:30/13:00","15:00"],["09:30","12:00/13:00","16:00"],["09:30","12:45","16:00"],["09:30","11:30/13:00","15:30"]][t]},registerActionSheet:function(t,e){var n=["前复权","不复权","后复权"];wx.showActionSheet({itemList:n,success:function(e){t&&t(e.tapIndex,n[e.tapIndex])},fail:function(t){e&&e(t)}})},pointInRegion:function(t,e,n){return t>=n.x&&t<=n.x+n.width&&e>=n.y&&e<=n.y+n.height},compareVer:function(t,e){if(t&&e){for(var n=t.split("."),r=e.split("."),o=Math.min(n.length,r.length),i=0,a=0;i<o&&0==(a=parseInt(n[i])-parseInt(r[i]));)i++;return(a=0!=a?a:n.length-r.length)>0}return console.log("版本号不能为空"),!1}};var r={SZ:"手",SH:"手",HK:"股",US:"股",HKZS:""}},P90k:function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo");(r.prototype=new i).initialize=function(){var t,e,n=this.options,r=n.data.items,i=0,a=0;o.each(r,function(n,r){t=void 0===t?n:parseFloat(o.isMore(n,t)?n:t),e=void 0===e?n:parseFloat(o.isLess(n,e)?n:e)}),void 0===n.lineWidth&&(n.lineWidth=1),void 0===n.maxCount&&(n.maxCount=r&&r.length),!0===n.clearRegion&&ctx.clearRect(region.x,region.y,region.width,region.height),void 0===n.partCount&&(n.partCount=1),n.partDotsCount=Math.round(n.maxCount/n.partCount),void 0===n.middleValue&&(n.middleValue=o.div(t+e,2)),void 0===n.maxDiff&&(i=Math.abs(o.sub(t,n.middleValue)),a=Math.abs(o.sub(e,n.middleValue)),n.maxDiff=i>a?i:a)},r.prototype.getX=function(t){var e=this.options;return t*e.region.width/e.maxCount},r.prototype.getY=function(t){var e=this.options;return 0-(e.data.items[t]-e.middleValue).toFixed(4)/e.maxDiff*(e.region.height/2)},r.prototype.start=function(){var t=this.ctx,e=this.options.region;t.save(),t.translate(e.x,e.y+e.height/2),this.partStart()},r.prototype.partStart=function(){var t=this.ctx,e=this.options;e.region,t.beginPath(),t.setLineWidth(e.lineWidth),t.setStrokeStyle(e.color),t.setFillStyle(e.color)},r.prototype.paintPart=function(t,e,n){var r=this.ctx,o=this.options;0==t?r.moveTo(e,n):0!=t&&t%o.partDotsCount==0?r.moveTo(e,n):r.lineTo(e,n)},r.prototype.partEnd=function(t){var e=this.ctx,n=this.options,r=n.gradientColor,o=n.region,i=this.getX(t),a=this.getY(t);void 0===r?(e.stroke(),e.closePath()):(e.stroke(),e.setStrokeStyle("rgba(0, 0, 0, 0)"),e.lineTo(i,a),e.lineTo(i,o.height/2),e.lineTo(this.startX,o.height/2),e.stroke(),e.setFillStyle(r[0]),e.closePath(),e.fill())},r.prototype.partLine=function(t){var e=this.ctx,n=this.options,r=n.region,o=this.getX(t-1);this.getX(t),e.beginPath(),e.setStrokeStyle(n.splitLine),e.setFillStyle("rgba(0, 0, 0, 0)"),e.setLineWidth(n.lineWidth),e.moveTo(o,-r.height/2),e.lineTo(o,r.height/2),e.stroke(),e.closePath()},r.prototype.end=function(t){var e=this.ctx;this.options,this.partEnd(t),e.restore()},r.prototype.setStartX=function(t){var e=this.getX(t);this.startX=e},r.prototype.paintItem=function(t,e,n){var r=this.options;r.data.items.length,r.partCount>1?(0!=t&&t%r.partDotsCount==0&&(this.partEnd(t),this.partLine(t+1),this.partStart(),this.setStartX(t)),this.paintPart(t,e,n)):this.paintPart(t,e,n)},t.exports=r},PLez:function(t,e,n){function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];console.error("processStock",r);var o=/<a[^>]*>[^>]+<\/a>/g,i=[];if(!t)return i;if(t.match(o)){var a=t.match(o);t.split(o).forEach(function(t,o){t&&i.push({type:e?"strong":r?"quote":"plain",info:t});var u=/<a[^>]*>([^>]+)<\/a>/g,s=a[o];if(s&&s.split(u)){var c={type:e?"strong-stock":"stock",info:s.split(u)[1]};try{var l=s.match(/stock:\/\/([\w|\.]*)\//)[1];l&&(c.symbol=l,n.push(l))}catch(t){console.log("catch",s)}i.push(c)}})}else{var u=t.split(/<div[^>]*disclaimer[^>]*>([^>]+)<\/div>/g),s=void 0;s=3===u.length?{type:"grey",info:u[1]}:{type:e?"strong":r?"quote":"plain",info:t},i.push(s)}return i}t.exports=function(){var t=[],e=[];return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(n){"text"===n.type?(n=function(t,e){var n=/<\/?strong>/gi,o=[];if(!t.info)return o;if(t.info=t.info.replace(/<\w+[^>]*>|<\/\w+>/gm,""),t.info.match(n))for(var i=t.info.split(n),a=0;a<i.length;a++){var u=i[a];o=a%2==0?o.concat(r(u,!1,e,"quote"===t.tag)):o.concat(r(u,!0,e,"quote"===t.tag))}else o=o.concat(r(t.info,!1,e,"quote"===t.tag));return{textlist:o,type:"text"}}(n=function(t){var e=t.info;return e?(t.info=e.replace(/\&ldquo;/g,"“").replace(/\&rdquo;/g,"”").replace(/\&amp;/g,"&"),t):t}(n),e),t.push(n)):t.push(n)}),{list:t,stockList:e}}},Pf15:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(n("kiBT")),i=r(n("OvRC")),a=r(n("pFYg"));e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,a.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},PzxK:function(t,e,n){var r=n("D2L2"),o=n("sB3e"),i=n("ax3d")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},QNXi:function(t,e,n){t.exports={str2Date:function(t,e){e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e||"%Y-%M-%d %h:%m:%s").replace(/\-/g,"\\-")).replace(/\|/g,"\\|")).replace(/\./g,"\\.")).replace(/\+/g,"\\+")).replace("%Y","(\\d{4})")).replace("%M","(\\d{1,2})")).replace("%d","(\\d{1,2})")).replace("%h","(\\d{1,2})")).replace("%m","(\\d{1,2})")).replace("%s","(\\d{1,2})");var n=new RegExp("^"+e+"$").exec(t),r=(n[1]||0)-0,o=(n[2]||1)-1,i=(n[3]||0)-0,a=(n[4]||0)-0,u=(n[5]||0)-0,s=(n[6]||0)-0;return new Date(r,o,i,a,u,s)},date2Str:function(t,e,n){var r=t.getFullYear(),o=t.getMonth()+1,i=t.getDate(),a=t.getHours(),u=t.getMinutes(),s=t.getSeconds();return n&&(o=o<10?"0"+o:o,i=i<10?"0"+i:i,a=a<10?"0"+a:a,u=u<10?"0"+u:u,s=s<10?"0"+s:s),e=(e=(e=e||"%Y-%M-%d %h:%m:%s").replace(/%Y/g,r).replace(/%M/g,o).replace(/%d/g,i).replace(/%h/g,a).replace(/%m/g,u).replace(/%s/g,s)).replace(/YYYY/g,r).replace(/MM/g,o).replace(/dd/g,i).replace(/hh/g,a).replace(/mm/g,u).replace(/ss/g,s)},dateDiff:function(t,e,n){var r=0;switch(n){case"Y":r=t.getFullYear()-e.getFullYear();break;case"M":r=12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth());break;case"d":r=(t-e)/864e5;break;case"h":r=(t-e)/36e5;break;case"m":r=(t-e)/6e4;break;case"s":r=(t-e)/1e3;break;default:r=t-e}return r},dateAdd:function(t,e,n){switch(t){case"y":e.setFullYear(e.getFullYear()+n);break;case"q":e.setMonth(e.getMonth()+3*n);break;case"n":e.setMonth(e.getMonth()+n);break;case"d":e.setDate(e.getDate()+n);break;case"w":e.setDate(e.getDate()+7*n);break;case"h":e.setHours(e.getHours()+n);break;case"m":e.setMinutes(e.getMinutes()+n);break;case"s":e.setSeconds(e.getSeconds()+n);break;case"i":default:e.setMilliseconds(e.getMilliseconds()+n)}return e},leapYear:function(t){var e=[31,28,31,30,31,30,31,31,30,31,30,31],n=!1,r=365;return t.getFullYear()%4==0&&t.getFullYear()%100!=0||t.getFullYear()%400==0?(e.splice(1,1,29),n=!0,r=366):(e.splice(1,1,28),n=!1,r=365),{isLeapYear:n,days:e,yearDays:r,monthDays:e[t.getMonth()]}}}},QRG4:function(t,e,n){var r=n("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"QWe/":function(t,e,n){n("crlp")("observable")},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},RPLV:function(t,e,n){var r=n("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,e,n){var r=n("R9M2"),o=n("dSzd")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},Rrel:function(e,n,r){var o=r("TcQ7"),i=r("n0T6").f,a={}.toString,u="object"==("undefined"==typeof window?"undefined":t(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(t){return u&&"[object Window]"==a.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(o(t))}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SWxZ:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=getApp();e.default={props:{visible:{type:Boolean},type:{type:Number,value:1},notConfirmList:{type:Array}},data:function(){return{}},methods:{onCancel:function(){console.log("cancel"),this.nextPopupState&&wx.setStorageSync("180823mpflow",this.nextPopupState),this.visible=!1},onConfirm:function(){var t=this;console.log("confirm");for(var e=[],n=0;n<this.notConfirmList.length;n++)e.push(this.notConfirmList[n].id);var o={type:1,agreements:e=e.join(",")};r.wx.request({url:r.CGI_PREFIX+"user_agreement.fcgi",data:o,success:function(e){if("0"===e.retcode){t.visible=!1;var n=wx.getStorageSync("PROTOCOL/USERAGREEMENTLIST");n.val.agreements_not_confirm="",t.notConfirmList=[];var r=(new Date).getTime();try{wx.setStorageSync("PROTOCOL/USERAGREEMENTLIST",{val:n.val,time:r})}catch(t){console.log("set storage userAgreementList fail")}}else"0"!==e.retcode&&wx.showToast({title:"网络异常请重试",icon:"none",duration:2e3})}})},clickProtocol:function(t){var e=t.currentTarget.dataset.from,n=getCurrentPages(),r=n[n.length-1].route;this.frompage=r;var o=void 0,i=void 0;if("about"!==e)return o=t.currentTarget.dataset.url,i="/pages/additional/webview/index?url="+encodeURIComponent(o)+"&frompage="+r,wx.navigateTo({url:i}),!1;o=t.target.dataset.url,i="/pages/additional/webview/index?url="+encodeURIComponent(o)+"&frompage="+r}}}},SZoR:function(t,e,n){var r;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.PCWEIXIN="pcweixin",t.WEIXIN="weixin",t.MQQ="mqq",t.MINA="mina",t.QQNEWS="qqnews",t.ZXG="zxg"}(r=e.EPLATFORM||(e.EPLATFORM={})),e.default=function(t){var e,n=t.match(/QQ\/([\d.]+)/i)&&t.match(/QQ\/([\d.]+)/i)[1],o=Boolean(n),i=t.match(/MicroMessenger\/([\d.]+)/i)&&t.match(/MicroMessenger\/([\d.]+)/i)[1].split(".").slice(0,3).join("."),a=Boolean(i),u=t.match(/qqstock\/([\d.]+)/i)&&t.match(/qqstock\/([\d.]+)/i)[1],s=Boolean(u),c=t.match(/MicroMessenger\/([\d.]+)/i)&&t.match(/MicroMessenger\/([\d.]+)/i)[1].split(".").slice(0,3).join("."),l=/(Windows|Mac)Wechat/i.test(t),f=a&&/miniProgram/i.test(t),p=t.match(/qqnews\/([\d.]+)/i)&&t.match(/qqnews\/([\d.]+)/i)[1],h=Boolean(p);e={VER_MQQ:n,IS_MQQ:o,VER_WEIXIN:i,IS_WEIXIN:a,VER_ZXG:u,IS_ZXG:s,VER_PCWEIXIN:c,IS_PCWEIXIN:l,IS_MINA:f,VER_QQNEWS:p,IS_QQNEWS:h};var d="0.0.0",v="unknown",g="";o?(v=r.MQQ,d=n,g="手机QQ"):l?(v=r.PCWEIXIN,d=c,g="微信"):f?(v=r.MINA,g="微信"):a?(v=r.WEIXIN,d=i,g="微信"):h?(v=r.QQNEWS,d=p,g="腾讯新闻"):s&&(v=r.ZXG,d=u,g="自选股");var y={},m={},_=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),x=t.match(/(Android);?[\s\/]+([\d.]+)?/),b=!!t.match(/\(Macintosh\; Intel /),w=t.match(/(iPad).*OS\s([\d_]+)/),S=t.match(/(iPod)(.*OS\s([\d_]+))?/),O=!w&&t.match(/(iPhone\sOS)\s([\d_]+)/),A=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),k=t.match(/Windows Phone ([\d.]+)/),E=A&&t.match(/TouchPad/),C=t.match(/Kindle\/([\d.]+)/),T=t.match(/Silk\/([\d._]+)/),P=t.match(/(BlackBerry).*Version\/([\d.]+)/),j=t.match(/(BB10).*Version\/([\d.]+)/),M=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),D=t.match(/PlayBook/),I=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),L=t.match(/Firefox\/([\d.]+)/),F=t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),R=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),N=!I&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),z=N||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);return _&&(m.webkit=!!_,m.version=_[1]),x&&(y.android=!0,y.version=x[2]),O&&!S&&(y.ios=y.iphone=!0,y.version=O[2].replace(/_/g,".")),w&&(y.ios=y.ipad=!0,y.version=w[2].replace(/_/g,".")),S&&(y.ios=y.ipod=!0,y.version=S[3]?S[3].replace(/_/g,"."):void 0),k&&(y.wp=!0,y.version=k[1]),A&&(y.webos=!0,y.version=A[2]),E&&(y.touchpad=!0),P&&(y.blackberry=!0,y.version=P[2]),j&&(y.bb10=!0,y.version=j[2]),M&&(y.rimtabletos=!0,y.version=M[2]),D&&(m.playbook=!0),C&&(y.kindle=!0,y.version=C[1]),T&&(m.silk=!0,m.version=T[1]),!T&&y.android&&t.match(/Kindle Fire/)&&(m.silk=!0),I&&(m.chrome=!0,m.version=I[1]),L&&(m.firefox=!0,m.version=L[1]),F&&(y.firefoxos=!0,y.version=F[1]),R&&(m.ie=!0,m.version=R[1]),z&&(b||y.ios)&&(m.safari=!0,y.ios||(m.version=z[1])),N&&(m.webview=!0),y.tablet=!!(w||D||x&&!t.match(/Mobile/)||L&&t.match(/Tablet/)||R&&!t.match(/Phone/)&&t.match(/Touch/)),y.phone=!(y.tablet||y.ipod||!(x||O||A||P||j||I&&t.match(/Android/)||I&&t.match(/CriOS\/([\d.]+)/)||L&&t.match(/Mobile/)||R&&t.match(/Touch/))),{env:e,platformVersion:d,plarformName:g,platform:v,os:y,browser:m}}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},SldL:function(e,n){!function(n){function r(t,e,n,r){var a=e&&e.prototype instanceof i?e:i,u=Object.create(a.prototype),s=new h(r||[]);return u._invoke=function(t,e,n){var r=A;return function(i,a){if(r===E)throw new Error("Generator is already running");if(r===C){if("throw"===i)throw a;return v()}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var s=l(u,n);if(s){if(s===T)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===A)throw r=C,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=E;var c=o(t,e,n);if("normal"===c.type){if(r=n.done?C:k,c.arg===T)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=C,n.method="throw",n.arg=c.arg)}}}(t,n,s),u}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function u(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(e){var n;this._invoke=function(r,i){function a(){return new Promise(function(n,a){!function n(r,i,a,u){var s=o(e[r],e,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==(void 0===l?"undefined":t(l))&&m.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,a,u)},function(t){n("throw",t,a,u)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},u)}u(s.arg)}(r,i,n,a)})}return n=n?n.then(a,a):a()}}function l(t,e){var n=t.iterator[e.method];if(n===g){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=g,l(t,e),"throw"===e.method))return T;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return T}var r=o(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,T;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=g),e.delegate=null,T):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,T)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=g,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:g,done:!0}}var g,y=Object.prototype,m=y.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},x=_.iterator||"@@iterator",b=_.asyncIterator||"@@asyncIterator",w=_.toStringTag||"@@toStringTag",S="object"==(void 0===e?"undefined":t(e)),O=n.regeneratorRuntime;if(O)S&&(e.exports=O);else{(O=n.regeneratorRuntime=S?e.exports:{}).wrap=r;var A="suspendedStart",k="suspendedYield",E="executing",C="completed",T={},P={};P[x]=function(){return this};var j=Object.getPrototypeOf,M=j&&j(j(d([])));M&&M!==y&&m.call(M,x)&&(P=M);var D=u.prototype=i.prototype=Object.create(P);a.prototype=D.constructor=u,u.constructor=a,u[w]=a.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,w in t||(t[w]="GeneratorFunction")),t.prototype=Object.create(D),t},O.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[b]=function(){return this},O.AsyncIterator=c,O.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return O.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(D),D[w]="Generator",D[x]=function(){return this},D.toString=function(){return"[object Generator]"},O.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},O.values=d,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=g)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=g),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),u=m.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,T):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),T},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:d(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=g),T}}}}(function(){return this}()||Function("return this")())},Syvq:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var n=(0,r.slice)(e.args);n.unshift("["+e.name+"]"+(t.printTime?"["+e.time+"]":"")+":");var o=e.level;"log"!==o&&"error"!==o||(o="debug"),console&&console[o].apply(console,n)}};var r=n("+7rG")},T894:function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("P90k"),s=n("hdO0"),c=n("znIw");(r.prototype=new i).initialize=function(){this.ctx;var t,e,n=this.options,r=n.MAs,i={},a=n.data.items,u=[],s=0;for(var c in void 0===n.isDraw&&(n.isDraw=!0),a.length>n.maxCount?(s=a.length-n.maxCount,u=a.slice(s)):(s=0,u=a),o.each(u,function(n,r){t=void 0===t?parseFloat(n.high):parseFloat(o.isMore(n.high,t)?n.high:t),e=void 0===e?parseFloat(n.low):parseFloat(o.isLess(n.low,e)?n.low:e)}),o.each(r,function(r,u){var c=o.calcMAPrices(a,s,n.maxCount,r.daysCount),l=Math.max.apply([],c),f=Math.min.apply([],c);t=o.isMore(l,t)?l:t,e=o.isLess(f,e)?f:e,i["day"+r.daysCount]={region:n.region,data:{items:c},color:r.color,maxCount:n.maxCount}}),n.high=t,n.low=e,void 0===n.middleValue&&(n.middleValue=(t+e)/2),n.maxDiff=Math.max(t-n.middleValue,e-n.middleValue),i)i[c].middleValue=n.middleValue,i[c].maxDiff=n.maxDiff;this.maOptions=i,this.candleOptions={region:n.region,data:{items:u},riseColor:n.riseColor,dropColor:n.dropColor,normalColor:n.normalColor,maxminColor:n.defaultColor,maxCount:n.maxCount,middleValue:n.middleValue}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,horizontalLine:e.horizontalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.getYAxisColor=function(t){var e=this.options;return t==e.middleValue?e.normalColor:t>e.middleValue?e.riseColor:e.dropColor},r.prototype.paintYAxisLeft=function(){this.ctx;var t=this.options,e=t.middleValue,n=t.maxDiff;if(t.yAxisLeft){for(var r=t.yAxisLeft,i=[],a=2*n/(r.axisCount-1),u=0;u<r.axisCount;u++){var s=o.add(e,n-a*u);i.push({text:s.toFixed(2),color:r.color})}r.data={items:i},new c(this.ctx,r).paint()}},r.prototype.paintMAs=function(){var t=this.ctx;this.options;for(var e in this.maOptions){var n=this.maOptions[e];new u(t,n).paint()}},r.prototype.paint=function(){var t=this.ctx,e=this.options;this.initialize(),this.paintGrid(),this.paintYAxisLeft(),this.paintMAs(),new s(t,this.candleOptions).paint(),!0===e.isDraw&&t.draw(!0)},t.exports=r},TcQ7:function(t,e,n){var r=n("MU5D"),o=n("52gC");t.exports=function(t){return r(o(t))}},Tjdp:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAMAAADKfsO6AAAAe1BMVEUAAADm5uavr6+4uLiurq6urq6vr6+vr6+0tLTKysqvr6+vr6+vr6+urq6vr6+urq6vr6+vr6+ysrKxsbGwsLCwsLCvr6+vr6+vr6+urq6vr6+vr6+vr6+urq6vr6+vr6+wsLCxsbGurq6urq6/v7+wsLCvr6+xsbGurq4aDNiVAAAAKHRSTlMAAoAK/fmokxcG9eLKxL64oE9FMyAO8Orb1bKumYuEfGpZKRMIdGM76wTPZgAAAJ9JREFUKM+N0EcSglAURFE/OWdEgmSV/a9QmtnvemXZwzPrexuPc1Z+oz3BdvEnu+DgQ6oG8L1kzn5wszI74LBi7kX2O/DDY05F3hNwuxGbF0c1cwyOmevoYpPYC8CddMbOhXoWoXHhouN8YG8dFws461jYwJeOZQCcdFwb4KhjFQJdHbcWOFCVCJgpobejhPO9Es6nvnA+2amocW6izl9W3RpQstMuPgAAAABJRU5ErkJggg=="},To3L:function(t,e,n){var r=n("+E39"),o=n("lktj"),i=n("1kS7"),a=n("NpIQ"),u=n("sB3e"),s=n("MU5D"),c=Object.assign;t.exports=!c||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,l=1,f=i.f,p=a.f;c>l;)for(var h,d=s(arguments[l++]),v=f?o(d).concat(f(d)):o(d),g=v.length,y=0;g>y;)h=v[y++],r&&!p.call(d,h)||(n[h]=d[h]);return n}:c},U5ju:function(t,e,n){n("M6a0"),n("zQR9"),n("+tPU"),n("CXw9"),n("EqBC"),n("jKW+"),t.exports=n("FeBl").Promise},Ujqn:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("JJFI"));e.default=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=i.default.DEFAULT),void 0===n&&(n={}),e=i.transformError(e),new Promise(function(o,i){t&&window.setTimeout(function(){i(r({},e,{context:n}))},t)})}},Uqg3:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=[],o=function(t){return void 0===t&&(t=""),t+"_"+Math.random().toString(36).slice(2)};e.default=function(t){for(var e;!e||r.includes(e);)e=o(t);return e}},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},VBVG:function(t,e,n){var r=function(t){return t&&t.__esModule?t:{default:t}}(n("//Fk")),o=n("02iA"),i=(n("NpZb"),n("/1L7")),a=["_qluin","_qlskey","_lastlogin","_srcuin","_cftuin"],u=["d_qluin","d_qlskey","d_lastlogin"],s=!1,c=[],l={loginCGI:"https://wzq.tenpay.com/cgi-bin/login.fcgi",zxgLoginCGI:"https://wzq.tenpay.com/cgi-bin/login.fcgi",getDealerCodeCGI:"https://wzq.tenpay.com/cgi-bin/auth.cgi",qlappid:i&&i.appid,isLogin:function(){var t=this.getLoginInfo(a),e=(new Date).getTime()-t.lastlogin>=5184e5;return!!t.qluin&&!!t.qlskey&&!e},isDealerLogin:function(){var t=this.getDealerLoginInfo(),e=(new Date).getTime()-t.lastlogin>=828e5;return!!t.qluin&&!!t.qlskey&&!e},getLoginInfo:function(t){var e={};t=void 0===t?a:t;for(var n=0;n<t.length;n++){var r=t[n];e[r.replace(/(_|d_)/,"")]=wx.getStorageSync(r)}return e},getLoginInfoPromise:function(t){var e=this;return new r.default(function(n,r){n(e.getLoginInfo(t))})},getDealerLoginInfo:function(){return this.getLoginInfo(u)},reLogin:function(t){var e=this;c.push(t),s||(s=!0,wx.login({success:function(t){t&&t.code?e.goLogin({url:e.zxgLoginCGI,code:t.code,outputtype:3,success:function(){c.length&&c.forEach(function(t){t()})},complete:function(){s=!1}}):(s=!1,wx.showModal({title:"",content:"获取用户登录态失败："+t.errMsg,showCancel:!1,confirmText:"我知道了",success:function(t){}}))},fail:function(t){s=!1,wx.showModal({title:"",content:"调用wx.login失败："+t.errMsg,showCancel:!1,confirmText:"我知道了"})}}))},reLoginPromise:function(t){var e=this;return new r.default(function(n,r){wx.login({success:function(o){if(o&&o.code)return n(e.goLoginPromise({url:e.zxgLoginCGI,code:o.code,outputtype:3,success:t}));wx.showModal({title:"",content:"获取用户登录态失败："+o.errMsg,showCancel:!1,confirmText:"我知道了",success:function(t){}}),r()},fail:function(t){wx.showModal({title:"",content:"调用wx.login失败："+t.errMsg,showCancel:!1,confirmText:"我知道了"}),r()}})})},goLogin:function(t){void 0===t.loginType&&(t.loginType=1),wx.request({url:t.url,data:{code:t.code,code_from:"zxgxcx"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},complete:function(){"function"==typeof t.complete&&t.complete()},success:function(e){var n=e.data;if("200"==e.statusCode)if(n&&"0"==n.retcode){for(var r=[n.qluin,n.qlskey,(new Date).getTime(),n.srcuin,n.cftuin],o=2==t.loginType?u:a,i=0;i<o.length;i++){var s=o[i];wx.setStorageSync(s,r[i])}"function"==typeof t.success&&t.success()}else wx.showModal({title:"",content:n.retmsg,showCancel:!1,confirmText:"我知道了"});else wx.showModal({title:"",content:e.errMsg,showCancel:!1,confirmText:"我知道了"})},fail:function(t){wx.showModal({title:"",content:"登录失败，请稍候再试",showCancel:!1,confirmText:"我知道了"})}})},goLoginPromise:function(t){return new r.default(function(e,n){void 0===t.loginType&&(t.loginType=1),wx.request({url:t.url,data:{code:t.code,code_from:"zxgxcx"},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},complete:function(){"function"==typeof t.complete&&t.complete()},success:function(n){var r=n.data;if("200"==n.statusCode)if(r&&"0"==r.retcode){for(var o=[r.qluin,r.qlskey,(new Date).getTime(),r.srcuin,r.cftuin],i=2==t.loginType?u:a,s=0;s<i.length;s++){var c=i[s];wx.setStorageSync(c,o[s])}"function"==typeof t.success&&t.success(),e(!0)}else wx.showModal({title:"",content:r.retmsg,showCancel:!1,confirmText:"我知道了"});else wx.showModal({title:"",content:n.errMsg,showCancel:!1,confirmText:"我知道了"})},fail:function(t){wx.showModal({title:"",content:"登录失败，请稍候再试",showCancel:!1,confirmText:"我知道了"})}})})},getDealerLoginCode:function(t,e){var n=this.getLoginInfo();wx.request({url:"https://wzq.tenpay.com/cgi-bin/auth.cgi",data:{action:"authcode",outputtype:"3",qluin:n.qluin,qlskey:n.qlskey},method:"GET",success:function(t){var n=o.resCommonHandle(t);if(!1!==n.check){var r=n.json;"function"==typeof e&&e(r)}},fail:function(t){wx.showModal({title:"",content:"获取独立部署登录凭据失败",showCancel:!1,confirmText:"我知道了"})}})}};t.exports=l},VEla:function(t,e,n){var r=n("12ER"),o=n("6c6d"),i=n("QNXi"),a=getApp(),u=n("yX63"),s=u.klineDefaultColor,c=u.minusColorConfig,l={CONST:{QFQ:"1",HFQ:"2",BFQ:"3",INDEX:{VOL:"0",MACD:"1",DMI:"3",WR:"2",BOLL:"4",KDJ:"5",OBV:"6",RSI:"7",SAR:"8",CCI:"9"},CHART_TYPE:{mins:"Mins",fiveMins:"FiveMins",day:"Day",week:"Week",month:"Month"},STOCK_TYPE:{SH_A:"0",ZQ:"1",SZ_A:"2",SZ_ZXC:"3",SZ_CY:"4",FUND:"5",SZ_B:"6",SH_B:"7",SZ_CJLTJ:"8",INDEX:"9",TP:"t",DEBT:"g",HK:"h",UNKNOW:"*"},REPORT:{INTRO:"2",FINANCEINTRO:"3",INCOMESTATEMENT:"4",BALANCESHEET:"5",CASHFLOWSTATEMENT:"6"},CHART_DATA_TYPE:{A_MINS:"A_MINS",A_FMINS:"A_FMINS",A_KLINE:"A_KLINE",H_MINS:"H_MINS",H_FMINS:"H_FMINS",H_KLINE:"H_KLINE",US_MINS:"US_MINS",US_FMINS:"US_FMINS",US_KLINE:"US_KLINE"},SCREEN_MODE:{portrait:"portrait",landscape:"landscape"}},passData:function(t){for(var e in t)this[e]=t[e]},getFuquanType:function(){return this.data.fqType||1},getKlineReqDataCount:function(){return this.state.isHorizontalScreen?136:79},getKlineRenderCount:function(){return this.state.isHorizontalScreen?86:60},getKlineDateType:function(){return this.data.onDayLine?1:this.data.onWeekLine?2:this.data.onMonthLine?3:1},getMarketStateText:function(t,e,n){return"D"==n?"退市":"U"==n?"待上市":1==e?"停牌":["未开盘","集合竞价","前市","午休","后市","集合竞价","已收盘"][t]},getTransFiveFontsize:function(t){return parseInt(t,10)>=1e5&&parseInt(t,10)<1e6?"smallft":parseInt(t,10)>=1e6?"smallerft":""},formatServerTime:function(t,e){var n=i.date2Str(new Date(1e3*t),"%M-%d %h:%m",!0),r="";e(n),setInterval(function(){t=parseInt(t,10)+10,r=i.date2Str(new Date(1e3*t),"%M-%d %h:%m",!0),e(r)},1e4)},formatMinData:function(t,e){var n=this.data.stockInfo,r=this.state.urlParam,i=[],u={quote:a.util.extend({},n),mins:[]};try{var s=0,c=n.zsj;i=t.data[this.getMarketEn(e)+r.scode].data.data;for(var l=0;l<i.length;l++)if(i[l].indexOf(" ")>0){var f=i[l].split(" "),p={time:f[0].substr(0,2)+":"+f[0].substr(2,4),price:f[1],zdf:o.mul(o.div(o.sub(f[1],c),c),100).toFixed(2),zde:o.sub(f[1],c),volume:o.sub(f[2],s),amount:f[1]*(f[2]-s)*100};p.zde>0?(p.zdColor="red",p.zde="+"+p.zde,p.zdf="+"+p.zdf):0==p.zde?p.zdColor="":p.zdColor="green",u.mins.push(p),f[0],f[2],f[1],f[2],s=f[2]}}catch(t){console.log(t)}return u},getRiseDropNum:function(t,e){console.log("market",e),console.log("market",e),this.data.stockInfo;var n,r=this.state.urlParam;try{if("2"==e)n={riseNum:(o=t.data[this.getMarketEn(e)+r.scode].qt.zhishu[r.scode])[0],flatNum:o[1],dropNum:o[2]};else if("0"==e||"1"==e){var o;n={riseNum:(o=t.data[this.getMarketEn(e)+r.scode].qt.zhishu)[2],flatNum:o[3],dropNum:o[4]}}}catch(t){console.log(t,"getRiseDropNum"),n={}}return n},format5DaysData:function(t,e){var n=this.data.stockInfo,r=this.state.urlParam,i={quote:a.util.extend({},n),isFiveAvgLine:!0,fiveAgoPreClose:n.zsj,mins:[],dateArr:[]};try{for(var u=0,s=[],c=0,l=t.data[this.getMarketEn(e)+r.scode].data.reverse(),f=0;f<l.length;f++){s.push(l[f].date.substr(4,4).replace(/(.{2})/,"$1/")),c=l[0].prec||n.zsj,u=0;for(var p=0;p<l[f].data.length;p++)if(l[f].data[p].indexOf(" ")>0){var h=l[f].data[p].split(" "),d=p>0&&l[f].data[p-1].split(" ");if(p<=120&&p%4==0||p>123&&p%4==0||241==p){d&&(u=parseInt(d[2],10));var v={time:h[0].substr(0,2)+":"+h[0].substr(2,4),price:h[1],zdf:o.mul(o.div(o.sub(h[1],c),c),100).toFixed(2),zde:o.sub(h[1],c),volume:o.sub(h[2],u),amount:h[1]*(h[2]-u)*100};v.zde>0?(v.zdColor="red",v.zde="+"+v.zde,v.zdf="+"+v.zdf):0==v.zde?v.zdColor="":v.zdColor="green",i.mins.push(v),h[0],h[2],h[1],h[2]}}0==f&&(i.fiveAgoPreClose=l[f].prec||i.fiveAgoPreClose)}i.dateArr=s}catch(t){console.log(t)}return i},formatKlineData:function(t,e,n){for(var r=this,i=this.state.urlParam,a={low:0,high:0,ks:[]},u=t.data[this.getMarketEn(e)+i.scode][function(t){return["qfq","hfq",""][r.getFuquanType()-1]+t}(n)]||t.data[this.getMarketEn(e)+i.scode][n],s=[],c=0;c<u.length;c++){var l=0==c?u[c]:u[c-1],f=u[c],p={quoteTime:f[0],open:parseFloat(f[1]).toFixed(2),close:parseFloat(f[2]).toFixed(2),high:parseFloat(f[3]).toFixed(2),low:parseFloat(f[4]).toFixed(2),volume:parseInt(f[5],10),zsj:parseFloat(l[2]).toFixed(2),zdf:o.mul(o.div(o.sub(f[2],l[2]),l[2]),100).toFixed(2),zde:o.sub(f[2],l[2]),fh:f[6]};p.zf=(100*(p.high-p.low)/p.zsj).toFixed(2),p.zde>0?(p.zdColor="red",p.zde="+"+p.zde,p.zdf="+"+p.zdf):0==p.zde?p.zdColor="":p.zdColor="green",p.highColor=p.high>p.zsj?"red":p.high==p.zsj?"":"green",p.lowColor=p.low>p.zsj?"red":p.low==p.zsj?"":"green",p.openColor=p.open>p.zsj?"red":p.open==p.zsj?"":"green",p.closeColor=p.close>p.zsj?"red":p.close==p.zsj?"":"green",0==a.ks.length?(a.low=p.low,a.high=p.high):(a.low=Math.min(a.low,p.low),a.high=Math.max(a.high,p.high)),a.ks.push(p)}var h=this.getKlineRenderCount();if(u.length<h)s.push(u[0][0],u[parseInt(u.length/2,10)][0],u[u.length-1][0]);else{var d=u.length;s.push(u[d-h][0],u[parseInt(d-parseInt(h/2,10),10)][0],u[u.length-1][0])}return a},getPrimaryOption:function(t){Math.ceil(1*t.height/4);var e=(t.height,c[t.skin]),n={isHorizontalScreen:!1,dropColor:e.drop,riseColor:e.rise,normalColor:"#b2b2b2",maxDotsCount:242,needPaintAvgPriceLine:!0,backgroundColor:"#ffffff",borderColor:e.border,zoomButtonOptions:{color:e.zoombg},minsChart:{region:{},priceLineColor:e.priceLine,avgPriceLineColor:e.avgLine,middleLineColor:e.middledashLine,otherSplitLineColor:e.border,borderColor:e.border,fillColor:"rgba(66,128,242,0.1)",priceLineWidth:1,gridColor:e.border,priceLineFullGradientColor:e.fill,kchFillColor:"rgba(0, 122, 255, 0.1)",kchTextColor:"#868E9E",yAxisLeft:{},yAxisRight:{},splitLine:e.splitLine},xAxis:{font:12,fontHeight:18,color:"#b2b2b2",strokeStyle:e.border,lineWidth:1,region:{}},volume:{region:{},verticalLine:4,gridColor:e.border,bar:{riseColor:e.rise,dropColor:e.drop}}},r=a.util.extend({},n);return a.util.extend(r,{isHorizontalScreen:t.isHorizontalScreen,width:t.width,height:t.height,maxDotsCount:t.maxDotsCount}),a.util.extend(r.minsChart,{region:t.minsChart.region,horizontalLine:t.minsChart.horizontalLine||0,verticalLine:t.minsChart.verticalLine||0,yAxisLeft:t.minsChart.yAxisLeft,yAxisRight:t.minsChart.yAxisRight}),a.util.extend(r.xAxis,{region:t.xAxis.region}),a.util.extend(r.volume,{region:t.volume.region,yAxis:t.volume.yAxis}),a.util.extend(r,{showZoomButton:t.showZoomButton}),a.util.extend(r,{xAxisArr:t.xAxisArr,unit:t.unit}),r},getKlineOptions:function(t){Math.ceil(1*t.height/4);var e=(t.height,s[t.skin]),n={isHorizontalScreen:!1,riseColor:e.rise,dropColor:e.drop,grayColor:"#9299aa",normalColor:"#000000",defaultColor:"#888888",zoomButtonOptions:{color:e.zoombg},lineWidth:1,maxRenderCount:this.getKlineRenderCount(),kline:{region:{},horizontalLine:2,verticalLine:3,gridColor:e.border,MAs:[{color:"#F126A5",daysCount:5},{color:"#f4cf1e",daysCount:10},{color:"#27A1E8",daysCount:20}]},xAxis:{region:{},font:10,fontHeight:18,color:"#b2b2b2",strokeStyle:e.border,lineWidth:1,scalerCount:3},volume:{region:{},verticalLine:3,gridColor:e.border,bar:{riseColor:e.rise,dropColor:e.drop},yAxis:{}}},r=a.util.extend({},n);return a.util.extend(r,{isHorizontalScreen:t.isHorizontalScreen,width:t.width,height:t.height,data:t.data}),a.util.extend(r.kline,{region:t.kline.region,yAxisLeft:t.kline.yAxisLeft}),a.util.extend(r.xAxis,{region:t.xAxis.region}),a.util.extend(r.volume,{region:t.volume.region,yAxis:t.volume.yAxis}),a.util.extend(r,{showZoomButton:t.showZoomButton,showFqLabel:this.getFqLabelName(t.showFqLabel),unit:t.unit||"",maxCount:t.maxCount,immediatelyDrawIndicator:t.immediatelyDrawIndicator||!0}),r},getFqLabelName:function(t){return["","前复权","后复权","不复权"][t]||""},drawVol:function(t,e){var n=s[e.skin],o=e.ks,i=[];a.util.each(o,function(t,e){i.push({volume:t.volume,high:t.high,low:t.low,open:t.open,close:t.close,zsj:t.zsj})}),a.util.extend(e,{data:{items:i},bar:{riseColor:n.rise,dropColor:n.drop},vGridXPos:r.vGridXPos}),new r.Vol(t,e).paint()},drawMacd:function(t,e){var n=s[e.skin];a.util.extend(e,{difColor:"#4280f2",deaColor:"#ffa337",riseColor:n.rise,dropColor:n.drop,middleValue:0,vGridXPos:r.vGridXPos}),new r.Macd(t,e).paint()},drawWr:function(t,e){a.util.extend(e,{horizontalLine:3,wr1Color:"#4280f2",wr2Color:"#ffa337",vGridXPos:r.vGridXPos}),new r.Wr(t,e).paint()},drawDmi:function(t,e){a.util.extend(e,{adxColor:"#9f2cc5",adxrColor:"#31A632",mdiColor:"#ffa337",pdiColor:"#4280f2",vGridXPos:r.vGridXPos}),new r.Dmi(t,e).paint()},drawBoll:function(t,e){var n=e.ks,o=[];a.util.each(n,function(t,e){o.push({high:t.high,low:t.low,open:t.open,close:t.close})}),a.util.extend(e,{bollData:e.data,hlocData:o,upperColor:"#f9ef56",lowerColor:"#9f2cc5",middleColor:"#ffa337",hlocColor:"#4280f2",vGridXPos:r.vGridXPos}),new r.Boll(t,e).paint()},drawKdj:function(t,e){a.util.extend(e,{horizontalLine:3,kColor:"#4280f2",dColor:"#ffa337",jColor:"#9f2cc5",vGridXPos:r.vGridXPos}),new r.Kdj(t,e).paint()},drawObv:function(t,e){a.util.extend(e,{obvColor:"#4280f2",vGridXPos:r.vGridXPos}),new r.Obv(t,e).paint()},drawRsi:function(t,e){a.util.extend(e,{rsi1Color:"#4280f2",rsi2Color:"#ffa337",rsi3Color:"#9f2cc5",vGridXPos:r.vGridXPos}),new r.Rsi(t,e).paint()},drawSar:function(t,e){var n=s[e.skin],o=e.ks,i=[];a.util.each(o,function(t,e){i.push({high:t.high,low:t.low,open:t.open,close:t.close})}),a.util.extend(e,{dotsData:e.data,hlocData:i,riseColor:n.rise,dropColor:n.drop,hlocColor:"#4280f2",vGridXPos:r.vGridXPos}),new r.Sar(t,e).paint()},drawCci:function(t,e){a.util.extend(e,{cciColor:"#4280f2",vGridXPos:r.vGridXPos}),new r.Cci(t,e).paint()},switchTransDetail:function(t){var e=t.currentTarget.dataset;switch(parseInt(e.type)){case 1:this.setData({showFiveTrans:"",showBillDetail:"hide",showBigBill:"hide"});break;case 2:this.setData({showFiveTrans:"hide",showBillDetail:"",showBigBill:"hide"}),this.queryStockBillDetail(6);break;case 3:this.setData({showFiveTrans:"hide",showBillDetail:"hide",showBigBill:""}),this.queryStockBillDetail(7)}},formatHKKlineData:function(t,e,n,r){n=n.toLowerCase();var i=this,a=this.state.urlParam.scode,u={low:0,high:0,ks:[]};try{for(var s=t.data[this.getMarketEn(e)+a][function(t){return["qfq","hfq",""][i.getFuquanType()-1]+t}(n)]||t.data[this.getMarketEn(e)+a][n],c=0;c<s.length;c++){var l=0==c?s[c]:s[c-1],f=s[c],p={quoteTime:f[0],open:parseFloat(f[1],10),close:parseFloat(f[2],10),high:parseFloat(f[3],10),low:parseFloat(f[4],10),volume:parseInt(f[5],10),preClose:parseFloat(l[2],10),fh:f[6],zsj:parseFloat(l[2]).toFixed(2),zdf:o.mul(o.div(o.sub(f[2],l[2]),l[2]),100).toFixed(2),zde:o.sub(f[2],l[2])};p.zf=(100*(p.high-p.low)/p.zsj).toFixed(2),p.zde>0?(p.zdColor="red",p.zde="+"+p.zde,p.zdf="+"+p.zdf):0==p.zde?p.zdColor="":p.zdColor="green",p.highColor=p.high>p.zsj?"red":p.high==p.zsj?"":"green",p.lowColor=p.low>p.zsj?"red":p.low==p.zsj?"":"green",p.openColor=p.open>p.zsj?"red":p.open==p.zsj?"":"green",p.closeColor=p.close>p.zsj?"red":p.close==p.zsj?"":"green",0==u.ks.length?(u.low=p.low,u.high=p.high):(u.low=Math.min(u.low,p.low),u.high=Math.max(u.high,p.high)),u.ks.push(p)}}catch(t){console.log(t)}return u},formatHKFiveData:function(t,e){var n=this.data.stockInfo,r=this.state.urlParam,i=a.util.extend({},n),u={quote:i,isFiveAvgLine:!0,fiveAgoPreClose:i.zsj,mins:[],xAxis:[]};try{for(var s=0,c=[],l=0,f=t.data[this.getMarketEn(e)+r.scode].data.reverse(),p=0;p<f.length;p++){c.push(f[p].date.substr(4,4).replace(/(.{2})/,"$1/")),s=0,l=f[0].prec||n.zsj,4==p&&""!=f[p].data[f[p].data.length-1]&&f[p].data.splice(150,1);for(var h=0;h<f[p].data.length;h++)if(f[p].data[h].indexOf(" ")>0){var d=f[p].data[h].split(" "),v=h>0&&f[p].data[h-1].split(" ");if(h<=150&&h%4==0||h>=151&&(h+1)%4==0||330==h){v&&(s=parseInt(v[2],10));var g={time:d[0].substr(0,2)+":"+d[0].substr(2,4),price:d[1],volume:d[2]-s,amount:d[1]*(d[2]-s)*100,zdf:o.mul(o.div(o.sub(d[1],l),l),100).toFixed(2),zde:o.sub(d[1],l)};g.zde>0?(g.zdColor="red",g.zde="+"+g.zde,g.zdf="+"+g.zdf):0==g.zde?g.zdColor="":g.zdColor="green",u.mins.push(g),d[0],d[2],d[1],d[2]}}0==p&&(u.fiveAgoPreClose=f[p].prec||u.fiveAgoPreClose)}u.dateArr=c.slice(0)}catch(t){console.log(t),u=null}return u},formatHKMinData:function(t,e){var n=this.data.stockInfo,r=this.state.urlParam,i={quote:a.util.extend({},n),mins:[],xAxis:["09:30","12:00/13:00","16:00"]};try{for(var u=0,s=n.zsj,c=t.data[this.getMarketEn(e)+r.scode].data.data,l=0;l<c.length;l++)if(c[l].indexOf(" ")>0){var f=c[l].split(" "),p={time:f[0].substr(0,2)+":"+f[0].substr(2,4),price:f[1],volume:f[2]-u,amount:f[1]*(f[2]-u)*100,zdf:o.mul(o.div(o.sub(f[1],s),s),100).toFixed(2),zde:o.sub(f[1],s)};p.zde>0?(p.zdColor="red",p.zde="+"+p.zde,p.zdf="+"+p.zdf):0==p.zde?p.zdColor="":p.zdColor="green",i.mins.push(p),f[0],f[2],f[1],f[2],u=f[2]}}catch(t){console.log(t),i=null}return i},getChartDataType:function(t,e){return{Mins:["A_MINS","A_MINS","H_MINS","US_MINS","KCH_MINS"],FiveMins:["A_FMINS","A_FMINS","H_FMINS","US_FMINS"],Day:["A_KLINE","A_KLINE","H_KLINE","US_KLINE"],Week:["A_KLINE","A_KLINE","H_KLINE","US_KLINE"],Month:["A_KLINE","A_KLINE","H_KLINE","US_KLINE"]}[t][e]},getChartItemCount:function(t,e,n,r){r=r||"render";var o=this.getChartDataType(e,n);return{portrait:{request:{A_KLINE:320,H_KLINE:320,US_KLINE:320},render:{A_MINS:242,A_FMINS:310,A_KLINE:60,KCH_MINS:268,H_MINS:332,H_FMINS:420,H_KLINE:60,US_MINS:391,US_FMINS:495,US_KLINE:60}},landscape:{request:{A_KLINE:320,H_KLINE:320,US_KLINE:320},render:{A_MINS:242,A_FMINS:310,A_KLINE:86,KCH_MINS:268,H_MINS:332,H_FMINS:420,H_KLINE:86,US_MINS:391,US_FMINS:495,US_KLINE:86}}}[t][r][o]},formatChartData:function(t,e){var n;switch(t){case this.CONST.CHART_DATA_TYPE.A_MINS:n=this.formatMinData(e.data,e.market);break;case this.CONST.CHART_DATA_TYPE.A_FMINS:n=this.format5DaysData(e.data,e.market);break;case this.CONST.CHART_DATA_TYPE.A_KLINE:n=this.formatKlineData(e.data,e.market,e.ktype);break;case this.CONST.CHART_DATA_TYPE.H_MINS:case this.CONST.CHART_DATA_TYPE.US_MINS:n=this.formatHKMinData(e.data,e.market);break;case this.CONST.CHART_DATA_TYPE.H_FMINS:case this.CONST.CHART_DATA_TYPE.US_FMINS:n=this.formatHKFiveData(e.data,e.market);break;case this.CONST.CHART_DATA_TYPE.H_KLINE:case this.CONST.CHART_DATA_TYPE.US_KLINE:n=this.formatHKKlineData(e.data,e.market,e.ktype)}return n},isASharesTradeTime:function(t){return t>="0930"&&t<="1130"||t>="1300"&&t<="1500"},isHKSharesTradeTime:function(t){return t>="0930"&&t<="1200"||t>="1300"&&t<="1600"},getChartDataKey:function(t,e){return this.getMarketEn(t)+e},getMarketEn:function(t){return["sz","sh","hk","us"][t]},isUSShares:function(t){return"3"==t},trimCode:function(t){return(t||"").indexOf(".")>=0?t.substring(0,t.indexOf(".")):t},getPanData:function(t,e,n){var r=this.getMarketEn(e)+n;return t&&t.data&&t.data[r]&&t.data[r].pandata}};t.exports=l},VeTm:function(t,e,n){function r(t){var e=t?""+t:"";if(e.indexOf("e")>=0)return Math.abs(parseInt(e.slice(e.indexOf("e")+1),10));var n=e.split(".");return n.length>1?n[1].length:0}function o(t,e){var n=parseInt((""+t).replace(".",""),10),o=parseInt((""+e).replace(".",""),10),i=r(t)+r(e);return n*o/Math.pow(10,i)}function i(t,e){var n=Math.max(r(t),r(e));return(o(t,n=Math.pow(10,n))+o(e,n))/n}function a(t,e){return i(t,-e)}function u(t){var e,n=t[0],r=t[1],o=[n,r],i=o[0],a=o[1];return n>r&&(i=(e=[r,n])[0],a=e[1]),[i,a]}function s(t,e,n){if(t<=0)return 0;var r=b.getDigitCount(t),o=t/Math.pow(10,r),i=1!==r?b.multiply(Math.ceil(o/.05)+n,.05):b.multiply(Math.ceil(o/.1)+n,.1),a=b.multiply(i,Math.pow(10,r));return e?a:Math.ceil(a)}function c(t,e,n){var r=1,o=t;if(b.isFloat(t)&&n){var i=Math.abs(t);i<1?(r=Math.pow(10,b.getDigitCount(t)-1),o=b.multiply(Math.floor(t/r),r)):i>1&&(o=Math.floor(t))}else 0===t?o=Math.floor((e-1)/2):n||(o=Math.floor(t));var a=Math.floor((e-1)/2);return m(y(function(t){return b.sum(o,b.multiply(t-a,r))}),g)(0,e)}var l=function(t){return t&&t.__esModule?t:{default:t}}(n("fZjL"));Object.defineProperty(e,"__esModule",{value:!0});var f=function(t){return t},p={"@@functional/placeholder":!0},h=function(t){return t===p},d=function(t){return function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return 0===n.length||1===n.length&&h(n[0])?e:t.apply(void 0,n)}},v=function(t){return function t(e,n){return 1===e?n:d(function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=r.filter(function(t){return t!==p}).length;return i>=e?n.apply(void 0,r):t(e-i,d(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var o=r.map(function(e){return h(e)?t.shift():e});return n.apply(void 0,o.concat(t))}))})}(t.length,t)},g=function(t,e){for(var n=[],r=t;r<e;++r)n[r-t]=r;return n},y=v(function(t,e){return Array.isArray(e)?e.map(t):(0,l.default)(e).map(function(t){return e[t]}).map(t)}),m=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)return f;var n=t.reverse(),r=n[0],o=n.slice(1);return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.reduce(function(t,e){return e(t)},r.apply(void 0,t))}},_=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},x=function(t){var e=null,n=null;return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return e&&r.every(function(t,n){return t===e[n]})?n:(e=r,n=t.apply(void 0,r))}},b={rangeStep:function(t,e,n){for(var r=t,o=[];r<e;)o.push(r),r=i(r,n);return o},isFloat:function(t){return/^([+-]?)\d*\.\d+$/.test(t)},getDigitCount:function(t){var e=Math.abs(t);return 0===t?1:Math.floor(Math.log(e)/Math.log(10))+1},getDecimalDigitCount:r,sum:i,minus:a,multiply:o,divide:function(t,e){var n=r(t),o=r(e);return parseInt((""+t).replace(".",""),10)/parseInt((""+e).replace(".",""),10)*Math.pow(10,o-n)},modulo:function(t,e){var n=Math.abs(e);return e<=0?t:a(t,o(n,Math.floor(t/n)))},strip:function(t,e){return void 0===e&&(e=12),+parseFloat(t.toPrecision(e))},interpolateNumber:v(function(t,e,n){var r=+t;return r+n*(+e-r)}),uninterpolateNumber:v(function(t,e,n){var r=e-+t;return(n-t)/(r=r||1/0)}),uninterpolateTruncation:v(function(t,e,n){var r=e-+t;return r=r||1/0,Math.max(0,Math.min(1,(n-t)/r))})},w=x(function(t,e,n){var r=t[0],o=t[1];void 0===e&&(e=6),void 0===n&&(n=!0);var i=Math.max(e,2),a=u([r,o]),l=a[0],f=a[1];if(l===f)return c(l,e,n);var p=function t(e,n,r,o,i){void 0===i&&(i=0);var a,u=s((n-e)/(r-1),o,i);e<=0&&n>=0?a=0:(a=b.divide(b.sum(e,n),2),a=b.minus(a,b.modulo(a,u)),a=b.strip(a,16));var c=Math.ceil((a-e)/u),l=Math.ceil((n-a)/u),f=c+l+1;return f>r?t(e,n,r,o,i+1):(f<r&&(l=n>0?l+(r-f):l,c=n>0?c:c+(r-f)),{step:u,tickMin:b.minus(a,b.multiply(c,u)),tickMax:b.sum(a,b.multiply(l,u))})}(l,f,i,n),h=p.step,d=p.tickMin,v=p.tickMax,g=b.rangeStep(d,v+.1*h,h);return r>o?_(g):g}),S=x(function(t,e,n){var r=t[0],o=t[1];void 0===e&&(e=6),void 0===n&&(n=!0);var i=Math.max(e,2),a=u([r,o]),l=a[0],f=a[1];if(l===f)return c(l,e,n);var p=s((f-l)/(i-1),n,0),h=m(y(function(t){return l+t*p}),g)(0,i).filter(function(t){return t>=l&&t<=f});return r>o?_(h):h}),O=x(function(t,e,n){var r=t[0],o=t[1];void 0===n&&(n=!0);var i=u([r,o]),a=i[0],c=i[1];if(a===c)return[a];var l=s((c-a)/(Math.max(e,2)-1),n,0),f=b.rangeStep(a,c-.99*l,l).concat([c]);return r>o?_(f):f});e.getTickValues=S,e.getNiceTickValues=w,e.getTickValuesFixedDomain=O},W2nU:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function i(){d&&p&&(d=!1,p.length?h=p.concat(h):v=-1,h.length&&a())}function a(){if(!d){var t=o(i);d=!0;for(var e=h.length;e;){for(p=h,h=[];++v<e;)p&&p[v].run();v=-1,e=h.length}p=null,d=!1,function(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}(t)}}function u(t,e){this.fun=t,this.array=e}function s(){}var c,l,f=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,h=[],d=!1,v=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new u(t,e)),1!==h.length||d||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},WBoB:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r={macd:function(t,e,n,r){var o=t.close,i=this;n=n||12,e=e||26,r=r||9;var a=i.SUB(i.EMA(o,n),i.EMA(o,e)),u=i.EMA(a,r);return{dif:a,dea:u,macd:i.MUL(2,i.SUB(a,u))}},rsi:function(t,e,n,r){for(var o=t.close,i=this,a=[e||6,n||12,r||24],u=i.REF(o,1),s=i.SUB(o,u),c=i.MAX(s,0),l=i.ABS(s),f={},p=0;p<3;p++){var h=a[p];f["rsi"+h]=i.MUL(100,i.DIV(i.SMA(c,h,1),i.SMA(l,h,1)))}return f},kdj:function(t,e,n,r){function o(t){return t<0?0:t>100?100:t}var i=t.close,a=t.high,u=t.low,s=this;e=e||9,n=n||3,r=r||3;var c=s.LLV(u,e),l=s.DIV(s.MUL(s.SUB(i,c),100),s.SUB(s.HHV(a,e),c)),f=s.SMA(l,n,1),p=s.SMA(f,r,1),h=s.SUB(s.MUL(3,f),s.MUL(2,p));return{k:s.forEach([f],o),d:s.forEach([p],o),j:s.forEach([h],o)}},dmi:function(t,e,n){var r=t.close,o=t.high,i=t.low,a=this;e=e||14,n=n||6;var u=[],s=[],c=[];a.forEach([o,i],function(t,e){var n=this.index,l=n-1,f=t-o[l],p=i[l]-e,h=r[l];a.isNumber(f)&&a.isNumber(p)&&(u[n]=f>0&&f>p?f:0,s[n]=p>0&&p>f?p:0),c[this.index]=Math.max(t-e,Math.abs(t-h),Math.abs(e-h))});var l=a.SUM(c,e),f=a.SUM(u,e),p=a.SUM(s,e),h=[],d=[],v=[];a.forEach([f,p,l],function(t,e,n){var r=h[this.index]=n?100*t/n:0,o=d[this.index]=n?100*e/n:0;v[this.index]=r+o?100*Math.abs(o-r)/(r+o):0});var g=a.MA(v,n),y=a.DIV(a.ADD(g,a.REF(g,n)),2);return{pdi:h,mdi:d,adx:g,adxr:y}},wr:function(t,e,n){for(var r=t.close,o=t.high,i=t.low,a=this,u=[e||10,n||6],s={},c=0;c<2;c++){var l=u[c],f=a.HHV(o,l);s["wr"+l]=a.DIV(a.MUL(a.SUB(f,r),100),a.SUB(f,a.LLV(i,l)))}return s},obv:function(t){for(var e=[0],n=t.close,r=t.volume,o=1,i=n.length;o<i;o++)n[o]>n[o-1]?e[o]=e[o-1]+r[o]:n[o]<n[o-1]?e[o]=e[o-1]-r[o]:e[o]=e[o-1];return e},boll:function(t,e,n){var r=this;e=e||20,n=n||2;var o=t.close,i=r.MA(o,e),a=r.MUL(r.STD(o,e),n);return{upper:r.ADD(i,a),mid:i,lower:r.SUB(i,a)}},sar:function(t,e,n,r){e=e||4,n=n||2,r=r||20;var o=t.high,i=t.low,a=[],u=[],s=[],c=o.length,l=[],f=function(t){if(!(t>=c))if(a[t]=Math.min.apply(null,i.slice(t-e,t)),l[t]=1,a[t]>i[t])p(t+1);else for(s[t]=Math.max.apply(null,o.slice(t-e+1,t+1)),u[t]=n;t<c-1;){if(a[t+1]=a[t]+u[t]*(s[t]-a[t])/100,l[t+1]=1,a[t+1]>i[t+1])return void p(t+2);s[t+1]=Math.max.apply(null,o.slice(t-e+2,t+2)),o[t+1]>s[t]?(u[t+1]=u[t]+n,u[t+1]>r&&(u[t+1]=r)):u[t+1]=u[t],t++}},p=function(t){if(!(t>=c))if(a[t]=Math.max.apply(null,o.slice(t-e,t)),l[t]=-1,a[t]<o[t])f(t+1);else for(s[t]=Math.min.apply(null,i.slice(t-e+1,t+1)),u[t]=n;t<c-1;){if(a[t+1]=a[t]+u[t]*(s[t]-a[t])/100,l[t+1]=-1,a[t+1]<o[t+1])return void f(t+2);s[t+1]=Math.min.apply(null,i.slice(t-e+2,t+2)),i[t+1]<s[t]?(u[t+1]=u[t]+n,u[t+1]>r&&(u[t+1]=r)):u[t+1]=u[t],t++}};return o[e]>o[0]||i[e]>i[0]?f(e):p(e),a},cci:function(t,e){e=e||14;for(var n,r,o,i=[],a=t.close,u=t.low,s=t.high,c=0;c<a.length;c++)n=s[c],r=u[c],o=a[c],0==n&&(n=o),0==r&&(r=o),i[c]=(n+r+o)/3;return this.DIV(this.SUB(i,this.MA(i,e)),this.MUL(.015,this.AVEDEV(i,e)))},AVEDEV:function(t,e){if(null===t||0==t.length)return null;var n=t.length,r=0,o=0,i=0,a=0,u=Array(n);if(e<=1)return u;if(n<e)return u;for(;r<n&&i<e-1;)a+=t[r],i++,r++;for(;r<n;r++){a+=t[r],r-e>=0&&r-e<n&&(a-=t[r-e]);var s=a/e,c=0;for(o=r-e+1;o<=r;o++)c+=Math.abs(t[o]-s);u[r]=c/e}return u},ADD:function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.forEach(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.reduce(e,function(t,e){return t+e},!0)})},SUB:function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.forEach(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.reduce(e,function(t,e){return t-e},!0)})},MUL:function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.forEach(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.reduce(e,function(t,e){return t*e},!0)})},DIV:function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.forEach(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.reduce(e,function(t,e){return e?t/e:0},!0)})},POW:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.forEach(t,function(t,e){return Math.pow(t,e)})},MAX:function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.forEach(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.reduce(e,function(t,e){return t<e?e:t})})},MIN:function(){for(var t=this,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this.forEach(e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.reduce(e,function(t,e){return t<e?t:e})})},maxmin:function(){for(var t,e,n,r=0;r<arguments.length;r++)n=Math.max.apply(null,arguments[r]),t=void 0!==t?Math.max(t,n):n,n=Math.min.apply(null,arguments[r]),e=void 0!==e?Math.min(e,n):n;return{max:t,min:e}},ABS:function(t){return this.forEach([t],function(t){return Math.abs(t)})},REF:function(t,e){return Array(e).concat(t).slice(0,t.length)},HHV:function(t,e){return this.hhvllv(t,e,function(t,e){return t<e?e:t})},LLV:function(t,e){return this.hhvllv(t,e,function(t,e){return t>e?e:t})},SUM:function(t,e){var n=t.length,r=0,o=0,i=0,a=[];if(e>n)return Array(n);if(e<=0)return this.reduce(t,function(t,e){return t+e});if(e<=1)return t.slice();for(;i<e-1&&r<n;)this.isNumber(t[r])&&(o+=t[r],i++),r++;for(;r<n;r++)this.isNumber(t[r])&&(this.isNumber(o)?o+=t[r]:o=t[r]),a[r]=o,this.isNumber(t[r-e+1])&&(o-=t[r-e+1]);return a},MA:function(t,e){var n=t.length,o=0,i=-1,a=0,u=0,s=[];if(e<=0)return(u=this.reduce(t,function(t,e){return t+e}))/n;if(e<=1)return t.slice();if(n<e)return Array(n);for(;o<n&&a<e-1;)r.isNumber(t[o])&&(u+=t[o],a++),o++;for(;o<n;o++,i++)r.isNumber(t[o])&&(u+=t[o]),r.isNumber(t[o-e])&&(u-=t[o-e]),s[o]=u/e;return s},DMA:function(t,e,n){var o=t.length,i=0,a=1-e,u=0,s=[];if(r.isArray(e),e>1)return Array(o);if(1==e)return t.slice();if(r.isArray(e)){for(;i<o;i++)if(r.isNumber(t[i])&&r.isNumber(e[i])){s[i]=1==n?0:t[i],u=t[i],i++;break}for(;i<o;i++)r.isNumber(t[i])&&r.isNumber(e[i])?u=s[i]=e[i]*t[i]+(1-e[i])*u:s[i]=s[i-1]}else{for(;i<o;i++)if(r.isNumber(t[i])){s[i]=1==n?0:t[i],u=t[i],i++;break}for(;i<o;i++)r.isNumber(t[i])?u=s[i]=e*t[i]+a*u:s[i]=s[i-1]}return s},SMA:function(t,e,n){return this.DMA(t,n/e,1)},EMA:function(t,e){return this.DMA(t,2/(e+1))},WMA:function(t,e){var n=t.length,o=0,i=-1,a=[];if(e<=1)return t.slice();if(n<e)return Array(n);for(var u=e*(e+1)/2,s=0,c=0;o<e-1;o++)r.isNumber(t[o])&&(s+=t[o],c+=(o+1)*t[o]);for(;o<n;o++,i++)r.isNumber(t[o])&&(s+=t[o],c+=t[o]*e),i>=0&&r.isNumber(t[i])&&(s-=t[i]),a[o]=c/u,c-=s;return a},STD:function(t,e){for(var n=[],o=r.MA(t,e),i=e-1,a=t.length;i<a;i++){for(var u=0,s=i-e+1;s<=i;s++)u+=Math.pow(t[s]-o[i],2);n[i]=Math.sqrt(u/e)}return n},forEach:function(t,e){var n,r,o,i=t.length,a=[],u=-1,s=[];for(r=0;r<i;r++)a[r]=this.isArray(t[r])?t[r].length:-1,a[r]>u&&(u=a[r]);for(r=0;r<u;r++){for(n=[],o=0;o<i;o++)n[o]=a[o]<0?t[o]:t[o][r];s[r]=e.apply({index:r},n)}return s},reduce:function(t,e,n,r,o){var i,a=0,u=t.length;for("number"==typeof e&&(a=e,u=n,e=r,n=o);a<u;a++)if(n||this.isNumber(t[a])){i=+t[a];break}for(a++;a<u;a++)(n||this.isNumber(t[a]))&&(i=e(i,+t[a],a));return i},isArray:function(t){return"[object Array]"=={}.toString.call(t)},isNumber:function(t){return null!==t&&""!==t&&isFinite(t)},hhvllv:function(t,e,n){var r=[],o=e-1,i=t.length;if(e>i)return Array(i);if(e<=0)return this.reduce(t,n);if(e<=1)return t.slice();for(;o<i;o++)r[o]=this.reduce(t,o-e+1,o+1,n);return r}};["5","10","20","30","60","100","120","200"].forEach(function(t){r["ma"+t]=function(e){return r.MA(e.close,t)}}),e.default=r},WySG:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("wM2K"),o=n.n(r),i=n("YJIq"),a=n("ybqe")(o.a,i.a,function(t){n("CpRe")},"data-v-7e559397",null);e.default=a.exports},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Xc4G:function(t,e,n){var r=n("lktj"),o=n("1kS7"),i=n("NpIQ");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&e.push(a);return e}},Xd32:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("5PlU")},XoD1:function(t,e,n){function r(){this._evtObjs={},this._outdatedMsgs={}}function o(){}var i=function(t){return t&&t.__esModule?t:{default:t}}(n("fZjL"));r.prototype.on=function(t,e,n){this._evtObjs[t]||(this._evtObjs[t]=[]),this._evtObjs[t].push({handler:e,once:n});var r=this;return function(){r.off(t,e)}},r.prototype.once=function(t,e){this._evtObjs[t]||(this._evtObjs[t]=[]),this._evtObjs[t].push({handler:e,once:!0});var n=this;return function(){n.off(t,e)}},r.prototype.wait=function(t,e){return this._outdatedMsgs[t]?(e.apply(null,this._outdatedMsgs[t]),o):this.on(t,e,!0)},r.prototype.off=function(t,e){var n=this;return(t?[t]:(0,i.default)(this._evtObjs)).forEach(function(t){if(e){var r=[];(n._evtObjs[t]||[]).forEach(function(t){t.handler!==e&&r.push(t)}),n._evtObjs[t]=r}else n._evtObjs[t]=[]}),this},r.prototype.clear=function(){this._evtObjs={}},r.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1);this._outdatedMsgs[t]=e,(this._evtObjs[t]||[]).forEach(function(t){if(!t.once||!t.called){t.called=!0;try{t.handler&&t.handler.apply(null,e)}catch(t){console.error(t.stack||t.message||t)}}})},r.prototype.emitAsync=function(){var t=arguments,e=this;setTimeout(function(){e.emit.apply(e,t)},0)},r.prototype.assign=function(t){var e=this;["on","once","off","clear","wait","emit","emitAsync"].forEach(function(n){var r=e[n];t[n]=function(){return r.apply(e,arguments)}})},(new r).assign(r),t.exports=r},XsTK:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("P90k"),u=n("937u"),s=n("znIw"),c=n("08La");(r.prototype=new i).initialize=function(){var t,e,n=[],r=[],i=[],a=this.options,u=a.data.items;o.each(u,function(t,e){var o=parseFloat(t.MACD),u=parseFloat(t.DIF),s=parseFloat(t.DEA),c=parseFloat(a.middleValue);isNaN(o)||i.push({value:o,color:o>c?a.riseColor:a.dropColor}),isNaN(u)||n.push(u),isNaN(s)||r.push(s)}),i.length>a.maxCount&&(i=i.slice(i.length-a.maxCount),n=n.slice(n.length-a.maxCount),r=r.slice(r.length-a.maxCount));var s=r.concat(n);t=Math.abs(o.sub(Math.max.apply([],s),a.middleValue)),e=Math.abs(o.sub(a.middleValue,Math.min.apply([],s))),a.maxDiff=t>e?t:e,this.barOptions={region:a.region,data:{items:i},maxCount:a.maxCount,middleValue:a.middleValue},this.difOptions={region:a.region,data:{items:n},maxCount:a.maxCount,color:a.difColor,middleValue:a.middleValue},this.deaOptions={region:a.region,data:{items:r},maxCount:a.maxCount,color:a.deaColor,middleValue:a.middleValue}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new u(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e,n=t.yAxis,r=t.maxDiff.toFixed(2);void 0===n.clearRegion&&(n.clearRegion=!0),e=[{text:r,color:n.color},{text:"0.00",color:n.color},{text:-r,color:n.color}],n.data={items:e},new s(this.ctx,n).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new c(t,this.barOptions),n=new a(t,this.difOptions),r=new a(t,this.deaOptions);e.paint(),n.paint(),r.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},Xxa5:function(t,e,n){t.exports=n("jyFz")},YA2r:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAz1BMVEV+XPGfYvaCXPKFW/L///97XfFCLaGVV/SNWfOIWvKQWPOKWvOZV/WcVvWiVPalVPafVfWHW/KSWPStUvexUfiqU/e2UPinU/bf0/y7T/m0UfivUve5UPmpU/fCpvnFpvmlh/W9T/nJpfrh0/zMpfq/qPi/TvrAp/i8qPjv6f3j0vyLZvP49P7n3v2phvbHsvnPvvquhfeyhPerhfa2nfebb/Xe1PuTcvSVZPTAm/mskvage/Xy6f7Wyfu3g/jYyPuzkPfcx/zYu/vGmfqqbfYwFFomAAAEvklEQVRYw8XVbXPSUBAFYAirUqhosSr2JUlLsQRCQQqFttb69v9/k7t7Ew43N7mMM4yemX5znjm7e4m1l3tO7eXnTS4uLj5pzs7OPnBOTk6Oj49P33Hevz//+PHNmzedTuct5/Xr14eHh68k3W6L0+S02+2DA4AXwnm8c/EUNB5A4wG8MAEnnsR4p+JpQXhuQYl4AD+5nO15CmJiBXNqt9fxFgQIzeLEw0EAqlc+MUC2oKGe42HgioJHDLLjcpZXMbC7QYCKgcO4Tj+nIEDxBFQGnF2PPevA9kXsggCBOfW4H7zKgVGwYUBghnO8DhZYObCADQEZgoZ2yvk9t6ABj9UqtMP6nAOXDGyBFiaachjXcKWeWxDgaVFTzuehIDaooFIGw7CVnn9gBRUB5tTzeE5BgNDQbrenXO4BhGXKgYPnPQg8BYXJsRIO/coPgoEBnjOlFjRwVj30qygYMAhLNZfz9MOFt0BY4ODZHDz3xagnICBgrDn1qvr5wM5ODv3KPQWBQXM9TUQjePZBAHaQX1d5vn27urrcytz0y8Bpv9/byhReARxRnqsrshKJJ2Bf+vXJSi/zAL7NxpSGX+mnNry8JNJyIxpF0dycQ8Emg7ObPPEsA4McVAp7S+l3tjoi3V5k6oknoOyvR6HuTxc4MGAA0LrBb0qVU5A5BdVbRlHUpyQMw6WAudcY0Ew8gMIgl/RTNQXFU1DqfaE8twpm3rhHQ4A1B/xB96pxOYD6+JZRGG4aXrM2FTzhvwf1XFCYOlHdcBaYfw1C6snzM+CCNOkQ/WoCHm7nkkZzTj0H9e1Fmadgm2PAccxpcOC54FfSzA3IqwPYLIBH+MVVgGzcE41GoxSgPpVIOYAHPUp624En4KutTHTMEc0jKiQUr83g4jll0A48C9SCBvxSCraXzyRhcBZPaBFr+NjwbLAuG+QzMNhtybtrSULGJMvpRLTk+pHBQWPKf7q/GT0ZDyAKsthVsCVgap7KZlxJT64h4CNN1BsTLYpgl1tpfnwXsGXAe/3dZiCfIuRu1wweGbCRUCz3HVKiHMAusm7pmH0FQ+o3M5A58zFgUB6LgguS645TGqpng63stwBQPnohQOVscJzQQxA8UTougEaywdtmc030PdtdKJ4m+1Tp9yB4oHS1IHpgxgeyoWBItDa7k59F/u0DGEi7hGhW84DNJlG/308FTGjW1lznIA8LMOCM2ZuMHZAZhExupeCNOYWC5pdbAIfEGVreCwaZQdji3KwfiZ7N5hRUrwDGEyJ563fxllcC6n/f64TS5eaygyPx5Gv1JGAQ3NFwNSNKmJKWk+Eq4yywrScN1ZvwiVXTyw603ZgksyAQcEJcT9e3uiO9NMB2Saa0EEtHZbChEa83NuBwIvVM4rup8crBAx10qZpmFa8MGMePgcliGFuvGZ6AoBDR9BB2gk3guOBBIejmagBBggNoW9CqvIp6ACEBczU/BxAOMC/nnsMFG5A8mtcDWAA8HKhKzw8G1e3A+UFYJZqnnx+EZXGBf3sAqyRgmNXDAXSm88+6G9wXB9BvBR7vL0CH8mt+EMU8nhf0T+nn7C4K4p/C2skBrNth8EV9n5GG+waD/9Cw5lnLv9jhiz2De84faPcNV4tZrjUAAAAASUVORK5CYII="},YJIq:function(t,e,n){var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{class:["replyBox_foot",this.isIphoneX?"replyBox_foot__iphonex":""],attrs:{eventid:"0"},on:{click:this.bindTapInput}},[e("view",{staticClass:"replyBox_foot_input"},[this._v(this._s(this.replyText||"谈谈我的想法..."))])])},staticRenderFns:[]};e.a=r},YQ7m:function(t,e,n){t.exports={default:n("hM5s"),__esModule:!0}},YWsp:function(e,n,r){(function(e,n){!function(){var r=void 0!==e&&"[object process]"==={}.toString.call(e)||"undefined"!=typeof navigator&&"ReactNative"===navigator.product?n:self||n;r&&(r.Proxy||(r.Proxy=function(){function e(e){return!!e&&("object"==(void 0===e?"undefined":t(e))||"function"==typeof e)}var n=null,r=function(t,r){function o(){}if(!e(t)||!e(r))throw new TypeError("Cannot create proxy with a non-object as target or handler");n=function(){t=null,o=function(t){throw new TypeError("Cannot perform '"+t+"' on a proxy that has been revoked")}},setTimeout(function(){n=null},0);var i=r;for(var a in r={get:null,set:null,apply:null,construct:null},i){if(!(a in r))throw new TypeError("Proxy polyfill does not support trap '"+a+"'");r[a]=i[a]}"function"==typeof i&&(r.apply=i.apply.bind(i));var u=this,s=!1,c=!1;"function"==typeof t?(u=function(){var e=this&&this.constructor===u,n=Array.prototype.slice.call(arguments);return o(e?"construct":"apply"),e&&r.construct?r.construct.call(this,t,n):!e&&r.apply?r.apply(t,this,n):e?(n.unshift(t),new(t.bind.apply(t,n))):t.apply(this,n)},s=!0):t instanceof Array&&(u=[],c=!0);var l=r.get?function(t){return o("get"),r.get(this,t,u)}:function(t){return o("get"),this[t]},f=r.set?function(t,e){o("set"),r.set(this,t,e,u)}:function(t,e){o("set"),this[t]=e},p={};if(Object.getOwnPropertyNames(t).forEach(function(e){if(!((s||c)&&e in u)){var n={enumerable:!!Object.getOwnPropertyDescriptor(t,e).enumerable,get:l.bind(t,e),set:f.bind(t,e)};Object.defineProperty(u,e,n),p[e]=!0}}),i=!0,Object.setPrototypeOf?Object.setPrototypeOf(u,Object.getPrototypeOf(t)):u.__proto__?u.__proto__=t.__proto__:i=!1,r.get||!i)for(var h in t)p[h]||Object.defineProperty(u,h,{get:l.bind(t,h)});return Object.seal(t),Object.seal(u),u};return r.revocable=function(t,e){return{proxy:new r(t,e),revoke:n}},r}(),r.Proxy.revocable=r.Proxy.revocable))}()}).call(n,r("W2nU"),r("DuR2"))},Yobk:function(t,e,n){var r=n("77Pl"),o=n("qio6"),i=n("xnc9"),a=n("ax3d")("IE_PROTO"),u=function(){},s=function(){var t,e=n("ON07")("iframe"),r=i.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[a]=t):n=s(),void 0===e?n:o(n,e)}},ZFFg:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k");(r.prototype=new i).initialize=function(){var t,e,n=[],r=[],i=[],a=this.options,u=a.data.items;o.each(u,function(t,e){var o=parseFloat(t.RSI6),a=parseFloat(t.RSI12),u=parseFloat(t.RSI24);isNaN(o)||n.push(o),isNaN(a)||r.push(a),isNaN(u)||i.push(u)}),n.length>a.maxCount&&(n=n.slice(n.length-a.maxCount),r=r.slice(r.length-a.maxCount),i=i.slice(i.length-a.maxCount)),o.each(n,function(n,a){var u=[n,r[a],i[a]],s=Math.max.apply([],u),c=Math.min.apply([],u);t=void 0===t?s:o.isMore(s,t)?s:t,e=void 0===e?c:o.isLess(c,e)?c:e}),a.high=t,a.low=e,a.middleValue=o.div(t+e,2),this.rsi1Options={region:a.region,data:{items:n},maxCount:a.maxCount,middleValue:a.middleValue,color:a.rsi1Color},this.rsi2Options={region:a.region,data:{items:r},maxCount:a.maxCount,middleValue:a.middleValue,color:a.rsi2Color},this.rsi3Options={region:a.region,data:{items:i},maxCount:a.maxCount,middleValue:a.middleValue,color:a.rsi3Color}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:t.high.toFixed(2),color:e.color},{text:t.low.toFixed(2),color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new s(t,this.rsi1Options),n=new s(t,this.rsi2Options),r=new s(t,this.rsi3Options);e.paint(),n.paint(),r.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},ZIAb:function(t,e){},ZaQb:function(t,e,n){var r=n("EqjI"),o=n("77Pl"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("+ZMJ")(Function.call,n("LKZe").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},Zrlr:function(t,e,n){e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},Zx67:function(t,e,n){t.exports={default:n("fS6E"),__esModule:!0}},Zzip:function(t,e,n){t.exports={default:n("/n6Q"),__esModule:!0}},a2JC:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n("fE/4"),u=i(n("GurM"));e.removeDuplicatedSeperators=function(t){return t.replace(/(\w)\/{2,}/g,function(t,e){return e+"/"})};var s={make:function(t,e,n){return void 0===t&&(t={}),void 0===e&&(e=!0),void 0===n&&(n=!1),t=u.default(t,n),Object.keys(t).map(function(n){return n+"="+(e?encodeURIComponent:function(t){return t})(t[n])}).join("&")},parse:function(t,e){void 0===e&&(e={searchSep:"?"});var n,i=e.searchSep,u=void 0===i?"?":i,s=o(e,["searchSep"]);if(t)n=null===u?t:t.split(u)[1]||"";else{if(0!==arguments.length)return{};n=location.search||location.href.split("?")&&location.href.split("?")[1]||""}return a.parse(n,r({ignoreQueryPrefix:!0},s))}};e.default={make:function(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var o=n.encode,i=void 0===o||o,a=n.remove,u=void 0!==a&&a,c=n.overwrite,l=void 0===c||c,f=t.split("?"),p=f.splice(0,1===f.length||f[f.length-1].indexOf("#")>-1?f.length:f.length-1).join("?"),h=f[0];return[p,l?s.make(r({},s.parse(h,{searchSep:null}),e),i,u):[h,s.make(e,i,u)].filter(Boolean).join("&")].filter(Boolean).join("?")},param:s,keep:function(t){return t}}},a50T:function(t,e,n){var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.body&&t.body.length?n("view",{class:["news-text","btmline-gray",1==t.english_news?"align-left":"mandy"]},[t.summary?n("view",{staticClass:"news_lead"},[n("span",{staticClass:"title"},[t._v(t._s(1==t.english_news?"Summary":"导语"))]),t._v(" "),n("span",{staticClass:"detail",style:{textAlign:1==t.english_news?"left":"justify"}},[t._v(t._s(t.summary))])]):t._e(),t._v(" "),t._l(t.body,function(e,r){return n("view",{key:r},["text"===e.type?n("view",{staticClass:"paragraph"},t._l(e.textlist,function(e,o){return n("block",{key:o},["plain"===e.type?n("text",{staticClass:"plain"},[t._v(t._s(e.info))]):t._e(),t._v(" "),"quote"===e.type?n("div",{staticClass:"news-quote"},[n("p",[t._v(t._s(e.info))])],1):t._e(),t._v(" "),"grey"===e.type?n("text",{staticClass:"grey"},[t._v(t._s(e.info))]):t._e(),t._v(" "),"stock"===e.type?n("text",{class:t.stocksStorage[e.symbol]?"stock":"plain",attrs:{"data-canclick":t.stocksStorage[e.symbol],"data-symbol":e.symbol,eventid:"0_"+r+"-"+o},on:{click:t.tapstock}},[t._v(t._s(e.info))]):t._e(),t._v(" "),"strong-stock"===e.type?n("text",{class:t.stocksStorage[e.symbol]?"stock":"plain",staticStyle:{"font-weight":"bold"},attrs:{"data-canclick":t.stocksStorage[e.symbol],"data-symbol":e.symbol,eventid:"1_"+r+"-"+o},on:{click:t.tapstock}},[t._v(t._s(e.info))]):t._e(),t._v(" "),"strong"===e.type?n("text",{staticClass:"strong",staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.info))]):t._e()])})):t._e(),t._v(" "),"emphasis"===e.type?n("div",{class:["paragraph news-emphasis",e.pos,e.only?"only":""]},[n("div",{staticClass:"emphasis-title"},[t._v("划重点：")]),t._v(" "),e.info?n("ul",[n("li",[n("i",{staticClass:"emphasis-icon"}),t._v(" "),n("div",{staticClass:"emphasis-item"},[t._v(t._s(e.info))])],1)],1):t._e()],1):t._e(),t._v(" "),"img"===e.type?n("view",[n("image",{staticClass:"paragraph",attrs:{mode:"widthFix",src:e.info}}),t._v(" "),e.desc?n("div",{staticClass:"image-desc"},[t._v(t._s(e.desc))]):t._e()]):t._e(),t._v(" "),"video"===e.type?n("div",{staticClass:"video-box"},[n("txv-video",{attrs:{vid:e.info,playerid:e.info,eventid:"2_"+r,mpcomid:"0_"+r},on:{click:t.onTvpPlay}}),t._v(" "),e.desc?n("text",{staticClass:"video-desc"},[t._v(t._s(e.desc))]):t._e()],1):t._e(),t._v(" "),"mv"===e.type?n("video",{attrs:{src:e.info,controls:""}}):t._e()])}),t._v(" "),t._m(0)],2):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"wx-sou"},[e("image",{staticClass:"wx-img",attrs:{src:"https://wzq.gtimg.com/resources/shy/news/yaowen/white/wx-sou.png"}})])}]};e.a=r},ax3d:function(t,e,n){var r=n("e8AB")("keys"),o=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},b6v8:function(t,e,n){t.exports=function(t){return function(){console.log.apply(null,[t].concat([].slice.call(arguments)))}}},bOdI:function(t,e,n){e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("C4MV"));e.default=function(t,e,n){return e in t?(0,r.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},bRrM:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),i=n("evD5"),a=n("+E39"),u=n("dSzd")("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];a&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},"c+8m":function(e,n,r){function o(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach(function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)})}function i(e,n){void 0===n&&(n={}),n.name=n.name||e._componentTag||e.name;var r=e.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(l.indexOf(t)>-1)n[t]=r[t];else{var e=Object.getOwnPropertyDescriptor(r,t);void 0!==e.value?"function"==typeof e.value?(n.methods||(n.methods={}))[t]=e.value:(n.mixins||(n.mixins=[])).push({data:function(){var n;return(n={})[t]=e.value,n}}):(e.get||e.set)&&((n.computed||(n.computed={}))[t]={get:e.get,set:e.set})}}),(n.mixins||(n.mixins=[])).push({data:function(){return function(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach(function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})})};var r=new e;e.prototype._init=n;var o={};return Object.keys(r).forEach(function(t){void 0!==r[t]&&(o[t]=r[t])}),o}(this,e)}});var i=e.__decorators__;i&&(i.forEach(function(t){return t(n)}),delete e.__decorators__);var a=Object.getPrototypeOf(e.prototype),f=a instanceof u?a.constructor:u,p=f.extend(n);return function(e,n,r){Object.getOwnPropertyNames(n).forEach(function(o){if("prototype"!==o){var i=Object.getOwnPropertyDescriptor(e,o);if(!i||i.configurable){var a=Object.getOwnPropertyDescriptor(n,o);if(!c){if("cid"===o)return;var u=Object.getOwnPropertyDescriptor(r,o);if(!function(e){var n=void 0===e?"undefined":t(e);return null==e||"object"!==n&&"function"!==n}(a.value)&&u&&u.value===a.value)return}Object.defineProperty(e,o,a)}}})}(p,e,f),s&&function(t,e){o(t,e),Object.getOwnPropertyNames(e.prototype).forEach(function(n){o(t.prototype,e.prototype,n)}),Object.getOwnPropertyNames(e).forEach(function(n){o(t,e,n)})}(p,e),p}function a(t){return"function"==typeof t?i(t):function(e){return i(e,t)}}Object.defineProperty(n,"__esModule",{value:!0});var u=function(e){return e&&"object"==(void 0===e?"undefined":t(e))&&"default"in e?e.default:e}(r("5nAL")),s="undefined"!=typeof Reflect&&Reflect.defineMetadata,c={__proto__:[]}instanceof Array,l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured"];a.registerHooks=function(t){l.push.apply(l,t)},n.default=a,n.createDecorator=function(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push(function(e){return t(e,n,r)})}},n.mixins=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return u.extend({mixins:t})}},"c/Tr":function(t,e,n){t.exports={default:n("5zde"),__esModule:!0}},cnZr:function(t,e,n){var r=n("kM2E"),o=n("L42u");r(r.G+r.B,{setImmediate:o.set,clearImmediate:o.clear})},cnlX:function(t,e,n){n("iInB");var r=n("FeBl").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},crjz:function(t,e,n){var r=function(t){return t&&t.__esModule?t:{default:t}}(n("Gu7T")),o=n("tICF"),i=n("VeTm"),a=function(){function t(t,e){this.options=e;var n=e.width,r=e.height;this.chart=new o.Chart(t,{width:n,height:r,padding:e.padding}),this.layout=this.chart.layout}return t.prototype.draw=function(){this.drawBars(),this.drawLables(),this.chart.ctx.draw(!0)},t.prototype.drawLables=function(){var t=this,e=this.options,n=e.barWidth,r=e.barSpace,o=this.layout,i=o.width,a=(o.height,t.options.items.map(function(t){return t.label}));a.forEach(function(u,s){var c=o.tl.x+r+n/2+s*(a.length<2?0:(i-2*r-n)/(a.length-1));t.chart.drawText({content:u,origin:{x:c,y:o.bl.y},color:e.labelColor,baseline:"top",align:"center",size:e.labelSize})})},t.prototype.drawBars=function(){var t=this,e=this.options,n=e.barWidth,o=e.barSpace,i=this.layout,a=i.width,u=i.height,s=t.options.items.map(function(t){return t.value}),c=Math.min.apply(Math,(0,r.default)(s)),l=Math.max.apply(Math,(0,r.default)(s)),f=(t.chart.dpr,this.getScaleTicks(c,l,10));c=f[0],l=f[f.length-1],s.forEach(function(r,f){var p,h,d=i.tl.x+o+n/2+f*(s.length<2?0:(a-2*o-n)/(s.length-1));h={x:d,y:h=c>=0?(p=i.bl.y-20)-(r-0)*(u-20)/(l-0):l<=0?(p=i.tl.y+20)+(0-r)*(u-20)/(0-c):(p=i.tl.y+20+(l-0)*(u-40)/(l-c))+(0-r)*(u-40)/(l-c)},p={x:d,y:p};var v=r>=0?e.positiveColor:e.negativeColor;(!e.hideZero||0!=r)&&t.chart.drawLine({points:[{x:h.x-n/2,y:h.y},{x:h.x+n/2,y:h.y},{x:h.x+n/2,y:p.y},{x:h.x-n/2,y:p.y}],color:v,fillStyle:v}),0==f&&t.chart.drawLine({points:[{x:i.tl.x,y:p.y},{x:i.tr.x,y:p.y}],color:e.baselineColor,width:e.baselineWidth}),t.chart.drawText({content:e.valTextFormat?e.valTextFormat(r):r,origin:{x:d,y:r<0?p.y-6:p.y+6},color:e.valTextColor?e.valTextColor(r,v):v,baseline:r<0?"bottom":"top",align:"center",size:e.textSize})})},t.prototype.getScaleTicks=function(t,e,n){return i.getNiceTickValues([1e3*t,1e3*e],n).map(function(t){return t/1e3})},t.prototype.update=function(t){this.options.items=t,this.chart.reset(),this.draw()},t}();t.exports=a},crlp:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),i=n("O4g8"),a=n("Kh4W"),u=n("evD5").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},d7EF:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(n("us/S")),i=r(n("BO1k"));e.default=function(t,e){if(Array.isArray(t))return t;if((0,o.default)(Object(t)))return function(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var u,s=(0,i.default)(t);!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},dSzd:function(t,e,n){var r=n("e8AB")("wks"),o=n("3Eo+"),i=n("7KvD").Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},dY0y:function(t,e,n){var r=n("dSzd")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(t){}return n}},deEJ:function(t,e,n){var r=wx&&wx.getRealtimeLogManager?wx.getRealtimeLogManager():null;t.exports={info:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r&&(console.log("[info]已上报实时日志",t),r.info.apply(r,t))},warn:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r&&(console.log("[warn]已上报实时日志",t),r.warn.apply(r,t))},error:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r&&(console.log("[error]已上报实时日志",t),r.error.apply(r,t))},setFilterMsg:function(t){r&&r.setFilterMsg&&"string"==typeof t&&r.setFilterMsg(t)},addFilterMsg:function(t){r&&r.addFilterMsg&&"string"==typeof t&&r.addFilterMsg(t)}}},dv6X:function(t,e,n){var r=function(t){return t&&t.__esModule?t:{default:t}}(n("woOf")),o=n("02iA"),i=n("VBVG"),a=n("EUYj"),u=n("x94J"),s=n("NpZb"),c=wx.showModal,l=0,f=function(t,e){var n=[],r=e=e||1;return function(){if(n.push([t,this,[].slice.call(arguments,0)]),r)return function t(){var o=n.shift();if(o){r--;var i=o[0],a=o[1],u=o[2];u.unshift(function(){r++,t.apply(this,arguments)}),setTimeout(function(){return i.apply(a,u)},0)}else r=e}()}}(function(t,e){var n={};(function(t){return new u(function(e,n){wx.getSystemInfo({success:function(n){t.data.scenes="ios"===n.platform?5:6,e(t)},fail:function(t){n(t)}})})})(n=function(t){var e;return e=!0===t.isCrossReq?i.getDealerLoginInfo():i.getLoginInfo(),t.data?(t.data.qluin=e.qluin,t.data.qlskey=e.qlskey):t.data={qluin:e.qluin,qlskey:e.qlskey},t}(n=function(t){var e=a.getSync&&a.getSync(),n="";if(null===e||!0!==t.isCrossReq)n=s.DEALER.WZQ.DOMAIN;else switch(parseInt(e.dealercode,10).toString()){case s.DEALER.CMSCHINA.CODE:n=s.DEALER.CMSCHINA.DOMAIN;break;case s.DEALER.CHINALIONS.CODE:n=s.DEALER.CHINALIONS.DOMAIN;break;case s.DEALER.CNHB.CODE:n=s.DEALER.CNHB.DOMAIN}return/^\//.test(t.url)&&(t.url="https://"+n+t.url),t}(n=function(t){var e={header:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST"};return"GET"===(e=o.extend(e,t)).method&&(e.header["Content-Type"]="application/json"),e}(e)))).then(function(t){n=t}),n.success=function(t){var a=o.resCommonHandle(t);if(!1!==a.check){var u=a.json;if(-1<n.url.indexOf("stockinfo.fcgi")&&void 0===u.retcode&&(u.retcode=u.code,u.retmsg=u.msg),"51001066"!=u.retcode)if("51001067"!=u.retcode){if(/^510010\d\d$/.test(u.retcode)&&l<6)return l+=1,i.reLogin(function(){f((0,r.default)({},e,{success:function(){e.success&&e.success.apply(e,arguments),l=0}}))});"function"==typeof e.success&&e.success(u)}else wx.redirectTo({url:"/pages/account/recover/main?action=cant"});else wx.redirectTo({url:"/pages/account/recover/main"})}},n.fail=function(t){var n=o.resCommonHandle(t);if(!1!==n.check){var r=n.json;"function"==typeof e.fail&&e.fail(r)}},n.complete=function(n){t();var r=o.resCommonHandle(n);if(!1!==r.check){var i=r.json;"function"==typeof e.complete&&e.complete(i)}},wx.request(n)},5);t.exports={showModal:function(t){o.isString(t)?c({title:"",content:t,showCancel:!1,confirmText:"我知道了"}):(t.title=t.title||"",c(t))},request:f,crossRequest:function(t){a.get(function(e){var n=e.dealercode,r="https://wzq.tenpay.com/cgi-bin/wx_login.cgi";switch(parseInt(n,10).toString()){case s.DEALER.CMSCHINA.CODE:r="https://wzq.newone.com.cn/cgi-bin/wx_login.cgi";break;case s.DEALER.CHINALIONS.CODE:r="https://wzq.chinalions.cn/cgi-bin/wx_login.cgi";break;case s.DEALER.CNHB.CODE:r="https://wzq.cnhbstock.com/cgi-bin/wx_login.cgi"}i.isDealerLogin()?(t.isCrossReq=!0,f(t)):i.getDealerLoginCode(n,function(e){i.goLogin({url:r,code:e.code,loginType:2,success:function(){t.isCrossReq=!0,f(t)}})})})}}},dzO5:function(e,n,r){var o=r("p3fu"),i=r("e8Tw"),a=Object.prototype.hasOwnProperty,u={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},s=Array.isArray,c=Array.prototype.push,l=function(t,e){c.apply(t,s(e)?e:[e])},f=Date.prototype.toISOString,p=i.default,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:p,formatter:i.formatters[p],indices:!1,serializeDate:function(t){return f.call(t)},skipNulls:!1,strictNullHandling:!1},d=function e(n,r,i,a,u,c,f,p,d,v,g,y,m){var _=n;if("function"==typeof f?_=f(r,_):_ instanceof Date?_=v(_):"comma"===i&&s(_)&&(_=_.join(",")),null===_){if(a)return c&&!y?c(r,h.encoder,m,"key"):r;_=""}if(function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"symbol"==(void 0===e?"undefined":t(e))||"bigint"==typeof e}(_)||o.isBuffer(_))return c?[g(y?r:c(r,h.encoder,m,"key"))+"="+g(c(_,h.encoder,m,"value"))]:[g(r)+"="+g(String(_))];var x,b=[];if(void 0===_)return b;if(s(f))x=f;else{var w=Object.keys(_);x=p?w.sort(p):w}for(var S=0;S<x.length;++S){var O=x[S];u&&null===_[O]||(s(_)?l(b,e(_[O],"function"==typeof i?i(r,O):r,i,a,u,c,f,p,d,v,g,y,m)):l(b,e(_[O],r+(d?"."+O:"["+O+"]"),i,a,u,c,f,p,d,v,g,y,m)))}return b};e.exports=function(e,n){var r,o=e,c=function(t){if(!t)return h;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||h.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=i.default;if(void 0!==t.format){if(!a.call(i.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var r=i.formatters[n],o=h.filter;return("function"==typeof t.filter||s(t.filter))&&(o=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===t.allowDots?h.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:h.charsetSentinel,delimiter:void 0===t.delimiter?h.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:h.encode,encoder:"function"==typeof t.encoder?t.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:h.encodeValuesOnly,filter:o,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:h.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:h.strictNullHandling}}(n);"function"==typeof c.filter?o=(0,c.filter)("",o):s(c.filter)&&(r=c.filter);var f,p=[];if("object"!=(void 0===o?"undefined":t(o))||null===o)return"";f=n&&n.arrayFormat in u?n.arrayFormat:n&&"indices"in n?n.indices?"indices":"repeat":"indices";var v=u[f];r||(r=Object.keys(o)),c.sort&&r.sort(c.sort);for(var g=0;g<r.length;++g){var y=r[g];c.skipNulls&&null===o[y]||l(p,d(o[y],y,v,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var m=p.join(c.delimiter),_=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),m.length>0?_+m:""}},e6n0:function(t,e,n){var r=n("evD5").f,o=n("D2L2"),i=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},e8AB:function(t,e,n){var r=n("FeBl"),o=n("7KvD"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e8Tw:function(t,e,n){var r=String.prototype.replace,o=/%20/g,i=n("p3fu"),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};t.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return String(t)}}},a)},evD5:function(t,e,n){var r=n("77Pl"),o=n("SfB7"),i=n("MmMw"),a=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},exGp:function(t,e,n){e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("//Fk"));e.default=function(t){return function(){var e=t.apply(this,arguments);return new r.default(function(t,n){return function o(i,a){try{var u=e[i](a),s=u.value}catch(t){return void n(t)}if(!u.done)return r.default.resolve(s).then(function(t){o("next",t)},function(t){o("throw",t)});t(s)}("next")})}}},exh5:function(t,e,n){var r=n("kM2E");r(r.S,"Object",{setPrototypeOf:n("ZaQb").set})},eyXq:function(t,e,n){t.exports={fen2Yuan:function(t){return"string"!=typeof t&&(t=t.toString()),/^[\+|-]?[0-9]+$/.test(t)?(parseFloat(t)/100).toFixed(2):"0.00"},yuan2Fen:function(t){return"string"!=typeof t&&(t=t.toString()),/^[\+|-]?\d+(\.\d+)?$/.test(t)?(100*parseFloat(t)).toFixed(0):"0"},toCurrency:function(t,e){t=t||"",e=void 0===e?2:e;var n=/^(\-?)(\d+)(\.\d+)?$/,r=n.exec(t),o=null!=r&&RegExp.$1||"",i=null!=r&&RegExp.$2||"0",a=null!=r&&RegExp.$3||".00",u=i.length,s=u>3?u%3:0,c="",l=0==s?"":i.substr(0,s)+",",f=0;a=0==e?"":a.length>=e+1?a.substr(0,e+1):(a+new Array(e+1-a.length+1).join("0")).substr(0,e+1);for(var p=s;p<u;p++)c+=i.charAt(p),++f%3==0&&p<u-1&&(c+=",",f=0);return n=null,o+l+c+a},formatBigToText:function(t,e,n,r,o){return t=parseInt(t||0,10),e=parseInt(e||1,10),n=parseInt(n||0,10),r=parseInt(r||2,10),o=o||"",(t=t<1e4*e?t.toFixed(n):t>=1e4*e&&t<1e8?(t/1e4).toFixed(r)+"万":(t/1e8).toFixed(r)+"亿")+o}}},fBQ2:function(t,e,n){var r=n("evD5"),o=n("X8DO");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"fE/4":function(t,e,n){var r=n("dzO5"),o=n("Kbzh"),i=n("e8Tw");t.exports={formats:i,parse:o,stringify:r}},fJUb:function(t,e,n){var r=n("77Pl"),o=n("EqjI"),i=n("qARP");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},fS6E:function(t,e,n){n("Kh5d"),t.exports=n("FeBl").Object.getPrototypeOf},fWfb:function(e,n,r){var o=r("7KvD"),i=r("D2L2"),a=r("+E39"),u=r("kM2E"),s=r("880/"),c=r("06OY").KEY,l=r("S82l"),f=r("e8AB"),p=r("e6n0"),h=r("3Eo+"),d=r("dSzd"),v=r("Kh4W"),g=r("crlp"),y=r("Xc4G"),m=r("7UMu"),_=r("77Pl"),x=r("EqjI"),b=r("sB3e"),w=r("TcQ7"),S=r("MmMw"),O=r("X8DO"),A=r("Yobk"),k=r("Rrel"),E=r("LKZe"),C=r("1kS7"),T=r("evD5"),P=r("lktj"),j=E.f,M=T.f,D=k.f,I=o.Symbol,L=o.JSON,F=L&&L.stringify,R=d("_hidden"),N=d("toPrimitive"),z={}.propertyIsEnumerable,B=f("symbol-registry"),U=f("symbols"),q=f("op-symbols"),W=Object.prototype,H="function"==typeof I&&!!C.f,V=o.QObject,G=!V||!V.prototype||!V.prototype.findChild,X=a&&l(function(){return 7!=A(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(W,e);r&&delete W[e],M(t,e,n),r&&t!==W&&M(W,e,r)}:M,K=function(t){var e=U[t]=A(I.prototype);return e._k=t,e},Y=H&&"symbol"==t(I.iterator)?function(e){return"symbol"==(void 0===e?"undefined":t(e))}:function(t){return t instanceof I},Q=function t(e,n,r){return e===W&&t(q,n,r),_(e),n=S(n,!0),_(r),i(U,n)?(r.enumerable?(i(e,R)&&e[R][n]&&(e[R][n]=!1),r=A(r,{enumerable:O(0,!1)})):(i(e,R)||M(e,R,O(1,{})),e[R][n]=!0),X(e,n,r)):M(e,n,r)},$=function(t,e){_(t);for(var n,r=y(e=w(e)),o=0,i=r.length;i>o;)Q(t,n=r[o++],e[n]);return t},J=function(t){var e=z.call(this,t=S(t,!0));return!(this===W&&i(U,t)&&!i(q,t))&&(!(e||!i(this,t)||!i(U,t)||i(this,R)&&this[R][t])||e)},Z=function(t,e){if(t=w(t),e=S(e,!0),t!==W||!i(U,e)||i(q,e)){var n=j(t,e);return!n||!i(U,e)||i(t,R)&&t[R][e]||(n.enumerable=!0),n}},tt=function(t){for(var e,n=D(w(t)),r=[],o=0;n.length>o;)i(U,e=n[o++])||e==R||e==c||r.push(e);return r},et=function(t){for(var e,n=t===W,r=D(n?q:w(t)),o=[],a=0;r.length>a;)!i(U,e=r[a++])||n&&!i(W,e)||o.push(U[e]);return o};H||(s((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0);return a&&G&&X(W,t,{configurable:!0,set:function e(n){this===W&&e.call(q,n),i(this,R)&&i(this[R],t)&&(this[R][t]=!1),X(this,t,O(1,n))}}),K(t)}).prototype,"toString",function(){return this._k}),E.f=Z,T.f=Q,r("n0T6").f=k.f=tt,r("NpIQ").f=J,C.f=et,a&&!r("O4g8")&&s(W,"propertyIsEnumerable",J,!0),v.f=function(t){return K(d(t))}),u(u.G+u.W+u.F*!H,{Symbol:I});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)d(nt[rt++]);for(var ot=P(d.store),it=0;ot.length>it;)g(ot[it++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return i(B,t+="")?B[t]:B[t]=I(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!H,"Object",{create:function(t,e){return void 0===e?A(t):$(A(t),e)},defineProperty:Q,defineProperties:$,getOwnPropertyDescriptor:Z,getOwnPropertyNames:tt,getOwnPropertySymbols:et});var at=l(function(){C.f(1)});u(u.S+u.F*at,"Object",{getOwnPropertySymbols:function(t){return C.f(b(t))}}),L&&u(u.S+u.F*(!H||l(function(){var t=I();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(x(e)||void 0!==t)&&!Y(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,F.apply(L,r)}}),I.prototype[N]||r("hJx8")(I.prototype,N,I.prototype.valueOf),p(I,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},fZjL:function(t,e,n){t.exports={default:n("jFbC"),__esModule:!0}},fkB2:function(t,e,n){var r=n("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},fofq:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAACFCAMAAABixFa2AAADAFBMVEUAAADf4Pr29v/q6//a4+7d3fDj4/LW1urX1+vi4vXh5PfW1urV1erg5vPk5Pbj4/Ti5vPW1uvi5fPj4/Pk5PXk5PLj5fTk5PPk5PTj4/Ti5fTl5fXn6PLk5PXV1erj5PTk5PPm5vfW1uri5fPj4/XW2fDi5PXj5PTg6PTV1erW1urj4/Th4fXk5PTj5PTj5PTj5fTj5PTk5PPj5PXk5PTX1+rT1Ovj5PPX1+vi5vTV2fvW1+vj5PTj5PTW1urk5PTW1urV1evW1unU1erj5PTX1+ri5fTW1urW1uvj5PTW1uvj4/TW1uzj5PTi5fXj4/Ti5fXj5PPW1urj5fPj5PTk5fTj5PPW1+vk5PTGzerW1urW1uri5PTX1+zW1uzP1OrX1+nh4fTW1+zW1uvX2Ozh5PTHzu7W1urg4fLi4/Tj5PTT2+7GzerW1+vHzerK0OrHzerh4vTHzerk5PTIzuvGzOrW1uvHzuvHz+rHzurj4/TP0+zk5PTIz+zGzerHzerIzerH0OrGzOrW1+vGzevGzenGzOvHzevY2u/GzunGzOrHzerGzerGzevFzerGzuq4vuO6wOTM0ezGzerh4vTV1+3HzunIzey9xObM0OvHz+rHzurGzOrZ3fDZ2+/FzOnh4vPM0uzL0evQ1O3FzenR1ezj5fXW2O3FzurW1+vJz+rGzurAxufP1Ozk5PTU1uvY2+/Q1e3AxufM0erM0uvKz+vj5PTGzerGzerW2O/Z3PHi5fPV1uzU1urCx+fQ0+zO0+zW2vDV1+zS1erGzera3fHV1uu/xebKz+vP0uzEy+rEyufO0uvW2fHQ0+zW2vDW1urP1OvY2/DP1OzS1Ozb3vK8wuPX2fDQ1O3W1urT1OrW2fDL0Ovc3fHh4/TAxuXa3PHf4PLN0+zc3vLX2vDQ0+rByOfb3fHe4PPQ1e7Fy+nN0uyzu+K6weXV2O/Jz+vIzurW1urg4fPS1e3W2e/X1+zj5fXGzeq1vOLM0Oq3vuPO0uu5wOSvt9+lrdujrNiI8gKhAAAA93RSTlMACAIEDhElgHg0IY+HKTgtPZZXU2UTh0F4b2EwC5WlkIIeaWpKGH2jFmG0XBuotcLKvrGsnlMwxlpGBm/az0TWwqw3K+GedM8k0j25yOVOi0+Z1Zrr6N2djP3bunNxSxYeGrvhTEUd5vny7gv369f++vXcumDqrWaC897CXVu2jodP8fCxmX1xQTnm4ce7n3f9+M/BTEhEKPDeqpNUOjIjH9XJu6WdflY+9PTu5qufkl1S/fTs5NTTzYl8a2Mt89m3oXt2bGL48unkSv7g18/Ox5eDcGFX/OHJp46NitjJxcG0s6iSgdbMv7Cve/b0smf98trPwrySq9g70wAADMJJREFUaN6clk1ME0EUxzvd3Uoba/1q/NoYAddsQq8QWRMSNTHGA+FmmoDaBLhgiDF+YBSxRKAo4IECiQI2QcXEGCsXpUpiVS56EuXElZjoQY979b3uvG1WbZnp3+1/3sy84Wenu/PW5/P7fdI6OzQ6dFZ2EUcpiuQqJXn7gm3bF24nFUmc4vDAxXW87zKyriLzct9xOZ6CPCbO0z6+hm/2CvYS9/QVxK8/auI8hjxLlOf/dP+8bT970OCONDx4Ztvn738S/ANKgcd0ofSpW3dsO35z2vKMWtM347Z959aUEE9Hni7AU6+OwN513zP+M2fc64a5kauqAI8hT92A5598BPvYPzBcMmN4oB/29dGkfwOeijxVK5v2sOcu7ONoL/OVE+sdhX292/OwXJKlMXCtDK/r0jjs1cXBTt/G6hy8CLnjl7pKZjBNR160BM//dOyabV8be1piXnoBiyIvairS/93KNoSZKrhpKNI/R2U/uG4gz0go0rdbZTe0nkBeolqRfpwqe2D1ag08llGkj4vKDiQ1EwXPhBTp47CyA1cNFXgB4Mke9/IFBXkBbELAU5Jy5Uy+YGJx1gIG9APhBhqR2CqZtxD6NsNh4Gk93+kbS74aCIt+rfj3Qc2XHF+AM0j2jlSAJ3m3XrPjC6NJny8yUcETp1h++aexZ+IcdGaDlvyJojBF/rQxgxnkzTD5E9PSFfnT1JgJgQeBJ10RGPBkqwXxUky+4jFVka+GidRJ8BngSVd0HXjS1T6WCoCfamLybyy6Zsm/zcSawuCpRib/RqZGmfzb2rnGAq+dCRUw77SJiyTfRs+1L4FPpJlIAfNKM2iRxNt2Jh0B76jvEipgXl5ML3ZEy2eofha8fb5LqIB5FK328MTK58l55KVXOc9fQku8XDF/UWZIBScxXnCW/P8X8VaRV5/lPKWk2LTz9xoUUiKguTEvn9Os1HKXlw2Cz7s8izHLYuDMwtD5B8KRTme/hgwYA8XCUasgY8jZ705mkWg9fgqioyGQPYa8Zc6zWHkND+D98DPZBXEoYoJ3JX/i/TQwzMqKeOHlGfBV4jF9I2m9hfu9r0EPBBN6Q1/heenVNlpm0ZtMgZetIZ4qoKme7ng8PjL48t4ItN2DUwJrGPFqTiHviEpnYlRDUYMRhhRTOznWH/+88DnePzbJh2iecmiE94m3dCQF/rZNpTMRZRbMdFp0kwaLiv0eWRj/HePzqOIc5ZODXF4b8paJp5mmgRdvDHAUtTgEMRhEwXSA9+HiEV/IV2IWGkinA6itCbyminixWCLGlUhA7O0maBT7M+kIhM6Qm+ckuXJjlXhVE8h7r9IZ9Y8y5H8rVT/rzfOG3jnizb5H3pEc75shcXWsBsWTNeLlkNdGPCMgrsbsFvHkIq8d/MMK58XC4kovbxVPjnLesRXkVS1yfnVEXC01u8STTeItvgR/T7zMPnGt1naIJ//FW+O8UFBc2baD4skJzptZqwff9ILzAlvEtVzVLJ7s8l7Mg6984bzwVnHtzO0QT67mvFNfkLd5G/F2iat2ZVU8OUO8bYfBFx9zXqQR1AEXfMAxpIBG3Yy2xTocxYvy6UOZ6E4Q4rzUY4fHn499B7nSFFD4b79qbZn3ydN0/asiLwu+lue8YEtLS3MzXgVzhAEfQEPhVG59JzQ8v5maYi66GwSIl/8G/mI/523ZIa7ceq14cpjzmvYj78vzs5y3XVwrp/eIJ7u85x7e1rq6uht1ZOTQ8O4NuChezLfSOFxolF2UG0dc3lvwxz+It1dca/mceDLxJn54eLt2imv9aE48eZ/Lq0HeO87rqOV6g0aRt0d++soKuDsBF5pX7kiQeO+Qlyde4x5xnf51QDyZeGfefQXfP8d5B1tbTzhqdQz75NiCobCfn1vjEWXTpJMGBsIWgi2cl5xD3nPiNe8WV35uXTz5L951zttxyNET8jI6+qdX845pIo7ieGlBccS9Bxo3bkVQqVYFlQLuhQtbasVtFUXUuiKuqFEkwVCMGopArCgKxURlKKhIRMSFQAQnatzblor6ftff3fXaa7m6Pnf3+733fu/d9+4Xxh/vlE8TIIWRlJBgXoPXG5B6SqZee+6sVgZwTyb1ThN6j9VYr1Ez7rwtvsg9mdJT5yC94s5Gt8d0YPz08eNhBGCEA7nYpgAH9GBGQXodW4DRp4zmpF4xoReJ9da3446s4An35HmkXuQrGC+Qeq3acgf0uCcPZurFYr0mEyfDAcAAFgwwGg+wEGAAaFQnxRnTADThOJ0LE1VO6cUivThKbwBwEk64aE6SA80TdXTVj6po9RM6FyyzJJOyTlhvA1OvY1dOKJO+f/9e9fo1jElKThXjKL01MCpVWO98r+qRLdtfWRmRpCxQfRmeFFFZuX+ZrPqiCaSeiqHX0q0aHkVGV1ZWRkc+cnP7pHrI8G3SmKGnJvVm97dJMfE+IZ8J51PaQ2L+HEK8b7HNSlpvM9JLCza6o3tb5yG6ry6pgPSz0h6SZkGSDj0H+NZohPVWpTH0Wvj7r/QHVsIIJ7LAhuFFLNq3NyEvwMHhrNAbdOaLkDdoX2Nf+DOBdaLCTO8qqdePlRtoHyN23WAEQY+ZtAsnsUHpXUV6kaReQh9Lnu/er9PporPM4/mhN8xDWdGQuX/3c8ub9KD07jP0BppRbrxF2vOBFuRvuW4ZfJ5mfLhys/h6pp4W603o3deU66ERUB16vS8beVvoOLMIaiKYRW71SD0t0lt2PBj7/AbNyocaKSMeNTd/qBVAz9pSfi6xKWVGr0+X+jySVcc3IT0N6JE4Nurl6+ubR5RcLQPzDDppSC8v8x7hgIdGZkrZVeJh83x9T05ow6MJ0xB6a7EeJnEP2sfMe8NsoWWunzFfv5ep01XmHmU2TMLWHsTvZ9aueKb8OMQ2oGc7wbfdfWPDJNj0/ZBeyJJgy3ZFtyYrp62bNg0udACEAye4aNSm3AOTXkIxbCLcGjlSDRO6ERW2hNBbHozbPsx2Ra1mZ0ZaRZuy1Opa3xa1GQ0TqhEVtpzSg320bFc4NO41ciw7qSnh7AsjJzYXWDRMcCPqHaG3+/0R2Ecr3f6es8unsqFJCWcLr2zlZK3jD42oS++RXlJVpq1uP7/e15FTLNCkHLOIDWnW2nbH/3XVUdjUN7oZ39au4ttqLvbovciEKVMWLdIUHQMDDirYa4KDze7qqrXfUnTRYRy/QamRMGyhKcu/XzF1+7YM4vZtCvdvbASDu05ZQQF6lD22bT27v72pvuMvcHQSzy5fgLkWccVorPBv1bOpk6Og2m4/1yYvFpN0RgTtbDsW6xnQ9LHZ4aCgILQiwZIcW8+2Ov78xRIpjfjyoxWgpzMsWPjkrtQUyWK+1W4/9ya9g0RszqFbZdd0qnOHxRZI7P50gPlYAonYm5WNuTvYF8QSgf0fy+FtD/P2sEZM6A6ra95h9n8sxz8Qs0Sh0Gy948XOy8x9VlbubNUoFEti7PtYzlN62C/qfqxCoVDdPO3Hwsvc7Wzh0zdVUBN7P8rvsNST87tJPERG7sRooVxdESUyZ2PmGovYnAo1ZGtj7mDfQ8LlHR29RXPmzJETl1wur1Aq9HrN49sQIKJyiMKxMXMz4RoDcrBuP9bo9QplBdgIYhR5O1azj2KRuzmuN1V6vT4/Pt00+CB3EyMnPh9yVPGuFtUisdV95Qf7JQ5iJedCKtwustSVijwoOkgvl6phD1Iv5LAXJ/pJ2fbVyWuQq3XSkyPRPeMqsP+gaBu2stGzKCKT021UD/JqyhRzyHDvUB05J/LgJfNO5CAH9IyxfByrjkQP+k+PWC5EBMJpvAJhoFy0hP1SJdrX2PhA4YOivcLA+FjwUpWlOCkQjUQeNnApeQ+5GO2rRCR05k62S5beYEhVPovYCNoGfZZLth3Vwp0SXrDcuaZdlMZpDYaqn0UGgzau1L5SZ7kU/VH2SK9rHy4Fy6+lFrjYWZXuIaB+OEXZdewieUSyfQXZIifmL5/4VJ2G/4o6p8Qsv4Keh5wDRqEDgImYkYeNADQA9DI94DRchBPJXOdDVv/ESNyTXcwpcbEfujTZXWL7n0OGsGT1CILV1EkH8AwHaVFBPJnOJcIMDv8iFked7f43OBvF+dt7aXqJTDZrFlwyuAjQjEMw0hE0mwbxWZIu5dkD36umbPjvIqvpxefZjaP7qDFAYWHhGA4UUsMod0febyIOlPnYhyxQzPsTBDuTfSZxxSd5p4D3xzi5dp/Jhe6uTry/REZNn7m28amZwfubeMpd5lvHRe7J++t0FhYuZaNQ2Jn3j/CqMzc8PHxpOM3cOl68f4lDYvcPx0g+dE904P1zpM6TriAmOUt5/we+X8D8AD/+75T+Ar46qDfIrQ9jAAAAAElFTkSuQmCC"},fw3I:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n("mvHQ"));e.default=function(t){return function(e){var n=(0,o.slice)(e.args);n.unshift(t.printTime?"["+e.time+"]":"");var i=e.level;this._logHistory[i]||(this._logHistory[i]=[]);var a=Object.prototype.toString,u=n.map(function(t){return"[object String]"!==a.call(t)?(0,r.default)(t):t});this._logHistory[i].push(u.join("~"))}};var o=n("+7rG")},fxRn:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("g8Ux")},g8Ux:function(t,e,n){var r=n("77Pl"),o=n("3fs2");t.exports=n("FeBl").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},h65t:function(t,e,n){var r=n("UuGF"),o=n("52gC");t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},hGD6:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("niax"),o=getApp();e.default={data:function(){return{}},props:{news:{type:Array},type:{type:String}},methods:{viewDetail:function(t){var e,n,i=t.currentTarget.dataset.index,a=this.news[i];"newsDetail"===this.type?(n=1,e="/pages/newsCon/newsDetail/main"):(n=a.type,e="/pages/newsCon/newsCon"),e+="?id="+a.id+"&zxtype="+n+"&title="+a.title+"&date="+a.date+"&source="+a.source,o.navigateTo({url:e}),r.Request.reportData("news.mini.detail.relatedNews"),r.Request.reportMTAData({eventName:"news.mini.detail.relatedNews"})}}}},hJx8:function(t,e,n){var r=n("evD5"),o=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},hM5s:function(t,e,n){n("cnZr"),t.exports=n("FeBl").setImmediate},hdO0:function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo");(r.prototype=new i).initialize=function(){var t,e,n,r,i=this.options,a=i.data.items,u=i.region;void 0===i.maxCount&&(i.maxCount=a&&a.length),void 0===i.lineWidth&&(i.lineWidth=.8),void 0===i.fontsize&&(i.fontsize=12),o.each(a,function(n,r){t=void 0===t?parseFloat(n.high):parseFloat(o.isMore(n.high,t)?n.high:t),e=void 0===e?parseFloat(n.low):parseFloat(o.isLess(n.low,e)?n.low:e)}),i.high=t,i.low=e,void 0===i.middleValue&&(i.middleValue=o.div(o.add(t,e),2)),n=Math.abs(o.sub(t,i.middleValue)),r=Math.abs(o.sub(e,i.middleValue)),i.maxDiff=o.mul(n>r?n:r,1.1),i.totalWidth=o.div(u.width,i.maxCount),i.barWidth=o.mul(i.totalWidth,.8),i.spaceWidth=o.mul(i.totalWidth,.2)},r.prototype.getX=function(t){var e=this.options;return o.mul(t,e.totalWidth)},r.prototype.getY=function(t){var e=this.options,n=e.data.items[t],r=n.open,i=n.close,a=o.isMore(i,r)?i:r,u=o.sub(a,e.middleValue),s=e.region.height;return 0-u/(2*e.maxDiff)*s},r.prototype.getCandleColor=function(t){var e=this.options,n=e.data.items[t];return n.close>n.open?e.riseColor:n.close<n.open?e.dropColor:n.close>n.zsj?e.riseColor:n.close<n.zsj?e.dropColor:e.normalColor},r.prototype.getCandleY=function(t){var e=this.options,n=e.region.height;return 0-(t-e.middleValue)/(2*e.maxDiff)*n},r.prototype.start=function(){var t=this.ctx,e=this.options.region;t.save(),t.translate(e.x,e.y+e.height/2),t.beginPath()},r.prototype.end=function(t){var e=this.ctx;e.closePath(),e.restore()},r.prototype.paintMaxMin=function(){var t,e,n,r=this,i=this.ctx,a=this.options,u=a.region,s=a.data.items;i.beginPath(),i.setStrokeStyle(a.maxminColor),i.setFillStyle(a.maxminColor),i.setFontSize(a.fontsize),t=u.width,e=u.height-a.fontsize,o.each(s,function(o,u){var s=r.getX(u),c=r.getY(u);c>e&&(c=e),n=s-0>t-s?"right":"left",i.setTextAlign(n),o.high!=a.high||a.hasDrawHigh||(a.hasDrawHigh=!0,i.fillText(parseFloat(o.high).toFixed(2),s,c)),o.low!=a.low||a.hasDrawLow||(a.hasDrawLow=!0,i.fillText(parseFloat(o.low).toFixed(2),s,r.getCandleY(o.low)))})},r.prototype.paintItem=function(t,e,n){var r,o=this.ctx,i=this.options,a=i.data.items[t],u=this.getCandleColor(t),s=i.region.height;o.beginPath(),o.setFillStyle(u),o.setStrokeStyle(u),(r=Math.abs(a.open-a.close)/(2*i.maxDiff)*s)<1&&(r=1),o.fillRect(e,n,i.barWidth,r);var c=e+i.barWidth/2,l=this.getCandleY(a.high),f=this.getCandleY(a.low);o.moveTo(c,l),o.lineTo(c,f),o.setLineWidth(1),o.stroke(),o.fill()},r.prototype.paint=function(){this.ctx;var t=this.options.data;this.initialize(),this.start();for(var e=t&&t.items.length,n=0;n<e;n++){var r=this.getX(n),o=this.getY(n);this.paintItem(n,r,o)}this.paintMaxMin(),this.end()},t.exports=r},"i/C/":function(t,e,n){n("exh5"),t.exports=n("FeBl").Object.setPrototypeOf},iDdM:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("OlWb"),c=n("sPVI");(r.prototype=new i).initialize=function(){var t,e,n=this.options,r=[],i=n.hlocData,a=n.dotsData.items;o.each(a,function(t,e){var n=parseFloat(t.SAR);i[e],isNaN(n)||r.push({value:n,color:""})}),r.length>n.maxCount&&(i=i.slice(i.length-n.maxCount),r=r.slice(r.length-n.maxCount)),o.each(r,function(a,u){var s=n.riseColor;void 0!==i[u]&&(s=parseFloat(i[u].close)>=a.value?n.riseColor:n.dropColor),r[u].color=s,t=void 0===t?parseFloat(a.value):parseFloat(o.isMore(a.value,t)?a.value:t),e=void 0===e?parseFloat(a.value):parseFloat(o.isLess(a.value,e)?a.value:e)}),n.high=t,n.low=e,n.middleValue=o.div(t+e,2),this.hlocOptions={region:n.region,data:{items:i},color:n.hlocColor,maxCount:n.maxCount,middleValue:n.middleValue},this.dotsOptions={region:n.region,data:{items:r},maxCount:n.maxCount,middleValue:n.middleValue}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:t.high.toFixed(2),color:e.color},{text:t.low.toFixed(2),color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new c(t,this.hlocOptions),n=new s(t,this.dotsOptions);e.paint(),n.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},iFWT:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA5CAMAAABDJohAAAAAV1BMVEUAAABWW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15WW15R3d1yAAAAHHRSTlMABhD7r6n3gfSGyaVb6bLwGJ6Yi+SucmWzUkUtJzBHLAAAAQhJREFUSMft1t2OgyAQhuEBLIOo9a/b7s93/9e52ME9sdsO6UlN+h6oJ08IBJOhVBsdVLnY0pL5QEFHk0gFFBmiNr1OX5YU2bMH0FIEuoGUfTsgUnpcSN0MOAJg9WQAsBAq6E12Q2q3+UnqB8RjU3hA2G9XeYntv8leLoznl9j+bgn3LKSoJ8jmwrhZSzzWgpbwajw/tZdyUrvGkGRGzxoSgMr8TSJBQyZkY6r0NWqIOVyNiIMRojI2CyEq04kQojMi1IRMt6xjKJNBIY5I5bN2AOvEaTURCD8a0eSzlqmvvwz2Vqv4vArK5u5sOQtpRJCYUd7/FIR4Edn0MieH24SFcD8lIWbqzr998ksTn0Pk7QAAAABJRU5ErkJggg=="},iInB:function(t,e,n){var r=n("TcQ7"),o=n("LKZe").f;n("uqUo")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},iUbK:function(t,e,n){var r=n("7KvD").navigator;t.exports=r&&r.userAgent||""},io0b:function(t,e){},jExj:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAmVBMVEUWm+YbnukZnOcUmeX///8foesLYqUdn+ojpO0qqfEmpu8houwyrvUop/AtqvIvrPQ5s/k0sPY2sfiFy/PD5vpWtu07tfqHzPRYuO9evPLw+f7G6PtbuvCIzfWLz/ZivvOn2/g4rO5Ms+95x/PR6/q14PlPtvFCsO8spet9yfUwqOzh8vyZ1feW0vVxwvEnouni8/2c1vjT7fygeue2AAAD1klEQVRYw83U2XLaQBCF4ZHSihwI2RABZCEkVoOzv//DpWfjSHRoQkKl8lfZYF981T0jMC/vnHn5sdu72Afbe+616y33hntlG41GA9uDbTgcZq6cSxKA4K56XPQA5gAlp3vKgBGEBk56+oAAASmeMqAEpcYcPCwsBhQbC/CD5qkDSlByFw9QGRAgO+Cue3JAgBaBJjj21IUxoATfgxOevrAAod3sYcAIOgQauEueXBhgGkBwcjzpyQElCEyOFz3uqmdBKNA8p3hiYQ0EZz2xrzYgQGCSw3y6BxAaOLmu9/SFAbIiuVu9AEKCBk7xFBCa5G7yAMKCBk7zJAgI3B96AKEJDuvqHkCBHVrBRW+3Cx4OUIJeQd+pYQ2cbdd6ryx3wgPHmV+Aq5Jmgdsvl8tD3TwSHdy6u5LKVZbtp75xrL0Ezpa2LTX2ZT9gKNb441s5saKzZievD45YQDWD3x4ft3V9mO+9xyLbWYvxbESTc3AU+v7Y6cDg/AG36+93vRD3AdA4cNStbvxN/KjbQRd00xWFfF66oJFg+40O1quJ5oMHgENbRZRl1dl9zJI0gqYHDnxLKneDQVtSzUwEw7YOnFK/cRpBE8FBr4YvY7DlW/UgTi+AbTWlzcxHNJu1ETS/AJd1XX/a8g/RJ367LxiMXATzvKIij4eXsKSANfWaF9QsYmsH5tyMiiSC6Qk0AuTl9vNex4JQ0QFjAFkC+HAeUbgJP2FBxWIx7U5YFr4bQNYcWPHRLWjhnz4PJnFllq6Cu7mNiH9V1f4ETi2XezCJYPo7YEGI5/LglME8HB5DDD6PfRfBIa/o+hSOxr2sM4pg3geRe1zOwWG3I/8QZT6i1S/BzcRnQaODx7I5ZgwuNkf/ILMTQJYiWKQ+Dcz8h2FNz3aw44a29o9N7sCx9QT4lSfkg5Rg1umZ1hbMVkRfsi19tuCYxswEkL/CNlRu6FSpggs7YOa/VMq2pKUEo8O3trUTfumBL170wKeS1g5k5nm6ptKdXRdMU76LNvWxxIYGVmWRMcEgx/o4Z6YPImMk+KIHWqStnvKpBxsqn5IeOOmC5gROGAycB/Nu7ri3/GZF1gHIRhc0vnG4mMug/Zh8frKrfm6SDpj2QRP64rxl5CTIJXmAeOFYGh68idcQ/2uyD+NJMBEB62REZ+AZILwzUuGugukt0wFUuETxVFBaMgNOeCroxlKuQvcAdhmZpgkwFUnujqDRNQVUuDuB5qqmgLdzCqhj+ng6aCD9FWhE17H/GJSCBO/qSVC3/iWY+AR4/SlOtMSEqqaDmFDnFEoHpSX7PfDO/QTDYrdgOFLTxAAAAABJRU5ErkJggg=="},jFbC:function(t,e,n){n("Cdx3"),t.exports=n("FeBl").Object.keys},"jKW+":function(t,e,n){var r=n("kM2E"),o=n("qARP"),i=n("dNDb");r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},kM2E:function(t,e,n){var r=n("7KvD"),o=n("FeBl"),i=n("+ZMJ"),a=n("hJx8"),u=n("D2L2"),s=function t(e,n,s){var c,l,f,p=e&t.F,h=e&t.G,d=e&t.S,v=e&t.P,g=e&t.B,y=e&t.W,m=h?o:o[n]||(o[n]={}),_=m.prototype,x=h?r:d?r[n]:(r[n]||{}).prototype;for(c in h&&(s=n),s)(l=!p&&x&&void 0!==x[c])&&u(m,c)||(f=l?x[c]:s[c],m[c]=h&&"function"!=typeof x[c]?s[c]:g&&l?i(f,r):y&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((m.virtual||(m.virtual={}))[c]=f,e&t.R&&_&&!_[c]&&a(_,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},kiBT:function(t,e,n){t.exports={default:n("i/C/"),__esModule:!0}},knuC:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),o=n("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},mBIX:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABICAMAAACJBPh2AAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMAAiF23sz0v9rV6hHjyWRTDLyLhicI+j80PCwc8Kegaki5sXAWBMKUgWC0XDstkjYAAAHmSURBVFjD7dfpbqMwFAXg4xD2NexkT9N0mbnv/3wj+TIEolqiNqpUKd8fIwNHxr4gg4Hoctdz6Dscz807gUeVFZCewKowkUakL0oxUpCZAoMDmTooRmUyspR6m6TM8B1ZmWyol8oV7Kfda6Cj8foFqABYfPwWQk/4xgEWIAIeFUdphfHIAoGOUxvoaziiQ87TDhO8ADlc2SYwkcgMF/ywJUyUPOVwZJvBRMZfDZAEMxzyzHpmPbMWzhKW7diWwOwedZZw+VskZveosyxi1uwedZZNzJ7do85yiDlzen5sXObzZb6O5vX1a9+hZ9bvzNrLJoSJUGbs4ct2CxNbmeH3+8MrTFz7feqHbGOYiGXGB1qSUoOolCNaYC0Pgh107fgPYT1sgslfQc/Kp2ErLvrj4FNoJInPoB+LvLupiXnFebuaeqy7bHJ2ey48YnUD6URK+2nhva5J4YReTkrReBpDnxRyDJKaVLzX+wPGimvqBCNtTCpxBla5qivax4KzSeFykxfcXuhLdvpVzZ2OF389Nv7JFwdi0f28fzme5tZ4TuwdwDuxIzQdiVkoiL0IaLr9+R9BbFNBWxU/rqmBSXn6IYzsonHZGiqD++tkrHX4m1RiAeeaiPYtFvGXyOmwkGt9xmJK/LB/Y64AcuH5k3oAAAAASUVORK5CYII="},mClu:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},msXi:function(t,e,n){var r=n("77Pl");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},n0T6:function(t,e,n){var r=n("Ibhu"),o=n("xnc9").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},n318:function(t,e,n){var r={D:"退市",Z:"暂停上市",P:"申购日",U:"待上市",I:"待发行",1:"停牌"},o=(0,function(t){return t&&t.__esModule?t:{default:t}}(n("fZjL")).default)(r);t.exports={EXP_STATE:o,getStockStatusText:function(t,e,n,i,a){return"1"==t?"停牌":"1"!=e&&o.indexOf(e)>=0?r[e]:"3"==i?["1","2","4","5"].indexOf(n)>=0?"交易中":"休市中":"1"==n?"集合竞价":"5"==n?"集合竞价":["1","2","4","5"].indexOf(n)>=0?"交易中":"9"==n?"等待开盘":"10"==n?"盘后交易准备中":"11"==n?"盘后交易中":"休市中"}}},ngLp:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("fZjL")),i=r(n("woOf"));e.default={data:function(){return{showMore:!1,showLoading:!1,showNoMore:!1,moreNewsBtn:"",staticBtn:"",color:null,rotate:""}},created:function(){this.init()},methods:{init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.showLoading=!1,this.showMore=!1,this.color=t.color||null,this.staticBtn=t.btn||"点击查看更多"},changeLoadingAnimation:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="",a="",u=!1,s=!1,c=!1,l=this.staticBtn;switch(t){case"rotate":r="rotate",u=!0,c=!0;break;case"more":a=l,u=!0;break;case"fail":a="加载失败，请稍后重试",u=!0;break;case"hide":u=!1,c=!1;break;case"noMore":u=!1,s=!0,a="无更多数据"}n=(0,i.default)(n,{rotate:r,moreNewsBtn:a,showMore:u,showNoMore:s,showLoading:c}),(0,o.default)(n).forEach(function(t){e[t]=n[t]})},bindLoadingMore:function(){this.triggerEvent("getmore")}}}},niax:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o=r(n("//Fk")),i=r(n("woOf")),a=r(n("Xxa5")),u=r(n("Zrlr")),s=r(n("wxAW")),c=r(n("809r")),l=r(n("wkk4")),f=r(n("33nk")),p=r(n("EUYj")),h=r(n("VBVG")),d=r(n("/1L7")),v=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n("7FL1")),g="https://wzq.tenpay.com/cgi-bin/comment_plat.fcgi?action=",y=function(){function t(){(0,u.default)(this,t),this.userinfo=null}return(0,s.default)(t,[{key:"auth",value:function(){var t=this;return f.default.co(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.default.isLogin()){e.next=11;break}if(t.userinfo=h.default.getLoginInfo(),t.userinfo.srcuin&&t.userinfo.cftuin){e.next=9;break}return e.next=6,h.default.reLoginPromise();case 6:return e.next=8,h.default.getLoginInfoPromise();case 8:t.userinfo=e.sent;case 9:e.next=16;break;case 11:return e.next=13,h.default.reLoginPromise();case 13:return e.next=15,h.default.getLoginInfoPromise();case 15:t.userinfo=e.sent;case 16:return e.abrupt("return",t.userinfo);case 17:case"end":return e.stop()}},e,this)})).catch(function(t){l.default.error("UserInfo Error",t),getApp().Event.emit("operateStockNetworkError",{err:t})})}},{key:"reportMTAData",value:function(t){null!==t&&t&&"[object Object]"===Object.prototype.toString.call(t)&&this.auth().then(function(e){var n=null;new getApp&&(n=new getApp);var r=(0,i.default)({},t,{openid:e.qluin,cftuin:e.cftuin,scene:wx.getLaunchOptionsSync()?wx.getLaunchOptionsSync().scene:"",DS:Date.parse(new Date),version:d.default.version,appname:d.default.appname});n&&n.mta&&n.mta.stat&&n.mta.stat(t.eventName||"anonymous",r)})}},{key:"reportData",value:function(t,e){var n=this;return"string"==typeof t&&(t={sop:t}),t.sop&&"zxg"==d.default.appname?(t.sop=t.sop.toLowerCase(),e?new o.default(function(e,r){setTimeout(function(){e(n.reportDataPromise(t))},1e3)}):this.reportDataPromise(t)):f.default.resolve()}},{key:"reportDataPromise",value:function(t){return this.auth().then(function(e){var n=(0,i.default)({},t,{fproduct_id:"1000602",DS:Date.parse(new Date),openid:e.srcuin,cftuin:encodeURIComponent(e.cftuin),wzq_openid:e.qluin,appname:d.default.appname});n.market&&n.scode&&(n.stockid=""+["sz","sh","hk","us"][n.market]+n.scode);var r=[];for(var o in n)void 0!=n[o]&&r.push(o+"="+n[o]);var a="https://fdc.tenpay.com/fdc/commonClick.do?"+r.join("&");return f.default.wx.request({url:a}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",a,t)})})}},{key:"getCommentCon",value:function(t,e,n,r,o){return this.auth().then(function(n){var a=Date.parse(new Date),u={limit:e||10,begin:r||"",_:a,nickname:"default",avatar_url:"default",qluin:n.qluin,qlskey:n.qlskey},s={};s[o?"topic_id":"stock_id"]=t,u=(0,i.default)({},u,s);var c=g+(o?"topicDetail":"stockRssList");return console.log("url-data",c,u),f.default.wx.request({url:c,method:"POST",data:u,header:{"content-type":"application/x-www-form-urlencoded"}}).then(function(t){console.log("result",t);var e=t.statusCode,n=t.data;if(200==e)return 0==n.code?(n.data.response&&delete n.data.response,n.data):(console.log("result-error:",n),"51001097"===n.retcode||"51001096"===n.retcode||"登录已过期，请重新登录"===t.retmsg?v.captureMessage("getCommentCon-登录已过期，请重新登录",n):v.captureMessage("comment-error-no0",n),n)}).catch(function(t){l.default.error("reportData",c,t),console.log("comment-catch-error:",c,t),v.captureMessage("comment-error",t)})})}},{key:"uploadPic",value:function(t){return this.auth().then(function(e){var n={target:"pf",qluin:e.qluin||"",qlskey:e.qlskey||""};t&&t.forEach(function(t,e){n["image_"+(e+1)]=t});var r=g+"putImagePlat";return f.default.wx.request({url:r,method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",r,t)})})}},{key:"getCommentDetail",value:function(t){return this.auth().then(function(e){var n={subject_id:t,nickname:"default",avatar_url:"default",qluin:e.qluin,qlskey:e.qlskey},r=g+"rssSubjectById";return console.log("url-data",r,n),f.default.wx.request({url:r,method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded"}}).then(function(t){console.log("result",t);var e=t.statusCode,n=t.data;if(200==e)return 0==n.code?(n.data.response&&delete n.data.response,n.data):(console.log("result-error:",n),"51001097"===n.retcode||"51001096"===n.retcode||"登录已过期，请重新登录"===t.retmsg?v.captureMessage("rssSubjectById-登录已过期，请重新登录",n):v.captureMessage("detail-error-no0",n),n);v.captureMessage("detail-error-no200",t)}).catch(function(t){l.default.error("reportData",r,t),console.log("detail-catch-error:",r,t),v.captureMessage("detail-error",t)})})}},{key:"commentListPlatContent",value:function(t,e,n){return this.auth().then(function(r){var o={subject_id:t,begin:e?"":n,limit:20,nickname:"default",avatar_url:"default",qluin:r.qluin,qlskey:r.qlskey},i=g+"rssCommentListBySubjectId";return f.default.wx.request({url:i,method:"POST",data:o,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",i,t)})})}},{key:"putRssLike",value:function(t,e,n){return this.auth().then(function(r){var o={attitude:t,publish_id:e,nickname:n.nickName,avatar_url:n.avatarUrl,qluin:r.qluin,qlskey:r.qlskey};return f.default.wx.request({url:"https://wzq.tenpay.com/cgi-bin/comment_plat.fcgi?action=putRssLike",method:"POST",data:o,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){throw t})})}},{key:"getSendCommentTokenPlat",value:function(t){var e=this;return this.auth().then(function(n){return e.getWxUserInfo().then(function(e){if(e){var r={parent_id:t,nickname:e.nickName,avatar_url:e.avatarUrl,qluin:n.qluin,qlskey:n.qlskey},o=g+"getSendCommentTokenPlat";return f.default.wx.request({url:o,method:"POST",data:r,header:{"content-type":"application/x-www-form-urlencoded"}}).then(function(t){return t}).catch(function(t){l.default.error("reportData",o,t)})}})})}},{key:"getPreSendInfo",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.auth().then(function(n){return t.getWxUserInfo().then(function(t){if(t){var r={parent_id:e.parent_id||"",nickname:t.nickName,avatar_url:t.avatarUrl,qluin:n.qluin,qlskey:n.qlskey};return f.default.wx.request({url:"https://wzq.tenpay.com/cgi-bin/comment_plat.fcgi?action=preSendInfo",method:"POST",data:r,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t})}})})}},{key:"postComment",value:function(t,e){var n=this;return this.auth().then(function(e){return n.getWxUserInfo().then(function(n){if(n){var r=t.replyText,o=t.symbol,a=t.id,u=t.rootid,s=t.type,p=t.type2,h=t.image_list,d=t.imagesInfo,v=t.topic,y=t.topicId,m={};if("detail"==s)m={content:r,parent_id:a,root_id:p&&"reply"==p?u:a,attitude:0,nickname:n.nickName,avatar_url:n.avatarUrl,qluin:e.qluin,qlskey:e.qlskey};else{var _={};h&&h.forEach(function(t,e){t||(h.splice(e,1),d.splice(e,1))}),h&&h.forEach(function(t,e){_["image_"+(e+1)]=t,_["image_"+(e+1)+"_prop"]=d[e].width+","+d[e].height});var x={content:r,attitude:0,avatar_url:n.avatarUrl,nickname:n.nickName,type:h&&h.length?4:1,qluin:e.qluin,qlskey:e.qlskey};m=(0,i.default)({},x,_)}o?m.stock_id=o:v&&y&&(m.topics=y,m.stock_id=""),m.send_token=t.send_token||"";var b=g+("detail"==s?"putRssCommentPlat":"putRssSubjectPlat");return f.default.wx.request({url:b,method:"POST",data:m,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",b,t)})}})})}},{key:"deleteRssSubject",value:function(t){var e=this;return this.auth().then(function(n){return e.getWxUserInfo().then(function(e){if(e){var r={subject_id:t,avatar_url:e&&e.avatarUrl,nickname:e&&e.nickName,qluin:n.qluin,qlskey:n.qlskey},o=g+"deleteRssSubject";return f.default.wx.request({url:o,method:"POST",data:r,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",o,t)})}})})}},{key:"setClickStatus",value:function(t,e){var n={};n[t]=e;var r=wx.getStorageSync("clickStocks");wx.setStorage({key:"clickStocks",data:(0,i.default)({},r,n)}),getApp().Event.emit("stockClickStatusChange")}},{key:"checkStock",value:function(t){var e=this,n=(t=t.replace(/^us\.?/,"us")).substr(2),r=!0,o=t.substr(2).indexOf(".");-1!=o&&(n=n.substr(0,o));var i={url:getApp().CGI_PREFIX+"search.cgi",data:{keyword:n,limit:1},success:function(n){switch(parseInt(n.retcode,10)){case 0:var o=n.sl||[];r=!!o.length,e.setClickStatus(t,r);break;default:r=!1,e.setClickStatus(t,r)}},fail:function(t){console.log(t)}};getApp().wx.request(i)}},{key:"getClickStatus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=this,o={};return f.default.co(a.default.mark(function u(){var s;return a.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t){a.next=2;break}return a.abrupt("return",!1);case 2:return s={},t.forEach(function(t){var i=!0,a=t.substr(0,2);t==n?i=!0:"jj"==a||"nq"==a||"pt"==a?i=!1:"us"!=a||-1==t.substr(2).indexOf(".")||o[t]?void 0!=e[t]?i=e[t]:o[t]||(o[t]=!0,r.checkStock(t)):(o[t]=!0,r.checkStock(t)),s[t]=i}),s.sh000001=!0,wx.setStorage({key:"clickStocks",data:(0,i.default)({},e,s)}),a.abrupt("return",s);case 7:case"end":return a.stop()}},u,this)}))}},{key:"getNotice",value:function(){return this.auth().then(function(t){var e={check:6,qluin:t.qluin,qlskey:t.qlskey},n=g+"notify";return f.default.wx.request({url:n,method:"POST",data:e,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",n,t)})})}},{key:"illegalReport",value:function(t){if(t)return this.auth().then(function(e){var n={id:t,qluin:e.qluin,qlskey:e.qlskey},r=g+"illegalReport";return f.default.wx.request({url:r,method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",r,t)})})}},{key:"getTopicList",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.auth().then(function(e){var n={begin:10*(t.page||0),limit:10,qluin:e.qluin,qlskey:e.qlskey},r=g+"topicList";return f.default.wx.request({url:r,method:"POST",data:n,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return t}).catch(function(t){l.default.error("reportData",r,t)})})}},{key:"getWxUserInfo",value:function(){var t=getApp();return t.userinfo?t.userinfo:new o.default(function(t,e){p.default.get(function(e){e=(0,i.default)({},e,{nickName:e.nickname,avatarUrl:e.headimgurl}),t(e)})})}},{key:"postFeedback",value:function(t){return this.auth().then(function(e){var n=wx.getSystemInfoSync(),r=n.model+";"+n.system+";"+n.platform,i={user_wechat:t.user_wechat,email:t.email,phone:t.phone,advice:t.content,qluin:e.qluin,qlskey:e.qlskey,os:encodeURIComponent(r)},a=g+"weixinXcx&nickname=default&avatar_url=default&app=plus&check=7";return f.default.wx.request({url:a,method:"POST",data:i,header:{"content-type":"application/x-www-form-urlencoded"}}).filter(c.default).then(function(t){return!0}).catch(function(t){return l.default.error("postFeedback",a,t),o.default.reject(t)})})}}]),t}(),m=null,_=(null===m&&(m=new y),m);t.exports={Request:_}},noXn:function(t,e,n){var r={each:function(t,e){var n,r;if(t instanceof Array)for(n=0,r=t.length;n<r;n++)e(t[n],n,t);return t},extend:function(t,e){for(var n in e)t[n]=e[n];return t},add:function(t,e){var n,r,o,i;if(void 0!=t&&void 0!=e){var a=t.toString(),u=e.toString();try{n=a.split(".")[1].length}catch(t){n=0}try{r=u.split(".")[1].length}catch(t){r=0}if(i=Math.abs(n-r),o=Math.pow(10,Math.max(n,r)),i>0){var s=Math.pow(10,i);n>r?(t=Number(a.replace(".","")),e=Number(u.replace(".",""))*s):(t=Number(a.replace(".",""))*s,e=Number(u.replace(".","")))}else t=Number(a.replace(".","")),e=Number(u.replace(".",""));return(t+e)/o}},sub:function(t,e){var n,r,o;if(void 0!=t&&void 0!=e){try{n=t.toString().split(".")[1].length}catch(t){n=0}try{r=e.toString().split(".")[1].length}catch(t){r=0}return((t*(o=Math.pow(10,Math.max(n,r)))-e*o)/o).toFixed(n>=r?n:r)}},mul:function(t,e){var n,r,o=0;if(void 0!=t&&void 0!=e){n=t.toString(),r=e.toString();try{o+=t.toString().split(".")[1].length}catch(t){}try{o+=e.toString().split(".")[1].length}catch(t){}return Number(n.replace(".",""))*Number(r.replace(".",""))/Math.pow(10,o)}},div:function(t,e){var n=0,r=0;if(void 0!=t&&void 0!=e){try{n=t.toString().split(".")[1].length}catch(t){}try{r=e.toString().split(".")[1].length}catch(t){}return Number(t.toString().replace(".",""))/Number(e.toString().replace(".",""))*Math.pow(10,r-n)}},isEqual:function(t,e){if(void 0!==t&&void 0!==e)return(t=parseFloat(t))===(e=parseFloat(e))},isLess:function(t,e){if(void 0!==t&&void 0!==e)return(t=parseFloat(t))<(e=parseFloat(e))},isMore:function(t,e){if(void 0!==t&&void 0!==e)return(t=parseFloat(t))>(e=parseFloat(e))},dashedLine:function(t,e,n,r,o,i,a){i=i||"black",a=a||1,t.setLineWidth(a),t.setLineCap("round"),t.beginPath(),t.setStrokeStyle(i),this._dashedLine(t,e,n,r,o,[8,3]),t.closePath(),t.stroke()},_dashedLine:function(t,e,n,r,o,i){i||(i=[5,5]);var a=i.length;t.moveTo(e,n);for(var u=r-e,s=o-n,c=s/u,l=Math.sqrt(u*u+s*s),f=0;l>=.1&&f<1e4;){var p=i[f++%a];0===p&&(p=.001),p>l&&(p=l);var h=Math.sqrt(p*p/(1+c*c));e+=h,n+=c*h,t.lineTo(e,n),l-=p}t.moveTo(0,0)},disableBubbleAndPreventDefault:function(t){t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0},getTouchEventOffsetPosition:function(t,e){return(t=t||event).touches&&t.touches.length?t=t.touches[0]:t.changedTouches&&t.changedTouches.length&&(t=t.changedTouches[0]),{offsetX:t.pageX-e.x,offsetY:t.pageY-e.y}},line:function(t,e,n,r,o,i,a){t.beginPath(),t.moveTo(e,n),t.lineTo(r,o),t.setStrokeStyle(i),t.setLineWidth(a||1),t.stroke()},measureText:function(t,e){var n,r=0;t=(t||"").toString(),e=e||10;for(var o=0,i=(n=t.split("")).length;o<i;o++)/\w/.test(n[o])?r+=7:r+=14;return parseInt(r*(e/10),10)},fen2Yuan:function(t){return parseFloat(t).toFixed(2)},bigNumberToText:function(t){var e,n=t/1e8;if(n>1)e=n.toFixed(2)+"亿";else{var r=t/1e4;e=r>1?r.toFixed()+"万":t}return e},getOffset:function(t){if(!isNaN(t.offsetX)&&!isNaN(t.offsetY))return t;var e=t.target;void 0==e.offsetLeft&&(e=e.parentNode);var n=this.getPageCoord(e),r=window.pageXOffset+t.clientX,o=window.pageYOffset+t.clientY;return{offsetX:r-n.x,offsetY:o-n.y}},getPageCoord:function(t){var e=t.getBoundingClientRect();return{x:e.left+document.body.scrollLeft,y:e.top+document.body.scrollTop}},calcAxisValues:function(t,e,n,r){var o=(t-e)/(n-1),i=[];void 0===r&&(r=this.fen2Yuan);for(var a=0;a<n;a++)i.push(this.fen2Yuan(t-a*o));return i},convertDate:function(t,e){var n=parseInt(t.substring(0,4),10),r=parseInt(t.substr(5,7),10),o=parseInt(t.substring(8,10),10),i=new Date;switch(i.setYear(n),i.setMonth(r-1),i.setDate(o),r<10&&(r="0"+r),o<10&&(o="0"+o),e){case"y":return n;case"ym":return n+"-"+r;case"ymd":default:return n+"-"+r+"-"+o}},calcMAPrices:function(t,e,n,r){var o,i,a,u,s,c=[];for(o=e;o<e+n;o++)if(!((i=o+1-r)<0||o+1>t.length)){for(a=0,u=i;u<=o;u++)a+=parseFloat(t[u].zsj||t[u].preClose);s=a/r,c.push(s)}return c},drawHLine:function(t,e,n,r,o,i,a){if(t.setStrokeStyle(e),10*r%10==0&&(r+=.5),a&&"dashed"===a){var u=n||0;do{this.drawHLine(t,e,u,r,6,1,"solid"),u+=12}while(u<o+n)}else t.beginPath(),t.moveTo(n,r),t.lineTo(n+o,r),t.stroke()},drawVLine:function(t,e,n,r,o,i,a){if(t.setStrokeStyle(e),10*n%10==0&&(n+=.5),a&&"dashed"===a){var u=r||0;do{this.drawVLine(t,e,n,u,2,1),u+=4}while(u<o)}else t.beginPath(),t.moveTo(n,r),t.lineTo(n,r+o),t.stroke()},isLandscape:function(t){return"Landscape"===t},drawRect:function(t,e,n,r,o,i){t.save(),t.setStrokeStyle(i),t.beginPath(),t.rect(e,n,r,o),t.stroke(),t.restore()},trimFloatTailZero:function(t){return t.toString().replace(/\.?0+$/,"")},formatBigNumber:function(t,e){var n={},r=[1,1e4,1e6,1e8,1e10,1e12],o=["","万","百万","亿","百亿","万亿"];if(t=parseFloat(t),e=void 0===e?2:e,isNaN(t))return t;for(var i=1;i<r.length;i++){var a=o[i-1];if(t<r[i]){1==r[i-1]&&(e=0),n={v:(t/r[i-1]).toFixed(e),u:a};break}}return n},fillText:function(t,e,n,r,o,i,a,u){var s;t.save(),t.setFillStyle(o),t.setFontSize(i+"px Arial"),(s=this.measureText(e))>a.width&&("function"==typeof u?t.setFontSize(u(i)+"px Arial"):t.setFontSize(i/2+"px Arial"),s=this.measureText(e)),t.fillText(e,"function"==typeof n?n(s,a):n,"function"==typeof r?r(s,a):r,s),t.restore()},fixedNumber:function(t,e){return e=e||2,(t=parseFloat(t)).toFixed(e)},setLinearGradient:function(t,e,n){var r=t.createLinearGradient(0,-120,0,300);return r.addColorStop(0,e),r.addColorStop(1,n),r},isWindowsEnv:function(){var t=getApp();return t.device&&("devtools"==t.device.platform||"windows"==t.device.platform)}};t.exports=r},oM7Q:function(t,e,n){n("sF+V");var r=n("FeBl").Object;t.exports=function(t,e){return r.create(t,e)}},p3fu:function(e,n,r){var o=Object.prototype.hasOwnProperty,i=Array.isArray,a=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),u=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)void 0!==t[r]&&(n[r]=t[r]);return n};e.exports={arrayToObject:u,assign:function(t,e){return Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(e){for(var n=[{obj:{o:e},prop:"o"}],r=[],o=0;o<n.length;++o)for(var a=n[o],u=a.obj[a.prop],s=Object.keys(u),c=0;c<s.length;++c){var l=s[c],f=u[l];"object"==(void 0===f?"undefined":t(f))&&null!==f&&-1===r.indexOf(f)&&(n.push({obj:u,prop:l}),r.push(f))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(i(n)){for(var r=[],o=0;o<n.length;++o)void 0!==n[o]&&r.push(n[o]);e.obj[e.prop]=r}}}(n),e},decode:function(t,e,n){var r=t.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(e,n,r){if(0===e.length)return e;var o=e;if("symbol"==(void 0===e?"undefined":t(e))?o=Symbol.prototype.toString.call(e):"string"!=typeof e&&(o=String(e)),"iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var i="",u=0;u<o.length;++u){var s=o.charCodeAt(u);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=o.charAt(u):s<128?i+=a[s]:s<2048?i+=a[192|s>>6]+a[128|63&s]:s<55296||s>=57344?i+=a[224|s>>12]+a[128|s>>6&63]+a[128|63&s]:(u+=1,s=65536+((1023&s)<<10|1023&o.charCodeAt(u)),i+=a[240|s>>18]+a[128|s>>12&63]+a[128|s>>6&63]+a[128|63&s])}return i},isBuffer:function(e){return!(!e||"object"!=(void 0===e?"undefined":t(e))||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function e(n,r,a){if(!r)return n;if("object"!=(void 0===r?"undefined":t(r))){if(i(n))n.push(r);else{if(!n||"object"!=(void 0===n?"undefined":t(n)))return[n,r];(a&&(a.plainObjects||a.allowPrototypes)||!o.call(Object.prototype,r))&&(n[r]=!0)}return n}if(!n||"object"!=(void 0===n?"undefined":t(n)))return[n].concat(r);var s=n;return i(n)&&!i(r)&&(s=u(n,a)),i(n)&&i(r)?(r.forEach(function(r,i){if(o.call(n,i)){var u=n[i];u&&"object"==(void 0===u?"undefined":t(u))&&r&&"object"==(void 0===r?"undefined":t(r))?n[i]=e(u,r,a):n.push(r)}else n[i]=r}),n):Object.keys(r).reduce(function(t,n){var i=r[n];return o.call(t,n)?t[n]=e(t[n],i,a):t[n]=i,t},s)}}},pCRM:function(t,e,n){var r=n("VeTm"),o=n("tICF"),i=function(){function t(t,e){this.options=e;var n=e.width,r=e.height;this.chart=new o.Chart(t,{width:n,height:r,padding:e.padding}),this.layout=this.chart.layout}return t.prototype.trigger=function(t,e,n){var r=this.options;if(r.showToolTip){this.tooltip||(this.tooltip=new o.Chart(r.tooltip.id,{width:r.width,height:r.height,padding:r.padding}));var i,a=this.tooltip.layout,u=a.width,s=a.height;if("touchstart"==t){i=(l=e.touches[0]).clientX;var c={x:l.x,y:l.y};this.onSelect(c,n)}else if("touchmove"==t){var l;if((l=e.touches[0]).x<0||l.x>u||l.y<0||l.y>s)return this.tooltip.rendering=!1,void this.tooltip.reset(!0);if(Math.abs(l.x-i)<5)return;c={x:l.x,y:l.y},this.onSelect(c,n)}else this.tooltip.rendering=!1,this.tooltip.reset(!0)}},t.prototype.getExtremeValues=function(t){for(var e,n,r=this.options,o=(r.scales,r.data),i=r.grid,a=0,u=o;a<u.length;a++)!function(r){var o=t.map(function(t){return r[t]}),i=Math.max.apply(Math,o),a=Math.min.apply(Math,o);void 0===e?(e=i,n=a):(e=Math.max(e,i),n=Math.min(n,a))}(u[a]);n==e&&(n>0?n=0:e=0);var s=this.getScaleTicks(n,e,i.row+1);return{max:s[s.length-1],min:s[0]}},t.prototype.draw=function(){this.chart.reset(),this.drawGrid(),this.drawLines(),this.drawLables(),this.drawScales(),this.chart.ctx.draw(!0)},t.prototype.update=function(t){!function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}}(this.options,t),this.draw()},t.prototype.drawGrid=function(){var t=this.options,e=(t.data,t.scales,t.fieldColors,t.grid),n=this.layout,r=n.width,o=n.height;this.chart.drawGrid({width:r-2,height:o,row:e.row,column:e.column,origin:{x:0,y:0},lineColor:e.lineColor,lineWidth:e.lineWidth})},t.prototype.getLinePoint=function(t,e,n,r){var o=this.options,i=o.data,a=o.total,u=this.layout,s=u.width,c=u.height,l=u.tl,f=a||i.length,p=i[r][t];return{x:l.x+r*(s-2)/(f-1),y:l.y+c-(p-e)*c/(n-e)}},t.prototype.drawLines=function(){var t=this,e=this.options,n=e.data,r=e.scales,o=e.fieldColors,i=e.grid,a=e.lineWidth,u=this.layout;u.width,u.height,r.yAxes.forEach(function(e){var r=e.fields,u=t.getExtremeValues(r),s=u.min,c=u.max,l=t.getScaleTicks(s,c,i.row+1);s=l[0],c=l[l.length-1],r.forEach(function(e){t.chart.drawLine({points:n.map(function(n,r){return t.getLinePoint(e,s,c,r)}),color:o[e],width:a||1})})})},t.prototype.drawLables=function(){var t=this,e=this.options,n=e.labels,r=e.data,o=e.scales,i=this.layout,a=i.width,u=(i.height,i.tl),s=i.bl,c=o.xAxis.field;n||(n=r.map(function(t,e){return{text:t[c].toString(),position:100*e/(r.length-1)}})),n.forEach(function(e){t.chart.drawText({origin:{x:u.x+(a-2)*e.position/100,y:s.y+2},content:e.text,baseline:"top",size:12,color:o.color,align:0===e.position?"left":100===e.position?"right":"center"})})},t.prototype.drawScales=function(){var t=this,e=this.options,n=(e.data,e.scales),r=(e.fieldColors,e.grid),o=this.layout,i=o.width,a=o.height;n.yAxes.forEach(function(e,o){var u=e.fields,s=t.getExtremeValues(u),c=s.min,l=s.max,f=t.getScaleTicks(c,l,r.row+1),p=f[0],h=f[f.length-1],d=Math.min(Math.abs(p),Math.abs(h))<.5?3:2;f.reverse().forEach(function(e,u){t.chart.drawText({content:e.toFixed(d),origin:{x:0==o?2:i-4,y:u*a/r.row},size:12,color:n.color,align:0==o?"left":"right",baseline:0==u?"top":u==r.row?"bottom":"middle"})})})},t.prototype.drawToolTip=function(t,e){this.tooltip.reset(),this.tooltip.rendering=!0;var n=this,r=this.layout,o=r.tl,i=r.tr,a=r.bl,u=(r.br,r.width,r.height,this.options),s=u.scales,c=u.fieldColors,l=u.tooltip,f=u.data,p=u.total,h=u.baselines;this.tooltip.drawLine({points:[{x:e.x,y:o.y},{x:e.x,y:a.y}],color:u.cursorLineColor}),s.yAxes.map(function(e){var r=e.fields,a=n.getExtremeValues(r),s=a.min,l=a.max;r.forEach(function(e){var r=n.getLinePoint(e,s,l,t);-1!==h.indexOf(e)&&n.tooltip.drawLine({points:[{x:o.x,y:r.y},{x:i.x,y:r.y}],color:u.cursorLineColor}),n.tooltip.drawDot({origin:r,color:c[e],radius:2.5})})});var d=this.chart.dpr,v=o.x;t<Math.max(f.length,p||0)/2&&(v=i.x-l.width*d);var g=l.content(t,f[t]);this.tooltip.drawRect({origin:{x:v,y:o.y},width:l.width*d,height:16*g.length+10,fillStyle:l.background,strokeStyle:l.border||l.background}),g.forEach(function(t,e){n.tooltip.drawText({content:t.text,origin:{x:v+5,y:o.y+16*e+5},color:t.textColor,align:"left",baseline:"top",size:10}),n.tooltip.drawText({content:t.value,origin:{x:v+l.width*d-5,y:o.y+16*e+5},color:t.valueColor,baseline:"top",align:"right",size:10})}),this.tooltip.ctx.draw(!0)},t.prototype.getScaleTicks=function(t,e,n){return r.getNiceTickValues([1e3*t,1e3*e],n).map(function(t){return t/1e3})},t.prototype.onSelect=function(t,e){var n=this.options,r=n.data,o=n.total,i=this.layout,a=i.width,u=(i.height,i.tl),s=i.tr,c=i.bl;if(i.br,t.x>=u.x&&t.x<=s.x&&t.y>=u.y&&t.y<=c.y){var l=Math.floor((t.x-u.x)/a*(o||r.length));l<r.length&&(this.drawToolTip(l,t),e&&e(l))}},t}();t.exports=i},pFYg:function(e,n,r){function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var i=o(r("Zzip")),a=o(r("5QVw")),u="function"==typeof a.default&&"symbol"==t(i.default)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":t(e)};n.default="function"==typeof a.default&&"symbol"===u(i.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":u(t)}},pRCB:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperties:n("qio6")})},q4qp:function(t,e,n){function r(t,e){var n=wx.createCanvasContext(t);this.canvasId=t,this.ctx=n,this.options=e,this.options.barWidth=+(e.region.width/e.renderCount).toFixed(4),this.options.totalBarWidth=this.options.barWidth*this.options.currentDataCount,this.state={triggerTouch:!1,triggerTimer:null,moveFlag:!1,touchs:null},this.clear()}var o=n("6c6d"),i=(getApp().device.system||"").toLowerCase().indexOf("ios")>0,a=n("noXn");r.prototype={clear:function(t){var e=this.options.width,n=this.options.height;this.ctx.clearRect(0,0,e,n),t&&this.ctx.draw()},inRegion:function(t,e){var n=this.options,r=n.region,o=t;return n.isHorizontalScreen&&(t=e,e=o),!(t<0||t>r.width||e<0||e>r.height)},showLine:function(t,e,n){var r=t,o=this.ctx,i=this.options,a=i.region;this.clear(),o.rect(),i.isHorizontalScreen&&(t=e,e=r,o.translate(i.width,0),o.rotate(i.rotate)),o.beginPath(),o.translate(a.x,a.y),o.beginPath(),o.moveTo(t,0),o.lineTo(t,e-i.joinRadius),o.moveTo(t,e+i.joinRadius),o.lineTo(t,a.height),o.moveTo(0,e),o.lineTo(t-i.joinRadius,e),o.moveTo(t+i.joinRadius,e),o.lineTo(a.width,e),o.arc(t,e,i.joinRadius,0,2*Math.PI,!0),o.setStrokeStyle("#1d6ece"),o.setLineWidth(1),o.stroke(),o.closePath(),o.draw(),"function"==typeof n&&n(t,e)},touchstart:function(t,e){var n=this,r=t.touches[0],i=this.options,a=i.region,u=i.barWidth,s=200,c=Math.round(r.x),l=Math.round(r.y);i.isHorizontalScreen?(c=i.width-c-a.y,l=+((l-=a.x)-l%u+u/2).toFixed(4),this.options.totalBarWidth<l&&(l=this.options.totalBarWidth-u/2)):(c-=a.x,l-=a.y,c=o.add(o.sub(c,c%u),o.mul(u,.4)).toFixed(4),this.options.totalBarWidth<c&&(c=this.options.totalBarWidth-u/2)),this.state.touchs=r,wx.getSystemInfo({success:function(t){console.log(t),t.system.indexOf("Android")>-1&&"android"===t.platform&&"samsung"==t.brand&&(s=0),n.state.triggerTimer=setTimeout(function(){n.state.triggerTouch=!0,n.showLine(c,l),e&&e(c,l)},s)}})},isAndroidMove:function(t){var e=this.state.touchs,n=e.x,r=e.y,o=t.x,i=t.y;return Math.abs(n-o)>5||Math.abs(r-i)>5},touchmove:function(t,e,n){var r=this.options,a=r.region,u=r.barWidth,s=t.touches[0];if(!this.state.triggerTouch)return i?this.state.moveFlag=!0:this.isAndroidMove(s)&&(this.state.moveFlag=!0),clearTimeout(this.state.triggerTimer),this.clear(!0),void(n&&n(c,l));var c=Math.round(s.x),l=Math.round(s.y);r.isHorizontalScreen?(c=r.width-c-a.y,l=+((l-=a.x)-l%u+u/2).toFixed(4),this.options.totalBarWidth<l&&(l=this.options.totalBarWidth-u/2)):(c-=a.x,l-=a.y,c=o.add(o.sub(c,c%u),o.mul(u,.4)).toFixed(4),this.options.totalBarWidth<c&&(c=this.options.totalBarWidth-u/2)),this.inRegion(c,l)?(this.showLine(c,l),e&&e(c,l)):(this.clear(!0),n&&n(c,l))},touchend:function(t,e,n){if(!this.state.triggerTouch&&!this.state.moveFlag)return clearTimeout(this.state.triggerTimer),void(a.isWindowsEnv()||n&&n(t));this.state.triggerTouch=!1,this.clear(!0),e&&e(t)},touchcancel:function(t,e,n){this.touchend(t,e,n)},toucherror:function(t){console.log(t)},getItem:function(t,e,n,r){var o=this.options,i=o.region;o.isHorizontalScreen&&(n=r);var a=i.width,u=t.length,s=Math.floor(e*n/a);e<u&&(s=u-e+s),s<=0?s=0:s>=u&&(s=u-1);var c=t[s];return u&&e&&c?c:void 0},drawTopTips:function(t){if(t){var e=this.ctx,n=t.quoteTime;this.options.region,e.save(),e.setStrokeStyle("#888"),e.setFontSize("12"),e.setFillStyle("#888"),e.setTextBaseline("top"),e.setTextAlign("left"),e.fillText(n,0,0),e.draw(!0)}}},t.exports=r},q5c5:function(t,e,n){function r(t,e){a.call(this,t,e)}var o=function(t){return t&&t.__esModule?t:{default:t}}(n("pFYg")),i=n("noXn"),a=n("8WQo");(r.prototype=new a).initialize=function(){var t=this.ctx,e=this.options,n=e.region;!0===e.clearRegion&&t.clearRect(n.x,n.y,n.width,n.height),void 0===e.textAlign&&(e.textAlign="left")},r.prototype.start=function(){var t=this.ctx,e=this.options;t.save(),t.setFillStyle(e.color),t.setFontSize(e.font),t.translate(e.region.x,e.region.y)},r.prototype.getY=function(){return this.options.region.height/2},r.prototype.getX=function(t){var e,n=this.options,r=n.data.items,a=r&&r.length;return"object"===(0,o.default)(r[t])?(e=n.data.items[t].text,n.data.items[t].x):(e=n.data.items[t],i.measureText(e),"middle"==n.itemAlign?(n.textAlign="center",n.region.width/5*(t+.5)):0==t?(n.textAlign="left",0):t==a-1?(n.textAlign="right",n.region.width):(n.textAlign="center",n.region.width*t/(a-1)))},r.prototype.paintItem=function(t,e,n){var r=this.ctx,i=this.options,a=i.data.items[t];"object"===(void 0===a?"undefined":(0,o.default)(a))&&(a=a.text),i.showFqLabel&&["前复权","后复权","不复权"].indexOf(a)>=0?(r.beginPath(),r.save(),r.setTextAlign(i.textAlign),r.setTextBaseline("middle"),r.setStrokeStyle("#007aff"),r.setFillStyle("#007aff"),r.fillText(a,e,n),r.restore()):(r.setTextAlign(i.textAlign),r.setTextBaseline("middle"),r.fillText(a,e,n))},t.exports=r},qARP:function(t,e,n){var r=n("lOnJ");t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},qio6:function(t,e,n){var r=n("evD5"),o=n("77Pl"),i=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},qkKv:function(t,e,n){var r=n("FeBl"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},qyJz:function(t,e,n){var r=n("+ZMJ"),o=n("kM2E"),i=n("sB3e"),a=n("msXi"),u=n("Mhyx"),s=n("QRG4"),c=n("fBQ2"),l=n("3fs2");o(o.S+o.F*!n("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,f,p=i(t),h="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,g=void 0!==v,y=0,m=l(p);if(g&&(v=r(v,d>2?arguments[2]:void 0,2)),void 0==m||h==Array&&u(m))for(n=new h(e=s(p.length));e>y;y++)c(n,y,g?v(p[y],y):p[y]);else for(f=m.call(p),n=new h;!(o=f.next()).done;y++)c(n,y,g?a(f,v,[o.value,y],!0):o.value);return n.length=y,n}})},r24t:function(t,e,n){var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.news&&t.news.length?n("view",{staticClass:"review-stock"},[n("view",{staticClass:"item-title"},[n("label",{staticClass:"item-title-span"},[t._v("推荐阅读")])],1),t._v(" "),n("view",{staticClass:"related-review-list"},t._l(t.news,function(e,r){return n("view",{key:r,staticClass:"related-review-li",attrs:{"data-index":r,eventid:"0_"+r},on:{click:t.viewDetail}},[n("view",{staticClass:"related-review-li-title"},[t._v(t._s(e.title))]),t._v(" "),n("view",{staticClass:"review-list-from"},[e.source?n("label",{staticClass:"list-from-time"},[t._v(t._s(e.source))]):t._e(),n("label",{staticClass:"list-from-time"},[t._v(t._s(e.date))])],1)])}))]):t._e()},staticRenderFns:[]};e.a=r},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},"sF+V":function(t,e,n){var r=n("kM2E");r(r.S,"Object",{create:n("Yobk")})},sK3D:function(t,e,n){var r=n("tICF"),o=function(){function t(t,e){this.options=e;var n=e.width,o=e.height;this.chart=new r.Chart(t,{width:n,height:o,padding:e.padding}),this.layout=this.chart.layout}return t.prototype.draw=function(){this.drawSectors(),this.drawDot(),this.chart.ctx.draw(!0)},t.prototype.update=function(t){console.log("items<<<<<",t),this.options.items=t,this.chart.reset(),this.draw()},t.prototype.drawDot=function(){var t=this.options,e=(t.border,t.innerRadius),n=t.background,r=void 0===n?"#fff":n,o=this.layout,i=o.width,a=o.height,u=Math.min(i,a)*e/2;if(this.chart.drawDot({radius:u,color:r,origin:{x:i/2,y:a/2}}),t.innerText){var s=t.innerText,c=s.content,l=s.size,f=s.color;this.chart.drawText({content:c,origin:{x:i/2,y:a/2},color:f,size:l||18,baseline:"middle",align:"center"})}},t.prototype.drawSectors=function(){var t=this,e=this.options,n=e.radius,r=e.items,o=e.gaplineColor,i=this.layout,a=i.width,u=i.height;i.tl.x,i.tl.y,n=Math.min(a,u)*n/2;var s=r.reduce(function(t,e){return t+e.value},0),c=r.every(function(t){return 0==t.value}),l=1.5*Math.PI;r.forEach(function(e,i){var f=c?1/r.length:e.value/s;if(c||0!=f){var p=2*Math.PI*f,h=l+p,d=[a/2,u/2],v=d[0],g=d[1],y=n;e.active||(y-=2),t.chart.drawSector({origin:{x:v,y:g},radius:y,fillStyle:e.color,sAngle:l,eAngle:h}),1!=f&&[l,h].forEach(function(e){e-=1.5*Math.PI;var r=Math.sin(e),i=Math.cos(e);t.chart.drawLine({points:[{x:v,y:g},{x:v+n*r,y:g-n*i}],width:1,color:o})}),t.drawPercent((h+l)/2,f,n,e.color),l=h}})},t.prototype.drawPercent=function(t,e,n,r){var o=this.options,i=this.layout,a=i.width,u=i.height,s=a/2+n*Math.cos(t),c=u/2+n*Math.sin(t);this.chart.drawLine({points:[{x:s,y:c},{x:s<a/2?s-5:s+5,y:c<u/2?c-5:c+5},{x:s<a/2?s-20:s+20,y:c<u/2?c-5:c+5}],color:r}),this.chart.drawText({origin:{x:s<a/2?s-20:s+20,y:c<u/2?c-5:c+5},content:Number(100*e).toFixed(2)+"%",baseline:"middle",align:s<a/2?"right":"left",size:o.labelSize||10,color:o.labelColor})},t}();t.exports=o},sPVI:function(t,e,n){function r(t,e){i.call(this,t,e)}var o=n("noXn"),i=n("8WQo");(r.prototype=new i).initialize=function(){var t,e,n,r,i=this.options,a=i.data.items,u=i.region;i.maxCount||(i.maxCount=a&&a.length),void 0===i.lineWidth&&(i.lineWidth=.8),o.each(a,function(n,r){t=void 0===t?parseFloat(n.high):parseFloat(o.isMore(n.high,t)?n.high:t),e=void 0===e?parseFloat(n.low):parseFloat(o.isLess(n.low,e)?n.low:e)}),i.high=t,i.low=e,void 0===i.middleValue&&(i.middleValue=o.div(o.add(t,e),2)),n=Math.abs(o.sub(t,i.middleValue)),r=Math.abs(o.sub(e,i.middleValue)),i.maxDiff=o.mul(n>r?n:r,1.1),i.totalWidth=o.div(u.width,i.maxCount),i.barWidth=o.mul(i.totalWidth,.8),i.spaceWidth=o.mul(i.totalWidth,.2)},r.prototype.getX=function(t){var e=this.options;return o.mul(t,e.totalWidth)},r.prototype.getY=function(t){var e=this.options,n=e.data.items[t],r=e.high,i=e.low,a=(o.sub(r,i),e.middleValue),u=e.maxDiff,s=e.region.height/2;return{h:0-(n.high-a)/u*s,l:0-(n.low-a)/u*s,o:0-(n.open-a)/u*s,c:0-(n.close-a)/u*s,m:t*e.totalWidth+e.barWidth/2}},r.prototype.start=function(){var t=this.ctx,e=this.options.region;t.save(),t.translate(e.x,e.y+e.height/2),t.beginPath()},r.prototype.end=function(){var t=this.ctx,e=this.options;t.setStrokeStyle(e.color),t.setLineWidth(e.lineWidth),t.stroke(),t.closePath(),t.restore()},r.prototype.paintItem=function(t,e,n){var r=this.ctx,o=this.options;r.moveTo(e,n.o),r.lineTo(n.m,n.o),r.moveTo(n.m,n.l),r.lineTo(n.m,n.h),r.moveTo(n.m,n.c),r.lineTo(n.m+o.barWidth/2,n.c),r.moveTo(e,n.o)},t.exports=r},stbx:function(t,e,n){var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.stocks&&t.stocks.length?n("view",{staticClass:"detail-related-stock"},[t.stocks.length>2?n("view",{staticClass:"toggle",class:t.stocksUp?"":"flip",attrs:{eventid:"0"},on:{click:t.togglestock}}):t._e(),t._v(" "),n("view",{staticClass:"related-stock-list ",class:[1==t.stocks.length?"one":2==t.stocks.length?"two":"multiple",t.stocksUp?"shrink":""]},t._l(t.stocks,function(e,r){return n("view",{key:r,staticClass:"related-stock-item",attrs:{"data-index":r,eventid:"1_"+r},on:{click:t.openStock}},[n("label",{staticClass:"name"},[t._v(t._s(e.n))]),t._v(" "),n("label",{staticClass:"zdf",class:e.zdf>0?"red":e.zdf<0?"green":""},[t._v(t._s(e.zdf)+"%")])],1)}))]):t._e()},staticRenderFns:[]};e.a=r},swYh:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){var e=t.indexOf(".");return e>=0?t.substring(0,e):t};e.default={trimUSMarket:r,stockFont:function(t,e){return e?"":(t||"").length>=8?"font_26":""},chooseFont:function(t){return(t||"").length>=5?"choose-stock":""},trimCode:function(t){return r(t).replace("us","")},dealStockUint:function(t,e){return"2"==e||"3"==e?t.replace("手","股"):t},marketIcon:function(t){return"lbl-"+["sz","sh","hk","us"][parseInt(t,10)]+"-market"},dealPanTime:function(t){return t.substring(11,16)},dealPanChange:function(t){var e=parseFloat(t);return e>0?"+"+e:e},trimNumberComma:function(t){return(t+"").replace(",","")},getRankFontsize:function(t){return"0"==t||"1"==t||"2"==t?"ft-15":""},getReduceStockName:function(t){return t.substring(0,19)},trunkNoticeDate:function(t){return t=t||"",(new Date).getFullYear()!=t.substring(0,4)?t.substring(0,10):t.substring(5,10)},removePercent:function(t){return t.replace("%","")},pricetoFixed:function(t){return(t=+t).toFixed(2)},toFixedAll:function(t,e){return(t=+t).toFixed(e)},sign:function(t){return t>=0?"+"+t:t}}},t8x9:function(t,e,n){var r=n("77Pl"),o=n("lOnJ"),i=n("dSzd")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[i])?e:o(n)}},tICF:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o=r(n("C4MV")),i=r(n("fZjL")),a={fillStyle:"FillStyle",fontSize:"FontSize",globalAlpha:"GlobalAlpha",opacity:"GlobalAlpha",lineCap:"LineCap",lineJoin:"LineJoin",lineWidth:"LineWidth",miterLimit:"MiterLimit",strokeStyle:"StrokeStyle",textAlign:"TextAlign",textBaseline:"TextBaseline"},u=function(){function t(t,e){this.id=t,this.options=e,this.initialize()}return t.prototype._initContext=function(t){return(0,i.default)(a).map(function(e){return(0,o.default)(t,e,{set:function(n){t["set"+a[e]](n)}}),e}),t},t.prototype.initialize=function(){var t=this.options,e=t.width,n=void 0===e?300:e,r=t.height,o=void 0===r?150:r;this.dpr=wx.getSystemInfoSync().windowWidth/750;var i=wx.createCanvasContext(this.id);this.ctx=this._initContext(i),this.layout=new s(n,o,t.padding,this.dpr)},t.prototype.drawLine=function(t){var e=this.ctx;this.dpr,e.save(),t.color&&(e.strokeStyle=t.color),t.width&&(e.lineWidth=t.width),e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(var n=1,r=t.points.length;n<r;n++){var o=t.points[n];e.lineTo(o.x,o.y)}e.stroke(),t.fillStyle&&(e.fillStyle=t.fillStyle,e.fill()),e.restore()},t.prototype.drawDashLine=function(t){var e=this.ctx;if(e.save(),e.setLineDash(t.segments),e.beginPath(),t.points){e.moveTo(t.points[0].x,t.points[0].y);for(var n=1,r=t.points.length;n<r;n++){var o=t.points[n];e.lineTo(o.x,o.y)}}else e.moveTo(t.start.x,t.start.y),e.lineTo(t.end.x,t.end.y);t.width&&(e.lineWidth=t.width),t.color&&(e.strokeStyle=t.color),e.stroke(),e.restore()},t.prototype.drawText=function(t){var e=this.ctx;e.save();var n=t.origin;if(t.color&&(e.fillStyle=t.color),t.baseline&&(e.textBaseline=t.baseline),t.align&&(e.textAlign=t.align),t.size&&e.setFontSize(t.size),t.wrap||t.ellipsis){for(var r=0,o=0,i=0;i<t.content.length;i++){var a=t.content[i];if((r+=e.measureText(a).width)>t.maxWidth){o=i,t.wrap?(e.fillText(t.content.substr(0,o),n.x,n.y),e.fillText(t.content.substr(o),n.x,n.y+(t.size||10))):e.fillText(t.content.substr(0,o-1)+"...",n.x,n.y);break}}0===o&&e.fillText(t.content,n.x,n.y)}else e.fillText(t.content,n.x,n.y);e.restore()},t.prototype.drawDot=function(t){var e=this.ctx;e.save(),e.beginPath(),e.arc(t.origin.x,t.origin.y,t.radius,0,2*Math.PI),e.fillStyle=t.color,e.fill(),e.restore()},t.prototype.drawCircle=function(t){var e=this.ctx;e.save(),e.beginPath(),e.arc(t.origin.x,t.origin.y,t.radius,0,2*Math.PI),e.lineWidth=t.border,e.strokeStyle=t.color,e.stroke(),e.restore()},t.prototype.drawGrid=function(t){this.ctx;for(var e=t.lineWidth,n=void 0===e?1:e,r=(t.width-n)/t.column,o=(t.height-n)/t.row,i=0;i<=t.row;i++)this.drawLine({color:t.lineColor,width:t.lineWidth,points:[{x:t.origin.x,y:t.origin.y+n/2+o*i},{x:t.origin.x+t.width,y:t.origin.y+n/2+o*i}]});for(i=0;i<=t.column;i++)this.drawLine({color:t.lineColor,width:t.lineWidth,points:[{x:t.origin.x+n/2+r*i,y:t.origin.y},{x:t.origin.x+n/2+r*i,y:t.origin.y+t.height}]})},t.prototype.drawSector=function(t){var e=this.ctx,n=t.origin,r=t.radius,o=t.sAngle,i=t.eAngle,a=t.fillStyle,u=t.strokeStyle;e.save(),e.fillStyle=a,e.beginPath(),e.moveTo(n.x,n.y),e.arc(n.x,n.y,r,o,i),e.lineTo(n.x,n.y),u&&(e.lineWidth=u.width||1,e.strokeStyle=u.color||a,e.stroke()),e.fill(),e.restore()},t.prototype.drawRect=function(t){var e=this.ctx,n=t.origin,r=t.width,o=t.height,i=t.fillStyle,a=t.strokeStyle;e.save(),e.fillStyle=i,e.strokeStyle=a||i,e.beginPath(),e.rect(n.x,n.y,r,o),e.stroke(),e.fill(),e.restore()},t.prototype.drawRoundRect=function(t){var e=this.ctx,n=t.origin,r=t.width,o=t.height,i=t.radius,a=t.fillStyle,u=t.strokeStyle,s=n.x,c=n.y;e.save(),e.fillStyle=a,e.strokeStyle=u||a,e.beginPath(),e.moveTo(s+i,c),e.arcTo(s+r,c,s+r,c+o,i),e.arcTo(s+r,c+o,s,c+o,i),e.arcTo(s,c+o,s,c,i),e.arcTo(s,c,s+r,c,i),e.stroke(),e.fill(),e.restore()},t.prototype.drawShape=function(t){var e=this.ctx,n=t.lines,r=t.fillStyle,o=t.strokeStyle;if(n.length<2)throw new Error("a shape contains at least two lines");var i=n[0].points[0];e.save(),e.beginPath(),e.moveTo(i.x,i.y);for(var a=0,u=n;a<u.length;a++)u[a].points.forEach(function(t,n){e.lineTo(t.x,t.y)});e.lineTo(i.x,i.y),e.fillStyle=r,e.fill(),o&&(e.strokeStyle=o.color,e.lineWidth=o.width,e.stroke()),e.restore()},t.prototype.reset=function(t){var e=this.options,n=e.width,r=e.height;this.ctx.clearRect(0,0,n,r),t&&this.ctx.draw()},t}(),s=function(){function t(t,e,n,r){this.width=t*r,this.height=e*r,this.padding=n.map(function(t){return t*r});var o=this.getArea(),i=o.start,a=o.end,u=Math.min(i.x,a.x),s=Math.max(i.x,a.x),c=Math.min(i.y,a.y),l=Math.max(i.y,a.y);this.tl={x:u,y:c},this.tr={x:s,y:c},this.bl={x:u,y:l},this.br={x:s,y:l},this.width=s-u,this.height=l-c}return t.prototype.getArea=function(){var t=this.width,e=this.height,n=this.padding;"number"==typeof n&&(n=[n]);var r=n.slice(),o=r[0],i=r[1],a=r[2],u=r[3];return void 0===i?i=a=u=o:void 0==a?(a=o,u=i):void 0==u&&(u=i),{start:{x:u,y:o},end:{x:i=t-i,y:a=e-a}}},t}();e.Layout=s,e.Chart=u},uJOP:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseJSON=function(t){if("string"!=typeof t)return t;var e;try{e=t.trim(),e=JSON.parse(e)}catch(e){console.warn("JSON.parse fails ",t)}return e&&"Object"===e.constructor.name||(e=t),e},e.mpParseJSON=function(t){if("string"!=typeof t)return t;var e;e=t.replace(/\\x([0-9A-Fa-f]{2})/g,function(){var t=String.fromCharCode(parseInt(arguments[1],16));return'"'===t?"“":t}).replace("\n"," ").replace(/\\“/g,"“").replace(/\\/g," ");try{e=e.trim(),e=JSON.parse(e)}catch(t){}return e&&"Object"===e.constructor.name||(e=t),e},e.JSONStringify=function(t){var e="";try{e=JSON.stringify(t)}catch(n){e=t}return e}},uRKR:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("1VpI"),o=n.n(r),i=n("a50T"),a=n("ybqe")(o.a,i.a,function(t){n("ZIAb")},"data-v-00676707",null);e.default=a.exports},ulIw:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var r=!1,o=new Set([NaN,"NaN",null,void 0,"null","undefined","NULL","UNDEFINED"]);if(n instanceof Array&&n.forEach(function(t){o.add(t)}),"object"==(void 0===e?"undefined":t(e)))for(var i in e)e.hasOwnProperty(i)&&o.has(e[i])&&(r=!0);return r}},uotA:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAMAAADbYcjNAAAAgVBMVEUAAAClpaWKkpmJkpmVmp6KkZmKkpmKkpmLkpqKkpmJkpmKkpmKkpmLk5mKk5mTm6KVoKqKkpmOmJ2Qlp+JkZmKkpmLk5mKkpmLk5qMk5qMlZyMlJyKkpmKkpmKkpmKkpiLkZmLkpmKkpqLk5qMlJuKkpmNlZuSlpqJkpiKkZiJkZhWMOeAAAAAKnRSTlMABPvxD/bYz1XetaGrUkELCIoZFOfDfWpgOSUi67yagXpwTUcx5CwdyJBcRNVKAAAB00lEQVRIx5WU7XqiQAyFD4IC8imoVb5E69ru3P8F7gnbzoNga3x/6cAhyUky+CYLIn+7DNsocDCiPsW+667a/oYJ3mZpvmk2Jb64tMbipxiTNGbMnxRC1pk71h4se0P8/bHI67QPDTnxtFrxxyIOrl5WBZFksarGijCBzWbL/2eUoo1sjkUn4YuvrCYxUa55EuyMcYO77BnoMwfxGiocjHF2Rli84450YcweZMOsvKmBQ0FvmPDGwCVtYbgEU46SLGb4gzEBvcIMxnYLzEjoGhBJfnPy1eHRKVOqJdYRD6jxCHp5AZtQQE0nptC4HGpobw9XslMTyVxwkFKoYY8D0fXQkg85BWy+AyWHoS/OVnxT4v+fohOVHlTIjMmrV9q8y6Ag4ZsxiFRjWkVv3qn4zGxRsjFPSDlfvq3gTE38RHOkYlXAcqKmw2/cXG7+B0b8pWbzi6JiK5pqNjx2b+Z8hLT3inuc2C77nJKDuJxvldNSc8AjPH+4beZkOz5InjzQfcxZS3htyrbIs9oYa6XaftswfZPtWGhHyQ6fdmD1I04udi0CWb5ceSfIyg0r5etXnBWkUlUJJb3UQO/C4qWrl2xrvEBHRXPDKziRnRy9Jk7xA/8AzkU/66riezcAAAAASUVORK5CYII="},uqUo:function(t,e,n){var r=n("kM2E"),o=n("FeBl"),i=n("S82l");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},"us/S":function(t,e,n){t.exports={default:n("Xd32"),__esModule:!0}},uvS9:function(t,e,n){t.exports=n("2Xkg")},vD0l:function(t,e,n){var r=function(t){return t&&t.__esModule?t:{default:t}}(n("mvHQ")),o=n("VBVG"),i=n("02iA"),a=3,u=2,s=!1,c=!1,l=!1,f=1,p={options:{data:{},message:function(){},error:function(){},close:function(){}},getUinSkey:function(t){var e=o.getLoginInfo();e.qluin&&e.qlskey?t&&t(e.qluin,e.qlskey):console.log("getUinSkey: no qluin or qlskey")},createWS:function(t){var e=this;c=!1,l?(l=!0,e.send(t.data)):wx.connectSocket({url:t.url,success:function(){console.log("connectSocket success")},fail:function(t){console.log(t.errMsg)},complete:function(){}}),wx.onSocketOpen(function(){l=!0,e.send(t.data)}),wx.onSocketClose(function(n){if(l=!1,n){var r=parseInt(n.code||4005,10);switch(r){case 1e3:case 1001:case 1005:break;case 1006:!0===s?s=!1:e.reconnectWS();break;case 4001:t.close&&t.close(n);break;case 4002:var o=JSON.parse(n.reason||"{}"),i=parseInt(o.next_time||0,10)-parseInt(o.current_time||0,10);setTimeout(function(){e.reconnectWS()},1e3*i);break;case 4003:e.switchToPull();break;case 4004:i=u*Math.random()*1e3,setTimeout(function(){e.createWS(t)},i);break;case 4005:break;default:/4\d{3}/.test(r)&&t.close&&t.close(n)}}else console.log("onclose: "+n)}),wx.onSocketError(function(e){l=!1,"function"==typeof t.error&&t.error(e)}),wx.onSocketMessage(function(n){var r;n&&n.data?(r=JSON.parse(n.data||"{}"))&&r.command?e.processCommand(r):r&&r.type===e.options.data.type&&"0"===r.retcode?c=!0:c&&t.message&&t.message(r):console.log("onmessage："+n)})},send:function(t){var e=this;e.getUinSkey(function(n,o){t.qluin=n,t.skey=o;var i=(0,r.default)(t);l&&(wx.sendSocketMessage({data:i}),e.options.data=t)})},reconnectWS:function(){var t=this.options;f<a&&(this.createWS(t),f++)},processCommand:function(t){var e=this.options;switch(t.command){case"retry_subscribe":this.send(e.data)}},init:function(t){var e=t||{},n=this.options;a=3,u=2,s=!1,e=i.extend(n,e),this.options=e,this.createWS(e)},destroy:function(){console.warn("[WARN] 为了尽可能的减少WebSocket创建，如非必要请使用#unsubscribe()取消订阅"),wx.closeSocket()},unsubscirbe:function(){var t=this.options;s=!0,c=!1,this.send({type:"cancel_subscribe",scode:t.data.scode})}};t.exports=p},vF0O:function(t,e){},"vFc/":function(t,e,n){var r=n("TcQ7"),o=n("QRG4"),i=n("fkB2");t.exports=function(t){return function(e,n,a){var u,s=r(e),c=o(s.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},"vIB/":function(t,e,n){var r=n("O4g8"),o=n("kM2E"),i=n("880/"),a=n("hJx8"),u=n("/bQp"),s=n("94VQ"),c=n("e6n0"),l=n("PzxK"),f=n("dSzd")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){s(n,e,d);var m,_,x,b=function(t){if(!p&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,A=t.prototype,k=A[f]||A["@@iterator"]||v&&A[v],E=k||b(v),C=v?S?b("entries"):E:void 0,T="Array"==e&&A.entries||k;if(T&&(x=l(T.call(new t)))!==Object.prototype&&x.next&&(c(x,w,!0),r||"function"==typeof x[f]||a(x,f,h)),S&&k&&"values"!==k.name&&(O=!0,E=function(){return k.call(this)}),r&&!y||!p&&!O&&A[f]||a(A,f,E),u[e]=E,u[w]=h,v)if(m={values:S?E:b("values"),keys:g?E:b("keys"),entries:C},y)for(_ in m)_ in A||i(A,_,m[_]);else o(o.P+o.F*(p||O),e,m);return m}},vYgP:function(t,e,n){function r(t,e){var n=wx.createCanvasContext(t);this.options=e,n&&(this.canvasId=t,this.ctx=n,this.isDrawCanvas="N",this.clear())}var o=function(t){return t&&t.__esModule?t:{default:t}}(n("woOf")),i=n("noXn"),a=n("q5c5"),u=n("7Kfv"),s=n("6A2i"),c=n("A1SD"),l={size:12,arrowSize:12,offsetRight:10,offsetBottom:25,color:"#26292F"};r.prototype={getOptions:function(){return this.options},paint:function(t){var e=this.ctx,n=this.options;this.isLock()||(this.lock(),this.options.data=t||this.options.data,this.clear(),n.isHorizontalScreen&&(e.translate(n.width,0),e.rotate(90*Math.PI/180)),this.initialize(),n.isKch&&!this.isFiveAvgLine()&&this.drawKchArea(),this.drawMinsLine(),this.drawXAxis(),this.paintVolume(),this.unlock(),this.ctx.draw(),i.isWindowsEnv()||this.drawZoomButton())},initialize:function(){this.ctx;var t=this.options,e=t.data,n=t.minsChart;i.extend(n,{data:{items:e&&e.mins},isDraw:!1,middleValue:this.getPreClosePrice(),riseColor:t.riseColor,dropColor:t.dropColor,normalColor:t.normalColor,maxDotsCount:t.maxDotsCount}),t.isHorizontalScreen?(n.yAxisLeft.axisCount=5,n.yAxisRight.axisCount=5):(n.yAxisLeft.axisCount=2,n.yAxisRight.axisCount=2),this.minsOptions=n},drawMinsLine:function(){var t=this.ctx;this.options,(this.isFiveAvgLine()?new c(t,this.minsOptions):new s(t,this.minsOptions)).paint()},drawKchArea:function(){var t=this.ctx,e=this.minsOptions.region,n=e.x,r=e.y,o=e.width,i=e.height,a=o*(25/267);t.setFillStyle(this.minsOptions.kchFillColor),t.fillRect(n+o-a,r,a,i);var u=n+o-a/2,s=r+3*i/4;t.setFontSize(10),t.setFillStyle(this.minsOptions.kchTextColor),t.setTextAlign("center"),t.setTextBaseline("middle"),t.fillText("盘",u,s),t.fillText("后",u,s+15)},drawXAxis:function(){var t=this.options.xAxis,e=this.options.xAxisArr;t&&(this.isFiveAvgLine()&&(e=this.options.data.dateArr,t.itemAlign="middle"),t.data={items:e},t.unit=this.options.unit,new a(this.ctx,t).paint())},paintVolume:function(){var t=this.ctx,e=this.options,n=this.options.volume,r=e.data;i.extend(n,{type:"mins",isDraw:!1,maxCount:e.maxDotsCount,data:{items:r&&r.mins}}),n.unit=this.options.unit,new u(t,n).paint()},clear:function(){this.ctx.clearRect(0,0,600,450)},isFiveAvgLine:function(){return!!this.options.data.isFiveAvgLine},isLock:function(){return"Y"===this.isDrawCanvas},lock:function(){this.ctx.save(),this.isDrawCanvas="Y"},unlock:function(){this.ctx.restore(),this.isDrawCanvas="N"},getPreClosePrice:function(){var t=this.options.data;return 1==this.isFiveAvgLine()?t.fiveAgoPreClose:t.quote.zsj},showLine:function(t,e){var n=this.ctx;this.isLock()||(this.lock(),this.clear(),n.beginPath(),n.moveTo(t,0),n.lineTo(t,e-5),n.moveTo(t,e+5),n.lineTo(t,this.width),n.moveTo(0,e),n.lineTo(t-5,e),n.moveTo(t+5,e),n.lineTo(this.height,e),n.arc(t,e,5,0,2*Math.PI,!0),n.setStrokeStyle("#1d6ece"),n.setLineWidth(1),n.stroke(),n.closePath(),this.unlock(),n.draw())},getZoomButtonArea:function(){var t=this.options,e=(0,o.default)(l,t.zoomButtonOptions||{}),n=e.size,r=e.offsetRight,i=e.offsetBottom,a=t.width-n-r,u=t.height-n-i;return{x:a,y:u,dimension:[a-n,u-n,a+n,u+n]}},drawZoomButton:function(){var t=this.ctx,e=this.options;if(e.showZoomButton){var n=(0,o.default)(l,e.zoomButtonOptions||{}),r=this.getZoomButtonArea(),i=n.color,a=n.size,u=n.arrowSize,s=r.x,c=r.y;t.setFillStyle(i),t.arc(s,c,a,0,2*Math.PI),t.fill(),wx.getImageInfo({src:"https://wzq.gtimg.com/resource/images/fca8973946050adeb1279280276213dd.png",success:function(e){t.drawImage(e.path,s-u/2,c-u/2,u,u),t.draw(!0)}})}}},t.exports=r},wM2K:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("niax");e.default={props:{replyText:{type:String,value:""}},data:function(){return{id:"",symbol:null,name:"",type:null,touser:"",isIphoneX:!1,canEdit:!0,canReply:!0,editUrl:""}},methods:{init:function(t){var e=t.id,n=t.topicId,r=t.topic,o=t.type,i=t.symbol,a=t.name,u=t.touser,s=getApp(),c=s.SystemInfo,l=s.device||c;try{/iphone\sx/i.test(l.model)&&(this.isIphoneX=!0)}catch(t){}this.id=e||null,this.symbol=i||"",this.name=a||"",this.type=o,this.touser=u||null,this.canEdit=!0,this.topicId=n||null,this.topic=r||null,this.setEditUrl()},rejectReplyToken:function(){this.canReply=!1},bindTapInput:function(){var t="detail"===e?"xcx_postdetail_edit":"xcx_post_edit";r.Request.reportData(t),r.Request.reportMTAData({eventName:t});var e=this.type;this.editUrl=this.editUrl||this.getEditUrl(),"detail"===e?this.canReply?wx.navigateTo({url:this.editUrl}):wx.showModal({title:"提示",content:"此用户设置了评论禁止回复",confirmText:"我知道了",showCancel:!1,success:function(t){}}):this.canEdit&&wx.navigateTo({url:this.editUrl})},setEditUrl:function(){var t=this;r.Request.getWxUserInfo().then(function(e){e?(t.canEdit=!0,t.editUrl=t.getEditUrl()):t.canEdit=!1}).catch(function(t){console.log("err",t)})},getEditUrl:function(){var t=this.symbol,e=this.name,n=this.type,r=this.id,o=this.touser,i=this.topicId,a=this.topic,u="/pages/comment/edit/edit?id="+r+"&type="+n;return r||(u="/pages/comment/edit/edit?type="+n),t&&(u+="&symbol="+t),e&&(u+="&name="+e),o&&(u+="&touser="+o),i&&(u+="&topicId="+i),a&&(u+="&topic="+a),u}}}},wkk4:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("fZjL")),i=r(n("9Vme")),a=r(n("zxuL"));(0,n("JR0G").generate)(a.default.expand);var u=new i.default("ann-log");u.config=function(t){t&&(0,o.default)(a.default).forEach(function(e){void 0!==a.default[e]&&(a.default[e]=t[e])})},u.create=function(t,e){return t||u.warn("please input name"),new i.default(t||"null",e)},e.default=u},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},wsaK:function(t,e,n){t.exports={reportPerformance:function(t,e){wx.canIUse&&wx.canIUse("reportPerformance")&&wx.reportPerformance(t,e)},reportMonitor:function(t,e){wx.canIUse&&wx.canIUse("reportMonitor")&&wx.reportMonitor(t,e)},reportAnalytics:function(t,e){wx.canIUse&&wx.canIUse("reportAnalytics")&&wx.reportAnalytics(t,e)}}},wxAW:function(t,e,n){e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("C4MV"));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},x94J:function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o,i=r(n("YQ7m")),a=r(n("pFYg"));!function(r){function u(){}function s(t){if("object"!==(0,a.default)(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function c(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,s._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void f(e.promise,t)}l(e.promise,r)}else(1===t._state?l:f)(e.promise,t._value)})):t._deferreds.push(e)}function l(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===(void 0===e?"undefined":(0,a.default)(e))||"function"==typeof e)){var n=e.then;if(e instanceof s)return t._state=3,t._value=e,void p(t);if("function"==typeof n)return void h(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,p(t)}catch(e){f(t,e)}}function f(t,e){t._state=2,t._value=e,p(t)}function p(t){2===t._state&&0===t._deferreds.length&&s._immediateFn(function(){t._handled||s._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)c(t,t._deferreds[e]);t._deferreds=null}function h(t,e){var n=!1;try{t(function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,f(e,t))})}catch(t){if(n)return;n=!0,f(e,t)}}var d=setTimeout;s.prototype.catch=function(t){return this.then(null,t)},s.prototype.then=function(t,e){var n=new this.constructor(u);return c(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},s.all=function(t){var e=Array.prototype.slice.call(t);return new s(function(t,n){function r(i,u){try{if(u&&("object"===(void 0===u?"undefined":(0,a.default)(u))||"function"==typeof u)){var s=u.then;if("function"==typeof s)return void s.call(u,function(t){r(i,t)},n)}e[i]=u,0==--o&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var o=e.length,i=0;i<e.length;i++)r(i,e[i])})},s.resolve=function(t){return t&&"object"===(void 0===t?"undefined":(0,a.default)(t))&&t.constructor===s?t:new s(function(e){e(t)})},s.reject=function(t){return new s(function(e,n){n(t)})},s.race=function(t){return new s(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},s._immediateFn="function"==typeof i.default&&function(t){(0,i.default)(t)}||function(t){d(t,0)},s._unhandledRejectionFn=function(t){if(t instanceof Error)throw t;"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},s._setImmediateFn=function(t){s._immediateFn=t},s._setUnhandledRejectionFn=function(t){s._unhandledRejectionFn=t},void 0===(o=function(){return s}.call(e,n,e,t))||(t.exports=o),void 0!==t&&t.exports?t.exports=s:r.Promise||(r.Promise=s)}(void 0)},xGkn:function(t,e,n){var r=n("4mcu"),o=n("EGZi"),i=n("/bQp"),a=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},"xH/j":function(t,e,n){var r=n("hJx8");t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},"xK/D":function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("ngLp"),o=n.n(r),i=n("zceV"),a=n("ybqe")(o.a,i.a,function(t){n("/puD")},"data-v-3a7796e4",null);e.default=a.exports},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},y5FK:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n("Dd8w"));e.reportEyes=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"xg",i={};t.params&&t.params.forEach(function(t){i[t]=e[t]}),o.Request.reportData((0,r.default)({sop:n+"."+t.key},i))};var o=n("niax")},yGNt:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n("9pEC"),o=n.n(r),i=n("stbx"),a=n("ybqe")(o.a,i.a,function(t){n("io0b")},"data-v-81577654",null);e.default=a.exports},yX63:function(t,e,n){t.exports={klineDefaultColor:{white:{border:"#E6E6E6",rise:"#e63535",drop:"#2db955",zoombg:"rgba(0, 0, 0, 0.1)"},black:{border:"#1b2a3b",rise:"#B63901",drop:"#31A632",zoombg:"#26292F"}},minusColorConfig:{white:{border:"#E6E6E6",middledashLine:"#e63535",fill:["rgba(66,128,242,0.1)","rgba(66,128,242,0.1)"],splitLine:"#E6E6E6",rise:"#e63535",drop:"#2db955",zoombg:"rgba(0, 0, 0, 0.1)",priceLine:"#007aff",avgLine:"#ff891e"},black:{border:"#1b2a3b",middledashLine:"#768c70",fill:["rgba(27,42,59,.5)","rgba(27,42,59,.5)"],splitLine:"#1d2228",rise:"#B63901",drop:"#31A632",zoombg:"#26292F",priceLine:"#bbe7ff",avgLine:"#f4cf1e"}}}},ybqe:function(e,n){e.exports=function(e,n,r,o,i){var a,u=e=e||{},s=t(e.default);"object"!==s&&"function"!==s||(a=e,u=e.default);var c,l="function"==typeof u?u.options:u;if(n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns),o&&(l._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?l.render=function(t,e){return c.call(e),p(t,e)}:l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:u,options:l}}},zBqZ:function(t,e,n){function r(t,e){return t&&t.hasOwnProperty&&t.hasOwnProperty(e)}var o=function(t){return t&&t.__esModule?t:{default:t}}(n("fZjL")),i={type:function(t){if(null===t)return"null";if(void 0===t)return"undefined";var e=/\[object (\w+)\]/.exec(Object.prototype.toString.call(t));return e?e[1].toLowerCase():""},bind:function(t,e){return t.bind?t.bind(e):function(){return t.apply(e,arguments)}},extend:function(t){if("object"!=i.type(t)&&"function"!=i.type(t))return t;for(var e,n,o=1,a=arguments.length;o<a;o++)for(n in e=arguments[o])r(e,n)&&(t[n]=e[n]);return t},forEach:function(t,e){if(t.forEach)return t.forEach(e);for(var n=t.length,r=0;r<n;r++)e(t[r],r);return t},objEach:function(t,e){if(t)for(var n in t)if(r(t,n)&&!1===e(n,t[n]))break},nextTick:"function"==typeof requestAnimationFrame?function(){requestAnimationFrame.apply(window,arguments)}:function(){setTimeout.apply(window,arguments)},lock:function(t){var e;return function(){if(!e){e=!0;var n=[].slice.call(arguments,0);return n.unshift(function(){e=!1}),t.apply(this,n)}}},queue:function(t,e){var n=[],r=e=e||1;return function(){if(n.push([t,this,[].slice.call(arguments,0)]),r)return function t(){var o=n.shift();if(o){r--;var a=o[0],u=o[1],s=o[2];s.unshift(function(){r++,t.apply(this,arguments)}),i.nextTick(function(){return a.apply(u,s)})}else r=e}()}},delegator:function(t){var e,n=[];return function(r){if(e)return n.push(r);e=!0,t.call(this,function(){e=!1;var t=this,o=arguments;r&&r.apply(t,o),i.forEach(n,function(e){e&&e.apply(t,o)})})}},once:function(t){var e,n=arguments;return function(){if(!e&&t)return e=!0,t.apply(n.length>=2?n[1]:null,arguments)}},queryParse:function(t,e){if(!t)return{};e=e||"&";var n=t.replace(/^\?/,""),r={},o=n?n.split(e):null;return o&&o.length>0&&o.forEach(function(t){var e=(t=t.split("=")).splice(0,1),n=t.join("=");r[e]=n}),r},queryJoin:function(t,e,n){var r=i.queryStringify(e,"&",n);return r?t+(/[\?&]$/.test(t)?"":~t.indexOf("?")?"&":"?")+r:t},queryStringify:function(t,e,n){return t?(0,o.default)(t).map(function(e){var r=t[e];return e+"="+(n?r:encodeURIComponent(r))}).join(e||"&"):""},hltext:function(t){var e=[],n=[],r=1;return t.replace(/\u0005(.*?)\u0006/g,function(t,n){return e.push({id:r++,w:n,hl:!0}),"_hlspliter_"}).split("_hlspliter_").forEach(function(t){n.push({id:r++,w:t,hl:!1}),e.length&&n.push(e.shift())}),{raw:t,text:(n=n.reduce(function(t,e){return e.w&&t.push(e),t},[])).map(function(t){return t.w}).join(""),parts:n}}};t.exports=i},zQR9:function(t,e,n){var r=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},zceV:function(t,e,n){var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[t.showMore&&!t.showLoading?n("view",{class:["more",t.color],attrs:{eventid:"0"},on:{click:t.bindLoadingMore}},[n("view",{staticClass:"text"},[t._v(t._s(t.moreNewsBtn))])]):t._e(),t._v(" "),!t.showNoMore||t.showMore||t.showLoading?t._e():n("view",{class:["more",t.color]},[n("view",{staticClass:"text"},[t._v(t._s(t.moreNewsBtn))])]),t._v(" "),t.showLoading?n("view",{staticStyle:{height:"100rpx",width:"100%"}},[n("view",{class:["loadEffect",t.rotate,t.color]},[n("view",{staticClass:"v v1"}),t._v(" "),n("view",{staticClass:"v v2"}),t._v(" "),n("view",{staticClass:"v v3"}),t._v(" "),n("view",{staticClass:"v v4"}),t._v(" "),n("view",{staticClass:"v v5"}),t._v(" "),n("view",{staticClass:"v v6"}),t._v(" "),n("view",{staticClass:"v v7"}),t._v(" "),n("view",{staticClass:"v v8"})])]):t._e()])},staticRenderFns:[]};e.a=r},zmq6:function(t,e,n){function r(t,e){t=wx.createCanvasContext(t),i.call(this,t,e)}var o=n("noXn"),i=n("8WQo"),a=n("937u"),u=n("znIw"),s=n("P90k");(r.prototype=new i).initialize=function(){var t,e,n=[],r=[],i=[],a=this.options,u=a.data.items;o.each(u,function(t,e){var o=parseFloat(t.K),a=parseFloat(t.D),u=parseFloat(t.J);isNaN(o)||n.push(o),isNaN(a)||r.push(a),isNaN(u)||i.push(u)}),n.length>a.maxCount&&(n=n.slice(n.length-a.maxCount),r=r.slice(r.length-a.maxCount),i=i.slice(i.length-a.maxCount)),o.each(n,function(n,a){var u=[n,r[a],i[a]],s=Math.max.apply([],u),c=Math.min.apply([],u);t=void 0===t?s:parseFloat(o.isMore(s,t)?s:t),e=void 0===e?c:parseFloat(o.isLess(c,e)?c:e)}),a.middleValue=o.div(t+e,2),this.kOptions={region:a.region,data:{items:n},maxCount:a.maxCount,middleValue:a.middleValue,color:a.kColor},this.dOptions={region:a.region,data:{items:r},maxCount:a.maxCount,middleValue:a.middleValue,color:a.dColor},this.jOptions={region:a.region,data:{items:i},maxCount:a.maxCount,middleValue:a.middleValue,color:a.jColor}},r.prototype.paintGrid=function(){var t=this.ctx,e=this.options,n={region:e.region,clearRegion:!0,verticalLine:e.verticalLine||0,horizontalLine:e.horizontalLine||0,color:e.gridColor,vGridXPos:e.vGridXPos};new a(t,n).paint()},r.prototype.paintYAxis=function(){this.ctx;var t=this.options;if(t.yAxis){var e=t.yAxis,n=[{text:80,color:e.color},{text:50,color:e.color},{text:20,color:e.color}];void 0===e.clearRegion&&(e.clearRegion=!0),e.data={items:n},new u(this.ctx,e).paint()}},r.prototype.paint=function(){var t=this.ctx;this.options.region,this.initialize(),this.paintGrid();var e=new s(t,this.kOptions),n=new s(t,this.dOptions),r=new s(t,this.jOptions);e.paint(),n.paint(),r.paint(),this.paintYAxis(),t.draw(!0)},t.exports=r},znIw:function(t,e,n){function r(t,e){o.call(this,t,e)}var o=n("8WQo"),i=n("noXn");(r.prototype=new o).initialize=function(){var t=this.ctx,e=this.options,n=e.region;!0===e.clearRegion&&t.clearRect(n.x,n.y,n.width,n.height),void 0===e.textAlign&&(e.textAlign="left")},r.prototype.start=function(){var t=this.ctx,e=this.options,n=e.region;t.save(),t.setFillStyle(e.color),t.setFontSize(e.font),t.translate(n.x,n.y)},r.prototype.getX=function(t){var e=this.options,n=e.region;switch(e.textAlign){case"left":return 0;case"right":return n.width;case"center":return n.width/2;default:return 0}},r.prototype.getY=function(t){var e=this.options,n=this.options.font,r=this.options.data&&this.options.data.items&&this.options.data.items.length;return 0==t?0:t==r-1?e.region.height:e.region.height*t/(r-1)+i.div(n,2)},r.prototype.paintItem=function(t,e,n){var r,o=this.ctx,i=this.options,a=i.data.items[t],u=i.data&&i.data.items&&i.data.items.length;r=0==t?"top":t==u-1?"bottom":"middle",a&&a.color&&a.text?(o.textBaseline=r,o.setFillStyle(a.color),o.setTextAlign(i.textAlign),o.fillText(a.text,e,n)):"string"==typeof a&&(o.textBaseline=r,o.setTextAlign(i.textAlign),o.fillText(a,e,n))},t.exports=r},zwoO:function(t,e,n){e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("pFYg"));e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},zxuL:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={level:!0,throwError:!1,expand:{console:{printTime:!0},wxlogreport:{printTime:!0}}}}}); 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("./common/manifest.js"),require("./common/vendor.js"),global.webpackJsonpMpvue([6],{"2QMx":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CDNQUALITY={duration:"delay",name:"resurl",type:"type"},t.REPORTTYPES=["css","script","img","video","audio"],t.NOREPORTTYPES=["cdn","cgi"]},"3/SN":function(e,t){},"7ivo":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.autoRetain=t.filterCgiResp=t.getRetCodeOrMsg=t.traversal=t.getLocalUniqueId=t.merge=t.transformRc=t.isNumeric=t.doReport=t.formatParams=t.debounce=t.isReport=t.getCookie=t.getUrlParam=t.processStackMsg=t.emptyFunction=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n("woOf")),r=n("YPKI"),a=n("xVzF"),i=n("2QMx"),s=n("aMW0");t.emptyFunction=function(){},t.processStackMsg=function(e){var t=e.stack.replace(/\n/gi,"").replace(/\bat\b/gi,"@").split("@").slice(0,9).map(function(e){return e.replace(/^\s*|\s*$/g,"")}).join("~").replace(/\?[^:]+/gi,""),n=e.toString();return t.indexOf(n)<0&&(t=n+"@"+t),t};var c=t.getUrlParam=function(e){var t=e.name,n=e.url,o=void 0===n?window.location.href:n;t=t.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(o);return r&&r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):""},u=t.getCookie=function(e){for(var t=encodeURIComponent(e)+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return decodeURIComponent(r.substring(t.length,r.length))}return null},l=(t.isReport=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.random()<=e},t.debounce=function(e,t,n){var o=null;return function(){for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=this;clearTimeout(o),o=setTimeout(function(){e.apply(s,a),"function"==typeof n&&n()},t)}},t.formatParams=function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}),p=(t.doReport=function(e){var t=e.baseUrl,n=e.data,o=e.method,r=void 0===o?"GET":o;if("GET"===r){var a=new Image;a.onerror=function(){a=null},a.onload=function(){a=null},a.src=t+"&"+l(n)}else if("POST"===r)try{var i=null;(i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("POST",t,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(l(n))}catch(e){console.warn("xmlhttp error",e)}},t.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},t.transformRc=function(e){var t=[];return(0,r.isArray)(e)&&e.forEach(function(e){var n={};for(var o in e)if(i.CDNQUALITY[o]&&(n[i.CDNQUALITY[o]]=e[o],"resurl"===i.CDNQUALITY[o])){var r=(0,a.parseLink)(e[o]),s=r.hostname,c=r.path;n.reshost=s,n.respath=c,n.httpcode=200}t.push(n)}),t},t.merge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},a=[];if((0,r.isObject)(t))for(var i in t)-1!==s.CANMODIFYKEYS.indexOf(String(i))?(n[i]=t[i],a.push(i)):console.warn(i,"could not be modify.");return(0,o.default)({},e,n)},t.getLocalUniqueId=function(){var e="";try{if(e=window.localStorage.getItem("emonitor.hc_pgv_pvid"))return e;var t=(new Date).getTime();return e="ek"+[t,Math.floor(t*Math.random()*Math.random()).toString().slice(-5)].join(""),window.localStorage.setItem("emonitor.hc_pgv_pvid",e),e}catch(t){return console.warn("emonitor.hc_pgv_pvid get error",t),e}},t.traversal=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=void 0;return String(t).split(".").forEach(function(t){try{o=void 0!==o?o[t]:e[t]}catch(e){o=void 0}}),void 0===o?n:o}),d=t.getRetCodeOrMsg=function(e){var t=e.data,n=void 0===t?{}:t,o=e.path,a=void 0===o?"":o,i="";if((0,r.isObject)(n)){if((0,r.isString)(a))return p(n,a,"");if((0,r.isArray)(a))return a.forEach(function(e){if(""!==p(n,e,""))return i=p(n,e),!1}),i}return""};t.filterCgiResp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})||{},n=t.code,o=t.msg,a={};if((0,r.isObject)(e))a=e;else try{a=JSON.parse(e)}catch(e){a={}}return{bizcode:d({data:a,path:n}),bizmsg:d({data:a,path:o})}},t.autoRetain=function(e){var t="";if(!(0,r.isString)(e))return console.warn("name is not string"),t;try{return 0===(t=c({name:e})).length&&(t=u(e)||""),t}catch(e){return console.error("Automatically get the value of the corresponding name from the url or cookie "+e),t}}},"9m0k":function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.parseLink=t.param2Stack=t.param2String=t.getUrlParam=t.getUuId=t.doReport=void 0;var r=o(n("mvHQ")),a=o(n("pFYg")),i=o(n("woOf"));t.doReport=function(e){var t=e.baseUrl,n=e.data,o=e.method,r=void 0===o?"GET":o;e.off,wx.request({url:t,method:r,data:(0,i.default)({},n),header:{"content-type":"application/x-www-form-urlencoded"},success:function(){},fail:function(){}})},t.getUuId=function(){var e=wx.getStorageSync("openid");if(e)return e;var t=wx.getStorageSync("pecker_uuid");return t||(t=function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}(),wx.setStorageSync("pecker_uuid",t),t)},t.getUrlParam=function(e){var t=e.name,n=getCurrentPages(),o=n[n.length-1];return t=t.replace(/[\[\]]/g,"\\$&"),o?decodeURIComponent(o.options[t]):""},t.param2String=function(e){var t=[];return e.map(function(e){return"object"===(void 0===e?"undefined":(0,a.default)(e))?e instanceof Error?t.push(e.message):t.push((0,r.default)(e)):t.push(e),e}),t},t.param2Stack=function(e){var t=[];return e&&e instanceof Array&&e.map(function(e){return e instanceof Error&&t.push(e.stack),e}),t},t.parseLink=function(e){if(!e)return{};var t=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/),n={};return t&&(n={href:e,protocol:t[1]?t[1].slice(0,-1):t[1],host:t[2],hostname:t[3],port:t[4],path:t[5],search:t[6],hash:t[7]}),n}},KUW1:function(e,t,n){(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(t,n){void 0!==e&&(e[t]=n)}Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var a=o(n("mvHQ")),i=o(n("C4MV")),s=o(n("woOf")),c=o(n("Zrlr")),u=o(n("wxAW")),l=n("niax"),p=n("7ivo"),d=n("WlpC"),f=n("YPKI"),g=n("9m0k"),h=n("m1d6"),v=!(!wx||!(0,f.isFunction)(wx.getLogManager))&&wx.getLogManager(),m=0,_=function(){function t(e,n){var o=e.options,r=void 0===o?{}:o,a=e.baseUrl,i=void 0===a?{}:a,s=e.openid,u=e.codekey,l=e.sampling,p=void 0===l?1:l,d=e.delay,f=void 0===d?2e3:d,h=e.name,v=e.cgi,m=e.explicit,_=e.params,y=void 0===_?[]:_,w=e.onBeforeSend,x=e.maxConsoleNum,b=void 0===x?30:x,S=e.logs,P=void 0===S?{sampling:1,baseUrl:""}:S,R=e.off,k=void 0===R?[]:R;(0,c.default)(this,t),this.options=r,this.errorList=[],this.baseUrl=i,this.sampling=p,this.params=y,this.delay=f,this.name=h,this.openid=s,this.codekey=u,this.uuid=(0,g.getUuId)(),this.ctx=n,this.explicit=m,this.sysInfo=wx.getSystemInfoSync()||{},this.onBeforeSend=w,this.cgi=v,this.maxConsoleNum=b,this.off=k,this.logs=P}return(0,u.default)(t,[{key:"init",value:function(){try{this.proxyRequest(),this.proxyLifeCycle(),(0,f.isArray)(this.off)&&this.off.indexOf("console")<0&&this.proxyConsole(),this.injectOptions()}catch(e){this.send({err_msg:"mina emonitor init happen error",err_stack:""+e,err_function:"mina emonitor init func",err_desc:""+e,err_type:"jserror",err_code:""},!1,this.baseUrl.error)}}},{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)this[t]=e[t];return this}},{key:"getPureOption",value:function(e){var t={};for(var n in e)"function"!=typeof e[n]&&(t[n]=e[n]);return t}},{key:"_reportCgi",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.baseUrl;if((void 0===t?{}:t).cgi){var n=e.cgiurl,o=(0,g.parseLink)(n),r=o.host,a=o.path;Math.random()<=this.sampling&&this.send((0,s.default)({cgipath:a,cgihost:r,bizcode_server:""},e),!0,this.baseUrl.cgi)}}},{key:"_proxyRequest",value:function(e,t){var n=this,o=n.off,r=void 0===o?[]:o,s=wx[t],c=((0,f.isObject)(n.cgi)?n.cgi:{}).okBizmsg,u=void 0===c||c;return(0,i.default)(e,t,{writeable:!0,configurable:!0,enumerable:!0,value:function(){for(var e=this,o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];var l=i[0],p=l.fail,f=+new Date,h="btrace.qq.com"===(0,g.parseLink)(l.url).host;i[0].fail=function(){for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return h||(n.send({err_msg:"wx."+t+" error",err_stack:""+(0,a.default)(n.getPureOption(l)),err_function:"wx."+t+" fail callback",err_desc:""+r[0].errMsg,err_type:""+d.ERRORTYPES.AJAX,err_code:"[wx."+t+"]fail"},!0,n.baseUrl.error),n._reportCgi({cgiurl:l.url,delay:Math.round(+new Date-f),httpcode:"(failed)",s_from1:(0,a.default)(l.data),bizcode:"",bizmsg:r[0].errMsg,starttime:f})),p?p.apply(e,r):null};var v=l.success;return i[0].success=function(){for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];var c="";if(!h){if(200!==i[0].statusCode)n.send({err_msg:"wx."+t+" error",err_stack:""+(0,a.default)(n.getPureOption(l)),err_function:"wx."+t+" success callback",err_desc:""+i[0].data,err_type:""+d.ERRORTYPES.AJAX,err_code:"[wx."+t+"][statusCode]"+i[0].statusCode},!0,n.baseUrl.error);else{var p=i[0].data;if(p){void 0!==p[n.codekey]?c=p[n.codekey]:void 0!==p.ret?c=p.ret:void 0!==p.status?c=p.status:void 0!==p.code&&(c=p.code),"string"==typeof c&&/^[\d]+$/.test(c)&&(c=parseInt(c,10));var g=Array.isArray(r)&&-1!==r.indexOf("reqsuc");void 0!==c&&c&&!g&&n.send({err_msg:"wx."+t+" error",err_stack:""+(0,a.default)(n.getPureOption(l)),err_function:"wx."+t+" success callback",err_desc:""+(0,a.default)(p),err_type:""+d.ERRORTYPES.AJAX,err_code:"[wx."+t+"][httpsCode]"+c},!0,n.baseUrl.error)}}n._reportCgi({cgiurl:l.url,delay:Math.round(+new Date-f),httpcode:i[0].statusCode,s_from1:(0,a.default)(l.data),bizcode:c,bizmsg:u?(0,a.default)(i[0].data):"",starttime:f})}return v?v.apply(e,i):null},s.apply(this,i)}}),e[t]}},{key:"proxyRequest",value:function(){var e=this;["request","downloadFile"].map(function(t){return e._proxyRequest(e.explicit?e:wx,t)})}},{key:"proxyLifeCycle",value:function(){var t=this,n=void 0!==e?e.App:App,o=function(e){e.__emonitor__=e.__emonitor__||{};var o=e.onError;e.onError=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.send({err_msg:"mina script error or api execute error",err_stack:""+n[0],err_function:"App onError",err_desc:"",err_type:"jserror",err_code:""},!0,t.baseUrl.error),o?o.apply(this,n):null};var r=e.onLaunch;e.onLaunch=function(){e.__emonitor__.launch=+new Date;for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return r?r.apply(this,n):null};var a=e.onShow;e.onShow=function(){e.__emonitor__.launch&&(e.__emonitor__.show=+new Date,e.__emonitor__.launch&&(e.__emonitor__.launchTime=e.__emonitor__.show-e.__emonitor__.launch),e.__emonitor__.launch=0);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return a?a.apply(this,n):null},n(e)};this.explicit?this.App=o:App=o,r("App",o);var a=void 0!==e?e.Page:Page,i=function(e){var n=null;getApp&&(n=new getApp),e.__emonitor__=e.__emonitor__||{};var o=e.onLoad;e.onLoad=function(){e.__emonitor__.load=+new Date;for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return o?o.apply(this,n):null};var r=e.onShow;e.onShow=function(){e.__emonitor__.load&&(e.__emonitor__.show=+new Date),function(){var e=getCurrentPages();if(e&&e.length){var t=e[e.length-1];l.Request.reportMTAData({eventName:t.route})}}();for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return r?r.apply(this,n):null};var i=e.onReady;e.onReady=function(){e.__emonitor__.load&&(e.__emonitor__.ready=+new Date,t.send({time_domready:e.__emonitor__.ready-e.__emonitor__.load,time7:e.__emonitor__.show-e.__emonitor__.load,time8:n&&n.__emonitor__?n.__emonitor__.launchTime:0},!1,t.baseUrl.page),e.__emonitor__.load=0);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return i?i.apply(this,r):null};var s=e.onHide;e.onHide=function(){e.__emonitor__.show&&(e.__emonitor__.hide=+new Date),function(){var t=getCurrentPages();if(t&&t.length){var n=t[t.length-1];l.Request.reportMTAData({eventName:n.route+"_stay_time",time:e.__emonitor__.hide-e.__emonitor__.show})}}();for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return s?s.apply(this,n):null},a(e)};this.explicit?this.Page=i:Page=i,r("Page",i)}},{key:"proxyConsole",value:function(){var e=this,t=this,n=t.maxConsoleNum;if("undefined"!=typeof console&&"function"==typeof console.error&&"devtools"!==this.sysInfo.platform){var o=console.error,r=console.log;console.error=function(){for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];o.apply(e,a),"number"==typeof n&&m++>=n?console.warn("Console log report reaches the maximum limit"):t.send({err_msg:(0,g.param2String)(a).join(","),err_stack:(0,g.param2Stack)(a).join("\r\n"),err_function:"console.error",err_desc:"",err_type:"console",err_code:""},!1,t.baseUrl.error),(0,f.isFunction)(v)?v.warn("["+(t.openid?t.openid:t.uuid)+"]",(0,g.param2String)(a).join(" "),(0,g.param2Stack)(a).join("\r\n")):t.log({level:"warn",log:"["+(t.openid?t.openid:t.uuid)+"] "+(0,g.param2String)(a).join(" ")})},console.log=function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];r.apply(e,o),(0,f.isFunction)(v)?v.debug("["+(t.openid?t.openid:t.uuid)+"]",(0,g.param2String)(o).join(" "),(0,g.param2Stack)(o).join("\r\n")):t.log({level:"warn",log:"["+(t.openid?t.openid:t.uuid)+"] "+(0,g.param2String)(o).join(" ")})}}}},{key:"injectOptions",value:function(){var e=this;e.params.forEach(function(t){e.options[t]=(0,g.getUrlParam)({name:t})}),"string"==typeof e.options.qq&&e.options.qq.length>0&&(e.options.openid="")}},{key:"send",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments[2],o=this,r=o.off,a=void 0===r?[]:r,i=e.err_type,c=void 0===i?"console":i,u=-1!==a.indexOf("success");if((0,p.isReport)(o.sampling)){var l="jserror"===c?300:o.delay,d=(0,p.debounce)(g.doReport,l,function(){o.errorList=[]}),v=getCurrentPages(),m=v[v.length-1]||{},_=this.sysInfo,y=wx.getAccountInfoSync?wx.getAccountInfoSync():null,w=_.model+";"+_.system+";"+_.brand+";"+_.platform+";BatteryLevel:"+_.batteryLevel+";MicroMessenger/"+_.version+";SDK/"+_.SDKVersion+";Language/"+_.language,x=(0,s.default)({},this.options,e,{timestamps:(new Date).getTime(),url:"/"+m.route,ua:w,_dc:Math.random(),dtime:(new Date).getTime(),hh_ua:w,hh_uav:_.version,hh_ref:"https://servicewechat.com/"+(y?y.miniProgram.appId:"appidmissed")+"/"+_.SDKVersion+"/page-frame.html",s_url:"/"+m.route,s_host:"wxapp."+o.name,s_path:"/"+m.route,s_protocol:"https",s_browser:"MicroMessenger MiniProgram",s_os:_.system,s_qq:"",s_uuid:this.uuid,s_openid:this.openid||this.uuid,s_app:o.name}),b=o.onBeforeSend;if((0,f.isFunction)(b))try{var S=b((0,h.normalizeWillReport)(x));if("boolean"==typeof S&&!S)return;(0,f.isObject)(S)&&(x=(0,p.merge)(x,S))}catch(e){console.warn(e)}d({baseUrl:n,data:x,method:t?"POST":"GET",off:u})}}},{key:"log",value:function(){var e=(this.baseUrl||{}).flowlog,t=(this.logs||{}).sampling,n=void 0===t?1:t;if(e){for(var o={level:"",log:""},r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];a.length>1?o={level:a[0],log:a[1]}:(0,f.isObject)(a[0])?o=a[0]:console.warn("log params is empty"),Math.random()<=n&&this.send((0,s.default)({},o),!0,this.baseUrl.flowlog)}}},{key:"report",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.send({err_msg:(0,g.param2String)(t).join(","),err_stack:"",err_function:"",err_desc:"",err_type:"custom",err_code:""},!0,this.baseUrl.error)}}]),t}();t.create=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options,n=void 0===t?{}:t,o=e.baseUrl,r=e.delay,a=void 0===r?2e3:r,i=e.openid,s=e.codekey,c=e.cgi,u=void 0===c?{}:c,l=e.sampling,d=void 0===l?1:l,f=e.name,g=void 0===f?"news_miniapp":f,h=e.explicit,v=void 0!==h&&h,m=e.params,y=void 0===m?["qq","openid","tbkt","ft","pushid"]:m,w=e.onBeforeSend,x=void 0===w?p.emptyFunction:w,b=e.maxConsoleNum,S=void 0===b?30:b,P=e.off,R=void 0===P?[]:P,k=e.logs,A=void 0===k?{sampling:1}:k,I=arguments[1],C=new _({options:n,baseUrl:o,params:y,delay:a,openid:i,codekey:s,name:g,explicit:v,sampling:d,onBeforeSend:x,cgi:u,off:R,logs:A,maxConsoleNum:S},I);return C.init(),C},r("emonitor",t)}).call(t,n("DuR2"))},M93x:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("QKyS"),r=n.n(o),a=n("ybqe")(r.a,null,function(e){n("3/SN")},null,null);t.default=a.exports},QKyS:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var a=n("niax"),i=n("YhAN"),s=n("uxEl"),c=n("y5FK"),u=r(n("Dk3b")),l=o(n("33ci")),p=r(n("7FL1")),d=n("xQM3"),f=n("280F"),g=n("KUW1"),h=o(n("9JwV")),v=n("NpZb"),m=n("/1L7"),_=n("VBVG"),y=n("EUYj"),w=n("02iA"),x=n("eyXq"),b=n("dv6X"),S=n("XoD1"),P=v.DEALER;new f.KeyPointReport(d.monitorConfig),a.Request.auth().then(function(e){var t=e.qluin||"";(0,g.create)({baseUrl:{page:"https://btrace.qq.com/kvcollect?BossId=6529&Pwd=1714580587",error:"https://btrace.qq.com/kvcollect?BossId=6527&Pwd=1102151080",slowlog:"https://btrace.qq.com/kvcollect?BossId=6523&Pwd=1202531240",cgi:"https://btrace.qq.com/kvcollect?BossId=6528&Pwd=96045012"},name:"zxg_mp",openid:t,explicit:!1,onBeforeSend:function(e){},cgi:{okBizmsg:!1}}),p.init({minaContext:wx,dsn:"https://97ef7960a7204ef381cd542da1c22608@report.url.cn/sentry/1842"}),p.configureScope(function(e){e.setUser({openid:t})})}),App({VERSION:"0.1",APPID:m&&m.appid,APPNAME:m&&m.appname,CGI_PREFIX:"/cgi-bin/",reLoginCount:0,USERSTATE:v.USERSTATE,MARKET:v.MARKET,MARKETSTATE:v.MARKETSTATE,STOCKSTATE:v.STOCKSTATE,DEALER:P,Event:new i.Event,RequestApi:a.Request,initCallback:function(){},init:function(e){"function"!=typeof e&&(this.initCallback=function(){}),_.isLogin()?e():_.reLogin(e)},showError:function(e,t){var n=this;e=e&&e.toString(),/^510010\d\d$/.test(t)&&this.reLoginCount<2?_.reLogin(function(){n.initCallback()}):wx.showModal({title:"",content:e,showCancel:!1,confirmText:"我知道了"})},showMsg:function(e,t){wx.showModal({title:t||"",content:e,showCancel:!1,confirmText:"我知道了"})},showTips:function(e){wx.showToast({title:e||"",icon:"none",duration:2e3})},rpxToPx:function(e){return e*=wx.getSystemInfoSync().windowWidth/375,Math.floor(e/2)},throttle:function(e,t){var n=0;return function(){var o=+new Date;o-n>e&&(t.apply(this,arguments),n=o)}},openStock:function(){var e=Date.now();return function(t,n){Date.now()-e<1e3||(e=Date.now(),wx.navigateTo({url:"/pages/quote/quote?scode="+t+"&market="+n}))}}(),openWebview:function(){var e=Date.now();return function(t){Date.now()-e<1e3||(e=Date.now(),wx.canIUse("web-view")?wx.navigateTo({url:"/pages/additional/webview/index?url="+encodeURIComponent("https://"+P.WZQ.DOMAIN+"/weixin/v1/"+t)}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用内嵌H5功能，请升级到最新微信版本后重试。",showCancel:!1}))}}(),openCrossWebview:function(){var e=Date.now();return function(t){if(!(Date.now()-e<1e3)){e=Date.now();var n="";wx.canIUse("web-view")?y.get(function(e){switch(e.dealercode){case P.CMSCHINA.CODE:n=P.CMSCHINA.DOMAIN;break;case P.CHINALIONS.CODE:n=P.CHINALIONS.DOMAIN;break;case P.CNHB.CODE:n=P.CNHB.DOMAIN}wx.navigateTo({url:"/pages/additional/webview/index?url="+encodeURIComponent("https://"+n+"/weixin/v1/"+t)})}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用内嵌H5功能，请升级到最新微信版本后重试。",showCancel:!1})}}}(),onLaunch:function(e){var t=this;wx.getStorageSync("user/skin")&&this.setSkin(),this.isGetFreshSkin=!1,a.Request.reportData({sop:"Zxg_active",scene:e.scene,platform:e.query.platform,path:encodeURIComponent(e.path)},!0),h.default.init({appID:"500391123",eventID:"500391126",statPullDownFresh:!0,statShareApp:!0,statReachBottom:!0}),this.init(function(){t.checkUpdate(),l.default.queryUserStock(b)})},onShow:function(e){console.log("base_config",m),this.scene=e.scene},onHide:function(){S.emit("global:onHide")},onError:function(e){console.log(e),p.captureMessage(e)},navigateTo:function(){var e=Date.now();return function(t){Date.now()-e<1e3||(e=Date.now(),wx.navigateTo(t))}}(),getNotice:function(){this.noticeData=[{title:"金句活动发奖了 来看你有奖吗",content:"pages/index_activity_notify/pages/activity/hotpostReward/main",type:"2",inner:1},{title:"股民金句第二波公布 金句最高奖1888元",content:"pages/index_activity_notify/pages/activity/hotpost/main",type:"2",inner:1}],this.noticeData=[]},device:wx.getSystemInfoSync(),util:w,wx:b,amount:x,mta:h.default,checkUpdate:function(){if(wx.canIUse("getUpdateManager")&&"off"!=m.publishUpdateTipStyle){var e=wx.getUpdateManager();e.onCheckForUpdate(function(e){console.log(e.hasUpdate)}),e.onUpdateReady(function(){"on"==m.publishUpdateTipStyle?e.applyUpdate():"serverget"==m.publishUpdateTipStyle&&b.request({url:"/cgi-bin/check_config.fcgi",data:{project:m.appname},success:function(t){"1"===t.b_popup&&e.applyUpdate()}})})}},resetMeTab:function(){(0,s.setTabItem)(wx.getStorageSync("user/skin"),4)},isGetFreshSkin:!1,setSkin:function(e){var t=this,n=wx.getStorageSync("user/skin");n&&this.isGetFreshSkin?(this.setAppConfig(n),e&&e(n)):y.get(!0,function(n){t.isGetFreshSkin=!0,n.front_skin=n.front_skin.replace(/“/g,'"');var o=JSON.parse(n.front_skin||"{}").xcx||"white";wx.setStorageSync("user/skin",o),t.setAppConfig(o),e&&e(o)})},setAppConfig:function(e){(0,s.setTabs)(e),"white"===e?(wx.setTabBarStyle({color:"#12161F",selectedColor:"#3077ec",backgroundColor:"#FFFFFF",borderStyle:"white"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff",animation:{duration:0,timingFunc:"easeIn"}}),wx.setBackgroundTextStyle({textStyle:"dark"}),wx.setBackgroundColor({backgroundColor:"#F5F6FA"})):(wx.setTabBarStyle({color:"#98a0b3",selectedColor:"#3077ec",backgroundColor:"#1d2228",borderStyle:"black"}),wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#1d2228",animation:{duration:0,timingFunc:"easeIn"}}),wx.setBackgroundTextStyle({textStyle:"light"}),wx.setBackgroundColor({backgroundColor:"#101419"}));var t=this;y.get(function(e){t.queryNotifys(e)})},getPhoneModel:function(e){return(e=e.replace(/\s/g,"").toLowerCase()).indexOf("iphonexsmax")>=0||e.indexOf("iphonexr")>=0?"iphonexsmax":e.indexOf("iphonexs")>=0||e.indexOf("iphonex")>=0?"iphonex":void 0},reportData:function(e){a.Request.reportData(e)},reportMTAData:function(e){a.Request.reportMTAData(e)},reportEyes:function(e,t,n){(0,c.reportEyes)(e,t,n)},BEHAVIOR:u,redPointInfo:null,queryNotifys:function(e){var t="newfunction|glwz",n=this;e.userstate!=v.USERSTATE.HASACCOUNT&&e.userstate!=v.USERSTATE.HASBUNDLE&&(t="tradeTabNotify|newfunction|glwz");try{var o=wx.getStorageSync("trade-tab-redpoint-notify"),r=wx.getStorageSync("new-skin-red-point"),a=wx.getStorageSync("glwz-redpoint-notify");o&&r&&a||(n.redPointInfo?(!o&&n.redPointInfo.tradeTabNotify,r||"1"!=n.redPointInfo.newfunction||(0,s.setTabItem)(wx.getStorageSync("user/skin"),4,!0),a||"1"!=n.redPointInfo.glwz||(0,s.setTabItem)(wx.getStorageSync("user/skin"),4,!0)):b.request({url:"/cgi-bin/redpointremind.fcgi",data:{type:3,action:t},success:function(e){e.tradeTabNotify,"1"!=e.newfunction&&"1"!=e.glwz||(0,s.setTabItem)(wx.getStorageSync("user/skin"),4,!0),n.redPointInfo=e}}))}catch(e){console.log(e)}}})},WlpC:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.ERROR_RUNTIME="runtime";var o=t.ERROR_SCRIPT="script",r=t.ERROR_STYLE="link",a=t.ERROR_IMAGE="img",i=t.ERROR_AUDIO="audio",s=t.ERROR_VIDEO="video",c=(t.ERROR_CONSOLE="console",t.ERROR_TRY_CATCH="trycatch",t.ERROR_FETCH="fetch"),u=t.ERROR_AJAX="ajax",l=t.ERROR_PROMISE="promise";t.ERRORTYPES={SCRIPT:o,LINK:r,IMG:a,AUDIO:i,VIDEO:s,FETCH:c,AJAX:u,PROMISE:l}},YPKI:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=t.nativeToString=Object.prototype.toString,r=t.nativeHasOwn=Object.prototype.hasOwnProperty;t.isArray=function(e){return"[object Array]"===o.call(e)},t.isObject=function(e){return"[object Object]"===o.call(e)},t.isString=function(e){return"string"==typeof e},t.isUndefined=function(e){return void 0===e},t.isFunction=function(e){return"function"==typeof e},t.hasProp=function(e,t){return r.call(e,t)}},YhAN:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}var r=o(n("Zrlr")),a=o(n("wxAW")),i=function(){function e(){(0,r.default)(this,e),this.events={}}return(0,a.default)(e,[{key:"on",value:function(e,t,n){var o=[t,n],r=this.events[e];Array.isArray(r)?r.push(o):this.events[e]=[o]}},{key:"remove",value:function(e,t){var n=this.events[e];Array.isArray(n)&&(this.events[e]=n.filter(function(e){return e[0]!=t}))}},{key:"emit",value:function(e,t){var n=this.events[e];Array.isArray(n)&&n.map(function(e){var n=e[0];e[1].call(n,t)})}}]),e}();e.exports={Event:i}},aMW0:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CANMODIFYKEYS=["s_path","s_uuid","s_traceid","s_guid","s_appid","s_vuserid","hc_pgv_pvid","s_omgid","err_desc"]},m1d6:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeWillReport=void 0;var o=n("YPKI");t.normalizeWillReport=function(e){var t={type:"",url:"",code:"",isErr:!1,source:e};if(!(0,o.isObject)(e))return t;if((0,o.hasProp)(e,"err_type")){t.type=e.err_type;try{if(e.err_desc){var n=JSON.parse(e.err_desc);t.url=n.url||n.fileName||e.s_url}else t.url=e.s_url}catch(n){t.url=e.s_url,console.warn(n)}t.isErr=!0}else(0,o.hasProp)(e,"cgiurl")?(t.type="cgi",t.url=e.cgiurl,t.code=e.httpcode):(0,o.hasProp)(e,"resurl")?(t.type="cdn",t.url=e.resurl,t.code=e.httpcode):(0,o.hasProp)(e,"time_domready")?(t.type="pagepf",t.url=e.s_url,t.code=200):(0,o.hasProp)(e,"json_entries")?(t.type="slowlog",t.url=e.s_url,t.code=200):(0,o.hasProp)(e,"log")&&(t.type="flowlog",t.url=e.s_url,t.code=200);return t}},uxEl:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o={white:[{pagePath:"pages/index/index",iconPath:"static/nav/zx1.png",selectedIconPath:"static/nav/zx.png",text:"自选"},{pagePath:"pages/index/hq/main",iconPath:"static/nav/hq1.png",selectedIconPath:"static/nav/hq.png",text:"行情"},{pagePath:"pages/index/strategy/main",iconPath:"static/nav/xg1.png",selectedIconPath:"static/nav/xg.png",text:"选股"},{pagePath:"pages/index/information/main",iconPath:"static/nav/info1.png",selectedIconPath:"static/nav/info.png",text:"资讯"},{pagePath:"pages/index/account/main",iconPath:"static/nav/me1.png",selectedIconPath:"static/nav/me.png",text:"我的"}],black:[{pagePath:"pages/index/index",iconPath:"static/nav/zx2.png",selectedIconPath:"static/nav/zx.png",text:"自选"},{pagePath:"pages/index/hq/main",iconPath:"static/nav/hq2.png",selectedIconPath:"static/nav/hq.png",text:"行情"},{pagePath:"pages/index/strategy/main",iconPath:"static/nav/xg2.png",selectedIconPath:"static/nav/xg.png",text:"选股"},{pagePath:"pages/index/information/main",iconPath:"static/nav/info2.png",selectedIconPath:"static/nav/info.png",text:"资讯"},{pagePath:"pages/index/account/main",iconPath:"static/nav/me2.png",selectedIconPath:"static/nav/me.png",text:"我的"}]},r={white:[{pagePath:"pages/assets/main",iconPath:"pages/image/nav/w_kh1.png",selectedIconPath:"pages/image/nav/w_kh.png",text:"开户"},{pagePath:"pages/assets/main",iconPath:"static/nav/zc1.png",selectedIconPath:"static/nav/zc.png",text:"交易"}],black:[{pagePath:"pages/assets/main",iconPath:"static/nav/kh1.png",selectedIconPath:"static/nav/kh.png",text:"开户"},{pagePath:"pages/assets/main",iconPath:"static/nav/zc1.png",selectedIconPath:"static/nav/zc.png",text:"交易"}]},a={white:{pagePath:"pages/index/account/main",iconPath:"static/nav/me1.png",selectedIconPath:"static/nav/me.png",text:"我的"},black:{pagePath:"pages/index/account/main",iconPath:"static/nav/me1.png",selectedIconPath:"static/nav/me.png",text:"我的"}};t.setTabs=function(e){for(var t=o[e]||o.white,n=0;n<t.length;n++){var r=t[n];wx.setTabBarItem({index:n,text:r.text,iconPath:r.iconPath,selectedIconPath:r.selectedIconPath})}},t.setTabItem=function(e,t,n){var i=(o[e]||o.white)[t];4==t&&n&&(i=a[e]),3==t&&n&&(i=r[e][0]),wx.setTabBarItem({index:t,text:i.text,iconPath:i.iconPath,selectedIconPath:i.selectedIconPath})}},x35b:function(e,t,n){var o,r=n("443i");r.Component.registerHooks(["onLaunch","onShow","onHide","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap"]),r.Vue.config.productionTip=!1,r.Vue.config.errorHandler=function(e){console&&console.error&&console.error(e)},o=n("M93x").default,new r.Vue(o).$mount()},xQM3:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.monitorConfig={reportAbnormalUrlParamMonitor:{id:"2",value:1},reportAbnormalReqMonitor:{id:"0",value:1},filterAbnormalReqList:[/^https\:\/\/btrace.qq.com\/kvcollect/i,/^https\:\/\/pingtas.qq.com\/pingd/i,/^https\:\/\/fdc.tenpay.com\/fdc\/commonClick.do/i],reportAbnormalResCodeMonitor:{id:"1",value:1},filterAbnormalResCodeList:["51001097","51001000"],reportPageTimeMpidMap:{"pages/index/index":{id:2002},"pages/index/hq/main":{id:2003},"pages/index/information/main":{id:2004},"pages/index/account/main":{id:2005},"pages/quote/quote":{id:2006},"pages/newsCon/newsDetail/main":{id:2007}},reportCgiTimeMpidMap:{"userstock.fcgi":{param:"action=1",id:1001}}}},xVzF:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.parseLink=function(e){if(!e)return{};var t=document.createElement("a");return t.href=e,{host:t.host,path:t.pathname,hostname:t.hostname,protocol:t.protocol.slice(0,-1)}}}},["x35b"]); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../common/manifest.js"),require("../../common/vendor.js"),global.webpackJsonpMpvue([7],{"57Rs":function(e,t,s){var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.advInfo?s("div",{staticClass:"site-popup",class:[e.visible?"show":""]},[s("div",{staticClass:"site-popup-item"},[s("div",{staticClass:"close",attrs:{eventid:"0"},on:{click:e.onClose}}),e._v(" "),e.advInfo.adv_img?s("img",{staticClass:"img",style:{width:e.advInfo.width+"px",heighgt:e.advInfo.height+"px"},attrs:{src:e.advInfo.adv_img,mode:"aspectFill"}}):e._e(),e._v(" "),s("button",{staticClass:"btn-express",attrs:{"data-openType":"contact",eventid:"1"},on:{click:e.onClose}})],1),e._v(" "),s("div",{staticClass:"layer",attrs:{eventid:"2"},on:{click:e.onClose}})]):e._e()},staticRenderFns:[]};t.a=i},"7LWh":function(e,t){},"8fMe":function(e,t,s){var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.visible?s("div",{staticClass:"add-to-my-mp-guide-container",attrs:{eventid:"0"},on:{click:function(t){e.onClose()}}},[s("div",{staticClass:"hint-area",style:{left:e.left+"px"}},[e._m(0),e._v(" "),s("div",{staticClass:"gesture-area"},[s("img",{attrs:{src:e.GestureImg}})])])]):e._e()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hint-text"},[t("div",[this._v("点击添加到【我的小程序】")]),this._v(" "),t("div",[this._v("下次就能更快找到我喔")])])}]};t.a=i},"9V6O":function(e,t,s){var i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticStyle:{height:"100%"}},[s("view",{class:["choose-index","container","skin-"+e.skin,0==e.currentTab&&e.slist.length||1==e.currentTab&&e.alist.length||2==e.currentTab&&e.hklist.length||3==e.currentTab&&e.uslist.length?"":"show-no-cont"],attrs:{eventid:"53"},on:{click:e.resetDelToast}},[e.isIOS?e._e():s("view",{class:["layout-fix-choose","layout-fix",e.showFixed?"":"hide"]},[s("view",{staticClass:"search-header"},[s("view",{staticClass:"box-search flex flex-align-center"},[s("view",{staticClass:"row-sear"},[s("input",{staticClass:"block row-sear-input",attrs:{type:"text","placeholder-class":"placeholder-center",placeholder:"请输入股票代码 / 名称 / 首字母",disabled:"","placeholder-style":"color: '#676d79'",eventid:"0"},on:{click:e.jumpToSearch}}),e._v(" "),s("label",{staticClass:"search-icon"})],1)])]),e._v(" "),s("view",[s("view",{class:["switch-nav-line","flex","flex-pack-justify","btmline-gray",e.isIOS?"fix-tab-bar":""]},[s("label",{class:["flex-1",0==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"0",eventid:"1"},on:{click:e.pickChooseType}},[e._v("全部")]),e._v(" "),s("label",{class:["flex-1",1==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"1",eventid:"2"},on:{click:e.pickChooseType}},[e._v("沪深")]),e._v(" "),s("label",{class:["flex-1",2==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"2",eventid:"3"},on:{click:e.pickChooseType}},[e._v("港股")]),e._v(" "),s("label",{class:["flex-1",3==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"3",eventid:"4"},on:{click:e.pickChooseType}},[e._v("美股")])],1),e._v(" "),s("view",{class:["hd-cont",e.isIOS?"fix-list-title":""],style:e.isIOS?"":{position:"relative"}},[e.showMarketTipBar?s("view",{staticClass:"tips-sync flex flex-pack-justify flex-align-center btmline-gray loop-mst"},[s("view",{class:["block","flex-1",e.tipScroll?"marquee":"pleft30"]},[s("label",{class:["active",e.stopMarquee?"marquee-stop":""],attrs:{eventid:"5"},on:{click:e.toggleMarquee}},[e._v(e._s(e.tipText))])],1),e._v(" "),s("label",{staticClass:"block icon-close",attrs:{eventid:"6"},on:{click:e.hideTopTipsBar}})],1):e._e(),e._v(" "),s("view",{staticClass:"top-list flex flex-align-center flex-pack-justify"},[s("view",{staticClass:"title row-a"},[e._v("股票")]),e._v(" "),s("view",{staticClass:"title grayblue row-b align-r wrap-updown",attrs:{eventid:"7"},on:{click:e.pickSortType}},[s("label",{staticClass:"box-updown"},[s("label",{class:["arrow-up","up"==e.sortType?"arrow-up-light":""]}),e._v(" "),s("label",{class:["arrow-down","down"==e.sortType?"arrow-down-light":""]})],1),e._v(" "),s("label",{staticClass:"block"},[e._v("最新价")])],1),e._v(" "),s("view",{staticClass:"title grayblue row-c align-r wrap-updown",attrs:{eventid:"8"},on:{click:e.pickSort}},[s("label",{staticClass:"box-updown"},[s("label",{class:["arrow-up","up"==e.riseType?"arrow-up-light":""]}),e._v(" "),s("label",{class:["arrow-down","down"==e.riseType?"arrow-down-light":""]})],1),e._v(" "),s("label",{staticClass:"block"},[e._v(e._s("rise"===e.riseColumn?"涨跌额":"rise_per"===e.riseColumn?"涨跌幅":"总市值"))])],1)])])])]),e._v(" "),s("view",{staticClass:"search-header"},[s("view",{staticClass:"box-search flex flex-align-center"},[s("view",{staticClass:"row-sear"},[s("input",{staticClass:"block row-sear-input",attrs:{type:"text","placeholder-class":"placeholder-center",placeholder:"请输入股票代码 / 名称 / 首字母",disabled:"","placeholder-style":"color: '#676d79'",eventid:"9"},on:{click:e.jumpToSearch}}),e._v(" "),s("label",{staticClass:"search-icon"})],1)])]),e._v(" "),s("view",{class:["switch-nav-line","flex","flex-pack-justify","btmline-gray",e.isIOS?"fix-tab-bar":""]},[s("label",{class:["flex-1",0==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"0",eventid:"10"},on:{click:e.pickChooseType}},[e._v("全部")]),e._v(" "),s("label",{class:["flex-1",1==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"1",eventid:"11"},on:{click:e.pickChooseType}},[e._v("沪深")]),e._v(" "),s("label",{class:["flex-1",2==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"2",eventid:"12"},on:{click:e.pickChooseType}},[e._v("港股")]),e._v(" "),s("label",{class:["flex-1",3==e.currentTab?"cur-tab":""],attrs:{href:"javascript:;","data-type":"3",eventid:"13"},on:{click:e.pickChooseType}},[e._v("美股")])],1),e._v(" "),s("view",{class:["hd-cont",e.isIOS?"fix-list-title":""],style:e.isIOS?"":{position:"relative"}},[e.showMarketTipBar?s("view",{staticClass:"tips-sync flex flex-pack-justify flex-align-center btmline-gray loop-mst"},[s("view",{class:["block","flex-1","marquee-view",e.tipScroll?"marquee":"pleft30"]},[s("label",{class:["active",e.stopMarquee?"marquee-stop":""],style:{"animation-duration":e.marqueeTime},attrs:{eventid:"14"},on:{click:e.toggleMarquee}},[e._v(e._s(e.tipText))])],1),e._v(" "),s("label",{staticClass:"block icon-close",attrs:{eventid:"15"},on:{click:e.hideTopTipsBar}})],1):e._e(),e._v(" "),e.showMarqueeProbe?s("view",{staticClass:"block probe marquee-probe loop-mst flex-1 marquee"},[s("label",{staticClass:"marquee-probe-label"},[e._v(e._s(e.tipText))])],1):e._e(),e._v(" "),s("view",{staticClass:"top-list flex flex-align-center flex-pack-justify"},[s("view",{staticClass:"title row-a"},[e._v("股票")]),e._v(" "),s("view",{staticClass:"title grayblue row-b align-r wrap-updown",attrs:{eventid:"16"},on:{click:e.pickSortType}},[s("label",{staticClass:"box-updown"},[s("label",{class:["arrow-up","up"==e.sortType?"arrow-up-light":""]}),e._v(" "),s("label",{class:["arrow-down","down"==e.sortType?"arrow-down-light":""]})],1),e._v(" "),s("label",{staticClass:"block"},[e._v("最新价")])],1),e._v(" "),s("view",{staticClass:"title grayblue row-c align-r wrap-updown",attrs:{eventid:"17"},on:{click:e.pickSort}},[s("label",{staticClass:"box-updown"},[s("label",{class:["arrow-up","up"==e.riseType?"arrow-up-light":""]}),e._v(" "),s("label",{class:["arrow-down","down"==e.riseType?"arrow-down-light":""]})],1),e._v(" "),s("label",{staticClass:"block"},[e._v(e._s("rise"===e.riseColumn?"涨跌额":"rise_per"===e.riseColumn?"涨跌幅":"总市值"))])],1)])]),e._v(" "),s("swiper",{style:{height:e.swiperHeight+2+"px"},attrs:{current:e.currentTab,duration:"250",eventid:"52"},on:{change:e.bindchange,animationfinish:e.bindanimationfinish,touchstart:e.touchstartView,touchend:e.touchendView}},[s("swiper-item",{attrs:{mpcomid:"4"}},[s("view",{staticClass:"scroll-content",attrs:{id:"testIscroll"}},[s("view",{class:e.showLoading?"show-loading":"",attrs:{id:"choose-all"}},[s("view",{staticClass:"stock-list",style:{position:"relative","min-height":e.swiperHeight+"px"}},[s("view",{staticClass:"list-cont-gap"},e._l(e.slist,function(t,i){return 0==e.currentTab&&i<e.listLength||i<20?s("view",{key:i,class:["list-item",e.operateIndex,e.tapIndex,i==e.operateIndex||i==e.tapIndex?"long-tap":"",t.riseClass],attrs:{"data-index":i,"data-market":t.type,"data-scode":t.scode,"data-dqj":t.price,"data-zde":t.rise,"data-zdf":t.rise_per,"data-isindex":t.isIndex,"data-from":"zixuan",eventid:"21_"+i},on:{click:e.jumpToDetail,longpress:e.longpress}},[s("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[t.isHold?s("view",{staticClass:"corner-mark"}):e._e(),e._v(" "),s("div",{class:["g-bg","1"==e.animateArr[i]?"g-flash-red":"-1"==e.animateArr[i]?"g-flash-green":""]}),e._v(" "),s("view",{staticClass:"row-a"},[s("label",{class:["block","span-1",t.fontName,"ellipsis-text"]},[e._v(e._s(t.name))]),e._v(" "),s("label",{staticClass:"block span-2 flex flex-align-center"},[s("label",{class:t.iconClass}),e._v(" "),s("label",{staticClass:"block"},[e._v(e._s(t.showScode))])],1)],1),e._v(" "),s("view",{staticClass:"row-b align-r"},[e._v(e._s(t.showPrice))]),e._v(" "),s("view",{staticClass:"row-c",attrs:{eventid:"18_"+i},on:{click:function(t){t.stopPropagation(),e.pickRiseColumn(t)}}},["zsz"!=e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t[e.riseColumn])+e._s("rise_per"==e.riseColumn&&0==t.status?"%":"zsz"==e.riseColumn&&0!=t[e.riseColumn]?"亿":""))]):e._e(),e._v(" "),"zsz"==e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t.riseColumnZSZ))]):e._e()])]),e._v(" "),i==e.operateIndex?s("view",{class:["li-btn","flex","li-btn-1",e.isFirstItem?"li-btn-first":""],style:{left:e.operateLeft+"px"}},[s("label",{staticClass:"block flex-1",attrs:{"data-name":t.name,"data-market":t.type,"data-scode":t.scode,eventid:"19_"+i},on:{click:function(t){t.stopPropagation(),e.delStock(t)}}},[e._v("删除")]),e._v(" "),s("label",{staticClass:"block flex-1 top-stock",attrs:{"data-market":t.type,"data-scode":t.scode,eventid:"20_"+i},on:{click:function(t){t.stopPropagation(),e.topStock(t)}}},[e._v("置顶")]),e._v(" "),"left"==e.arrowDirection?s("label",{staticClass:"arrow-btm"}):e._e(),e._v(" "),"right"==e.arrowDirection?s("label",{staticClass:"arrow-btm-2"}):e._e()],1):e._e()]):e._e()})),e._v(" "),s("view",{staticClass:"no-cont align-c",attrs:{"data-type":"market","data-marketindex":"4",eventid:"22"},on:{click:e.pickPageType}},[s("view",{staticClass:"pic-none bg-nocont"}),e._v(" "),s("view",[e._v("空空如也，添加感兴趣的股票吧")])]),e._v(" "),s("view",{staticClass:"recommend-cards"},[e.stock_rank.length&&e.hot_plate.length?s("view",{staticClass:"rcmd-subs cold-boot-rcmd swiper-container"},[s("swiper",{staticClass:"flex flex-pack-justify swiper-wrapper rcmd-cards",staticStyle:{height:"446rpx"},attrs:{autoplay:e.autoplay,duration:"3000",circular:"true","indicator-color":"#cccccc","indicator-active-color":"#007aff",eventid:"36"},on:{change:e.cardChange}},[s("swiper-item",{attrs:{mpcomid:"0"}},[s("view",{staticClass:"swiper-slide"},[s("view",{staticClass:"wrapper-card"},[s("view",{staticClass:"hd-card"},[s("view",{staticClass:"block"},[e._v("今日大涨牛股")]),e._v(" "),s("view",{staticClass:"sec-tit",attrs:{"data-stat":e.choose&&e.choose.rcmd_rank,eventid:"23"},on:{click:e.viewRankList}},[e._v("完整榜单")])]),e._v(" "),s("view",{staticClass:"bd-card"},[s("view",{staticClass:"block-hot hot-stock flex flex-align-center"},e._l([0,1,2],function(t,i){return s("view",{key:i,staticClass:"col-flex flex-1 align-c",attrs:{"data-scode":e.stock_rank[t]&&e.stock_rank[t].code,"data-type":e.stock_rank[t]&&e.stock_rank[t].market,"data-stat":e.choose&&e.choose.rcmd2_stockdetail,eventid:"24_"+i},on:{click:e.viewStockDetail}},[s("view",{staticClass:"stock-industry"},[e._v(e._s(e.stock_rank[t].name))]),e._v(" "),s("view",{class:["stock-percent",e.stock_rank[t].zdf>0?"rise":e.stock_rank[t].zdf<0?"drop":"peace"]},[e._v(e._s(e.stock_rank[t].zdf)+"%")])])})),e._v(" "),s("view",{staticClass:"block-hot hot-stock flex flex-align-center"},e._l([3,4,5],function(t,i){return s("view",{key:i,staticClass:"col-flex flex-1 align-c",attrs:{"data-scode":e.stock_rank[t].code,"data-type":e.stock_rank[t].market,"data-stat":e.choose&&e.choose.rcmd2_stockdetail,eventid:"25_"+i},on:{click:e.viewStockDetail}},[s("view",{staticClass:"stock-industry"},[e._v(e._s(e.stock_rank[t].name))]),e._v(" "),s("view",{class:["stock-percent",e.stock_rank[t].zdf>0?"rise":e.stock_rank[t].zdf<0?"drop":"peace"]},[e._v(e._s(e.stock_rank[t].zdf)+"%")])])}))]),e._v(" "),s("view",{staticClass:"ft-card"},[s("view",{staticClass:"subs-btn",attrs:{"data-type":"hot",eventid:"26"},on:{click:e.subsStock}},[e._v("一键关注")])])])])]),e._v(" "),s("swiper-item",{attrs:{mpcomid:"2"}},[s("view",{staticClass:"swiper-slide"},[s("view",{staticClass:"wrapper-card"},[s("view",{staticClass:"hd-card"},[s("view",{staticClass:"block"},[e._v("今日热门板块")]),e._v(" "),s("view",{staticClass:"sec-tit",attrs:{"data-stat":e.choose&&e.choose.rcmd_platemore,eventid:"27"},on:{click:e.viewHotPlate}},[e._v("热门板块")])]),e._v(" "),s("view",{staticClass:"bd-card hot-plate"},[s("view",{staticClass:"block-hot flex flex-align-center"},e._l([0,1],function(t,i){return s("view",{key:i,staticClass:"col-flex flex-1 align-c",attrs:{"data-plate":e.hot_plate[t].type,"data-code":e.hot_plate[t].code,"data-stat":e.choose&&e.choose.rcmd_plate,eventid:"28_"+i},on:{click:e.viewPlate}},[s("view",{staticClass:"stock-industry"},[e._v(e._s(e.hot_plate[t].name))]),e._v(" "),s("view",{class:["stock-percent",e.hot_plate[t].zdf>0?"rise":e.hot_plate[t].zdf<0?"drop":"peace"]},[e._v(e._s(e.hot_plate[t].zdf)+"%")]),e._v(" "),e._l([0,1],function(i,a){return[e.hot_plate[t].list&&e.hot_plate[t].list[i]?s("view",{key:a,staticClass:"stock-title flex flex-pack-justify",attrs:{"data-scode":e.hot_plate[t].list[i].code,"data-type":e.hot_plate[t].list[i].market}},[s("view",{staticClass:"align-l"},[e._v(e._s(e.hot_plate[t].list[i].name))]),e._v(" "),s("view",{class:["align-r",e.hot_plate[t].list[i].zdf>0?"rise":e.hot_plate[t].list[i].zdf<0?"drop":"peace"]},[e._v(e._s(e.hot_plate[t].list[i].zdf)+"%")])]):e._e()]})],2)}))]),e._v(" "),s("view",{staticClass:"ft-card"},[s("view",{staticClass:"subs-btn",attrs:{"data-type":"plate",eventid:"29"},on:{click:e.subsStock}},[e._v("一键关注")])])])])]),e._v(" "),e.relate_stocks.length>0?s("swiper-item",{attrs:{mpcomid:"3"}},[s("view",{staticClass:"swiper-slide"},[e.showRelStock?e._e():s("view",{staticClass:"deafult-card"},[s("view",{staticClass:"wrapper-card"},[s("view",{staticClass:"hd-card"},[s("view",{staticClass:"block"},[e._v("精选资讯速递")]),e._v(" "),s("view",{staticClass:"sec-tit",attrs:{"data-stat":e.choose&&e.choose.rcmd_more_info,eventid:"30"},on:{click:e.viewNewsList}},[e._v("更多资讯")])]),e._v(" "),s("view",{staticClass:"bd-card"},[s("view",{staticClass:"block-info"},e._l([0,1],function(t,i){return s("view",{key:i,staticClass:"hot-news col-flexs flex-1 align-c",attrs:{"data-news":e.head_news[t],"data-stat":e.choose&&e.choose.rcmd_infodetail,eventid:"31_"+i},on:{click:e.viewNewsDetail}},[s("view",{staticClass:"stock-info twoline-text"},[s("view",{staticClass:"rcmd-word rcmd-label"},[e._v("推荐")]),e._v(" "),s("view",{staticClass:"rcmd-title"},[e._v(e._s(e.head_news[t]&&e.head_news[t].title))])])])}))]),e._v(" "),s("view",{staticClass:"ft-card"},[s("view",{staticClass:"subs-btn",attrs:{eventid:"32"},on:{click:e.subsStock}},[e._v("关注相关股票")])])])]),e._v(" "),e.showRelStock?s("view",{staticClass:"rel-card"},[s("view",{staticClass:"wrapper-card"},[s("view",{staticClass:"hd-card"},[s("view",{staticClass:"block icon icon-arrow",attrs:{eventid:"33"},on:{click:e.rcmdBack}}),e._v(" "),s("view",{staticClass:"block"},[e._v("资讯相关股票")])]),e._v(" "),s("view",{staticClass:"bd-card"},[s("view",{staticClass:"st-header flex flex-align-center flex-pack-justify"},[s("view",{staticClass:"col col1"},[e._v("股票名称")]),e._v(" "),s("view",{staticClass:"col col2"},[e._v("最新价")]),e._v(" "),s("view",{staticClass:"col col3"},[e._v("涨跌幅")])]),e._v(" "),s("view",{staticClass:"st-list"},[s("view",{staticClass:"iscroll-cont"},e._l(e.relate_stocks,function(t,i){return s("view",{key:i,staticClass:"st-list-item flex flex-align-center flex-pack-justify",attrs:{"data-scode":t.code,"data-type":t.market,eventid:"34_"+i},on:{click:e.viewStockDetail}},[s("view",{staticClass:"col col1"},[e._v(e._s(t.name))]),e._v(" "),s("view",{staticClass:"col col2"},[e._v(e._s(t.zjcj))]),e._v(" "),s("view",{class:["col","col3",t.zdf>0?"rise":t.zdf<0?"drop":"peace"]},[e._v(e._s(t.zdf)+"%")])])}))])]),e._v(" "),s("view",{staticClass:"ft-card"},[s("view",{staticClass:"subs-btn",attrs:{"data-type":"news",eventid:"35"},on:{click:e.subsStock}},[e._v("一键关注")])])])]):e._e()])]):e._e()],1),e._v(" "),s("view",{class:["dots","flex","flex-align-center","flex-pack-justify",e.relate_stocks.length>0?"":"two-dot"]},[s("view",{class:["dot",0==e.rcmdCardIndex?"active":""]}),e._v(" "),s("view",{class:["dot",1==e.rcmdCardIndex?"active":""]}),e._v(" "),e.relate_stocks.length>0?s("view",{class:["dot",2==e.rcmdCardIndex?"active":""]}):e._e()])],1):e._e()])]),e._v(" "),s("view",{staticClass:"layer-loading"})])])]),e._v(" "),s("swiper-item",{attrs:{mpcomid:"5"}},[s("view",{staticClass:"scroll-content",attrs:{id:"testIscroll"}},[s("view",{attrs:{id:"choose-a"}},[s("view",{staticClass:"stock-list",style:{position:"relative","min-height":e.swiperHeight+"px"}},[s("view",{staticClass:"list-cont-gap"},e._l(e.alist,function(t,i){return 1==e.currentTab&&i<e.listLength||i<20?s("view",{key:i,class:["list-item",i==e.operateIndex||i==e.tapIndex?"long-tap":"",t.riseClass,t.moveDirect],attrs:{"data-index":i,"data-market":t.type,"data-scode":t.scode,"data-dqj":t.price,"data-zde":t.rise,"data-zdf":t.rise_per,"data-isindex":t.isIndex,"data-from":"zixuan",eventid:"40_"+i},on:{click:e.jumpToDetail,longpress:e.longpress}},[s("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[t.isHold?s("view",{staticClass:"corner-mark"}):e._e(),e._v(" "),s("div",{class:["g-bg","1"==e.animateArr[i]?"g-flash-red":"-1"==e.animateArr[i]?"g-flash-green":""]}),e._v(" "),s("view",{staticClass:"row-a"},[s("label",{staticClass:"block span-1"},[e._v(e._s(t.name))]),e._v(" "),s("label",{staticClass:"block span-2 flex flex-align-center"},[s("label",{class:t.iconClass}),e._v(" "),s("label",{staticClass:"block"},[e._v(e._s(t.scode))])],1)],1),e._v(" "),s("view",{staticClass:"row-b align-r"},[e._v(e._s(t.showPrice))]),e._v(" "),s("view",{staticClass:"row-c",attrs:{eventid:"37_"+i},on:{click:function(t){t.stopPropagation(),e.pickRiseColumn(t)}}},["zsz"!=e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t[e.riseColumn])+e._s("rise_per"==e.riseColumn&&0==t.status?"%":"zsz"==e.riseColumn&&0!=t[e.riseColumn]?"亿":""))]):e._e(),e._v(" "),"zsz"==e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t.riseColumnZSZ))]):e._e()])]),e._v(" "),i==e.operateIndex?s("view",{class:["li-btn","flex","li-btn-1",e.isFirstItem?"li-btn-first":""],style:{left:e.operateLeft+"px"}},[s("label",{staticClass:"block flex-1",attrs:{"data-name":t.name,"data-market":t.type,"data-scode":t.scode,eventid:"38_"+i},on:{click:function(t){t.stopPropagation(),e.delStock(t)}}},[e._v("删除")]),e._v(" "),s("label",{staticClass:"block flex-1 top-stock",attrs:{"data-market":t.type,"data-scode":t.scode,eventid:"39_"+i},on:{click:function(t){t.stopPropagation(),e.topStock(t)}}},[e._v("置顶")]),e._v(" "),"left"==e.arrowDirection?s("label",{staticClass:"arrow-btm"}):e._e(),e._v(" "),"right"==e.arrowDirection?s("label",{staticClass:"arrow-btm-2"}):e._e()],1):e._e()]):e._e()})),e._v(" "),s("view",{staticClass:"no-cont align-c",attrs:{"data-type":"market","data-marketindex":"4",eventid:"41"},on:{click:e.pickPageType}},[s("view",{staticClass:"pic-none bg-nocont"}),e._v(" "),s("view",[e._v("空空如也，添加感兴趣的股票吧")])]),e._v(" "),s("div",{staticClass:"recommend-cards"})]),e._v(" "),s("view",{staticClass:"layer-loading"})])])]),e._v(" "),s("swiper-item",{attrs:{mpcomid:"6"}},[s("view",{staticClass:"scroll-content",attrs:{id:"testIscroll"}},[s("view",{attrs:{id:"choose-hk"}},[s("view",{staticClass:"stock-list",style:{position:"relative","min-height":e.swiperHeight+"px"}},[s("view",{staticClass:"list-cont-gap"},e._l(e.hklist,function(t,i){return 2==e.currentTab&&i<e.listLength||i<20?s("view",{key:i,class:["list-item",i==e.operateIndex||i==e.tapIndex?"long-tap":"",t.riseClass,t.moveDirect],attrs:{"data-index":i,"data-market":t.type,"data-scode":t.scode,"data-dqj":t.price,"data-zde":t.rise,"data-zdf":t.rise_per,"data-isindex":t.isIndex,"data-from":"zixuan",eventid:"45_"+i},on:{click:e.jumpToDetail,longpress:e.longpress}},[s("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[t.isHold?s("view",{staticClass:"corner-mark"}):e._e(),e._v(" "),s("div",{class:["g-bg","1"==e.animateArr[i]?"g-flash-red":"-1"==e.animateArr[i]?"g-flash-green":""]}),e._v(" "),s("view",{staticClass:"row-a"},[s("label",{class:["block","span-1","ellipsis-text",t.fontName]},[e._v(e._s(t.name))]),e._v(" "),s("label",{staticClass:"block span-2 flex flex-align-center"},[s("label",{class:t.iconClass}),e._v(" "),s("label",{staticClass:"block"},[e._v(e._s(t.scode))])],1)],1),e._v(" "),s("view",{staticClass:"row-b align-r"},[e._v(e._s(t.showPrice))]),e._v(" "),s("view",{staticClass:"row-c",attrs:{eventid:"42_"+i},on:{click:function(t){t.stopPropagation(),e.pickRiseColumn(t)}}},["zsz"!=e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t[e.riseColumn])+e._s("rise_per"==e.riseColumn&&0==t.status?"%":"zsz"==e.riseColumn&&0!=t[e.riseColumn]?"亿":""))]):e._e(),e._v(" "),"zsz"==e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t.riseColumnZSZ))]):e._e()])]),e._v(" "),i==e.operateIndex?s("view",{class:["li-btn","flex","li-btn-1",e.isFirstItem?"li-btn-first":""],style:{left:e.operateLeft+"px"}},[s("label",{staticClass:"block flex-1",attrs:{"data-name":t.name,"data-market":t.type,"data-scode":t.scode,eventid:"43_"+i},on:{click:function(t){t.stopPropagation(),e.delStock(t)}}},[e._v("删除")]),e._v(" "),s("label",{staticClass:"block flex-1 top-stock",attrs:{"data-market":t.type,"data-scode":t.scode,eventid:"44_"+i},on:{click:function(t){t.stopPropagation(),e.topStock(t)}}},[e._v("置顶")]),e._v(" "),"left"==e.arrowDirection?s("label",{staticClass:"arrow-btm"}):e._e(),e._v(" "),"right"==e.arrowDirection?s("label",{staticClass:"arrow-btm-2"}):e._e()],1):e._e()]):e._e()})),e._v(" "),s("view",{staticClass:"no-cont align-c",attrs:{"data-type":"market","data-marketindex":"5",eventid:"46"},on:{click:e.pickPageType}},[s("view",{staticClass:"pic-none bg-nocont"}),e._v(" "),s("view",[e._v("空空如也，添加感兴趣的股票吧")])]),e._v(" "),s("div",{staticClass:"recommend-cards"})]),e._v(" "),s("view",{staticClass:"layer-loading"})])])]),e._v(" "),s("swiper-item",{attrs:{mpcomid:"7"}},[s("view",{staticClass:"scroll-content",attrs:{id:"testIscroll"}},[s("view",{attrs:{id:"choose-us"}},[s("view",{staticClass:"stock-list",style:{position:"relative","min-height":e.swiperHeight+"px"}},[s("view",{staticClass:"list-cont-gap"},e._l(e.uslist,function(t,i){return 3==e.currentTab&&i<e.listLength||i<20?s("view",{key:i,class:["list-item",i==e.operateIndex||i==e.tapIndex?"long-tap":"",t.riseClass,t.moveDirect],attrs:{"data-index":i,"data-market":t.type,"data-scode":t.scode,"data-dqj":t.price,"data-zde":t.rise,"data-zdf":t.rise_per,"data-isindex":t.isIndex,"data-from":"zixuan",eventid:"50_"+i},on:{click:e.jumpToDetail,longpress:e.longpress}},[s("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[t.isHold?s("view",{staticClass:"corner-mark"}):e._e(),e._v(" "),s("div",{class:["g-bg","1"==e.animateArr[i]?"g-flash-red":"-1"==e.animateArr[i]?"g-flash-green":""]}),e._v(" "),s("view",{staticClass:"row-a"},[s("label",{class:["block","span-1",t.fontName,"ellipsis-text"]},[e._v(e._s(t.name))]),e._v(" "),s("label",{staticClass:"block span-2 flex flex-align-center"},[s("label",{class:t.iconClass}),e._v(" "),s("label",{staticClass:"block"},[e._v(e._s(t.showScode))])],1)],1),e._v(" "),s("view",{staticClass:"row-b align-r"},[e._v(e._s(t.showPrice))]),e._v(" "),s("view",{staticClass:"row-c",attrs:{eventid:"47_"+i},on:{click:function(t){t.stopPropagation(),e.pickRiseColumn(t)}}},["zsz"!=e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t[e.riseColumn])+e._s("rise_per"==e.riseColumn&&0==t.status?"%":"zsz"==e.riseColumn&&0!=t[e.riseColumn]?"亿":""))]):e._e(),e._v(" "),"zsz"==e.riseColumn?s("view",{staticClass:"price refresh-tr"},[e._v(e._s(t.riseColumnZSZ))]):e._e()])]),e._v(" "),i==e.operateIndex?s("view",{class:["li-btn","flex","li-btn-1",e.isFirstItem?"li-btn-first":""],style:{left:e.operateLeft+"px"}},[s("label",{staticClass:"block flex-1",attrs:{"data-name":t.name,"data-market":t.type,"data-scode":t.scode,eventid:"48_"+i},on:{click:function(t){t.stopPropagation(),e.delStock(t)}}},[e._v("删除")]),e._v(" "),s("label",{staticClass:"block flex-1 top-stock",attrs:{"data-market":t.type,"data-scode":t.scode,eventid:"49_"+i},on:{click:function(t){t.stopPropagation(),e.topStock(t)}}},[e._v("置顶")]),e._v(" "),"left"==e.arrowDirection?s("label",{staticClass:"arrow-btm"}):e._e(),e._v(" "),"right"==e.arrowDirection?s("label",{staticClass:"arrow-btm-2"}):e._e()],1):e._e()]):e._e()})),e._v(" "),s("view",{staticClass:"no-cont align-c",attrs:{"data-type":"market","data-marketindex":"6",eventid:"51"},on:{click:e.pickPageType}},[s("view",{staticClass:"pic-none bg-nocont"}),e._v(" "),s("view",[e._v("空空如也，添加感兴趣的股票吧")])]),e._v(" "),s("div",{staticClass:"recommend-cards"})]),e._v(" "),s("view",{staticClass:"layer-loading"})])])])],1)],1),e._v(" "),s("clgg",{attrs:{mpcomid:"8"}}),e._v(" "),s("view",[s("addToMyMpGuide",{attrs:{visible:e.showAddToMyMiniAppGuide,eventid:"54",mpcomid:"9"},on:{close:function(t){e.showAddToMyMiniAppGuide=!1}}})],1)],1)},staticRenderFns:[]};t.a=i},"C1I/":function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var i=s("niax"),a=getApp();t.default={data:function(){return{closed:!0,device:a.getPhoneModel(a.device.model)||"",visible:!1,advInfo:null}},onLoad:function(){var e=this;a.wx.request({url:"https://wzq.gtimg.com/resources/vtools/zxgxcx_clgg_utf8.json",data:{action:1,channel:0,type:1,segment:3},method:"GET",success:function(t){if(t.clgg)for(var s=0;s<t.clgg.length;s++)"on"===t.clgg[s].adv_status&&(e.advInfo=t.clgg[s]);try{var a=wx.getStorageSync("zxgxcx/clgg");(a&&e.advInfo&&a.indexOf(e.advInfo.id+";")<0||!a)&&(e.visible=!0,i.Request.reportData("xcx_clgg_show"),i.Request.reportMTAData({eventName:"xcx_clgg_show"}))}catch(e){console.log(e)}}})},methods:{onClose:function(e){var t=e.currentTarget.dataset.opentype;this.saveVisitedStatus(),t?(i.Request.reportData("xcx_clgg_btn_click"),i.Request.reportMTAData({eventName:"xcx_clgg_btn_click"}),"miniapp"===this.advInfo.adv_link_type?wx.navigateToMiniProgram({appId:this.advInfo.extra_info,path:this.advInfo.adv_link,success:function(e){},fail:function(e){}}):a.navigateTo({url:this.advInfo.adv_link})):(i.Request.reportData("xcx_clgg_close"),i.Request.reportMTAData({eventName:"xcx_clgg_close"}))},saveVisitedStatus:function(){var e=wx.getStorageSync("zxgxcx/clgg")||"";wx.setStorageSync("zxgxcx/clgg",e+this.advInfo.id+";"),this.visible=!1}}}},Cmdv:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(s("Qu/K"));t.default={props:{visible:{type:Boolean,default:!1}},data:function(){return{GestureImg:i.default,left:0}},onLoad:function(){var e=wx.getMenuButtonBoundingClientRect(),t=e.left,s=e.width;this.left=t+s/4},methods:{onClose:function(){this.$emit("close")}}}},GP9K:function(e,t,s){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(s("fZjL")),o=i(s("Dd8w")),r=i(s("//Fk")),c=s("niax"),n=i(s("lR9t")),l=i(s("swYh")),d=i(s("33ci")),u=i(s("P8AU")),p=i(s("UHN4")),v=s("uvS9"),h=i(s("MX7x")),f=s("vD0l"),w=s("EUYj"),_=s("/qzR"),m=getApp(),k=["lbl-sz-market","lbl-sh-market","lbl-hk-market","lbl-us-market"],g=!0,x=!1,b=!0,C=!0,y=m.rpxToPx(30),T=void 0,S=void 0,z=void 0,I=void 0,A=void 0,M=void 0,D=void 0,P=["slist","alist","hklist","uslist"],q=["choose-all","choose-a","choose-hk","choose-us"],R=(m.device.windowWidth-2*y)/q.length,j=function(e,t){return e.filter(function(e){return t.test(e.type)||t.test(e.market)})},F=void 0,L=[],E={stockItemHeight:m.rpxToPx(88),scrollTop:0,dispCount:Math.ceil((m.device.screenHeight-m.rpxToPx(96)-35-38)/m.rpxToPx(88))};t.default={components:{clgg:h.default,addToMyMpGuide:p.default},data:function(){return{popupType:1,popupVisible:!1,nextPopupState:null,canScrollY:!0,isInit:"1",slist:[],alist:[],hklist:[],uslist:[],riseType:"",sortType:"",riseColumn:"rise_per",showFixed:!0,hasContent:!1,swiperHeight:m.device.windowHeight||642,currentTab:0,currentTabIndex:0,showLoading:!0,arrowDirection:"left",listLength:20,headLineLeft:y,headLineWidth:R,tapIndex:-1,showMarketTipBar:!1,tipText:"",tipScroll:!0,showRelStock:!1,indicatorDots:!0,rcmdCardIndex:0,autoplay:!0,stopMarquee:!1,diversionPopupVisible:!1,diversionIconVisible:!1,skin:wx.getStorageSync("user/skin")||"white",state:{moveDirectScode:"",originSList:[],isRefresh:!1,swipeTouch:null,tipsData:null,_rcmdRelateStock:{}},animateArr:[],stock_rank:"",hot_plate:"",choose:"",head_news:[],isFirstItem:!1,operateIndex:-1,operateLeft:0,relate_stocks:[],isIOS:"",showAddToMyMiniAppGuide:!1,marqueeTime:"15s",showMarqueeProbe:!1}},onLoad:function(e){var t=this;this.state.urlParam=e,this.state.urlParam.refresh&&w.get(!0),d.default.getUserStock?m.init(function(){d.default.getUserStock.then(t.getUserStockCbk.bind(t))}):m.init(function(){t.getUserStock()}),this.isIOS=wx.getSystemInfoSync().system.indexOf("iOS")>=0,d.default.setApp(),wx.getSystemInfo({success:function(e){console.log("res",e);var s=100;if(e.system.indexOf("iOS")>-1&&"ios"===e.platform){var i=e.system.slice(4);u.default.compareVer("10.0.0",i)&&(console.log("iOS sys lower than 10.0.0"),s=600)}else e.system.indexOf("Android")>-1&&"android"===e.platform&&(s=600);F=m.throttle(s,function(e){var s=e[P[t.currentTab]],i=!1;if(s&&!(s.length<=0)){t.animateArr=[];for(var a=0;a<s.length;a++)L[a]&&(t.animateArr[a]=L[a],s[a].prePrice=s[a].price,L[a]=null,i=!0,t.$set(t[P[t.currentTab]],a,s[a]));i&&(S=setTimeout(function(){t.animateArr=[]},1e3))}})}}),m.throttle(150,function(){t.updateViewportStock()}),this.showTopTipsBar()},onShareAppMessage:function(){return{title:"你能用微信盯盘啦",path:"/pages/index/index"}},onShow:function(){this.listLength=20;var e=this;m.setSkin(function(t){e.skin!=t&&(e.skin=t),e.showRelStock=!1,e.autoplay=!0}),wx.setNavigationBarTitle({title:"zxg"===m.APPNAME?"腾讯自选股":"腾讯微证券"}),b?b=!1:(e.getUserStock(),e.refreshSwiperHeigth()),c.Request.reportData("zixuan_tab_click",!0),c.Request.reportMTAData({eventName:"zixuan_tab_click"}),C=!0,w.get(!0,function(t){wx.getStorageSync("showAddToMyMpGuide")||(e.showAddToMyMiniAppGuide=!0,wx.setStorageSync("showAddToMyMpGuide",!0)),e.diversionIconVisible="1"!==t.subscribe});var t=this.state.urlParam;t.wxrcmd&&(D=setTimeout(function(){m.navigateTo({url:"/pages/newsCon/newsDetail/main?id="+t.id+"&zxtype="+t.zxtype,fail:function(e){console.log(e)}})},1500))},onHide:function(){var e=this;f.unsubscirbe(),clearTimeout(T),this.operateIndex=-1,this.autoplay=!1,this.popupVisible=!1,z=setTimeout(function(){e.tapIndex=-1},500)},onUnload:function(){f.unsubscirbe(),clearTimeout(T),clearTimeout(S),clearTimeout(z),clearTimeout(I),clearTimeout(A),clearTimeout(M),clearTimeout(D)},onReachBottom:function(){var e=this.currentTab,t=this.$data[P[e]],s=t?t.length:0,i=this.$data.listLength;i>s||(this.listLength=i+20,this.refreshSwiperHeigth())},onPullDownRefresh:function(){this.state.isRefresh=!0,this.state.freshTime=Date.now(),this.getUserStock(),wx.stopPullDownRefresh()},onPageScroll:function(e){var t=e.scrollTop,s=this.showFixed;s&&t<33&&(this.showFixed=!1,this.operateIndex=-1),!s&&t>=33&&(this.showFixed=!0,this.operateIndex=-1),this.setViewportInfo(t)},methods:{onPopupTap:function(){wx.navigateTo({url:"/pages/action/180823mpflow/index?from=index"}),this.nextPopupState&&wx.setStorageSync("180823mpflow",this.nextPopupState),this.popupVisible=!1},onPopupClose:function(){this.nextPopupState&&wx.setStorageSync("180823mpflow",this.nextPopupState),this.popupVisible=!1},checkPopupState:function(e){function t(){return new r.default(function(t,s){var i=0;e.forEach(function(e){"0"===e.status&&(o.indexOf(e.cls)<0||i++)}),t(i)})}function s(){return new r.default(function(e,t){wx.getStorageSync("180823mpflow:join")?e(!0):m.wx.request({url:"https://wzq.tenpay.com/cgi-bin/activity/activityreward.fcgi",data:{action:8,rule_tag:68},success:function(t){e("0"!==t.state?!0:!1)},fail:function(){e(!0)}})})}var i=this,a=wx.getStorageSync("180823mpflow"),o=["0","2","3","4"];if(e&&!this.popupVisible)switch(a){case"showed":return;case"check-false":t().then(function(e){e>=3&&s().then(function(e){e?(wx.setStorageSync("180823mpflow","showed"),wx.setStorageSync("180823mpflow:join",!0)):(i.popupType=2,i.popupVisible=!0,i.nextPopupState="showed")})});break;default:t().then(function(e){s().then(function(t){if(t)wx.setStorageSync("180823mpflow","showed"),wx.setStorageSync("180823mpflow:join",!0);else{var s=null;s=e<3?"check-false":"showed",i.popupType=1,i.popupVisible=!0,i.nextPopupState=s}})})}},refreshSwiperHeigth:function(){this.setSwiperHeight()},getStockList:function(e){return{slist:e=function(e){return e&&e.length>0&&(e=e.map(function(e){return"3"==e.type?e.trimCode=e.scode.substring(0,e.scode.indexOf(".")):e.trimCode=e.scode,e})),e}(e),alist:j(e,/[01]/),hklist:j(e,/2/),uslist:j(e,/3/)}},isIpoStatus:function(e){return"U"==e||"I"==e||"P"==e},filterWSMessage:function(e){var t=e.secu_info||"",s=e.secu_quote||"";if(t&&s){var i={name:t.secu_name||"",scode:t.secu_code,type:t.market,price:s.dqj,rise:s.zde,rise_per:s.zdf,susp_flag:t.susp_flag||"0",status:t.secu_status||"0"};switch("1"==t.susp_flag||"D"==t.status||"Z"==t.status?i.riseClass="stop":0==s.zde||this.isIpoStatus(s.status)?i.riseClass="peace":i.riseClass=s.zde>0?"rise":"drop",t.status){case"D":i.rise_per="退市";break;case"Z":i.rise_per="暂停上市";break;case"P":i.rise_per="申购日";break;case"U":i.rise_per="待上市";break;case"I":i.rise_per="待发行";break;default:i.rise_per="1"==t.susp_flag?"停牌":i.rise_per}switch(t.secu_cls){case"9":case"i":case"I":i.price=i.price;break;case"5":case"h":i.price=m.amount.toCurrency(i.price,3);break;default:i.price=m.amount.toCurrency(i.price)}return i}},handleData:function(e){var t=this;m.util.each(e,function(e,s){switch(e.name=e.name||e.n||"","1"==e.susp_flag||"D"==e.status||"Z"==e.status?e.riseClass="stop":0==e.rise||t.isIpoStatus(e.status)?e.riseClass="peace":e.rise>0?e.riseClass="rise":e.riseClass="drop",e.status){case"D":e.rise_per="退市";break;case"Z":e.rise_per="暂停上市";break;case"P":e.rise_per="申购日";break;case"U":e.rise_per="待上市";break;case"I":e.rise_per="待发行";break;default:"1"==e.susp_flag?e.rise_per="停牌":e.rise_per=e.rise_per||e.zdf+"%"}switch(e.cls){case"9":case"I":case"i":case"Z":e.isIndex=1,e.price=e.price;break;case"5":case"h":e.price=m.amount.toCurrency(e.price,3);break;default:e.price=m.amount.toCurrency(e.price)}e.rise=e.rise||e.zde,e.hkrise=e.rise?(+e.rise).toFixed(3):"",e.iconClass=k[e.type||e.market||e.m],"k"===e.cls&&(e.iconClass="lbl-kc-market"),e.showPrice=l.default.trimNumberComma(e.price),e.fontName=l.default.stockFont(e.name),e.showScode=l.default.trimUSMarket(e.scode),e.riseColumnZSZ=e.zsz?(e.zsz<100?l.default.toFixedAll(e.zsz,1):l.default.toFixedAll(e.zsz,0))+"亿":"-",e.prePrice=e.price,e.index_inner=s}),this.riseType?this.sortList(e,"rise_per","up"==this.riseType?1:-1):this.sortType&&this.sortList(e,"price","up"==this.sortType?1:-1)},getScodeForSubscribe:function(e){var t=[];return e=e||[],m.util.each(e,function(e,s){t.push(e.type+e.scode)}),t},getUserStock:function(){var e={url:m.CGI_PREFIX+"userstock.fcgi",data:{action:1,new_price:1,is_hold:1,get_market:1,outputtype:3},success:this.getUserStockCbk.bind(this),fail:function(e){console.log(e)}};m.wx.request(e)},getUserStockCbk:function(e){var t=this,s=parseInt(e.retcode,10);switch(s){case 0:var i,r=e&&e.slist||[];t.handleData(r),t.prepareRecommandData(e),i=t.getScodeForSubscribe(r),t.state.originSList=r;var c=(0,o.default)({isInit:"0",showLoading:!1},this.getStockList(r),{hasContent:r.length,stock_rank:e.stock_rank||[],head_news:e.head_news||[],hot_plate:e.hot_plate||[],relate_stocks:e.relate_stocks||[],showRelStock:!1,autoplay:!0,rcmdCardIndex:0});if((0,a.default)(c).forEach(function(e){t[e]=c[e]}),t.initWebSocket(i),C){var n=(r.length>20?20:r.length)*m.rpxToPx(88),l=m.device.windowHeight-t.fixBarHeight();this.swiperHeight=n<=l?l:n,this.setViewportInfo(),C=!1}break;default:m.showError(e.retmsg,s)}t.stopRefresh()},initWebSocket:function(e){var t;t={url:"wss://wzq.tenpay.com/wss/hq",data:{type:"subscribe",subscribe_type:"1",scode:e.join(",")},message:this.messageCallback.bind(this),close:function(e){var t=parseInt(e.code,10);switch(t){case"4001":m.showError("重新登录",t);break;default:m.showError("WS异常["+t+"]",t)}}},f.init(t)},stopRefresh:function(){wx.stopPullDownRefresh()},getCurrSwiperList:function(){switch(this.currentTab){case 0:return this.slist;case 1:return this.alist;case 2:return this.hklist;case 3:return this.uslist}},messageCallback:function(e){if(g&&!x)switch(parseInt(e.retcode,10)){case 0:var t=this.filterWSMessage(e);if(!t||!t.scode||""===t.type)return;t.showPrice=l.default.trimNumberComma(t.price),t.riseColumnZSZ=t.zsz?(t.zsz<100?l.default.toFixedAll(t.zsz,1):l.default.toFixedAll(t.zsz,0))+"亿":"-";var s=null,i=this.currentTab,a=0,o=(0,v.cloneDeep)(this.slist)||[],r=(0,v.cloneDeep)(this.alist)||[],c=(0,v.cloneDeep)(this.hklist)||[],n=(0,v.cloneDeep)(this.uslist)||[];m.util.each(o,function(e,r){e.showPrice=l.default.trimNumberComma(e.price),e.fontName=l.default.stockFont(e.name),e.showScode=l.default.trimUSMarket(e.scode),e.riseColumnZSZ=e.zsz?(e.zsz<100?l.default.toFixedAll(e.zsz,1):l.default.toFixedAll(e.zsz,0))+"亿":"-",e.scode==t.scode&&e.type==t.type&&(0==i&&(s=r,a=t.price-o[r].prePrice),o[r]=m.util.extend(o[r],t))}),m.util.each(r,function(e,c){e.showPrice=l.default.trimNumberComma(e.price),e.fontName=l.default.stockFont(e.name),e.showScode=l.default.trimUSMarket(e.scode),e.riseColumnZSZ=e.zsz?(e.zsz<100?l.default.toFixedAll(e.zsz,1):l.default.toFixedAll(e.zsz,0))+"亿":"-",e.scode==t.scode&&e.type==t.type&&(1==i&&(s=c,a=t.price-o[c].prePrice),r[c]=m.util.extend(r[c],t))}),m.util.each(c,function(e,r){e.showPrice=l.default.trimNumberComma(e.price),e.fontName=l.default.stockFont(e.name),e.showScode=l.default.trimUSMarket(e.scode),e.riseColumnZSZ=e.zsz?(e.zsz<100?l.default.toFixedAll(e.zsz,1):l.default.toFixedAll(e.zsz,0))+"亿":"-",e.scode==t.scode&&e.type==t.type&&(2==i&&(s=r,a=t.price-o[r].prePrice),c[r]=m.util.extend(c[r],t))}),m.util.each(n,function(e,r){e.showPrice=l.default.trimNumberComma(e.price),e.fontName=l.default.stockFont(e.name),e.showScode=l.default.trimUSMarket(e.scode),e.riseColumnZSZ=e.zsz?(e.zsz<100?l.default.toFixedAll(e.zsz,1):l.default.toFixedAll(e.zsz,0))+"亿":"-",e.scode==t.scode&&e.type==t.type&&(3==i&&(s=r,a=t.price-o[r].prePrice),n[r]=m.util.extend(n[r],t))}),"number"==typeof s&&s>=E.beginIndex&&s<=E.endIndex&&(a>0?L[s]=1:a<0&&(L[s]=-1)),F({slist:o,alist:r,hklist:c,uslist:n});break;default:e.retmsg&&m.showTips(e.retmsg)}},delStock:function(e){var t=e.currentTarget.dataset.name,s=this;wx.showModal({title:"",content:"确定删除股票'"+t+"'吗？",success:function(t){t.confirm&&s.delStockCallback(e)}})},delStockCallback:function(e){var t=this,s=e.currentTarget.dataset,i={outputtype:"3",action:4,scode:s.scode,type:s.market},a=this.slist&&3===this.slist.length;m.wx.request({url:m.CGI_PREFIX+"userstock.fcgi",data:i,context:t,success:function(e){var s=parseInt(e.retcode||-1,10),i=e.retmsg;switch(s){case 0:a&&t.getUserStock();break;default:m.showError(i,s)}}});var o=this.slist,r=this.hklist,c=this.alist,n=this.uslist,l=null;this.currentTab,m.util.each(o,function(e,t,i){e.moveDirect="",e.scode==s.scode&&(l=t)}),o.splice(l,1),this.slist=o,this.operateIndex=-1,l=null,m.util.each(c,function(e,t,i){e.moveDirect="",e.scode==s.scode&&(l=t)}),l>=0&&(c.splice(l,1),this.alist=c,this.operateIndex=-1),l=null,m.util.each(r,function(e,t,i){e.moveDirect="",e.scode==s.scode&&(l=t)}),l>=0&&(r.splice(l,1),this.hklist=r,this.operateIndex=-1,l<20&&this.userActionModifySubscribe(s.market)),l=null,m.util.each(n,function(e,t,i){e.moveDirect="",e.scode==s.scode&&(l=t)}),l>=0&&(n.splice(l,1),this.uslist=n,this.operateIndex=-1),L=[]},topStock:function(e){var t=this;if(this.sortType)return m.showTips("排序状态下不支持置顶"),void(this.operateIndex=-1);var s=e.mp.currentTarget.dataset,i={outputtype:"3",action:5,scode:s.scode,type:s.market};m.wx.request({url:m.CGI_PREFIX+"userstock.fcgi",data:i,context:this,success:function(e){var t=parseInt(e.retcode||-1,10),s=e.retmsg;switch(t){case 0:wx.showToast({title:"已置顶",icon:"success",duration:1e3});break;default:m.showError(s,t)}}});var r,c=0,n=this.slist||[],l=0;m.util.each(n,function(e,t,i){e.moveDirect="",e.scode==s.scode&&(c=t)}),m.util.each(this.hklist||[],function(e,t,i){e.scode==s.scode&&(l=t)}),r=n.splice(c,1),n.unshift(r&&r[0]);for(var d=0;d<n.length;d++)n[d].index_inner=d;var u=(0,o.default)({},this.getStockList(n),{operateIndex:-1});(0,a.default)(u).forEach(function(e){t[e]=u[e]}),L=[],l>=20&&this.userActionModifySubscribe(s.market)},batch:function(e){var t=e.mp.currentTarget.dataset;m.navigateTo({url:"/pages/choose/batch/main?market="+t.type,fail:function(e){console.log(e)}}),c.Request.reportData("xcx_zixuan_batch"),c.Request.reportMTAData({eventName:"xcx_zixuan_batch"})},jumpToSearch:function(e){m.navigateTo({url:"/pages/additional/search/main",fail:function(e){console.log(e)}}),c.Request.reportData("xcx_zixuan_search"),c.Request.reportMTAData({eventName:"xcx_zixuan_search"})},resetDelToast:function(){this.operateIndex>=0&&(this.operateIndex=-1)},jumpToDetail:function(e){if(this.operateIndex>=0)this.operateIndex=-1;else{var t={};if(e&&e.currentTarget&&e.currentTarget.dataset&&(t=e.currentTarget.dataset),t.market&&t.scode){this.tapIndex=t.index||-1;var s=["market="+t.market,"scode="+t.scode,"dqj="+t.dqj,"zde="+t.zde,"zdf="+t.zdf,"preload=1"];if("1"==t.isindex)var i="../quote/quote_zs?"+s.join("&");else d.default.queryStockInfo(t.scode,t.market),d.default.queryPrimary(t.scode,t.market),i="../quote/quote?"+s.join("&");c.Request.reportData({sop:"xcx_stock_detail_from_"+t.from,market:t.market,scode:t.scode}),c.Request.reportMTAData({eventName:"xcx_stock_detail_from_"+t.from,market:t.market,scode:t.scode}),setTimeout(function(){m.navigateTo({url:i},50)})}else console.log("跳转缺少market、scode")}},pickChooseType:function(e){var t=this,s=e.currentTarget.dataset.type,i={currentTabIndex:s,currentTab:s,sortType:"",hasContent:!0,riseType:"",operateIndex:-1};(0,a.default)(i).forEach(function(e){t[e]=i[e]})},pickRiseColumn:function(){var e=this.riseColumn,t="";"rise"===e?t="zsz":"rise_per"===e?t="rise":"zsz"===e&&(t="rise_per"),this.riseColumn=t,this.pickSort()},pickSortType:function(){var e=this.sortType;switch(c.Request.reportData("xcx_zixuan_zixuan_price"),c.Request.reportMTAData({eventName:"xcx_zixuan_zixuan_price"}),e){case"":e="down",this.sortDownStock("price");break;case"down":e="up",this.sortUpStock("price");break;case"up":e="",this.sortUpStock("index_inner")}this.sortType=e,this.riseType="",this.userActionModifySubscribe()},pickRiseType:function(e){var t=this.riseType;switch(c.Request.reportData("xcx_zixuan_zixuan_updown"),c.Request.reportMTAData({eventName:"xcx_zixuan_zixuan_updown"}),t){case"":t="down",this.sortDownStock("rise_per");break;case"down":t="up",this.sortUpStock("rise_per");break;case"up":t="",this.sortUpStock("index_inner")}this.riseType=t,this.sortType="",this.userActionModifySubscribe()},pickSort:function(e){var t="";t=void 0==e?"no_sort":this.riseType,this.riseColumn;switch("rise"==this.riseColumn?(c.Request.reportData("xcx_zixuan_zixuan_updown"),c.Request.reportMTAData({eventName:"xcx_zixuan_zixuan_updown"})):"rise_per"==this.riseColumn&&(c.Request.reportData("xcx_zixuan_zixuan_updown"),c.Request.reportMTAData({eventName:"xcx_zixuan_zixuan_updown"})),t){case"":t="down",this.sortDownStock(this.riseColumn);break;case"down":t="up",this.sortUpStock(this.riseColumn);break;case"up":t="",this.sortUpStock("index_inner");break;case"no_sort":"down"==this.riseType?this.sortDownStock(this.riseColumn):"up"==this.riseType?this.sortUpStock(this.riseColumn):this.sortUpStock("index_inner")}"no_sort"!=t&&(this.riseType=t,this.sortType=""),this.userActionModifySubscribe()},sortList:function(e,t,s){e.sort(function(e,i){return"price"==t?s*((+e[t].replace(",","")||0)-(+i[t].replace(",","")||0)):s*((+e[t]||0)-(+i[t]||0))})},sortUpStock:function(e){var t=this;this.sortList(this.slist,e,1);var s=(0,o.default)({},this.getStockList(this.slist));(0,a.default)(s).forEach(function(e){t[e]=s[e]})},sortDownStock:function(e){var t=this;this.sortList(this.slist,e,-1);var s=(0,o.default)({},this.getStockList(this.slist));(0,a.default)(s).forEach(function(e){t[e]=s[e]})},bindchange:function(e){var t=e.mp.detail&&e.mp.detail.current,s=m.device.windowHeight-this.fixBarHeight();g=!1,console.log(t),clearTimeout(T),this.currentTab=t,this.swiperHeight=s,this.showFixed=!1,this.setViewportInfo()},bindanimationfinish:function(e){var t=this;g||(g=!0,this.operateIndex=-1,this.listLength=20,L=[],this.setSwiperHeight(!0),M=setTimeout(function(){var e=(0,o.default)({},t.updateViewportStock());(0,a.default)(e).forEach(function(s){t[s]=e[s]})},1e3))},updateViewportStock:function(){var e=this.getCurrSwiperList()||[],t=P[this.currentTab],s={};if(t&&e)for(var i=E.beginIndex;i<=E.endIndex&&i<e.length;i++)e[i]&&(s[t+"["+i+"]"]=e[i]);return s},setSwiperHeight:function(){var e=this,t=m.device.windowHeight-this.fixBarHeight();clearTimeout(T),T=setTimeout(function(){wx.createSelectorQuery().select("#"+q[e.currentTab]).boundingClientRect().exec(function(s){s&&s[0]&&(e.swiperHeight=s[0].height>t?s[0].height:t)})},100)},longpress:function(e){var t,s=this,i=e.currentTarget.dataset.index,o=m.rpxToPx(330),r=!1,c="left",n=e.mp.changedTouches&&e.mp.changedTouches[0].clientX,l=e.mp.changedTouches&&e.mp.changedTouches[0].clientY;m.device.windowWidth-n<o?(t=m.device.windowWidth-o,c="right"):t=n,l-this.fixBarHeight()<60&&(r=!0);var d={isFirstItem:r,operateIndex:i,operateLeft:t,arrowDirection:c};(0,a.default)(d).forEach(function(e){s[e]=d[e]})},fixBarHeight:function(){return 109},pickPageType:function(){wx.switchTab({url:"/pages/index/hq/main"})},touchstartView:function(){x=!0},touchendView:function(){var e=this;I=setTimeout(function(){x&&(x=!1)},500),A=setTimeout(function(){var t=(0,o.default)({},e.updateViewportStock());(0,a.default)(t).forEach(function(s){e[s]=t[s]})},1e3)},setViewportInfo:function(e){var t=Math.floor((e||E.scrollTop)/E.stockItemHeight);t=Math.max(t,0),E.beginIndex=t,E.endIndex=t+E.dispCount},userActionModifySubscribe:function(e){var t=!e,s=this.slist,i=this.hklist;t&&s&&s.length?this.initWebSocket(this.getScodeForSubscribe(s)):_.isHKShares(e)&&i&&i.length>20&&this.initWebSocket(this.getScodeForSubscribe(s))},showTopTipsBar:function(){var e=this;n.default.getTipsData().then(function(t){n.default.isShowBar(t)&&(e.tipText=n.default.formatTipsData(t),e.state.tipsData=t,e.showMarqueeProbe=!0,e.$nextTick(function(){e.calMarqueeTime()}))})},calMarqueeTime:function(){var e=this;wx.createSelectorQuery().select(".marquee-probe").boundingClientRect().exec(function(t){t&&t[0]&&e.$nextTick(function(){wx.createSelectorQuery().select(".marquee-probe-label").boundingClientRect().exec(function(s){s&&s[0]&&(e.showMarqueeProbe=!1,e.showMarquee(Math.max(15,parseInt(s[0].width/t[0].width*7.5,10))+"s"))})})})},showMarquee:function(e){var t=this;this.showMarketTipBar=!0,this.marqueeTime=e,this.$nextTick(function(){wx.createSelectorQuery().select(".marquee-view").boundingClientRect().exec(function(e){e&&e[0]&&wx.createSelectorQuery().select(".active").boundingClientRect().exec(function(s){s&&s[0]&&2*e[0].width>(s&&1.05*s[0].width)&&(t.tipScroll=!1)})})})},hideTopTipsBar:function(){n.default.closeTip(this.state.tipsData),this.showMarketTipBar=!1},prepareRecommandData:function(e){if(1==e.abtest){e.hot_plate=e.hot_plate||[],e.handpick=e.handpick||[],e.stock_rank=e.stock_rank||[],e.head_news=e.head_news||[],e.relate_stocks=e.stock_rank;for(var t=0;t<e.hot_plate&&e.hot_plate.length&&t<2;t++)e.hot_plate[t].list=e["pstocks_"+t]||[],0==t&&(this.state._rcmdRelateStock.plate=[]),this.state._rcmdRelateStock.plate=this.state._rcmdRelateStock.plate.concat(e.hot_plate[t].list.slice(0));this.state._rcmdRelateStock.hot=e.stock_rank,this.state._rcmdRelateStock.news=e.relate_stocks}},viewRankList:function(){m.navigateTo({url:"../../pages/hq/detail/main?from=rank&rank=1",fail:function(e){console.log(e)}})},viewStockDetail:function(e){var t=e.mp.currentTarget.dataset,s=t.scode,i=t.type;m.navigateTo({url:"/pages/quote/quote?market="+i+"&scode="+s,fail:function(e){console.log(e)}})},rcmdBack:function(){this.showRelStock=!1},subsStock:function(e){var t=e.mp.currentTarget.dataset.type;if(t){var s=[];if(this.state._rcmdRelateStock[t].forEach(function(e){s.push(e.market+":"+e.code)}),s.length>0){var i=this,a={url:m.CGI_PREFIX+"userstock.fcgi",data:{action:2,scodelist:s.join(",")},success:function(){i.getUserStock()},fail:function(e){console.log(e)}};m.wx.request(a)}}else this.showRelStock=!0},viewHotPlate:function(){m.navigateTo({url:"../../pages/hq/list/main?plate=200",fail:function(e){console.log(e)}})},viewPlate:function(e){var t=e.currentTarget.dataset,s=t.plate,i=t.code;m.navigateTo({url:"../../pages/hq/detail/main?plate="+s+"&code="+i,fail:function(e){console.log(e)}})},viewNewsList:function(){wx.switchTab({url:"/pages/index/information/main"})},viewNewsDetail:function(e){var t=e.mp.currentTarget.dataset.news,s=t.zxtype,i=t.zxid,a=t.title,o=t.source;m.navigateTo({url:"../../pages/newsCon/newsDetail/main?id="+i+"&zxtype="+s+"&title="+encodeURIComponent(a)+"&date="+encodeURIComponent(a)+"&source="+encodeURIComponent(o),fail:function(e){console.log(e)}})},cardChange:function(e){this.rcmdCardIndex=e.mp.detail&&e.mp.detail.current},toggleMarquee:function(){this.stopMarquee=!this.stopMarquee},onDiversionPopupTap:function(){this.diversionPopupVisible=!0,this.diversionIconVisible=!1},onDiversionPopupClose:function(){this.diversionPopupVisible=!1,this.diversionIconVisible=!0}}}},MX7x:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var i=s("C1I/"),a=s.n(i),o=s("57Rs"),r=s("ybqe")(a.a,o.a,function(e){s("vI4W")},"data-v-0de45436",null);t.default=r.exports},Qt9A:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var i=s("GP9K"),a=s.n(i),o=s("9V6O"),r=s("ybqe")(a.a,o.a,function(e){s("7LWh")},null,null);t.default=r.exports},"Qu/K":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABMCAYAAAAiCZRHAAAAAXNSR0IArs4c6QAACEhJREFUaAXdmnmMXVMcx81mGVvttJbaYq+lao/YJUhsKZEQsSRoNCHxB4JELLH8ISGCvwhJ/7Ck9j2qLbEOqdpCGVpttdNqtWVUx9Tnc73z3Llzl/dm3rx5M7/kM+ee7XfP955zz3LfNG0wSFu/fv0WuNgNxsK2sA2shUWwoMTKpqamf7gecmsayB0QsQP1ToAz4AjYFdohaX+R0AXzYCa8DF8jrptw+A0he8Gt8CWshWptORWehbPAnh0e4+bbw1RQSC8M1lbg4CmYBM11VcUND4AnYDXU2r7F4VWwZa1E5b5D3OhEbnQbHA95T9JJYCn4vvh+tMHW4Lu2GeTdx3qPCO/WEsKhMcXATMiyNWS8DzfDMbAttEELtMLmsB9cCk/Dr5Blq8i4F3wAtTccHwWvQ5r9SeKrcC6MqeTulFPgofAQLIY06yLxJqjtZIHD3eAxSJvFvif9OtiuEiHJMtTbCJzhZsM/kLRvSLgI8oZ30m12HEebwo2wDJI2h4QLYcNsD5Xl4ONAmAZpD+050idU5qmgFI6Oh3cgaZ+R4BCrzZOjHfg6DF6ApPkwb4CNC5qbn40De+cWWAlxW0jkWtgo30P1uficDHMhadNJOKR6j32n4gNwcDTE14R1xJ+H6UypTs21trdx6Hboz4Tjw4hPRFTVIyKqQMUWHPhEDko4nkv8DcQsTKTXJIrfFThSVEfC4TjiE2HHRHphNDwBd8iK2SlWo4frD+GTWNpQXH5eusffMec+4H1h71haRZetpVJu/3eHEDfZVXtOKTSea/SyL7GNcOi6y7ahP9MLRceGlZT7Dtxl2DPB9uDCzfBsfPSGxKIwCLCHJG6/EJlfiTNu6gp/DVwNYbX/kesHyHsSH6u4TjX9U8Zzk8M6Lsj2OGJ8UMl3jKR0C0POs0zyPGMPFe6taMzmlLsSpkIQw+UGPuEb4RLK2Kg8U4wHwrhZxwPjpvHEousgyCk5Pi2vJ+4QWF7kgHwnEzexbkaT5hM/GfZJZiTifxBfk0izbZtAvF2JIv2jQZBhuLaUghz7lYzdvSgnWbYnGXtkZZbSnYAkbu7QW8EJomILItZRQ4KZXvh0GEqWGwMOuywzLy/fem0lvA7mQ3Xti7cr5GWGQVA3JZyZ4lZJQ8I5J4Tx+uHavLx8y7mYS9zsMYdhxROClYMgK642IWYOFamFFQlyNvOrUdxsk5PSgAQtpqLEbRcirgNFM1S8Ttp1rhj8+47sCk4gcbM9LhvxBTeen3odesgpsxMcesF8Nw6HwfZS0ZDbnnvsD8l1cB5p30NVFgkqLXxfUXNBovaxxD2K+9IOlR2F42PAGS2Y7/OX4OJclcWdfErN6aDzYM40W8GOkBQbyhSFmT3Eg3IU7Ay/weyYo/lcv5u3w4iVzb/kJn3GvGNc0mqV8q4n/A2ybD4ZV2TUbyZP/2HoR8WIN0lanaK0eA9FZXkq9krZiBdtLstlMy4yG4bv1IU72YYMv6nJfZ5MaonaJA74iVd7+3oIynyHqm1sJeX7DblKKg2gTDTseC/8YjQedoff4TuGlxNCzawegnwnfQ9dqK+Gy8BjhlPzLETeT+iMNth3FTf/b32iyBD9cXPp19ApMBVcAuwxN7+nw11wKtTE6tFDNv40GA9+uE/aJBLOo6f8Icwp/kDiF8KhsBCeh1nkeWYqtHoI2o5WuJPOOnk6Mbn18WebowlvhviX03OIP0yev0546My1eghSSJaY0Dh7zuF3MMTFmO9ez4V5EaKeQFTyIGiZstVj2i7fLOfC48OZ4DBLMycUe28solzTNoHNoN8esx49lNbAZJq94ND0fUsz0xXtPnNfOA/s1S8Q9TjhW/RcVecm6vQ3nLkPK9rLUaQm5jf2Tkj+YmG6bYiO+Y3SQ/2fVv+Usf2TohTTXRKWTZ48eVqjvEMZba04eU9KnjRhwoTxo0WQ79iRbW1tx44WQXblTkwM40aToC2ZGMaMJkF0UFPTaBJEByXO8g7EEWzd6Okur0NEXIEvhiPBQ9cnMAPy/h2sz/cHyg6nrWHErYoEIcZN4W1wNoQvPBdwrbAZ5D9FOJMKKwnjZllPoaFOPK/e137KXt08ZcoU90TngoesZMP8zed8mAb+1H45eEALtg8XE6FoNx3KD2UYfZ9vbW9v93PvKZD3k0c7+SfAcfAVot4m9ImcBA7R5IMgqe72nyCG0X7c+qAKb+8QdXhKo1lXT0/Pkube3l4/TtTkA8UwKnRy6hLXoQ74EEayraXxy1paWlY1d3R0zCHyIvwyghV5uOvq7Oz0PYr+M2ocL/qD4D/3jUT7gUZfopZo68PE4OeiR+EFSP2ATnojm+tjtEZGgmwpor4muA9Goig3AFL+0dhrRX1OcCe8DI20raE5ubaUXOkryAREfUagqFdgJIjyU7O/lq+A/oJMRJQbU0W9Bo0uypntV3Dnki7IDER9RKCoN403sDkZLKG9rkXZgsyk0AcEd8BbxhvU3CFE74/tK89yWY1F1PvkKeqdrDLDnK4YRUVWKMhSiJpNoKiZxhvMFLMstKkiQRZG1LsEt8MsaBTrpiGLYHloUMWCrICoGQT21HvGG8BcTBdA+UN9VYIUgCgPd85+ThjDbQ43Z7jy8adqQSUFTuX21HAfO1x/FpfaFAUDEsQTcbF9He6CjyNP9f9jGxTkLqFsAxJk7ZIot0d3g4fEettf3NAJIdryhJsPWJAOSqJe4lJRbmzrae4QnBCiLU+48aAE6QRRnp888d4Dc6Fe5tqztHT/8j0HLUhPOO0hmA73wzdQD3My8B3qY619YoOIIGodx+BncOGNJoG+h2qn7g9c8+An6GP/At0ZKRqUJauqAAAAAElFTkSuQmCC"},UHN4:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var i=s("Cmdv"),a=s.n(i),o=s("8fMe"),r=s("ybqe")(a.a,o.a,function(e){s("pCR5")},"data-v-9b33aa72",null);t.default=r.exports},bDhh:function(e,t,s){function i(e){return e&&e.__esModule?e:{default:e}}var a=i(s("5nAL")),o=i(s("Qt9A"));new a.default(o.default).$mount()},lR9t:function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(s("//Fk")),a="choose/holiday/tips",o=getApp(),r={getTipsData:function(){return new i.default(function(e){o.wx.request({url:"/cgi-bin/activity/ad.fcgi",data:{action:1,channel:0,type:2,segment:1},success:function(t){e(t)}})})},closeTip:function(e){var t=e.adinfo&&e.adinfo.id;if(t){var s=wx.getStorageSync(a)||"";wx.setStorageSync(a,s+";"+this.makeTipsId(t))}},formatTipsData:function(e){return""+e.adinfo.imgurl},isShowBar:function(e){var t=e.adinfo;return!!(t&&t.id&&t.imgurl)&&this.isNewTip(t.id)},isNewTip:function(e){return!((wx.getStorageSync(a)||"").indexOf(this.makeTipsId(e))>=0)},makeTipsId:function(e){return"id-"+e+"-key"}};t.default=r},pCR5:function(e,t){},vI4W:function(e,t){}},["bDhh"]); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/index/hq/main';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/hq/main.js';	define("pages/index/hq/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../common/manifest.js"),require("../../../common/vendor.js"),global.webpackJsonpMpvue([1],{"0VX0":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=getApp();e.default={props:{title:{type:String},hsindustry:{type:Object},plate:{type:Number}},methods:{viewPlate:function(t){var e=t.currentTarget.dataset;s.navigateTo({url:"/pages/hq/list/main?plate="+e.plate})},viewPlateDetail:function(t){var e=t.currentTarget.dataset,a=["plate="+e.plate,"code="+e.code];s.navigateTo({url:"/pages/hq/detail/main?"+a.join("&")})}}}},"15NF":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("y5FK"),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("Dk3b"));e.default={props:{stocks:{type:Array}},methods:{showNewsStocks:function(){(0,s.reportEyes)(i.INDEX_NEWS_MORE_TAP),wx.navigateTo({url:"/pages/strategy/pages/news/main"})},showNewsStockDetail:function(t){var e=t.currentTarget.dataset;wx.navigateTo({url:"/pages/strategy/pages/newsDetail/main?symbol="+e.symbol+"&rate="+[e.positiveRate,e.neutralRate,e.negativeRate].join("_")})}}}},"69Gw":function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container hq-container",class:"black"==t.skin?"skin-black":"skin-white"},[t.isIOS?t._e():a("view",{staticClass:"layout-fix-strategy-tab layout-fix",class:t.showFixed?"":"hide"},[a("view",{attrs:{hidden:!!t.isHideStrategy}},[a("strategy-tabbar",{attrs:{currentMarketStrategy:t.currentMarketStrategy,strategyNewUser:t.strategyNewUser,showFixed:t.showFixed,currentTabName:t.currentTabName,eventid:"0",mpcomid:"0"},on:{pickMarket:t.pickMarketStrategy}})],1),t._v(" "),a("view",{attrs:{hidden:0!=t.currentMarketStrategy}},[a("market-tabbar",{attrs:{currentTab:t.currentTab,eventid:"1",mpcomid:"1"},on:{pickType:t.pickMarketType}})],1)]),t._v(" "),a("view",{staticClass:"fix-tab-bar"},[a("view",{attrs:{hidden:!!t.isHideStrategy}},[a("strategy-tabbar",{attrs:{currentMarketStrategy:t.currentMarketStrategy,strategyNewUser:t.strategyNewUser,showFixed:t.showFixed,currentTabName:t.currentTabName,eventid:"2",mpcomid:"2"},on:{pickMarket:t.pickMarketStrategy}})],1),t._v(" "),a("view",{attrs:{hidden:0!=t.currentMarketStrategy}},[a("market-tabbar",{attrs:{currentTab:t.currentTab,eventid:"3",mpcomid:"3"},on:{pickType:t.pickMarketType}})],1)]),t._v(" "),a("swiper",{style:{height:0==t.currentMarketStrategy?t.swiperHeight+"px":t.swiperPickTabHeight+"px"},attrs:{current:t.currentTabIndex,duration:"250",eventid:"12"},on:{change:t.bindchange,animationfinish:t.bindanimationfinish}},[a("swiper-item",{attrs:{mpcomid:"8"}},[a("view",{staticClass:"scroll-content"},[t.mlist&&t.mlist.length?a("view",{staticClass:"market-box",attrs:{id:"market-a"}},[a("view",{staticClass:"top-market"},[a("zhishu-swiper",{attrs:{mlist:t.mlist,tapIndex:t.tapIndex,mpcomid:"4"}}),t._v(" "),a("view",{staticClass:"stock-hs-market"},[a("view",{staticClass:"flex flex-pack-justify"},[a("view",{staticClass:"sto-growth",style:{width:t.HSList.raisePercent+"%"}},[a("view",{staticClass:"sto-growth-line"}),t._v(" "),a("view",{staticClass:"stock-market-title growth-title"},[t._v("涨"+t._s(t.HSList.raiseNum)+"家")])]),t._v(" "),a("view",{staticClass:"sto-stable",style:{width:t.HSList.stablePercent+"%"}},[a("view",{staticClass:"sto-stable-line"})]),t._v(" "),a("view",{staticClass:"sto-jump",style:{width:t.HSList.fallPercent+"%"}},[a("view",{staticClass:"sto-jump-line"}),t._v(" "),a("view",{staticClass:"stock-market-title jump-title"},[t._v("跌"+t._s(t.HSList.fallNum)+"家")])])])])],1),t._v(" "),a("hot-block",{attrs:{title:"热门行业板块",plate:200,hsindustry:t.HSList.hsindustry,mpcomid:"5"}}),t._v(" "),a("hot-block",{attrs:{title:"热门概念板块",plate:201,hsindustry:t.HSList.hsconcept,mpcomid:"6"}}),t._v(" "),a("view",{staticClass:"fixed-follow-org",attrs:{id:"js_rankBox"}},[a("view",{staticClass:"rank-switch-tab",attrs:{id:"tpcont"}},[a("view",{staticClass:"wrap-rank-tab flex flex-pack-justify"},t._l(t.rankList,function(e,s){return a("view",{key:s,staticClass:"rank-tab",class:t.rankIndex==s?"cur-tab":"",attrs:{"data-index":s,"data-market":"HS",eventid:"4_"+s},on:{click:t.pickRank}},[t._v(t._s(e.name))])})),t._v(" "),a("view",{staticClass:"gradient-white"})]),t._v(" "),a("view",{staticClass:"top-list flex flex-align-center flex-pack-justify rank-top-list"},[a("view",{staticClass:"title row-a"},[t._v("股票")]),t._v(" "),a("view",{staticClass:"title row-b align-r"},[t._v("最新价")]),t._v(" "),a("view",{staticClass:"title row-c align-r"},[t._v(t._s(t.rankList[t.rankIndex].title))])])]),t._v(" "),a("view",{staticClass:"stock-list market-list"},[a("view",{staticClass:"list-cont-gap show"},[t._l(t.HSList.hsmarketStock,function(e,s){return[0==t.currentTab&&s<t.listLength||s<5?a("view",{key:s,staticClass:"list-item",attrs:{"data-market":e.market,"data-scode":e.code,"data-from":"market",eventid:"5_"+s},on:{click:t.jumpToDetail}},[a("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[a("view",{staticClass:"row-a"},[a("span",{staticClass:"block span-1"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"block span-2 flex flex-align-center"},[a("label",{class:e.iconClass}),t._v(" "),a("label",{staticClass:"block"},[t._v(t._s(e.code))])],1)]),t._v(" "),a("view",{staticClass:"row-b align-r",class:e.priceClass},[t._v(t._s(e.zjcj))]),t._v(" "),a("view",{staticClass:"row-c"},[a("view",{staticClass:"refresh-tr align-r",class:e.columnClass},[t._v(t._s(e[t.rankList[t.rankIndex].column]))])])])]):t._e()]})],2),t._v(" "),a("view",{staticClass:"more-list-bottom flex flex-pack-center flex-align-center hide"},[a("span",{staticClass:"block blue"},[t._v("点击查看更多")]),t._v(" "),a("span",{staticClass:"block icon-arrow"})])])],1):t._e()])]),t._v(" "),a("swiper-item",{attrs:{mpcomid:"10"}},[a("view",{attrs:{id:"board-kch"}},[a("kch-rank",{ref:"kchRank",attrs:{mpcomid:"9"}})],1)]),t._v(" "),a("swiper-item",{attrs:{mpcomid:"14"}},[a("view",{staticClass:"scroll-content"},[t.hkMlist&&t.hkMlist.length?a("view",{staticClass:"market-box",attrs:{id:"market-hk"}},[a("view",{staticClass:"top-market"},[a("zhishu-swiper",{attrs:{mlist:t.hkMlist,tapIndex:t.tapIndex,mpcomid:"11"}})],1),t._v(" "),a("hot-block",{attrs:{title:"热门行业板块",plate:400,hsindustry:t.HKList.hkindustry,mpcomid:"12"}}),t._v(" "),a("view",{staticClass:"fixed-follow-org",attrs:{id:"js_hkrankBox"}},[a("scroll-view",{staticClass:"rank-switch-tab",attrs:{id:"tpcont","scroll-x":"",scrollLeft:t.disLeft,eventid:"7"},on:{click:t.scrollNav}},t._l(t.hkrankList,function(e,s){return a("view",{key:s,staticClass:"rank-tab",class:t.hkrankIndex==s?"cur-tab":"",attrs:{"data-index":s,"data-market":"HK",eventid:"6_"+s},on:{click:t.pickRank}},[t._v(t._s(e.name))])})),t._v(" "),a("view",{staticClass:"top-list flex flex-align-center flex-pack-justify rank-top-list"},[a("view",{staticClass:"title row-a"},[t._v("股票")]),t._v(" "),a("view",{staticClass:"title row-b align-r"},[t._v("最新价")]),t._v(" "),a("view",{staticClass:"title row-c align-r"},[t._v(t._s(t.hkrankList[t.hkrankIndex].title))])])],1),t._v(" "),a("view",{staticClass:"stock-list market-list"},[a("view",{staticClass:"list-cont-gap show"},[t._l(t.HKList.hkmarketStock,function(e,s){return[2==t.currentTab&&s<t.listLength||s<5?a("view",{key:s,staticClass:"list-item",attrs:{"data-market":e.market,"data-scode":e.code,"data-from":"market",eventid:"8_"+s},on:{click:t.jumpToDetail}},[a("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[a("view",{staticClass:"row-a"},[a("span",{staticClass:"block span-1 black",class:t.stockFont[s]},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"block span-2 gray flex flex-align-center"},[a("label",{class:e.iconClass}),t._v(" "),a("label",{staticClass:"block"},[t._v(t._s(e.code))])],1)]),t._v(" "),a("view",{staticClass:"row-b align-r",class:e.priceClass},[t._v(t._s(e.zjcj))]),t._v(" "),a("view",{staticClass:"row-c"},[a("view",{staticClass:" refresh-tr align-r",class:[e[t.hkrankList[t.hkrankIndex].column]&&e[t.hkrankList[t.hkrankIndex].column].length>=9?"ft-small":"",e.columnClass]},[t._v(t._s(e[t.hkrankList[t.hkrankIndex].column]))])])])]):t._e()]})],2),t._v(" "),a("view",{staticClass:"more-list-bottom flex flex-pack-center flex-align-center hide"},[a("span",{staticClass:"block blue"},[t._v("点击查看更多")]),t._v(" "),a("span",{staticClass:"block icon-arrow"})])])],1):t._e()])]),t._v(" "),a("swiper-item",{attrs:{mpcomid:"18"}},[a("view",{staticClass:"scroll-content"},[t.usMlist&&t.usMlist.length?a("view",{staticClass:"market-box",attrs:{id:"market-us"}},[a("view",{staticClass:"top-market"},[a("zhishu-swiper",{attrs:{mlist:t.usMlist,tapIndex:t.tapIndex,mpcomid:"15"}})],1),t._v(" "),a("view",{staticClass:"hot-blocks-title flex flex-align-center flex-pack-justify"},[a("label",{staticClass:"block"},[t._v("ETF板块")])],1),t._v(" "),a("view",{staticClass:"hot-blocks-group flex"},t._l(t.USList.usetf,function(e,s){return a("view",{key:s,staticClass:"hot-blocks-item",attrs:{"data-code":e.code,"data-plate":e.type,eventid:"9_"+s},on:{click:t.viewPlateDetail}},[a("view",{staticClass:"blocks-name "},[t._v(t._s(e.name))]),t._v(" "),a("view",{staticClass:"stock-name ellipsis-text",staticStyle:{margin:"12rpx 0"}},[t._v(t._s(e.fn))]),t._v(" "),a("view",{staticClass:"stock-price"},[a("label",{staticClass:"stock-percent-left",class:e.fzdf>0?"red":e.fzdf<0?"green":"gray"},[t._v(t._s(e.fzjcj))]),t._v(" "),a("label",{staticClass:"stock-percent-right",class:e.fzdf>0?"red":e.fzdf<0?"green":"gray"},[t._v(t._s(e.fzdf)+"%")])],1)])})),t._v(" "),a("hot-block",{attrs:{title:"热门行业板块",plate:601,hsindustry:t.USList.usindustry,mpcomid:"16"}}),t._v(" "),a("view",{staticClass:"fixed-follow-org",attrs:{id:"js_usrankBox"}},[a("scroll-view",{staticClass:"rank-switch-tab",attrs:{id:"tpcont","scroll-x":""}},[a("view",{staticClass:"wrap-rank-tab flex flex-pack-justify",style:{"text-align":"center"}},t._l(t.usrankList,function(e,s){return a("view",{key:s,staticClass:"rank-tab",class:t.usrankIndex==s?"cur-tab":"",staticStyle:{width:"50%"},attrs:{"data-index":s,"data-market":"US",eventid:"10_"+s},on:{click:t.pickRank}},[t._v(t._s(e.name))])})),t._v(" "),a("view",{staticClass:"gradient-white"})]),t._v(" "),a("view",{staticClass:"top-list flex flex-align-center flex-pack-justify rank-top-list"},[a("view",{staticClass:"title row-a"},[t._v("股票")]),t._v(" "),a("view",{staticClass:"title row-b align-r"},[t._v("最新价")]),t._v(" "),a("view",{staticClass:"title row-c align-r"},[t._v(t._s(t.usrankList[t.usrankIndex].title))])])],1),t._v(" "),a("view",{staticClass:"stock-list market-list"},[a("view",{staticClass:"list-cont-gap show"},[t._l(t.USList.usmarketStock,function(e,s){return[3==t.currentTab&&s<t.listLength||s<5?a("view",{key:s,staticClass:"list-item",attrs:{"data-market":e.market,"data-scode":e.code,"data-from":"market",eventid:"11_"+s},on:{click:t.jumpToDetail}},[a("view",{staticClass:"li-wrap flex flex-align-center flex-pack-justify"},[a("view",{staticClass:"row-a"},[a("span",{staticClass:"block span-1 black ellipsis-text",class:t.usstockFont[s]},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"block span-2 gray flex flex-align-center"},[a("label",{class:e.iconClass}),t._v(" "),a("label",{staticClass:"block"},[t._v(t._s(t.trimMarket[s]))])],1)]),t._v(" "),a("view",{staticClass:"row-b align-r",class:e.priceClass},[t._v(t._s(e.zjcj))]),t._v(" "),a("view",{staticClass:"row-c"},[a("view",{staticClass:" refresh-tr align-r",class:[e[t.usrankList[t.usrankIndex].column]&&e[t.usrankList[t.usrankIndex].column].length>=9?"ft-small":"",e.columnClass]},[t._v(t._s(e[t.usrankList[t.usrankIndex].column]))])])])]):t._e()]})],2),t._v(" "),a("view",{staticClass:"more-list-bottom flex flex-pack-center flex-align-center hide"},[a("span",{staticClass:"block blue"},[t._v("点击查看更多")]),t._v(" "),a("span",{staticClass:"block icon-arrow"})])])],1):t._e()])])],1),t._v(" "),a("popup",{attrs:{visible:t.popupVisible,type:t.popupType,eventid:"13",mpcomid:"19"},on:{open:t.onPopupTap,close:t.onPopupClose}})],1)},staticRenderFns:[]};e.a=s},"6CEg":function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"wrap-market-index"},[a("swiper",{staticClass:"wrap-index-group flex",attrs:{eventid:"2"},on:{change:t.swiperChange}},[a("swiper-item",{staticClass:"index-group flex",attrs:{mpcomid:"0"}},t._l(t.mlist,function(e,s){return s<3?a("view",{key:s,staticClass:"index-col hs-index flex-1",attrs:{"data-market":e.m,"data-scode":e.c,"data-isindex":"1","data-from":"market",eventid:"0_"+s},on:{click:t.jumpToDetail}},[a("view",{staticClass:"index-title"},[t._v(t._s(e.name))]),t._v(" "),a("view",{staticClass:"index-price",class:e.rise>0?"red":e.rise<0?"green":"gray"},[t._v(t._s(e.price))]),t._v(" "),a("view",{staticClass:"index-updown",class:e.rise>0?"red":e.rise<0?"green":"gray"},[a("label",[t._v(t._s(e.rise))]),t._v(" "),a("label",[t._v("("+t._s(e.rise_per)+"%)")])],1)]):t._e()})),t._v(" "),t.mlist.length>3?a("swiper-item",{staticClass:"index-group flex",attrs:{mpcomid:"1"}},t._l(t.mlist,function(e,s){return s>2?a("view",{key:s,staticClass:"index-col hs-index flex-1",attrs:{"data-market":e.m,"data-scode":e.c,"data-isindex":"1","data-from":"market",eventid:"1_"+s},on:{click:t.jumpToDetail}},[a("view",{staticClass:"index-title"},[t._v(t._s(e.name))]),t._v(" "),a("view",{staticClass:"index-price",class:e.rise>0?"red":e.rise<0?"green":"gray"},[t._v(t._s(e.price))]),t._v(" "),a("view",{staticClass:"index-updown",class:e.rise>0?"red":e.rise<0?"green":"gray"},[a("label",[t._v(t._s(e.rise))]),t._v(" "),a("label",[t._v("("+t._s(e.rise_per)+"%)")])],1)]):t._e()})):t._e()],1),t._v(" "),t.mlist.length>3?a("view",{staticClass:"swicther-dot flex flex-pack-center flex-align-center"},[a("label",{staticClass:"swi-dot-index",class:"0"==t.swiperPoint?"cur-dot":"",attrs:{href:"javascript:;"}}),t._v(" "),a("label",{staticClass:"swi-dot-index",class:"1"==t.swiperPoint?"cur-dot":"",attrs:{href:"javascript:;"}})],1):t._e()],1)},staticRenderFns:[]};e.a=s},"6vT6":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("stnp"),i=a.n(s),r=a("ec6Y"),n=a("ybqe")(i.a,r.a,function(t){a("76Tk")},"data-v-10208706",null);e.default=n.exports},"6yHA":function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[t.type?t._e():a("view",{staticClass:"site-popup",class:t.visible?"show":""},[a("div",{staticClass:"site-popup-item"},[a("div",{staticClass:"close",attrs:{eventid:"0"},on:{click:t.onClose}}),t._v(" "),a("image",{attrs:{src:"https://wzq.gtimg.com/resource/images/7fcc4cc685dbc5dea9906fad79bc3a3c.png"}}),t._v(" "),a("button",{staticClass:"btn-express",attrs:{"open-type":"contact","data-openType":"contact",eventid:"1"},on:{click:t.onClose}})],1),t._v(" "),a("div",{staticClass:"layer",attrs:{eventid:"2"},on:{click:t.onClose}})]),t._v(" "),"quote"==t.type?a("cover-view",{staticClass:"site-popup",class:[t.visible?"show":"",t.type],attrs:{mpcomid:"6"}},[a("cover-view",{staticClass:"site-popup-item",attrs:{mpcomid:"4"}},[a("cover-view",{staticClass:"cover-close",attrs:{eventid:"3",mpcomid:"1"},on:{click:t.onClose}},[a("cover-image",{staticClass:"close-img",attrs:{src:"https://wzq.gtimg.com/resource/images/df6c0b4413a1eb3955258db2bb9f60be.png",mpcomid:"0"}})],1),t._v(" "),a("cover-image",{staticClass:"img",attrs:{src:"https://wzq.gtimg.com/resource/images/7fcc4cc685dbc5dea9906fad79bc3a3c.png",mpcomid:"2"}}),t._v(" "),a("cover-view",{staticClass:"btn-express",attrs:{mpcomid:"3"}},[a("button",{staticClass:"btn-express-inner",attrs:{"open-type":"contact","data-openType":"contact",eventid:"4"},on:{click:t.onClose}},[a("view",{staticClass:"text"},[t._v("abc")])])],1)],1),t._v(" "),a("cover-view",{staticClass:"layer",attrs:{eventid:"5",mpcomid:"5"},on:{click:t.onClose}})],1):t._e(),t._v(" "),a("div",{staticClass:"nav-icon",class:[t.type,t.showWxIcon?"show":"",t.device],attrs:{eventid:"6"},on:{click:t.onOpen}})],1)},staticRenderFns:[]};e.a=s},"76Tk":function(t,e){},A828:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("niax"),i=getApp();e.default={data:{closed:!0,device:i.getPhoneModel(i.device.model)||""},props:{visible:{type:Boolean},showWxIcon:{type:Boolean},type:{type:String}},methods:{onOpen:function(){this.$emit("open"),s.Request.reportData("xcx_account_subs.open"),s.Request.reportMTAData({eventName:"xcx_account_subs.open"})},onClose:function(t){this.$emit("close"),t.currentTarget.dataset.opentype?(s.Request.reportData("xcx_account_subs.subs"),s.Request.reportMTAData({eventName:"xcx_account_subs.subs"})):(s.Request.reportData("xcx_account_subs.close"),s.Request.reportMTAData({eventName:"xcx_account_subs.close"}))}}}},AyLh:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("rL13"),i=a.n(s),r=a("dPPG"),n=a("ybqe")(i.a,r.a,function(t){a("kkOe")},"data-v-f78912ee",null);e.default=n.exports},G0Dg:function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.stocks.length?a("view",{staticClass:"news-wrap"},[a("view",{staticClass:"wrap-title flex flex-pack-justify flex-align-center"},[a("text",{staticClass:"wrap-title-text"},[t._v("新闻热股")]),t._v(" "),a("view",{staticClass:"more-entry flex",attrs:{eventid:"0"},on:{click:t.showNewsStocks}},[a("text",{staticClass:"more-text"},[t._v("更多")]),t._v(" "),a("text",{staticClass:"icon icon-arrow"})])]),t._v(" "),a("view",{staticClass:"news-stock-list"},t._l(t.stocks,function(e,s){return a("view",{key:s,staticClass:"stock-item flex flex-pack-justify",attrs:{"data-symbol":e.symbol,"data-positive-rate":e.positive_rate,"data-neutral-rate":e.neutral_rate,"data-negative-rate":e.negative_rate,eventid:"1_"+s},on:{click:t.showNewsStockDetail}},[t.showRankNum&&s<3?a("view",{class:"rank-num icon-"+(s+1)}):t._e(),t._v(" "),a("view",{staticClass:"stock-item-left"},[a("view",{staticClass:"stock-name"},[t._v(t._s(e.name))]),t._v(" "),a("view",{staticClass:"comment-ratio"},[a("view",{staticClass:"distribute-bar"},[a("view",{staticClass:"flex bar-list",staticStyle:{height:"100%"}},[a("view",{staticClass:"bar-item bar-red",style:{width:100*e.positive_rate+"%"}}),t._v(" "),a("view",{staticClass:"bar-item bar-gray",style:{width:100*e.neutral_rate+"%"}}),t._v(" "),a("view",{staticClass:"bar-item bar-green",style:{width:100*e.negative_rate+"%"}})])])]),t._v(" "),a("view",{staticClass:"comment-detail flex"},[a("view",{staticClass:"ratio-value"},[t._v(t._s(100*e.positive_rate)+"%")]),t._v(" "),a("view",{staticClass:"ratio-text"},[t._v("正面舆情")])])]),t._v(" "),a("view",{staticClass:"stock-item-right flex flex-direction-column flex-pack-justify"},[a("view",{staticClass:"news-title clamp-2"},[a("span",{staticClass:"news-tag"},[t._v("专题")]),t._v(" "),a("span",{staticClass:"title-text"},[t._v(t._s(e.title))])]),t._v(" "),a("view",{staticClass:"comment-count"},[t._v("共"+t._s(e.news_num)+"条新闻")])])])}))]):t._e()},staticRenderFns:[]};e.a=s},GCNU:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("f+am"),i=a.n(s),r=a("lIiW"),n=a("ybqe")(i.a,r.a,function(t){a("rCsg")},"data-v-7d010118",null);e.default=n.exports},Gpwi:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("oNqh"),i=a.n(s),r=a("69Gw"),n=a("ybqe")(i.a,r.a,function(t){a("UkSz")},"data-v-0f44af27",null);e.default=n.exports},M3ss:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("A828"),i=a.n(s),r=a("6yHA"),n=a("ybqe")(i.a,r.a,function(t){a("sCNC")},"data-v-2e09864f",null);e.default=n.exports},URzj:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{currentTab:{type:Number}},data:function(){return{isIOS:""}},onLoad:function(){this.isIOS=wx.getSystemInfoSync().system.indexOf("iOS")>=0},methods:{pickMarketType:function(t){this.$emit("pickType",t)}}}},UkSz:function(t,e){},WghI:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("dIDv"),i=a.n(s),r=a("6CEg"),n=a("ybqe")(i.a,r.a,function(t){a("sEfl")},"data-v-51c0e8d3",null);e.default=n.exports},"ZGe+":function(t,e){},dIDv:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return t&&t.__esModule?t:{default:t}}(a("33ci")),i=a("niax"),r=getApp();e.default={props:{mlist:{type:Array},tapIndex:{type:Number}},data:function(){return{swiperPoint:"0",operateIndex:-1}},methods:{jumpToDetail:function(t){if(this.operateIndex>=0)this.operateIndex=-1;else{var e={};if(t&&t.currentTarget&&t.currentTarget.dataset&&(e=t.currentTarget.dataset),e.market&&e.scode){this.tapIndex=e.index||-1;var a=["market="+e.market,"scode="+e.scode,"preload=1"];if("1"===e.isindex)var n="/pages/quote/quote_zs?"+a.join("&");else s.default.queryStockInfo(e.scode,e.market),s.default.queryPrimary(e.scode,e.market),n="/pages/quote/quote?"+a.join("&");i.Request.reportData({sop:"xcx_stock_detail_from_"+e.from,market:e.market,scode:e.scode}),i.Request.reportMTAData({eventName:"xcx_stock_detail_from_"+e.from,market:e.market,scode:e.scode}),r.navigateTo({url:n,fail:function(t){console.log(t)}})}else console.log("跳转缺少market、scode")}},swiperChange:function(t){var e=t.mp.detail.current;this.swiperPoint=e}}}},dPPG:function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-kch-rank-zxg"},[a("div",{staticClass:"investClass header",attrs:{eventid:"0"},on:{click:function(e){e.stopPropagation(),t.gotoClass()}}},[a("span",{staticClass:"investAbout"},[t._v("关于科创板")]),t._v(" "),a("span",{staticClass:"quickKnow"},[t._v("\n      快速了解\n      "),a("i",{staticClass:"icon icon-arrow"})],1)]),t._v(" "),a("div",{staticClass:"seperatingLayer"}),t._v(" "),t._m(0),t._v(" "),a("ul",{staticClass:"tabOfrank"},[a("li",{class:["tab",1===t.rank?"cur-tab":""],attrs:{eventid:"1"},on:{click:function(e){e.stopPropagation(),t.switchRankData(1)}}},[t._v("涨幅榜")]),t._v(" "),a("li",{class:["tab",2===t.rank?"cur-tab":""],attrs:{eventid:"2"},on:{click:function(e){e.stopPropagation(),t.switchRankData(2)}}},[t._v("跌幅榜")]),t._v(" "),a("li",{class:["tab",3===t.rank?"cur-tab":""],attrs:{eventid:"3"},on:{click:function(e){e.stopPropagation(),t.switchRankData(3)}}},[t._v("换手榜")]),t._v(" "),a("li",{class:["tab",13===t.rank?"cur-tab":""],attrs:{eventid:"4"},on:{click:function(e){e.stopPropagation(),t.switchRankData(13)}}},[t._v("涨速榜")]),t._v(" "),a("li",{class:["tab",11===t.rank?"cur-tab":""],attrs:{eventid:"5"},on:{click:function(e){e.stopPropagation(),t.switchRankData(11)}}},[t._v("量比榜")])],1),t._v(" "),a("ul",{staticClass:"caption"},[a("li",[t._v("股票名称")]),t._v(" "),a("li",[t._v("最新价")]),t._v(" "),a("li",[t._v(t._s(t.rankName))])],1),t._v(" "),a("div",{staticClass:"list-table"},t._l(t.stockList,function(e,s){return a("ul",{key:s,staticClass:"list",attrs:{eventid:"6_"+s},on:{click:function(a){a.stopPropagation(),t.gotoHq(e)}}},[a("li",{staticClass:"identifier"},[a("div",{staticClass:"identifier-name-wrapper"},[a("div",{staticClass:"market-icon market-icon-stock"},[t._v("科")]),t._v(" "),a("div",{staticClass:"identifier-name"},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"identifier-code"},[t._v(t._s(e.code))])]),t._v(" "),a("li",{class:"zdf"===t.dataItem?"":0==e.zd?"gray":e.zd>0?"red":"green"},[t._v(t._s(e.zxj))]),t._v(" "),a("li",{class:"zdf"===t.dataItem?0==e.zdf?"gray":e.zdf>0?"red":"green":""},[t._v("\n        "+t._s("zdf"===t.dataItem?e.zdf>0?"+"+e.zdf:e.zdf:e[t.dataItem])+"\n        "+t._s(11!==t.rank?"%":"")+"\n      ")])],1)})),t._v(" "),a("div",{staticClass:"seperatingLayer"}),t._v(" "),t._m(1),t._v(" "),a("ul",{staticClass:"caption fund-caption"},[a("li",[t._v("基金名称")]),t._v(" "),a("li",[t._v("最新净值")]),t._v(" "),a("li",[t._v("日涨幅")])],1),t._v(" "),a("div",{staticClass:"list-table"},t._l(t.fundList,function(e,s){return a("ul",{key:s,staticClass:"list"},[a("li",{staticClass:"identifier"},[a("div",{staticClass:"identifier-name-wrapper"},[a("div",{staticClass:"market-icon market-icon-fund"},[t._v("基")]),t._v(" "),a("div",{staticClass:"identifier-name",style:{fontSize:e.fontSize}},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"identifier-code"},[t._v(t._s(e.code))])]),t._v(" "),a("li",[a("div",[t._v(t._s(e.fund_value))])]),t._v(" "),a("li",{class:0==e.zdf?"gray":e.zdf>0?"red":"green"},[t._v(t._s(e.zdf>0?"+"+e.zdf:e.zdf)+"%")])],1)}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"investClass"},[e("span",{staticClass:"investAbout"},[this._v("热门榜单")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"investClass"},[e("span",{staticClass:"investAbout"},[this._v("科创板基金")])])}]};e.a=s},ec6Y:function(t,e,a){var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"site-popup",class:this.visible?"show":""},[e("div",{staticClass:"site-popup-item"},[e("div",{staticClass:"close",attrs:{eventid:"0"},on:{click:this.onClose}}),this._v(" "),e("image",{attrs:{src:this.image1}},[e("button",{staticClass:"btn-express",attrs:{"open-type":"contact"}})],1)])])},staticRenderFns:[]};e.a=s},"f+am":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("niax"),i=getApp();e.default={props:{currentMarketStrategy:{type:String},strategyNewUser:{type:Boolean},showFixed:{type:Boolean},currentTabName:{type:String}},methods:{jumpToSearch:function(t){i.navigateTo({url:"/pages/additional/search/main",fail:function(t){console.log(t)}}),s.Request.reportData("xcx_zixuan_search"),s.Request.reportMTAData({eventName:"xcx_zixuan_search"})},pickMarketStrategy:function(t){this.$emit("pickMarket",t)}}}},hPW0:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("0VX0"),i=a.n(s),r=a("sZhX"),n=a("ybqe")(i.a,r.a,function(t){a("ZGe+")},"data-v-711771d6",null);e.default=n.exports},jmFx:function(t,e){},kkOe:function(t,e){},lIiW:function(t,e,a){var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"fixed-nav top-switcher black-top-switcher "},[e("view",{staticClass:"search-header"},[e("view",{staticClass:"box-search flex flex-align-center"},[e("view",{staticClass:"row-sear"},[e("input",{staticClass:"block row-sear-input",attrs:{type:"text","placeholder-class":"placeholder-center",placeholder:"请输入股票代码 / 名称 / 首字母",disabled:"","placeholder-style":"color: '#676d79'",eventid:"0"},on:{click:this.jumpToSearch}}),this._v(" "),e("label",{staticClass:"search-icon"})],1)])])])},staticRenderFns:[]};e.a=s},nuUB:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("URzj"),i=a.n(s),r=a("u6Vr"),n=a("ybqe")(i.a,r.a,function(t){a("w5NW")},"data-v-26186e7d",null);e.default=n.exports},oNqh:function(t,e,a){function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(a("mvHQ")),r=s(a("GCNU")),n=s(a("nuUB")),c=s(a("AyLh")),o=s(a("hPW0")),l=s(a("WghI")),u=s(a("6vT6")),d=s(a("M3ss")),p=a("niax"),v=a("y5FK"),k=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(a("Dk3b")),f=s(a("yskm")),m=s(a("33ci")),h=a("vD0l"),_=a("pMz2"),g=a("EUYj"),w=getApp(),y=!0,b=_.stockRankConfig,x="",C=void 0,S=w.rpxToPx(30),T=w.device.windowWidth,M=void 0,I={HS:["上证指数","深证成指","创业板指","中小板指","沪深300","中证500"],HK:["恒生指数","国企成指","红筹板指"],US:["道琼斯","纳斯达克","标普500"]},D={HS:b.HS,HK:b.HK,US:b.US},H=["lbl-sz-market","lbl-sh-market","lbl-hk-market","lbl-us-market"],q=["HS","KCH","HK","US"],R=function(t){return D[t]},P=function(t){return q[t]},L=["market-a","board-kch","market-hk","market-us"],j=(T-2*S)/L.length,z=!0,N=!0,F=void 0;e.default={data:function(){return{popupType:1,popupVisible:!1,nextPopupState:null,mlist:[],hkMlist:[],usMlist:[],slist:[],rankIndex:0,hkrankIndex:0,usrankIndex:0,marketType:"HS",industry:[],concept:[],marketStock:[],rankList:b.HS,hkrankList:b.HK,usrankList:b.US,showFixed:!1,swiperHeight:w.device.windowHeight,currentTab:0,listLength:5,headLineLeft:S,headLineWidth:j,tapIndex:-1,topCustom:[],topSystem:[],categories:[],hotStrategies:[],systemStrategies:[],swiperHotStrategyHeight:"",swiperPickTabHeight:0,currentMarketStrategy:0,currentDotTab:0,currentStrategyTab:0,tabIndex:0,dataLoaded:!1,isHideStrategy:!0,strategyNewUser:!1,diversionPopupVisible:!1,diversionIconVisible:!1,HSList:[],HKList:[],stockFont:[],USList:[],usstockFont:[],trimMarket:[],currentTabIndex:0,state:{moveDirectScode:"",originMList:[],originSList:[],isRefresh:!1,swipeTouch:null},cusProfit:0,brief:"",hotValue:[],skin:wx.getStorageSync("user/skin")||"white",disLeft:0}},components:{strategyTabbar:r.default,marketTabbar:n.default,kchRank:c.default,hotBlock:o.default,zhishuSwiper:l.default,newsStock:f.default,popup:u.default,diversionPopup:d.default},onLoad:function(t){var e=this;wx.setNavigationBarTitle({title:"zxg"===w.APPNAME?"腾讯自选股":"腾讯微证券"}),w.setSkin(function(t){e.skin=t}),this.updateTimeStr(),this.queryMarketData("HS"),this.queryMarketData("HK"),this.queryMarketData("US"),z=w.throttle(300,function(t){e.mlist=t.mlist,e.hkMlist=t.hkMlist,e.usMlist=t.usMlist}),N=!0,this.isIOS=wx.getSystemInfoSync().system.indexOf("iOS")>=0,t.tabid&&(this.currentTabIndex=t.tabid,this.currentTab=t.tabid,this.rankIndex=0),e.manageStrategy(),e.queryStrategyData(0),e.checkIsStrategyNew()},onPullDownRefresh:function(){if(1==this.currentTab)return this.$refs.kchRank.getData(),void wx.stopPullDownRefresh();this.state.isRefresh=!0,this.queryMarketData(P(this.currentTab)),this.queryStrategyData(this.tabIndex,this.currentStrategyTab),wx.stopPullDownRefresh(),1==+this.currentMarketStrategy&&(0,v.reportEyes)(k.INDEX_PULLDOWNREFRESH)},onReachBottom:function(){if(1!=this.currentTab){var t=this.listLength;t>50||(this.listLength=t+20,this.refreshSwiperHeigth())}},onPageScroll:function(t){var e=this.showFixed;e&&t.scrollTop<33&&(this.showFixed=!1,this.operateIndex=-1),!e&&t.scrollTop>=33&&(this.showFixed=!0,this.operateIndex=-1)},onShow:function(){var t=this;this.initWebSocket(),p.Request.reportData("xcx_markettab_click"),p.Request.reportMTAData({eventName:"xcx_markettab_click"}),this.updateTimeStr(),1==this.currentTab?this.$refs.kchRank.startGetData():this.startTimer(),this.startStrategyTimer(),this.queryStrategyData(this.tabIndex,this.currentStrategyTab),w.setSkin(function(e){t.skin=e}),g.get(!0,function(e){t.diversionIconVisible="1"!==e.subscribe})},onHide:function(){var t=this;h.unsubscirbe(),1==this.currentTab?this.$refs.kchRank.stopGetData():clearTimeout(C),clearTimeout(F),clearTimeout(M),this.operateIndex=-1,this.popupVisible=!1,setTimeout(function(){t.tapIndex=-1},500)},onUnload:function(){h.unsubscirbe(),clearTimeout(C),clearTimeout(F)},onShareAppMessage:function(){return{title:"你能用微信盯盘啦！",path:"/pages/index/index"}},methods:{marketClass:function(t,e){for(var a=0;a<t.length;a++)e?this.stockFont.push(""):(t[a].name||"").length>=8?this.stockFont.push("font_26"):this.stockFont.push("")},usmarketClass:function(t,e){this.usstockFont=[],this.trimMarket=[];for(var a=0;a<t.length;a++){e?this.usstockFont.push(""):(t[a].name||"").length>=8?this.usstockFont.push("font_26"):this.usstockFont.push("");var s=t[a].code.indexOf(".");this.trimMarket.push(s>=0?t[a].code.substring(0,s):t[a].code)}},signpriceFixed:function(t){return(t=(t=+t).toFixed(2))>=0?"+"+t:t},priceFixed:function(t){return(t=+t).toFixed(2)},onPopupTap:function(){wx.navigateTo({url:"/pages/action/180823mpflow/index?from=index"}),this.nextPopupState&&wx.setStorageSync("180823mpflow",this.nextPopupState),this.popupVisible=!1},onPopupClose:function(){this.nextPopupState&&wx.setStorageSync("180823mpflow",this.nextPopupState),this.popupVisible=!1},queryMarketData:function(t){if(y&&t){var e=R(t),a=this.rankIndex;"HK"===t&&(a=this.hkrankIndex),"US"===t&&(a=this.usrankIndex);var s=e[a]?e[a].rank:null,i=this,r="0";s&&("HK"!==t&&"US"!==t||(r=s.substr(0,1),s=s.substr(1)),w.wx.request({url:w.CGI_PREFIX+"stockquotation.fcgi",data:{action:"0",market:t,boardtype:r,limit:50,rank:s},success:function(e){var a;if("HS"===t){var s=+e.hold_num+ +e.fall_num+ +e.raise_num;a={hsindustry:e.industry,hsconcept:e.concept,holdNum:e.hold_num||0,fallNum:e.fall_num||0,raiseNum:e.raise_num||0,fallPercent:Math.ceil(53*e.fall_num/s)+14,raisePercent:Math.ceil(53*e.raise_num/s)+14,stablePercent:Math.ceil(53*e.hold_num/s)+10,hsmarketStock:i.handleMarketStock(e.stock,t),mlist:i.sortMarketList(i.handleData(e.mlist),"HS")};for(var r=0;r<a.mlist.length;r++){var n=a.mlist[r].rise_per.replace("%",""),c=a.mlist[r].price+"";c=c.replace(",",""),a.mlist[r].rise_per=n,a.mlist[r].price=c}i.mlist=a.mlist,i.HSList=a}if("HK"===t){a={hkindustry:e.industry,hkmarketStock:i.handleMarketStock(e.stock,t),hkMlist:i.sortMarketList(i.handleData(e.mlist),"HK")};for(var o=0;o<a.hkMlist.length;o++){var l=a.hkMlist[o].rise_per.replace("%",""),u=a.hkMlist[o].price+"";u=u.replace(",",""),a.hkMlist[o].rise_per=l,a.hkMlist[o].price=u}i.hkMlist=a.hkMlist,i.HKList=a,i.stockFont=[],i.marketClass(a.hkmarketStock)}if("US"===t){a={usindustry:e.industry,usetf:e.etf,usmarketStock:i.handleMarketStock(e.stock,t),usMlist:i.sortMarketList(i.handleData(e.mlist),"US")};for(var d=0;d<a.usMlist.length;d++){var p=a.usMlist[d].rise_per.replace("%",""),v=a.usMlist[d].price+"";v=v.replace(",",""),a.usMlist[d].rise_per=p,a.usMlist[d].price=v}i.usMlist=a.usMlist,i.USList=a,i.usstockFont=[],i.usmarketClass(a.usmarketStock)}N&&(i.setSwiperHeight(),N=!1),i.stopRefresh(),i.startTimer()}}))}},queryStrategyData:function(t,e){var a=this;w.wx.request({url:w.CGI_PREFIX+"stockpicking_plat.fcgi?action=get-strategy-summary-data",data:{reqdata:(0,i.default)({category:e||"",showNews:!0})},success:function(t){var e="";if((t=t.data)&&t.systemStrategies&&t.systemStrategies.length>0){for(var s=0;s<t.systemStrategies.length;s++){var i=t.systemStrategies[s].brief_name.split("/");2===i.length&&(i[0]+="/"),t.systemStrategies[s].brief_name=i,"2"===t.systemStrategies[s].brief_type?t.systemStrategies[s].brief_value=a.priceFixed(t.systemStrategies[s].brief_value):t.systemStrategies[s].brief_value=a.signpriceFixed(t.systemStrategies[s].brief_value);for(var r=0;r<t.systemStrategies[s].stocks.length;r++)t.systemStrategies[s].stocks[r].price_change_percent=a.signpriceFixed(t.systemStrategies[s].stocks[r].price_change_percent)}for(var n=0;n<t.hotStrategies.length;n++)e=t.hotStrategies[n].brief_name,a.hotValue.push(a.signpriceFixed(t.hotStrategies[n].brief_value)),2===(i=e.split("/")).length?(i[0]+="/",t.hotStrategies[n].brief_name=i[1]):t.hotStrategies[n].brief_name=i}if(t.topSystem){var c=t.topSystem.brief_name.split("/");2===c.length&&(t.topSystem.brief_name=c[1])}a.topCustom=t.topCustom?t.topCustom:[],a.cusProfit=a.signpriceFixed(a.topCustom.profit),a.topSystem=t.topSystem?t.topSystem:[],a.brief="2"===a.topSystem.brief_type?a.priceFixed(a.topSystem.brief_value):a.signpriceFixed(a.topSystem.brief_value),a.categories=t.categories?t.categories:[],a.hotStrategies=t.hotStrategies?t.hotStrategies:[],a.systemStrategies=t&&t.systemStrategies?t.systemStrategies:[],a.newsHotStocks=t.newsHotStocks?t.newsHotStocks.map(function(t){return t.positive_rate=t.positive_rate.toFixed(2),t}):[],a.dataLoaded=!0,a.setSwipeHeightPickTab(),a.setSwipeHeightrHotStrategy(),a.startStrategyTimer()}})},updateTimeStr:function(){var t=new Date,e=t.getHours(),a=t.getMinutes();x=(e>9?e:"0"+e)+""+(a>9?a:"0"+a)},pickMarketStrategy:function(t){var e=this,a=1==+t.currentTarget.dataset.tab?"4":"0";this.currentMarketStrategy=t.currentTarget.dataset.tab,this.currentTabIndex=a,1==+this.currentMarketStrategy&&(p.Request.reportData("strategy.index.click_top_tab"),p.Request.reportMTAData({eventName:"strategy.index.click_top_tab"}),(0,v.reportEyes)(k.INDEX_SHOW),wx.setStorage({key:"hq.strategy.not.newTab",data:!0,success:function(){e.strategyNewUser=!1}})),this.refreshSwiperHeigth()},pickMarketType:function(t){var e=t.currentTarget.dataset.tabindex;p.Request.reportData("xcx_market_"+q[e]+"tab_click"),p.Request.reportMTAData({eventName:"xcx_market_"+q[e]+"tab_click"}),this.currentTabIndex=e,this.currentTab=e,this.rankIndex=0,this.hkrankIndex=0,this.usrankIndex=0},handleMarketStock:function(t,e){if("HS"===e)var a=this.rankIndex;else"HK"===e?a=this.hkrankIndex:"US"===e&&(a=this.usrankIndex);var s=R(e)[a];return t&&t.map(function(t){return t.iconClass=H[t.market],t.priceClass=t.zdf<0?"drop":"rise",t.zdf=t.zdf+"%","zdf"===s.column?(t.columnClass=t.priceClass,t.priceClass=""):t.columnClass="gray",t.zs=t.zs+"%",t.hsl=t.hsl+"%",t.cjje=_.formatMoney(t.cjje),t})||[]},sortMarketList:function(t,e){return I[e].map(function(e){for(var a=0;a<t.length;a++)if(e===t[a].name)return t[a]})},handleData:function(t,e){var a=[];return e=!1!==e||e,w.util.each(t,function(t,e){switch(t.name=t.name||t.n||"",0===t.rise?t.riseClass="peace":t.rise>0?t.riseClass="rise":t.riseClass="drop",t.rise_per=t.rise_per||t.zdf+"%",t.cls){case"9":case"I":case"i":t.isIndex=1,t.price=t.price}t.rise=t.rise||t.zde,t.hkrise=t.rise?(+t.rise).toFixed(3):"",a.push(t)}),a},setSwiperHeight:function(){var t=this,e=w.device.windowHeight-this.fixBarHeight();clearTimeout(M),M=setTimeout(function(){wx.createSelectorQuery().select("#"+L[t.currentTab]).boundingClientRect().exec(function(a){a[0]&&(t.swiperHeight=a[0].height>e?a[0].height:e)})},100)},setSwipeHeightrHotStrategy:function(){var t=this;clearTimeout(e);var e=setTimeout(function(){wx.createSelectorQuery().select("#hot-strategy-swiper").boundingClientRect().exec(function(e){var a=e[0]?e[0].height:"128";t.swiperHotStrategyHeight=a})},500)},fixBarHeight:function(){return this.isHideStrategy?w.rpxToPx(138):w.rpxToPx(168)},startTimer:function(){var t=this.currentTab;(x<="1610"&&x>="0900"&&2===t||x<="1510"&&x>="0900"&&0===t||(x>="2130"&&x<"2360"||x>="0000"&&x<="0500")&&3===t)&&(clearTimeout(C),C=setTimeout(this.queryMarketData.bind(this,P(this.currentTab)),1e4))},startStrategyTimer:function(){1===this.currentMarketStrategy&&(clearTimeout(F),F=setTimeout(this.queryStrategyData.bind(this,this.tabIndex,this.currentStrategyTab),1e4))},stopRefresh:function(){wx.stopPullDownRefresh()},manageStrategy:function(){this.isHideStrategy=!1},checkIsStrategyNew:function(){var t=this;wx.getStorage({key:"hq.strategy.not.newTab",fail:function(){t.strategyNewUser=!0}})},pickRank:function(t){var e=t.currentTarget.dataset.index,a=t.currentTarget.dataset.market;"HS"===a?this.rankIndex=e:"HK"===a?this.hkrankIndex=e:"US"===a&&(this.usrankIndex=e),this.queryStockRank()},queryStockRank:function(){var t=this,e="0",a=this.currentTab,s=P(a),i=R(s),r=this.rankIndex;"HK"===s&&(r=this.hkrankIndex),"US"===s&&(r=this.usrankIndex);var n=i[r].rank;n+="","HK"!==s&&"US"!==s||(e=n.substr(0,1),n=n.substr(1)),w.wx.request({url:w.CGI_PREFIX+"stockquotation.fcgi",data:{action:"3",rank:n,limit:50,market:s,boardtype:e},success:function(e){"HK"===s?(t.HKList.hkmarketStock=t.handleMarketStock(e.stock,s),t.stockFont=[],t.marketClass(t.HKList.hkmarketStock)):"HS"===s?t.HSList.hsmarketStock=t.handleMarketStock(e.stock,s):"US"===s&&(t.USList.usmarketStock=t.handleMarketStock(e.stock,s),t.usstockFont=[],t.usmarketClass(t.USList.usmarketStock))}})},jumpToDetail:function(t){if(this.operateIndex>=0)this.operateIndex=-1;else{var e={};if(t&&t.currentTarget&&t.currentTarget.dataset&&(e=t.currentTarget.dataset),e.market&&e.scode){this.tapIndex=e.index||-1;var a=["market="+e.market,"scode="+e.scode,"preload=1"];if("1"===e.isindex)var s="/pages/quote/quote_zs?"+a.join("&");else m.default.queryStockInfo(e.scode,e.market),m.default.queryPrimary(e.scode,e.market),s="/pages/quote/quote?"+a.join("&");p.Request.reportData({sop:"xcx_stock_detail_from_"+e.from,market:e.market,scode:e.scode}),p.Request.reportMTAData({eventName:"xcx_stock_detail_from_"+e.from,market:e.market,scode:e.scode}),w.navigateTo({url:s,fail:function(t){console.log(t)}})}else console.log("跳转缺少market、scode")}},refreshSwiperHeigth:function(){this.setSwiperHeight(),this.setSwipeHeightPickTab()},setSwipeHeightPickTab:function(){var t=this,e=0;clearTimeout(a);var a=setTimeout(function(){wx.createSelectorQuery().select("#js_strategy-home-wrap").boundingClientRect().exec(function(a){a[0]&&(e=a[0].height),t.swiperPickTabHeight=e})},500)},bindchange:function(t){var e=t.mp.detail.current,a=w.device.windowHeight-this.fixBarHeight();y=!1,clearTimeout(M),this.currentMarketStrategy=4===e?1:0,this.setSwipeHeightPickTab(),this.currentTab=e,this.swiperHeight=a},bindanimationfinish:function(t){if(!y){var e=this;y=!0,this.operateIndex=-1,this.rankIndex=0,this.listLength=5,this.setSwiperHeight(!0),clearTimeout(C),1==this.currentTab?this.$refs.kchRank.startGetData():(this.$refs.kchRank.stopGetData(),C=setTimeout(function(){e.queryMarketData(P(e.currentTab))},1e4))}},viewPlateDetail:function(t){var e=t.mp.currentTarget.dataset,a=["plate="+e.plate,"code="+e.code];w.navigateTo({url:"/pages/hq/detail/main?"+a.join("&")})},initWebSocket:function(){var t;t={url:"wss://wzq.tenpay.com/wss/hq",data:{type:"subscribe",subscribe_type:"1",scode:["0399001","0399005","0399006","0399905","1000001","1000300","2HSI","2HSCEI","2HSCCI","3DJI","3INX","3IXIC"].join(",")},message:this.messageCallback.bind(this),close:function(t){var e=parseInt(t.code,10);switch(e){case"4001":w.showError("重新登录",e);break;default:w.showError("WS异常["+e+"]",e)}}},h.init(t)},messageCallback:function(t){if(y){var e=this.mlist||[],a=this.hkMlist||[],s=this.usMlist||[];switch(parseInt(t.retcode,10)){case 0:var i=this.filterWSMessage(t);if(!i||!i.scode||""===i.type)return;if(!e.length||!a.length||!s.length)return;w.util.each(e,function(t,a){(t.scode||t.c)===i.scode&&(t.type||t.m)===i.type&&(e[a]=w.util.extend(e[a],i))}),w.util.each(a,function(t,e){(t.scode||t.c)===i.scode&&(t.type||t.m)===i.type&&(a[e]=w.util.extend(a[e],i))}),w.util.each(s,function(t,e){(t.scode||t.c)===i.scode&&(t.type||t.m)===i.type&&(s[e]=w.util.extend(s[e],i))}),z({mlist:e,hkMlist:a,usMlist:s});break;default:t.retmsg&&w.showTips(t.retmsg)}}},filterWSMessage:function(t){var e=t.secu_info,a=t.secu_quote;if(e&&a){var s={name:e.secu_name||"",scode:e.secu_code,type:e.market,price:a.dqj,rise:a.zde,rise_per:a.zdf,susp_flag:e.susp_flag||"0",status:e.secu_status||"0"};return 0===a.zde?s.riseClass="peace":a.zde>0?s.riseClass="rise":s.riseClass="drop",s}},moreStrategy:function(t){var e=t.currentTarget.dataset.tab||"custom";this.topCustom&&this.topCustom.name&&this.topSystem&&this.topSystem.name&&(p.Request.reportData("strategy.index.custom.create.tap"),p.Request.reportMTAData({eventName:"strategy.index.custom.create.tap"})),"custom"===e?(p.Request.reportData("strategy.index.click_custom"),p.Request.reportMTAData({eventName:"strategy.index.click_custom"})):(p.Request.reportData("strategy.index.click_system"),p.Request.reportMTAData({eventName:"strategy.index.click_system"})),w.navigateTo({url:"/pages/strategy/pages/user/main?tab="+e})},bindchangeDotTab:function(t){var e=t.mp.detail.current;p.Request.reportData("strategy.index.hot.system.swipe"),p.Request.reportMTAData({eventName:"strategy.index.hot.system.swipe"}),this.currentDotTab=e},systemStrategyItem:function(t){var e=t.currentTarget.dataset.id,a=t.target.dataset.region,s=t.currentTarget.type;"stock"!==a&&("strategy-hot"===s?(p.Request.reportData("strategy.index.hot."+e),p.Request.reportMTAData({eventName:"strategy.index.hot."+e})):"strategy-list"===s&&(p.Request.reportData("strategy.index.strategy."+e+".tap"),p.Request.reportMTAData({eventName:"strategy.index.strategy."+e+".tap"})),w.navigateTo({url:"/pages/strategy/pages/systemDetail/main?id="+e}))},strategyTabItem:function(t){var e=t.currentTarget.dataset.index,a=t.currentTarget.dataset.type;this.currentStrategyTab=a,this.tabIndex=e,(0,v.reportEyes)(k.INDEX_CATEGORY_SWITCH,{category:a}),p.Request.reportData("strategy.index.cateogry."+a+".tap"),p.Request.reportMTAData({eventName:"strategy.index.cateogry."+a+".tap"}),this.queryStrategyData(e,a)},onDiversionPopupTap:function(){this.diversionPopupVisible=!0,this.diversionIconVisible=!1},onDiversionPopupClose:function(){this.diversionPopupVisible=!1,this.diversionIconVisible=!0},scrollNav:function(t){var e=wx.getSystemInfoSync().windowWidth,a=this.hkrankList.length,s=t.mp.target.dataset.index;this.disLeft=(s-2)*e/a+100}}}},pMz2:function(t,e,a){var s=a("eyXq"),i=function(t){return t=(t-=0)>999999.99&&t<1e8?s.toCurrency(t/1e4)+"万":t>1e8?s.toCurrency(t/1e8)+"亿":s.toCurrency(t)};t.exports={stockRankConfig:{HS:[{name:"涨幅榜",rank:"1",title:"涨幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"跌幅榜",rank:"2",title:"跌幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"换手榜",rank:"3",title:"换手率",columnType:"2",column:"hsl",pe:"%",format:""},{name:"涨速榜",rank:"13",title:"5分钟涨速",columnType:"2",column:"zs",pe:"%",format:""},{name:"量比榜",rank:"11",title:"量比",columnType:"2",column:"lb",pe:"",format:""}],HK:[{name:"主板涨幅榜",rank:"11",title:"涨幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"主板跌幅榜",rank:"12",title:"跌幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"主板成交额榜",rank:"15",title:"成交额",columnType:"2",column:"cjje",pe:"",format:i},{name:"创业板涨幅榜",rank:"21",title:"涨幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"创业板跌幅榜",rank:"22",title:"跌幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"创业板成交额榜",rank:"25",title:"成交额",columnType:"2",column:"cjje",pe:"",format:i}],US:[{name:"中概股",rank:"51",title:"涨幅",columnType:"1",column:"zdf",pe:"%",format:""},{name:"美股科技股",rank:"71",title:"涨幅",columnType:"1",column:"zdf",pe:"%",format:""}]},formatMoney:i}},rCsg:function(t,e){},rL13:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return t&&t.__esModule?t:{default:t}}(a("BO1k")),i=getApp();e.default={data:function(){return{timer:null,rank:1,rankName:"涨幅",dataItem:"zdf",allStockList:[],stockList:[],fundList:[]}},mounted:function(){this.getData()},destroyed:function(){this.stopGetData()},methods:{startGetData:function(){var t=this;this.getData(),this.timer=setInterval(function(){t.getData()},5e3)},stopGetData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},getData:function(){var t=this;i.wx.request({url:i.CGI_PREFIX+"openapi_zxgplat.fcgi?action=getKshRankIndex",success:function(e){t.formatData(e.data),t.allStockList=e.data.ksh_rank_list;var a=e.data.fund_rank_list;t.fundList=a["KSH/priceRatio/down"].slice(0,10),t.switchRankData(t.rank)}})},formatData:function(t){for(var e in t.ksh_rank_list){var a=!0,i=!1,r=void 0;try{for(var n,c=(0,s.default)(t.ksh_rank_list[e]);!(a=(n=c.next()).done);a=!0){var o=n.value;o.code=o.code.slice(2)}}catch(t){i=!0,r=t}finally{try{!a&&c.return&&c.return()}finally{if(i)throw r}}}for(var l in t.fund_rank_list){var u=!0,d=!1,p=void 0;try{for(var v,k=(0,s.default)(t.fund_rank_list[l]);!(u=(v=k.next()).done);u=!0){var f=v.value;f.code=f.code.slice(2),f.name=f.name.slice(0,14),f.fontSize=this.getFontSize(f.name)}}catch(t){d=!0,p=t}finally{try{!u&&k.return&&k.return()}finally{if(d)throw p}}}},switchRankData:function(t){switch(this.rank=t,this.rank){case 1:this.rankName="涨幅",this.dataItem="zdf",this.stockList=this.allStockList["ksh/priceRatio/down"];break;case 2:this.rankName="跌幅",this.dataItem="zdf",this.stockList=this.allStockList["ksh/priceRatio/up"];break;case 3:this.rankName="换手率",this.dataItem="hsl",this.stockList=this.allStockList["ksh/exchange/down"];break;case 13:this.rankName="5分钟涨速",this.dataItem="speed",this.stockList=this.allStockList["ksh/speed/down"];break;case 11:this.rankName="量比",this.dataItem="lb",this.stockList=this.allStockList["ksh/volumeRatio/down"]}},getFontSize:function(t){return t.length<=10?"0.8rem":t.length<=14?.8-.06*(t.length-10)+"rem":"0.56rem"},gotoHq:function(t){wx.navigateTo({url:"/pages/quote/quote?market=1&scode="+t.code})},gotoClass:function(){wx.navigateTo({url:"/pages/additional/webview/index?url="+encodeURIComponent("https://wzq.tenpay.com/mp/v2/index.html#/kch/popularization")})}}}},sCNC:function(t,e){},sEfl:function(t,e){},sZhX:function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("view",{staticClass:"hot-blocks-title flex flex-align-center flex-pack-justify",attrs:{"data-plate":t.plate,eventid:"0"},on:{click:t.viewPlate}},[a("label",{staticClass:"block"},[t._v(t._s(t.title))]),t._v(" "),a("label",{staticClass:"block icon-arrow",attrs:{href:"javascript:;"}})],1),t._v(" "),a("view",{staticClass:"hot-blocks-group flex"},t._l(t.hsindustry,function(e,s){return a("view",{key:s,staticClass:"hot-blocks-item",attrs:{"data-code":e.code,"data-plate":t.plate,eventid:"1_"+s},on:{click:t.viewPlateDetail}},[a("view",{staticClass:"blocks-name ellipsis-text"},[t._v(t._s(e.name))]),t._v(" "),a("view",{staticClass:"blocks-percent",class:e.zdf>0?"red":e.zdf<0?"green":"gray"},[t._v(t._s(e.zdf)+"%")]),t._v(" "),a("view",{staticClass:"stock-name"},[t._v(t._s(e.fn))]),t._v(" "),a("view",{staticClass:"stock-price"},[a("label",{staticClass:"stock-percent-left"},[t._v(t._s(e.fzjcj))]),t._v(" "),a("label",{staticClass:"stock-percent-right"},[t._v(t._s(e.fzdf)+"%")])],1)])}))])},staticRenderFns:[]};e.a=s},stnp:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{image1:"https://wzq.gtimg.com/weixin/action/180823mpflow/img/mp/180823mpflow-1.png",closed:!1}},props:{visible:{type:Boolean}},methods:{onTap:function(){this.$emit("open")},onClose:function(){this.$emit("close")}}}},u6Vr:function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"switch-nav-line flex flex-pack-justify btmline-gray",class:t.isIOS?"fix-tab-bar":""},[a("label",{staticClass:"flex-1",class:0==t.currentTab?"cur-tab":"",attrs:{"data-type":"HS","data-tabindex":"0",eventid:"0"},on:{click:t.pickMarketType}},[t._v("沪深")]),t._v(" "),a("label",{staticClass:"flex-1",class:1==t.currentTab?"cur-tab":"",attrs:{"data-type":"kch","data-tabindex":"1",eventid:"1"},on:{click:t.pickMarketType}},[t._v("科创板")]),t._v(" "),a("label",{staticClass:"flex-1",class:2==t.currentTab?"cur-tab":"",attrs:{"data-type":"HK","data-tabindex":"2",eventid:"2"},on:{click:t.pickMarketType}},[t._v("港股")]),t._v(" "),a("label",{staticClass:"flex-1",class:3==t.currentTab?"cur-tab":"",attrs:{"data-type":"US","data-tabindex":"3",eventid:"3"},on:{click:t.pickMarketType}},[t._v("美股")])],1)},staticRenderFns:[]};e.a=s},w5NW:function(t,e){},yskm:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("15NF"),i=a.n(s),r=a("G0Dg"),n=a("ybqe")(i.a,r.a,function(t){a("jmFx")},"data-v-79cb29dd",null);e.default=n.exports},zI24:function(t,e,a){function s(t){return t&&t.__esModule?t:{default:t}}var i=s(a("5nAL")),r=s(a("Gpwi")),n=s(a("D4CW"));a("75fD"),i.default.use(n.default),new i.default(r.default).$mount()}},["zI24"]); 
 			}); 	require("pages/index/hq/main.js");
 		__wxRoute = 'pages/index/strategy/main';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/strategy/main.js';	define("pages/index/strategy/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../common/manifest.js"),require("../../../common/vendor.js"),global.webpackJsonpMpvue([22],{PtzQ:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var i=getApp();n.default={data:function(){return{skin:"",url:"https://wzq.tenpay.com/mp/v2/index.html#/strategy/index"}},onLoad:function(e){var n=this;i.setSkin(function(e){n.skin=e})},onShow:function(){var e=this;i.setSkin(function(n){e.skin=n})},onShareAppMessage:function(e){return{title:"智能选股",path:"/pages/index/strategy/main"}},methods:{onWebviewError:function(e){console.log(e)}}}},ZhXP:function(e,n){},cqne:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var i=t("PtzQ"),r=t.n(i),o=t("m1FF"),a=t("ybqe")(r.a,o.a,function(e){t("ZhXP")},"data-v-e3926a5e",null);n.default=a.exports},m1FF:function(e,n,t){var i={render:function(){var e=this.$createElement,n=this._self._c||e;return n("view",{staticClass:"container",class:"black"==this.skin?"skin-black":"skin-white"},[n("web-view",{attrs:{src:this.url,binderror:"onWebviewError",mpcomid:"0"}})],1)},staticRenderFns:[]};n.a=i},yNlQ:function(e,n,t){function i(e){return e&&e.__esModule?e:{default:e}}var r=i(t("5nAL")),o=i(t("cqne")),a=i(t("D4CW"));t("75fD"),r.default.use(a.default),new r.default(o.default).$mount()}},["yNlQ"]); 
 			}); 	require("pages/index/strategy/main.js");
 		__wxRoute = 'pages/index/information/main';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/information/main.js';	define("pages/index/information/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../common/manifest.js"),require("../../../common/vendor.js"),global.webpackJsonpMpvue([2],{"1Uyq":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(s("mvHQ")),i=getApp();e.default={props:{news:{type:Object}},methods:{viewitem:function(){var t=this.news;t.readed=!0,this.saveReadRecord(t),i.navigateTo({url:"/pages/newsCon/newsCon?id="+t.news_id+"&zxtype=8&title="+t.news_title+"&date="+t.time+"&source="+t.media_name})},saveReadRecord:function(t){var e=wx.getStorageSync("imformation_read_record")||"[]",s=t.id||t.news_id;(e=JSON.parse(e)).indexOf(s)<0&&e.push(s),e.length>500&&(e=e.slice(-500)),wx.setStorageSync("imformation_read_record",(0,a.default)(e))}}}},"59YR":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(s("wZHj"));e.default={props:{omList:{type:Array},historyList:{type:Array}},components:{omItem:a.default},methods:{refresh:function(){this.$emit("refreshNews")}}}},"5km6":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{show:{type:Boolean},pullBottomText:{type:String}}}},"5oM6":function(t,e,s){var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"container"},[s("view",{staticClass:"fixed-nav",class:t.showFixed?"":"hide"},[s("view",{staticClass:"wrap-nav shrink-wrap-nav"},[s("view",{staticClass:"lay-nav flex",attrs:{id:"ui-tab-switch"}},[void 0!=t.tabIds.focus?s("label",{staticClass:"nav align-c flex-1",class:"focus"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.focus,eventid:"0"},on:{click:t.switchNav}},[t._v("要闻")]):t._e(),t._v(" "),void 0!=t.tabIds.om?s("label",{staticClass:"nav align-c flex-1",class:"om"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.om,eventid:"1"},on:{click:t.switchNav}},[t._v("爱看")]):t._e(),t._v(" "),void 0!=t.tabIds.current?s("label",{staticClass:"nav align-c flex-1",class:"current"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.current,eventid:"2"},on:{click:t.switchNav}},[t._v("7x24")]):t._e(),t._v(" "),void 0!=t.tabIds.choose?s("label",{staticClass:"nav align-c flex-1",class:"choose"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.choose,eventid:"3"},on:{click:t.switchNav}},[t._v("自选")]):t._e()],1)]),t._v(" "),s("view",{staticClass:"fixed-bar-date",class:t.showFixed&&"current"==t.currentTabName?"":"hide"},[t._v(t._s(t.currentTime||""))])]),t._v(" "),s("view",{staticClass:"auto-adapt scroll-content"},[s("view",{staticClass:"wrap-nav shrink-wrap-nav"},[s("view",{staticClass:"lay-nav flex",attrs:{id:"ui-tab-switch"}},[void 0!=t.tabIds.focus?s("label",{staticClass:"nav align-c flex-1",class:"focus"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.focus,eventid:"4"},on:{click:t.switchNav}},[t._v("要闻")]):t._e(),t._v(" "),void 0!=t.tabIds.om?s("label",{staticClass:"nav align-c flex-1",class:"om"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.om,eventid:"5"},on:{click:t.switchNav}},[t._v("爱看")]):t._e(),t._v(" "),void 0!=t.tabIds.current?s("label",{staticClass:"nav align-c flex-1",class:"current"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.current,eventid:"6"},on:{click:t.switchNav}},[t._v("7x24")]):t._e(),t._v(" "),void 0!=t.tabIds.choose?s("label",{staticClass:"nav align-c flex-1",class:"choose"==t.currentTabName?"nav-cur":"",attrs:{"data-current":t.tabIds.choose,eventid:"7"},on:{click:t.switchNav}},[t._v("自选")]):t._e()],1)]),t._v(" "),s("view",{staticClass:"fixed-bar-date",class:"current"==t.currentTabName?"":"hide"},[t._v(t._s(t.currentTime||""))]),t._v(" "),s("swiper",{staticClass:"cont-wrapper",style:{height:t.swiperHeight+"px"},attrs:{current:t.currentTab,duration:"250",eventid:"16"},on:{change:t.bindchange}},[void 0!=t.tabIds.focus?s("swiper-item",{staticClass:"focus-news ",attrs:{mpcomid:"3"}},[s("view",{attrs:{id:"focus-news"}},[s("swiper",{class:t.importantBanners&&1==t.importantBanners.length?"pull-down":"",staticStyle:{height:"388rpx"},attrs:{duration:"250",current:t.currentBanner,eventid:"9"},on:{animationfinish:t.bindchangebanner}},t._l(t.importantBanners,function(e,a){return s("block",{key:a,attrs:{"scope-data":e.structData}},[s("swiper-item",{attrs:{mpcomid:"0_"+a}},[s("view",{staticClass:"hd-banner",attrs:{"data-index":a,"data-isbanner":"1",eventid:"8_"+a},on:{click:t.viewImportant}},[s("view",{staticClass:"hd-banner-img",style:{"background-image":"url("+e.img+")"}}),t._v(" "),s("view",{staticClass:"hd-banner-title"},[s("label",{staticClass:"hd-banner-label",style:{"background-color":e.label_style[0]}},[t._v(t._s(e.label))]),t._v("\n                                        "+t._s(e.title)+"\n                                    ")],1)])])],1)})),t._v(" "),t.importantBanners&&t.importantBanners.length>1?s("view",{staticClass:"hd-banner-dot-container"},t._l(t.importantBanners,function(e,a){return s("block",{key:a},[s("view",{staticClass:"hd-banner-dot",class:a==t.currentBanner?"selected":""})])})):t._e(),t._v(" "),s("invest-component",{attrs:{investlist:t.tzbd,mpcomid:"1"}}),t._v(" "),s("view",{staticClass:"news-list"},t._l(t.importantList,function(e,a){return s("view",{key:a,staticClass:"li-wrap flex",attrs:{"data-index":a,"scope-data":t.banner&&t.banner.structData,eventid:"10_"+a},on:{click:t.viewImportant}},[s("view",{staticClass:"li-cont flex-1",class:e.readed?"read":""},[s("label",{staticClass:"news-title"},[5==e.type?s("label",{staticClass:"news-type"},[t._v("专题")]):t._e(),t._v("\n                                        "+t._s(e.title)+"\n                                    ")],1),t._v(" "),s("view",{staticClass:"news-related"},[s("view",{staticClass:"news-time"},[e.label?s("label",{staticClass:"news-label",style:{color:e.label_style[0],border:"1rpx solid "+e.label_style[1]}},[t._v(t._s(e.label))]):t._e(),t._v("\n                                            "+t._s(e.time)+"\n                                        ")],1),t._v(" "),s("view",{staticClass:"news-resource"},[t._v(t._s(e.source))])])],1),t._v(" "),s("view",{staticClass:"li-img-box"},[e.img?s("image",{staticClass:"li-img",attrs:{alt:"",src:e.img}}):t._e(),t._v(" "),e.video_time?s("view",{staticClass:"play-icon"},[s("image",{staticClass:"icon",attrs:{src:"https://wzq.gtimg.com/resources/shy/news/yaowen/white/video.png?1"}}),t._v(" "),s("text",{staticClass:"video-time"},[t._v(t._s(e.video_time))])]):t._e()])])})),t._v(" "),s("reach-bottom",{attrs:{show:t.bottomShow,pullBottomText:t.pullBottomText,mpcomid:"2"}})],1)]):t._e(),t._v(" "),void 0!=t.tabIds.om?s("swiper-item",{staticClass:"om-news",attrs:{mpcomid:"6"}},[s("view",{attrs:{id:"om-news"}},[s("view",{staticClass:"update-text",attrs:{animation:t.animationData}},[t._v(t._s(t.omUpdateText))]),t._v(" "),s("view",{staticClass:"update-padding",attrs:{animation:t.paddingAnimationData}}),t._v(" "),s("aikan-component",{attrs:{"om-list":t.omList,"history-list":t.omHistoryList,eventid:"11",mpcomid:"4"},on:{refreshNews:t.queryOmNews}}),t._v(" "),0==t.omList.length&&0==t.omHistoryList.length?s("view",{staticClass:"no-cont align-c"},[s("view",{staticClass:"pic-none bg-nocont om-nocont"}),t._v(" "),s("view",{staticClass:"no-cont-text"},[t._v("页面加载失败，请重试")])]):t._e(),t._v(" "),s("reach-bottom",{attrs:{show:t.bottomShow,pullBottomText:t.pullBottomText,mpcomid:"5"}})],1)]):t._e(),t._v(" "),void 0!=t.tabIds.current?s("swiper-item",{staticClass:"current-day",attrs:{mpcomid:"8"}},[s("view",{attrs:{id:"current-day"}},[s("view",{staticClass:"current-list"},t._l(t.flashList,function(e,a){return s("view",{key:a,staticClass:"li-wrap",attrs:{"data-index":a}},[s("view",{staticClass:"li-date-box"},[s("label",{staticClass:"li-date-circle"}),s("label",{staticClass:"li-date"},[t._v(t._s(e.time))])],1),t._v(" "),s("view",{staticClass:"li-cont"},[s("view",{staticClass:"li-cont-tit"},[t._v(t._s(e.title))]),t._v(" "),s("view",{staticClass:"li-cont-tit-30"},[t._v(t._s(e.content))]),t._v(" "),e.stocks.length?s("view",{staticClass:"stock-item-wrapper"},[s("view",{staticClass:"stock-item-box flex flex-pack-justify"},t._l(e.stocks,function(e,i){return i<2?s("view",{key:i,staticClass:"related-stock-box",class:[e.state?"stop":"",e.zdf>0?"red":e.zdf<0?"green":"stop"],attrs:{"data-index":i,"data-findex":a,eventid:"12_"+a+"-"+i},on:{click:t.openStock}},[s("view",{staticClass:"related-stock"},[s("label",{staticClass:"related-stock-name"},[t._v(t._s(e.n))]),t._v(" "),s("label",[t._v(t._s(e.state?e.state:e.zdf+"%")+" ")]),t._v(" "),e.zdf>0||e.zdf<0?s("label",{class:e.zdf>0?"ico-triangle-rise":e.zdf<0?"ico-triangle-drop":""}):t._e()],1)]):t._e()})),t._v(" "),e.stocks.length>2?s("view",{staticClass:"stock-item-box flex flex-pack-justify"},t._l(e.stocks,function(e,i){return i>1&&i<4?s("view",{key:i,staticClass:"related-stock-box",class:[e.state?"stop":"",e.zdf>0?"red":e.zdf<0?"green":"stop"],attrs:{"data-index":i,"data-findex":a,eventid:"13_"+a+"-"+i},on:{click:t.openStock}},[s("view",{staticClass:"related-stock"},[s("label",{staticClass:"related-stock-name"},[t._v(t._s(e.n))]),t._v(" "),s("label",[t._v(t._s(e.state?e.state:e.zdf+"%"))]),t._v(" "),e.zdf>0||e.zdf<0?s("label",{class:e.zdf>0?"ico-triangle-rise":e.zdf<0?"ico-triangle-drop":""}):t._e()],1)]):t._e()})):t._e()]):t._e()])])})),t._v(" "),s("reach-bottom",{attrs:{show:t.bottomShow,pullBottomText:t.pullBottomText,mpcomid:"7"}})],1)]):t._e(),t._v(" "),void 0!=t.tabIds.choose?s("swiper-item",{staticClass:"my-choose",attrs:{mpcomid:"10"}},[s("view",{attrs:{id:"my-choose"}},[t.chooseList.length?s("view",{staticClass:"choose-list"},t._l(t.chooseList,function(e,a){return s("view",{key:a,staticClass:"li-wrap flex",attrs:{"data-index":a,eventid:"15_"+a},on:{click:t.viewChoose}},[s("view",{staticClass:"li-img-box",class:e.stocks[0].zdf>0?"raise-red":e.stocks[0].zdf<0?"decline-green":"stop",attrs:{"data-index":a,eventid:"14_"+a},on:{click:function(e){e.stopPropagation(),t.openChooseStock(e)}}},[s("view",{staticClass:"img-box-name",class:t.stockName[a]},[t._v(t._s(e.stocks[0].n))]),t._v(" "),s("view",{staticClass:"img-box-value"},[t._v(t._s(e.stocks[0].zdf)+"%")])]),t._v(" "),s("view",{staticClass:"li-cont flex-1",class:e.readed?"read":""},[s("view",[s("label",{staticClass:"li-cont-tit"},[t._v(t._s(e.title))])],1),t._v(" "),s("view",{staticClass:"news-related"},[s("view",{staticClass:"news-time"},[t._v(t._s(e.time))]),t._v(" "),s("view",{staticClass:"news-resource"},[t._v(t._s(e.source))])])])])})):t._e(),t._v(" "),t.chooseList&&0!=t.chooseList.length?t._e():s("view",{staticClass:"no-cont align-c"},[s("view",{staticClass:"pic-none bg-nocont choose-nocont"}),t._v(" "),s("view",{staticClass:"no-cont-text"},[t._v("添加自选后将显示所选股票的相关新闻")])]),t._v(" "),s("reach-bottom",{attrs:{show:t.bottomShow,pullBottomText:t.pullBottomText,mpcomid:"9"}})],1)]):t._e()],1)],1)])},staticRenderFns:[]};e.a=a},"6+yb":function(t,e,s){var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.investlist.length>0?s("view",{staticClass:"invest-news"},[s("view",{staticClass:"title"},[t._v("\n        投资必读\n        "),s("view",{staticClass:"more",attrs:{eventid:"0"},on:{click:t.tapmore}},[s("view",{staticClass:"more-t"},[t._v("查看更多")]),t._v(" "),s("view",{staticClass:"more-i"})])]),t._v(" "),s("scroll-view",{staticClass:"scroll-view_H",staticStyle:{width:"100%"},attrs:{"scroll-x":""}},t._l(t.investlist,function(e,a){return s("view",{key:a,staticClass:"scroll-view-item_H",attrs:{"data-index":a,eventid:"1_"+a},on:{click:t.tapnews}},[s("view",{staticClass:"tr"},[s("view",{staticClass:"column-info"},[s("view",{staticClass:"column-logo",class:"column-"+e.column_type}),t._v(" "),s("view",{staticClass:"column-name",class:"column-"+e.column_type})]),t._v(" "),s("view",{staticClass:"time"},[t._v(t._s(e.time))])]),t._v(" "),s("view",{staticClass:"tr"},[s("view",{staticClass:"invest-title-wrap"},[s("view",{staticClass:"invest-title"},[t._v(t._s(e.title))])])])])}))],1):t._e()},staticRenderFns:[]};e.a=a},"7gKb":function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=s("jqsv"),i=s.n(a),n=s("6+yb"),o=s("ybqe")(i.a,n.a,function(t){s("zD4h")},null,null);e.default=o.exports},"8anA":function(t,e,s){var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[t._l(t.omList,function(e,a){return s("block",{key:a,attrs:{"data-index":a}},[s("view",{staticClass:"li-wrap",class:a==t.omList.length-1?"last":""},[s("om-item",{attrs:{news:e,mpcomid:"0_"+a}})],1)])}),t._v(" "),t.omList.length>0&&t.historyList.length>0?s("view",{staticClass:"middle"},[s("view",{staticClass:"clickActive",attrs:{eventid:"0"},on:{click:t.refresh}},[s("view",{staticClass:"refresh-text"},[t._v("上次看到这里，点击刷新")]),t._v(" "),s("view",{staticClass:"fresh-icon"})])]):t._e(),t._v(" "),t._l(t.historyList,function(t,e){return s("block",{key:e,attrs:{"data-index":e}},[s("view",{staticClass:"li-wrap"},[s("om-item",{attrs:{news:t,mpcomid:"1_"+e}})],1)])})],2)},staticRenderFns:[]};e.a=a},"Dg/Q":function(t,e){},MPGW:function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=s("5km6"),i=s.n(a),n=s("MYw7"),o=s("ybqe")(i.a,n.a,function(t){s("Dg/Q")},null,null);e.default=o.exports},MYw7:function(t,e,s){var a={render:function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("view",{staticClass:"pull-bottom-wrapper"},[e("view",{staticClass:"gray ft-15"},[this._v(this._s(this.pullBottomText))]),this._v(" "),e("view",{staticClass:"inner-tips"},[this._v("资讯服务由腾讯科技（北京）有限公司提供")])]):this._e()},staticRenderFns:[]};e.a=a},On4d:function(t,e,s){var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{class:[t.news.singleImg?"flex":"",t.news.readed?"read":""],attrs:{eventid:"0"},on:{click:t.viewitem}},[s("view",{staticClass:"li-cont flex-1",class:[t.news.singleImg?"":"not-relative",t.news.readed?"read":""]},[s("label",{staticClass:"news-title",class:t.news.singleImg?"":"mb-20"},[t._v(t._s(t.news.news_title))]),t._v(" "),t.news.singleImg?s("view",{staticClass:"news-related",class:t.news.singleImg?"":"not-absolute"},["2"==t.news.label?s("text",{staticClass:"news-label liked"},[t._v("大家在看")]):t._e(),t._v(" "),s("text",{staticClass:"news-resource"},[t._v(t._s(t.news.media_name))]),t._v(" "),s("text",{staticClass:"news-time"},[t._v(t._s(t.news.time))])]):t._e()],1),t._v(" "),t.news.images&&3==t.news.images.length?s("view",{staticClass:"li-imgs-box"},[s("image",{staticClass:"li-img-horizontal large",attrs:{alt:"",src:t.news.images[0]}}),t._v(" "),s("image",{staticClass:"li-img-horizontal large",attrs:{alt:"",src:t.news.images[1]}}),t._v(" "),s("image",{staticClass:"li-img-horizontal large",attrs:{alt:"",src:t.news.images[2]}})]):t._e(),t._v(" "),t.news.singleImg?t._e():s("view",{staticClass:"news-related",class:t.news.singleImg?"":"not-absolute"},[s("text",{staticClass:"news-resource"},[t._v(t._s(t.news.media_name))]),t._v(" "),s("text",{staticClass:"news-time"},[t._v(t._s(t.news.time))])]),t._v(" "),t.news.singleImg?s("view",{staticClass:"li-img-box"},[s("image",{staticClass:"li-img",attrs:{alt:"",src:t.news.images[0]}})]):t._e()])},staticRenderFns:[]};e.a=a},"Pb/q":function(t,e){},SISJ:function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=s("59YR"),i=s.n(a),n=s("8anA"),o=s("ybqe")(i.a,n.a,function(t){s("Pb/q")},"data-v-c5330d06",null);e.default=o.exports},"a/71":function(t,e){},a6VX:function(t,e,s){function a(t){return t&&t.__esModule?t:{default:t}}function i(t){return{type:"general",uniq_id:t.id,title:t.title,digest:t.title,thumbs:[t.img],tags:"要闻 每日股市要闻"}}Object.defineProperty(e,"__esModule",{value:!0});var n,o,r=a(s("mvHQ")),c=a(s("Gu7T")),l=a(s("pFYg")),u=s("niax"),d=a(s("tww8")),m=a(s("QNXi")),v=a(s("7gKb")),p=a(s("SISJ")),w=a(s("MPGW")),h=getApp(),f=[],_={Sun:"日",Mon:"一",Tue:"二",Wed:"三",Thu:"四",Fri:"五",Sat:"六"},g=0,b=!1,x="",y=!1,C=1,T=!1,k=!0;e.default={data:function(){return{duration:300,currentTab:0,currentBanner:0,currentTabName:"focus",tabNames:["focus","om","current","choose"],tabIds:{focus:0,om:1,current:2,choose:3},swiperHeight:"1000",boxHeight:1700,importantList:[],importantBanners:[],omList:[],omHistoryList:[],omUpdateText:"",omEnd:!1,animationData:{},paddingAnimationData:{},flashList:[],chooseList:[],pullBottomText:"上拉查看下20条",currentTime:"",showFixed:!1,tzbd:[],stockName:[],bottomShow:!1}},components:{investComponent:v.default,aikanComponent:p.default,reachBottom:w.default},onLoad:function(){var t=this;h.init(function(){t.queryImportantNews(),h.setSkin()}),u.Request.reportData("xcx_newstab_click"),u.Request.reportMTAData({eventName:"xcx_newstab_click"})},onReady:function(){this.getOmHistory()},onHide:function(){clearTimeout(n)},onUnload:function(){o&&clearTimeout(o)},onShow:function(){switch(g=0,this.currentTabName){case"focus":this.setSwiperHeight("focus-news"),u.Request.reportData("news.mini.yaowen.visited"),u.Request.reportMTAData({eventName:"news.mini.yaowen.visited"});break;case"om":this.setSwiperHeight("om-news");break;case"current":this.setSwiperHeight("current-day");break;case"choose":this.setSwiperHeight("my-choose")}h.setSkin(),wx.setNavigationBarTitle({title:"zxg"===h.APPNAME?"腾讯自选股":"腾讯微证券"})},onPullDownRefresh:function(){switch(this.currentTabName){case"focus":g=0,b=!1,this.queryImportantNews();break;case"om":this.queryOmNews();break;case"current":this.queryFlashNews();break;case"choose":C=1,T=!1,this.queryUserStockNews()}},onReachBottom:function(){var t=this.currentTabName;switch(this.pullBottomText="加载中...",t){case"focus":this.bottomShow=this.importantList.length,this.loadMoreImportant();break;case"om":this.bottomShow=this.omList.length||this.omHistoryList.length,this.loadMoreOm();break;case"current":this.bottomShow=this.flashList.length,this.loadMoreFlash();break;case"choose":this.bottomShow=this.chooseList.length,this.loadMoreChoose()}},onPageScroll:function(t){var e=this.showFixed;e&&t.scrollTop<10&&(this.showFixed=!1),!e&&t.scrollTop>=10&&(this.showFixed=!0)},onShareAppMessage:function(){return{title:"你能用微信盯盘啦！",path:"/pages/index/index"}},methods:{chooseFont:function(t){for(var e=0;e<t.length;e++)(t[e].stocks[0].n||"").length>=5?this.stockName.push("choose-stock"):this.stockName.push("")},queryImportantNews:function(){var t=this,e=!g,s=e?[]:f.slice(g,g+20);h.wx.request({url:h.CGI_PREFIX+"information.fcgi",data:{type:8,ids:s,reserve:4117},success:function(s){var a=parseInt(s.retcode,10),n=t.importantList,o=[],r=t.currentTabName,c=s.headline||[];if(0===a){s.ids&&s.ids.length&&(f=s.ids||[]),g>=f.length-20&&(b=!0),c&&c.length&&(c=t.processImportant(c),e&&(c=c.filter(function(t){return"1"!==t.is_top||(o.push(t),!1)}),0===o.length&&(o=c.splice(0,1))),n=e?c:n.concat(c),g=g+c.length+o.length);var u={importantList:n,pullBottomText:b?"已无更多数据":"上拉查看下20条"};e&&(u.importantBanners=o,t.importantBanners=u.importantBanners);var d=t.processTzbd(s.tzbd);if(d.length>0&&(u.tzbd=d,t.tzbd=u.tzbd),u.importantList&&u.importantList.length)for(var m=0;m<u.importantList.length;m++){var v=u.importantList[m];v&&v.structData||(v.structData=i(v))}if(u.importantBanners&&u.importantBanners.length)for(var p=0;p<u.importantBanners.length;p++){var w=u.importantBanners[p];w&&w.structData||(w.structData=i(w))}t.importantList=u.importantList.map(function(t){if(t.video_info){var e="";if("object"===(0,l.default)(t.video_info)?e=t.video_info.video_time:"string"==typeof t.video_info&&(e=t.video_info.split("|")[1]),isNaN(+e))t.video_time=e.slice(3);else{var s=parseInt(e/60),a=e%60;t.video_time=(s<10?"0":"")+s+":"+(a<10?"0":"")+a}}return t}),t.pullBottomText=u.pullBottomText,k&&(t.queryOmNews(),t.queryFlashNews(),t.queryUserStockNews(),k=!1),"focus"===r&&t.setSwiperHeight("focus-news")}t.stopRefresh()}})},stopRefresh:function(){wx.stopPullDownRefresh()},loadMoreImportant:function(){b?this.pullBottomText="已全部加载完成":this.queryImportantNews()},queryOmNews:function(){var t=this,e=this.currentTabName;h.wx.request({url:h.CGI_PREFIX+"information.fcgi",data:{type:14,reserve:0},success:function(s){var a=!0;if(0===parseInt(s.retcode,10)){var i=wx.createAnimation({duration:600,timingFunction:"ease"}),n=wx.createAnimation({duration:600,timingFunction:"ease"});i.top(0).step(),n.height("60rpx").step();var r=t.omHistoryList||[];if(s.news_list.length>0){a=!1;var l=t.omList||[],u=s.news_list;r.unshift.apply(r,(0,c.default)(l)),r.splice(50),t.omList=t.processOm(u),t.omHistoryList=t.processOm(r),t.pullBottomText=s.has_next?"上拉查看上10条":"已全部加载完成",t.omUpdateText="更新了10条新闻",t.omEnd=!s.has_next,t.animationData=i.export(),t.paddingAnimationData=n.export(),t.saveOm(u,"top")}else if(r.length>0){a=!1;var d={pullBottomText:"已全部加载完成",omUpdateText:"暂无更多内容",omEnd:!0,animationData:i.export(),paddingAnimationData:n.export()};t.pullBottomText=d.pullBottomText,t.omUpdateText=d.omUpdateText,t.omEnd=d.omEnd,t.animationData=d.animationData,t.paddingAnimationData=d.paddingAnimationData}"om"===e&&t.setSwiperHeight("om-news"),wx.pageScrollTo({scrollTop:0,duration:300}),a||(o&&clearTimeout(o),o=setTimeout(function(){o&&clearTimeout(o),i.top("-60rpx").step(),n.height(0).step(),t.animationData=i.export(),t.paddingAnimationData=n.export()},1500))}t.stopRefresh()}})},loadMoreOm:function(){var t=this,e=this.currentTabName;h.wx.request({url:h.CGI_PREFIX+"information.fcgi",data:{type:14,reserve:0},success:function(s){if(0===parseInt(s.retcode,10)){if(s.news_list.length>0){var a,i=t.omHistoryList,n=s.news_list;i=(a=i).concat.apply(a,(0,c.default)(n)),t.omHistoryList=t.processOm(i),t.pullBottomText=s.has_next?"上拉查看上10条":"已全部加载完成",t.omEnd=!s.has_next,t.saveOm(n,"bottom")}else t.pullBottomText="已全部加载完成",t.omEnd=!0;"om"===e&&t.setSwiperHeight("om-news")}t.stopRefresh()}})},queryFlashNews:function(t,e){var s=this;h.wx.request({url:h.CGI_PREFIX+"informationbody.fcgi",data:{zxtype:6,reserve:0,id:x},success:function(t){var e=parseInt(t.retcode,10),a=s.flashList,i=s.currentTabName,n=t.news||[];if(0===e)if(!n||n.length<=0)y=!0,"current"===i&&(s.pullBottomText="已无更多数据");else{n=s.processFlash(n);var o={flashList:a=x?a.concat(n):n};if("current"===i&&(o.pullBottomText="上拉查看下20条",s.pullBottomText=o.pullBottomText),!s.currentTime&&a.length){var r=a[0].rawTime;o.currentTime=s.formatFixedDate(1e3*r),s.currentTime=o.currentTime}s.flashList=o.flashList,x=n.pop().id,"current"===i&&s.setSwiperHeight("current-day")}s.stopRefresh()}})},loadMoreFlash:function(){y?this.pullBottomText="已全部加载完成":this.queryFlashNews()},queryUserStockNews:function(t,e){var s=this;h.wx.request({url:h.CGI_PREFIX+"information.fcgi",data:{type:10,reserve:0,page:C,num:20},success:function(t){var e=parseInt(t.retcode,10),a=t.optional,i=s.currentTabName,n=s.chooseList;0===e&&(!a||a.length<=0?T=!0:(a=s.processChoose(a),n=C>1?n.concat(a):a,C++,s.chooseList=n,s.chooseFont(s.chooseList),"choose"===i&&s.setSwiperHeight("my-choose"))),s.stopRefresh()},fail:function(){}})},loadMoreChoose:function(){T?this.pullBottomText="已全部加载完成":this.queryUserStockNews()},setSwiperHeight:function(t){var e=this;clearTimeout(n),n=setTimeout(function(){wx.createSelectorQuery().select("#"+t).boundingClientRect().exec(function(s){var a=s[0].height;"om-news"===t&&0===e.omList.length&&0===e.omHistoryList.length&&(a=h.device.windowHeight),e.swiperHeight=a})},500)},processOm:function(t){var e=this.getReadRecord(),s=this;return t&&t.map(function(t){return t.time=s.formatOmTime(t.publish_time),e.indexOf(t.news_id)>=0&&(t.readed=!0),t.singleImg=t.images&&1===t.images.length,t})},processImportant:function(t){var e=this.getReadRecord();return t&&t.map(function(t){t.time=t.time.substr(5,11),e.indexOf(t.id)>=0&&(t.readed=!0);try{t.label_style=t.label_colour.split(",")[0].split("|")}catch(e){t.label_style=[]}return t})},processTzbd:function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(t){return t.time=t.time.substr(11,5),t})},processFlash:function(t){return t&&t.map(function(t){var e=t.stocks||[];return t.rawTime=t.time,t.time=m.default.date2Str(new Date(1e3*t.time),"hh:mm",!0),t.stocks=e.map(function(t){return t.state=d.default.state[t.state]||null,t}),t})},formatFixedDate:function(t){var e=new Date(t),s=e.toDateString();return e.getFullYear()+"年"+(e.getMonth()+1).toString().replace(/^[0-9]$/,function(t){return"0"+t})+"月"+e.getDate().toString().replace(/^[0-9]$/,function(t){return"0"+t})+"日 周"+_[s.split(" ")[0]]},processChoose:function(t){var e=this.getReadRecord();return t&&t.map(function(t){return t.time=t.time.substr(5,11),t.stocks=t.stocks&&t.stocks.length?t.stocks:[{}],e.indexOf(t.id)>=0&&(t.readed=!0),t})},openNotice:function(t){wx.showLoading({title:"公告加载中"}),h.wx.request({url:h.CGI_PREFIX+"informationbody.fcgi",data:{reserve:0,zxtype:t.type,id:t.id},success:function(t){if(parseInt(t.retcode,10)||!t.url)return wx.hideLoading(),void h.showMsg("公告下载失败");wx.downloadFile({url:t.url.replace("http://","https://"),success:function(t){wx.hideLoading();var e=t.tempFilePath;wx.openDocument({filePath:e})},fail:function(){wx.hideLoading(),h.showMsg("公告下载失败")}})}})},viewImportant:function(t){var e=t.currentTarget.dataset.index,s=t.currentTarget.dataset.isbanner||0,a=s?this.importantBanners:this.importantList,i=a[e];u.Request.reportData({sop:"xcx_news_content_click"}),u.Request.reportMTAData({eventName:"xcx_news_content_click"}),s?(u.Request.reportData({sop:"news_yaowen_top_click",pos:e,newsid:i.id}),u.Request.reportMTAData({pos:e,newsid:i.id,eventName:"news_yaowen_top_click"})):(this.saveReadRecord(i),i.readed=!0,a[e]=i,this.importantList=a,u.Request.reportData({sop:"news.mini.yaowen.feed",newsid:i.id}),u.Request.reportMTAData({newsid:i.id,eventName:"news.mini.yaowen.feed"})),5===parseInt(i.type)?h.navigateTo({url:"/pages/newsCon/topic/main?id="+i.id}):h.navigateTo({url:"/pages/newsCon/newsDetail/main?id="+i.id+"&zxtype="+i.type+"&title="+i.title+"&date="+i.time+"&source="+i.source}),u.Request.reportData({sop:"news.mini.om.feed",newsid:i.news_id}),u.Request.reportMTAData({newsid:i.news_id,eventName:"news.mini.om.feed"})},viewChoose:function(t){var e=t.currentTarget.dataset.index,s=this.chooseList,a=s[e];u.Request.reportData({sop:"xcx_news_content_click"}),u.Request.reportMTAData({eventName:"xcx_news_content_click"}),this.saveReadRecord(a),a.readed=!0,s[e]=a,this.chooseList=s,console.log("news.zxtype",a.type);var i=1;2===a.type&&(i=2),h.navigateTo({url:"/pages/newsCon/newsCon?id="+a.id+"&zxtype="+i+"&title="+a.title+"&date="+a.time+"&source="+a.source})},saveOm:function(t,e){var s=function(){var s,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"top"===e?((s=i).unshift.apply(s,(0,c.default)(t)),i.splice(50)):(i=(a=i).concat.apply(a,(0,c.default)(t))).length>50&&(i=i.splice(i.length-50,50)),wx.setStorage({key:"om_history_list",data:i})};wx.getStorage({key:"om_history_list",success:function(t){s(t.data)},fail:function(t){s()}})},getOmHistory:function(){var t=this;wx.getStorage({key:"om_history_list",success:function(e){var s=e.data||[];t.omHistoryList=t.processOm(s)}})},saveReadRecord:function(t){var e=wx.getStorageSync("imformation_read_record")||"[]",s=t.id||t.news_id;(e=JSON.parse(e)).indexOf(s)<0&&e.push(s),e.length>500&&(e=e.slice(-500)),wx.setStorageSync("imformation_read_record",(0,r.default)(e))},switchNav:function(t){var e=t.currentTarget.dataset.current;if(this.currentTab===e)return!1;this.currentTab=e,this.currentTabName=this.tabNames[e]},bindchange:function(t){console.log(t);var e=t.target.current,s=this.tabNames[e],a=2===e?h.rpxToPx(144)+2:h.rpxToPx(80)+2;clearTimeout(n),wx.pageScrollTo({scrollTop:0,duration:1}),console.log(e);var i={currentTab:e,currentTabName:this.tabNames[e],swiperHeight:h.device.windowHeight-a};switch(s){case"focus":g=0,b=!1,this.queryImportantNews();break;case"om":i.pullBottomText=this.omEnd?"已全部加载完成":"上拉查看上10条",this.setSwiperHeight("om-news");break;case"current":x="",y=!1,this.queryFlashNews();break;case"choose":C=1,T=!1,this.queryUserStockNews()}this.currentTab=i.currentTab,this.currentTabName=i.currentTabName,this.swiperHeight=i.swiperHeight},bindchangebanner:function(t){this.currentBanner=t.mp.detail.current},getReadRecord:function(){var t=wx.getStorageSync("imformation_read_record")||"[]";return JSON.parse(t)},formatOmTime:function(t){return t<6e4?"刚刚":t<36e5?Math.floor(t/6e4)+"分钟前":t<144e5?Math.floor(t/36e5)+"小时前":""},openStock:function(t){var e=t.currentTarget.dataset,s=e.findex,a=e.index,i=this.flashList[s].stocks[a];h.openStock(i.c,i.m)},openChooseStock:function(t){var e=t.currentTarget.dataset.index,s=this.chooseList[e].stocks[0];h.openStock(s.c,s.m)}}}},jqsv:function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=s("niax"),i=getApp();e.default={props:{investlist:{type:Array}},methods:{tapmore:function(){i.navigateTo({url:"/pages/newsCon/investment_must_read/main"}),a.Request.reportData("news.mini.focus.tzbdmore"),a.Request.reportMTAData({eventName:"news.mini.focus.tzbdmore"})},tapnews:function(t){var e=t.currentTarget.dataset.index,s=this.investlist[e];i.navigateTo({url:"/pages/newsCon/newsCon?id="+s.id+"&zxtype=4&title="+s.title+"&date="+s.time})}}}},oIs2:function(t,e,s){function a(t){return t&&t.__esModule?t:{default:t}}var i=a(s("5nAL")),n=a(s("st9k")),o=a(s("D4CW"));s("75fD"),i.default.use(o.default),new i.default(n.default).$mount()},st9k:function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=s("a6VX"),i=s.n(a),n=s("5oM6"),o=s("ybqe")(i.a,n.a,function(t){s("a/71")},"data-v-b87a0338",null);e.default=o.exports},tbfK:function(t,e){},tww8:function(t,e,s){t.exports={state:{D:"退市",Z:"暂时上市",P:"申购日",U:"待上市",I:"待发行",S:"停牌"}}},wZHj:function(t,e,s){Object.defineProperty(e,"__esModule",{value:!0});var a=s("1Uyq"),i=s.n(a),n=s("On4d"),o=s("ybqe")(i.a,n.a,function(t){s("tbfK")},"data-v-810882b2",null);e.default=o.exports},zD4h:function(t,e){}},["oIs2"]); 
 			}); 	require("pages/index/information/main.js");
 		__wxRoute = 'pages/index/account/main';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/account/main.js';	define("pages/index/account/main.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../common/manifest.js"),require("../../../common/vendor.js"),global.webpackJsonpMpvue([23],{"1BuY":function(t,e,a){var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container"},[a("view",{staticClass:"container bg-gray mine show-page-main"},[a("view",{staticClass:"box-setting"},[a("view",{staticClass:"bd-cont"},[a("view",{staticClass:"layer-top-account",attrs:{eventid:"0"},on:{click:t.tapUserInfo}},[a("view",{staticClass:"inner flex flex-align-center"},[a("label",{staticClass:"block portrait"},[t.headImg?a("image",{attrs:{src:t.headImg}}):t._e()]),t._v(" "),"yes"===t.status?a("label",{staticClass:"block user-inf"},[t._v(t._s(t.name))]):t._e(),t._v(" "),"outer_user"===t.status?a("label",{staticClass:"block user-inf gray ft-14"},[t._v(t._s(t.name))]):t._e(),t._v(" "),"no"===t.status?a("label",{staticClass:"block user-inf gray ft-14"},[t._v("未登录证券账号，"),a("label",{staticClass:"blue"},[t._v("去登录")])],1):t._e(),t._v(" "),"verify"===t.status?a("label",{staticClass:"block user-inf gray ft-14"},[t._v("开户审核中")]):t._e()],1),t._v(" "),"yes"===t.status?a("label",{staticClass:"icon-arrow"}):t._e()],1),t._v(" "),a("view",{staticClass:"layer-loading flex flex-align-center flex-pack-center hide"},[a("label",{staticClass:"block rotate-circle"})],1),t._v(" "),a("view",{staticClass:"layer-content page-main"},[a("view",{staticClass:"wrap-list-account"},["yes"===t.status?a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"1"},on:{click:t.tapBusiness}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-bill"}),t._v("业务办理")],1),t._v(" "),a("label",{staticClass:"cont"},[a("label",{staticClass:"icon-arrow"})],1)],1):t._e()]),t._v(" "),a("view",{staticClass:"wrap-list-account hide"},[a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"2"},on:{click:t.tapRemind}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-alert"}),t._v("价格提醒")],1),t._v(" "),a("label",{staticClass:"cont"},[a("label",{staticClass:"icon-arrow"})],1)],1),t._v(" "),"yes"===t.status&&1==t.priority?a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"3"},on:{click:t.tapRank}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-rank"}),t._v("排行榜")],1),t._v(" "),a("label",{staticClass:"cont"},[1==t.heroboardDot?a("label",{staticClass:"blue"},[t._v("\n                      榜单已生成\n                      "),a("label",{staticClass:"red-dot"})],1):t._e(),t._v(" "),a("label",{staticClass:"icon-arrow"})],1)],1):t._e()]),t._v(" "),a("view",{staticClass:"wrap-list-account"},[a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"4"},on:{click:t.gotoTrade}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-exchange"}),t._v("交易")],1),t._v(" "),a("label",{staticClass:"cont"},[a("label",{staticClass:"icon-arrow"})],1)],1)]),t._v(" "),a("view",{staticClass:"wrap-list-account"},["yes"===t.status?a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"5"},on:{click:t.tapSetting}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-set"}),t._v("通用设置")],1),t._v(" "),a("label",{staticClass:"cont"},[a("label",{staticClass:"icon-arrow"})],1)],1):t._e(),t._v(" "),a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"6"},on:{click:t.tapAbout}},[a("label",{staticClass:"attr"},[a("label",{class:t.aboutClass}),t._v(t._s(t.aboutTxt))],1),t._v(" "),a("label",{staticClass:"cont"},[a("label",{staticClass:"icon-arrow"})],1)],1),t._v(" "),a("view",{staticClass:"row-inf flex flex-pack-justify",attrs:{eventid:"7"},on:{click:t.tapRobot}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-ai"}),t._v("智能客服")],1),t._v(" "),a("label",{staticClass:"cont"},[a("label",{staticClass:"icon-arrow"})],1)],1),t._v(" "),a("view",{staticClass:"row-inf flex flex-pack-justify skin",attrs:{eventid:"8"},on:{click:t.changeSkin}},[a("label",{staticClass:"attr"},[a("label",{staticClass:"icon-skin"}),t._v("更换皮肤")],1),t._v(" "),a("label",{staticClass:"cont gray flex flex-align-center"},[a("label",{staticClass:"red-dot",class:t.showSkinRemainder?"":"hide"}),t._v(" "),a("label",{staticClass:"icon-arrow"})],1)],1)])])]),t._v(" "),a("privpopup",{attrs:{visible:t.popupVisible,notConfirmList:t.notConfirmList,type:t.popupType,mpcomid:"0"}})],1),t._v(" "),a("view",{staticClass:"wx-search"})])])},staticRenderFns:[]};e.a=s},"91Ea":function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var s=a("vefZ"),i=a.n(s),n=a("1BuY"),o=a("ybqe")(i.a,n.a,function(t){a("TTL2")},null,null);e.default=o.exports},TTL2:function(t,e){},gyrA:function(t,e,a){function s(t){return t&&t.__esModule?t:{default:t}}var i=s(a("5nAL")),n=s(a("91Ea")),o=s(a("D4CW"));a("75fD"),i.default.use(o.default),new i.default(n.default).$mount()},vefZ:function(t,e,a){function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=a("niax"),n=s(a("NpZb")),o=s(a("EUYj")),c=s(a("4jCy")),l=getApp(),r=n.default.DEALER,u={10800:"60001",10100:"60003",10500:"60005",11800:"60002",19900:"619900",21900:"60004"},f=function(t){return u[t]||t};e.default={components:{privpopup:c.default},data:function(){return{status:"",name:"",headImg:"",priority:"",innerPriority:"",dealercode:"",could_rebind:"",heroboardDot:"0",aboutTxt:"zxg"===l.APPNAME?"关于腾讯自选股":"关于腾讯微证券",aboutClass:"zxg"===l.APPNAME?"icon-zxg":"icon-logo2",showRedPoint:!1,popupType:1,popupVisible:!1,notConfirmList:[],isConfirmList:!0}},onShow:function(){i.Request.reportData("xcx_mine_click"),i.Request.reportMTAData({eventName:"xcx_mine_click"})},onLoad:function(){var t,e=wx.getStorageSync("glwz-redpoint-notify"),a=this;l.setSkin(),e||l.init(function(){l.wx.request({url:l.CGI_PREFIX+"redpointremind.fcgi",data:{type:3,action:"glwz"},success:function(t){"1"==t.glwz&&(a.showRedPoint=!0)}})}),a.showSkinRemainder=!wx.getStorageSync("new-skin-red-point")&&"1"==l.redPointInfo.newfunction,l.init(function(){l.setSkin(),o.default.get(!0,function(e){t="outer_user",a.status=t,a.name=e.nickname,a.headImg=e.headimgurl,a.priority=e.priority,a.innerPriority=e.inner_priority,a.dealercode=e.dealercode,a.could_rebind=e.could_rebind,1===e.priority&&a.getRedDot()});var e=wx.getStorageSync("PROTOCOL/USERAGREEMENTLIST"),s=void 0;if(e&&e.time&&(s=(new Date).getTime()-e.time>864e6),""==e||s)l.wx.request({url:l.CGI_PREFIX+"user_agreement.fcgi",data:{type:0},success:function(t){t.agreements_not_confirm&&t.agreements_not_confirm.length>0&&(a.notConfirmList=t.agreements_not_confirm||[]);var e=(new Date).getTime();try{wx.setStorageSync("PROTOCOL/USERAGREEMENTLIST",{val:t,time:e})}catch(t){console.log("set storage userAgreementList fail")}a.notConfirmList.length>0&&a.show()}});else try{var i=wx.getStorageSync("PROTOCOL/USERAGREEMENTLIST").val;i&&i.agreements_not_confirm&&i.agreements_not_confirm.length>0?a.notConfirmList=i.agreements_not_confirm||[]:a.notConfirmList=[],a.notConfirmList.length>0?a.show():a.popupVisible=!1}catch(t){console.log("get storage userAgreementList fail")}})},onShareAppMessage:function(){return{title:"你能用微信盯盘啦！",path:"/pages/index/index"}},methods:{getRedDot:function(){var t=this,e={url:l.CGI_PREFIX+"redpointremind.fcgi",data:{type:1,action:"mine"},success:function(e,a,s){switch(parseInt(e.retcode,10)){case 0:var i=e.heroboard||"0";"1"==i&&(t.heroboardDot=i)}},error:function(){}};l.wx.request(e)},setRedPoint:function(){var t={url:l.CGI_PREFIX+"redpointremind.fcgi",data:{type:2,action:"heroboard"},success:function(){},error:function(){}};l.wx.request(t)},tapUserInfo:function(){var t=this,e=this.status;"no"===e?wx.showModal({content:"请选择需要进行的操作",confirmText:"新开账户",cancelText:"登录账户",success:function(e){e.confirm?wx.switchTab({url:"/pages/assets/index"}):e.cancel&&t.openCrossWebview("account/switch.shtml")}}):"yes"===e&&t.openCrossWebview("account/personal.shtml")},openCrossWebview:function(t){wx.canIUse("web-view")?o.default.get(function(e){var a;switch(e.dealercode){case r.CMSCHINA.CODE:a=r.CMSCHINA.DOMAIN;break;case r.CHINALIONS.CODE:a=r.CHINALIONS.DOMAIN;break;case r.CNHB.CODE:a=r.CNHB.DOMAIN}wx.navigateTo({url:"/pages/additional/webview/index?url="+encodeURIComponent("https://"+a+"/weixin/v1/"+t)})}):wx.showModal({title:"提示",content:"当前微信版本过低，无法使用内嵌H5功能，请升级到最新微信版本后重试。",showCancel:!1})},tapBusiness:function(){this.openCrossWebview("account/business.shtml")},tapRemind:function(){wx.navigateTo({url:"/v1/remind/list"})},tapRank:function(){1==this.heroboardDot&&this.setRedPoint(),this.openCrossWebview("rank/list.shtml")},tapSetting:function(){this.openCrossWebview("account/setting.shtml")},tapAbout:function(){i.Request.reportData("xcx_mine_about"),i.Request.reportMTAData({eventName:"xcx_mine_about"}),wx.navigateTo({url:"/pages/account/about"})},tapRobot:function(){"zxg"==l.APPNAME?l.navigateTo({url:"/pages/additional/webview/index?url="+encodeURIComponent("https://aics.tenpay.com/aics-cloud/xiaomi/page.do?channel=75&_="+Date.now()+"&tag="+f(this.dealercode))}):l.navigateTo({url:"/pages/additional/webview/index?url="+encodeURIComponent("https://aics.tenpay.com/aics-wzq/xiaomi/page.do?channel=16&type=chat&_="+Date.now()+"&tag="+f(this.dealercode))})},tapUserReport:function(){i.Request.reportData("xcx_mine_opinion"),i.Request.reportMTAData({eventName:"xcx_mine_opinion"}),l.navigateTo({url:"/pages/additional/feedback/feedback"})},openGlwz:function(){var t=this;i.Request.reportData("xcx_mine_glwz"),i.Request.reportMTAData({eventName:"xcx_mine_glwz"}),wx.navigateToMiniProgram({appId:"wx0994a649c77423a1",path:"pages/index/main?f=zxgxcx",success:function(e){wx.getStorageSync("glwz-redpoint-notify")||(wx.setStorageSync("glwz-redpoint-notify",!0),l.resetMeTab(),l.wx.request({url:"/cgi-bin/redpointremind.fcgi",data:{type:4,action:"glwz"}})),t.showRedPoint=!1},fail:function(t){wx.showModal({content:"打开“腾讯全民模拟炒股大赛”小程序失败",showCancel:!1})}})},changeSkin:function(){wx.getStorageSync("new-skin-red-point")||(wx.setStorageSync("new-skin-red-point",!0),l.resetMeTab(),l.wx.request({url:"/cgi-bin/redpointremind.fcgi",data:{type:4,action:"newfunction"}})),this.showSkinRemainder=!1,l.navigateTo({url:"/pages/account/skin/main"})},show:function(){this.popupVisible=!0,i.Request.reportData("ZXG.ACCOUNT.PROFILE.POPUP"),i.Request.reportMTAData({eventName:"ZXG.ACCOUNT.PROFILE.POPUP"})},gotoTrade:function(){i.Request.reportData("base.my.trade"),i.Request.reportMTAData({eventName:"base.my.trade"}),l.navigateTo({url:"/pages/assets/main"})}}}}},["gyrA"]); 
 			}); 	require("pages/index/account/main.js");
 	