export type Movie = {
    id?:number | string;
    backdrop_path:string;
    genres?:[{id:number, name:string}];
    original_language?:string;
    original_title?:string;
    popularity?:number;
    poster_path:string;
    release_date:string;
    title:string;
    vote_average:number;
    vote_count:number;
    adult?:boolean;
    video?:boolean;
    overview?:string;
    runtime?:number;
    budget?:number;
    revenue?:number;
    imdb_id?:string;
}