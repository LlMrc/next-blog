type User =  {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}


type Post = {
    "userId": string,
    "id": number,
    "title": string,
    "body": string
}

type Photo = {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}