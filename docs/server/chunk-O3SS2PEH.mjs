import './polyfills.server.mjs';
import{$ as j,$a as U4,A as g,Aa as O4,B as K,Ba as E4,C as J1,Ca as S3,D as M,Da as w3,E as x1,Ea as _1,F as x,Fa as x3,G as H,Ga as K1,H as E,Ha as b1,I as V1,J as z1,K as C1,Ka as R4,L as H2,M as z3,N as L4,O as A1,Oa as S2,P as S4,Pa as A3,Q as w4,Qa as w2,R as $1,S as x4,Sa as x2,T as X,Ta as F4,U as q1,Ua as P4,V as M2,Va as I4,W as V2,Wa as B4,X as b,Xa as G4,Y as v,Ya as N1,Z as z2,_ as C2,a as g2,aa as Y1,b as q,ba as Z,c as l1,ca as h1,d as M4,da as e1,db as A2,e as V4,ea as L,eb as j4,f as p3,fa as A4,g as f1,ga as c1,gb as W4,h as v3,ha as _2,hb as J4,i as z4,ia as N4,ib as N3,j as Q,ja as C3,k as g3,ka as _3,l as C4,la as b3,m as B1,ma as V,n as _4,na as _,o as G1,oa as k,p as M1,pa as Q1,q as H3,qa as y3,r as b4,ra as b2,s as M3,sa as D4,t as U1,ta as T4,u as D,ua as k4,v as y4,va as R,w as V3,wa as F,x as j1,xa as y2,y as W1,ya as L2,z as T,za as L3}from"./chunk-WYQI53FO.mjs";import{a as U,b as o1}from"./chunk-VVCT4QZE.mjs";var de={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},$4=de;var ue={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},q4=ue;var N2=(()=>{let e=class e{constructor(t){this.httpClient=t,this.url="/api/v1/movies",this.reviewUrl="/api/v1/reviews"}getMovies(){return this.httpClient.get(this.url)}getMovieByImdbId(t){return this.httpClient.get(this.url+"/"+t)}postReview(t){return this.httpClient.post(this.reviewUrl,t)}};e.\u0275fac=function(a){return new(a||e)(J1(I4))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();var D1=(()=>{let e=class e{constructor(t,a){this.httpService=t,this.sanitizer=a,this.movies=V2([]),this.selectedMovie=V2({backdrops:[],genres:[],imdbId:"",poster:"",releaseDate:"",reviewIds:[],title:"",trailerLink:""}),this.embedTrailerLink=M2(()=>{if(this.selectedMovie()){let n=this.getVideoId(this.selectedMovie().trailerLink);return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+n+"?autoplay=1&controls=0&showinfo=0")}return this.sanitizer.bypassSecurityTrustResourceUrl("")}),this.reviewsForSelectedMovie=M2(()=>{let n=this.movies().find(s=>s.imdbId===this.selectedMovie()?.imdbId);return n?n.reviewIds:null})}getMovies(){this.httpService.getMovies().subscribe(t=>{this.movies.set(t)})}getMovie(t){this.httpService.getMovieByImdbId(t).subscribe(a=>{this.selectedMovie.set(a)})}getVideoId(t){return t.substring(t.indexOf("?v=")+3)}};e.\u0275fac=function(a){return new(a||e)(J1(N2),J1(N1))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();function D2(c){c||(L4(D2),c=M(C2));let e=new g2(i=>c.onDestroy(i.next.bind(i)));return i=>i.pipe(D(e))}var a6=(()=>{let e=class e{constructor(t,a){this._renderer=t,this._elementRef=a,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(t,a){this._renderer.setProperty(this._elementRef.nativeElement,t,a)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(a){return new(a||e)(v(q1),v(X))},e.\u0275dir=E({type:e});let c=e;return c})(),me=(()=>{let e=class e extends a6{};e.\u0275fac=(()=>{let t;return function(n){return(t||(t=H2(e)))(n||e)}})(),e.\u0275dir=E({type:e,features:[Z]});let c=e;return c})(),i6=new K("");var pe={provide:i6,useExisting:W1(()=>B2),multi:!0};function ve(){let c=A3()?A3().getUserAgent():"";return/android (\d+)/.test(c.toLowerCase())}var ge=new K(""),B2=(()=>{let e=class e extends a6{constructor(t,a,n){super(t,a),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ve())}writeValue(t){let a=t??"";this.setProperty("value",a)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(a){return new(a||e)(v(q1),v(X),v(ge,8))},e.\u0275dir=E({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(a,n){a&1&&R("input",function(r){return n._handleInput(r.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(r){return n._compositionEnd(r.target.value)})},features:[K1([pe]),Z]});let c=e;return c})();function d1(c){return c==null||(typeof c=="string"||Array.isArray(c))&&c.length===0}function n6(c){return c!=null&&typeof c.length=="number"}var s6=new K(""),r6=new K(""),He=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,k2=class{static min(e){return Me(e)}static max(e){return Ve(e)}static required(e){return ze(e)}static requiredTrue(e){return Ce(e)}static email(e){return _e(e)}static minLength(e){return be(e)}static maxLength(e){return ye(e)}static pattern(e){return Le(e)}static nullValidator(e){return o6(e)}static compose(e){return m6(e)}static composeAsync(e){return p6(e)}};function Me(c){return e=>{if(d1(e.value)||d1(c))return null;let i=parseFloat(e.value);return!isNaN(i)&&i<c?{min:{min:c,actual:e.value}}:null}}function Ve(c){return e=>{if(d1(e.value)||d1(c))return null;let i=parseFloat(e.value);return!isNaN(i)&&i>c?{max:{max:c,actual:e.value}}:null}}function ze(c){return d1(c.value)?{required:!0}:null}function Ce(c){return c.value===!0?null:{required:!0}}function _e(c){return d1(c.value)||He.test(c.value)?null:{email:!0}}function be(c){return e=>d1(e.value)||!n6(e.value)?null:e.value.length<c?{minlength:{requiredLength:c,actualLength:e.value.length}}:null}function ye(c){return e=>n6(e.value)&&e.value.length>c?{maxlength:{requiredLength:c,actualLength:e.value.length}}:null}function Le(c){if(!c)return o6;let e,i;return typeof c=="string"?(i="",c.charAt(0)!=="^"&&(i+="^"),i+=c,c.charAt(c.length-1)!=="$"&&(i+="$"),e=new RegExp(i)):(i=c.toString(),e=c),t=>{if(d1(t.value))return null;let a=t.value;return e.test(a)?null:{pattern:{requiredPattern:i,actualValue:a}}}}function o6(c){return null}function l6(c){return c!=null}function f6(c){return k4(c)?V4(c):c}function h6(c){let e={};return c.forEach(i=>{e=i!=null?U(U({},e),i):e}),Object.keys(e).length===0?null:e}function d6(c,e){return e.map(i=>i(c))}function Se(c){return!c.validate}function u6(c){return c.map(e=>Se(e)?e:i=>e.validate(i))}function m6(c){if(!c)return null;let e=c.filter(l6);return e.length==0?null:function(i){return h6(d6(i,e))}}function k3(c){return c!=null?m6(u6(c)):null}function p6(c){if(!c)return null;let e=c.filter(l6);return e.length==0?null:function(i){let t=d6(i,e).map(f6);return z4(t).pipe(f1(h6))}}function O3(c){return c!=null?p6(u6(c)):null}function K4(c,e){return c===null?[e]:Array.isArray(c)?[...c,e]:[c,e]}function v6(c){return c._rawValidators}function g6(c){return c._rawAsyncValidators}function T3(c){return c?Array.isArray(c)?c:[c]:[]}function O2(c,e){return Array.isArray(c)?c.includes(e):c===e}function X4(c,e){let i=T3(e);return T3(c).forEach(a=>{O2(i,a)||i.push(a)}),i}function Z4(c,e){return T3(e).filter(i=>!O2(c,i))}var E2=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=k3(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=O3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},c2=class extends E2{get formDirective(){return null}get path(){return null}},t2=class extends E2{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R2=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},we={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qc=o1(U({},we),{"[class.ng-submitted]":"isSubmitted"}),H6=(()=>{let e=class e extends R2{constructor(t){super(t)}};e.\u0275fac=function(a){return new(a||e)(v(t2,2))},e.\u0275dir=E({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(a,n){a&2&&c1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[Z]});let c=e;return c})(),M6=(()=>{let e=class e extends R2{constructor(t){super(t)}};e.\u0275fac=function(a){return new(a||e)(v(c2,10))},e.\u0275dir=E({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(a,n){a&2&&c1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[Z]});let c=e;return c})();var X1="VALID",T2="INVALID",T1="PENDING",Z1="DISABLED";function V6(c){return(G2(c)?c.validators:c)||null}function xe(c){return Array.isArray(c)?k3(c):c||null}function z6(c,e){return(G2(e)?e.asyncValidators:c)||null}function Ae(c){return Array.isArray(c)?O3(c):c||null}function G2(c){return c!=null&&!Array.isArray(c)&&typeof c=="object"}function Ne(c,e,i){let t=c.controls;if(!(e?Object.keys(t):t).length)throw new j1(1e3,"");if(!t[i])throw new j1(1001,"")}function De(c,e,i){c._forEachChild((t,a)=>{if(i[a]===void 0)throw new j1(1002,"")})}var F2=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===X1}get invalid(){return this.status===T2}get pending(){return this.status==T1}get disabled(){return this.status===Z1}get enabled(){return this.status!==Z1}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(X4(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(X4(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Z4(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Z4(e,this._rawAsyncValidators))}hasValidator(e){return O2(this._rawValidators,e)}hasAsyncValidator(e){return O2(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=T1,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=Z1,this.errors=null,this._forEachChild(t=>{t.disable(o1(U({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(o1(U({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=X1,this._forEachChild(t=>{t.enable(o1(U({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(o1(U({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===X1||this.status===T1)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Z1:X1}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=T1,this._hasOwnPendingAsyncValidator=!0;let i=f6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((t,a)=>t&&t._find(a),this)}getError(e,i){let t=i?this.get(i):this;return t&&t.errors?t.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new j,this.statusChanges=new j}_calculateStatus(){return this._allControlsDisabled()?Z1:this.errors?T2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(T1)?T1:this._anyControlsHaveStatus(T2)?T2:X1}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){G2(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=xe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ae(this._rawAsyncValidators)}},P2=class extends F2{constructor(e,i,t){super(V6(i),z6(t,i)),this.controls=e,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,i){return this.controls[e]?this.controls[e]:(this.controls[e]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(e,i,t={}){this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(e,i,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],i&&this.registerControl(e,i),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,i={}){De(this,!0,e),Object.keys(e).forEach(t=>{Ne(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(e,i={}){e!=null&&(Object.keys(e).forEach(t=>{let a=this.controls[t];a&&a.patchValue(e[t],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(e={},i={}){this._forEachChild((t,a)=>{t.reset(e?e[a]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(e,i,t)=>(e[t]=i.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(i,t)=>t._syncPendingControls()?!0:i);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(i=>{let t=this.controls[i];t&&e(t,i)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[i,t]of Object.entries(this.controls))if(this.contains(i)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(i,t,a)=>((t.enabled||this.disabled)&&(i[a]=t.value),i))}_reduceChildren(e,i){let t=e;return this._forEachChild((a,n)=>{t=i(t,a,n)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var U2=new K("CallSetDisabledState",{providedIn:"root",factory:()=>j2}),j2="always";function C6(c,e,i=j2){_6(c,e),e.valueAccessor.writeValue(c.value),(c.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(c.disabled),Oe(c,e),Re(c,e),Ee(c,e),Te(c,e)}function e6(c,e,i=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),ke(c,e),c&&(e._invokeOnDestroyCallbacks(),c._registerOnCollectionChange(()=>{}))}function I2(c,e){c.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Te(c,e){if(e.valueAccessor.setDisabledState){let i=t=>{e.valueAccessor.setDisabledState(t)};c.registerOnDisabledChange(i),e._registerOnDestroy(()=>{c._unregisterOnDisabledChange(i)})}}function _6(c,e){let i=v6(c);e.validator!==null?c.setValidators(K4(i,e.validator)):typeof i=="function"&&c.setValidators([i]);let t=g6(c);e.asyncValidator!==null?c.setAsyncValidators(K4(t,e.asyncValidator)):typeof t=="function"&&c.setAsyncValidators([t]);let a=()=>c.updateValueAndValidity();I2(e._rawValidators,a),I2(e._rawAsyncValidators,a)}function ke(c,e){let i=!1;if(c!==null){if(e.validator!==null){let a=v6(c);if(Array.isArray(a)&&a.length>0){let n=a.filter(s=>s!==e.validator);n.length!==a.length&&(i=!0,c.setValidators(n))}}if(e.asyncValidator!==null){let a=g6(c);if(Array.isArray(a)&&a.length>0){let n=a.filter(s=>s!==e.asyncValidator);n.length!==a.length&&(i=!0,c.setAsyncValidators(n))}}}let t=()=>{};return I2(e._rawValidators,t),I2(e._rawAsyncValidators,t),i}function Oe(c,e){e.valueAccessor.registerOnChange(i=>{c._pendingValue=i,c._pendingChange=!0,c._pendingDirty=!0,c.updateOn==="change"&&b6(c,e)})}function Ee(c,e){e.valueAccessor.registerOnTouched(()=>{c._pendingTouched=!0,c.updateOn==="blur"&&c._pendingChange&&b6(c,e),c.updateOn!=="submit"&&c.markAsTouched()})}function b6(c,e){c._pendingDirty&&c.markAsDirty(),c.setValue(c._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(c._pendingValue),c._pendingChange=!1}function Re(c,e){let i=(t,a)=>{e.valueAccessor.writeValue(t),a&&e.viewToModelUpdate(t)};c.registerOnChange(i),e._registerOnDestroy(()=>{c._unregisterOnChange(i)})}function Fe(c,e){c==null,_6(c,e)}function Pe(c,e){if(!c.hasOwnProperty("model"))return!1;let i=c.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Ie(c){return Object.getPrototypeOf(c.constructor)===me}function Be(c,e){c._syncPendingControls(),e.forEach(i=>{let t=i.control;t.updateOn==="submit"&&t._pendingChange&&(i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ge(c,e){if(!e)return null;Array.isArray(e);let i,t,a;return e.forEach(n=>{n.constructor===B2?i=n:Ie(n)?t=n:a=n}),a||t||i||null}var Ue={provide:c2,useExisting:W1(()=>E3)},e2=Promise.resolve(),E3=(()=>{let e=class e extends c2{constructor(t,a,n){super(),this.callSetDisabledState=n,this.submitted=!1,this._directives=new Set,this.ngSubmit=new j,this.form=new P2({},k3(t),O3(a))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){e2.then(()=>{let a=this._findContainer(t.path);t.control=a.registerControl(t.name,t.control),C6(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){e2.then(()=>{let a=this._findContainer(t.path);a&&a.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){e2.then(()=>{let a=this._findContainer(t.path),n=new P2({});Fe(n,t),a.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){e2.then(()=>{let a=this._findContainer(t.path);a&&a.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,a){e2.then(()=>{this.form.get(t.path).setValue(a)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Be(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(a){return new(a||e)(v(s6,10),v(r6,10),v(U2,8))},e.\u0275dir=E({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(a,n){a&1&&R("submit",function(r){return n.onSubmit(r)})("reset",function(){return n.onReset()})},inputs:{options:[x1.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[K1([Ue]),Z]});let c=e;return c})();function c6(c,e){let i=c.indexOf(e);i>-1&&c.splice(i,1)}function t6(c){return typeof c=="object"&&c!==null&&Object.keys(c).length===2&&"value"in c&&"disabled"in c}var y6=class extends F2{constructor(e=null,i,t){super(V6(i),z6(t,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G2(i)&&(i.nonNullable||i.initialValueIsDefault)&&(t6(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){c6(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){c6(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){t6(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var L6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=E({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let c=e;return c})();var S6=new K(""),je={provide:t2,useExisting:W1(()=>R3)},R3=(()=>{let e=class e extends t2{set isDisabled(t){}constructor(t,a,n,s,r){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=r,this.update=new j,this._ngModelWarningSent=!1,this._setValidators(t),this._setAsyncValidators(a),this.valueAccessor=Ge(this,n)}ngOnChanges(t){if(this._isControlChanged(t)){let a=t.form.previousValue;a&&e6(a,this,!1),C6(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Pe(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&e6(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(a){return new(a||e)(v(s6,10),v(r6,10),v(i6,10),v(S6,8),v(U2,8))},e.\u0275dir=E({type:e,selectors:[["","formControl",""]],inputs:{form:[x1.None,"formControl","form"],isDisabled:[x1.None,"disabled","isDisabled"],model:[x1.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[K1([je]),Z,V1]});let c=e;return c})();var w6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var x6=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:U2,useValue:t.callSetDisabledState??j2}]}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({imports:[w6]});let c=e;return c})(),A6=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:S6,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:U2,useValue:t.callSetDisabledState??j2}]}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({imports:[w6]});let c=e;return c})();var Je=["*"];function $e(c,e){if(c&1){let i=Q1();V(0,"button",2),R("click",function(){let n=z1(i).$implicit,s=F();return s.focus(),C1(s.select(n.id,s.NgbSlideEventSource.INDICATOR))}),_()}if(c&2){let i=e.$implicit,t=F();c1("active",i.id===t.activeId),e1("aria-labelledby","slide-"+i.id)("aria-controls","slide-"+i.id)("aria-selected",i.id===t.activeId)}}function qe(c,e){}function Ye(c,e){if(c&1&&(V(0,"div",3)(1,"span",4),b2(2,5),_(),h1(3,qe,0,0,"ng-template",6),_()),c&2){let i=e.$implicit,t=e.$index,a=e.$count;L("id","slide-"+i.id),b(2),D4(t+1)(a),T4(2),b(),L("ngTemplateOutlet",i.templateRef)}}function Qe(c,e){if(c&1){let i=Q1();V(0,"button",7),R("click",function(){z1(i);let a=F();return C1(a.arrowLeft())}),k(1,"span",8),V(2,"span",9),b2(3,10),_()(),V(4,"button",11),R("click",function(){z1(i);let a=F();return C1(a.arrowRight())}),k(5,"span",12),V(6,"span",9),b2(7,13),_()()}if(c&2){let i=F();e1("aria-labelledby",i.id+"-previous"),b(2),L("id",i.id+"-previous"),b(2),e1("aria-labelledby",i.id+"-next"),b(2),L("id",i.id+"-next")}}var Ke=["dialog"];var N6={animation:!0,transitionTimerDelayMs:5},D6=(()=>{let e=class e{constructor(){this.animation=N6.animation}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();function Xe(c){let{transitionDelay:e,transitionDuration:i}=window.getComputedStyle(c),t=parseFloat(e),a=parseFloat(i);return(t+a)*1e3}function T6(c){return typeof c=="string"}function F3(c){return c!=null}function Ze(c){return c&&c.then}function B3(c){return(c||document.body).getBoundingClientRect()}function e8(c){return e=>new g2(i=>{let t=s=>c.run(()=>i.next(s)),a=s=>c.run(()=>i.error(s)),n=()=>c.run(()=>i.complete());return e.subscribe({next:t,error:a,complete:n})})}var c8=()=>{},{transitionTimerDelayMs:t8}=N6,a2=new Map,t1=(c,e,i,t)=>{let a=t.context||{},n=a2.get(e);if(n)switch(t.runningTransition){case"continue":return M4;case"stop":c.run(()=>n.transition$.complete()),a=Object.assign(n.context,a),a2.delete(e)}let s=i(e,t.animation,a)||c8;if(!t.animation||window.getComputedStyle(e).transitionProperty==="none")return c.run(()=>s()),p3(void 0).pipe(e8(c));let r=new q,o=new q,f=r.pipe(b4(!0));a2.set(e,{transition$:r,complete:()=>{o.next(),o.complete()},context:a});let l=Xe(e);return c.runOutsideAngular(()=>{let d=Q(e,"transitionend").pipe(D(f),B1(({target:p})=>p===e)),m=g3(l+t8).pipe(D(f));_4(m,d,o).pipe(D(f)).subscribe(()=>{a2.delete(e),c.run(()=>{s(),r.next(),r.complete()})})}),r.asObservable()},a8=c=>{a2.get(c)?.complete()};var k6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var O6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})(),i8=(()=>{let e=class e{constructor(){this._ngbConfig=M(D6),this.interval=5e3,this.wrap=!0,this.keyboard=!0,this.pauseOnHover=!0,this.pauseOnFocus=!0,this.showNavigationArrows=!0,this.showNavigationIndicators=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),k1=function(c){return c.START="start",c.END="end",c}(k1||{}),E6=({classList:c})=>c.contains("carousel-item-start")||c.contains("carousel-item-end"),n2=c=>{c.remove("carousel-item-start"),c.remove("carousel-item-end")},W2=c=>{n2(c),c.remove("carousel-item-prev"),c.remove("carousel-item-next")},n8=(c,e,{direction:i})=>{let{classList:t}=c;if(!e){n2(t),W2(t),t.add("active");return}return E6(c)?n2(t):(t.add("carousel-item-"+(i===k1.START?"next":"prev")),B3(c),t.add("carousel-item-"+i)),()=>{W2(t),t.add("active")}},s8=(c,e,{direction:i})=>{let{classList:t}=c;if(!e){n2(t),W2(t),t.remove("active");return}return E6(c)?n2(t):t.add("carousel-item-"+i),()=>{W2(t),t.remove("active")}},r8=0,o8=0,G3=(()=>{let e=class e{constructor(){this.templateRef=M(L3),this.id=`ngb-slide-${r8++}`,this.slid=new j}};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=E({type:e,selectors:[["ng-template","ngbSlide",""]],inputs:{id:"id"},outputs:{slid:"slid"},standalone:!0});let c=e;return c})(),R6=(()=>{let e=class e{constructor(){this.NgbSlideEventSource=i2,this._config=M(i8),this._platformId=M(S4),this._ngZone=M(Y1),this._cd=M(z2),this._container=M(X),this._destroyRef=M(C2),this._interval$=new l1(this._config.interval),this._mouseHover$=new l1(!1),this._focused$=new l1(!1),this._pauseOnHover$=new l1(this._config.pauseOnHover),this._pauseOnFocus$=new l1(this._config.pauseOnFocus),this._pause$=new l1(!1),this._wrap$=new l1(this._config.wrap),this.id=`ngb-carousel-${o8++}`,this.animation=this._config.animation,this.keyboard=this._config.keyboard,this.showNavigationArrows=this._config.showNavigationArrows,this.showNavigationIndicators=this._config.showNavigationIndicators,this.slide=new j,this.slid=new j,this._transitionIds=null}set interval(t){this._interval$.next(t)}get interval(){return this._interval$.value}set wrap(t){this._wrap$.next(t)}get wrap(){return this._wrap$.value}set pauseOnHover(t){this._pauseOnHover$.next(t)}get pauseOnHover(){return this._pauseOnHover$.value}set pauseOnFocus(t){this._pauseOnFocus$.next(t)}get pauseOnFocus(){return this._pauseOnFocus$.value}set mouseHover(t){this._mouseHover$.next(t)}get mouseHover(){return this._mouseHover$.value}set focused(t){this._focused$.next(t)}get focused(){return this._focused$.value}arrowLeft(){this.focus(),this.prev(i2.ARROW_LEFT)}arrowRight(){this.focus(),this.next(i2.ARROW_RIGHT)}ngAfterContentInit(){P4(this._platformId)&&this._ngZone.runOutsideAngular(()=>{let t=v3([this.slide.pipe(f1(a=>a.current),M3(this.activeId)),this._wrap$,this.slides.changes.pipe(M3(null))]).pipe(f1(([a,n])=>{let s=this.slides.toArray(),r=this._getSlideIdxById(a);return n?s.length>1:r<s.length-1}),H3());v3([this._pause$,this._pauseOnHover$,this._mouseHover$,this._pauseOnFocus$,this._focused$,this._interval$,t]).pipe(f1(([a,n,s,r,o,f,l])=>a||n&&s||r&&o||!l?0:f),H3(),U1(a=>a>0?g3(a,a):C4),D2(this._destroyRef)).subscribe(()=>this._ngZone.run(()=>this.next(i2.TIMER)))}),this.slides.changes.pipe(D2(this._destroyRef)).subscribe(()=>{this._transitionIds?.forEach(t=>a8(this._getSlideElement(t))),this._transitionIds=null,this._cd.markForCheck(),this._ngZone.onStable.pipe(M1(1)).subscribe(()=>{for(let{id:t}of this.slides){let a=this._getSlideElement(t);t===this.activeId?a.classList.add("active"):a.classList.remove("active")}})})}ngAfterContentChecked(){let t=this._getSlideById(this.activeId);this.activeId=t?t.id:this.slides.length?this.slides.first.id:""}ngAfterViewInit(){if(this.activeId){let t=this._getSlideElement(this.activeId);t&&t.classList.add("active")}}select(t,a){this._cycleToSelected(t,this._getSlideEventDirection(this.activeId,t),a)}prev(t){this._cycleToSelected(this._getPrevSlide(this.activeId),k1.END,t)}next(t){this._cycleToSelected(this._getNextSlide(this.activeId),k1.START,t)}pause(){this._pause$.next(!0)}cycle(){this._pause$.next(!1)}focus(){this._container.nativeElement.focus()}_cycleToSelected(t,a,n){let s=this._transitionIds;if(s&&(s[0]!==t||s[1]!==this.activeId))return;let r=this._getSlideById(t);if(r&&r.id!==this.activeId){this._transitionIds=[this.activeId,t],this.slide.emit({prev:this.activeId,current:r.id,direction:a,paused:this._pause$.value,source:n});let o={animation:this.animation,runningTransition:"stop",context:{direction:a}},f=[],l=this._getSlideById(this.activeId);if(l){let w=t1(this._ngZone,this._getSlideElement(l.id),s8,o);w.subscribe(()=>{l.slid.emit({isShown:!1,direction:a,source:n})}),f.push(w)}let d=this.activeId;this.activeId=r.id;let m=this._getSlideById(this.activeId),p=t1(this._ngZone,this._getSlideElement(r.id),n8,o);p.subscribe(()=>{m?.slid.emit({isShown:!0,direction:a,source:n})}),f.push(p),G1(...f).pipe(M1(1)).subscribe(()=>{this._transitionIds=null,this.slid.emit({prev:d,current:r.id,direction:a,paused:this._pause$.value,source:n})})}this._cd.markForCheck()}_getSlideEventDirection(t,a){let n=this._getSlideIdxById(t),s=this._getSlideIdxById(a);return n>s?k1.END:k1.START}_getSlideById(t){return this.slides.find(a=>a.id===t)||null}_getSlideIdxById(t){let a=this._getSlideById(t);return a!=null?this.slides.toArray().indexOf(a):-1}_getNextSlide(t){let a=this.slides.toArray(),n=this._getSlideIdxById(t);return n===a.length-1?this.wrap?a[0].id:a[a.length-1].id:a[n+1].id}_getPrevSlide(t){let a=this.slides.toArray(),n=this._getSlideIdxById(t);return n===0?this.wrap?a[a.length-1].id:a[0].id:a[n-1].id}_getSlideElement(t){return this._container.nativeElement.querySelector(`#slide-${t}`)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["ngb-carousel"]],contentQueries:function(a,n,s){if(a&1&&O4(s,G3,4),a&2){let r;S3(r=w3())&&(n.slides=r)}},hostAttrs:["tabIndex","0",1,"carousel","slide"],hostVars:3,hostBindings:function(a,n){a&1&&R("keydown.arrowLeft",function(){return n.keyboard&&n.arrowLeft()})("keydown.arrowRight",function(){return n.keyboard&&n.arrowRight()})("mouseenter",function(){return n.mouseHover=!0})("mouseleave",function(){return n.mouseHover=!1})("focusin",function(){return n.focused=!0})("focusout",function(){return n.focused=!1}),a&2&&(e1("aria-activedescendant","slide-"+n.activeId),A4("display","block"))},inputs:{animation:"animation",activeId:"activeId",interval:"interval",wrap:"wrap",keyboard:"keyboard",pauseOnHover:"pauseOnHover",pauseOnFocus:"pauseOnFocus",showNavigationArrows:"showNavigationArrows",showNavigationIndicators:"showNavigationIndicators"},outputs:{slide:"slide",slid:"slid"},exportAs:["ngbCarousel"],standalone:!0,features:[b1],decls:7,vars:3,consts:()=>{let t;t=$localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\uFFFD0\uFFFD"}:INTERPOLATION: of ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;let a;a=$localize`:@@ngb.carousel.previous:Previous`;let n;return n=$localize`:@@ngb.carousel.next:Next`,[["role","tablist",1,"carousel-indicators"],[1,"carousel-inner"],["type","button","data-bs-target","","role","tab",3,"click"],["role","tabpanel",1,"carousel-item",3,"id"],[1,"visually-hidden"],t,[3,"ngTemplateOutlet"],["type","button",1,"carousel-control-prev",3,"click"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden",3,"id"],a,["type","button",1,"carousel-control-next",3,"click"],["aria-hidden","true",1,"carousel-control-next-icon"],n,["type","button","data-bs-target","","role","tab",3,"active"],["class","carousel-item","role","tabpanel",3,"id"]]},template:function(a,n){a&1&&(V(0,"div",0),_3(1,$e,1,5,"button",14,C3),_(),V(3,"div",1),_3(4,Ye,4,4,"div",15,C3),_(),h1(6,Qe,8,4)),a&2&&(c1("visually-hidden",!n.showNavigationIndicators),b(),b3(n.slides),b(3),b3(n.slides),b(2),N4(6,n.showNavigationArrows?6:-1))},dependencies:[F4],encapsulation:2,changeDetection:0});let c=e;return c})(),i2=function(c){return c.TIMER="timer",c.ARROW_LEFT="arrowLeft",c.ARROW_RIGHT="arrowRight",c.INDICATOR="indicator",c}(i2||{}),F6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})(),P6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var U3=function(c){return c[c.Tab=9]="Tab",c[c.Enter=13]="Enter",c[c.Escape=27]="Escape",c[c.Space=32]="Space",c[c.PageUp=33]="PageUp",c[c.PageDown=34]="PageDown",c[c.End=35]="End",c[c.Home=36]="Home",c[c.ArrowLeft=37]="ArrowLeft",c[c.ArrowUp=38]="ArrowUp",c[c.ArrowRight=39]="ArrowRight",c[c.ArrowDown=40]="ArrowDown",c}(U3||{});var Ut=(()=>{let c=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(c()||e()):!1})();var l8=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function I6(c){let e=Array.from(c.querySelectorAll(l8)).filter(i=>i.tabIndex!==-1);return[e[0],e[e.length-1]]}var f8=(c,e,i,t=!1)=>{c.runOutsideAngular(()=>{let a=Q(e,"focusin").pipe(D(i),f1(n=>n.target));Q(e,"keydown").pipe(D(i),B1(n=>n.which===U3.Tab),V3(a)).subscribe(([n,s])=>{let[r,o]=I6(e);(s===r||s===e)&&n.shiftKey&&(o.focus(),n.preventDefault()),s===o&&!n.shiftKey&&(r.focus(),n.preventDefault())}),t&&Q(e,"click").pipe(D(i),V3(a),f1(n=>n[1])).subscribe(n=>n.focus())})};var jt=new Date(1882,10,12),Wt=new Date(2174,10,25);var Jt=1e3*60*60*24;var j3=1080,h8=24*j3,d8=12*j3+793,$t=29*h8+d8,qt=11*j3+204;var B6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var G6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})(),u8=(()=>{let e=class e{constructor(){this._ngbConfig=M(D6),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),O1=class{constructor(e,i,t){this.nodes=e,this.viewRef=i,this.componentRef=t}};var m8=(()=>{let e=class e{constructor(){this._document=M(w2)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),a=this._document.body,n=a.style,{overflow:s,paddingRight:r}=n;if(t>0){let o=parseFloat(window.getComputedStyle(a).paddingRight);n.paddingRight=`${o+t}px`}return n.overflow="hidden",()=>{t>0&&(n.paddingRight=r),n.overflow=s}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),p8=(()=>{let e=class e{constructor(){this._nativeElement=M(X).nativeElement,this._zone=M(Y1)}ngOnInit(){this._zone.onStable.asObservable().pipe(M1(1)).subscribe(()=>{t1(this._zone,this._nativeElement,(t,a)=>{a&&B3(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return t1(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(a,n){a&2&&(_2("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),c1("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[b1],decls:0,vars:0,template:function(a,n){},encapsulation:2});let c=e;return c})(),J2=class{update(e){}close(e){}dismiss(e){}},v8=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],g8=["animation","backdropClass"],P3=class{_applyWindowOptions(e,i){v8.forEach(t=>{F3(i[t])&&(e[t]=i[t])})}_applyBackdropOptions(e,i){g8.forEach(t=>{F3(i[t])&&(e[t]=i[t])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(D(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(D(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,i,t,a){this._windowCmptRef=e,this._contentRef=i,this._backdropCmptRef=t,this._beforeDismiss=a,this._closed=new q,this._dismissed=new q,this._hidden=new q,e.instance.dismissEvent.subscribe(n=>{this.dismiss(n)}),this.result=new Promise((n,s)=>{this._resolve=n,this._reject=s}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let i=this._beforeDismiss();Ze(i)?i.then(t=>{t!==!1&&this._dismiss(e)},()=>{}):i!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),i=this._backdropCmptRef?this._backdropCmptRef.instance.hide():p3(void 0);e.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),i.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),G1(e,i).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},I3=function(c){return c[c.BACKDROP_CLICK=0]="BACKDROP_CLICK",c[c.ESC=1]="ESC",c}(I3||{}),H8=(()=>{let e=class e{constructor(){this._document=M(w2),this._elRef=M(X),this._zone=M(Y1),this._closed$=new q,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new j,this.shown=new q,this.hidden=new q}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":T6(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(M1(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:t}=this._elRef,a={animation:this.animation,runningTransition:"stop"},n=t1(this._zone,t,()=>t.classList.remove("show"),a),s=t1(this._zone,this._dialogEl.nativeElement,()=>{},a),r=G1(n,s);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let t={animation:this.animation,runningTransition:"continue"},a=t1(this._zone,this._elRef.nativeElement,(s,r)=>{r&&B3(s),s.classList.add("show")},t),n=t1(this._zone,this._dialogEl.nativeElement,()=>{},t);G1(a,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{Q(t,"keydown").pipe(D(this._closed$),B1(n=>n.which===U3.Escape)).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(I3.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let a=!1;Q(this._dialogEl.nativeElement,"mousedown").pipe(D(this._closed$),y4(()=>a=!1),U1(()=>Q(t,"mouseup").pipe(D(this._closed$),M1(1))),B1(({target:n})=>t===n)).subscribe(()=>{a=!0}),Q(t,"click").pipe(D(this._closed$)).subscribe(({target:n})=>{t===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!a&&this._zone.run(()=>this.dismiss(I3.BACKDROP_CLICK))),a=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let a=t.querySelector("[ngbAutofocus]"),n=I6(t)[0];(a||n||t).focus()}}_restoreFocus(){let t=this._document.body,a=this._elWithFocus,n;a&&a.focus&&t.contains(a)?n=a:n=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&t1(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(a,n){if(a&1&&E4(Ke,7),a&2){let s;S3(s=w3())&&(n._dialogEl=s.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(a,n){a&2&&(e1("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),_2("modal d-block"+(n.windowClass?" "+n.windowClass:"")),c1("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[b1],ngContentSelectors:Je,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(a,n){a&1&&(y2(),V(0,"div",0,1)(2,"div",2),L2(3),_()()),a&2&&_2("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let c=e;return c})(),M8=(()=>{let e=class e{constructor(){this._applicationRef=M(R4),this._injector=M(A1),this._environmentInjector=M(z3),this._document=M(w2),this._scrollBar=M(m8),this._activeWindowCmptHasChanged=new q,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new j;let t=M(Y1);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let a=this._windowCmpts[this._windowCmpts.length-1];f8(t,a.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(a.location.nativeElement)}})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,a,n){let s=n.container instanceof HTMLElement?n.container:F3(n.container)?this._document.querySelector(n.container):this._document.body;if(!s)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new J2;t=n.injector||t;let o=t.get(z3,null)||this._environmentInjector,f=this._getContentRef(t,o,a,r,n),l=n.backdrop!==!1?this._attachBackdrop(s):void 0,d=this._attachWindowComponent(s,f.nodes),m=new P3(d,f,l,n.beforeDismiss);return this._registerModalRef(m),this._registerWindowCmpt(d),m.hidden.pipe(M1(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=p=>{m.close(p)},r.dismiss=p=>{m.dismiss(p)},r.update=p=>{m.update(p)},m.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),l&&l.instance&&l.changeDetectorRef.detectChanges(),d.changeDetectorRef.detectChanges(),m}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(a=>a.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let a=S2(p8,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(a.hostView),t.appendChild(a.location.nativeElement),a}_attachWindowComponent(t,a){let n=S2(H8,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:a});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_getContentRef(t,a,n,s,r){return n?n instanceof L3?this._createFromTemplateRef(n,s):T6(n)?this._createFromString(n):this._createFromComponent(t,a,n,s,r):new O1([])}_createFromTemplateRef(t,a){let n={$implicit:a,close(r){a.close(r)},dismiss(r){a.dismiss(r)}},s=t.createEmbeddedView(n);return this._applicationRef.attachView(s),new O1([s.rootNodes],s)}_createFromString(t){let a=this._document.createTextNode(`${t}`);return new O1([[a]])}_createFromComponent(t,a,n,s,r){let o=A1.create({providers:[{provide:J2,useValue:s}],parent:t}),f=S2(n,{environmentInjector:a,elementInjector:o}),l=f.location.nativeElement;return r.scrollable&&l.classList.add("component-host-scrollable"),this._applicationRef.attachView(f.hostView),new O1([[l]],f.hostView,f)}_setAriaHidden(t){let a=t.parentElement;a&&t!==this._document.body&&(Array.from(a.children).forEach(n=>{n!==t&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(a))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,a)=>{t?a.setAttribute("aria-hidden",t):a.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){let a=()=>{let n=this._modalRefs.indexOf(t);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(a,a)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{let a=this._windowCmpts.indexOf(t);a>-1&&(this._windowCmpts.splice(a,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),V8=(()=>{let e=class e{constructor(){this._injector=M(A1),this._modalStack=M(M8),this._config=M(u8)}open(t,a={}){let n=U(o1(U({},this._config),{animation:this._config.animation}),a);return this._modalStack.open(this._injector,t,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),U6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({providers:[V8]});let c=e;return c})();var j6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var W6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var J6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var $6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var q6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var Y6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var Q6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var K6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var X6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var Yt=new K("live announcer delay",{providedIn:"root",factory:()=>100});var Z6=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();var e0=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})(),z8=[k6,O6,F6,P6,B6,G6,U6,j6,e0,W6,J6,$6,q6,Y6,Q6,K6,X6,Z6],c0=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({imports:[z8,k6,O6,F6,P6,B6,G6,U6,j6,e0,W6,J6,$6,q6,Y6,Q6,K6,X6,Z6]});let c=e;return c})();function t0(c,e){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),i.push.apply(i,t)}return i}function h(c){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?t0(Object(i),!0).forEach(function(t){S(c,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):t0(Object(i)).forEach(function(t){Object.defineProperty(c,t,Object.getOwnPropertyDescriptor(i,t))})}return c}function i3(c){"@babel/helpers - typeof";return i3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i3(c)}function _8(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function a0(c,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(c,t.key,t)}}function b8(c,e,i){return e&&a0(c.prototype,e),i&&a0(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function S(c,e,i){return e in c?Object.defineProperty(c,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[e]=i,c}function s4(c,e){return L8(c)||w8(c,e)||w0(c,e)||A8()}function m2(c){return y8(c)||S8(c)||w0(c)||x8()}function y8(c){if(Array.isArray(c))return Y3(c)}function L8(c){if(Array.isArray(c))return c}function S8(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function w8(c,e){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var t=[],a=!0,n=!1,s,r;try{for(i=i.call(c);!(a=(s=i.next()).done)&&(t.push(s.value),!(e&&t.length===e));a=!0);}catch(o){n=!0,r=o}finally{try{!a&&i.return!=null&&i.return()}finally{if(n)throw r}}return t}}function w0(c,e){if(c){if(typeof c=="string")return Y3(c,e);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Y3(c,e)}}function Y3(c,e){(e==null||e>c.length)&&(e=c.length);for(var i=0,t=new Array(e);i<e;i++)t[i]=c[i];return t}function x8(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i0=function(){},r4={},x0={},A0=null,N0={mark:i0,measure:i0};try{typeof window<"u"&&(r4=window),typeof document<"u"&&(x0=document),typeof MutationObserver<"u"&&(A0=MutationObserver),typeof performance<"u"&&(N0=performance)}catch{}var N8=r4.navigator||{},n0=N8.userAgent,s0=n0===void 0?"":n0,m1=r4,C=x0,r0=A0,$2=N0,Kt=!!m1.document,s1=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",D0=~s0.indexOf("MSIE")||~s0.indexOf("Trident/"),q2,Y2,Q2,K2,X2,a1="___FONT_AWESOME___",Q3=16,T0="fa",k0="svg-inline--fa",S1="data-fa-i2svg",K3="data-fa-pseudo-element",D8="data-fa-pseudo-element-pending",o4="data-prefix",l4="data-icon",o0="fontawesome-i2svg",T8="async",k8=["HTML","HEAD","STYLE","SCRIPT"],O0=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),z="classic",y="sharp",f4=[z,y];function p2(c){return new Proxy(c,{get:function(i,t){return t in i?i[t]:i[z]}})}var l2=p2((q2={},S(q2,z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(q2,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),q2)),f2=p2((Y2={},S(Y2,z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(Y2,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Y2)),h2=p2((Q2={},S(Q2,z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(Q2,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Q2)),O8=p2((K2={},S(K2,z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(K2,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),K2)),E8=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,E0="fa-layers-text",R8=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,F8=p2((X2={},S(X2,z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(X2,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),X2)),R0=[1,2,3,4,5,6,7,8,9,10],P8=R0.concat([11,12,13,14,15,16,17,18,19,20]),I8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],y1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},d2=new Set;Object.keys(f2[z]).map(d2.add.bind(d2));Object.keys(f2[y]).map(d2.add.bind(d2));var B8=[].concat(f4,m2(d2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",y1.GROUP,y1.SWAP_OPACITY,y1.PRIMARY,y1.SECONDARY]).concat(R0.map(function(c){return"".concat(c,"x")})).concat(P8.map(function(c){return"w-".concat(c)})),r2=m1.FontAwesomeConfig||{};function G8(c){var e=C.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function U8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&(l0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],l0.forEach(function(c){var e=s4(c,2),i=e[0],t=e[1],a=U8(G8(i));a!=null&&(r2[t]=a)}));var l0,F0={styleDefault:"solid",familyDefault:"classic",cssPrefix:T0,replacementClass:k0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};r2.familyPrefix&&(r2.cssPrefix=r2.familyPrefix);var P1=h(h({},F0),r2);P1.autoReplaceSvg||(P1.observeMutations=!1);var u={};Object.keys(F0).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(i){P1[c]=i,o2.forEach(function(t){return t(u)})},get:function(){return P1[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){P1.cssPrefix=e,o2.forEach(function(i){return i(u)})},get:function(){return P1.cssPrefix}});m1.FontAwesomeConfig=u;var o2=[];function j8(c){return o2.push(c),function(){o2.splice(o2.indexOf(c),1)}}var u1=Q3,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W8(c){if(!(!c||!s1)){var e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var i=C.head.childNodes,t=null,a=i.length-1;a>-1;a--){var n=i[a],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(t=n)}return C.head.insertBefore(e,t),c}}var J8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u2(){for(var c=12,e="";c-- >0;)e+=J8[Math.random()*62|0];return e}function I1(c){for(var e=[],i=(c||[]).length>>>0;i--;)e[i]=c[i];return e}function h4(c){return c.classList?I1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function P0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $8(c){return Object.keys(c||{}).reduce(function(e,i){return e+"".concat(i,'="').concat(P0(c[i]),'" ')},"").trim()}function r3(c){return Object.keys(c||{}).reduce(function(e,i){return e+"".concat(i,": ").concat(c[i].trim(),";")},"")}function d4(c){return c.size!==Y.size||c.x!==Y.x||c.y!==Y.y||c.rotate!==Y.rotate||c.flipX||c.flipY}function q8(c){var e=c.transform,i=c.containerWidth,t=c.iconWidth,a={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),r="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(r)},f={transform:"translate(".concat(t/2*-1," -256)")};return{outer:a,inner:o,path:f}}function Y8(c){var e=c.transform,i=c.width,t=i===void 0?Q3:i,a=c.height,n=a===void 0?Q3:a,s=c.startCentered,r=s===void 0?!1:s,o="";return r&&D0?o+="translate(".concat(e.x/u1-t/2,"em, ").concat(e.y/u1-n/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/u1,"em), calc(-50% + ").concat(e.y/u1,"em)) "):o+="translate(".concat(e.x/u1,"em, ").concat(e.y/u1,"em) "),o+="scale(".concat(e.size/u1*(e.flipX?-1:1),", ").concat(e.size/u1*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Q8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function I0(){var c=T0,e=k0,i=u.cssPrefix,t=u.replacementClass,a=Q8;if(i!==c||t!==e){var n=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),r=new RegExp("\\.".concat(e),"g");a=a.replace(n,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(r,".".concat(t))}return a}var f0=!1;function W3(){u.autoAddCss&&!f0&&(W8(I0()),f0=!0)}var K8={mixout:function(){return{dom:{css:I0,insertCss:W3}}},hooks:function(){return{beforeDOMElementCreation:function(){W3()},beforeI2svg:function(){W3()}}}},i1=m1||{};i1[a1]||(i1[a1]={});i1[a1].styles||(i1[a1].styles={});i1[a1].hooks||(i1[a1].hooks={});i1[a1].shims||(i1[a1].shims=[]);var W=i1[a1],B0=[],X8=function c(){C.removeEventListener("DOMContentLoaded",c),n3=1,B0.map(function(e){return e()})},n3=!1;s1&&(n3=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),n3||C.addEventListener("DOMContentLoaded",X8));function Z8(c){s1&&(n3?setTimeout(c,0):B0.push(c))}function v2(c){var e=c.tag,i=c.attributes,t=i===void 0?{}:i,a=c.children,n=a===void 0?[]:a;return typeof c=="string"?P0(c):"<".concat(e," ").concat($8(t),">").concat(n.map(v2).join(""),"</").concat(e,">")}function h0(c,e,i){if(c&&c[e]&&c[e][i])return{prefix:e,iconName:i,icon:c[e][i]}}var e5=function(e,i){return function(t,a,n,s){return e.call(i,t,a,n,s)}},J3=function(e,i,t,a){var n=Object.keys(e),s=n.length,r=a!==void 0?e5(i,a):i,o,f,l;for(t===void 0?(o=1,l=e[n[0]]):(o=0,l=t);o<s;o++)f=n[o],l=r(l,e[f],f,e);return l};function c5(c){for(var e=[],i=0,t=c.length;i<t;){var a=c.charCodeAt(i++);if(a>=55296&&a<=56319&&i<t){var n=c.charCodeAt(i++);(n&64512)==56320?e.push(((a&1023)<<10)+(n&1023)+65536):(e.push(a),i--)}else e.push(a)}return e}function X3(c){var e=c5(c);return e.length===1?e[0].toString(16):null}function t5(c,e){var i=c.length,t=c.charCodeAt(e),a;return t>=55296&&t<=56319&&i>e+1&&(a=c.charCodeAt(e+1),a>=56320&&a<=57343)?(t-55296)*1024+a-56320+65536:t}function d0(c){return Object.keys(c).reduce(function(e,i){var t=c[i],a=!!t.icon;return a?e[t.iconName]=t.icon:e[i]=t,e},{})}function Z3(c,e){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=i.skipHooks,a=t===void 0?!1:t,n=d0(e);typeof W.hooks.addPack=="function"&&!a?W.hooks.addPack(c,d0(e)):W.styles[c]=h(h({},W.styles[c]||{}),n),c==="fas"&&Z3("fa",e)}var Z2,e3,c3,E1=W.styles,a5=W.shims,i5=(Z2={},S(Z2,z,Object.values(h2[z])),S(Z2,y,Object.values(h2[y])),Z2),u4=null,G0={},U0={},j0={},W0={},J0={},n5=(e3={},S(e3,z,Object.keys(l2[z])),S(e3,y,Object.keys(l2[y])),e3);function s5(c){return~B8.indexOf(c)}function r5(c,e){var i=e.split("-"),t=i[0],a=i.slice(1).join("-");return t===c&&a!==""&&!s5(a)?a:null}var $0=function(){var e=function(n){return J3(E1,function(s,r,o){return s[o]=J3(r,n,{}),s},{})};G0=e(function(a,n,s){if(n[3]&&(a[n[3]]=s),n[2]){var r=n[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){a[o.toString(16)]=s})}return a}),U0=e(function(a,n,s){if(a[s]=s,n[2]){var r=n[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){a[o]=s})}return a}),J0=e(function(a,n,s){var r=n[2];return a[s]=s,r.forEach(function(o){a[o]=s}),a});var i="far"in E1||u.autoFetchSvg,t=J3(a5,function(a,n){var s=n[0],r=n[1],o=n[2];return r==="far"&&!i&&(r="fas"),typeof s=="string"&&(a.names[s]={prefix:r,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:r,iconName:o}),a},{names:{},unicodes:{}});j0=t.names,W0=t.unicodes,u4=o3(u.styleDefault,{family:u.familyDefault})};j8(function(c){u4=o3(c.styleDefault,{family:u.familyDefault})});$0();function m4(c,e){return(G0[c]||{})[e]}function o5(c,e){return(U0[c]||{})[e]}function L1(c,e){return(J0[c]||{})[e]}function q0(c){return j0[c]||{prefix:null,iconName:null}}function l5(c){var e=W0[c],i=m4("fas",c);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function p1(){return u4}var p4=function(){return{prefix:null,iconName:null,rest:[]}};function o3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.family,t=i===void 0?z:i,a=l2[t][c],n=f2[t][c]||f2[t][a],s=c in W.styles?c:null;return n||s||null}var u0=(c3={},S(c3,z,Object.keys(h2[z])),S(c3,y,Object.keys(h2[y])),c3);function l3(c){var e,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=i.skipLookups,a=t===void 0?!1:t,n=(e={},S(e,z,"".concat(u.cssPrefix,"-").concat(z)),S(e,y,"".concat(u.cssPrefix,"-").concat(y)),e),s=null,r=z;(c.includes(n[z])||c.some(function(f){return u0[z].includes(f)}))&&(r=z),(c.includes(n[y])||c.some(function(f){return u0[y].includes(f)}))&&(r=y);var o=c.reduce(function(f,l){var d=r5(u.cssPrefix,l);if(E1[l]?(l=i5[r].includes(l)?O8[r][l]:l,s=l,f.prefix=l):n5[r].indexOf(l)>-1?(s=l,f.prefix=o3(l,{family:r})):d?f.iconName=d:l!==u.replacementClass&&l!==n[z]&&l!==n[y]&&f.rest.push(l),!a&&f.prefix&&f.iconName){var m=s==="fa"?q0(f.iconName):{},p=L1(f.prefix,f.iconName);m.prefix&&(s=null),f.iconName=m.iconName||p||f.iconName,f.prefix=m.prefix||f.prefix,f.prefix==="far"&&!E1.far&&E1.fas&&!u.autoFetchSvg&&(f.prefix="fas")}return f},p4());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&r===y&&(E1.fass||u.autoFetchSvg)&&(o.prefix="fass",o.iconName=L1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=p1()||"fas"),o}var f5=function(){function c(){_8(this,c),this.definitions={}}return b8(c,[{key:"add",value:function(){for(var i=this,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(r){i.definitions[r]=h(h({},i.definitions[r]||{}),s[r]),Z3(r,s[r]);var o=h2[z][r];o&&Z3(o,s[r]),$0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,t){var a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(function(n){var s=a[n],r=s.prefix,o=s.iconName,f=s.icon,l=f[2];i[r]||(i[r]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(i[r][d]=f)}),i[r][o]=f}),i}}]),c}(),m0=[],R1={},F1={},h5=Object.keys(F1);function d5(c,e){var i=e.mixoutsTo;return m0=c,R1={},Object.keys(F1).forEach(function(t){h5.indexOf(t)===-1&&delete F1[t]}),m0.forEach(function(t){var a=t.mixout?t.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(i[s]=a[s]),i3(a[s])==="object"&&Object.keys(a[s]).forEach(function(r){i[s]||(i[s]={}),i[s][r]=a[s][r]})}),t.hooks){var n=t.hooks();Object.keys(n).forEach(function(s){R1[s]||(R1[s]=[]),R1[s].push(n[s])})}t.provides&&t.provides(F1)}),i}function e4(c,e){for(var i=arguments.length,t=new Array(i>2?i-2:0),a=2;a<i;a++)t[a-2]=arguments[a];var n=R1[c]||[];return n.forEach(function(s){e=s.apply(null,[e].concat(t))}),e}function w1(c){for(var e=arguments.length,i=new Array(e>1?e-1:0),t=1;t<e;t++)i[t-1]=arguments[t];var a=R1[c]||[];a.forEach(function(n){n.apply(null,i)})}function n1(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return F1[c]?F1[c].apply(null,e):void 0}function c4(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,i=c.prefix||p1();if(e)return e=L1(i,e)||e,h0(Y0.definitions,i,e)||h0(W.styles,i,e)}var Y0=new f5,u5=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,w1("noAuto")},m5={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s1?(w1("beforeI2svg",e),n1("pseudoElements2svg",e),n1("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Z8(function(){v5({autoReplaceSvgRoot:i}),w1("watch",e)})}},p5={icon:function(e){if(e===null)return null;if(i3(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:L1(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var i=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],t=o3(e[0]);return{prefix:t,iconName:L1(t,i)||i}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(E8))){var a=l3(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||p1(),iconName:L1(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var n=p1();return{prefix:n,iconName:L1(n,e)||e}}}},P={noAuto:u5,config:u,dom:m5,parse:p5,library:Y0,findIconDefinition:c4,toHtml:v2},v5=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.autoReplaceSvgRoot,t=i===void 0?C:i;(Object.keys(W.styles).length>0||u.autoFetchSvg)&&s1&&u.autoReplaceSvg&&P.dom.i2svg({node:t})};function f3(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(t){return v2(t)})}}),Object.defineProperty(c,"node",{get:function(){if(s1){var t=C.createElement("div");return t.innerHTML=c.html,t.children}}}),c}function g5(c){var e=c.children,i=c.main,t=c.mask,a=c.attributes,n=c.styles,s=c.transform;if(d4(s)&&i.found&&!t.found){var r=i.width,o=i.height,f={x:r/o/2,y:.5};a.style=r3(h(h({},n),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function H5(c){var e=c.prefix,i=c.iconName,t=c.children,a=c.attributes,n=c.symbol,s=n===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},a),{},{id:s}),children:t}]}]}function v4(c){var e=c.icons,i=e.main,t=e.mask,a=c.prefix,n=c.iconName,s=c.transform,r=c.symbol,o=c.title,f=c.maskId,l=c.titleId,d=c.extra,m=c.watchable,p=m===void 0?!1:m,w=t.found?t:i,I=w.width,G=w.height,J=a==="fak",A=[u.replacementClass,n?"".concat(u.cssPrefix,"-").concat(n):""].filter(function(r1){return d.classes.indexOf(r1)===-1}).filter(function(r1){return r1!==""||!!r1}).concat(d.classes).join(" "),N={children:[],attributes:h(h({},d.attributes),{},{"data-prefix":a,"data-icon":n,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(G)})},$=J&&!~d.classes.indexOf("fa-fw")?{width:"".concat(I/G*16*.0625,"em")}:{};p&&(N.attributes[S1]=""),o&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(l||u2())},children:[o]}),delete N.attributes.title);var O=h(h({},N),{},{prefix:a,iconName:n,main:i,mask:t,maskId:f,transform:s,symbol:r,styles:h(h({},$),d.styles)}),g1=t.found&&i.found?n1("generateAbstractMask",O)||{children:[],attributes:{}}:n1("generateAbstractIcon",O)||{children:[],attributes:{}},H1=g1.children,m3=g1.attributes;return O.children=H1,O.attributes=m3,r?H5(O):g5(O)}function p0(c){var e=c.content,i=c.width,t=c.height,a=c.transform,n=c.title,s=c.extra,r=c.watchable,o=r===void 0?!1:r,f=h(h(h({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(f[S1]="");var l=h({},s.styles);d4(a)&&(l.transform=Y8({transform:a,startCentered:!0,width:i,height:t}),l["-webkit-transform"]=l.transform);var d=r3(l);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),n&&m.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),m}function M5(c){var e=c.content,i=c.title,t=c.extra,a=h(h(h({},t.attributes),i?{title:i}:{}),{},{class:t.classes.join(" ")}),n=r3(t.styles);n.length>0&&(a.style=n);var s=[];return s.push({tag:"span",attributes:a,children:[e]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var $3=W.styles;function t4(c){var e=c[0],i=c[1],t=c.slice(4),a=s4(t,1),n=a[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(y1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(y1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(y1.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:i,icon:s}}var V5={found:!1,width:512,height:512};function z5(c,e){!O0&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function a4(c,e){var i=e;return e==="fa"&&u.styleDefault!==null&&(e=p1()),new Promise(function(t,a){var n={found:!1,width:512,height:512,icon:n1("missingIconAbstract")||{}};if(i==="fa"){var s=q0(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&$3[e]&&$3[e][c]){var r=$3[e][c];return t(t4(r))}z5(c,e),t(h(h({},V5),{},{icon:u.showMissingIcons&&c?n1("missingIconAbstract")||{}:{}}))})}var v0=function(){},i4=u.measurePerformance&&$2&&$2.mark&&$2.measure?$2:{mark:v0,measure:v0},s2='FA "6.5.1"',C5=function(e){return i4.mark("".concat(s2," ").concat(e," begins")),function(){return Q0(e)}},Q0=function(e){i4.mark("".concat(s2," ").concat(e," ends")),i4.measure("".concat(s2," ").concat(e),"".concat(s2," ").concat(e," begins"),"".concat(s2," ").concat(e," ends"))},g4={begin:C5,end:Q0},t3=function(){};function g0(c){var e=c.getAttribute?c.getAttribute(S1):null;return typeof e=="string"}function _5(c){var e=c.getAttribute?c.getAttribute(o4):null,i=c.getAttribute?c.getAttribute(l4):null;return e&&i}function b5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function y5(){if(u.autoReplaceSvg===!0)return a3.replace;var c=a3[u.autoReplaceSvg];return c||a3.replace}function L5(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function S5(c){return C.createElement(c)}function K0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.ceFn,t=i===void 0?c.tag==="svg"?L5:S5:i;if(typeof c=="string")return C.createTextNode(c);var a=t(c.tag);Object.keys(c.attributes||[]).forEach(function(s){a.setAttribute(s,c.attributes[s])});var n=c.children||[];return n.forEach(function(s){a.appendChild(K0(s,{ceFn:t}))}),a}function w5(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var a3={replace:function(e){var i=e[0];if(i.parentNode)if(e[1].forEach(function(a){i.parentNode.insertBefore(K0(a),i)}),i.getAttribute(S1)===null&&u.keepOriginalSource){var t=C.createComment(w5(i));i.parentNode.replaceChild(t,i)}else i.remove()},nest:function(e){var i=e[0],t=e[1];if(~h4(i).indexOf(u.replacementClass))return a3.replace(e);var a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var n=t[0].attributes.class.split(" ").reduce(function(r,o){return o===u.replacementClass||o.match(a)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});t[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var s=t.map(function(r){return v2(r)}).join(`
`);i.setAttribute(S1,""),i.innerHTML=s}};function H0(c){c()}function X0(c,e){var i=typeof e=="function"?e:t3;if(c.length===0)i();else{var t=H0;u.mutateApproach===T8&&(t=m1.requestAnimationFrame||H0),t(function(){var a=y5(),n=g4.begin("mutate");c.map(a),n(),i()})}}var H4=!1;function Z0(){H4=!0}function n4(){H4=!1}var s3=null;function M0(c){if(r0&&u.observeMutations){var e=c.treeCallback,i=e===void 0?t3:e,t=c.nodeCallback,a=t===void 0?t3:t,n=c.pseudoElementsCallback,s=n===void 0?t3:n,r=c.observeMutationsRoot,o=r===void 0?C:r;s3=new r0(function(f){if(!H4){var l=p1();I1(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!g0(d.addedNodes[0])&&(u.searchPseudoElements&&s(d.target),i(d.target)),d.type==="attributes"&&d.target.parentNode&&u.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&g0(d.target)&&~I8.indexOf(d.attributeName))if(d.attributeName==="class"&&_5(d.target)){var m=l3(h4(d.target)),p=m.prefix,w=m.iconName;d.target.setAttribute(o4,p||l),w&&d.target.setAttribute(l4,w)}else b5(d.target)&&a(d.target)})}}),s1&&s3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function x5(){s3&&s3.disconnect()}function A5(c){var e=c.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce(function(t,a){var n=a.split(":"),s=n[0],r=n.slice(1);return s&&r.length>0&&(t[s]=r.join(":").trim()),t},{})),i}function N5(c){var e=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),t=c.innerText!==void 0?c.innerText.trim():"",a=l3(h4(c));return a.prefix||(a.prefix=p1()),e&&i&&(a.prefix=e,a.iconName=i),a.iconName&&a.prefix||(a.prefix&&t.length>0&&(a.iconName=o5(a.prefix,c.innerText)||m4(a.prefix,X3(c.innerText))),!a.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function D5(c){var e=I1(c.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{}),i=c.getAttribute("title"),t=c.getAttribute("data-fa-title-id");return u.autoA11y&&(i?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(t||u2()):(e["aria-hidden"]="true",e.focusable="false")),e}function T5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=N5(c),t=i.iconName,a=i.prefix,n=i.rest,s=D5(c),r=e4("parseNodeAttributes",{},c),o=e.styleParser?A5(c):[];return h({iconName:t,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},r)}var k5=W.styles;function ee(c){var e=u.autoReplaceSvg==="nest"?V0(c,{styleParser:!1}):V0(c);return~e.extra.classes.indexOf(E0)?n1("generateLayersText",c,e):n1("generateSvgReplacementMutation",c,e)}var v1=new Set;f4.map(function(c){v1.add("fa-".concat(c))});Object.keys(l2[z]).map(v1.add.bind(v1));Object.keys(l2[y]).map(v1.add.bind(v1));v1=m2(v1);function z0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s1)return Promise.resolve();var i=C.documentElement.classList,t=function(d){return i.add("".concat(o0,"-").concat(d))},a=function(d){return i.remove("".concat(o0,"-").concat(d))},n=u.autoFetchSvg?v1:f4.map(function(l){return"fa-".concat(l)}).concat(Object.keys(k5));n.includes("fa")||n.push("fa");var s=[".".concat(E0,":not([").concat(S1,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(S1,"])")})).join(", ");if(s.length===0)return Promise.resolve();var r=[];try{r=I1(c.querySelectorAll(s))}catch{}if(r.length>0)t("pending"),a("complete");else return Promise.resolve();var o=g4.begin("onTree"),f=r.reduce(function(l,d){try{var m=ee(d);m&&l.push(m)}catch(p){O0||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,d){Promise.all(f).then(function(m){X0(m,function(){t("active"),t("complete"),a("pending"),typeof e=="function"&&e(),o(),l()})}).catch(function(m){o(),d(m)})})}function O5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ee(c).then(function(i){i&&X0([i],e)})}function E5(c){return function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(e||{}).icon?e:c4(e||{}),a=i.mask;return a&&(a=(a||{}).icon?a:c4(a||{})),c(t,h(h({},i),{},{mask:a}))}}var R5=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=i.transform,a=t===void 0?Y:t,n=i.symbol,s=n===void 0?!1:n,r=i.mask,o=r===void 0?null:r,f=i.maskId,l=f===void 0?null:f,d=i.title,m=d===void 0?null:d,p=i.titleId,w=p===void 0?null:p,I=i.classes,G=I===void 0?[]:I,J=i.attributes,A=J===void 0?{}:J,N=i.styles,$=N===void 0?{}:N;if(e){var O=e.prefix,g1=e.iconName,H1=e.icon;return f3(h({type:"icon"},e),function(){return w1("beforeDOMElementCreation",{iconDefinition:e,params:i}),u.autoA11y&&(m?A["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(w||u2()):(A["aria-hidden"]="true",A.focusable="false")),v4({icons:{main:t4(H1),mask:o?t4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:g1,transform:h(h({},Y),a),symbol:s,title:m,maskId:l,titleId:w,extra:{attributes:A,styles:$,classes:G}})})}},F5={mixout:function(){return{icon:E5(R5)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=z0,i.nodeCallback=O5,i}}},provides:function(e){e.i2svg=function(i){var t=i.node,a=t===void 0?C:t,n=i.callback,s=n===void 0?function(){}:n;return z0(a,s)},e.generateSvgReplacementMutation=function(i,t){var a=t.iconName,n=t.title,s=t.titleId,r=t.prefix,o=t.transform,f=t.symbol,l=t.mask,d=t.maskId,m=t.extra;return new Promise(function(p,w){Promise.all([a4(a,r),l.iconName?a4(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var G=s4(I,2),J=G[0],A=G[1];p([i,v4({icons:{main:J,mask:A},prefix:r,iconName:a,transform:o,symbol:f,maskId:d,title:n,titleId:s,extra:m,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(i){var t=i.children,a=i.attributes,n=i.main,s=i.transform,r=i.styles,o=r3(r);o.length>0&&(a.style=o);var f;return d4(s)&&(f=n1("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),t.push(f||n.icon),{children:t,attributes:a}}}},P5={mixout:function(){return{layer:function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.classes,n=a===void 0?[]:a;return f3({type:"layer"},function(){w1("beforeDOMElementCreation",{assembler:i,params:t});var s=[];return i(function(r){Array.isArray(r)?r.map(function(o){s=s.concat(o.abstract)}):s=s.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(m2(n)).join(" ")},children:s}]})}}}},I5={mixout:function(){return{counter:function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.title,n=a===void 0?null:a,s=t.classes,r=s===void 0?[]:s,o=t.attributes,f=o===void 0?{}:o,l=t.styles,d=l===void 0?{}:l;return f3({type:"counter",content:i},function(){return w1("beforeDOMElementCreation",{content:i,params:t}),M5({content:i.toString(),title:n,extra:{attributes:f,styles:d,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(m2(r))}})})}}}},B5={mixout:function(){return{text:function(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,n=a===void 0?Y:a,s=t.title,r=s===void 0?null:s,o=t.classes,f=o===void 0?[]:o,l=t.attributes,d=l===void 0?{}:l,m=t.styles,p=m===void 0?{}:m;return f3({type:"text",content:i},function(){return w1("beforeDOMElementCreation",{content:i,params:t}),p0({content:i,transform:h(h({},Y),n),title:r,extra:{attributes:d,styles:p,classes:["".concat(u.cssPrefix,"-layers-text")].concat(m2(f))}})})}}},provides:function(e){e.generateLayersText=function(i,t){var a=t.title,n=t.transform,s=t.extra,r=null,o=null;if(D0){var f=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();r=l.width/f,o=l.height/f}return u.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,p0({content:i.innerHTML,width:r,height:o,transform:n,title:a,extra:s,watchable:!0})])}}},G5=new RegExp('"',"ug"),C0=[1105920,1112319];function U5(c){var e=c.replace(G5,""),i=t5(e,0),t=i>=C0[0]&&i<=C0[1],a=e.length===2?e[0]===e[1]:!1;return{value:X3(a?e[0]:e),isSecondary:t||a}}function _0(c,e){var i="".concat(D8).concat(e.replace(":","-"));return new Promise(function(t,a){if(c.getAttribute(i)!==null)return t();var n=I1(c.children),s=n.filter(function(H1){return H1.getAttribute(K3)===e})[0],r=m1.getComputedStyle(c,e),o=r.getPropertyValue("font-family").match(R8),f=r.getPropertyValue("font-weight"),l=r.getPropertyValue("content");if(s&&!o)return c.removeChild(s),t();if(o&&l!=="none"&&l!==""){var d=r.getPropertyValue("content"),m=~["Sharp"].indexOf(o[2])?y:z,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?f2[m][o[2].toLowerCase()]:F8[m][f],w=U5(d),I=w.value,G=w.isSecondary,J=o[0].startsWith("FontAwesome"),A=m4(p,I),N=A;if(J){var $=l5(I);$.iconName&&$.prefix&&(A=$.iconName,p=$.prefix)}if(A&&!G&&(!s||s.getAttribute(o4)!==p||s.getAttribute(l4)!==N)){c.setAttribute(i,N),s&&c.removeChild(s);var O=T5(),g1=O.extra;g1.attributes[K3]=e,a4(A,p).then(function(H1){var m3=v4(h(h({},O),{},{icons:{main:H1,mask:p4()},prefix:p,iconName:N,extra:g1,watchable:!0})),r1=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(r1,c.firstChild):c.appendChild(r1),r1.outerHTML=m3.map(function(he){return v2(he)}).join(`
`),c.removeAttribute(i),t()}).catch(a)}else t()}else t()})}function j5(c){return Promise.all([_0(c,"::before"),_0(c,"::after")])}function W5(c){return c.parentNode!==document.head&&!~k8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(K3)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function b0(c){if(s1)return new Promise(function(e,i){var t=I1(c.querySelectorAll("*")).filter(W5).map(j5),a=g4.begin("searchPseudoElements");Z0(),Promise.all(t).then(function(){a(),n4(),e()}).catch(function(){a(),n4(),i()})})}var J5={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=b0,i}}},provides:function(e){e.pseudoElements2svg=function(i){var t=i.node,a=t===void 0?C:t;u.searchPseudoElements&&b0(a)}}},y0=!1,$5={mixout:function(){return{dom:{unwatch:function(){Z0(),y0=!0}}}},hooks:function(){return{bootstrap:function(){M0(e4("mutationObserverCallbacks",{}))},noAuto:function(){x5()},watch:function(i){var t=i.observeMutationsRoot;y0?n4():M0(e4("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},L0=function(e){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(t,a){var n=a.toLowerCase().split("-"),s=n[0],r=n.slice(1).join("-");if(s&&r==="h")return t.flipX=!0,t;if(s&&r==="v")return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(s){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r;break}return t},i)},q5={mixout:function(){return{parse:{transform:function(i){return L0(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,t){var a=t.getAttribute("data-fa-transform");return a&&(i.transform=L0(a)),i}}},provides:function(e){e.generateAbstractTransformGrouping=function(i){var t=i.main,a=i.transform,n=i.containerWidth,s=i.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(f," ").concat(l)},m={transform:"translate(".concat(s/2*-1," -256)")},p={outer:r,inner:d,path:m};return{tag:"g",attributes:h({},p.outer),children:[{tag:"g",attributes:h({},p.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:h(h({},t.icon.attributes),p.path)}]}]}}}},q3={x:0,y:0,width:"100%",height:"100%"};function S0(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function Y5(c){return c.tag==="g"?c.children:[c]}var Q5={hooks:function(){return{parseNodeAttributes:function(i,t){var a=t.getAttribute("data-fa-mask"),n=a?l3(a.split(" ").map(function(s){return s.trim()})):p4();return n.prefix||(n.prefix=p1()),i.mask=n,i.maskId=t.getAttribute("data-fa-mask-id"),i}}},provides:function(e){e.generateAbstractMask=function(i){var t=i.children,a=i.attributes,n=i.main,s=i.mask,r=i.maskId,o=i.transform,f=n.width,l=n.icon,d=s.width,m=s.icon,p=q8({transform:o,containerWidth:d,iconWidth:f}),w={tag:"rect",attributes:h(h({},q3),{},{fill:"white"})},I=l.children?{children:l.children.map(S0)}:{},G={tag:"g",attributes:h({},p.inner),children:[S0(h({tag:l.tag,attributes:h(h({},l.attributes),p.path)},I))]},J={tag:"g",attributes:h({},p.outer),children:[G]},A="mask-".concat(r||u2()),N="clip-".concat(r||u2()),$={tag:"mask",attributes:h(h({},q3),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,J]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Y5(m)},$]};return t.push(O,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(A,")")},q3)}),{children:t,attributes:a}}}},K5={provides:function(e){var i=!1;m1.matchMedia&&(i=m1.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var t=[],a={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:h(h({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},n),{},{attributeName:"opacity"}),r={tag:"circle",attributes:h(h({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||r.children.push({tag:"animate",attributes:h(h({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),t.push(r),t.push({tag:"path",attributes:h(h({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||t.push({tag:"path",attributes:h(h({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},X5={hooks:function(){return{parseNodeAttributes:function(i,t){var a=t.getAttribute("data-fa-symbol"),n=a===null?!1:a===""?!0:a;return i.symbol=n,i}}}},Z5=[K8,F5,P5,I5,B5,J5,$5,q5,Q5,K5,X5];d5(Z5,{mixoutsTo:P});var Xt=P.noAuto,Zt=P.config,e7=P.library,c7=P.dom,ce=P.parse,t7=P.findIconDefinition,a7=P.toHtml,te=P.icon,i7=P.layer,ec=P.text,cc=P.counter;var tc=["*"],ac=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},ic=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},nc=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(i=>e[i]?i:null).filter(i=>i)},sc=c=>c.prefix!==void 0&&c.iconName!==void 0,rc=(c,e)=>sc(c)?c:typeof c=="string"?{prefix:e,iconName:c}:{prefix:c[0],iconName:c[1]},oc=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),lc=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...t){for(let a of t){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let n of a.icon[2])typeof n=="string"&&(this.definitions[a.prefix][n]=a)}}addIconPacks(...t){for(let a of t){let n=Object.keys(a).map(s=>a[s]);this.addIcons(...n)}}getIconDefinition(t,a){return t in this.definitions&&a in this.definitions[t]?this.definitions[t][a]:null}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),fc=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=E({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[V1]});let c=e;return c})(),hc=(()=>{let e=class e{constructor(t,a){this.renderer=t,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}};e.\u0275fac=function(a){return new(a||e)(v(q1),v(X))},e.\u0275cmp=x({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[V1,b1],ngContentSelectors:tc,decls:1,vars:0,template:function(a,n){a&1&&(y2(),L2(0))},encapsulation:2});let c=e;return c})(),h3=(()=>{let e=class e{set spin(t){this.animation=t?"spin":void 0}set pulse(t){this.animation=t?"spin-pulse":void 0}constructor(t,a,n,s,r){this.sanitizer=t,this.config=a,this.iconLibrary=n,this.stackItem=s,this.classes=[],r!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){ic();return}if(t){let a=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(a);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(t){let a=rc(t,this.config.defaultPrefix);if("icon"in a)return a;let n=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return n??(ac(a),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?ce.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:[...nc(t),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(t,a){let n=te(t,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};e.\u0275fac=function(a){return new(a||e)(v(N1),v(oc),v(lc),v(fc,8),v(hc,8))},e.\u0275cmp=x({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,n){a&2&&(y3("innerHTML",n.renderedIconHTML,w4),e1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[V1,b1],decls:0,vars:0,template:function(a,n){},encapsulation:2});let c=e;return c})();var ae=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({});let c=e;return c})();function uc(c,e){if(c&1){let i=Q1();V(0,"div"),k(1,"img",3),V(2,"div",4)(3,"div"),k(4,"img",5),_(),V(5,"div")(6,"fa-icon",6),R("click",function(){z1(i);let a=F().$implicit,n=F();return C1(n.handlePlayButton(a.imdbId))}),_()(),V(7,"div")(8,"button",7),R("click",function(){z1(i);let a=F().$implicit,n=F();return C1(n.hanldeReviewButton(a.imdbId))}),_1(9," Reviews "),_()()()()}if(c&2){let i=F().$implicit,t=F();b(),L("src",i.backdrops[0],$1)("alt",i.title),b(3),L("src",i.poster,$1),b(2),L("icon",t.faPlayCircle)}}function mc(c,e){c&1&&h1(0,uc,10,4,"ng-template",2)}var ne=(()=>{let e=class e{constructor(t,a){this.movieService=t,this.router=a,this.faPlayCircle=$4,this.interval=2e3,this.pauseOnHover=!0,this.pauseOnFocus=!0,this.movieService.getMovies()}handlePlayButton(t){this.router.navigate(["trailer",t])}hanldeReviewButton(t){this.router.navigate(["review",t])}};e.\u0275fac=function(a){return new(a||e)(v(D1),v(W4))},e.\u0275cmp=x({type:e,selectors:[["app-home"]],decls:2,vars:4,consts:[[3,"interval","pauseOnHover","pauseOnFocus"],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"carousel-img",3,"src","alt"],[1,"movie-details"],[1,"movie-poster-img",3,"src"],[1,"play-button-icon",3,"icon","click"],["type","button",1,"btn","btn-warning","review-btn",3,"click"]],template:function(a,n){a&1&&(V(0,"ngb-carousel",0),h1(1,mc,1,0,null,1),_()),a&2&&(L("interval",n.interval)("pauseOnHover",n.pauseOnHover)("pauseOnFocus",n.pauseOnFocus),b(),L("ngForOf",n.movieService.movies()))},dependencies:[x2,R6,G3,h3],styles:[".carousel-img[_ngcontent-%COMP%]{width:100vw;height:calc(100vh - 56px)}.movie-details[_ngcontent-%COMP%]{position:absolute;bottom:10%;left:10%;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:calc(100vw - 30%)}.movie-poster-img[_ngcontent-%COMP%]{height:300px;width:200px;border:2px solid gold;border-radius:10px}.play-button-icon[_ngcontent-%COMP%]{color:gold;font-size:3rem;transition:.3s;cursor:pointer}.play-button-icon[_ngcontent-%COMP%]:hover{color:#fff;font-size:4rem}.review-btn[_ngcontent-%COMP%]{background-color:gold!important}@media screen and (max-width: 480px){.movie-poster-img[_ngcontent-%COMP%]{height:200px;width:100px}}"]});let c=e;return c})();var se=(()=>{let e=class e{constructor(t,a){this.movieService=t,this.activatedRoute=a;let n=this.activatedRoute.snapshot.paramMap.get("imdbId");n&&this.movieService.getMovie(n)}};e.\u0275fac=function(a){return new(a||e)(v(D1),v(A2))},e.\u0275cmp=x({type:e,selectors:[["app-trailer"]],decls:2,vars:2,consts:[[1,"ratio","ratio-16x9"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src","title"]],template:function(a,n){a&1&&(V(0,"div",0),k(1,"iframe",1),_()),a&2&&(b(),L("src",n.movieService.embedTrailerLink(),x4)("title",n.movieService.selectedMovie().title))}});let c=e;return c})();function pc(c,e){if(c&1&&(V(0,"p"),_1(1),_()),c&2){let i=e.$implicit;b(),x3(" ",i.body," ")}}var re=(()=>{let e=class e{constructor(t,a,n,s){this.movieService=t,this.activatedRoute=a,this.sanitizer=n,this.httpService=s,this.review=new y6("",k2.required);let r=this.activatedRoute.snapshot.paramMap.get("imdbId");r&&this.movieService.getMovie(r)}onSubmitReview(){if(this.review.invalid)return;let t={imdbId:this.movieService.selectedMovie()?.imdbId,reviewBody:this.review.value};this.httpService.postReview(t).pipe(U1(()=>this.httpService.getMovies())).subscribe(a=>{this.movieService.movies.set(a)})}};e.\u0275fac=function(a){return new(a||e)(v(D1),v(A2),v(N1),v(N2))},e.\u0275cmp=x({type:e,selectors:[["app-review"]],decls:13,vars:3,consts:[[1,"review-container"],[1,"trailer-img","img-fluid",3,"src"],[3,"ngSubmit"],[1,"form-floating"],["placeholder","Leave a comment here","id","comments",1,"form-control",3,"formControl"],["for","comments"],["type","submit",1,"btn","btn-outline-primary","mt-2"],[1,"mt-3","text-white"],[4,"ngFor","ngForOf"]],template:function(a,n){a&1&&(V(0,"div",0)(1,"div"),k(2,"img",1),_(),V(3,"div")(4,"form",2),R("ngSubmit",function(){return n.onSubmitReview()}),V(5,"div",3),k(6,"textarea",4),V(7,"label",5),_1(8,"Comments"),_()(),V(9,"button",6),_1(10,"Submit"),_()(),V(11,"div",7),h1(12,pc,2,1,"p",8),_()()()),a&2&&(b(2),L("src",n.sanitizer.bypassSecurityTrustResourceUrl(n.movieService.selectedMovie().poster),$1),b(4),L("formControl",n.review),b(6),L("ngForOf",n.movieService.reviewsForSelectedMovie()))},dependencies:[x2,L6,B2,H6,M6,E3,R3],styles:[".review-container[_ngcontent-%COMP%]{background-color:#000;padding:0 2em;min-height:calc(100vh - 56px);display:flex;justify-content:center;width:100%}.review-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:2em}.trailer-img[_ngcontent-%COMP%]{border-radius:10px;border:2px solid gold;width:320px}@media screen and (max-width: 480px){.review-container[_ngcontent-%COMP%]{flex-direction:column}}"]});let c=e;return c})();var vc=[{path:"",component:ne},{path:"trailer/:imdbId",component:se},{path:"review/:imdbId",component:re}],oe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e}),e.\u0275inj=g({imports:[N3.forRoot(vc),N3]});let c=e;return c})();var le=(()=>{let e=class e{constructor(){this.faHome=q4}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["app-navbar"]],decls:4,vars:1,consts:[[1,"navbar","navbar-expand-lg","bg-dark"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand","text-white"],[3,"icon"]],template:function(a,n){a&1&&(V(0,"nav",0)(1,"div",1)(2,"a",2),k(3,"fa-icon",3),_()()()),a&2&&(b(3),L("icon",n.faHome))},dependencies:[J4,h3]});let c=e;return c})();var u3=(()=>{let e=class e{constructor(){this.title="movie-frontend"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(a,n){a&1&&k(0,"app-navbar")(1,"router-outlet")},dependencies:[j4,le]});let c=e;return c})();var fe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e,bootstrap:[u3]}),e.\u0275inj=g({imports:[G4,oe,c0,ae,B4,x6,A6]});let c=e;return c})();var Hc=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=H({type:e,bootstrap:[u3]}),e.\u0275inj=g({imports:[fe,U4]});let c=e;return c})();export{Hc as a};
