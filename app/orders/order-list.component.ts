import { Component } from '@angular/core';

@Component ({
    selector: 'kam-order',
    templateUrl: 'app/orders/order-list.component.html',
    styleUrls: ['app/orders/order-list.component.css']
})

export class OrderListComponent {
    orderHeadTxt:string = "Order List";
    showImage:boolean = true;
    imageWidth:number = 70;
    orders:any[] = [
        {
            "orderId": 1,
            "orderProductName": "Veena",
            "dateOfOrder": "12-Sep-2017",
            "price": "129.99",
            "orderStatus": "Shipped",
            "imageUrl": "http://imageshotfrogmy.blob.core.windows.net/companies/sruthis-muzical/images/sruthis-muzical_10208_image.jpg"
        },
        {
            "orderId": 2,
            "orderProductName": "Flute",
            "dateOfOrder": "12-March-2017",
            "price": "29.99",
            "orderStatus": "Delivered",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/31tiM4peN%2BL.jpg"
        },
        {
            "orderId": 3,
            "orderProductName": "Violin",
            "dateOfOrder": "12-Oct-2017",
            "price": "99.99",
            "orderStatus": "Processing",
            "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71LkML0SXML.png"
        }
    ]
    toggleImages() : void {
        this.showImage = !this.showImage;
    }
}