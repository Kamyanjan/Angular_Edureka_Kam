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
        this.orders = [
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
        ];
    }
    OrderListComponent.prototype.toggleImages = function () {
        this.showImage = !this.showImage;
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