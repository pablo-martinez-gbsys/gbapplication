import { ArticlesResponse } from './articles-response';

export class DomainResponse{
    public status:string;
    public totalResults:number;
    public articles:Array<ArticlesResponse>;
}