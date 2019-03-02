import { SourceResponse } from './source-response';

export class ArticlesResponse{
    public source: SourceResponse;
    public author:string;
    public title:string;
    public description:string;
    public url:string;
    public urlToImage:string;
    public publishedAt:Date;
    public content:string;
}