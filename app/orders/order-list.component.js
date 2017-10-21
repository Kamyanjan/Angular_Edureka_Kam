"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent() {
        this.orderHeadTxt = "Order List";
        this.showImage = true;
        this.imageWidth = 70;
        this.isGridDisplay = true;
        this.isListDisplay = false;
        //we can use any also in IOrderIF
        this.orders = [
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
        ];
    }
    OrderListComponent.prototype.toggleImages = function () {
        this.showImage = !this.showImage;
    };
    OrderListComponent.prototype.toggleTable = function (a) {
        this.isListDisplay = (this.isGridDisplay = (a == "grid") ? true : false) ? false : true;
        console.log("fff" + a);
        console.log("fffsss" + this.isGridDisplay);
        console.log("hhhhf" + this.isListDisplay);
    };
    OrderListComponent.prototype.ngOnInit = function () {
        console.log("******** ngOnInit *********");
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'kam-order',
            templateUrl: 'app/orders/order-list.component.html',
            styleUrls: ['app/orders/order-list.component.css']
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map