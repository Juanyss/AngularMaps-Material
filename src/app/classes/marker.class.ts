// export class Mark{
//     constructor (public lat:number, public lng:number){

//     }
// }

export class Mark{
    lat:number;
    lng:number;

    title = 'No title';
    desc = 'No description'

    constructor(lat:number, lng:number){
        this.lat = lat;
        this.lng = lng;
    }
}