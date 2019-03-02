import { ArticlesResponse } from './articles-response';

export class TopBusinessResponse{
    public status:string;
    public totalResults:number;
    public articles:Array<ArticlesResponse>;
}
