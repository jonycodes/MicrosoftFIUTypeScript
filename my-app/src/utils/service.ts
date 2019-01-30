import { host, path, configs } from '.\config.ts'
import request from 'request-promise'

class Service {
  private const uri = host + "/" + path + "/" + configs; 
  private azureKey:string;
  
  constructor(key) {
    this.azureKey = key;
  }

  async function checkSpelling(string phrase): void {
    var options = {
        method : 'POST',
        uri : this.uri,
        headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' : phrase.length + 5,
        'Ocp-Apim-Subscription-Key' : this.azureKey,
//        'X-Search-Location' : CLIENT_LOCATION,
//        'X-MSEdge-ClientID' : CLIENT_ID,
//        'X-MSEdge-ClientIP' : CLIENT_ID,
        },
        body: "text=" + phrase
    };
    
    try {
      var response = await request(options);
    } catch (error) {
      console.log(error);
    }
  }
}
