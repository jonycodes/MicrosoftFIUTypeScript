import request from 'request-promise'
import { Config } from './config';

export class Service {
  private uri = Config.host + "/" + Config.path + "/" + Config.configs; 
  private azureKey:string;
  
  constructor(key: string) {
    this.azureKey = key;
  }

  public async checkSpelling(phrase: string): Promise<void> {
    const options = {
        method : 'POST',
        uri : this.uri,
        // tslint:disable-next-line:object-literal-sort-keys
        headers : {
        'Content-Length' : phrase.length + 5,
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Ocp-Apim-Subscription-Key' : this.azureKey,
//        'X-Search-Location' : CLIENT_LOCATION,
//        'X-MSEdge-ClientID' : CLIENT_ID,
//        'X-MSEdge-ClientIP' : CLIENT_ID,
        },
        body: "text=" + phrase
    };
    
    try {
      return await request(options);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  }
}
