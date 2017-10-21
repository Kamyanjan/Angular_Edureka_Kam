"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderQualityPipe = /** @class */ (function () {
    function OrderQualityPipe() {
    }
    OrderQualityPipe.prototype.transform = function (value, review) {
        var quality = review > 4 ? "Excellent" : "Good";
        return quality;
    };
    OrderQualityPipe = __decorate([
        core_1.Pipe({
            name: 'pipeForReviewTheProduct'
        })
    ], OrderQualityPipe);
    return OrderQualityPipe;
}());
exports.OrderQualityPipe = OrderQualityPipe;
//# sourceMappingURL=order-quality.pipe.js.map