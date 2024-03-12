self._request=self._fetch=self.fetch;
self.onfetch=e=>e.respondWith(_request(e.request,e));
let u=self.param||(self.param=new URL(location).searchParams)
,{k='/scripts/def.js',a=1,b=1,token='JkH75nz534ET68YzNEHirc6b4sXHr6Z5',p='65edb5191f84ad45e4517da1'}=Object.fromEntries([...u])
,items=k=>k.length?fetch('https://community-web-cloud-database.ccw.site/cloud_variable/list',{
headers:{
  a,b,token,
  accept:'application/json, text/plain, *\x2f*',
  'accept-language':'zh-CN,zh;q=0.9',
  'content-type':'application/json',
},method:'POST',mode:'cors',credentials:'omit',
body:JSON.stringify({accessKey:p,primaryKey:p,secondaryKeys:k,filterKeys:[]})
}).then(r=>r.json()):Promise.resolve({body:{},code:200})
,btobin=b=>new Uint8Array(b.length).map((a,i)=>b.charCodeAt(i))
,bintob=b=>Array.from(b,n=>String.fromCharCode(n)).join('')
,ks=Array.from({length:50},(a,i)=>'file-c-'+k+'-'+i),td=new TextDecoder
;ks[48]='file-s-'+k,ks[49]='file-h-'+k,crypto.subtle.importKey('jwk',{
  e:'AQAB',kty:'RSA',
  n:'yIlPJDkyaXNv1ykv0KG9-7_VOKF1YicTmKryG3PuVUtY1M3MLYjIWmLs02qtTkvfkMfix4e4mtN2YIRUTJqHmP87k7UdnJ3fHi6rzBz8lLbcqeYzARoZzja0RBbl3So9npeudgYfxnLQ_jeddS7vWyshOVsQkpfQb-H-XCq4bIE'
},{name:'RSASSA-PKCS1-v1_5',hash:'SHA-256'},!0,['verify'])
.then(k=>items(ks).then(o=>{
  var raw=ks.map(k=>atob(o.body[k].v||'')),bin,h=btobin(raw.pop()),s=btobin(raw.pop())
  crypto.subtle.verify('RSASSA-PKCS1-v1_5',k,s,h)
  .then(s=>s||confirm('文件签名错误，页面可能不安全。\n继续访问？')).then(s=>{if(!s)throw new Error('文件签名错误')})
  .then(()=>JSON.parse(td.decode(h))).then(
    meta=>crypto.subtle.verify('RSASSA-PKCS1-v1_5',k,btobin(atob(meta['content-sign']||'')),bin=btobin(raw.slice(0,-~raw.indexOf('')).join('')))
    .then(s=>s||confirm('文件签名错误，页面可能不安全。\n继续访问？')).then(s=>{if(!s)throw new Error('脚本签名错误')})
    .then(()=>td.decode(bin)).then(eval)
  )
}))
