import { ArticlesResponse } from './articles-response';

export class BitcoinNewsResponse{
    public status:string;
    public totalResults:number;
    public articles:Array<ArticlesResponse>;
}