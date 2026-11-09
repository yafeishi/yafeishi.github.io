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
    var url="${HIT_ENDPOINT}";
    var ok=false;
    try{
      if(navigator.sendBeacon){
        ok=navigator.sendBeacon(url, new Blob([payload],{type:"text/plain;charset=UTF-8"}));
      }
    }catch(e){ok=false;}
    if(!ok){
      fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body:payload,keepalive:true,mode:"cors",credentials:"omit"}).catch(function(){});
    }
  }catch(e){}
})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
