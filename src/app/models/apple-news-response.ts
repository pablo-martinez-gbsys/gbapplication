import { ArticlesResponse } from './articles-response';

export class AppleNewsResponse{
    public status:string;
    public totalResults:number;
    public articles:Array<ArticlesResponse>;
}