(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="170",Sf=0,tc=1,yf=2,Lu=1,Ef=2,In=3,li=0,Ue=1,Fn=2,ii=0,lr=1,so=2,ec=3,nc=4,Tf=5,wi=100,bf=101,Af=102,wf=103,Rf=104,Cf=200,Pf=201,Df=202,Lf=203,ao=204,oo=205,If=206,Uf=207,Nf=208,Ff=209,Of=210,Bf=211,zf=212,kf=213,Vf=214,lo=0,co=1,uo=2,pr=3,ho=4,fo=5,po=6,mo=7,Iu=0,Gf=1,Hf=2,ri=0,Wf=1,Xf=2,qf=3,Yf=4,$f=5,Kf=6,jf=7,Uu=300,mr=301,_r=302,_o=303,go=304,na=306,vo=1e3,Ci=1001,xo=1002,_n=1003,Zf=1004,cs=1005,yn=1006,ga=1007,Pi=1008,kn=1009,Nu=1010,Fu=1011,Yr=1012,fl=1013,Fi=1014,On=1015,es=1016,dl=1017,pl=1018,gr=1020,Ou=35902,Bu=1021,zu=1022,mn=1023,ku=1024,Vu=1025,cr=1026,vr=1027,Gu=1028,ml=1029,Hu=1030,_l=1031,gl=1033,Fs=33776,Os=33777,Bs=33778,zs=33779,Mo=35840,So=35841,yo=35842,Eo=35843,To=36196,bo=37492,Ao=37496,wo=37808,Ro=37809,Co=37810,Po=37811,Do=37812,Lo=37813,Io=37814,Uo=37815,No=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,ks=36492,Vo=36494,Go=36495,Wu=36283,Ho=36284,Wo=36285,Xo=36286,Jf=3200,Qf=3201,Xu=0,td=1,Jn="",rn="srgb",Ar="srgb-linear",ia="linear",$t="srgb",ki=7680,ic=519,ed=512,nd=513,id=514,qu=515,rd=516,sd=517,ad=518,od=519,rc=35044,sc="300 es",Bn=2e3,Ys=2001;class wr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,qo=180/Math.PI;function ns(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[r&255]+Ee[r>>8&255]+Ee[r>>16&255]+Ee[r>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Le(r,t,e){return Math.max(t,Math.min(e,r))}function ld(r,t){return(r%t+t)%t}function xa(r,t,e){return(1-e)*r+e*t}function Lr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function De(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,i,s,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],S=i[1],y=i[4],v=i[7],C=i[2],A=i[5],b=i[8];return s[0]=a*_+o*S+l*C,s[3]=a*m+o*y+l*A,s[6]=a*d+o*v+l*b,s[1]=c*_+u*S+h*C,s[4]=c*m+u*y+h*A,s[7]=c*d+u*v+h*b,s[2]=f*_+p*S+g*C,s[5]=f*m+p*y+g*A,s[8]=f*d+p*v+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Pt;function Yu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cd(){const r=$s("canvas");return r.style.display="block",r}const ac={};function zr(r){r in ac||(ac[r]=!0,console.warn(r))}function ud(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function hd(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fd(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vt={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===$t&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===$t&&(r.r=ur(r.r),r.g=ur(r.g),r.b=ur(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?ia:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ur(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const oc=[.64,.33,.3,.6,.15,.06],lc=[.2126,.7152,.0722],cc=[.3127,.329],uc=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[Ar]:{primaries:oc,whitePoint:cc,transfer:ia,toXYZ:uc,fromXYZ:hc,luminanceCoefficients:lc,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:oc,whitePoint:cc,transfer:$t,toXYZ:uc,fromXYZ:hc,luminanceCoefficients:lc,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Vi;class dd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=$s("canvas")),Vi.width=t.width,Vi.height=t.height;const n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pd=0;class $u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Sa(i[a].image)):s.push(Sa(i[a]))}else s=Sa(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Sa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Ne extends wr{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ci,i=Ci,s=yn,a=Pi,o=mn,l=kn,c=Ne.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ns(),this.name="",this.source=new $u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Uu;Ne.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,i=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,C=(d+1)/2,A=(u+f)/4,b=(h+_)/4,w=(g+m)/4;return y>v&&y>C?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=A/n,s=b/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=w/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=b/s,i=w/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _d extends wr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends _d{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ku extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*_,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,d*S);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const v=o*S;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new N,fc=new is;class rs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),hs.subVectors(this.max,Ir),Gi.subVectors(t.a,Ir),Hi.subVectors(t.b,Ir),Wi.subVectors(t.c,Ir),Xn.subVectors(Hi,Gi),qn.subVectors(Wi,Hi),_i.subVectors(Gi,Wi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-_i.z,_i.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,_i.z,0,-_i.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-_i.y,_i.x,0];return!Ea(e,Gi,Hi,Wi,hs)||(e=[1,0,0,0,1,0,0,0,1],!Ea(e,Gi,Hi,Wi,hs))?!1:(fs.crossVectors(Xn,qn),e=[fs.x,fs.y,fs.z],Ea(e,Gi,Hi,Wi,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,us=new rs,Gi=new N,Hi=new N,Wi=new N,Xn=new N,qn=new N,_i=new N,Ir=new N,hs=new N,fs=new N,gi=new N;function Ea(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){gi.fromArray(r,s);const o=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vd=new rs,Ur=new N,Ta=new N;class ra{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Ta)),this.expandByPoint(Ur.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new N,ba=new N,ds=new N,Yn=new N,Aa=new N,ps=new N,wa=new N;class vl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ba.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(ba);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ds),o=Yn.dot(this.direction),l=-Yn.dot(ds),c=Yn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ba).addScaledVector(ds,f),p}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,s){Aa.subVectors(e,t),ps.subVectors(n,t),wa.crossVectors(Aa,ps);let a=this.direction.dot(wa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const l=o*this.direction.dot(ps.crossVectors(Yn,ps));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(Yn));if(c<0||l+c>a)return null;const u=-o*Yn.dot(wa);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m)}set(t,e,n,i,s,a,o,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,Md)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),$n.crossVectors(n,Ge),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),$n.crossVectors(n,Ge)),$n.normalize(),ms.crossVectors(Ge,$n),i[0]=$n.x,i[4]=ms.x,i[8]=Ge.x,i[1]=$n.y,i[5]=ms.y,i[9]=Ge.y,i[2]=$n.z,i[6]=ms.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],y=n[7],v=n[11],C=n[15],A=i[0],b=i[4],w=i[8],x=i[12],M=i[1],P=i[5],O=i[9],F=i[13],H=i[2],X=i[6],G=i[10],Y=i[14],V=i[3],et=i[7],at=i[11],dt=i[15];return s[0]=a*A+o*M+l*H+c*V,s[4]=a*b+o*P+l*X+c*et,s[8]=a*w+o*O+l*G+c*at,s[12]=a*x+o*F+l*Y+c*dt,s[1]=u*A+h*M+f*H+p*V,s[5]=u*b+h*P+f*X+p*et,s[9]=u*w+h*O+f*G+p*at,s[13]=u*x+h*F+f*Y+p*dt,s[2]=g*A+_*M+m*H+d*V,s[6]=g*b+_*P+m*X+d*et,s[10]=g*w+_*O+m*G+d*at,s[14]=g*x+_*F+m*Y+d*dt,s[3]=S*A+y*M+v*H+C*V,s[7]=S*b+y*P+v*X+C*et,s[11]=S*w+y*O+v*G+C*at,s[15]=S*x+y*F+v*Y+C*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+_*(+e*l*p-e*c*f+s*a*f-i*a*p+i*c*u-s*l*u)+m*(+e*c*h-e*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=h*m*c-_*f*c+_*l*p-o*m*p-h*l*d+o*f*d,y=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,v=u*_*c-g*h*c+g*o*p-a*_*p-u*o*d+a*h*d,C=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,A=e*S+n*y+i*v+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=S*b,t[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*b,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*b,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*b,t[4]=y*b,t[5]=(u*m*s-g*f*s+g*i*p-e*m*p-u*i*d+e*f*d)*b,t[6]=(g*l*s-a*m*s-g*i*c+e*m*c+a*i*d-e*l*d)*b,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*p+e*l*p)*b,t[8]=v*b,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*b,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*p-e*o*p)*b,t[12]=C*b,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,S=l*c,y=l*u,v=l*h,C=n.x,A=n.y,b=n.z;return i[0]=(1-(_+d))*C,i[1]=(p+v)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(p-v)*A,i[5]=(1-(f+d))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+y)*b,i[9]=(m-S)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Xi.set(i[0],i[1],i[2]).length();const a=Xi.set(i[4],i[5],i[6]).length(),o=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const c=1/s,u=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Bn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(o===Bn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ys)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Bn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,p=(n+i)*u;let g,_;if(o===Bn)g=(a+s)*h,_=-2*h;else if(o===Ys)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new N,fn=new ie,xd=new N(0,0,0),Md=new N(1,1,1),$n=new N,ms=new N,Ge=new N,dc=new ie,pc=new is;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pc.setFromEuler(this),this.setFromQuaternion(pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sd=0;const mc=new N,qi=new is,Pn=new ie,_s=new N,Nr=new N,yd=new N,Ed=new is,_c=new N(1,0,0),gc=new N(0,1,0),vc=new N(0,0,1),xc={type:"added"},Td={type:"removed"},Yi={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Ce extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new N,e=new Tn,n=new is,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Pt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(vc,t)}translateOnAxis(t,e){return mc.copy(t).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_s.copy(t):_s.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Nr,_s,this.up):Pn.lookAt(_s,Nr,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Pn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DEFAULT_UP=new N(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new N,Dn=new N,Ca=new N,Ln=new N,$i=new N,Ki=new N,Mc=new N,Pa=new N,Da=new N,La=new N,Ia=new Kt,Ua=new Kt,Na=new Kt;class pn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),Dn.subVectors(n,e),Ca.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(Dn),l=dn.dot(Ca),c=Dn.dot(Dn),u=Dn.dot(Ca),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ia,s.x),a.addScaledVector(Ua,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Dn.subVectors(t,e),dn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),dn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;$i.subVectors(i,n),Ki.subVectors(s,n),Pa.subVectors(t,n);const l=$i.dot(Pa),c=Ki.dot(Pa);if(l<=0&&c<=0)return e.copy(n);Da.subVectors(t,i);const u=$i.dot(Da),h=Ki.dot(Da);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector($i,a);La.subVectors(t,s);const p=$i.dot(La),g=Ki.dot(La);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ki,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Mc.subVectors(s,i),o=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(Mc,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector($i,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function Fa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=ld(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Fa(a,s,t+1/3),this.g=Fa(a,s,t),this.b=Fa(a,s,t-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(t,e=rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Vt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Le(Te.r*255,0,255))*65536+Math.round(Le(Te.g*255,0,255))*256+Math.round(Le(Te.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,s=Te.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=rn){Vt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(gs);const n=xa(Kn.h,gs.h,e),i=xa(Kn.s,gs.s,e),s=xa(Kn.l,gs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Gt;Gt.NAMES=ju;let bd=0;class Rr extends wr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ns(),this.name="",this.blending=lr,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zu extends Rr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new N,vs=new Ut;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class Ju extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qu extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ad=0;const en=new ie,Oa=new Ce,ji=new N,He=new rs,Fr=new rs,xe=new N;class Je extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?Qu:Ju)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(He.min,Fr.min),He.expandByPoint(xe),xe.addVectors(He.max,Fr.max),He.expandByPoint(xe)):(He.expandByPoint(Fr.min),He.expandByPoint(Fr.max))}He.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xe.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(t,c),xe.add(ji)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new N,l[w]=new N;const c=new N,u=new N,h=new N,f=new Ut,p=new Ut,g=new Ut,_=new N,m=new N;function d(w,x,M){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[w].add(_),o[x].add(_),o[M].add(_),l[w].add(m),l[x].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let w=0,x=S.length;w<x;++w){const M=S[w],P=M.start,O=M.count;for(let F=P,H=P+O;F<H;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new N,v=new N,C=new N,A=new N;function b(w){C.fromBufferAttribute(i,w),A.copy(C);const x=o[w];y.copy(x),y.sub(C.multiplyScalar(C.dot(x))).normalize(),v.crossVectors(A,x);const P=v.dot(l[w])<0?-1:1;a.setXYZW(w,y.x,y.y,y.z,P)}for(let w=0,x=S.length;w<x;++w){const M=S[w],P=M.start,O=M.count;for(let F=P,H=P+O;F<H;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new on(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new ie,vi=new vl,xs=new ra,yc=new N,Ms=new N,Ss=new N,ys=new N,Ba=new N,Es=new N,Ec=new N,Ts=new N;class me extends Ce{constructor(t=new Je,e=new Zu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ba.fromBufferAttribute(h,t),a?Es.addScaledVector(Ba,u):Es.addScaledVector(Ba.sub(e),u))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(xs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(xs,yc)===null||vi.origin.distanceToSquared(yc)>(t.far-t.near)**2))&&(Sc.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,C=y;v<C;v+=3){const A=o.getX(v),b=o.getX(v+1),w=o.getX(v+2);i=bs(this,d,t,n,c,u,h,A,b,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=bs(this,a,t,n,c,u,h,S,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,C=y;v<C;v+=3){const A=v,b=v+1,w=v+2;i=bs(this,d,t,n,c,u,h,A,b,w),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,y=m+1,v=m+2;i=bs(this,a,t,n,c,u,h,S,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wd(r,t,e,n,i,s,a,o){let l;if(t.side===Ue?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===li,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ts);return c<e.near||c>e.far?null:{distance:c,point:Ts.clone(),object:r}}function bs(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ms),r.getVertexPosition(l,Ss),r.getVertexPosition(c,ys);const u=wd(r,t,e,n,Ms,Ss,ys,Ec);if(u){const h=new N;pn.getBarycoord(Ec,Ms,Ss,ys,h),i&&(u.uv=pn.getInterpolatedAttribute(i,o,l,c,h,new Ut)),s&&(u.uv1=pn.getInterpolatedAttribute(s,o,l,c,h,new Ut)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};pn.getNormal(Ms,Ss,ys,f.normal),u.face=f,u.barycoord=h}return u}class ln extends Je{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(_,m,d,S,y,v,C,A,b,w,x){const M=v/b,P=C/w,O=v/2,F=C/2,H=A/2,X=b+1,G=w+1;let Y=0,V=0;const et=new N;for(let at=0;at<G;at++){const dt=at*P-F;for(let Tt=0;Tt<X;Tt++){const Wt=Tt*M-O;et[_]=Wt*S,et[m]=dt*y,et[d]=H,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=A>0?1:-1,u.push(et.x,et.y,et.z),h.push(Tt/b),h.push(1-at/w),Y+=1}}for(let at=0;at<w;at++)for(let dt=0;dt<b;dt++){const Tt=f+dt+X*at,Wt=f+dt+X*(at+1),q=f+(dt+1)+X*(at+1),J=f+(dt+1)+X*at;l.push(Tt,Wt,J),l.push(Wt,q,J),V+=6}o.addGroup(p,V,x),p+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(r){const t={};for(let e=0;e<r.length;e++){const n=xr(r[e]);for(const i in n)t[i]=n[i]}return t}function Rd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function th(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const Cd={clone:xr,merge:we};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Rr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new N,Tc=new Ut,bc=new Ut;class Xe extends eh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Tc,bc),e.subVectors(bc,Tc)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(va*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class Ld extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(Zi,Ji,t,e);i.layers=this.layers,this.add(i);const s=new Xe(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const a=new Xe(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const o=new Xe(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const l=new Xe(Zi,Ji,t,e);l.layers=this.layers,this.add(l);const c=new Xe(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nh extends Ne{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:mr,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Id extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ln(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:ii});s.uniforms.tEquirect.value=e;const a=new me(i,s),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=yn),new Ld(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const za=new N,Ud=new N,Nd=new Pt;class Ti{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=za.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),i=this.coplanarPoint(za).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new ra,As=new N;class Ml{constructor(t=new Ti,e=new Ti,n=new Ti,i=new Ti,s=new Ti,a=new Ti){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],S=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-p,v-d).normalize(),n[1].setComponents(l+s,f+c,m+p,v+d).normalize(),n[2].setComponents(l+a,f+u,m+g,v+S).normalize(),n[3].setComponents(l-a,f-u,m-g,v-S).normalize(),n[4].setComponents(l-o,f-h,m-_,v-y).normalize(),e===Bn)n[5].setComponents(l+o,f+h,m+_,v+y).normalize();else if(e===Ys)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(As.x=i.normal.x>0?t.max.x:t.min.x,As.y=i.normal.y>0?t.max.y:t.min.y,As.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Fd(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class sa extends Je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const S=d*f-a;for(let y=0;y<c;y++){const v=y*h-s;g.push(v,-S,0),_.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const y=S+c*d,v=S+c*(d+1),C=S+1+c*(d+1),A=S+1+c*d;p.push(y,v,A),p.push(v,C,A)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Vd,alphatest_pars_fragment:Gd,aomap_fragment:Hd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:Kd,iridescence_fragment:jd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:rp,color_vertex:sp,common:ap,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:up,emissivemap_fragment:hp,emissivemap_pars_fragment:fp,colorspace_fragment:dp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:_p,envmap_pars_fragment:gp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:yp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:bp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:wp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Up,lights_physical_pars_fragment:Np,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Hp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Kp,morphcolor_vertex:jp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Qp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:rm,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:um,packing:hm,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:xm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:ym,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:bm,specularmap_fragment:Am,specularmap_pars_fragment:wm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Dm,uv_pars_fragment:Lm,uv_pars_vertex:Im,uv_vertex:Um,worldpos_vertex:Nm,background_vert:Fm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:zm,cube_vert:km,cube_frag:Vm,depth_vert:Gm,depth_frag:Hm,distanceRGBA_vert:Wm,distanceRGBA_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:$m,linedashed_frag:Km,meshbasic_vert:jm,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:Qm,meshmatcap_vert:t_,meshmatcap_frag:e_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:r_,meshphong_frag:s_,meshphysical_vert:a_,meshphysical_frag:o_,meshtoon_vert:l_,meshtoon_frag:c_,points_vert:u_,points_frag:h_,shadow_vert:f_,shadow_frag:d_,sprite_vert:p_,sprite_frag:m_},nt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Mn={basic:{uniforms:we([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:we([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:we([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:we([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:we([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:we([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:we([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:we([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:we([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:we([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:we([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:we([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:we([nt.lights,nt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Mn.physical={uniforms:we([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const ws={r:0,b:0,g:0},Mi=new Tn,__=new ie;function g_(r,t,e,n,i,s,a){const o=new Gt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const v=g(S);v===null?d(o,l):v&&v.isColor&&(d(v,1),y=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===na)?(u===void 0&&(u=new me(new ln(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:xr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Mi.copy(y.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(Mi)),u.material.toneMapped=Vt.getTransfer(v.colorSpace)!==$t,(h!==v||f!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new me(new sa(2,2),new ci({name:"BackgroundMaterial",uniforms:xr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(v.colorSpace)!==$t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,y){S.getRGB(ws,th(r)),n.buffers.color.setClear(ws.r,ws.g,ws.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:_,addToRenderList:m}}function v_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(M,P,O,F,H){let X=!1;const G=h(F,O,P);s!==G&&(s=G,c(s.object)),X=p(M,F,O,H),X&&g(M,F,O,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(M,P,O,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,P,O){const F=O.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let X=H[P.id];X===void 0&&(X={},H[P.id]=X);let G=X[F];return G===void 0&&(G=f(l()),X[F]=G),G}function f(M){const P=[],O=[],F=[];for(let H=0;H<e;H++)P[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,P,O,F){const H=s.attributes,X=P.attributes;let G=0;const Y=O.getAttributes();for(const V in Y)if(Y[V].location>=0){const at=H[V];let dt=X[V];if(dt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(M,P,O,F){const H={},X=P.attributes;let G=0;const Y=O.getAttributes();for(const V in Y)if(Y[V].location>=0){let at=X[V];at===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),H[V]=dt,G++}s.attributes=H,s.attributesNum=G,s.index=F}function _(){const M=s.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){d(M,0)}function d(M,P){const O=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;O[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),H[M]!==P&&(r.vertexAttribDivisor(M,P),H[M]=P)}function S(){const M=s.newAttributes,P=s.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==M[O]&&(r.disableVertexAttribArray(O),P[O]=0)}function y(M,P,O,F,H,X,G){G===!0?r.vertexAttribIPointer(M,P,O,H,X):r.vertexAttribPointer(M,P,O,F,H,X)}function v(M,P,O,F){_();const H=F.attributes,X=O.getAttributes(),G=P.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let et=H[Y];if(et===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const at=et.normalized,dt=et.itemSize,Tt=t.get(et);if(Tt===void 0)continue;const Wt=Tt.buffer,q=Tt.type,J=Tt.bytesPerElement,gt=q===r.INT||q===r.UNSIGNED_INT||et.gpuType===fl;if(et.isInterleavedBufferAttribute){const rt=et.data,Et=rt.stride,wt=et.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)d(V.location+It,rt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<V.locationSize;It++)m(V.location+It);r.bindBuffer(r.ARRAY_BUFFER,Wt);for(let It=0;It<V.locationSize;It++)y(V.location+It,dt/V.locationSize,q,at,Et*J,(wt+dt/V.locationSize*It)*J,gt)}else{if(et.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)d(V.location+rt,et.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);r.bindBuffer(r.ARRAY_BUFFER,Wt);for(let rt=0;rt<V.locationSize;rt++)y(V.location+rt,dt/V.locationSize,q,at,dt*J,dt/V.locationSize*rt*J,gt)}}else if(G!==void 0){const at=G[Y];if(at!==void 0)switch(at.length){case 2:r.vertexAttrib2fv(V.location,at);break;case 3:r.vertexAttrib3fv(V.location,at);break;case 4:r.vertexAttrib4fv(V.location,at);break;default:r.vertexAttrib1fv(V.location,at)}}}}S()}function C(){w();for(const M in n){const P=n[M];for(const O in P){const F=P[O];for(const H in F)u(F[H].object),delete F[H];delete P[O]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const F=P[O];for(const H in F)u(F[H].object),delete F[H];delete P[O]}delete n[M.id]}function b(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const F=O[M.id];for(const H in F)u(F[H].object),delete F[H];delete O[M.id]}}function w(){x(),a=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function x_(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function M_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==mn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const w=b===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==kn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==On&&!w)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function S_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ti,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,y=S*4;let v=d.clippingState||null;l.value=v,v=u(g,f,y,p);for(let C=0;C!==y;++C)v[C]=e[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function y_(r){let t=new WeakMap;function e(a,o){return o===_o?a.mapping=mr:o===go&&(a.mapping=_r),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===go)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Id(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class E_ extends eh{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const rr=4,Ac=[.125,.215,.35,.446,.526,.582],Ri=20,ka=new E_,wc=new Gt;let Va=null,Ga=0,Ha=0,Wa=!1;const bi=(1+Math.sqrt(5))/2,Qi=1/bi,Rc=[new N(-bi,Qi,0),new N(bi,Qi,0),new N(-Qi,0,bi),new N(Qi,0,bi),new N(0,bi,-Qi),new N(0,bi,Qi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Va,Ga,Ha),this._renderer.xr.enabled=Wa,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Va=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:es,format:mn,colorSpace:Ar,depthBuffer:!1},i=Pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(s)),this._blurMaterial=b_(s,t,e)}return i}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,i){const o=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wc),u.toneMapping=ri,u.autoClear=!1;const p=new Zu({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new me(new ln,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(wc),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;Rs(i,S*y,d>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===mr||t.mapping===_r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Rc[(i-s-1)%Rc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new me(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const d=[];let S=0;for(let b=0;b<Ri;++b){const w=b/_,x=Math.exp(-w*w/2);d.push(x),b===0?S+=x:b<m&&(S+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[i],C=3*v*(i>y-rr?i-y+rr:0),A=4*(this._cubeSize-v);Rs(e,C,A,3*v,2*v),l.setRenderTarget(e),l.render(h,ka)}}function T_(r){const t=[],e=[],n=[];let i=r;const s=r-rr+1+Ac.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-rr?l=Ac[a-r+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,w=A>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];S.set(x,_*g*A),y.set(f,m*g*A);const M=[A,A,A,A,A,A];v.set(M,d*g*A)}const C=new Je;C.setAttribute("position",new on(S,_)),C.setAttribute("uv",new on(y,m)),C.setAttribute("faceIndex",new on(v,d)),t.push(C),i>rr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pc(r,t,e){const n=new Oi(r,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function b_(r,t,e){const n=new Float32Array(Ri),i=new N(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Dc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Lc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===go,u=l===mr||l===_r;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Cc(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new Cc(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function w_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&zr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function R_(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let y=0,v=S.length;y<v;y+=3){const C=S[y+0],A=S[y+1],b=S[y+2];f.push(C,A,A,b,b,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const C=y+0,A=y+1,b=y+2;f.push(C,A,A,b,b,C)}}else return;const m=new(Yu(f)?Qu:Ju)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function C_(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*_[S];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function P_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function D_(r,t,e){const n=new WeakMap,i=new Kt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=o.attributes.position.count*v,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*A*4*h),w=new Ku(b,C,A,h);w.type=On,w.needsUpdate=!0;const x=v*4;for(let P=0;P<h;P++){const O=d[P],F=S[P],H=y[P],X=C*A*4*P;for(let G=0;G<O.count;G++){const Y=G*x;g===!0&&(i.fromBufferAttribute(O,G),b[X+Y+0]=i.x,b[X+Y+1]=i.y,b[X+Y+2]=i.z,b[X+Y+3]=0),_===!0&&(i.fromBufferAttribute(F,G),b[X+Y+4]=i.x,b[X+Y+5]=i.y,b[X+Y+6]=i.z,b[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(H,G),b[X+Y+8]=i.x,b[X+Y+9]=i.y,b[X+Y+10]=i.z,b[X+Y+11]=H.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new Ut(C,A)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function L_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class rh extends Ne{constructor(t,e,n,i,s,a,o,l,c,u=cr){if(u!==cr&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cr&&(n=Fi),n===void 0&&u===vr&&(n=gr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sh=new Ne,Ic=new rh(1,1),ah=new Ku,oh=new gd,lh=new nh,Uc=[],Nc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Bc=new Float32Array(4);function Cr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Uc[i];if(s===void 0&&(s=new Float32Array(i),Uc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function aa(r,t){let e=Nc[t];e===void 0&&(e=new Int32Array(t),Nc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function I_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function U_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function N_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function F_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function O_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Bc.set(n),r.uniformMatrix2fv(this.addr,!1,Bc),ve(e,n)}}function B_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Oc.set(n),r.uniformMatrix3fv(this.addr,!1,Oc),ve(e,n)}}function z_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Fc.set(n),r.uniformMatrix4fv(this.addr,!1,Fc),ve(e,n)}}function k_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function V_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),ve(e,t)}}function G_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),ve(e,t)}}function H_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),ve(e,t)}}function W_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function X_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),ve(e,t)}}function q_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),ve(e,t)}}function Y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),ve(e,t)}}function $_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ic.compareFunction=qu,s=Ic):s=sh,e.setTexture2D(t||s,i)}function K_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||oh,i)}function j_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lh,i)}function Z_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ah,i)}function J_(r){switch(r){case 5126:return I_;case 35664:return U_;case 35665:return N_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Z_}}function Q_(r,t){r.uniform1fv(this.addr,t)}function tg(r,t){const e=Cr(t,this.size,2);r.uniform2fv(this.addr,e)}function eg(r,t){const e=Cr(t,this.size,3);r.uniform3fv(this.addr,e)}function ng(r,t){const e=Cr(t,this.size,4);r.uniform4fv(this.addr,e)}function ig(r,t){const e=Cr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function rg(r,t){const e=Cr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function sg(r,t){const e=Cr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ag(r,t){r.uniform1iv(this.addr,t)}function og(r,t){r.uniform2iv(this.addr,t)}function lg(r,t){r.uniform3iv(this.addr,t)}function cg(r,t){r.uniform4iv(this.addr,t)}function ug(r,t){r.uniform1uiv(this.addr,t)}function hg(r,t){r.uniform2uiv(this.addr,t)}function fg(r,t){r.uniform3uiv(this.addr,t)}function dg(r,t){r.uniform4uiv(this.addr,t)}function pg(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||sh,s[a])}function mg(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||oh,s[a])}function _g(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||lh,s[a])}function gg(r,t,e){const n=this.cache,i=t.length,s=aa(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ah,s[a])}function vg(r){switch(r){case 5126:return Q_;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return hg;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return gg}}class xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J_(e.type)}}class Mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}}class Sg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function zc(r,t){r.seq.push(t),r.map[t.id]=t}function yg(r,t,e){const n=r.name,i=n.length;for(Xa.lastIndex=0;;){const s=Xa.exec(n),a=Xa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){zc(e,c===void 0?new xg(o,r,t):new Mg(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new Sg(o),zc(e,h)),e=h}}}class Vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);yg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function kc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Eg=37297;let Tg=0;function bg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vc=new Pt;function Ag(r){Vt._getMatrix(Vc,Vt.workingColorSpace,r);const t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(r)){case ia:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Gc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+bg(r.getShaderSource(t),a)}else return i}function wg(r,t){const e=Ag(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rg(r,t){let e;switch(t){case Wf:e="Linear";break;case Xf:e="Reinhard";break;case qf:e="Cineon";break;case Yf:e="ACESFilmic";break;case Kf:e="AgX";break;case jf:e="Neutral";break;case $f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cs=new N;function Cg(){Vt.getLuminanceCoefficients(Cs);const r=Cs.x.toFixed(4),t=Cs.y.toFixed(4),e=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Dg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function kr(r){return r!==""}function Hc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(Ig,Ng)}const Ug=new Map;function Ng(r,t){let e=Lt[t];if(e===void 0){const n=Ug.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yo(e)}const Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(r){return r.replace(Fg,Og)}function Og(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Bg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ef?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function zg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mr:case _r:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case _r:t="ENVMAP_MODE_REFRACTION";break}return t}function Vg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Iu:t="ENVMAP_BLENDING_MULTIPLY";break;case Gf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function Gg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Bg(e),c=zg(e),u=kg(e),h=Vg(e),f=Gg(e),p=Pg(e),g=Dg(s),_=i.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),d.length>0&&(d+=`
`)):(m=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),d=[qc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Lt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Yo(a),a=Hc(a,e),a=Wc(a,e),o=Yo(o),o=Hc(o,e),o=Wc(o,e),a=Xc(a),o=Xc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+m+a,v=S+d+o,C=kc(i,i.VERTEX_SHADER,y),A=kc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(A).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,A);else{const Y=Gc(i,C,"vertex"),V=Gc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Y+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(G=!1);G&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:d}})}i.deleteShader(C),i.deleteShader(A),w=new Vs(i,_),x=Lg(i,_)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Eg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Wg=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qg(t),e.set(t,n)),n}}class qg{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}}function Yg(r,t,e,n,i,s,a){const o=new xl,l=new Xg,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,P,O,F){const H=O.fog,X=F.geometry,G=x.isMeshStandardMaterial?O.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),V=Y&&Y.mapping===na?Y.image.height:null,et=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=at!==void 0?at.length:0;let Tt=0;X.morphAttributes.position!==void 0&&(Tt=1),X.morphAttributes.normal!==void 0&&(Tt=2),X.morphAttributes.color!==void 0&&(Tt=3);let Wt,q,J,gt;if(et){const Yt=Mn[et];Wt=Yt.vertexShader,q=Yt.fragmentShader}else Wt=x.vertexShader,q=x.fragmentShader,l.update(x),J=l.getVertexShaderID(x),gt=l.getFragmentShaderID(x);const rt=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),wt=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,se=!!x.map,zt=!!x.matcap,he=!!Y,U=!!x.aoMap,Qe=!!x.lightMap,Ft=!!x.bumpMap,Ot=!!x.normalMap,St=!!x.displacementMap,te=!!x.emissiveMap,Mt=!!x.metalnessMap,R=!!x.roughnessMap,E=x.anisotropy>0,B=x.clearcoat>0,K=x.dispersion>0,Z=x.iridescence>0,$=x.sheen>0,vt=x.transmission>0,st=E&&!!x.anisotropyMap,ut=B&&!!x.clearcoatMap,kt=B&&!!x.clearcoatNormalMap,Q=B&&!!x.clearcoatRoughnessMap,ht=Z&&!!x.iridescenceMap,yt=Z&&!!x.iridescenceThicknessMap,bt=$&&!!x.sheenColorMap,ft=$&&!!x.sheenRoughnessMap,Bt=!!x.specularMap,Dt=!!x.specularColorMap,Jt=!!x.specularIntensityMap,D=vt&&!!x.transmissionMap,it=vt&&!!x.thicknessMap,W=!!x.gradientMap,j=!!x.alphaMap,ct=x.alphaTest>0,ot=!!x.alphaHash,Rt=!!x.extensions;let ce=ri;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ce=r.toneMapping);const ye={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Wt,fragmentShader:q,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:wt,instancingColor:wt&&F.instanceColor!==null,instancingMorph:wt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ar,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:zt,envMap:he,envMapMode:he&&Y.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Qe,bumpMap:Ft,normalMap:Ot,displacementMap:f&&St,emissiveMap:te,normalMapObjectSpace:Ot&&x.normalMapType===td,normalMapTangentSpace:Ot&&x.normalMapType===Xu,metalnessMap:Mt,roughnessMap:R,anisotropy:E,anisotropyMap:st,clearcoat:B,clearcoatMap:ut,clearcoatNormalMap:kt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:ht,iridescenceThicknessMap:yt,sheen:$,sheenColorMap:bt,sheenRoughnessMap:ft,specularMap:Bt,specularColorMap:Dt,specularIntensityMap:Jt,transmission:vt,transmissionMap:D,thicknessMap:it,gradientMap:W,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ot,combine:x.combine,mapUv:se&&_(x.map.channel),aoMapUv:U&&_(x.aoMap.channel),lightMapUv:Qe&&_(x.lightMap.channel),bumpMapUv:Ft&&_(x.bumpMap.channel),normalMapUv:Ot&&_(x.normalMap.channel),displacementMapUv:St&&_(x.displacementMap.channel),emissiveMapUv:te&&_(x.emissiveMap.channel),metalnessMapUv:Mt&&_(x.metalnessMap.channel),roughnessMapUv:R&&_(x.roughnessMap.channel),anisotropyMapUv:st&&_(x.anisotropyMap.channel),clearcoatMapUv:ut&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:kt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&_(x.sheenRoughnessMap.channel),specularMapUv:Bt&&_(x.specularMap.channel),specularColorMapUv:Dt&&_(x.specularColorMap.channel),specularIntensityMapUv:Jt&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:it&&_(x.thicknessMap.channel),alphaMapUv:j&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ot||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(se||j),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&Vt.getTransfer(x.map.colorSpace)===$t,decodeVideoTextureEmissive:te&&x.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(x.emissiveMap.colorSpace)===$t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fn,flipSided:x.side===Ue,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&x.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function d(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(S(M,x),y(M,x),M.push(r.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const M=g[x.type];let P;if(M){const O=Mn[M];P=Cd.clone(O.uniforms)}else P=x.uniforms;return P}function C(x,M){let P;for(let O=0,F=u.length;O<F;O++){const H=u[O];if(H.cacheKey===M){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Hg(r,M,x,s),u.push(P)),P}function A(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function b(x){l.remove(x)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:w}}function $g(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Kg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $c(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Kg),n.length>1&&n.sort(f||Yc),i.length>1&&i.sort(f||Yc)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function jg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new $c,r.set(n,[a])):i>=s.length?(a=new $c,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Zg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function Jg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Qg=0;function t0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function e0(r){const t=new Zg,e=Jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new ie,a=new ie;function o(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,S=0,y=0,v=0,C=0,A=0,b=0;c.sort(t0);for(let x=0,M=c.length;x<M;x++){const P=c[x],O=P.color,F=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=O.r*F,h+=O.g*F,f+=O.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);b++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(O).multiplyScalar(F),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const Y=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(O).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Y=P.shadow,V=e.get(P);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[d]=G,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==_||w.rectAreaLength!==m||w.hemiLength!==d||w.numDirectionalShadows!==S||w.numPointShadows!==y||w.numSpotShadows!==v||w.numSpotMaps!==C||w.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,w.directionalLength=p,w.pointLength=g,w.spotLength=_,w.rectAreaLength=m,w.hemiLength=d,w.numDirectionalShadows=S,w.numPointShadows=y,w.numSpotShadows=v,w.numSpotMaps=C,w.numLightProbes=b,n.version=Qg++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const y=c[d];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Kc(r){const t=new e0(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function n0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Kc(r),t.set(i,[o])):s>=a.length?(o=new Kc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class i0 extends Rr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class r0 extends Rr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o0(r,t,e){let n=new Ml;const i=new Ut,s=new Ut,a=new Kt,o=new i0({depthPacking:Qf}),l=new r0,c={},u=e.maxTextureSize,h={[li]:Ue,[Ue]:li,[Fn]:Fn},f=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:s0,fragmentShader:a0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let d=this.type;this.render=function(A,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),O=r.state;O.setBlending(ii),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=d!==In&&this.type===In,H=d===In&&this.type!==In;for(let X=0,G=A.length;X<G;X++){const Y=A[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const et=V.getFrameExtents();if(i.multiply(et),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/et.x),i.x=s.x*et.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/et.y),i.y=s.y*et.y,V.mapSize.y=s.y)),V.map===null||F===!0||H===!0){const dt=this.type!==In?{minFilter:_n,magFilter:_n}:{};V.map!==null&&V.map.dispose(),V.map=new Oi(i.x,i.y,dt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const at=V.getViewportCount();for(let dt=0;dt<at;dt++){const Tt=V.getViewport(dt);a.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),O.viewport(a),V.updateMatrices(Y,dt),n=V.getFrustum(),v(b,w,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===In&&S(V,w),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(x,M,P)};function S(A,b){const w=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,w,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,w,p,_,null)}function y(A,b,w,x){let M=null;const P=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=w.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=M.uuid,F=b.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let X=H[F];X===void 0&&(X=M.clone(),H[F]=X,b.addEventListener("dispose",C)),M=X}if(M.visible=b.visible,M.wireframe=b.wireframe,x===In?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=r.properties.get(M);O.light=w}return M}function v(A,b,w,x,M){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const F=t.update(A),H=A.material;if(Array.isArray(H)){const X=F.groups;for(let G=0,Y=X.length;G<Y;G++){const V=X[G],et=H[V.materialIndex];if(et&&et.visible){const at=y(A,et,x,M);A.onBeforeShadow(r,A,b,w,F,at,V),r.renderBufferDirect(w,null,F,at,A,V),A.onAfterShadow(r,A,b,w,F,at,V)}}}else if(H.visible){const X=y(A,H,x,M);A.onBeforeShadow(r,A,b,w,F,X,null),r.renderBufferDirect(w,null,F,X,A,null),A.onAfterShadow(r,A,b,w,F,X,null)}}const O=A.children;for(let F=0,H=O.length;F<H;F++)v(O[F],b,w,x,M)}function C(A){A.target.removeEventListener("dispose",C);for(const w in c){const x=c[w],M=A.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const l0={[lo]:co,[uo]:po,[ho]:mo,[pr]:fo,[co]:lo,[po]:uo,[mo]:ho,[fo]:pr};function c0(r,t){function e(){let D=!1;const it=new Kt;let W=null;const j=new Kt(0,0,0,0);return{setMask:function(ct){W!==ct&&!D&&(r.colorMask(ct,ct,ct,ct),W=ct)},setLocked:function(ct){D=ct},setClear:function(ct,ot,Rt,ce,ye){ye===!0&&(ct*=ce,ot*=ce,Rt*=ce),it.set(ct,ot,Rt,ce),j.equals(it)===!1&&(r.clearColor(ct,ot,Rt,ce),j.copy(it))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,W=null,j=null,ct=null;return{setReversed:function(ot){if(it!==ot){const Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ct;ct=null,this.setClear(ce)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(ot){W!==ot&&!D&&(r.depthMask(ot),W=ot)},setFunc:function(ot){if(it&&(ot=l0[ot]),j!==ot){switch(ot){case lo:r.depthFunc(r.NEVER);break;case co:r.depthFunc(r.ALWAYS);break;case uo:r.depthFunc(r.LESS);break;case pr:r.depthFunc(r.LEQUAL);break;case ho:r.depthFunc(r.EQUAL);break;case fo:r.depthFunc(r.GEQUAL);break;case po:r.depthFunc(r.GREATER);break;case mo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),r.clearDepth(ot),ct=ot)},reset:function(){D=!1,W=null,j=null,ct=null,it=!1}}}function i(){let D=!1,it=null,W=null,j=null,ct=null,ot=null,Rt=null,ce=null,ye=null;return{setTest:function(Yt){D||(Yt?rt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(Yt){it!==Yt&&!D&&(r.stencilMask(Yt),it=Yt)},setFunc:function(Yt,cn,An){(W!==Yt||j!==cn||ct!==An)&&(r.stencilFunc(Yt,cn,An),W=Yt,j=cn,ct=An)},setOp:function(Yt,cn,An){(ot!==Yt||Rt!==cn||ce!==An)&&(r.stencilOp(Yt,cn,An),ot=Yt,Rt=cn,ce=An)},setLocked:function(Yt){D=Yt},setClear:function(Yt){ye!==Yt&&(r.clearStencil(Yt),ye=Yt)},reset:function(){D=!1,it=null,W=null,j=null,ct=null,ot=null,Rt=null,ce=null,ye=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,y=null,v=null,C=null,A=null,b=new Gt(0,0,0),w=0,x=!1,M=null,P=null,O=null,F=null,H=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Y>=2);let et=null,at={};const dt=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),Wt=new Kt().fromArray(dt),q=new Kt().fromArray(Tt);function J(D,it,W,j){const ct=new Uint8Array(4),ot=r.createTexture();r.bindTexture(D,ot),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<W;Rt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(it+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return ot}const gt={};gt[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),gt[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),gt[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(r.DEPTH_TEST),a.setFunc(pr),Ft(!1),Ot(tc),rt(r.CULL_FACE),U(ii);function rt(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Et(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function wt(D,it){return h[D]!==it?(r.bindFramebuffer(D,it),h[D]=it,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=it),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=it),!0):!1}function It(D,it){let W=p,j=!1;if(D){W=f.get(it),W===void 0&&(W=[],f.set(it,W));const ct=D.textures;if(W.length!==ct.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ot=0,Rt=ct.length;ot<Rt;ot++)W[ot]=r.COLOR_ATTACHMENT0+ot;W.length=ct.length,j=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,j=!0);j&&r.drawBuffers(W)}function se(D){return g!==D?(r.useProgram(D),g=D,!0):!1}const zt={[wi]:r.FUNC_ADD,[bf]:r.FUNC_SUBTRACT,[Af]:r.FUNC_REVERSE_SUBTRACT};zt[wf]=r.MIN,zt[Rf]=r.MAX;const he={[Cf]:r.ZERO,[Pf]:r.ONE,[Df]:r.SRC_COLOR,[ao]:r.SRC_ALPHA,[Of]:r.SRC_ALPHA_SATURATE,[Nf]:r.DST_COLOR,[If]:r.DST_ALPHA,[Lf]:r.ONE_MINUS_SRC_COLOR,[oo]:r.ONE_MINUS_SRC_ALPHA,[Ff]:r.ONE_MINUS_DST_COLOR,[Uf]:r.ONE_MINUS_DST_ALPHA,[Bf]:r.CONSTANT_COLOR,[zf]:r.ONE_MINUS_CONSTANT_COLOR,[kf]:r.CONSTANT_ALPHA,[Vf]:r.ONE_MINUS_CONSTANT_ALPHA};function U(D,it,W,j,ct,ot,Rt,ce,ye,Yt){if(D===ii){_===!0&&(Et(r.BLEND),_=!1);return}if(_===!1&&(rt(r.BLEND),_=!0),D!==Tf){if(D!==m||Yt!==x){if((d!==wi||v!==wi)&&(r.blendEquation(r.FUNC_ADD),d=wi,v=wi),Yt)switch(D){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case so:r.blendFunc(r.ONE,r.ONE);break;case ec:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case so:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ec:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,C=null,A=null,b.set(0,0,0),w=0,m=D,x=Yt}return}ct=ct||it,ot=ot||W,Rt=Rt||j,(it!==d||ct!==v)&&(r.blendEquationSeparate(zt[it],zt[ct]),d=it,v=ct),(W!==S||j!==y||ot!==C||Rt!==A)&&(r.blendFuncSeparate(he[W],he[j],he[ot],he[Rt]),S=W,y=j,C=ot,A=Rt),(ce.equals(b)===!1||ye!==w)&&(r.blendColor(ce.r,ce.g,ce.b,ye),b.copy(ce),w=ye),m=D,x=!1}function Qe(D,it){D.side===Fn?Et(r.CULL_FACE):rt(r.CULL_FACE);let W=D.side===Ue;it&&(W=!W),Ft(W),D.blending===lr&&D.transparent===!1?U(ii):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function Ot(D){D!==Sf?(rt(r.CULL_FACE),D!==P&&(D===tc?r.cullFace(r.BACK):D===yf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=D}function St(D){D!==O&&(G&&r.lineWidth(D),O=D)}function te(D,it,W){D?(rt(r.POLYGON_OFFSET_FILL),(F!==it||H!==W)&&(r.polygonOffset(it,W),F=it,H=W)):Et(r.POLYGON_OFFSET_FILL)}function Mt(D){D?rt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+X-1),et!==D&&(r.activeTexture(D),et=D)}function E(D,it,W){W===void 0&&(et===null?W=r.TEXTURE0+X-1:W=et);let j=at[W];j===void 0&&(j={type:void 0,texture:void 0},at[W]=j),(j.type!==D||j.texture!==it)&&(et!==W&&(r.activeTexture(W),et=W),r.bindTexture(D,it||gt[D]),j.type=D,j.texture=it)}function B(){const D=at[et];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(D){Wt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Wt.copy(D))}function ft(D){q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Bt(D,it){let W=c.get(it);W===void 0&&(W=new WeakMap,c.set(it,W));let j=W.get(D);j===void 0&&(j=r.getUniformBlockIndex(it,D.name),W.set(D,j))}function Dt(D,it){const j=c.get(it).get(D);l.get(it)!==j&&(r.uniformBlockBinding(it,j,D.__bindingPointIndex),l.set(it,j))}function Jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},et=null,at={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,y=null,v=null,C=null,A=null,b=new Gt(0,0,0),w=0,x=!1,M=null,P=null,O=null,F=null,H=null,Wt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:rt,disable:Et,bindFramebuffer:wt,drawBuffers:It,useProgram:se,setBlending:U,setMaterial:Qe,setFlipSided:Ft,setCullFace:Ot,setLineWidth:St,setPolygonOffset:te,setScissorTest:Mt,activeTexture:R,bindTexture:E,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ht,texImage3D:yt,updateUBOMapping:Bt,uniformBlockBinding:Dt,texStorage2D:kt,texStorage3D:Q,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:st,compressedTexSubImage3D:ut,scissor:bt,viewport:ft,reset:Jt}}function jc(r,t,e,n){const i=u0(n);switch(e){case Bu:return r*t;case ku:return r*t;case Vu:return r*t*2;case Gu:return r*t/i.components*i.byteLength;case ml:return r*t/i.components*i.byteLength;case Hu:return r*t*2/i.components*i.byteLength;case _l:return r*t*2/i.components*i.byteLength;case zu:return r*t*3/i.components*i.byteLength;case mn:return r*t*4/i.components*i.byteLength;case gl:return r*t*4/i.components*i.byteLength;case Fs:case Os:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(r,16)*Math.max(t,8)/4;case Mo:case yo:return Math.max(r,8)*Math.max(t,8)/2;case To:case bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Do:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ks:case Vo:case Go:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wu:case Ho:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wo:case Xo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u0(r){switch(r){case kn:case Nu:return{byteLength:1,components:1};case Yr:case Fu:case es:return{byteLength:2,components:1};case dl:case pl:return{byteLength:2,components:4};case Fi:case fl:case On:return{byteLength:4,components:1};case Ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function h0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return p?new OffscreenCanvas(R,E):$s("canvas")}function _(R,E,B){let K=1;const Z=Mt(R);if((Z.width>B||Z.height>B)&&(K=B/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(K*Z.width),vt=Math.floor(K*Z.height);h===void 0&&(h=g($,vt));const st=E?g($,vt):h;return st.width=$,st.height=vt,st.getContext("2d").drawImage(R,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+vt+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,E,B,K,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),E===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),E===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),E===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),E===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),E===r.RGBA){const vt=Z?ia:Vt.getTransfer(K);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=vt===$t?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(R,E){let B;return R?E===null||E===Fi||E===gr?B=r.DEPTH24_STENCIL8:E===On?B=r.DEPTH32F_STENCIL8:E===Yr&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Fi||E===gr?B=r.DEPTH_COMPONENT24:E===On?B=r.DEPTH_COMPONENT32F:E===Yr&&(B=r.DEPTH_COMPONENT16),B}function C(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),w(E),E.isVideoTexture&&u.delete(E)}function b(R){const E=R.target;E.removeEventListener("dispose",b),M(E)}function w(R){const E=n.get(R);if(E.__webglInit===void 0)return;const B=R.source,K=f.get(B);if(K){const Z=K[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(R),Object.keys(K).length===0&&f.delete(B)}n.remove(R)}function x(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const B=R.source,K=f.get(B);delete K[E.__cacheKey],a.memory.textures--}function M(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let Z=0;Z<E.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)r.deleteFramebuffer(E.__webglFramebuffer[K]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=R.textures;for(let K=0,Z=B.length;K<Z;K++){const $=n.get(B[K]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(R)}let P=0;function O(){P=0}function F(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function H(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const B=n.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,E);return}}e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+E)}function G(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+E)}function Y(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,E);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+E)}function V(R,E){const B=n.get(R);if(R.version>0&&B.__version!==R.version){J(B,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+E)}const et={[vo]:r.REPEAT,[Ci]:r.CLAMP_TO_EDGE,[xo]:r.MIRRORED_REPEAT},at={[_n]:r.NEAREST,[Zf]:r.NEAREST_MIPMAP_NEAREST,[cs]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[ga]:r.LINEAR_MIPMAP_NEAREST,[Pi]:r.LINEAR_MIPMAP_LINEAR},dt={[ed]:r.NEVER,[od]:r.ALWAYS,[nd]:r.LESS,[qu]:r.LEQUAL,[id]:r.EQUAL,[ad]:r.GEQUAL,[rd]:r.GREATER,[sd]:r.NOTEQUAL};function Tt(R,E){if(E.type===On&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===ga||E.magFilter===cs||E.magFilter===Pi||E.minFilter===yn||E.minFilter===ga||E.minFilter===cs||E.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,et[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,et[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,et[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===_n||E.minFilter!==cs&&E.minFilter!==Pi||E.type===On&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Wt(R,E){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const K=E.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const $=H(E);if($!==R.__cacheKey){Z[$]===void 0&&(Z[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[$].usedTimes++;const vt=Z[R.__cacheKey];vt!==void 0&&(Z[R.__cacheKey].usedTimes--,vt.usedTimes===0&&x(E)),R.__cacheKey=$,R.__webglTexture=Z[$].texture}return B}function q(R,E,B){let K=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=r.TEXTURE_3D);const Z=Wt(R,E),$=E.source;e.bindTexture(K,R.__webglTexture,r.TEXTURE0+B);const vt=n.get($);if($.version!==vt.__version||Z===!0){e.activeTexture(r.TEXTURE0+B);const st=Vt.getPrimaries(Vt.workingColorSpace),ut=E.colorSpace===Jn?null:Vt.getPrimaries(E.colorSpace),kt=E.colorSpace===Jn||st===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let Q=_(E.image,!1,i.maxTextureSize);Q=te(E,Q);const ht=s.convert(E.format,E.colorSpace),yt=s.convert(E.type);let bt=y(E.internalFormat,ht,yt,E.colorSpace,E.isVideoTexture);Tt(K,E);let ft;const Bt=E.mipmaps,Dt=E.isVideoTexture!==!0,Jt=vt.__version===void 0||Z===!0,D=$.dataReady,it=C(E,Q);if(E.isDepthTexture)bt=v(E.format===vr,E.type),Jt&&(Dt?e.texStorage2D(r.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,ht,yt,null));else if(E.isDataTexture)if(Bt.length>0){Dt&&Jt&&e.texStorage2D(r.TEXTURE_2D,it,bt,Bt[0].width,Bt[0].height);for(let W=0,j=Bt.length;W<j;W++)ft=Bt[W],Dt?D&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,ft.width,ft.height,ht,yt,ft.data):e.texImage2D(r.TEXTURE_2D,W,bt,ft.width,ft.height,0,ht,yt,ft.data);E.generateMipmaps=!1}else Dt?(Jt&&e.texStorage2D(r.TEXTURE_2D,it,bt,Q.width,Q.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ht,yt,Q.data)):e.texImage2D(r.TEXTURE_2D,0,bt,Q.width,Q.height,0,ht,yt,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Dt&&Jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,Bt[0].width,Bt[0].height,Q.depth);for(let W=0,j=Bt.length;W<j;W++)if(ft=Bt[W],E.format!==mn)if(ht!==null)if(Dt){if(D)if(E.layerUpdates.size>0){const ct=jc(ft.width,ft.height,E.format,E.type);for(const ot of E.layerUpdates){const Rt=ft.data.subarray(ot*ct/ft.data.BYTES_PER_ELEMENT,(ot+1)*ct/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,ot,ft.width,ft.height,1,ht,Rt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,Q.depth,ht,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,bt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,ft.width,ft.height,Q.depth,ht,yt,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,bt,ft.width,ft.height,Q.depth,0,ht,yt,ft.data)}else{Dt&&Jt&&e.texStorage2D(r.TEXTURE_2D,it,bt,Bt[0].width,Bt[0].height);for(let W=0,j=Bt.length;W<j;W++)ft=Bt[W],E.format!==mn?ht!==null?Dt?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,ft.width,ft.height,ht,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,W,bt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,ft.width,ft.height,ht,yt,ft.data):e.texImage2D(r.TEXTURE_2D,W,bt,ft.width,ft.height,0,ht,yt,ft.data)}else if(E.isDataArrayTexture)if(Dt){if(Jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,Q.width,Q.height,Q.depth),D)if(E.layerUpdates.size>0){const W=jc(Q.width,Q.height,E.format,E.type);for(const j of E.layerUpdates){const ct=Q.data.subarray(j*W/Q.data.BYTES_PER_ELEMENT,(j+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,ht,yt,ct)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ht,yt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,ht,yt,Q.data);else if(E.isData3DTexture)Dt?(Jt&&e.texStorage3D(r.TEXTURE_3D,it,bt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ht,yt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,ht,yt,Q.data);else if(E.isFramebufferTexture){if(Jt)if(Dt)e.texStorage2D(r.TEXTURE_2D,it,bt,Q.width,Q.height);else{let W=Q.width,j=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(r.TEXTURE_2D,ct,bt,W,j,0,ht,yt,null),W>>=1,j>>=1}}else if(Bt.length>0){if(Dt&&Jt){const W=Mt(Bt[0]);e.texStorage2D(r.TEXTURE_2D,it,bt,W.width,W.height)}for(let W=0,j=Bt.length;W<j;W++)ft=Bt[W],Dt?D&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,ht,yt,ft):e.texImage2D(r.TEXTURE_2D,W,bt,ht,yt,ft);E.generateMipmaps=!1}else if(Dt){if(Jt){const W=Mt(Q);e.texStorage2D(r.TEXTURE_2D,it,bt,W.width,W.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,yt,Q)}else e.texImage2D(r.TEXTURE_2D,0,bt,ht,yt,Q);m(E)&&d(K),vt.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function J(R,E,B){if(E.image.length!==6)return;const K=Wt(R,E),Z=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const $=n.get(Z);if(Z.version!==$.__version||K===!0){e.activeTexture(r.TEXTURE0+B);const vt=Vt.getPrimaries(Vt.workingColorSpace),st=E.colorSpace===Jn?null:Vt.getPrimaries(E.colorSpace),ut=E.colorSpace===Jn||vt===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,Q=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!kt&&!Q?ht[j]=_(E.image[j],!0,i.maxCubemapSize):ht[j]=Q?E.image[j].image:E.image[j],ht[j]=te(E,ht[j]);const yt=ht[0],bt=s.convert(E.format,E.colorSpace),ft=s.convert(E.type),Bt=y(E.internalFormat,bt,ft,E.colorSpace),Dt=E.isVideoTexture!==!0,Jt=$.__version===void 0||K===!0,D=Z.dataReady;let it=C(E,yt);Tt(r.TEXTURE_CUBE_MAP,E);let W;if(kt){Dt&&Jt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Bt,yt.width,yt.height);for(let j=0;j<6;j++){W=ht[j].mipmaps;for(let ct=0;ct<W.length;ct++){const ot=W[ct];E.format!==mn?bt!==null?Dt?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,bt,ft,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Bt,ot.width,ot.height,0,bt,ft,ot.data)}}}else{if(W=E.mipmaps,Dt&&Jt){W.length>0&&it++;const j=Mt(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(Q){Dt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,bt,ft,ht[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,ht[j].width,ht[j].height,0,bt,ft,ht[j].data);for(let ct=0;ct<W.length;ct++){const Rt=W[ct].image[j].image;Dt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Rt.width,Rt.height,bt,ft,Rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Bt,Rt.width,Rt.height,0,bt,ft,Rt.data)}}else{Dt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt,ft,ht[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,bt,ft,ht[j]);for(let ct=0;ct<W.length;ct++){const ot=W[ct];Dt?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,bt,ft,ot.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Bt,bt,ft,ot.image[j])}}}m(E)&&d(r.TEXTURE_CUBE_MAP),$.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function gt(R,E,B,K,Z,$){const vt=s.convert(B.format,B.colorSpace),st=s.convert(B.type),ut=y(B.internalFormat,vt,st,B.colorSpace),kt=n.get(E),Q=n.get(B);if(Q.__renderTarget=E,!kt.__hasExternalTextures){const ht=Math.max(1,E.width>>$),yt=Math.max(1,E.height>>$);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,ut,ht,yt,E.depth,0,vt,st,null):e.texImage2D(Z,$,ut,ht,yt,0,vt,st,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ot(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,Q.__webglTexture,0,Ft(E)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,Q.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(R,E,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const K=E.depthTexture,Z=K&&K.isDepthTexture?K.type:null,$=v(E.stencilBuffer,Z),vt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=Ft(E);Ot(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,$,E.width,E.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,$,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,R)}else{const K=E.textures;for(let Z=0;Z<K.length;Z++){const $=K[Z],vt=s.convert($.format,$.colorSpace),st=s.convert($.type),ut=y($.internalFormat,vt,st,$.colorSpace),kt=Ft(E);B&&Ot(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,ut,E.width,E.height):Ot(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt,ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const Z=K.__webglTexture,$=Ft(E);if(E.depthTexture.format===cr)Ot(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(E.depthTexture.format===vr)Ot(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function wt(R){const E=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=K}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,R)}else if(B){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=r.createRenderbuffer(),rt(E.__webglDepthbuffer[K],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),rt(E.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(R,E,B){const K=n.get(R);E!==void 0&&gt(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&wt(R)}function se(R){const E=R.texture,B=n.get(R),K=n.get(E);R.addEventListener("dispose",b);const Z=R.textures,$=R.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=E.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let ut=0;ut<E.mipmaps.length;ut++)B.__webglFramebuffer[st][ut]=r.createFramebuffer()}else B.__webglFramebuffer[st]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<E.mipmaps.length;st++)B.__webglFramebuffer[st]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(vt)for(let st=0,ut=Z.length;st<ut;st++){const kt=n.get(Z[st]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ot(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<Z.length;st++){const ut=Z[st];B.__webglColorRenderbuffer[st]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[st]);const kt=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),ht=y(ut.internalFormat,kt,Q,ut.colorSpace,R.isXRRenderTarget===!0),yt=Ft(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,ht,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,B.__webglColorRenderbuffer[st])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,E);for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)gt(B.__webglFramebuffer[st][ut],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut);else gt(B.__webglFramebuffer[st],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(E)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let st=0,ut=Z.length;st<ut;st++){const kt=Z[st],Q=n.get(kt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Tt(r.TEXTURE_2D,kt),gt(B.__webglFramebuffer,R,kt,r.COLOR_ATTACHMENT0+st,r.TEXTURE_2D,0),m(kt)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let st=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),Tt(st,E),E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)gt(B.__webglFramebuffer[ut],R,E,r.COLOR_ATTACHMENT0,st,ut);else gt(B.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,st,0);m(E)&&d(st),e.unbindTexture()}R.depthBuffer&&wt(R)}function zt(R){const E=R.textures;for(let B=0,K=E.length;B<K;B++){const Z=E[B];if(m(Z)){const $=S(R),vt=n.get(Z).__webglTexture;e.bindTexture($,vt),d($),e.unbindTexture()}}}const he=[],U=[];function Qe(R){if(R.samples>0){if(Ot(R)===!1){const E=R.textures,B=R.width,K=R.height;let Z=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(R),st=E.length>1;if(st)for(let ut=0;ut<E.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ut=0;ut<E.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),st){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const kt=n.get(E[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,kt,0)}r.blitFramebuffer(0,0,B,K,0,0,B,K,Z,r.NEAREST),l===!0&&(he.length=0,U.length=0,he.push(r.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(he.push($),U.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),st)for(let ut=0;ut<E.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,vt.__webglColorRenderbuffer[ut]);const kt=n.get(E[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Ft(R){return Math.min(i.maxSamples,R.samples)}function Ot(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function St(R){const E=a.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function te(R,E){const B=R.colorSpace,K=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ar&&B!==Jn&&(Vt.getTransfer(B)===$t?(K!==mn||Z!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=se,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ot}function f0(r,t){function e(n,i=Jn){let s;const a=Vt.getTransfer(i);if(n===kn)return r.UNSIGNED_BYTE;if(n===dl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nu)return r.BYTE;if(n===Fu)return r.SHORT;if(n===Yr)return r.UNSIGNED_SHORT;if(n===fl)return r.INT;if(n===Fi)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===es)return r.HALF_FLOAT;if(n===Bu)return r.ALPHA;if(n===zu)return r.RGB;if(n===mn)return r.RGBA;if(n===ku)return r.LUMINANCE;if(n===Vu)return r.LUMINANCE_ALPHA;if(n===cr)return r.DEPTH_COMPONENT;if(n===vr)return r.DEPTH_STENCIL;if(n===Gu)return r.RED;if(n===ml)return r.RED_INTEGER;if(n===Hu)return r.RG;if(n===_l)return r.RG_INTEGER;if(n===gl)return r.RGBA_INTEGER;if(n===Fs||n===Os||n===Bs||n===zs)if(a===$t)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===yo||n===Eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===bo||n===Ao)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===To||n===bo)return a===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===Ro||n===Co||n===Po||n===Do||n===Lo||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return a===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Vo||n===Go)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ks)return a===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wu||n===Ho||n===Wo||n===Xo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class d0 extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sr extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p0={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:m0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends wr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=new g0,m=e.getContextAttributes();let d=null,S=null;const y=[],v=[],C=new Ut;let A=null;const b=new Xe;b.viewport=new Kt;const w=new Xe;w.viewport=new Kt;const x=[b,w],M=new d0;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=y[q];return J===void 0&&(J=new qa,y[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=y[q];return J===void 0&&(J=new qa,y[q]=J),J.getGripSpace()},this.getHand=function(q){let J=y[q];return J===void 0&&(J=new qa,y[q]=J),J.getHandSpace()};function F(q){const J=v.indexOf(q.inputSource);if(J===-1)return;const gt=y[J];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||a),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let q=0;q<y.length;q++){const J=v[q];J!==null&&(v[q]=null,y[q].disconnect(J))}P=null,O=null,_.reset(),t.setRenderTarget(d),p=null,f=null,h=null,i=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Oi(p.framebufferWidth,p.framebufferHeight,{format:mn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,gt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?vr:cr,gt=m.stencil?gr:Fi);const Et={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(Et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Oi(f.textureWidth,f.textureHeight,{format:mn,type:kn,depthTexture:new rh(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let J=0;J<q.removed.length;J++){const gt=q.removed[J],rt=v.indexOf(gt);rt>=0&&(v[rt]=null,y[rt].disconnect(gt))}for(let J=0;J<q.added.length;J++){const gt=q.added[J];let rt=v.indexOf(gt);if(rt===-1){for(let wt=0;wt<y.length;wt++)if(wt>=v.length){v.push(gt),rt=wt;break}else if(v[wt]===null){v[wt]=gt,rt=wt;break}if(rt===-1)break}const Et=y[rt];Et&&Et.connect(gt)}}const G=new N,Y=new N;function V(q,J,gt){G.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const rt=G.distanceTo(Y),Et=J.projectionMatrix.elements,wt=gt.projectionMatrix.elements,It=Et[14]/(Et[10]-1),se=Et[14]/(Et[10]+1),zt=(Et[9]+1)/Et[5],he=(Et[9]-1)/Et[5],U=(Et[8]-1)/Et[0],Qe=(wt[8]+1)/wt[0],Ft=It*U,Ot=It*Qe,St=rt/(-U+Qe),te=St*-U;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(te),q.translateZ(St),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Mt=It+St,R=se+St,E=Ft-te,B=Ot+(rt-te),K=zt*se/R*Mt,Z=he*se/R*Mt;q.projectionMatrix.makePerspective(E,B,K,Z,Mt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let J=q.near,gt=q.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=w.near=b.near=J,M.far=w.far=b.far=gt,(P!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,O=M.far),b.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,M.layers.mask=b.layers.mask|w.layers.mask;const rt=q.parent,Et=M.cameras;et(M,rt);for(let wt=0;wt<Et.length;wt++)et(Et[wt],rt);Et.length===2?V(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),at(q,M,rt)};function at(q,J,gt){gt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let dt=null;function Tt(q,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let wt=0;wt<gt.length;wt++){const It=gt[wt];let se=null;if(p!==null)se=p.getViewport(It);else{const he=h.getViewSubImage(f,It);se=he.viewport,wt===0&&(t.setRenderTargetTextures(S,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(S))}let zt=x[wt];zt===void 0&&(zt=new Xe,zt.layers.enable(wt),zt.viewport=new Kt,x[wt]=zt),zt.matrix.fromArray(It.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(It.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(se.x,se.y,se.width,se.height),wt===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(zt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const wt=h.getDepthInformation(gt[0]);wt&&wt.isValid&&wt.texture&&_.init(t,wt,i.renderState)}}for(let gt=0;gt<y.length;gt++){const rt=v[gt],Et=y[gt];rt!==null&&Et!==void 0&&Et.update(rt,J,c||a)}dt&&dt(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Wt=new ih;Wt.setAnimationLoop(Tt),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const Si=new Tn,x0=new ie;function M0(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,th(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,S,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ue&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ue&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,Si.copy(v),Si.x*=-1,Si.y*=-1,Si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Si)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=i[S.id];v===void 0&&(g(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(S,C);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function u(S){const y=h();S.__bindingPointIndex=y;const v=r.createBuffer(),C=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],v=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,b=v.length;A<b;A++){const w=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,M=w.length;x<M;x++){const P=w[x];if(p(P,A,x,C)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let X=0;X<F.length;X++){const G=F[X],Y=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,O+H,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(S,y,v,C){const A=S.value,b=y+"_"+v;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const w=C[b];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return C[b]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function g(S){const y=S.uniforms;let v=0;const C=16;for(let b=0,w=y.length;b<w;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,P=x.length;M<P;M++){const O=x[M],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,X=F.length;H<X;H++){const G=F[H],Y=_(G),V=v%C,et=V%Y.boundary,at=V+et;v+=et,at!==0&&C-at<Y.storage&&(v+=C-at),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Y.storage}}}const A=v%C;return A>0&&(v+=C-A),S.__size=v,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function d(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class y0{constructor(t={}){const{canvas:e=cd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=ri,this.toneMappingExposure=1;const v=this;let C=!1,A=0,b=0,w=null,x=-1,M=null;const P=new Kt,O=new Kt;let F=null;const H=new Gt(0);let X=0,G=e.width,Y=e.height,V=1,et=null,at=null;const dt=new Kt(0,0,G,Y),Tt=new Kt(0,0,G,Y);let Wt=!1;const q=new Ml;let J=!1,gt=!1;const rt=new ie,Et=new ie,wt=new N,It=new Kt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function he(){return w===null?V:1}let U=n;function Qe(T,L){return e.getContext(T,L)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){const L="webgl2";if(U=Qe(L,T),U===null)throw Qe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ft,Ot,St,te,Mt,R,E,B,K,Z,$,vt,st,ut,kt,Q,ht,yt,bt,ft,Bt,Dt,Jt,D;function it(){Ft=new w_(U),Ft.init(),Dt=new f0(U,Ft),Ot=new M_(U,Ft,t,Dt),St=new c0(U,Ft),Ot.reverseDepthBuffer&&f&&St.buffers.depth.setReversed(!0),te=new P_(U),Mt=new $g,R=new h0(U,Ft,St,Mt,Ot,Dt,te),E=new y_(v),B=new A_(v),K=new Fd(U),Jt=new v_(U,K),Z=new R_(U,K,te,Jt),$=new L_(U,Z,K,te),bt=new D_(U,Ot,R),Q=new S_(Mt),vt=new Yg(v,E,B,Ft,Ot,Jt,Q),st=new M0(v,Mt),ut=new jg,kt=new n0(Ft),yt=new g_(v,E,B,St,$,p,l),ht=new o0(v,$,Ot),D=new S0(U,te,Ot,St),ft=new x_(U,Ft,te),Bt=new C_(U,Ft,te),te.programs=vt.programs,v.capabilities=Ot,v.extensions=Ft,v.properties=Mt,v.renderLists=ut,v.shadowMap=ht,v.state=St,v.info=te}it();const W=new v0(v,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(G,Y,!1))},this.getSize=function(T){return T.set(G,Y)},this.setSize=function(T,L,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,Y=L,e.width=Math.floor(T*V),e.height=Math.floor(L*V),z===!0&&(e.style.width=T+"px",e.style.height=L+"px"),this.setViewport(0,0,T,L)},this.getDrawingBufferSize=function(T){return T.set(G*V,Y*V).floor()},this.setDrawingBufferSize=function(T,L,z){G=T,Y=L,V=z,e.width=Math.floor(T*z),e.height=Math.floor(L*z),this.setViewport(0,0,T,L)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,L,z,k){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,L,z,k),St.viewport(P.copy(dt).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Tt)},this.setScissor=function(T,L,z,k){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,L,z,k),St.scissor(O.copy(Tt).multiplyScalar(V).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(T){St.setScissorTest(Wt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(T=!0,L=!0,z=!0){let k=0;if(T){let I=!1;if(w!==null){const tt=w.texture.format;I=tt===gl||tt===_l||tt===ml}if(I){const tt=w.texture.type,lt=tt===kn||tt===Fi||tt===Yr||tt===gr||tt===dl||tt===pl,pt=yt.getClearColor(),mt=yt.getClearAlpha(),At=pt.r,Ct=pt.g,_t=pt.b;lt?(g[0]=At,g[1]=Ct,g[2]=_t,g[3]=mt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=At,_[1]=Ct,_[2]=_t,_[3]=mt,U.clearBufferiv(U.COLOR,0,_))}else k|=U.COLOR_BUFFER_BIT}L&&(k|=U.DEPTH_BUFFER_BIT),z&&(k|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),kt.dispose(),Mt.dispose(),E.dispose(),B.dispose(),$.dispose(),Jt.dispose(),D.dispose(),vt.dispose(),W.dispose(),W.removeEventListener("sessionstart",ql),W.removeEventListener("sessionend",Yl),mi.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=te.autoReset,L=ht.enabled,z=ht.autoUpdate,k=ht.needsUpdate,I=ht.type;it(),te.autoReset=T,ht.enabled=L,ht.autoUpdate=z,ht.needsUpdate=k,ht.type=I}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Rt(T){const L=T.target;L.removeEventListener("dispose",Rt),ce(L)}function ce(T){ye(T),Mt.remove(T)}function ye(T){const L=Mt.get(T).programs;L!==void 0&&(L.forEach(function(z){vt.releaseProgram(z)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,L,z,k,I,tt){L===null&&(L=se);const lt=I.isMesh&&I.matrixWorld.determinant()<0,pt=vf(T,L,z,k,I);St.setMaterial(k,lt);let mt=z.index,At=1;if(k.wireframe===!0){if(mt=Z.getWireframeAttribute(z),mt===void 0)return;At=2}const Ct=z.drawRange,_t=z.attributes.position;let Ht=Ct.start*At,Qt=(Ct.start+Ct.count)*At;tt!==null&&(Ht=Math.max(Ht,tt.start*At),Qt=Math.min(Qt,(tt.start+tt.count)*At)),mt!==null?(Ht=Math.max(Ht,0),Qt=Math.min(Qt,mt.count)):_t!=null&&(Ht=Math.max(Ht,0),Qt=Math.min(Qt,_t.count));const ee=Qt-Ht;if(ee<0||ee===1/0)return;Jt.setup(I,k,pt,z,mt);let Pe,Xt=ft;if(mt!==null&&(Pe=K.get(mt),Xt=Bt,Xt.setIndex(Pe)),I.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*he()),Xt.setMode(U.LINES)):Xt.setMode(U.TRIANGLES);else if(I.isLine){let xt=k.linewidth;xt===void 0&&(xt=1),St.setLineWidth(xt*he()),I.isLineSegments?Xt.setMode(U.LINES):I.isLineLoop?Xt.setMode(U.LINE_LOOP):Xt.setMode(U.LINE_STRIP)}else I.isPoints?Xt.setMode(U.POINTS):I.isSprite&&Xt.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Xt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const xt=I._multiDrawStarts,wn=I._multiDrawCounts,qt=I._multiDrawCount,un=mt?K.get(mt).bytesPerElement:1,zi=Mt.get(k).currentProgram.getUniforms();for(let Ve=0;Ve<qt;Ve++)zi.setValue(U,"_gl_DrawID",Ve),Xt.render(xt[Ve]/un,wn[Ve])}else if(I.isInstancedMesh)Xt.renderInstances(Ht,ee,I.count);else if(z.isInstancedBufferGeometry){const xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wn=Math.min(z.instanceCount,xt);Xt.renderInstances(Ht,ee,wn)}else Xt.render(Ht,ee)};function Yt(T,L,z){T.transparent===!0&&T.side===Fn&&T.forceSinglePass===!1?(T.side=Ue,T.needsUpdate=!0,ls(T,L,z),T.side=li,T.needsUpdate=!0,ls(T,L,z),T.side=Fn):ls(T,L,z)}this.compile=function(T,L,z=null){z===null&&(z=T),d=kt.get(z),d.init(L),y.push(d),z.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),T!==z&&T.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const k=new Set;return T.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const tt=I.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const pt=tt[lt];Yt(pt,z,I),k.add(pt)}else Yt(tt,z,I),k.add(tt)}),y.pop(),d=null,k},this.compileAsync=function(T,L,z=null){const k=this.compile(T,L,z);return new Promise(I=>{function tt(){if(k.forEach(function(lt){Mt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){I(T);return}setTimeout(tt,10)}Ft.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let cn=null;function An(T){cn&&cn(T)}function ql(){mi.stop()}function Yl(){mi.start()}const mi=new ih;mi.setAnimationLoop(An),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(T){cn=T,W.setAnimationLoop(T),T===null?mi.stop():mi.start()},W.addEventListener("sessionstart",ql),W.addEventListener("sessionend",Yl),this.render=function(T,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,L,w),d=kt.get(T,y.length),d.init(L),y.push(d),Et.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,J=Q.init(this.clippingPlanes,gt),m=ut.get(T,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&_a(tt,L,-1/0,v.sortObjects)}_a(T,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,at),zt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,zt&&yt.addToRenderList(m,T),this.info.render.frame++,J===!0&&Q.beginShadows();const z=d.state.shadowsArray;ht.render(z,T,L),J===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,I=m.transmissive;if(d.setupLights(),L.isArrayCamera){const tt=L.cameras;if(I.length>0)for(let lt=0,pt=tt.length;lt<pt;lt++){const mt=tt[lt];Kl(k,I,T,mt)}zt&&yt.render(T);for(let lt=0,pt=tt.length;lt<pt;lt++){const mt=tt[lt];$l(m,T,mt,mt.viewport)}}else I.length>0&&Kl(k,I,T,L),zt&&yt.render(T),$l(m,T,L);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,L),Jt.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],J===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function _a(T,L,z,k){if(T.visible===!1)return;if(T.layers.test(L.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(L);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){k&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Et);const lt=$.update(T),pt=T.material;pt.visible&&m.push(T,lt,pt,z,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const lt=$.update(T),pt=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),It.copy(lt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(Et)),Array.isArray(pt)){const mt=lt.groups;for(let At=0,Ct=mt.length;At<Ct;At++){const _t=mt[At],Ht=pt[_t.materialIndex];Ht&&Ht.visible&&m.push(T,lt,Ht,z,It.z,_t)}}else pt.visible&&m.push(T,lt,pt,z,It.z,null)}}const tt=T.children;for(let lt=0,pt=tt.length;lt<pt;lt++)_a(tt[lt],L,z,k)}function $l(T,L,z,k){const I=T.opaque,tt=T.transmissive,lt=T.transparent;d.setupLightsView(z),J===!0&&Q.setGlobalState(v.clippingPlanes,z),k&&St.viewport(P.copy(k)),I.length>0&&os(I,L,z),tt.length>0&&os(tt,L,z),lt.length>0&&os(lt,L,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Kl(T,L,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new Oi(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?es:kn,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[k.id],lt=k.viewport||P;tt.setSize(lt.z,lt.w);const pt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),zt&&yt.render(z);const mt=v.toneMapping;v.toneMapping=ri;const At=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),J===!0&&Q.setGlobalState(v.clippingPlanes,k),os(T,z,k),R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let _t=0,Ht=L.length;_t<Ht;_t++){const Qt=L[_t],ee=Qt.object,Pe=Qt.geometry,Xt=Qt.material,xt=Qt.group;if(Xt.side===Fn&&ee.layers.test(k.layers)){const wn=Xt.side;Xt.side=Ue,Xt.needsUpdate=!0,jl(ee,z,k,Pe,Xt,xt),Xt.side=wn,Xt.needsUpdate=!0,Ct=!0}}Ct===!0&&(R.updateMultisampleRenderTarget(tt),R.updateRenderTargetMipmap(tt))}v.setRenderTarget(pt),v.setClearColor(H,X),At!==void 0&&(k.viewport=At),v.toneMapping=mt}function os(T,L,z){const k=L.isScene===!0?L.overrideMaterial:null;for(let I=0,tt=T.length;I<tt;I++){const lt=T[I],pt=lt.object,mt=lt.geometry,At=k===null?lt.material:k,Ct=lt.group;pt.layers.test(z.layers)&&jl(pt,L,z,mt,At,Ct)}}function jl(T,L,z,k,I,tt){T.onBeforeRender(v,L,z,k,I,tt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),I.onBeforeRender(v,L,z,k,T,tt),I.transparent===!0&&I.side===Fn&&I.forceSinglePass===!1?(I.side=Ue,I.needsUpdate=!0,v.renderBufferDirect(z,L,k,I,T,tt),I.side=li,I.needsUpdate=!0,v.renderBufferDirect(z,L,k,I,T,tt),I.side=Fn):v.renderBufferDirect(z,L,k,I,T,tt),T.onAfterRender(v,L,z,k,I,tt)}function ls(T,L,z){L.isScene!==!0&&(L=se);const k=Mt.get(T),I=d.state.lights,tt=d.state.shadowsArray,lt=I.state.version,pt=vt.getParameters(T,I.state,tt,L,z),mt=vt.getProgramCacheKey(pt);let At=k.programs;k.environment=T.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(T.isMeshStandardMaterial?B:E).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?L.environmentRotation:T.envMapRotation,At===void 0&&(T.addEventListener("dispose",Rt),At=new Map,k.programs=At);let Ct=At.get(mt);if(Ct!==void 0){if(k.currentProgram===Ct&&k.lightsStateVersion===lt)return Jl(T,pt),Ct}else pt.uniforms=vt.getUniforms(T),T.onBeforeCompile(pt,v),Ct=vt.acquireProgram(pt,mt),At.set(mt,Ct),k.uniforms=pt.uniforms;const _t=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Jl(T,pt),k.needsLights=Mf(T),k.lightsStateVersion=lt,k.needsLights&&(_t.ambientLightColor.value=I.state.ambient,_t.lightProbe.value=I.state.probe,_t.directionalLights.value=I.state.directional,_t.directionalLightShadows.value=I.state.directionalShadow,_t.spotLights.value=I.state.spot,_t.spotLightShadows.value=I.state.spotShadow,_t.rectAreaLights.value=I.state.rectArea,_t.ltc_1.value=I.state.rectAreaLTC1,_t.ltc_2.value=I.state.rectAreaLTC2,_t.pointLights.value=I.state.point,_t.pointLightShadows.value=I.state.pointShadow,_t.hemisphereLights.value=I.state.hemi,_t.directionalShadowMap.value=I.state.directionalShadowMap,_t.directionalShadowMatrix.value=I.state.directionalShadowMatrix,_t.spotShadowMap.value=I.state.spotShadowMap,_t.spotLightMatrix.value=I.state.spotLightMatrix,_t.spotLightMap.value=I.state.spotLightMap,_t.pointShadowMap.value=I.state.pointShadowMap,_t.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=Ct,k.uniformsList=null,Ct}function Zl(T){if(T.uniformsList===null){const L=T.currentProgram.getUniforms();T.uniformsList=Vs.seqWithValue(L.seq,T.uniforms)}return T.uniformsList}function Jl(T,L){const z=Mt.get(T);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function vf(T,L,z,k,I){L.isScene!==!0&&(L=se),R.resetTextureUnits();const tt=L.fog,lt=k.isMeshStandardMaterial?L.environment:null,pt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ar,mt=(k.isMeshStandardMaterial?B:E).get(k.envMap||lt),At=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ct=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!z.morphAttributes.position,Ht=!!z.morphAttributes.normal,Qt=!!z.morphAttributes.color;let ee=ri;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ee=v.toneMapping);const Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Xt=Pe!==void 0?Pe.length:0,xt=Mt.get(k),wn=d.state.lights;if(J===!0&&(gt===!0||T!==M)){const tn=T===M&&k.id===x;Q.setState(k,T,tn)}let qt=!1;k.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==wn.state.version||xt.outputColorSpace!==pt||I.isBatchedMesh&&xt.batching===!1||!I.isBatchedMesh&&xt.batching===!0||I.isBatchedMesh&&xt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&xt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&xt.instancing===!1||!I.isInstancedMesh&&xt.instancing===!0||I.isSkinnedMesh&&xt.skinning===!1||!I.isSkinnedMesh&&xt.skinning===!0||I.isInstancedMesh&&xt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&xt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&xt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&xt.instancingMorph===!1&&I.morphTexture!==null||xt.envMap!==mt||k.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Q.numPlanes||xt.numIntersection!==Q.numIntersection)||xt.vertexAlphas!==At||xt.vertexTangents!==Ct||xt.morphTargets!==_t||xt.morphNormals!==Ht||xt.morphColors!==Qt||xt.toneMapping!==ee||xt.morphTargetsCount!==Xt)&&(qt=!0):(qt=!0,xt.__version=k.version);let un=xt.currentProgram;qt===!0&&(un=ls(k,L,I));let zi=!1,Ve=!1,Pr=!1;const ne=un.getUniforms(),vn=xt.uniforms;if(St.useProgram(un.program)&&(zi=!0,Ve=!0,Pr=!0),k.id!==x&&(x=k.id,Ve=!0),zi||M!==T){St.buffers.depth.getReversed()?(rt.copy(T.projectionMatrix),hd(rt),fd(rt),ne.setValue(U,"projectionMatrix",rt)):ne.setValue(U,"projectionMatrix",T.projectionMatrix),ne.setValue(U,"viewMatrix",T.matrixWorldInverse);const Hn=ne.map.cameraPosition;Hn!==void 0&&Hn.setValue(U,wt.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&ne.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ne.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ve=!0,Pr=!0)}if(I.isSkinnedMesh){ne.setOptional(U,I,"bindMatrix"),ne.setOptional(U,I,"bindMatrixInverse");const tn=I.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ne.setValue(U,"boneTexture",tn.boneTexture,R))}I.isBatchedMesh&&(ne.setOptional(U,I,"batchingTexture"),ne.setValue(U,"batchingTexture",I._matricesTexture,R),ne.setOptional(U,I,"batchingIdTexture"),ne.setValue(U,"batchingIdTexture",I._indirectTexture,R),ne.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&ne.setValue(U,"batchingColorTexture",I._colorsTexture,R));const Dr=z.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&bt.update(I,z,un),(Ve||xt.receiveShadow!==I.receiveShadow)&&(xt.receiveShadow=I.receiveShadow,ne.setValue(U,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(vn.envMap.value=mt,vn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(vn.envMapIntensity.value=L.environmentIntensity),Ve&&(ne.setValue(U,"toneMappingExposure",v.toneMappingExposure),xt.needsLights&&xf(vn,Pr),tt&&k.fog===!0&&st.refreshFogUniforms(vn,tt),st.refreshMaterialUniforms(vn,k,V,Y,d.state.transmissionRenderTarget[T.id]),Vs.upload(U,Zl(xt),vn,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vs.upload(U,Zl(xt),vn,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ne.setValue(U,"center",I.center),ne.setValue(U,"modelViewMatrix",I.modelViewMatrix),ne.setValue(U,"normalMatrix",I.normalMatrix),ne.setValue(U,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const tn=k.uniformsGroups;for(let Hn=0,Wn=tn.length;Hn<Wn;Hn++){const Ql=tn[Hn];D.update(Ql,un),D.bind(Ql,un)}}return un}function xf(T,L){T.ambientLightColor.needsUpdate=L,T.lightProbe.needsUpdate=L,T.directionalLights.needsUpdate=L,T.directionalLightShadows.needsUpdate=L,T.pointLights.needsUpdate=L,T.pointLightShadows.needsUpdate=L,T.spotLights.needsUpdate=L,T.spotLightShadows.needsUpdate=L,T.rectAreaLights.needsUpdate=L,T.hemisphereLights.needsUpdate=L}function Mf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,L,z){Mt.get(T.texture).__webglTexture=L,Mt.get(T.depthTexture).__webglTexture=z;const k=Mt.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,L){const z=Mt.get(T);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(T,L=0,z=0){w=T,A=L,b=z;let k=!0,I=null,tt=!1,lt=!1;if(T){const mt=Mt.get(T);if(mt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(U.FRAMEBUFFER,null),k=!1;else if(mt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(mt.__hasExternalTextures)R.rebindTextures(T,Mt.get(T.texture).__webglTexture,Mt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const _t=T.depthTexture;if(mt.__boundDepthTexture!==_t){if(_t!==null&&Mt.has(_t)&&(T.width!==_t.image.width||T.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const At=T.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);const Ct=Mt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?I=Ct[L][z]:I=Ct[L],tt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?I=Mt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ct)?I=Ct[z]:I=Ct,P.copy(T.viewport),O.copy(T.scissor),F=T.scissorTest}else P.copy(dt).multiplyScalar(V).floor(),O.copy(Tt).multiplyScalar(V).floor(),F=Wt;if(St.bindFramebuffer(U.FRAMEBUFFER,I)&&k&&St.drawBuffers(T,I),St.viewport(P),St.scissor(O),St.setScissorTest(F),tt){const mt=Mt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,z)}else if(lt){const mt=Mt.get(T.texture),At=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,mt.__webglTexture,z||0,At)}x=-1},this.readRenderTargetPixels=function(T,L,z,k,I,tt,lt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){St.bindFramebuffer(U.FRAMEBUFFER,pt);try{const mt=T.texture,At=mt.format,Ct=mt.type;if(!Ot.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=T.width-k&&z>=0&&z<=T.height-I&&U.readPixels(L,z,k,I,Dt.convert(At),Dt.convert(Ct),tt)}finally{const mt=w!==null?Mt.get(w).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(T,L,z,k,I,tt,lt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Mt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const mt=T.texture,At=mt.format,Ct=mt.type;if(!Ot.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=T.width-k&&z>=0&&z<=T.height-I){St.bindFramebuffer(U.FRAMEBUFFER,pt);const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,tt.byteLength,U.STREAM_READ),U.readPixels(L,z,k,I,Dt.convert(At),Dt.convert(Ct),0);const Ht=w!==null?Mt.get(w).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Ht);const Qt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ud(U,Qt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,tt),U.deleteBuffer(_t),U.deleteSync(Qt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,L=null,z=0){T.isTexture!==!0&&(zr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-z),I=Math.floor(T.image.width*k),tt=Math.floor(T.image.height*k),lt=L!==null?L.x:0,pt=L!==null?L.y:0;R.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,lt,pt,I,tt),St.unbindTexture()},this.copyTextureToTexture=function(T,L,z=null,k=null,I=0){T.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],L=arguments[2],I=arguments[3]||0,z=null);let tt,lt,pt,mt,At,Ct,_t,Ht,Qt;const ee=T.isCompressedTexture?T.mipmaps[I]:T.image;z!==null?(tt=z.max.x-z.min.x,lt=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,mt=z.min.x,At=z.min.y,Ct=z.isBox3?z.min.z:0):(tt=ee.width,lt=ee.height,pt=ee.depth||1,mt=0,At=0,Ct=0),k!==null?(_t=k.x,Ht=k.y,Qt=k.z):(_t=0,Ht=0,Qt=0);const Pe=Dt.convert(L.format),Xt=Dt.convert(L.type);let xt;L.isData3DTexture?(R.setTexture3D(L,0),xt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(R.setTexture2DArray(L,0),xt=U.TEXTURE_2D_ARRAY):(R.setTexture2D(L,0),xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);const wn=U.getParameter(U.UNPACK_ROW_LENGTH),qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),un=U.getParameter(U.UNPACK_SKIP_PIXELS),zi=U.getParameter(U.UNPACK_SKIP_ROWS),Ve=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),U.pixelStorei(U.UNPACK_SKIP_ROWS,At),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct);const Pr=T.isDataArrayTexture||T.isData3DTexture,ne=L.isDataArrayTexture||L.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const vn=Mt.get(T),Dr=Mt.get(L),tn=Mt.get(vn.__renderTarget),Hn=Mt.get(Dr.__renderTarget);St.bindFramebuffer(U.READ_FRAMEBUFFER,tn.__webglFramebuffer),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Wn=0;Wn<pt;Wn++)Pr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(T).__webglTexture,I,Ct+Wn),T.isDepthTexture?(ne&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.get(L).__webglTexture,I,Qt+Wn),U.blitFramebuffer(mt,At,tt,lt,_t,Ht,tt,lt,U.DEPTH_BUFFER_BIT,U.NEAREST)):ne?U.copyTexSubImage3D(xt,I,_t,Ht,Qt+Wn,mt,At,tt,lt):U.copyTexSubImage2D(xt,I,_t,Ht,Qt+Wn,mt,At,tt,lt);St.bindFramebuffer(U.READ_FRAMEBUFFER,null),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ne?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(xt,I,_t,Ht,Qt,tt,lt,pt,Pe,Xt,ee.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(xt,I,_t,Ht,Qt,tt,lt,pt,Pe,ee.data):U.texSubImage3D(xt,I,_t,Ht,Qt,tt,lt,pt,Pe,Xt,ee):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,_t,Ht,tt,lt,Pe,Xt,ee.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,_t,Ht,ee.width,ee.height,Pe,ee.data):U.texSubImage2D(U.TEXTURE_2D,I,_t,Ht,tt,lt,Pe,Xt,ee);U.pixelStorei(U.UNPACK_ROW_LENGTH,wn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,un),U.pixelStorei(U.UNPACK_SKIP_ROWS,zi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve),I===0&&L.generateMipmaps&&U.generateMipmap(xt),St.unbindTexture()},this.copyTextureToTexture3D=function(T,L,z=null,k=null,I=0){return T.isTexture!==!0&&(zr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,T=arguments[2],L=arguments[3],I=arguments[4]||0),zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,L,z,k,I)},this.initRenderTarget=function(T){Mt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){A=0,b=0,w=null,St.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}class E0 extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ch extends Rr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zc=new ie,$o=new vl,Ps=new ra,Ds=new N;class T0 extends Ce{constructor(t=new Je,e=new ch){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,t.ray.intersectsSphere(Ps)===!1)return;Zc.copy(i).invert(),$o.copy(t.ray).applyMatrix4(Zc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Ds.fromBufferAttribute(h,m),Jc(Ds,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Ds.fromBufferAttribute(h,g),Jc(Ds,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jc(r,t,e,n,i,s,a){const o=$o.distanceSqToPoint(r);if(o<e){const l=new N;$o.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class yl extends Je{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(p,2));function S(){const v=new N,C=new N;let A=0;const b=(e-t)/n;for(let w=0;w<=s;w++){const x=[],M=w/s,P=M*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,H=F*l+o,X=Math.sin(H),G=Math.cos(H);C.x=P*X,C.y=-M*n+m,C.z=P*G,h.push(C.x,C.y,C.z),v.set(X,b,G).normalize(),f.push(v.x,v.y,v.z),p.push(F,1-M),x.push(g++)}_.push(x)}for(let w=0;w<i;w++)for(let x=0;x<s;x++){const M=_[x][w],P=_[x+1][w],O=_[x+1][w+1],F=_[x][w+1];(t>0||x!==0)&&(u.push(M,P,F),A+=3),(e>0||x!==s-1)&&(u.push(P,O,F),A+=3)}c.addGroup(d,A,0),d+=A}function y(v){const C=g,A=new Ut,b=new N;let w=0;const x=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const H=O/i*l+o,X=Math.cos(H),G=Math.sin(H);b.x=x*G,b.y=m*M,b.z=x*X,h.push(b.x,b.y,b.z),f.push(0,M,0),A.x=X*.5+.5,A.y=G*.5*M+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){const F=C+O,H=P+O;v===!0?u.push(H,H+1,F):u.push(H+1,H,F),w+=3}c.addGroup(d,w,v===!0?1:2),d+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends Je{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(s.slice(),3)),this.setAttribute("uv",new _e(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const y=new N,v=new N,C=new N;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],v),p(e[A+2],C),l(y,v,C,S)}function l(S,y,v,C){const A=C+1,b=[];for(let w=0;w<=A;w++){b[w]=[];const x=S.clone().lerp(v,w/A),M=y.clone().lerp(v,w/A),P=A-w;for(let O=0;O<=P;O++)O===0&&w===A?b[w][O]=x:b[w][O]=x.clone().lerp(M,O/P)}for(let w=0;w<A;w++)for(let x=0;x<2*(A-w)-1;x++){const M=Math.floor(x/2);x%2===0?(f(b[w][M+1]),f(b[w+1][M]),f(b[w][M])):(f(b[w][M+1]),f(b[w+1][M+1]),f(b[w+1][M]))}}function c(S){const y=new N;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(S),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const S=new N;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const v=m(S)/2/Math.PI+.5,C=d(S)/Math.PI+.5;a.push(v,1-C)}g(),h()}function h(){for(let S=0;S<a.length;S+=6){const y=a[S+0],v=a[S+2],C=a[S+4],A=Math.max(y,v,C),b=Math.min(y,v,C);A>.9&&b<.1&&(y<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function p(S,y){const v=S*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const S=new N,y=new N,v=new N,C=new N,A=new Ut,b=new Ut,w=new Ut;for(let x=0,M=0;x<s.length;x+=9,M+=6){S.set(s[x+0],s[x+1],s[x+2]),y.set(s[x+3],s[x+4],s[x+5]),v.set(s[x+6],s[x+7],s[x+8]),A.set(a[M+0],a[M+1]),b.set(a[M+2],a[M+3]),w.set(a[M+4],a[M+5]),C.copy(S).add(y).add(v).divideScalar(3);const P=m(C);_(A,M+0,S,P),_(b,M+2,y,P),_(w,M+4,v,P)}}function _(S,y,v,C){C<0&&S.x===1&&(a[y]=S.x-1),v.x===0&&v.z===0&&(a[y]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.vertices,t.indices,t.radius,t.details)}}class la extends oa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new la(t.radius,t.detail)}}class El extends oa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new El(t.radius,t.detail)}}class Tl extends Je{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,p=new N,g=new Ut;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const d=s+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let d=0;d<n;d++){const S=d+m,y=S,v=S+n+1,C=S+n+2,A=S+1;o.push(y,v,A),o.push(v,C,A)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ca extends Je{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new N,h=new N,f=new N;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*s,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,S=(i+1)*p+g;a.push(_,m,S),a.push(m,d,S)}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class di extends Rr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xu,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uh extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ya=new ie,Qc=new N,tu=new N;class b0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new ie,Or=new N,$a=new N;class A0 extends b0{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Or.setFromMatrixPosition(t.matrixWorld),n.position.copy(Or),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-Or.x,-Or.y,-Or.z),eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu)}}class hh extends uh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new A0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class w0 extends uh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class R0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nu(){return performance.now()}const iu=new ie;class C0{constructor(t,e,n=0,i=1/0){this.ray=new vl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(t,e=!0,n=[]){return Ko(t,this,n,e),n.sort(ru),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ko(t[i],this,n,e);return n.sort(ru),n}}function ru(r,t){return r.distance-t.distance}function Ko(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Ko(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);function Un(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function fh(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ke={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mr={duration:.5,overwrite:!1,delay:0},bl,Se,re,sn=1e8,Zt=1/sn,jo=Math.PI*2,P0=jo/4,D0=0,dh=Math.sqrt,L0=Math.cos,I0=Math.sin,Me=function(t){return typeof t=="string"},ue=function(t){return typeof t=="function"},Vn=function(t){return typeof t=="number"},Al=function(t){return typeof t>"u"},bn=function(t){return typeof t=="object"},Fe=function(t){return t!==!1},wl=function(){return typeof window<"u"},Ls=function(t){return ue(t)||Me(t)},ph=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ae=Array.isArray,U0=/random\([^)]+\)/g,N0=/,\s*/g,su=/(?:-?\.?\d|\.)+/gi,mh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ka=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_h=/[+-]=-?[.\d]+/,F0=/[^,'"\[\]\s]+/gi,O0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,oe,xn,Zo,Rl,je={},Ks={},gh,vh=function(t){return(Ks=Sr(t,je))&&ke},Cl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$r=function(t,e){return!e&&console.warn(t)},xh=function(t,e){return t&&(je[t]=e)&&Ks&&(Ks[t]=e)||je},Kr=function(){return 0},B0={suppressEvents:!0,isStart:!0,kill:!1},Gs={suppressEvents:!0,kill:!1},z0={suppressEvents:!0},Pl={},si=[],Jo={},Mh,We={},ja={},au=30,Hs=[],Dl="",Ll=function(t){var e=t[0],n,i;if(bn(e)||ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Hs.length;i--&&!Hs[i].targetTest(e););n=Hs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Wh(t[i],n)))||t.splice(i,1);return t},Li=function(t){return t._gsap||Ll(an(t))[0]._gsap},Sh=function(t,e,n){return(n=t[e])&&ue(n)?t[e]():Al(n)&&t.getAttribute&&t.getAttribute(e)||n},Oe=function(t,e){return(t=t.split(",")).forEach(e)||t},fe=function(t){return Math.round(t*1e5)/1e5||0},ae=function(t){return Math.round(t*1e7)/1e7||0},hr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},k0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},js=function(){var t=si.length,e=si.slice(0),n,i;for(Jo={},si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Il=function(t){return!!(t._initted||t._startAt||t.add)},yh=function(t,e,n,i){si.length&&!Se&&js(),t.render(e,n,!!(Se&&e<0&&Il(t))),si.length&&!Se&&js()},Eh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(F0).length<2?e:Me(t)?t.trim():t},Th=function(t){return t},Ze=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},V0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Sr=function(t,e){for(var n in e)t[n]=e[n];return t},ou=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Zs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Wr=function(t){var e=t.parent||oe,n=t.keyframes?V0(Ae(t.keyframes)):Ze;if(Fe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},G0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},bh=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},ua=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ui=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ii=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},H0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Qo=function(t,e,n,i){return t._startAt&&(Se?t._startAt.revert(Gs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},W0=function r(t){return!t||t._ts&&r(t.parent)},lu=function(t){return t._repeat?yr(t._tTime,t=t.duration()+t._rDelay)*t:0},yr=function(t,e){var n=Math.floor(t=ae(t/e));return t&&n===t?n-1:n},Js=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ha=function(t){return t._end=ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||Zt)||0))},fa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ha(t),n._dirty||Ii(n,t)),t},Ah=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Js(t.rawTime(),e),(!e._dur||ss(0,e.totalDuration(),n)-e._tTime>Zt)&&e.render(n,!0)),Ii(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Zt}},Sn=function(t,e,n,i){return e.parent&&ui(e),e._start=ae((Vn(n)?n:n||t!==oe?nn(t,n,e):t._time)+e._delay),e._end=ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),bh(t,e,"_first","_last",t._sort?"_start":0),tl(e)||(t._recent=e),i||Ah(t,e),t._ts<0&&fa(t,t._tTime),t},wh=function(t,e){return(je.ScrollTrigger||Cl("scrollTrigger",e))&&je.ScrollTrigger.create(e,t)},Rh=function(t,e,n,i,s){if(Nl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Se&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Mh!==qe.frame)return si.push(t),t._lazy=[s,i],1},X0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},tl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},q0=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&X0(t)&&!(!t._initted&&tl(t))||(t._ts<0||t._dp._ts<0)&&!tl(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=ss(0,t._tDur,e),u=yr(l,o),t._yoyo&&u&1&&(a=1-a),u!==yr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Se||i||t._zTime===Zt||!e&&t._zTime){if(!t._initted&&Rh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Zt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Qo(t,e,n,!0),t._onUpdate&&!n&&Ye(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ye(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ui(t,1),!n&&!Se&&(Ye(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Y0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Er=function(t,e,n,i){var s=t._repeat,a=ae(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ae(a*(s+1)+t._rDelay*s):a,o>0&&!i&&fa(t,t._tTime=t._tDur*o),t.parent&&ha(t),n||Ii(t.parent,t),t},cu=function(t){return t instanceof Re?Ii(t):Er(t,t._dur)},$0={_start:0,endTime:Kr,totalDuration:Kr},nn=function r(t,e,n){var i=t.labels,s=t._recent||$0,a=t.duration()>=sn?s.endTime(!1):t._dur,o,l,c;return Me(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ae(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Xr=function(t,e,n){var i=Vn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Fe(l.vars.inherit)&&l.parent;a.immediateRender=Fe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new pe(e[0],a,e[s+1])},pi=function(t,e){return t||t===0?e(t):e},ss=function(t,e,n){return n<t?t:n>e?e:n},be=function(t,e){return!Me(t)||!(e=O0.exec(t))?"":e[1]},K0=function(t,e,n){return pi(n,function(i){return ss(t,e,i)})},el=[].slice,Ch=function(t,e){return t&&bn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bn(t[0]))&&!t.nodeType&&t!==xn},j0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Me(i)&&!e||Ch(i,1)?(s=n).push.apply(s,an(i)):n.push(i)})||n},an=function(t,e,n){return re&&!e&&re.selector?re.selector(t):Me(t)&&!n&&(Zo||!Tr())?el.call((e||Rl).querySelectorAll(t),0):Ae(t)?j0(t,n):Ch(t)?el.call(t,0):t?[t]:[]},nl=function(t){return t=an(t)[0]||$r("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return an(e,n.querySelectorAll?n:n===t?$r("Invalid scope")||Rl.createElement("div"):t)}},Ph=function(t){return t.sort(function(){return .5-Math.random()})},Dh=function(t){if(ue(t))return t;var e=bn(t)?t:{each:t},n=Ui(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Me(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,S,y,v,C,A,b,w,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,sn])[1],!x){for(b=-sn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],d=l?Math.min(x,_)*u-.5:i%x,S=x===sn?0:l?_*h/x-.5:i/x|0,b=0,w=sn,A=0;A<_;A++)y=A%x-d,v=S-(A/x|0),m[A]=C=c?Math.abs(c==="y"?v:y):dh(y*y+v*v),C>b&&(b=C),C<w&&(w=C);i==="random"&&Ph(m),m.max=b-w,m.min=w,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=be(e.amount||e.each)||0,n=n&&_<0?Vh(n):n}return _=(m[f]-m.min)/m.max||0,ae(m.b+(n?n(_):_)*m.v)+m.u}},il=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Vn(n)?0:be(n))}},Lh=function(t,e){var n=Ae(t),i,s;return!n&&bn(t)&&(i=n=t.radius||sn,t.values?(t=an(t.values),(s=!Vn(t[0]))&&(i*=i)):t=il(t.increment)),pi(e,n?ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=sn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-o,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Vn(a)?u:u+be(a)}:il(t))},Ih=function(t,e,n,i){return pi(Ae(t)?!e:n===!0?!!(n=0):!i,function(){return Ae(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Z0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},J0=function(t,e){return function(n){return t(parseFloat(n))+(e||be(n))}},Q0=function(t,e,n){return Nh(t,e,0,1,n)},Uh=function(t,e,n){return pi(n,function(i){return t[~~e(i)]})},tv=function r(t,e,n){var i=e-t;return Ae(t)?Uh(t,r(0,t.length),e):pi(n,function(s){return(i+(s-t)%i)%i+t})},ev=function r(t,e,n){var i=e-t,s=i*2;return Ae(t)?Uh(t,r(0,t.length-1),e):pi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},jr=function(t){return t.replace(U0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(N0);return Ih(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Nh=function(t,e,n,i,s){var a=e-t,o=i-n;return pi(s,function(l){return n+((l-t)/a*o||0)})},nv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Me(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ae(t)&&!Ae(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=Sr(Ae(t)?[]:{},t));if(!u){for(l in e)Ul.call(o,t,l,"get",e[l]);s=function(g){return Bl(g,o)||(a?t.p:t)}}}return pi(n,s)},uu=function(t,e,n){var i=t.labels,s=sn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ye=function(t,e,n){var i=t.vars,s=i[e],a=re,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&si.length&&js(),o&&(re=o),u=l?s.apply(c,l):s.call(c),re=a,u},Vr=function(t){return ui(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Se),t.progress()<1&&Ye(t,"onInterrupt"),t},or,Fh=[],Oh=function(t){if(t)if(t=!t.name&&t.default||t,wl()||t.headless){var e=t.name,n=ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Kr,render:Bl,add:Ul,kill:vv,modifier:gv,rawVars:0},a={targetTest:0,get:0,getSetter:Ol,aliases:{},register:0};if(Tr(),t!==i){if(We[e])return;Ze(i,Ze(Zs(t,s),a)),Sr(i.prototype,Sr(s,Zs(t,a))),We[i.prop=e]=i,t.targetTest&&(Hs.push(i),Pl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}xh(e,i),t.register&&t.register(ke,i,Be)}else Fh.push(t)},jt=255,Gr={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},Za=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*jt+.5|0},Bh=function(t,e,n){var i=t?Vn(t)?[t>>16,t>>8&jt,t&jt]:0:Gr.black,s,a,o,l,c,u,h,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Gr[t])i=Gr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&jt,i&jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&jt,t&jt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(su),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Za(l+1/3,s,a),i[1]=Za(l,s,a),i[2]=Za(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(mh),n&&i.length<4&&(i[3]=1),i}else i=t.match(su)||Gr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/jt,a=i[1]/jt,o=i[2]/jt,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},zh=function(t){var e=[],n=[],i=-1;return t.split(ai).forEach(function(s){var a=s.match(ar)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},hu=function(t,e,n){var i="",s=(t+i).match(ai),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Bh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=zh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ai,"1").split(ar),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ai),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},ai=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Gr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),iv=/hsl[a]?\(/,kh=function(t){var e=t.join(" "),n;if(ai.lastIndex=0,ai.test(e))return n=iv.test(e),t[1]=hu(t[1],n),t[0]=hu(t[0],n,zh(t[1])),!0},Zr,qe=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function _(m){var d=r()-i,S=m===!0,y,v,C,A;if((d>t||d<0)&&(n+=d-e),i+=d,C=i-n,y=C-a,(y>0||S)&&(A=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,a+=y+(y>=s?4:s-y),v=1),S||(l=c(_)),v)for(p=0;p<o.length;p++)o[p](C,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){gh&&(!Zo&&wl()&&(xn=Zo=window,Rl=xn.document||{},je.gsap=ke,(xn.gsapVersions||(xn.gsapVersions=[])).push(ke.version),vh(Ks||xn.GreenSockGlobals||!xn.gsap&&xn||{}),Fh.forEach(Oh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Zr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Zr=0,c=Kr},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,S){var y=d?function(v,C,A,b){m(v,C,A,b),h.remove(y)}:m;return h.remove(m),o[S?"unshift":"push"](y),Tr(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h})(),Tr=function(){return!Zr&&qe.wake()},Nt={},rv=/^[\d.\-M][\d.\-,\s]/,sv=/["']/g,av=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(sv,"").trim():+c,i=l.substr(o+1).trim();return e},ov=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lv=function(t){var e=(t+"").split("("),n=Nt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[av(e[1])]:ov(t).split(",").map(Eh)):Nt._CE&&rv.test(t)?Nt._CE("",t):n},Vh=function(t){return function(e){return 1-t(1-e)}},Gh=function r(t,e){for(var n=t._first,i;n;)n instanceof Re?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ui=function(t,e){return t&&(ue(t)?t:Nt[t]||lv(t))||e},Bi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Oe(t,function(o){Nt[o]=je[o]=s,Nt[a=o.toLowerCase()]=n;for(var l in s)Nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Nt[o+"."+l]=s[l]}),s},Hh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ja=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/jo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*I0((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Hh(o);return s=jo/s,l.config=function(c,u){return r(t,c,u)},l},Qa=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Hh(n);return i.config=function(s){return r(t,s)},i};Oe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Bi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Nt.Linear.easeNone=Nt.none=Nt.Linear.easeIn;Bi("Elastic",Ja("in"),Ja("out"),Ja());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Bi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Bi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Bi("Circ",function(r){return-(dh(1-r*r)-1)});Bi("Sine",function(r){return r===1?1:-L0(r*P0)+1});Bi("Back",Qa("in"),Qa("out"),Qa());Nt.SteppedEase=Nt.steps=je.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Zt;return function(o){return((i*ss(0,a,o)|0)+s)*n}}};Mr.ease=Nt["quad.out"];Oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Dl+=r+","+r+"Params,"});var Wh=function(t,e){this.id=D0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sh,this.set=e?e.getSetter:Ol},Jr=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Er(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),Zr||qe.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Tr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fa(this,n),!s._dp||s.parent||Ah(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Zt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?yr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Zt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Js(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Zt?0:this._rts,this.totalTime(ss(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ha(this),H0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Zt&&(this._tTime-=Zt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ae(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Fe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Js(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=z0);var i=Se;return Se=n,Il(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Se=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(nn(this,n),Fe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fe(i)),this._dur||(this._zTime=-Zt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Zt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Zt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Zt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ue(n)?n:Th,l=function(){var u=i.then;i.then=null,s&&s(),ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Vr(this)},r})();Ze(Jr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Zt,_prom:0,_ps:!1,_rts:1});var Re=(function(r){fh(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fe(n.sortChildren),oe&&Sn(n.parent||oe,Un(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wh(Un(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Xr(0,arguments,this),this},e.from=function(i,s,a){return Xr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Xr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Wr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pe(i,s,nn(this,a),1),this},e.call=function(i,s,a){return Sn(this,pe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new pe(i,a,nn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Wr(a).immediateRender=Fe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Wr(o).immediateRender=Fe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ae(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,_,m,d,S,y,v,C,A,b;if(this!==oe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,y=this._ts,d=!y,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=ae(u%m),u===l?(_=this._repeat,f=c):(C=ae(u/m),_=~~C,_&&_===C&&(f=c,_--),f>c&&(f=c)),C=yr(this._tTime,m),!o&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),A&&_&1&&(f=c-f,b=1),_!==C&&!this._lock){var w=A&&C&1,x=w===(A&&_&1);if(_<C&&(w=!w),o=w?0:u%c?c:u,this._lock=1,this.render(o||(b?0:ae(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ye(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,C=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=w?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Gh(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Y0(this,ae(o),ae(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!C&&(Ye(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){S=0,g&&(u+=this._zTime=-Zt);break}}p=g}else{p=this._last;for(var M=i<0?i:f;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,a||Se&&Il(p)),f!==this._time||!this._ts&&!d){S=0,g&&(u+=this._zTime=M?-Zt:Zt);break}}p=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Zt)._zTime=f>=o?1:-1,this._ts))return this._start=v,ha(this),this.render(i,s,a);this._onUpdate&&!s&&Ye(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ui(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Ye(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Vn(s)||(s=nn(this,s,i)),!(i instanceof Jr)){if(Ae(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Me(i))return this.addLabel(i,s);if(ue(i))i=pe.delayedCall(0,i);else return this}return this!==i?Sn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof pe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Me(i)?this.removeLabel(i):ue(i)?this.killTweensOf(i):(i.parent===this&&ua(this,i),i===this._recent&&(this._recent=this._last),Ii(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ae(qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=nn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=pe.delayedCall(0,s||Kr,a);return o.data="isPause",this._hasPause=1,Sn(this,o,nn(this,i))},e.removePause=function(i){var s=this._first;for(i=nn(this,i);s;)s._start===i&&s.data==="isPause"&&ui(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Qn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=an(i),l=this._first,c=Vn(s),u;l;)l instanceof pe?k0(l._targets,o)&&(c?(!Qn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=nn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=pe.to(a,Ze({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Zt,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Er(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Ze({startAt:{time:nn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),uu(this,nn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),uu(this,nn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Zt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ae(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ii(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ii(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=sn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Sn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=ae(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Er(a,a===oe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(oe._ts&&(yh(oe,Js(i,oe)),Mh=qe.frame),qe.frame>=au){au+=Ke.autoSleep||120;var s=oe._first;if((!s||!s._ts)&&Ke.autoSleep&&qe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qe.sleep()}}},t})(Jr);Ze(Re.prototype,{_lock:0,_hasPause:0,_forcing:0});var cv=function(t,e,n,i,s,a,o){var l=new Be(this._pt,t,e,0,1,jh,null,s),c=0,u=0,h,f,p,g,_,m,d,S;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=jr(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(Ka)||[];h=Ka.exec(i);)g=h[0],_=i.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?hr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Ka.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(_h.test(i)||d)&&(l.e=0),this._pt=l,l},Ul=function(t,e,n,i,s,a,o,l,c,u){ue(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:ue(h)?c?t[e.indexOf("set")||!ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=ue(h)?c?pv:$h:Fl,g;if(Me(i)&&(~i.indexOf("random(")&&(i=jr(i)),i.charAt(1)==="="&&(g=hr(f,i)+(be(f)||0),(g||g===0)&&(i=g))),!u||f!==i||rl)return!isNaN(f*i)&&i!==""?(g=new Be(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?_v:Kh,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&Cl(e,i),cv.call(this,t,e,f,i,p,l||Ke.stringFilter,c))},uv=function(t,e,n,i,s){if(ue(t)&&(t=qr(t,s,e,n,i)),!bn(t)||t.style&&t.nodeType||Ae(t)||ph(t))return Me(t)?qr(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=qr(t[o],s,e,n,i);return a},Xh=function(t,e,n,i,s,a){var o,l,c,u;if(We[t]&&(o=new We[t]).init(s,o.rawVars?e[t]:uv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Be(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==or))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Qn,rl,Nl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,S=d&&d.data==="nested"?d.vars.targets:m,y=t._overwrite==="auto"&&!bl,v=t.timeline,C,A,b,w,x,M,P,O,F,H,X,G,Y;if(v&&(!f||!s)&&(s="none"),t._ease=Ui(s,Mr.ease),t._yEase=h?Vh(Ui(h===!0?s:h,Mr.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(O=m[0]?Li(m[0]).harness:0,G=O&&i[O.prop],C=Zs(i,Pl),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?Gs:B0),_._lazy=0),a){if(ui(t._startAt=pe.set(m,Ze({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Fe(l),startAt:null,delay:0,onUpdate:c&&function(){return Ye(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Se||!o&&!p)&&t._startAt.revert(Gs),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),b=Ze({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Fe(l),immediateRender:o,stagger:0,parent:d},C),G&&(b[O.prop]=G),ui(t._startAt=pe.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Se?t._startAt.revert(Gs):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Zt,Zt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Fe(l)||l&&!g,A=0;A<m.length;A++){if(x=m[A],P=x._gsap||Ll(m)[A]._gsap,t._ptLookup[A]=H={},Jo[P.id]&&si.length&&js(),X=S===m?A:S.indexOf(x),O&&(F=new O).init(x,G||C,t,X,S)!==!1&&(t._pt=w=new Be(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){H[V]=w}),F.priority&&(M=1)),!O||G)for(b in C)We[b]&&(F=Xh(b,C,t,X,x,S))?F.priority&&(M=1):H[b]=w=Ul.call(t,x,b,"get",C[b],X,S,0,i.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),y&&t._pt&&(Qn=t,oe.killTweensOf(x,H,t.globalTime(e)),Y=!t.parent,Qn=0),t._pt&&l&&(Jo[P.id]=1)}M&&Zh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,f&&e<=0&&v.render(sn,!0,!0)},hv=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(u=f[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return rl=1,t.vars[e]="+=0",Nl(t,o),rl=0,l?$r(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=fe(n)+be(h.e)),h.b&&(h.b=u.s+be(h.b))},fv=function(t,e){var n=t[0]?Li(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Sr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},dv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ae(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},qr=function(t,e,n,i,s){return ue(t)?t.call(e,n,i,s):Me(t)&&~t.indexOf("random(")?jr(t):t},qh=Dl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Yh={};Oe(qh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Yh[r]=1});var pe=(function(r){fh(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Wr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,S=i.parent||oe,y=(Ae(n)||ph(n)?Vn(n[0]):"length"in i)?[n]:an(n),v,C,A,b,w,x,M,P;if(o._targets=y.length?Ll(y):$r("GSAP target "+n+" not found. https://gsap.com",!Ke.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Ls(c)||Ls(u)){if(i=o.vars,v=o.timeline=new Re({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=Un(o),v._start=0,f||Ls(c)||Ls(u)){if(b=y.length,M=f&&Dh(f),bn(f))for(w in f)~qh.indexOf(w)&&(P||(P={}),P[w]=f[w]);for(C=0;C<b;C++)A=Zs(i,Yh),A.stagger=0,d&&(A.yoyoEase=d),P&&Sr(A,P),x=y[C],A.duration=+qr(c,Un(o),C,x,y),A.delay=(+qr(u,Un(o),C,x,y)||0)-o._delay,!f&&b===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),v.to(x,A,M?M(C,x,y):0),v._ease=Nt.none;v.duration()?c=u=0:o.timeline=0}else if(g){Wr(Ze(v.vars.defaults,{ease:"none"})),v._ease=Ui(g.ease||i.ease||"none");var O=0,F,H,X;if(Ae(g))g.forEach(function(G){return v.to(y,G,">")}),v.duration();else{A={};for(w in g)w==="ease"||w==="easeEach"||dv(w,g[w],A,g.easeEach);for(w in A)for(F=A[w].sort(function(G,Y){return G.t-Y.t}),O=0,C=0;C<F.length;C++)H=F[C],X={ease:H.e,duration:(H.t-(C?F[C-1].t:0))/100*c},X[w]=H.v,v.to(y,X,O),O+=X.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!bl&&(Qn=Un(o),oe.killTweensOf(y),Qn=0),Sn(S,Un(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===ae(S._time)&&Fe(h)&&W0(Un(o))&&S.data!=="nested")&&(o._tTime=-Zt,o.render(Math.max(0,-u)||0)),m&&wh(Un(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Zt&&!u?l:i<Zt?0:i,f,p,g,_,m,d,S,y,v;if(!c)q0(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=ae(h%_),h===l?(g=this._repeat,f=c):(m=ae(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(v=this._yEase,f=c-f),m=yr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(y&&this._yEase&&Gh(y,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(ae(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Rh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&h&&!s&&!m&&(Ye(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Qo(this,i,s,a),Ye(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ye(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Qo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ui(this,1),!s&&!(u&&!o)&&(h||o||d)&&(Ye(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Zr||qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Nl(this,c),u=this._ease(c/this._dur),hv(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(fa(this,0),this.parent||bh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Se),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qn&&Qn.vars.overwrite!==!0)._first||Vr(this),this.parent&&a!==this.timeline.totalDuration()&&Er(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?an(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&G0(o,l))return s==="all"&&(this._pt=0),Vr(this);for(h=this._op=this._op||[],s!=="all"&&(Me(s)&&(_={},Oe(s,function(S){return _[S]=1}),s=_),s=fv(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ua(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Vr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Xr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Xr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return oe.killTweensOf(i,s,a)},t})(Jr);Ze(pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Oe("staggerTo,staggerFrom,staggerFromTo",function(r){pe[r]=function(){var t=new Re,e=el.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Fl=function(t,e,n){return t[e]=n},$h=function(t,e,n){return t[e](n)},pv=function(t,e,n,i){return t[e](i.fp,n)},mv=function(t,e,n){return t.setAttribute(e,n)},Ol=function(t,e){return ue(t[e])?$h:Al(t[e])&&t.setAttribute?mv:Fl},Kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_v=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},gv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},vv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ua(this,e,"_pt"):e.dep||(n=1),e=i;return!n},xv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Zh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Be=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Kh,this.d=l||this,this.set=c||Fl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xv,this.m=n,this.mt=s,this.tween=i},r})();Oe(Dl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Pl[r]=1});je.TweenMax=je.TweenLite=pe;je.TimelineLite=je.TimelineMax=Re;oe=new Re({sortChildren:!1,defaults:Mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ke.stringFilter=kh;var Ni=[],Ws={},Mv=[],fu=0,Sv=0,to=function(t){return(Ws[t]||Mv).map(function(e){return e()})},sl=function(){var t=Date.now(),e=[];t-fu>2&&(to("matchMediaInit"),Ni.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=xn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),to("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fu=t,to("matchMedia"))},Jh=(function(){function r(e,n){this.selector=n&&nl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Sv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ue(n)&&(s=i,i=n,n=ue);var a=this,o=function(){var c=re,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=nl(s)),re=a,h=i.apply(a,arguments),ue(h)&&a._r.push(h),re=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof pe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Re?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof pe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ni.length;a--;)Ni[a].id===this.id&&Ni.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),yv=(function(){function r(e){this.contexts=[],this.scope=e,re&&re.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){bn(n)||(n={matches:n});var a=new Jh(0,s||this.scope),o=a.conditions={},l,c,u;re&&!a.selector&&(a.selector=re.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=xn.matchMedia(n[c]),l&&(Ni.indexOf(a)<0&&Ni.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(sl):l.addEventListener("change",sl)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Qs={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Oh(i)})},timeline:function(t){return new Re(t)},getTweensOf:function(t,e){return oe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Me(t)&&(t=an(t)[0]);var s=Li(t||{}).get,a=n?Th:Eh;return n==="native"&&(n=""),t&&(e?a((We[e]&&We[e].get||s)(t,e,n,i)):function(o,l,c){return a((We[o]&&We[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=an(t),t.length>1){var i=t.map(function(u){return ke.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=We[e],o=Li(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;or._pt=0,h.init(t,n?u+n:u,or,0,[t]),h.render(1,h),or._pt&&Bl(1,or)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=ke.to(t,Ze((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return oe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ui(t.ease,Mr.ease)),ou(Mr,t||{})},config:function(t){return ou(Ke,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!We[o]&&!je[o]&&$r(e+" effect requires "+o+" plugin.")}),ja[e]=function(o,l,c){return n(an(o),Ze(l||{},s),c)},a&&(Re.prototype[e]=function(o,l,c){return this.add(ja[e](o,bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Nt[t]=Ui(e)},parseEase:function(t,e){return arguments.length?Ui(t,e):Nt},getById:function(t){return oe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Re(t),i,s;for(n.smoothChildTiming=Fe(t.smoothChildTiming),oe.remove(n),n._dp=0,n._time=n._tTime=oe._time,i=oe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof pe&&i.vars.onComplete===i._targets[0]))&&Sn(n,i,i._start-i._delay),i=s;return Sn(oe,n,0),n},context:function(t,e){return t?new Jh(t,e):re},matchMedia:function(t){return new yv(t)},matchMediaRefresh:function(){return Ni.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||sl()},addEventListener:function(t,e){var n=Ws[t]||(Ws[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ws[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tv,wrapYoyo:ev,distribute:Dh,random:Ih,snap:Lh,normalize:Q0,getUnit:be,clamp:K0,splitColor:Bh,toArray:an,selector:nl,mapRange:Nh,pipe:Z0,unitize:J0,interpolate:nv,shuffle:Ph},install:vh,effects:ja,ticker:qe,updateRoot:Re.updateRoot,plugins:We,globalTimeline:oe,core:{PropTween:Be,globals:xh,Tween:pe,Timeline:Re,Animation:Jr,getCache:Li,_removeLinkedListItem:ua,reverting:function(){return Se},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return bl=t}}};Oe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qs[r]=pe[r]});qe.add(Re.updateRoot);or=Qs.to({},{duration:0});var Ev=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Tv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ev(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},eo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Me(s)&&(l={},Oe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Tv(o,s)}}}},ke=Qs.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Se?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},eo("roundProps",il),eo("modifiers"),eo("snap",Lh))||Qs;pe.version=Re.version=ke.version="3.14.2";gh=1;wl()&&Tr();Nt.Power0;Nt.Power1;Nt.Power2;Nt.Power3;Nt.Power4;Nt.Linear;Nt.Quad;Nt.Cubic;Nt.Quart;Nt.Quint;Nt.Strong;Nt.Elastic;Nt.Back;Nt.SteppedEase;Nt.Bounce;Nt.Sine;Nt.Expo;Nt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var du,ti,fr,zl,Di,pu,kl,bv=function(){return typeof window<"u"},Gn={},Ai=180/Math.PI,dr=Math.PI/180,tr=Math.atan2,mu=1e8,Vl=/([A-Z])/g,Av=/(left|right|width|margin|padding|x)/i,wv=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},al=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Pv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Dv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Qh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},tf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Lv=function(t,e,n){return t.style[e]=n},Iv=function(t,e,n){return t.style.setProperty(e,n)},Uv=function(t,e,n){return t._gsap[e]=n},Nv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Fv=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Ov=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},le="transform",ze=le+"Origin",Bv=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Gn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=En[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Nn(i,o)}):this.tfm[t]=a.x?a[t]:Nn(i,t),t===ze&&(this.tfm.zOrigin=a.zOrigin);else return En.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ze,e,"")),t=le}(s||e)&&this.props.push(t,e,s[t])},ef=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Vl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=kl(),(!s||!s.isStart)&&!n[le]&&(ef(n),i.zOrigin&&n[ze]&&(n[ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nf=function(t,e){var n={target:t,props:[],revert:zv,save:Bv};return t._gsap||ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},rf,ol=function(t,e){var n=ti.createElementNS?ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ti.createElement(t);return n&&n.style?n:ti.createElement(t)},$e=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Vl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,br(e)||e,1)||""},_u="O,Moz,ms,Ms,Webkit".split(","),br=function(t,e,n){var i=e||Di,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(_u[a]+t in s););return a<0?null:(a===3?"ms":a>=0?_u[a]:"")+t},ll=function(){bv()&&window.document&&(du=window,ti=du.document,fr=ti.documentElement,Di=ol("div")||{style:{}},ol("div"),le=br(le),ze=le+"Origin",Di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rf=!!br("perspective"),kl=ke.core.reverting,zl=1)},gu=function(t){var e=t.ownerSVGElement,n=ol("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fr.removeChild(n),s},vu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},sf=function(t){var e,n;try{e=t.getBBox()}catch{e=gu(t),n=1}return e&&(e.width||e.height)||n||(e=gu(t)),e&&!e.width&&!e.x&&!e.y?{x:+vu(t,["x","cx","x1"])||0,y:+vu(t,["y","cy","y1"])||0,width:0,height:0}:e},af=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&sf(t))},hi=function(t,e){if(e){var n=t.style,i;e in Gn&&e!==ze&&(e=le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Vl,"-$1").toLowerCase())):n.removeAttribute(e)}},ei=function(t,e,n,i,s,a){var o=new Be(t._pt,e,n,0,1,a?tf:Qh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},xu={deg:1,rad:1,turn:1},kv={grid:1,flex:1},fi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Di.style,l=Av.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||xu[i]||xu[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&af(t),(p||a==="%")&&(Gn[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],fe(p?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ti||!_.appendChild)&&(_=ti.body),m=_._gsap,m&&p&&m.width&&l&&m.time===qe.time&&!m.uncache)return fe(s/m.width*h);if(p&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=h+i,g=t[u],S?t.style[e]=S:hi(t,e)}else(p||a==="%")&&!kv[$e(_,"display")]&&(o.position=$e(t,"position")),_===t&&(o.position="static"),_.appendChild(Di),g=Di[u],_.removeChild(Di),o.position="absolute";return l&&p&&(m=Li(_),m.time=qe.time,m.width=_[u]),fe(f?g*s/h:g&&s?h/g*s:0)},Nn=function(t,e,n,i){var s;return zl||ll(),e in En&&e!=="transform"&&(e=En[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gn[e]&&e!=="transform"?(s=ts(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ea($e(t,ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ta[e]&&ta[e](t,e,n)||$e(t,e)||Sh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?fi(t,e,s,n)+n:s},Vv=function(t,e,n,i){if(!n||n==="none"){var s=br(e,t,1),a=s&&$e(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=$e(t,"borderTopColor"))}var o=new Be(this._pt,t.style,e,0,1,jh),l=0,c=0,u,h,f,p,g,_,m,d,S,y,v,C;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=$e(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=$e(t,e)||i,_?t.style[e]=_:hi(t,e)),u=[n,i],kh(u),n=u[0],i=u[1],f=n.match(ar)||[],C=i.match(ar)||[],C.length){for(;h=ar.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),m.charAt(1)==="="&&(m=hr(p,m)+v),d=parseFloat(m),y=m.substr((d+"").length),l=ar.lastIndex-y.length,y||(y=y||Ke.units[e]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(p=fi(t,e,_,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?tf:Qh;return _h.test(i)&&(o.e=0),this._pt=o,o},Mu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Mu[n]||n,e[1]=Mu[i]||i,e.join(" ")},Hv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Gn[o]&&(l=1,o=o==="transformOrigin"?ze:le),hi(n,o);l&&(hi(n,le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ts(n,1),a.uncache=1,ef(i)))}},ta={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Be(t._pt,e,n,0,0,Hv);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Qr=[1,0,0,1,0,0],of={},lf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Su=function(t){var e=$e(t,le);return lf(e)?Qr:e.substr(7).match(mh).map(fe)},Gl=function(t,e){var n=t._gsap||Li(t),i=t.style,s=Su(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qr:s):(s===Qr&&!t.offsetParent&&t!==fr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,fr.appendChild(t)),s=Su(t),l?i.display=l:hi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):fr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cl=function(t,e,n,i,s,a){var o=t._gsap,l=s||Gl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],S=l[5],y=e.split(" "),v=parseFloat(y[0])||0,C=parseFloat(y[1])||0,A,b,w,x;n?l!==Qr&&(b=p*m-g*_)&&(w=v*(m/b)+C*(-_/b)+(_*S-m*d)/b,x=v*(-g/b)+C*(p/b)-(p*S-g*d)/b,v=w,C=x):(A=sf(t),v=A.x+(~y[0].indexOf("%")?v/100*A.width:v),C=A.y+(~(y[1]||y[0]).indexOf("%")?C/100*A.height:C)),i||i!==!1&&o.smooth?(d=v-c,S=C-u,o.xOffset=h+(d*p+S*_)-d,o.yOffset=f+(d*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ze]="0px 0px",a&&(ei(a,o,"xOrigin",c,v),ei(a,o,"yOrigin",u,C),ei(a,o,"xOffset",h,o.xOffset),ei(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+C)},ts=function(t,e){var n=t._gsap||new Wh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=$e(t,ze)||"0",u,h,f,p,g,_,m,d,S,y,v,C,A,b,w,x,M,P,O,F,H,X,G,Y,V,et,at,dt,Tt,Wt,q,J;return u=h=f=_=m=d=S=y=v=0,p=g=1,n.svg=!!(t.getCTM&&af(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[le]!=="none"?l[le]:"")),i.scale=i.rotate=i.translate="none"),b=Gl(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),cl(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,A=n.yOrigin||0,b!==Qr&&(P=b[0],O=b[1],F=b[2],H=b[3],u=X=b[4],h=G=b[5],b.length===6?(p=Math.sqrt(P*P+O*O),g=Math.sqrt(H*H+F*F),_=P||O?tr(O,P)*Ai:0,S=F||H?tr(F,H)*Ai+_:0,S&&(g*=Math.abs(Math.cos(S*dr))),n.svg&&(u-=C-(C*P+A*F),h-=A-(C*O+A*H))):(J=b[6],Wt=b[7],at=b[8],dt=b[9],Tt=b[10],q=b[11],u=b[12],h=b[13],f=b[14],w=tr(J,Tt),m=w*Ai,w&&(x=Math.cos(-w),M=Math.sin(-w),Y=X*x+at*M,V=G*x+dt*M,et=J*x+Tt*M,at=X*-M+at*x,dt=G*-M+dt*x,Tt=J*-M+Tt*x,q=Wt*-M+q*x,X=Y,G=V,J=et),w=tr(-F,Tt),d=w*Ai,w&&(x=Math.cos(-w),M=Math.sin(-w),Y=P*x-at*M,V=O*x-dt*M,et=F*x-Tt*M,q=H*M+q*x,P=Y,O=V,F=et),w=tr(O,P),_=w*Ai,w&&(x=Math.cos(w),M=Math.sin(w),Y=P*x+O*M,V=X*x+G*M,O=O*x-P*M,G=G*x-X*M,P=Y,X=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=fe(Math.sqrt(P*P+O*O+F*F)),g=fe(Math.sqrt(G*G+J*J)),w=tr(X,G),S=Math.abs(w)>2e-4?w*Ai:0,v=q?1/(q<0?-q:q):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!lf($e(t,le)),Y&&t.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=fe(p),n.scaleY=fe(g),n.rotation=fe(_)+o,n.rotationX=fe(m)+o,n.rotationY=fe(d)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ze]=ea(c)),n.xOffset=n.yOffset=0,n.force3D=Ke.force3D,n.renderTransform=n.svg?Xv:rf?cf:Wv,n.uncache=0,n},ea=function(t){return(t=t.split(" "))[0]+" "+t[1]},no=function(t,e,n){var i=be(e);return fe(parseFloat(e)+parseFloat(fi(t,"x",n+"px",i)))+i},Wv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,cf(t,e)},yi="0deg",Br="0px",Ei=") ",cf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,S=n.target,y=n.zOrigin,v="",C=d==="auto"&&t&&t!==1||d===!0;if(y&&(h!==yi||u!==yi)){var A=parseFloat(u)*dr,b=Math.sin(A),w=Math.cos(A),x;A=parseFloat(h)*dr,x=Math.cos(A),a=no(S,a,b*x*-y),o=no(S,o,-Math.sin(A)*-y),l=no(S,l,w*x*-y+y)}m!==Br&&(v+="perspective("+m+Ei),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(C||a!==Br||o!==Br||l!==Br)&&(v+=l!==Br||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ei),c!==yi&&(v+="rotate("+c+Ei),u!==yi&&(v+="rotateY("+u+Ei),h!==yi&&(v+="rotateX("+h+Ei),(f!==yi||p!==yi)&&(v+="skew("+f+", "+p+Ei),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ei),S.style[le]=v||"translate(0, 0)"},Xv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,S=n.forceCSS,y=parseFloat(a),v=parseFloat(o),C,A,b,w,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=dr,c*=dr,C=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-f,w=Math.cos(l-c)*f,c&&(u*=dr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),b*=x,w*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),C*=x,A*=x)),C=fe(C),A=fe(A),b=fe(b),w=fe(w)):(C=h,w=f,A=b=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=fi(p,"x",a,"px"),v=fi(p,"y",o,"px")),(g||_||m||d)&&(y=fe(y+g-(g*C+_*b)+m),v=fe(v+_-(g*A+_*w)+d)),(i||s)&&(x=p.getBBox(),y=fe(y+i/100*x.width),v=fe(v+s/100*x.height)),x="matrix("+C+","+A+","+b+","+w+","+y+","+v+")",p.setAttribute("transform",x),S&&(p.style[le]=x)},qv=function(t,e,n,i,s){var a=360,o=Me(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ai:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*mu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*mu)%a-~~(c/a)*a)),t._pt=f=new Be(t._pt,e,n,i,c,Rv),f.e=u,f.u="deg",t._props.push(n),f},yu=function(t,e){for(var n in e)t[n]=e[n];return t},Yv=function(t,e,n){var i=yu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[le]=e,o=ts(n,1),hi(n,le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[le],a[le]=e,o=ts(n,1),a[le]=c);for(l in Gn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=be(c),g=be(u),h=p!==g?fi(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Be(t._pt,o,l,h,f-h,al),t._pt.u=g||0,t._props.push(l));yu(o,i)};Oe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ta[t>1?"border"+r:r]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Nn(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,h)}});var uf={name:"css",register:ll,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,p,g,_,m,d,S,y,v,C,A,b,w,x;zl||ll(),this.styles=this.styles||nf(t),w=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(We[_]&&Xh(_,e,n,i,t,s)))){if(p=typeof u,g=ta[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=jr(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ai.lastIndex=0,ai.test(c)||(m=be(c),d=be(u),d?m!==d&&(c=fi(t,_,c,d)+d):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),w.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Me(c)&&~c.indexOf("random(")&&(c=jr(c)),be(c+"")||c==="auto"||(c+=Ke.units[_]||be(Nn(t,_))||""),(c+"").charAt(1)==="="&&(c=Nn(t,_))):c=Nn(t,_),f=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in En&&(_==="autoAlpha"&&(f===1&&Nn(t,"visibility")==="hidden"&&h&&(f=0),w.push("visibility",0,o.visibility),ei(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=En[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Gn,y){if(this.styles.save(_),x=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=$e(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=u,u=$e(t,"perspective"),M?t.style.perspective=M:hi(t,"perspective")}h=parseFloat(u)}if(v||(C=t._gsap,C.renderTransform&&!e.parseTransform||ts(t,e.parseTransform),A=e.smoothOrigin!==!1&&C.smooth,v=this._pt=new Be(this._pt,o,le,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new Be(this._pt,C,"scaleY",C.scaleY,(S?hr(C.scaleY,S+h):h)-C.scaleY||0,al),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){w.push(ze,0,o[ze]),u=Gv(u),C.svg?cl(t,u,0,A,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==C.zOrigin&&ei(this,C,"zOrigin",C.zOrigin,d),ei(this,o,_,ea(c),ea(u)));continue}else if(_==="svgOrigin"){cl(t,u,1,A,0,this);continue}else if(_ in of){qv(this,C,_,f,S?hr(f,S+u):u);continue}else if(_==="smoothOrigin"){ei(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){Yv(this,u,t);continue}}else _ in o||(_=br(_)||_);if(y||(h||h===0)&&(f||f===0)&&!wv.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),d=be(u)||(_ in Ke.units?Ke.units[_]:m),m!==d&&(f=fi(t,_,c,d)),this._pt=new Be(this._pt,y?C:o,_,f,(S?hr(f,S+h):h)-f,!y&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Dv:al),this._pt.u=d||0,y&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=Pv):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Cv);else if(_ in o)Vv.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Cl(_,u);continue}y||(_ in o?w.push(_,0,o[_]):typeof t[_]=="function"?w.push(_,2,t[_]()):w.push(_,1,c||t[_])),a.push(_)}}b&&Zh(this)},render:function(t,e){if(e.tween._time||!kl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Nn,aliases:En,getSetter:function(t,e,n){var i=En[e];return i&&i.indexOf(",")<0&&(e=i),e in Gn&&e!==ze&&(t._gsap.x||Nn(t,"x"))?n&&pu===n?e==="scale"?Nv:Uv:(pu=n||{})&&(e==="scale"?Fv:Ov):t.style&&!Al(t.style[e])?Lv:~e.indexOf("-")?Iv:Ol(t,e)},core:{_removeProperty:hi,_getMatrix:Gl}};ke.utils.checkPrefix=br;ke.core.getStyleSaver=nf;(function(r,t,e,n){var i=Oe(r+","+t+","+e,function(s){Gn[s]=1});Oe(t,function(s){Ke.units[s]="deg",of[s]=1}),En[i[13]]=r+","+t,Oe(n,function(s){var a=s.split(":");En[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ke.units[r]="px"});ke.registerPlugin(uf);var Zn=ke.registerPlugin(uf)||ke;Zn.core.Tween;const $v={skills:{languages:[{name:"Python",icon:"devicon-python-plain"},{name:"Java",icon:"devicon-java-plain"},{name:"Dart",icon:"devicon-dart-plain"},{name:"C",icon:"devicon-c-plain"},{name:"JavaScript",icon:"devicon-javascript-plain"},{name:"SQL",icon:"fas fa-database"}],frameworks:[{name:"React.js",icon:"devicon-react-original"},{name:"Node.js",icon:"devicon-nodejs-plain"},{name:"Express.js",icon:"devicon-express-original"},{name:"Flask",icon:"devicon-flask-original"},{name:"Next.js",icon:"devicon-nextjs-original"},{name:"Flutter",icon:"devicon-flutter-plain"},{name:"RESTful APIs",icon:"fas fa-network-wired"}],tools:[{name:"Git",icon:"devicon-git-plain"},{name:"GitHub",icon:"devicon-github-original"},{name:"VSCode",icon:"devicon-vscode-plain"},{name:"Google Colab",icon:"fas fa-code"},{name:"Postman",icon:"fas fa-rocket"},{name:"n8n",icon:"fas fa-project-diagram"},{name:"Android Studio",icon:"devicon-android-plain"}],cloudDatabases:[{name:"Firebase",icon:"devicon-firebase-plain"},{name:"Supabase",icon:"devicon-supabase-plain"},{name:"MongoDB",icon:"devicon-mongodb-plain"},{name:"Pinecone Vector DB",icon:"fas fa-brain"},{name:"Firestore",icon:"fas fa-fire"},{name:"MySQL",icon:"devicon-mysql-plain"}],specializations:[{name:"Full stack Web Development",icon:"fas fa-laptop-code"},{name:"Software Development",icon:"fas fa-terminal"},{name:"AI Automations Integrations",icon:"fas fa-robot"},{name:"Database Design",icon:"fas fa-table"}],methodologies:[{name:"Agile Development",icon:"fas fa-sync"},{name:"SDLC",icon:"fas fa-cogs"},{name:"API Integration",icon:"fas fa-plug"},{name:"Version Control (Git)",icon:"devicon-git-plain"},{name:"DevOps Practices",icon:"fas fa-infinity"}],softSkills:[{name:"Technical Leadership",icon:"fas fa-users"},{name:"Cross-functional Collaboration",icon:"fas fa-handshake"},{name:"Research Development",icon:"fas fa-microscope"},{name:"Mentoring",icon:"fas fa-chalkboard-teacher"}]}};class Kv{constructor(){this.context={user:{last_viewed_section:"hero",viewed_sections:new Set(["hero"]),session_start:Date.now(),interaction_count:0},environment:{theme:"dark",three_js_active:!0}}}updateSection(t){this.context.user.last_viewed_section=t,this.context.user.viewed_sections.add(t),this.context.user.interaction_count++,this.logContext()}logContext(){console.log("ACP Context Updated:",{...this.context.user,viewed_sections:Array.from(this.context.user.viewed_sections)})}getPromptContext(){return`User is currently viewing ${this.context.user.last_viewed_section}. They have seen: ${Array.from(this.context.user.viewed_sections).join(", ")}.`}}const Eu=new Kv,gn=new E0,oi=new Xe(75,window.innerWidth/window.innerHeight,.1,1e3),da=new y0({canvas:document.querySelector("#bg"),antialias:!0,alpha:!0});da.setPixelRatio(Math.min(window.devicePixelRatio,2));da.setSize(window.innerWidth,window.innerHeight);oi.position.setZ(60);const pa=2500,Xs=new Float32Array(pa*3),qs=new Float32Array(pa*3),jv=new Float32Array(pa);for(let r=0;r<pa;r++){Xs[r*3]=(Math.random()-.5)*300,Xs[r*3+1]=(Math.random()-.5)*300,Xs[r*3+2]=(Math.random()-.5)*300;const t=Math.random();qs[r*3]=.55+t*.2,qs[r*3+1]=.32+t*.1,qs[r*3+2]=.2+t*.1,jv[r]=Math.random()*.3+.05}const Hl=new Je;Hl.setAttribute("position",new on(Xs,3));Hl.setAttribute("color",new on(qs,3));const Zv=new ch({size:.18,vertexColors:!0,transparent:!0,opacity:.4,blending:so,depthWrite:!1}),ul=new T0(Hl,Zv);gn.add(ul);const hf=[],Tu=[new ln(2.5,2.5,2.5),new ln(4,.12,4),new yl(1.2,1.2,3,6),new Tl(1.5,2.2,6),new ln(3.5,.08,.08),new El(1.8,0)];for(let r=0;r<18;r++){const t=Tu[r%Tu.length],e=Math.random()*.06+.03,n=new Gt().setHSL(e,.6,.4),i=new di({color:n,wireframe:!0,transparent:!0,opacity:.25+Math.random()*.15,emissive:n,emissiveIntensity:.15}),s=new me(t,i);s.position.set((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*150),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),s.userData={speed:.001+Math.random()*.004,amplitude:.5+Math.random()*1.5,phase:Math.random()*Math.PI*2,rotSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01}},gn.add(s),hf.push(s)}const ni=new sr,bu=new di({color:12868926,wireframe:!0,transparent:!0,opacity:.3,emissive:12868926,emissiveIntensity:.25}),Au=new di({color:9136970,transparent:!0,opacity:.18,emissive:9136970,emissiveIntensity:.15}),Jv=new ln(1.2,1.2,1.2),Qv=new ln(.15,.15,.15),wu=new ln(1,.06,.06),er=6,nr=4.5;for(let r=0;r<er;r++)for(let t=0;t<er;t++){const e=(r-er/2)*nr,n=(t-er/2)*nr;if((r+t)%3===0){const i=new me(Jv,bu);i.position.set(e,n,0),ni.add(i)}else{const i=new me(Qv,bu);i.position.set(e,n,0),ni.add(i)}if(r<er-1&&Math.random()>.25){const i=new me(wu,Au);i.scale.x=nr,i.position.set(e+nr/2,n,0),ni.add(i)}if(t<er-1&&Math.random()>.25){const i=new me(wu,Au);i.scale.x=nr,i.rotation.z=Math.PI/2,i.position.set(e,n+nr/2,0),ni.add(i)}}ni.position.set(70,0,-40);gn.add(ni);const Wl=[],tx=new la(5,1),ex=new di({color:12868926,wireframe:!0,emissive:7024672,emissiveIntensity:.25}),nx=["about","skills","projects","contact"];nx.forEach((r,t)=>{const e=new me(tx,ex.clone());e.position.set((t-1.5)*35,Math.sin(t)*8,0),e.userData={section:r},gn.add(e),Wl.push(e)});const ix=new w0(16774638,.3);gn.add(ix);const ff=new hh(12868926,1.5);ff.position.set(30,30,30);gn.add(ff);const df=new hh(13936723,.8);df.position.set(-40,-30,20);gn.add(df);const Ie=new sr,rx=new di({color:9136970,wireframe:!0,transparent:!0,opacity:.3,emissive:12868926,emissiveIntensity:.15});[8,13,18].forEach((r,t)=>{const e=new ln(r,r,r),n=new me(e,rx.clone());n.rotation.set(t*.25,t*.35,t*.15),Ie.add(n)});const sx=new di({color:12868926,wireframe:!0,transparent:!0,opacity:.2,emissive:12868926,emissiveIntensity:.3}),ax=new me(new la(3,1),sx);Ie.add(ax);Ie.position.set(-50,20,-20);gn.add(Ie);const ox=new ca(25,.3,16,100),lx=new di({color:12868926,transparent:!0,opacity:.1,emissive:12868926,emissiveIntensity:.2}),ma=new me(ox,lx);ma.rotation.x=Math.PI/2.5;ma.position.set(0,0,20);gn.add(ma);const as=new me(new ca(30,.2,16,100),new di({color:9136970,transparent:!0,opacity:.07,emissive:9136970,emissiveIntensity:.15}));as.rotation.x=Math.PI/3;as.rotation.y=Math.PI/6;as.position.set(0,0,20);gn.add(as);const io=new C0,Hr=new Ut;let pf=0,mf=0;window.addEventListener("mousemove",r=>{Hr.x=r.clientX/window.innerWidth*2-1,Hr.y=-(r.clientY/window.innerHeight)*2+1,pf=r.clientX,mf=r.clientY,Zn.to(oi.position,{x:Hr.x*4,y:Hr.y*4,duration:2.5,ease:"power2.out"})});window.addEventListener("click",()=>{var e,n;io.setFromCamera(Hr,oi);const r=io.intersectObjects(Wl),t=io.intersectObjects(Ie.children);if(r.length>0){const i=r[0].object,s=i.userData.section;Eu.updateSection(s),(e=document.getElementById(s))==null||e.scrollIntoView({behavior:"smooth"}),Zn.to(i.scale,{x:1.4,y:1.4,z:1.4,duration:.4,yoyo:!0,repeat:1}),Zn.to(oi.position,{z:40,duration:.8,onComplete:()=>Zn.to(oi.position,{z:60,duration:1.5})})}else t.length>0&&(Zn.to(Ie.rotation,{x:Ie.rotation.x+Math.PI,y:Ie.rotation.y+Math.PI/2,duration:1.2,ease:"power2.inOut"}),Ie.children.forEach(i=>{i.material&&(i.material.emissiveIntensity=.5)}),Zn.delayedCall(1,()=>{Ie.children.forEach(i=>{i.material&&Zn.to(i.material,{emissiveIntensity:.15,duration:.8})})}),(n=document.getElementById("skills"))==null||n.scrollIntoView({behavior:"smooth"}),Eu.updateSection("skills_knot"))});const cx=new R0;function _f(){requestAnimationFrame(_f);const r=cx.getElapsedTime();ul.rotation.y+=4e-4,ul.rotation.x+=1e-4,Wl.forEach((t,e)=>{t.rotation.x+=.004,t.rotation.y+=.004,t.position.y+=Math.sin(r*1.2+e)*.012}),Ie.rotation.y+=.006,Ie.rotation.x+=.003,Ie.position.y=20+Math.cos(r*.8)*3,Ie.children.forEach((t,e)=>{t.rotation.y+=.002*(e+1),t.rotation.z+=.001*(e+1)}),hf.forEach(t=>{const e=t.userData;t.rotation.x+=e.rotSpeed.x,t.rotation.y+=e.rotSpeed.y,t.position.y+=Math.sin(r*e.speed*100+e.phase)*.02*e.amplitude}),ni.rotation.y+=.002,ni.rotation.x=Math.sin(r*.3)*.1,ma.rotation.z+=.002,as.rotation.z-=.0015,da.render(gn,oi)}_f();const Is=document.querySelector(".cursor-dot"),ir=document.querySelector(".cursor-ring");if(Is&&ir){let n=function(){r+=(pf-r)*e,t+=(mf-t)*e,ir.style.left=`${r}px`,ir.style.top=`${t}px`,ir.style.transform="translate(-50%, -50%)",requestAnimationFrame(n)};var gx=n;let r=0,t=0;const e=.15;document.addEventListener("mousemove",s=>{Is.style.left=`${s.clientX}px`,Is.style.top=`${s.clientY}px`,Is.style.transform="translate(-50%, -50%)"}),n(),document.querySelectorAll("a, button, .btn, .skill-item, .project-card, .domain-card, .social-icon, .magnetic-btn").forEach(s=>{s.addEventListener("mouseenter",()=>ir.classList.add("hover")),s.addEventListener("mouseleave",()=>ir.classList.remove("hover"))})}const Ru=document.querySelector(".scroll-progress");window.addEventListener("scroll",()=>{const r=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;Ru&&t>0&&(Ru.style.width=`${r/t*100}%`)});const Cu=document.getElementById("navbar"),ux=document.querySelectorAll(".nav-link"),hx=document.querySelectorAll("section[id]");window.addEventListener("scroll",()=>{Cu&&Cu.classList.toggle("scrolled",window.scrollY>60);let r="";hx.forEach(t=>{const e=t.offsetTop-200;window.scrollY>=e&&(r=t.getAttribute("id"))}),ux.forEach(t=>{t.classList.toggle("active",t.getAttribute("data-section")===r)})});const Us=document.getElementById("hamburger"),Ns=document.querySelector(".nav-links");Us&&Ns&&(Us.addEventListener("click",()=>{Us.classList.toggle("active"),Ns.classList.toggle("active")}),Ns.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",()=>{Us.classList.remove("active"),Ns.classList.remove("active")})}));const Pu=document.getElementById("typewriter"),Du=["Full-Stack Developer","AI Automation Specialist","Product Builder","Open Source Contributor","Community Leader"];if(Pu){let n=function(){const i=Du[r];if(Pu.textContent=i.substring(0,t),e)t--,t===0&&(e=!1,r=(r+1)%Du.length);else if(t++,t>i.length){e=!0,setTimeout(n,1800);return}setTimeout(n,e?40:80)};var vx=n;let r=0,t=0,e=!1;n()}const fx=document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right"),Xl=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&(t.target.classList.add("revealed"),Xl.unobserve(t.target))})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});fx.forEach((r,t)=>{r.style.transitionDelay=`${t*.05}s`,Xl.observe(r)});const dx=document.querySelectorAll(".stat-number"),gf=new IntersectionObserver(r=>{r.forEach(t=>{if(t.isIntersecting){const e=t.target,n=parseInt(e.getAttribute("data-target"),10);px(e,n),gf.unobserve(e)}})},{threshold:.5});dx.forEach(r=>gf.observe(r));function px(r,t){const n=performance.now();function i(s){const a=Math.min((s-n)/2e3,1),o=1-Math.pow(1-a,3);r.textContent=Math.floor(o*t),a<1?requestAnimationFrame(i):r.textContent=t}requestAnimationFrame(i)}document.querySelectorAll(".tilt-card").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,s=e.width/2,a=e.height/2,o=(i-a)/a*-6,l=(n-s)/s*6;r.style.transform=`perspective(1000px) rotateX(${o}deg) rotateY(${l}deg) translateY(-8px)`}),r.addEventListener("mouseleave",()=>{r.style.transform="perspective(1000px) rotateX(0) rotateY(0) translateY(0)"})});const mx=document.querySelectorAll(".domain-card");mx.forEach(r=>{r.addEventListener("click",()=>{r.classList.toggle("flipped")}),r.addEventListener("mousemove",t=>{if(r.classList.contains("flipped"))return;const e=r.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,s=e.width/2,a=e.height/2,o=(i-a)/a*-3,l=(n-s)/s*3,c=r.querySelector(".domain-card-inner");c&&(c.style.transform=`rotateX(${o}deg) rotateY(${l}deg)`)}),r.addEventListener("mouseleave",()=>{const t=r.querySelector(".domain-card-inner");t&&!r.classList.contains("flipped")?t.style.transform="rotateX(0) rotateY(0)":t&&r.classList.contains("flipped")&&(t.style.transform="rotateY(180deg)")})});document.querySelectorAll(".magnetic-btn").forEach(r=>{r.addEventListener("mousemove",t=>{const e=r.getBoundingClientRect(),n=t.clientX-e.left-e.width/2,i=t.clientY-e.top-e.height/2;r.style.transform=`translate(${n*.25}px, ${i*.25}px)`}),r.addEventListener("mouseleave",()=>{r.style.transform="translate(0, 0)"})});const ro=document.getElementById("back-to-top");ro&&(window.addEventListener("scroll",()=>{ro.classList.toggle("visible",window.scrollY>500)}),ro.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));function _x(){const r=document.querySelector("#skills-grid");if(!r)return;Object.entries({languages:"Programming Languages",frameworks:"Frameworks & Libraries",tools:"Development Tools",cloudDatabases:"Cloud & Databases",specializations:"Specializations",methodologies:"Methodologies",softSkills:"Soft Skills"}).forEach(([e,n])=>{const i=$v.skills[e];if(!i)return;const s=document.createElement("div");s.className="skill-category reveal-up",s.innerHTML=`
      <h4>${n}</h4>
      <div class="skills-list">
        ${i.map(a=>`
          <div class="skill-item">
            <i class="${a.icon}"></i>
            <span>${a.name}</span>
          </div>
        `).join("")}
      </div>
    `,r.appendChild(s),Xl.observe(s)})}_x();document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const e=document.querySelector(r.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth"})})});window.addEventListener("resize",()=>{oi.aspect=window.innerWidth/window.innerHeight,oi.updateProjectionMatrix(),da.setSize(window.innerWidth,window.innerHeight)});
