import { Pipe, PipeTransform } from '@angular/core';
import { IOrderIF} from './orderIF';

@Pipe ({
    name: 'pipeForFilter'
})

export class OrderFilterPipe implements PipeTransform{
    transform(value:IOrderIF[], filteredby:string):IOrderIF[]{
        filteredby = filteredby ? filteredby.toLocaleLowerCase(): null;
        return filteredby ? value.filter((order:IOrderIF) => 
            order.orderProductName.toLocaleLowerCase().indexOf(filteredby) !== -1):value;
    }
}