import { Subject } from 'rxjs';
import { Button } from './button';
import { ButtonGroupConfig } from './button-group-config';

export class ButtonGroupInstance {

    public name: string;
    public config: ButtonGroupConfig;
    public click$?: Subject<Button> = new Subject();

    public constructor(instance: ButtonGroupInstance) {

        Object.assign(this, instance);

    }

}
