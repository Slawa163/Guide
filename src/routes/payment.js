import md5 from 'blueimp-md5';
//import path from 'path';
//const __dirname = path.resolve();
import { envvars } from '$lib/variables';
//import { envvars } from 'path.resolve(__dirname, "./src/lib/variables")';
function signok(data){
	var pstr = '';
    if (data.hasOwnProperty('MNT_ID') && data.hasOwnProperty('MNT_TRANSACTION_ID')
	    && data.hasOwnProperty('MNT_OPERATION_ID') && data.hasOwnProperty('MNT_AMOUNT')
	    && data.hasOwnProperty('MNT_CURRENCY_CODE') && data.hasOwnProperty('MNT_SUBSCRIBER_ID')
	    && data.hasOwnProperty('MNT_TEST_MODE') && data.hasOwnProperty('MNT_SIGNATURE')) {
    	pstr = data['MNT_ID']+data['MNT_TRANSACTION_ID']+data['MNT_OPERATION_ID']
               +data['MNT_AMOUNT']+data['MNT_CURRENCY_CODE']+data['MNT_SUBSCRIBER_ID']
               +data['MNT_TEST_MODE'];
	    return ( md5(pstr+'12345') === data['MNT_SIGNATURE'] );
	} else {
		return false;
   	}; 
};
function getFormBody1(url){
	var data = {};
    let params_arr = url.split('&');  
    for (let i = 0; i < params_arr.length; i++) {
      let pair = params_arr[i].split('=');
      data[pair[0]] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
    };
    return data;
};
function getFormBody2(body) {
    return [...body.entries()].reduce((data, [k, v]) => {
      var value = v;
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      if (k in data)
        data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
      else data[k] = value;
      return data;
    }, {});
};
export async function post(req) {
    var x = 'FAIL';
    var FormData = {};
	const headers = req.headers;
    const [type, ...directives] = headers['content-type'].split(/;\s*/);
	var obj = {};
	if (typeof req.body === 'object')
		obj = JSON.parse(JSON.stringify(req.body));
    else if (typeof req.body === 'string') {
        obj = JSON.parse(req.body);
    };
    if (('type' in obj) && (obj.type === "Buffer") && ('data' in obj)) {
        var bufferOriginal = Buffer.from(req.body);
        var bodystr = bufferOriginal.toString('utf8');
		switch (type) {
		case 'application/json': 
           FormData = JSON.parse(bodystr);
	       break;     
		case 'application/x-www-form-urlencoded': 
	       FormData = getFormBody1(bodystr); 
	       break;     
	    default:
	       FormData = JSON.parse(bodystr);
		};
	} else { 
		switch (type) {
		case 'application/json': 
	       if (typeof req.body === 'object')
	          FormData = req.body;
	       else if (typeof req.body === 'string') {
	          FormData = JSON.parse(req.body);
	       }
	       break;     
		case 'application/x-www-form-urlencoded': 
	       FormData = getFormBody2(req.body); 
	       break;     
	    default:
	       FormData = JSON.parse(req.body);
		};
	};
    if (FormData.hasOwnProperty('email') && FormData.hasOwnProperty('name') && FormData.hasOwnProperty('phone')) {
		const authres = await fetch('https://api.sendpulse.com/oauth/access_token', {
		    method: 'POST',
		    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		    body: JSON.stringify({ "grant_type": "client_credentials","client_id": `${envvars.client_id}`, "client_secret": `${envvars.client_secret}` })
		});
		if (authres.ok) {
		    const {access_token, token_type, expires_in} = await authres.json();  
		    var headersdata = {'Content-Type': 'application/json','Authorization': `Bearer ${access_token}`};
		    var bodydata = { "emails": [ { "email": `${FormData['email']}`, "variables":{ "name": `${FormData['name']}`, "Phone": `${FormData['phone']}` } } ] };
	        const res = await fetch('https://api.sendpulse.com/addressbooks/459247/emails', 
	    	{ 	method: 'POST',
	            headers: headersdata,
	            body: JSON.stringify(bodydata) 
			});
			const result = await res.json();
			if ( result.result )
			    x = 'SUCCESS';
		} else {
		    const err = await authres.json();
	     	return {
				status: authres.status,
				error: err
			}
		};
	} else {
		if (signok(FormData)) {	 	
		    bodydata = { "email": `${FormData['MNT_SUBSCRIBER_ID']}`,
		    "payment":{ 
		    	"sys": "payanyway" ,
		    	"systranid": `${FormData['MNT_ID']}`,
    		    "date": `${FormData['MNT_TRANSACTION_ID']}`, 
   			    "products": ["Путеводитель - 1x1 = 1"],
   			    "amount": `${FormData['MNT_AMOUNT']}`, 
				"operationid": `${FormData['MNT_OPERATION_ID']}`,
		  	    "referer": "https://anyawander.netlify.app/" }
 		    };
	        const res = await fetch('https://events.sendpulse.com/events/id/1f9a13263905453a81bf4db350dd2935/7746610', 
	    	{ 	method: 'POST',
	            headers: { 'Content-Type': 'application/json' },
	            body: JSON.stringify(bodydata) 
			});
			const result = await res.json();
			if (res.ok && (result.result)) {
			    x = 'SUCCESS';
			};			
		};
	};
	return {
//	  	status: res.status,
		status: 200,
	    headers: { 'Content-Type': 'text/html; charset=utf-8' },
	    body : x			
	};
}