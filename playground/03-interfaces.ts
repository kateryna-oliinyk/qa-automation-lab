interface Booking {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    additionalneeds?: string;
}

const booking: Booking = JSON.parse('{"firstname": "Jim", "lastname": "Brown"}');
console.log(booking.firstname); 
console.log(booking.totalprice.toFixed(2));