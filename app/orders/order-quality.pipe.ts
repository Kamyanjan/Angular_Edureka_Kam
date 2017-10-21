import { Pipe, PipeTransform } from '@angular/core';
import { IOrderIF} from './orderIF';

@Pipe ({
    name: 'pipeForReviewTheProduct'
})

export class OrderQualityPipe implements PipeTransform {
    transform(value:any[], review:number):string {
        var quality  = review > 4 ? "Excellent": "Good";
        return quality;
    }
}