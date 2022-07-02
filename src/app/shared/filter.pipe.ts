import {Pipe, PipeTransform} from "@angular/core";

/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any[], q: any) {
        if (!q || q === '') {
            return value;
        }
        return value.filter(item => -1 < item.username.toLowerCase().indexOf(q.toLowerCase()));
    }
}