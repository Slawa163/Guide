function todata(params){
    var data = {};
    var params_arr = params.split('&');  
    for (let i = 0; i < params_arr.length; i++) {
      var pair = params_arr[i].split('=');
      data[pair[0]] = pair[1].toString();
    };
    return data;
  }; 
export async function get({ params }) { 
  var x = 'FAIL'; 
  const { host, url } = params;
  const Data = todata(url);
  var protocol = 'https://';
  if (host.substring(0,9) === 'localhost') 
      protocol = 'http://';
  const res = await fetch(protocol+host+'/payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Data)
  });
  const result = await res.text();
  if (res.ok && (result === 'SUCCESS')) {
    x = 'SUCCESS';
  }; 
  return {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' }, 
    body: x
  }
};     