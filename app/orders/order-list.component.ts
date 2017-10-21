import { Component, OnInit } from '@angular/core';
import { IOrderIF } from './orderIF';

@Component ({
    selector: 'kam-order',
    templateUrl: 'app/orders/order-list.component.html',
    styleUrls: ['app/orders/order-list.component.css']
})

export class OrderListComponent implements OnInit {
    orderHeadTxt:string = "Order List";
    showImage:boolean = true;
    imageWidth:number = 70;
    filterTxt:string;
    isGridDisplay:boolean = true;
    isListDisplay:boolean = false;
    //we can use any also in IOrderIF
    orders:IOrderIF[] = [
        {
            "orderId": 1,
            "orderProductName": "Veena",
            "orderCd": "vee-1098",
            "dateOfOrder": "12-Sep-2017",
            "price": 129.99,
            "orderStatus": "Shipped",
            "imageUrl": "http://imageshotfrogmy.blob.core.windows.net/companies/sruthis-muzical/images/sruthis-muzical_10208_image.jpg",
            "review": 4.5
        },
        {
            "orderId": 2,
            "orderProductName": "Flute",
            "orderCd": "Flu-9810",
            "dateOfOrder": "12-Mar-2017",
            "price": 29.99,
            "orderStatus": "Delivered",
            "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/31tiM4peN%2BL.jpg",
            "review": 4.0
        },
        {
            "orderId": 3,
            "orderProductName": "Piano",
            "orderCd": "PIO-1098",
            "dateOfOrder": "22-Oct-2017",
            "price": 139.99,
            "orderStatus": "Processing",
            "imageUrl": "https://static.roland.com/assets/images/products/gallery/v_piano_angle_stand_gal.jpg",
            "review": 3.9
        },
        {
            "orderId": 4,
            "orderProductName": "Guitar",
            "orderCd": "gui-5698",
            "dateOfOrder": "12-Oct-2017",
            "price": 89.99,
            "orderStatus": "Shipped",
            "imageUrl": "https://www.taylorguitars.com/sites/default/files/styles/multi_column_guitar_three/public/responsive-guitar-detail/Taylor-524ce-fr-2016.png?itok=ENjzoiOl",
            "review": 4.1
        },
        {
            "orderId": 5,
            "orderProductName": "Drums",
            "orderCd": "dru-1056",
            "dateOfOrder": "02-Sep-2017",
            "price": 119.99,
            "orderStatus": "Delivered",
            "imageUrl": "http://dreamatico.com/data_images/drum/drum-2.jpg",
            "review": 4.8
        },
        {
            "orderId": 6,
            "orderProductName": "Violin",
            "orderCd": "vio-9298",
            "dateOfOrder": "12-Oct-2017",
            "price": 99.99,
            "orderStatus": "Processing",
            "imageUrl": "https://images-eu.ssl-images-amazon.com/images/I/71LkML0SXML.png",
            "review": 3.5
        }
    ]
    toggleImages() : void {
        this.showImage = !this.showImage;
    }
    toggleTable(a:string) : void {
        this.isListDisplay = (this.isGridDisplay = (a == "grid") ? true: false) ? false : true; 
        console.log("fff" + a);
        console.log("fffsss" + this.isGridDisplay);
        console.log("hhhhf" + this.isListDisplay);
    }
    ngOnInit() : void {
        console.log("******** ngOnInit *********");
    }
}