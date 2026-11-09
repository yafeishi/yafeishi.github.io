/** Lightweight pageview beacon to self-hosted hit.danghb.cn (no cookies, no third party). */
const HIT_ENDPOINT = "https://hit.danghb.cn/pv";

export function VisitBeacon() {
  const script = `
(function(){
  try{
    if(window.__hobsonHitSent) return;
    window.__hobsonHitSent=1;
    var path=location.pathname||"/";
    var payload=JSON.stringify({path:path,referrer:document.referrer||""});
    if(navigator.sendBeacon){
      navigator.sendBeacon("${HIT_ENDPOINT}", new Blob([payload],{type:"application/json"}));
    }else{
      fetch("${HIT_ENDPOINT}",{method:"POST",headers:{"Content-Type":"application/json"},body:payload,keepalive:true,mode:"cors",credentials:"omit"}).catch(function(){});
    }
  }catch(e){}
})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
